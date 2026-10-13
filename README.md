# Cerdik Ceria 🌈

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
| Tahun | Status |
|---|---|
| 1 | ✅ Ikut bab (Sains 10 bab, Matematik 8 bab, BM 6 topik, BI 7 topik, Pendidikan Islam 6 bidang, Bahasa Arab 6 tema) |
| 2 | ✅ Ikut bab (Matematik 8 bab, Sains 9 bab, BM 6 topik, BI 7 topik, Pendidikan Islam 6 bidang, Bahasa Arab 7 tema) |
| 3–4 | Versi awal, akan disusun ikut bab |
| 5 | ✅ Ikut bab (Matematik 8 bab, Sains 10 bab, Sejarah Unit 2–12, BM 7 topik, BI 7 topik, Pendidikan Islam 7 bidang, Bahasa Arab 8 tema) |
| 6 | Versi awal, akan disusun ikut bab |

## Tambah soalan
Setiap tahun ada fail sendiri dalam `soalan/` (contoh `soalan/tahun1.js`).

```
["Soalan", "Jawapan BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
```
- Jawapan betul sentiasa di tempat kedua; pilihan dikocok dalam app.
- Gambar besar: tulis `"🐱|Soalan…"` — bahagian sebelum `|` dipaparkan besar.
- Soalan ditulis sendiri berdasarkan topik setiap bab, bukan disalin daripada buku teks KPM.
