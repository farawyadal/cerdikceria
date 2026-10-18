# Cerdik Ceria 📚

Kuiz seronok untuk kanak-kanak **Prasekolah** (umur 4–6, KSPK), murid **Sekolah Rendah** (Tahun 1–6, KSSR) dan **Sekolah Menengah** (Tingkatan 1–5, KSSM): Bahasa Melayu, English, Matematik, Sains, Sejarah, Geografi (menengah), Pendidikan Islam dan Bahasa Arab, serta Matematik Tambahan, Fizik, Kimia dan Biologi untuk Tingkatan 4–5. Ada juga peringkat **UPKK (KAFA)**: Al-Quran, Akidah, Ibadah, Sirah, Adab, Jawi & Khat dan Bahasa Arab (`soalan/upkk.js`, kunci `SOALAN["k1"]`) — soalan asli gaya UPKK, bukan salinan kertas soalan sebenar.

App: https://farawyadal.github.io/cerdikceria/

## Ciri
- Profil anak dengan PIN pilihan (disimpan dalam peranti)
- Pilih bab/topik ikut buku teks KSSR, atau campur semua bab secara rawak
- Soalan yang belum pernah keluar diutamakan; soalan Matematik dijana rawak
- Mod bermasa (20/30/60 saat setiap soalan) atau tanpa masa
- Markah, bintang dan semakan jawapan selepas kuiz
- Suis **🇬🇧 DLP** (Tahun 1 – Tingkatan 3): soalan Matematik & Sains kekal dalam BM, dengan terjemahan English (italic) di bawah soalan, pilihan jawapan, nama bab dan penerangan
- Butang **⬇ App** untuk pasang di telefon (muncul bila pelayar benarkan)

## Status soalan
Semua tahun disusun ikut bab/topik. Matematik & Sains ikut bab buku teks/DSKP KSSR, Sejarah ikut unit DSKP,
BM & BI ikut topik kemahiran, Pendidikan Islam ikut bidang KSSR, Bahasa Arab ikut tema.

| Tahun | BM | BI | Matematik | Sains | P. Islam | B. Arab | Sejarah |
|---|---|---|---|---|---|---|---|
| 1 | 6 topik | 7 topik | 8 bab | 10 bab | 6 bidang | 6 tema | — |
| 2 | 6 topik | 7 topik | 8 bab | 9 bab | 6 bidang | 7 tema | — |
| 3 | 6 topik | 7 topik | 9 bab | 9 bab | 6 bidang | 6 tema | — |
| 4 | 6 topik | 6 topik | 8 bab | 10 bab | 6 bidang | 6 tema | Unit 1–11 |
| 5 | 7 topik | 7 topik | 8 bab | 10 bab | 7 bidang | 8 tema | Unit 2–12 |
| 6 | 5 topik | 6 topik | 8 bab | 13 bab | 6 bidang | 6 tema | Unit 1–10 |

**Prasekolah (KSPK)**

BM (5 topik), English (6 topik), Matematik (7 topik), Sains (6 topik), Pendidikan Islam (6 bidang), Diri & Masyarakat (7 topik). Banyak gambar dan ayat pendek — sesuai dibacakan oleh ibu bapa.

**Sekolah Menengah (KSSM)**

| Tingkatan | BM | BI | Matematik | Sains | Sejarah | Geografi | P. Islam | B. Arab |
|---|---|---|---|---|---|---|---|---|
| 1 | 7 topik | 7 topik | 13 bab | 9 bab | 8 bab | 13 bab | 7 bidang | 6 tema |
| 2 | 5 topik | 6 topik | 13 bab | 13 bab | 10 bab | 10 bab | 7 bidang | 6 tema |
| 3 | 5 topik | 5 topik | 9 bab | 10 bab | 8 bab | 7 topik* | 7 bidang | 6 tema |
| 4 | 5 topik | 6 topik | 10 bab | 12 bab | 10 bab | – | 7 bidang | 6 tema |
| 5 | 5 topik | 5 topik | 8 bab | 9 bab | 10 bab | – | 7 bidang | 5 tema |

Aliran sains Tingkatan 4–5:

| Tingkatan | Matematik Tambahan | Fizik | Kimia | Biologi |
|---|---|---|---|---|
| 4 | 10 bab | 6 bab | 8 bab | 15 bab |
| 5 | 8 bab | 7 bab | 5 bab | 13 bab |

Geografi hanya untuk Tingkatan 1–3 (Tingkatan 4–5 ialah subjek elektif).

\* Geografi Tingkatan 3 disusun ikut topik; susunan bab rasmi belum disahkan.

Kira-kira 5 500 soalan tetap, ditambah soalan Matematik dan huruf hijaiyah yang dijana rawak.
Kandungan agama (Pendidikan Islam, Jawi, Bahasa Arab) elok disemak oleh guru sebelum dikongsi secara meluas.

## Statistik penggunaan
Dipantau melalui GoatCounter (https://farawyadal.goatcounter.com), tanpa cookie dan tanpa maklumat peribadi.
- `cerdikceria/install`: app dipasang (Android/Chrome)
- `cerdikceria/buka-app`: dibuka dari ikon skrin utama (termasuk iPhone)
- `cerdikceria/kuiz/tahunN/subjek`: kuiz selesai
- `cerdikceria/rating/1-bintang` … `rating/5-bintang`: rating app (sekali bagi setiap peranti)
- `cerdikceria/kongsi/whatsapp`, `cerdikceria/cadangan/emel`, `cerdikceria/sumbangan/buka`
Nama profil, PIN dan markah tidak dihantar.

Cadangan pengguna dihantar melalui emel ke farid.assamani@gmail.com (templat siap diisi).

## Tambah soalan
Setiap tahun/tingkatan ada fail sendiri dalam `soalan/` (contoh `soalan/tahun1.js`, `soalan/tingkatan1.js`).

```
["Soalan", "Jawapan BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
```
- Jawapan betul sentiasa di tempat kedua; pilihan dikocok dalam app.
- Gambar besar: tulis `"🐱|Soalan…"` — bahagian sebelum `|` dipaparkan besar.
- Terjemahan DLP dalam `soalan/dlp/` (contoh `soalan/dlp/tahun1.js` → `SOALAN["dlp1"]`, `soalan/dlp/tingkatan1.js` → `SOALAN["dlpm1"]`). Bab, susunan soalan dan logik generator mesti sama dengan fail BM; generator BM & English dijalankan dengan benih rawak yang sama supaya nombor sepadan.
- Soalan ditulis sendiri berdasarkan topik setiap bab, bukan disalin daripada buku teks KPM.

---
Developed by FaridAssamani · ©2026
