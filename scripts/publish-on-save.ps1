$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$repoPrefix = $repoRoot.TrimEnd("\") + "\"
$sitePaths = @("index.html", "app.js", "auth-config.js", "styles.css", "SUPABASE_SETUP.md", "images", "supabase")

function Write-PublishStatus {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Message
  )

  Write-Host "AUTO-PUBLISH: $Message"
}

function Invoke-Git {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Arguments
  )

  $output = @(& git -C $repoRoot @Arguments 2>&1 | ForEach-Object { "$_" })
  [pscustomobject]@{
    ExitCode = $LASTEXITCODE
    Output   = $output
  }
}

function Test-WebsitePath {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Path
  )

  if (-not $Path.StartsWith($repoPrefix, [StringComparison]::OrdinalIgnoreCase)) {
    return $false
  }

  $relativePath = $Path.Substring($repoPrefix.Length).Replace("/", "\")
  foreach ($sitePath in $sitePaths) {
    if ($relativePath.Equals($sitePath, [StringComparison]::OrdinalIgnoreCase)) {
      return $true
    }

    if (
      ($sitePath -eq "images" -or $sitePath -eq "supabase") -and
      $relativePath.StartsWith("$sitePath\", [StringComparison]::OrdinalIgnoreCase)
    ) {
      return $true
    }
  }

  return $false
}

function Get-ScopedPaths {
  $result = Invoke-Git -Arguments (@("status", "--porcelain", "--untracked-files=all", "--") + $sitePaths)
  if ($result.ExitCode -ne 0) {
    throw "Tidak dapat membaca status Git: $($result.Output -join ' ')"
  }
  return $result.Output
}

function Get-WebsiteSnapshot {
  $fileStates = @()
  foreach ($sitePath in $sitePaths) {
    $fullPath = Join-Path $repoRoot $sitePath
    if (Test-Path -LiteralPath $fullPath -PathType Leaf) {
      $file = Get-Item -LiteralPath $fullPath
      $fileStates += "$sitePath|$($file.Length)|$($file.LastWriteTimeUtc.Ticks)"
    } elseif (Test-Path -LiteralPath $fullPath -PathType Container) {
      $files = Get-ChildItem -LiteralPath $fullPath -File -Force -Recurse
      foreach ($file in $files) {
        $relativePath = $file.FullName.Substring($repoPrefix.Length).Replace("\", "/")
        $fileStates += "$relativePath|$($file.Length)|$($file.LastWriteTimeUtc.Ticks)"
      }
    }
  }

  $status = @(Get-ScopedPaths)
  return [string]::Join("`n", @($status) + @($fileStates))
}

function Publish-WebsiteChanges {
  try {
    $branch = Invoke-Git -Arguments @("branch", "--show-current")
    if ($branch.ExitCode -ne 0 -or $branch.Output.Count -eq 0) {
      throw "Tidak dapat menentukan branch Git saat ini."
    }
    if ($branch.Output[0].Trim() -ne "main") {
      throw "Branch saat ini '$($branch.Output[0].Trim())', bukan 'main'. Pindah ke main sebelum auto-publish."
    }

    $allStagedPaths = Invoke-Git -Arguments @("diff", "--cached", "--name-only")
    if ($allStagedPaths.ExitCode -ne 0) {
      throw "Tidak dapat memeriksa file Git yang sudah di-stage."
    }
    $unrelatedStagedPaths = @($allStagedPaths.Output | Where-Object { -not (Test-WebsitePath -Path (Join-Path $repoPrefix $_)) })
    if ($unrelatedStagedPaths.Count -gt 0) {
      throw "Ada file di luar situs yang sudah di-stage. Tidak ada perubahan yang dikirim: $($unrelatedStagedPaths -join ', ')."
    }

    $status = Get-ScopedPaths
    if ($status.Count -eq 0) {
      return
    }

    $add = Invoke-Git -Arguments (@("add", "--") + $sitePaths)
    if ($add.ExitCode -ne 0) {
      throw "Gagal menyiapkan file situs untuk Git: $($add.Output -join ' ')"
    }

    $allStagedPaths = Invoke-Git -Arguments @("diff", "--cached", "--name-only")
    if ($allStagedPaths.ExitCode -ne 0) {
      throw "Tidak dapat memeriksa file Git yang sudah di-stage."
    }
    $unrelatedStagedPaths = @($allStagedPaths.Output | Where-Object { -not (Test-WebsitePath -Path (Join-Path $repoPrefix $_)) })
    if ($unrelatedStagedPaths.Count -gt 0) {
      throw "Ada file di luar situs yang sudah di-stage. Tidak ada perubahan yang dikirim: $($unrelatedStagedPaths -join ', ')."
    }

    $stagedDiff = Invoke-Git -Arguments @("diff", "--cached", "--unified=0", "--")
    if ($stagedDiff.ExitCode -ne 0) {
      throw "Tidak dapat memeriksa perubahan yang akan dipublikasikan."
    }

    $secretPatterns = @(
      '(?i)sb_secret_[A-Za-z0-9_-]{10,}',
      '(?i)gh[pousr]_[A-Za-z0-9_]{20,}',
      '(?i)github_pat_[A-Za-z0-9_]{20,}',
      '(?i)GOCSPX-[A-Za-z0-9_-]{20,}',
      '-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----',
      '(?i)(client_secret|service_role)\s*[:=]\s*[A-Za-z0-9_-]{20,}'
    )
    $addedLines = @($stagedDiff.Output | Where-Object { $_ -match '^\+(?!\+)' })
    foreach ($line in $addedLines) {
      foreach ($pattern in $secretPatterns) {
        if ($line -match $pattern) {
          throw "Pola yang mirip secret terdeteksi. Tidak ada perubahan yang di-commit atau dikirim. Hapus rahasia dari file; jangan menyimpannya di frontend."
        }
      }
    }

    $whitespaceCheck = Invoke-Git -Arguments (@("diff", "--cached", "--check", "--") + $sitePaths)
    if ($whitespaceCheck.ExitCode -ne 0) {
      throw "Pemeriksaan Git menemukan masalah whitespace. Perbaiki sebelum auto-publish: $($whitespaceCheck.Output -join ' ')"
    }

    $stagedWebsitePaths = Invoke-Git -Arguments (@("diff", "--cached", "--name-only", "--") + $sitePaths)
    if ($stagedWebsitePaths.ExitCode -ne 0) {
      throw "Tidak dapat memastikan perubahan situs yang siap dipublikasikan."
    }
    if ($stagedWebsitePaths.Output.Count -eq 0) {
      return
    }

    $commit = Invoke-Git -Arguments @(
      "commit",
      "-m",
      "Update website",
      "-m",
      "Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>"
    )
    if ($commit.ExitCode -ne 0) {
      throw "Git gagal membuat commit: $($commit.Output -join ' ')"
    }

    Write-PublishStatus "Commit dibuat; mengirim perubahan ke GitHub main."
    $push = Invoke-Git -Arguments @("push", "origin", "main")
    if ($push.ExitCode -ne 0) {
      throw "Push gagal. Commit tetap tersimpan lokal. Periksa koneksi/konflik Git lalu jalankan 'git push origin main'. Detail: $($push.Output -join ' ')"
    }

    Write-PublishStatus "Perubahan terkirim. Vercel akan memulai deployment otomatis."
  } catch {
    Write-PublishStatus ("GAGAL - " + $_.Exception.Message)
  }
}

Write-PublishStatus "Watcher aktif. Menunggu perubahan file situs."

$lastChange = $null
$snapshot = Get-WebsiteSnapshot
if ((Get-ScopedPaths).Count -gt 0) {
  Write-PublishStatus "Perubahan situs yang sudah ada akan diproses setelah jeda."
  $lastChange = Get-Date
}

try {
  while ($true) {
    Start-Sleep -Seconds 1
    $currentSnapshot = Get-WebsiteSnapshot
    if ($currentSnapshot -ne $snapshot) {
      $snapshot = $currentSnapshot
      if ((Get-ScopedPaths).Count -gt 0) {
        $lastChange = Get-Date
      } else {
        $lastChange = $null
      }
    }

    if ($lastChange -and ((Get-Date) - $lastChange).TotalSeconds -ge 5) {
      $lastChange = $null
      Publish-WebsiteChanges
      $snapshot = Get-WebsiteSnapshot
    }
  }
} finally {
  Write-PublishStatus "Watcher dihentikan."
}
