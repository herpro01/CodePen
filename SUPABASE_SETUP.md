# Mengaktifkan akun CodeKita

Fitur akun dan database project memakai Supabase Auth, Database, serta REST API yang dihasilkan Supabase. Pengguna membuat akun anonim dengan nama dan tanggal lahir saja; sesi akun disimpan di browser/perangkat tersebut. Akun tidak dapat dipulihkan atau digunakan dari perangkat lain jika data browser hilang. Nama dan tanggal lahir bukan kredensial atau verifikasi identitas.

## 1. Buat project Supabase dan tabel profil

1. Buat project di [Supabase](https://supabase.com/dashboard).
2. Buka **SQL Editor**, lalu jalankan seluruh isi [`supabase/profiles.sql`](./supabase/profiles.sql). Jika sudah pernah menjalankan versi sebelumnya, jalankan skrip lengkap lagi untuk membuat tabel project dan bucket foto profil.
3. Pastikan tabel `public.profiles` dan `public.projects` tersedia, bucket privat `profile-avatars` dibuat, serta Row Level Security aktif. Kebijakan pada skrip membatasi profil, project, dan foto ke akun pemilik.

## 2. Atur kredensial publik aplikasi

1. Di dashboard Supabase, buka **Project Settings → API**.
2. Salin **Project URL** dan **publishable key** (atau legacy `anon` key). Gunakan Project URL saja, misalnya `https://<project-ref>.supabase.co`; jangan tempelkan `/rest/v1/` di akhir.
3. Nilai project saat ini sudah diisi di [`auth-config.js`](./auth-config.js). File itu hanya memuat Project URL dan publishable key untuk frontend.

Klien Supabase di browser menggunakan REST API project secara langsung. Hanya URL project dan publishable/anon key yang boleh dipakai di sana. **Jangan pernah memasukkan `service_role` key atau rahasia lainnya ke file aplikasi, repository, atau browser.**

## 3. Aktifkan akun anonim

1. Di dashboard Supabase, buka **Authentication → Sign In / Providers** (nama menu dapat berubah).
2. Aktifkan **Allow anonymous sign-ins** / **Anonymous Sign-Ins**.
3. Pertimbangkan mengaktifkan CAPTCHA dan batas penggunaan untuk mengurangi pembuatan akun otomatis berlebihan.

## 4. Jalankan dan uji

Jalankan situs melalui server lokal, misalnya **Live Server** di VS Code. Pendaftaran akun tidak bekerja saat membuka `index.html` sebagai `file://`.

### Deploy ke Vercel

1. Import repository project ini ke Vercel. Project ini berupa situs statis; `index.html`, `styles.css`, `app.js`, dan `auth-config.js` berada di root, jadi gunakan root directory tersebut tanpa build command atau output directory khusus.
2. Deploy, lalu buka domain produksi Vercel-mu, misalnya `https://nama-project.vercel.app`.
3. Setelah mengubah file aplikasi atau pengaturan Auth, deploy ulang bila perlu dan uji pendaftaran dari domain produksi HTTPS.

### Publikasikan perubahan otomatis saat file disimpan

Workspace VS Code ini memiliki task **Auto-publish website to Vercel** yang aktif saat folder dibuka. Saat VS Code meminta izin menjalankan automatic tasks, pilih **Allow Automatic Tasks**. Setelah file situs tidak berubah selama 5 detik, task akan memeriksa perubahan, membuat commit, lalu `push` ke branch `main`; Vercel kemudian memulai deployment produksi.

Task hanya memublikasikan `index.html`, `app.js`, `auth-config.js`, `styles.css`, `SUPABASE_SETUP.md`, serta isi folder `images/` dan `supabase/`. Perubahan di luar daftar itu tidak otomatis dipublikasikan. Task juga menolak pola secret yang umum. Gunakan hanya nilai publik di `auth-config.js` dan pastikan Git sudah terautentikasi ke GitHub.

Pesan status task muncul di terminal VS Code **Auto-publish website to Vercel**. Jika Git push gagal, commit tetap tersimpan lokal dan task menampilkan instruksi untuk mencoba `git push origin main`. Untuk menghentikan publikasi otomatis, pilih **Terminal → Run Task → Terminate Task** untuk task tersebut.

Uji alur berikut:

1. Buka **Profil**, isi nama dan tanggal lahir, lalu pilih **Buat akun**.
2. Pastikan akun langsung terbuka dan profil tersimpan.
3. Muat ulang halaman pada browser/perangkat yang sama; sesi akun seharusnya tetap aktif.
4. Jangan keluar atau menghapus data browser jika ingin mempertahankan akses. Akun anonim tidak memiliki alur masuk ulang/pemulihan.

Jika pendaftaran gagal, pastikan Anonymous Sign-Ins aktif, database sudah diperbarui, dan periksa pesan pada dialog.

## Batas penyimpanan dan privasi

- Tabel profil menyimpan nama tampilan, tanggal lahir, bio, lokasi foto, status profil, dan waktu pembaruan. Tanggal lahir adalah data pribadi. Foto berada di bucket privat `profile-avatars`; kebijakan Storage membatasi baca, unggah, dan hapus berdasarkan folder ID akun.
- Project milik akun disimpan di `public.projects` pada Supabase dan disinkronkan selama sesi browser yang sama. RLS membatasi setiap baris ke pemilik akun. Karena akun anonim terikat ke sesi di perangkat ini, project tidak dapat diakses dengan membuat akun baru di perangkat lain.
- Project lama yang tersimpan di browser sebelum membuat akun tidak diunggah otomatis. Dari **Save Proyek**, pilih **Simpan project lokal ke akun** bila ingin menyalinnya. Salinan lokal tidak dihapus.
- Tanpa login, project tetap tersimpan di browser. Favorit contoh dan progres latihan juga tetap lokal dan tidak disinkronkan.
- Project yang sudah diekspor/disimpan ke file perangkat berada di luar penyimpanan akun CodeKita; hapus atau pindahkan file tersebut secara terpisah.
- Contoh galeri bukan konten komunitas. Tautan berbagi project yang dibuat dari editor tetap dapat dibaca oleh siapa pun yang memilikinya.
- Supabase Free memiliki kuota dan batas pemakaian yang dapat berubah. Pantau **Usage** di dashboard Supabase; konfigurasi frontend hanya memakai URL dan publishable/anon key, bukan service-role key.
