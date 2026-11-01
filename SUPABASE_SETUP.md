# Mengaktifkan akun KodePen

Fitur akun dan database project memakai Supabase Auth, Database, serta REST API yang dihasilkan Supabase (paket Free). Pengunjung yang memilih **Jelajahi** atau mulai membuat project akan diminta daftar atau masuk dengan Google atau GitHub. Akun dibuat otomatis saat seseorang pertama kali masuk; login berikutnya menggunakan akun yang sama. Pengguna baru diarahkan ke profil untuk melengkapi nama tampilan dan bio. Tidak perlu membuat server API berbayar terpisah.

## 1. Buat project Supabase dan tabel profil

1. Buat project di [Supabase](https://supabase.com/dashboard).
2. Buka **SQL Editor**, lalu jalankan seluruh isi [`supabase/profiles.sql`](./supabase/profiles.sql). Jika sudah pernah menjalankan versi sebelumnya, jalankan skrip lengkap lagi untuk membuat tabel project.
3. Pastikan tabel `public.profiles` dan `public.projects` tersedia serta Row Level Security aktif. Kebijakan pada skrip membatasi profil dan project ke akun pemilik.

## 2. Atur kredensial publik aplikasi

1. Di dashboard Supabase, buka **Project Settings → API**.
2. Salin **Project URL** dan **publishable key** (atau legacy `anon` key). Gunakan Project URL saja, misalnya `https://<project-ref>.supabase.co`; jangan tempelkan `/rest/v1/` di akhir.
3. Nilai project saat ini sudah diisi di [`auth-config.js`](./auth-config.js). File itu hanya memuat Project URL dan publishable key untuk frontend.

Klien Supabase di browser menggunakan REST API project secara langsung; endpoint API tersedia dari Supabase setelah tabel dibuat. Hanya URL project dan publishable/anon key yang boleh dipakai di sana. **Jangan pernah memasukkan `service_role` key, client secret Google/GitHub, atau rahasia lainnya ke file aplikasi, repository, atau browser.**

## 3. Aktifkan provider Google dan GitHub

Untuk masing-masing provider:

1. Buat OAuth app di Google Cloud Console atau GitHub Developer Settings.
2. Salin callback URL yang ditampilkan Supabase di **Authentication → Providers** ke bagian callback/redirect URI di provider tersebut.
3. Masukkan OAuth client ID dan client secret provider hanya ke pengaturan provider di dashboard Supabase, lalu aktifkan providernya.
4. Di **Authentication → URL Configuration**, jadikan alamat situs yang di-host sebagai **Site URL**, lalu tambahkan alamat pengembangan dan produksi ke **Redirect URLs**. Contoh alamat pengembangan: `http://localhost:5500/**`; sesuaikan port dengan server yang dipakai.
5. Untuk Google, tambahkan origin situs ke **Authorized JavaScript origins** jika diminta provider.

Nama menu/provider dapat berubah sewaktu-waktu. Ikuti callback URL persis seperti yang ditampilkan project Supabase milikmu.

## 4. Jalankan dan uji

OAuth tidak dapat digunakan saat membuka `index.html` sebagai `file://`. Jalankan situs melalui server lokal, misalnya **Live Server** di VS Code, lalu buka origin `http://localhost:...` yang sudah dimasukkan ke Redirect URLs.

### Deploy ke Vercel

1. Import repository project ini ke Vercel. Project ini berupa situs statis; `index.html`, `styles.css`, `app.js`, dan `auth-config.js` berada di root, jadi gunakan root directory tersebut tanpa build command atau output directory khusus.
2. Deploy, lalu buka domain produksi Vercel-mu, misalnya `https://nama-project.vercel.app`.
3. Di Supabase **Authentication → URL Configuration**, set **Site URL** ke domain produksi itu dan tambahkan alamat lengkap tersebut ke **Redirect URLs**, misalnya `https://nama-project.vercel.app/**`. Tambahkan juga alamat localhost yang dipakai untuk development.
4. Jika memakai custom domain, set **Site URL** ke custom domain dan tambahkan domain itu juga ke **Redirect URLs**. Pastikan Google/GitHub OAuth app menggunakan callback URL Supabase yang ditampilkan di pengaturan provider, bukan URL Vercel.
5. Setelah mengubah file konfigurasi atau pengaturan OAuth, deploy ulang jika file aplikasi berubah, lalu uji login dari domain Vercel HTTPS.

Nilai `redirectTo` aplikasi mengikuti origin halaman yang sedang dibuka. Karena itu, setiap domain Vercel atau custom domain yang digunakan harus diizinkan dalam **Redirect URLs** Supabase. URL preview Vercel yang berubah-ubah tidak otomatis diizinkan; gunakan alamat preview yang tetap dan tambahkan secara eksplisit bila memang ingin menguji OAuth dari preview.

Uji alur berikut:

1. Pilih **Masuk**, lalu lanjutkan dengan Google atau GitHub.
2. Akun baru akan kembali ke halaman profil. Lengkapi dan simpan nama tampilan; bio boleh dikosongkan.
3. Keluar, lalu masuk lagi dengan provider yang sama. Profil yang sudah lengkap tidak meminta pendaftaran ulang.
4. Masuk dengan akun berbeda dan pastikan daftar project browsernya terpisah.

Jika login ditolak provider atau konfigurasi belum lengkap, periksa pesan di dialog, URL redirect, dan status provider di dashboard Supabase.

## Batas penyimpanan dan privasi

- Tabel profil menyimpan nama tampilan (`varchar(50)`), bio (`varchar(240)`), status onboarding, dan waktu pembaruan saja. Kebijakan RLS membatasi profil ke akun pemilik.
- Project milik akun disimpan di `public.projects` pada Supabase dan disinkronkan saat login, saat project berubah/dihapus, serta saat aplikasi kembali difokuskan. RLS membatasi setiap baris ke pemilik akun. Perangkat/browser yang login ke akun sama akan menggunakan project cloud tersebut.
- Project lama yang tersimpan di browser sebelum login tidak diunggah otomatis. Dari **Save Proyek**, pilih **Simpan project lokal ke akun** bila ingin menyalinnya. Salinan lokal tidak dihapus.
- Tanpa login, project tetap tersimpan di browser. Favorit contoh dan progres latihan juga tetap lokal dan tidak disinkronkan.
- Project yang sudah diekspor/disimpan ke file perangkat berada di luar penyimpanan akun KodePen; hapus atau pindahkan file tersebut secara terpisah.
- Contoh galeri bukan konten komunitas. Tautan berbagi project yang dibuat dari editor tetap dapat dibaca oleh siapa pun yang memilikinya.
- Supabase Free memiliki kuota dan batas pemakaian yang dapat berubah. Pantau **Usage** di dashboard Supabase; konfigurasi frontend hanya memakai URL dan publishable/anon key, bukan service-role key.
