# Cerdik Ceria 📚

Kuiz seronok untuk murid sekolah rendah (Tahun 1–6): Bahasa Melayu, English, Matematik, Sains, Pendidikan Islam, Bahasa Arab dan Sejarah (Tahun 4–6).

App: https://farawyadal.github.io/cerdikceria/

## Ciri
- Profil anak dengan PIN pilihan (disimpan dalam peranti)
- Pilih bab/topik ikut buku teks KSSR, atau campur semua bab secara rawak
- Soalan yang belum pernah keluar diutamakan; soalan Matematik dijana rawak
- Mod bermasa (20/30/60 saat setiap soalan) atau tanpa masa
- Markah, bintang dan semakan jawapan selepas kuiz
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

Kira-kira 2 700 soalan tetap, ditambah soalan Matematik dan huruf hijaiyah yang dijana rawak.
Kandungan agama (Pendidikan Islam, Jawi, Bahasa Arab) elok disemak oleh guru sebelum dikongsi secara meluas.

## Tambah soalan
Setiap tahun ada fail sendiri dalam `soalan/` (contoh `soalan/tahun1.js`).

```
["Soalan", "Jawapan BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
```
- Jawapan betul sentiasa di tempat kedua; pilihan dikocok dalam app.
- Gambar besar: tulis `"🐱|Soalan…"` — bahagian sebelum `|` dipaparkan besar.
- Soalan ditulis sendiri berdasarkan topik setiap bab, bukan disalin daripada buku teks KPM.

---
Developed by FaridAssamani · ©2026
