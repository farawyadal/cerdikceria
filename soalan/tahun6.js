/* =========================================================
   TAHUN 6 — Cerdik Ceria
   Matematik & Sains: bab ikut buku teks / RPT KSSR Tahun 6.
   Sejarah: Unit 1–10 ikut DSKP Tahun 6.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang KSSR.
   Bahasa Arab: ikut tema perbendaharaan kata.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🐱|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tahun 6 ---------- */
const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d === 1) return String(n); if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`; return `${n}/${d}`; }
const dec = (x, p = 3) => String(+x.toFixed(p));
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));

SOALAN[6] = {

/* ======================= MATEMATIK (bab buku teks Tahun 6) ======================= */
math: [
  { t: "Nombor Bulat dan Operasi Asas",
    q: [
      ["Dalam operasi bergabung tanpa kurungan, kita melakukan ___ dahulu.", "darab dan bahagi", "tambah dan tolak", "dari kanan ke kiri", "mana-mana sahaja"],
      ["Dalam operasi bergabung, operasi dalam ___ diselesaikan dahulu.", "kurungan", "nombor terbesar", "nombor terkecil", "hujung ayat"]
    ],
    g: [
      () => { const a = r(2, 50), b = r(2, 12), c = r(2, 12); return q(`${a} + ${b} × ${c} = ?`, a + b * c, [a, b, c, 10], false, "Darab dahulu, kemudian tambah."); },
      () => { const b = r(2, 9), c = r(2, 30), a = r(b * c + 1, 900); return q(`${a} − ${b * c} ÷ ${b} = ?`, a - c, [b, c, 10], false, "Bahagi dahulu, kemudian tolak."); },
      () => { const a = r(10, 99), b = r(10, 99), c = r(2, 9); return q(`(${a} + ${b}) × ${c} = ?`, (a + b) * c, [c, a, b, 10], false, "Selesaikan dalam kurungan dahulu."); },
      () => { const c = r(2, 9), d = r(5, 60), e = r(2, 9); const a = r(c * d + 1, c * d + 300); return q(`(${a} − ${a - c * d}) ÷ ${c} × ${e} = ?`, d * e, [e, d, 10], false, "Kurungan, kemudian bahagi dan darab dari kiri ke kanan."); },
      () => { const a = r(100000, 899999), b = r(10000, 999999 - a); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const b = r(11, 99), a = r(1000, Math.floor(999999 / b)); return q(`${fmt(a)} × ${b} = ?`, a * b, [a, b, 100, 1000]); },
      () => { const b = r(11, 99), c = r(100, 9999); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 10, 100]); },
      () => { const n = r(100000, 999999), u = pick([10000, 100000]); const ans = Math.round(n / u) * u; return q(`Bundarkan ${fmt(n)} kepada ${u === 10000 ? "puluh ribu" : "ratus ribu"} yang terdekat.`, ans, [u, u * 2, u / 10]); },
      () => { const h = r(12, 80), n = r(15, 60), s = r(100, 900); return q(`🎫|${n} orang murid membeli tiket berharga RM${h} setiap seorang. Sekolah memberi sumbangan RM${s}. Berapakah jumlah wang yang dikumpul?`, n * h + s, [h, 100, 10], false, "Darab dahulu, kemudian tambah.", rm); }
    ] },
  { t: "Pecahan, Perpuluhan dan Peratus",
    q: [
      ["Nombor bercampur 2 1/4 dalam perpuluhan ialah…", "2.25", "2.14", "2.4", "21.4"],
      ["0.125 bersamaan dengan pecahan…", "1/8", "1/4", "1/5", "12/5"],
      ["Peratus yang mewakili keseluruhan ialah…", "100%", "50%", "10%", "1%"]
    ],
    g: [
      () => { const d = pick([2, 3, 4, 5, 6, 8]), a = r(1, d - 1), n = r(2, 9); return from(`${a}/${d} ÷ ${n} = ?`, frac(a, d * n), [frac(a * n, d), frac(a, d + n), frac(a + n, d * n), frac(a, d * n + 1)]); },
      () => { const d1 = pick([2, 3, 4, 5]), d2 = pick([2, 3, 4, 5]), a = r(1, d1 - 1), b = r(1, d2 - 1); return from(`${a}/${d1} × ${b}/${d2} = ?`, frac(a * b, d1 * d2), [frac(a + b, d1 + d2), frac(a * d2, b * d1), frac(a * b, d1 + d2), frac(a * b + 1, d1 * d2), frac(a + b, d1 * d2), frac(a * b, d1 * d2 + 1), `${a * b}/${d1 + d2}`]); },
      () => { const d = pick([3, 4, 5, 6, 8]), w = r(1, 3), n = r(1, d - 1), k = r(2, 4); return from(`${w} ${n}/${d} × ${k} = ?`, frac((w * d + n) * k, d), [frac(w * k * d + n, d), frac((w * d + n) * k + 1, d), frac(w * d + n * k, d), frac((w * d + n), d * k)]); },
      () => { const a = r(1001, 9999) / 1000, b = r(2, 9); return q(`${dec(a)} × ${b} = ?`, +(a * b).toFixed(3), [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const b = r(2, 9), c = r(1001, 9999) / 1000; return q(`${dec(b * c)} ÷ ${b} = ?`, c, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const p = pick([5, 12, 15, 20, 30, 35, 40, 60, 75, 80]), n = r(1, 30) * 20; return q(`${p}% daripada ${fmt(n)} = ?`, n * p / 100, [5, 10, 20, n / 10]); },
      () => { const n = r(2, 20) * 10, part = r(1, n / 10) * 5; return q(`${part} daripada ${n} dalam bentuk peratus ialah…`, +(part / n * 100).toFixed(1), [5, 10, 2.5], true, "", x => dec(x, 1) + "%"); },
      () => { const h = r(2, 30) * 10, p = pick([10, 20, 25, 50]); return q(`📈|Harga asal RM${h}. Harga naik ${p}%. Berapakah harga baharu?`, h + h * p / 100, [h * p / 100, 10, 5], false, "", rm); }
    ] },
  { t: "Wang",
    q: [
      ["Faedah ialah…", "bayaran tambahan atas wang yang disimpan atau dipinjam", "potongan harga", "cukai jalan", "harga kos"],
      ["Rebat ialah…", "wang yang dikembalikan kepada pembeli", "cukai", "harga asal", "hutang"],
      ["Invois ialah dokumen yang…", "menyenaraikan barang dan jumlah yang perlu dibayar", "membuktikan bayaran sudah dibuat", "kad pengenalan", "lesen"],
      ["Contoh aset ialah…", "rumah dan simpanan", "hutang kad kredit", "pinjaman kereta", "bil elektrik tertunggak"],
      ["Contoh liabiliti ialah…", "pinjaman yang belum dibayar", "simpanan bank", "rumah sendiri", "emas"]
    ],
    g: [
      () => { const k = r(50, 900), u = r(10, 300); return q(`🏷️|Harga kos RM${k}, untung RM${u}. Berapakah harga jual?`, k + u, [1, 10, u], false, "Harga jual = harga kos + untung", rm); },
      () => { const k = r(100, 900), p = pick([10, 20, 25, 50]); return q(`📈|Harga kos RM${k * 4}. Peniaga mahu untung ${p}%. Berapakah untungnya?`, k * 4 * p / 100, [10, 50, k], false, "", rm); },
      () => { const h = r(4, 60) * 10, p = pick([10, 15, 20, 25, 30, 40]); return q(`🛍️|Harga asal RM${h}. Diskaun ${p}%. Berapakah harga selepas diskaun?`, h - h * p / 100, [h * p / 100, 10, 5], false, "", rm); },
      () => { const pk = r(2, 20) * 1000, p = pick([2, 3, 4, 5]), t = r(1, 3); return q(`🏦|RM${fmt(pk)} disimpan dengan kadar faedah mudah ${p}% setahun. Berapakah faedah selepas ${t} tahun?`, pk * p / 100 * t, [pk * p / 100, 100, 10], false, "Faedah = simpanan × kadar × tahun", rm); },
      () => { const items = [r(5, 40), r(5, 40), r(5, 40)], qty = [r(1, 5), r(1, 5), r(1, 5)]; const tot = items.reduce((s, x, i) => s + x * qty[i], 0); return q(`🧾 Invois:\n${items.map((x, i) => `${qty[i]} × RM${x}`).join("\n")}|Berapakah jumlah yang perlu dibayar?`, tot, [1, 10, 5], false, "", rm); }
    ] },
  { t: "Masa dan Waktu",
    q: [
      ["Malaysia berada dalam zon waktu…", "UTC+8", "UTC+7", "UTC+9", "UTC+5"],
      ["Apabila jam 10:00 pagi di Malaysia, jam di Thailand (UTC+7) ialah…", "9:00 pagi", "11:00 pagi", "10:00 pagi", "8:00 pagi"],
      ["Apabila jam 10:00 pagi di Malaysia, jam di Jepun (UTC+9) ialah…", "11:00 pagi", "9:00 pagi", "10:00 pagi", "12:00 tengah hari"],
      ["1 tahun lompat = ___ hari", "366", "365", "364", "360"]
    ],
    g: [
      () => { const h1 = r(6, 11), m1 = pick([0, 15, 30, 45]), d = r(2, 9), dm = pick([10, 20, 35, 50]); let m2 = m1 + dm, h2 = h1 + d + Math.floor(m2 / 60); m2 %= 60; const f = (h, m) => String(h).padStart(2, "0") + String(m).padStart(2, "0"); const right = `${f(h2, m2)}`; return from(`✈️|Kapal terbang berlepas jam ${f(h1, m1)} dan perjalanan mengambil masa ${d} jam ${dm} minit. Jam berapakah kapal terbang mendarat?`, "jam " + right, [f(h2 + 1, m2), f(h2, (m2 + 10) % 60), f(h2 - 1, m2), f(h1 + d, m1)].map(x => "jam " + x)); },
      () => { const d = r(2, 5), h = r(1, 23); return q(`${d} hari ${h} jam = ___ jam`, d * 24 + h, [24, 1, 10]); },
      () => { const m = r(2, 9), s = r(1, 59); return q(`${m} minit ${s} saat = ___ saat`, m * 60 + s, [60, 10, 40]); },
      () => { const n = r(2, 6), h = r(1, 5), m = pick([10, 15, 20, 30, 40]); const tm = (h * 60 + m) * n; const right = `${Math.floor(tm / 60)} jam ${tm % 60} minit`; return from(`📚|Aina belajar ${h} jam ${m} minit setiap hari. Berapakah jumlah masa belajar dalam ${n} hari?`, right, [`${h * n} jam ${m} minit`, `${Math.floor(tm / 60) + 1} jam ${tm % 60} minit`, `${h * n} jam ${m * n} minit`, `${Math.floor(tm / 60)} jam ${(tm % 60 + 10) % 60} minit`]); }
    ] },
  { t: "Ukuran dan Sukatan",
    q: [
      ["1/2 km = ___ m", "500", "50", "250", "5000"],
      ["3/4 kg = ___ g", "750", "75", "340", "7500"],
      ["1/4 liter = ___ ml", "250", "25", "400", "2500"]
    ],
    g: [
      () => { const x = r(101, 999) / 100; return q(`${dec(x, 2)} km = ___ m`, Math.round(x * 1000), [10, 100, 1000], false, "", fmt); },
      () => { const x = r(11, 99) / 10; return q(`${dec(x, 1)} kg = ___ g`, Math.round(x * 1000), [100, 1000, 10], false, "", fmt); },
      () => { const ml = r(1001, 9999); return q(`${fmt(ml)} ml = ___ l`, ml / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const n = pick([2, 4, 5, 8]), tot = n * r(120, 900); return q(`🧴|${fmt(tot)} ml sabun cecair diisi sama banyak ke dalam ${n} botol. Berapakah isi padu setiap botol?`, tot / n, [10, 100, 50], false, "", x => fmt(x) + " ml"); },
      () => { const a = r(11, 49) / 10, b = r(11, 39) / 10; return q(`🍚|Ibu membeli ${dec(a, 1)} kg beras dan ${dec(b, 1)} kg gula. Berapakah jumlah jisim dalam gram?`, Math.round((a + b) * 1000), [100, 1000, 10], false, "", x => fmt(x) + " g"); }
    ] },
  { t: "Ruang",
    q: [
      ["Jarak dari pusat bulatan ke lilitannya dipanggil…", "jejari", "diameter", "lilitan", "perimeter"],
      ["Garis lurus yang melalui pusat dan menyentuh dua titik pada lilitan dipanggil…", "diameter", "jejari", "tangen", "lengkok"],
      ["Diameter bulatan bersamaan ___ kali jejari.", "2", "3", "4", "½"],
      ["Jumlah sudut pada satu garis lurus ialah…", "180°", "90°", "360°", "270°"],
      ["Jumlah sudut sekitar satu titik ialah…", "360°", "180°", "90°", "270°"]
    ],
    g: [
      () => { const j = r(2, 30); return q(`Jejari sebuah bulatan ialah ${j} cm. Berapakah diameternya?`, 2 * j, [j, 1, 2], false, "Diameter = 2 × jejari", x => x + " cm"); },
      () => { const d = r(2, 30) * 2; return q(`Diameter sebuah bulatan ialah ${d} cm. Berapakah jejarinya?`, d / 2, [d / 2, 1, 2], false, "Jejari = diameter ÷ 2", x => x + " cm"); },
      () => { const a = r(20, 160); return q(`Dua sudut pada garis lurus. Satu sudut ialah ${a}°. Berapakah sudut yang satu lagi?`, 180 - a, [10, 20, 90], false, "Jumlah sudut pada garis lurus = 180°", x => x + "°"); },
      () => { const p = r(4, 20), l = r(2, 15), s = r(2, Math.min(p, l)); return q(`🟫|Sebidang tanah segi empat tepat ${p} m × ${l} m. Sebuah petak segi empat sama ${s} m × ${s} m dipotong keluar. Berapakah luas yang tinggal?`, p * l - s * s, [s, p, 10], false, "", x => x + " m²"); },
      () => { const a = r(3, 12), b = r(3, 10), c = r(2, 10), s = r(2, 5); return q(`📦|Kotak ${a} cm × ${b} cm × ${c} cm dan kiub ${s} cm × ${s} cm × ${s} cm. Berapakah jumlah isi padu kedua-duanya?`, a * b * c + s ** 3, [s ** 3, 10, a * b], false, "", x => x + " cm³"); }
    ] },
  { t: "Koordinat, Nisbah dan Kadaran",
    q: [
      ["Nisbah 6 : 9 dalam bentuk termudah ialah…", "2 : 3", "3 : 2", "6 : 3", "1 : 3"],
      ["Jika A : B = 1 : 2, maka B ialah ___ kali A.", "2", "½", "3", "1"]
    ],
    g: [
      () => { const a = r(2, 9), b = r(2, 9), k = r(2, 12); const g = gcd(a, b); const A = a * k, B = b * k; const right = `${a / g} : ${b / g}`; return from(`Nisbah ${A} : ${B} dalam bentuk termudah ialah…`, right, [`${b / g} : ${a / g}`, `${A / k} : ${B}`, `${a / g + 1} : ${b / g}`, `${a / g} : ${(a + b) / g}`]); },
      () => { const a = r(1, 5), b = r(1, 5), k = r(3, 20); return q(`👫|Nisbah murid lelaki kepada perempuan ialah ${a} : ${b}. Jumlah murid ialah ${(a + b) * k}. Berapakah murid perempuan?`, b * k, [k, a * k, b], false, "Bahagikan jumlah kepada bahagian, kemudian darab."); },
      () => { const n = r(3, 9), h = r(3, 25), m = r(n + 2, 30); return q(`🧃|${n} kotak jus berharga RM${n * h}. Berapakah harga ${m} kotak?`, m * h, [h, n, 2], false, "Kaedah unitari: cari harga 1 kotak dahulu.", rm); },
      () => { const per = r(40, 110), t = r(2, 6); return q(`🚗|Sebuah kereta bergerak ${per * t} km dalam ${t} jam. Berapakah jarak dalam 1 jam pada kelajuan yang sama?`, per, [5, 10, t], false, "", x => x + " km"); },
      () => { const a = r(2, 4), b = r(2, 5), c = r(1, 3), k = r(3, 10); return q(`🍪|Biskut, kek dan roti dijual dalam nisbah ${a} : ${b} : ${c}. Jika ${b * k} kek dijual, berapakah biskut yang dijual?`, a * k, [k, b * k, c * k]); }
    ] },
  { t: "Pengurusan Data dan Kebarangkalian",
    q: [
      ["Peristiwa yang pasti berlaku dikatakan…", "pasti", "mustahil", "kurang berkemungkinan", "sama kemungkinan"],
      ["Matahari terbit dari barat. Peristiwa ini…", "mustahil", "pasti", "berkemungkinan", "sama kemungkinan"],
      ["Melambung syiling dan mendapat \"kepala\" adalah…", "sama kemungkinan", "pasti", "mustahil", "lebih berkemungkinan"],
      ["Dalam carta pai, sudut keseluruhan bulatan ialah…", "360°", "180°", "100°", "90°"],
      ["Jika separuh carta pai berwarna merah, peratus merah ialah…", "50%", "25%", "100%", "75%"]
    ],
    g: [
      () => { const n = pick([4, 5]), avg = r(10, 80); const xs = []; let s = 0; for (let i = 0; i < n - 1; i++) { const v = avg + r(-9, 9); xs.push(v); s += v; } xs.push(avg * n - s); if (xs[n - 1] < 0) return null; return q(`Cari min (purata) bagi:\n${xs.join(", ")}`, avg, [1, 2, 5], false, `Jumlah ${avg * n} ÷ ${n}`); },
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 4)]); return from(`Cari mod bagi:\n${xs.join(", ")}`, String(m), xs.filter(x => x !== m).map(String)); },
      () => { const xs = shuffle([...new Set(Array.from({ length: 12 }, () => r(1, 60)))]).slice(0, 5); if (xs.length < 5) return null; const s = xs.slice().sort((a, b) => a - b); return from(`Cari median bagi:\n${xs.join(", ")}`, String(s[2]), [s[1], s[3], xs[2], s[0], s[4]].map(String), `Susun: ${s.join(", ")}`); },
      () => { const xs = Array.from({ length: 6 }, () => r(10, 99)); return q(`Cari julat bagi:\n${xs.join(", ")}`, Math.max(...xs) - Math.min(...xs), [1, 10, 5]); },
      () => { const red = r(0, 6), blue = r(1, 6); const tot = red + blue; const right = red === 0 ? "mustahil" : red === tot ? "pasti" : red > blue ? "lebih berkemungkinan" : red < blue ? "kurang berkemungkinan" : "sama kemungkinan"; return from(`${"🔴".repeat(red)}${"🔵".repeat(blue)}|Sebiji guli diambil secara rawak dari bekas ini. Kemungkinan mendapat guli merah ialah…`, right, ["mustahil", "pasti", "lebih berkemungkinan", "kurang berkemungkinan", "sama kemungkinan"]); }
    ] }
],

/* ======================= SAINS (bab buku teks Tahun 6) ======================= */
sains: [
  { t: "Kemahiran Saintifik", q: [
    ["Pernyataan yang boleh diuji tentang hubungan antara pemboleh ubah dipanggil…", "hipotesis", "inferens", "kesimpulan", "pemerhatian"],
    ["Langkah-langkah eksperimen yang betul bermula dengan…", "mengenal pasti masalah", "membuat kesimpulan", "melukis graf", "menulis laporan"],
    ["Pemboleh ubah yang dimalarkan perlu…", "dikekalkan sama", "diubah", "diabaikan", "diukur sahaja"],
    ["Mentafsir data bermaksud…", "memberi penerangan tentang pola data", "mengumpul data", "membuang data", "menyalin data"],
    ["Menggunakan perhubungan ruang dan masa termasuk menerangkan…", "perubahan kedudukan objek mengikut masa", "warna objek", "bau objek", "bunyi objek sahaja"]
  ]},
  { t: "Manusia", q: [
    ["Pembiakan penting supaya…", "manusia dapat meneruskan keturunan", "manusia membesar lebih cepat", "manusia tidak sakit", "manusia tidak perlu makan"],
    ["Sel pembiakan lelaki dipanggil…", "sperma", "ovum", "zigot", "embrio"],
    ["Sel pembiakan perempuan dipanggil…", "ovum", "sperma", "zigot", "saraf"],
    ["Persenyawaan ialah percantuman…", "sperma dan ovum", "dua ovum", "dua sperma", "darah dan tulang"],
    ["Janin berkembang di dalam…", "uterus (rahim)", "perut", "paru-paru", "jantung"],
    ["Bayi biasanya dilahirkan selepas kira-kira ___ bulan dalam kandungan.", "9", "3", "6", "12"],
    ["Sistem saraf pusat terdiri daripada otak dan…", "saraf tunjang", "jantung", "paru-paru", "otot"],
    ["Organ yang mengawal semua aktiviti badan ialah…", "otak", "jantung", "perut", "ginjal"],
    ["Saraf yang menghubungkan sistem saraf pusat dengan bahagian badan lain dipanggil saraf…", "periferi", "tunjang", "tengkorak", "otot"],
    ["Cara menjaga sistem saraf ialah…", "memakai topi keledar ketika menunggang basikal", "mengambil dadah", "tidur lewat setiap hari", "minum minuman keras"],
    ["Tulang belakang melindungi…", "saraf tunjang", "jantung", "paru-paru", "perut"]
  ]},
  { t: "Mikroorganisma", q: [
    ["Mikroorganisma ialah organisma yang…", "sangat kecil dan perlu dilihat dengan mikroskop", "sangat besar", "tidak hidup", "hanya ada di laut"],
    ["Alat untuk melihat mikroorganisma ialah…", "mikroskop", "teleskop", "periskop", "termometer"],
    ["Contoh mikroorganisma ialah bakteria, kulat, virus, protozoa dan…", "alga", "cacing", "semut", "lipas"],
    ["🍞|Yis digunakan untuk…", "mengembangkan doh roti", "mengawet ikan", "menjernihkan air", "membuat plastik"],
    ["Bakteria yang berguna digunakan untuk membuat…", "yogurt", "plastik", "kaca", "simen"],
    ["Selesema disebabkan oleh…", "virus", "yis", "alga", "kulat roti"],
    ["Penyakit malaria disebarkan oleh…", "nyamuk", "lalat", "lipas", "tikus"],
    ["Mikroorganisma memerlukan air, makanan, udara dan ___ yang sesuai untuk hidup.", "suhu", "bunyi", "warna", "magnet"],
    ["Roti yang dibiarkan lama akan ditumbuhi…", "kulat", "rumput", "lumut besar", "cendawan tiram"],
    ["Mikroorganisma membantu mengurai…", "sisa tumbuhan dan haiwan yang mati", "batu", "plastik keras", "besi"],
    ["Cara mengelakkan jangkitan mikroorganisma ialah…", "membasuh tangan dengan sabun", "berkongsi berus gigi", "makan makanan basi", "tidak mandi"]
  ]},
  { t: "Interaksi Antara Hidupan", q: [
    ["Haiwan bersaing untuk mendapatkan makanan, pasangan dan…", "kawasan", "televisyen", "wang", "kereta"],
    ["Tumbuhan bersaing untuk mendapatkan cahaya, air dan…", "nutrien", "daging", "bunyi", "kawasan bermain"],
    ["Lebah mendapat madu dan bunga didebungakan. Ini contoh…", "mutualisme", "parasitisme", "komensalisme", "persaingan"],
    ["Ikan remora mendapat sisa makanan jerung tanpa merugikan jerung. Ini contoh…", "komensalisme", "parasitisme", "mutualisme", "pemangsaan"],
    ["Kutu menghisap darah anjing. Ini contoh…", "parasitisme", "mutualisme", "komensalisme", "persaingan"],
    ["Pokok dedalu menyerap makanan daripada pokok perumahnya. Ini contoh…", "parasitisme", "mutualisme", "komensalisme", "fotosintesis"],
    ["Pokok orkid yang menumpang pada dahan pokok lain tanpa merugikannya ialah contoh…", "komensalisme", "parasitisme", "pemangsaan", "persaingan"],
    ["Haiwan yang memburu haiwan lain dipanggil…", "pemangsa", "mangsa", "perumah", "parasit"],
    ["Anak benih yang ditanam terlalu rapat akan…", "bersaing dan tumbuh kurang subur", "tumbuh lebih subur", "tidak memerlukan air", "berbunga lebih cepat"]
  ]},
  { t: "Pemeliharaan dan Pemuliharaan", q: [
    ["Haiwan yang bilangannya semakin berkurangan dan mungkin pupus dipanggil haiwan…", "terancam", "peliharaan", "ternakan", "liar biasa"],
    ["Contoh haiwan terancam di Malaysia ialah…", "harimau Malaya", "ayam", "kucing", "lembu"],
    ["🦧|Orang utan banyak ditemui di…", "Sabah dan Sarawak", "Perlis", "Melaka", "Pulau Pinang"],
    ["Pusat Pemulihan Orang Utan Sepilok terletak di…", "Sabah", "Pahang", "Johor", "Kedah"],
    ["Antara punca kepupusan hidupan ialah…", "pemusnahan habitat dan pemburuan haram", "hujan", "angin", "cahaya matahari"],
    ["Salah satu cara memulihara hutan ialah…", "menanam semula pokok", "membakar hutan", "menebang semua pokok", "membuang sampah di hutan"],
    ["Kawasan yang dilindungi untuk menjaga hidupan liar ialah…", "taman negara", "pasar raya", "kilang", "lebuh raya"],
    ["Penyu belimbing semakin berkurangan kerana…", "telurnya diambil dan pantai tercemar", "terlalu banyak makanan", "laut terlalu bersih", "cuaca sejuk"],
    ["Keseimbangan alam perlu dijaga supaya…", "semua hidupan dapat terus hidup", "hutan cepat habis", "haiwan pupus", "udara tercemar"]
  ]},
  { t: "Daya", q: [
    ["Daya ialah tolakan atau…", "tarikan", "tiupan", "cahaya", "bunyi"],
    ["Unit SI bagi daya ialah…", "newton (N)", "meter (m)", "kilogram (kg)", "saat (s)"],
    ["Daya boleh mengubah ___ objek.", "bentuk, arah dan kelajuan", "warna", "bau", "rasa"],
    ["Daya yang menentang gerakan antara dua permukaan dipanggil…", "geseran", "graviti", "magnet", "tekanan"],
    ["Geseran menghasilkan…", "haba", "cahaya biru", "air", "magnet"],
    ["Bunga tayar kereta berfungsi untuk ___ geseran.", "menambah", "mengurangkan", "menghapuskan", "tidak mengubah"],
    ["Minyak pelincir pada rantai basikal berfungsi untuk ___ geseran.", "mengurangkan", "menambah", "menghasilkan", "menghalang"],
    ["Galas bebola digunakan untuk…", "mengurangkan geseran", "menambah geseran", "menghasilkan cahaya", "menyejukkan enjin"],
    ["🥤|Kita boleh menyedut minuman menggunakan straw kerana adanya…", "tekanan udara", "geseran", "magnet", "cahaya"],
    ["Penyedut getah boleh melekat pada dinding licin kerana…", "tekanan udara di luar lebih tinggi", "ada gam", "ada magnet", "dinding panas"]
  ]},
  { t: "Kelajuan", q: [
    ["Laju = ?", "jarak ÷ masa", "masa ÷ jarak", "jarak × masa", "jarak + masa"],
    ["Unit laju yang biasa digunakan untuk kenderaan ialah…", "km/j", "kg", "°C", "ml"],
    ["Objek yang bergerak lebih jauh dalam masa yang sama adalah lebih…", "laju", "perlahan", "berat", "kecil"],
    ["Sebuah kereta bergerak 120 km dalam 2 jam. Lajunya ialah…", "60 km/j", "120 km/j", "240 km/j", "30 km/j"],
    ["Seorang pelari berlari 100 m dalam 20 saat. Lajunya ialah…", "5 m/s", "20 m/s", "2 m/s", "10 m/s"],
    ["Jika laju 50 km/j dan masa 3 jam, jarak yang dilalui ialah…", "150 km", "53 km", "17 km", "100 km"],
    ["🐆|Haiwan darat paling laju ialah…", "cheetah", "kura-kura", "siput", "gajah"]
  ]},
  { t: "Teknologi Pengawetan Makanan", q: [
    ["Makanan rosak kerana tindakan…", "mikroorganisma", "cahaya bulan", "bunyi", "magnet"],
    ["Tanda makanan rosak ialah…", "berbau busuk dan berlendir", "berbau harum", "warna cerah", "rasa sedap"],
    ["Ikan kering diawet dengan cara…", "pengeringan", "penyejukbekuan", "pempasteuran", "pengetinan"],
    ["🥚|Telur masin diawet dengan cara…", "pengasinan", "pemanisan", "pengasapan", "pengetinan"],
    ["Jeruk mangga diawet dengan cara…", "penjerukan (menggunakan cuka)", "pengeringan sahaja", "pempasteuran", "penyinaran"],
    ["Jem dibuat melalui cara…", "pemanisan", "pengasinan", "pengasapan", "pengeringan"],
    ["🥛|Susu dipanaskan pada suhu tertentu kemudian disejukkan dengan cepat. Ini dipanggil…", "pempasteuran", "pengasinan", "pengetinan", "penjerukan"],
    ["Ikan salai diawet dengan cara…", "pengasapan", "pemanisan", "pengetinan", "penyejukbekuan"],
    ["Sardin dalam tin diawet melalui…", "pengetinan", "pengasinan", "pengeringan", "pemanisan"],
    ["Pengawetan makanan bertujuan…", "menyimpan makanan lebih lama", "merosakkan makanan", "membazir", "menambah kuman"]
  ]},
  { t: "Bahan Buangan", q: [
    ["Bahan buangan yang boleh diurai oleh mikroorganisma dipanggil bahan…", "terbiodegradasi", "tidak terbiodegradasi", "toksik", "radioaktif"],
    ["Contoh bahan terbiodegradasi ialah…", "sisa makanan", "botol kaca", "beg plastik", "tin aluminium"],
    ["Contoh bahan tidak terbiodegradasi ialah…", "beg plastik", "kulit pisang", "daun kering", "sisa sayur"],
    ["Sisa makanan dan daun boleh dijadikan…", "baja kompos", "plastik", "kaca", "besi"],
    ["Tong kitar semula berwarna biru adalah untuk…", "kertas", "kaca", "plastik", "sisa makanan"],
    ["Tong kitar semula berwarna coklat adalah untuk…", "kaca", "kertas", "plastik", "tin"],
    ["Tong kitar semula berwarna jingga adalah untuk…", "plastik dan tin aluminium", "kertas", "kaca", "sisa makanan"],
    ["Pembuangan sampah yang tidak betul boleh menyebabkan…", "pencemaran dan banjir kilat", "udara bersih", "sungai jernih", "tanah subur"],
    ["Amalan 3R ialah kurangkan, guna semula dan…", "kitar semula", "bakar", "buang", "tanam"]
  ]},
  { t: "Gerhana", q: [
    ["Gerhana Bulan berlaku apabila ___ berada di antara Matahari dan Bulan.", "Bumi", "Marikh", "Zuhrah", "bintang"],
    ["Gerhana Matahari berlaku apabila ___ berada di antara Matahari dan Bumi.", "Bulan", "Marikh", "Utarid", "awan"],
    ["Gerhana Bulan hanya boleh berlaku pada fasa…", "Bulan purnama", "anak bulan", "bulan sabit", "bulan separa"],
    ["Gerhana Matahari hanya boleh berlaku pada fasa…", "anak bulan", "Bulan purnama", "bulan separa", "bulan hampir purnama"],
    ["Kita tidak boleh melihat gerhana Matahari dengan mata kasar kerana…", "boleh merosakkan mata", "gerhana itu sejuk", "gerhana terlalu kecil", "gerhana tidak wujud"],
    ["Ketika gerhana Bulan penuh, Bulan kelihatan…", "kemerahan atau gelap", "lebih terang", "biru", "hilang selamanya"],
    ["Umat Islam disunatkan menunaikan solat sunat ketika gerhana. Untuk gerhana Matahari, solat itu dipanggil solat…", "Kusuf", "Khusuf", "Duha", "Witir"]
  ]},
  { t: "Galaksi", q: [
    ["Galaksi tempat Sistem Suria berada ialah…", "Bima Sakti", "Andromeda", "Orion", "Biduk"],
    ["Galaksi terdiri daripada berbilion…", "bintang, gas dan debu", "pokok", "bangunan", "kereta"],
    ["Matahari ialah sebuah…", "bintang", "planet", "bulan", "komet"],
    ["Bentuk galaksi Bima Sakti ialah…", "lingkaran (pilin)", "segi empat", "segi tiga", "bujur telur leper"],
    ["Galaksi lingkaran besar yang paling hampir dengan Bima Sakti ialah…", "Andromeda", "Pari", "Kala", "Belantik"],
    ["Alat yang membantu ahli astronomi melihat galaksi ialah…", "teleskop", "mikroskop", "periskop", "kanta pembesar kecil"]
  ]},
  { t: "Kestabilan dan Kekuatan", q: [
    ["Objek lebih stabil jika tapaknya…", "lebar", "sempit", "bulat", "tinggi"],
    ["Objek lebih stabil jika pusat gravitinya…", "rendah", "tinggi", "di atas", "tiada"],
    ["🚧|Kon trafik stabil kerana mempunyai…", "tapak yang lebar dan berat", "bahagian atas yang berat", "tapak yang kecil", "roda"],
    ["Bentuk yang biasa digunakan untuk menguatkan struktur jambatan ialah…", "segi tiga", "bulatan", "bintang", "hati"],
    ["Kekuatan sesuatu struktur bergantung kepada jenis bahan dan…", "bentuk binaan", "warna cat", "nama pembina", "hari dibina"],
    ["Bangunan tinggi dibina dengan asas yang dalam supaya…", "stabil dan tidak mudah tumbang", "kelihatan cantik", "murah", "cepat siap"],
    ["Kerusi yang mempunyai empat kaki lebih stabil daripada kerusi berkaki satu kerana…", "tapak sokongannya lebih luas", "lebih cantik", "lebih ringan", "lebih tinggi"]
  ]},
  { t: "Teknologi", q: [
    ["Antara kelebihan teknologi ialah…", "memudahkan komunikasi", "menambah pencemaran", "membazir masa", "merosakkan alam"],
    ["Antara keburukan teknologi jika tidak digunakan dengan bijak ialah…", "ketagihan gajet", "kerja lebih mudah", "komunikasi lebih cepat", "rawatan lebih baik"],
    ["Teknologi dalam bidang perubatan membantu…", "merawat pesakit dengan lebih berkesan", "menyebarkan penyakit", "melambatkan rawatan", "menambah kos sahaja"],
    ["Penggunaan kenderaan yang terlalu banyak boleh menyebabkan…", "pencemaran udara", "udara lebih bersih", "hutan bertambah", "air lebih jernih"],
    ["Cara menggunakan teknologi secara bijak ialah…", "menghadkan masa menggunakan gajet", "bermain gajet sepanjang malam", "berkongsi kata laluan", "melayari laman tidak selamat"],
    ["Perkembangan teknologi komunikasi: surat → telefon → …", "telefon pintar dan internet", "burung merpati", "isyarat asap", "gendang"]
  ]}
],

/* ======================= SEJARAH (Unit ikut DSKP Tahun 6) ======================= */
sejarah: [
  { n: 1, t: "Lahirnya Sebuah Cinta (Pembentukan Malaysia)", q: [
    ["Idea pembentukan Malaysia diumumkan oleh Tunku Abdul Rahman pada tahun…", "1961", "1957", "1963", "1965"],
    ["Malaysia dibentuk pada…", "16 September 1963", "31 Ogos 1957", "9 Ogos 1965", "1 Februari 1948"],
    ["Wilayah yang bersama-sama Persekutuan Tanah Melayu membentuk Malaysia ialah Singapura, Sabah dan…", "Sarawak", "Brunei", "Thailand", "Indonesia"],
    ["Wilayah yang pada awalnya dijangka menyertai tetapi akhirnya tidak menyertai Malaysia ialah…", "Brunei", "Sabah", "Sarawak", "Singapura"],
    ["Suruhanjaya yang meninjau pendapat rakyat Sabah dan Sarawak tentang Malaysia ialah…", "Suruhanjaya Cobbold", "Suruhanjaya Reid", "Suruhanjaya Brooke", "Suruhanjaya Light"],
    ["Perjanjian Malaysia ditandatangani di London pada…", "9 Julai 1963", "16 September 1963", "31 Ogos 1957", "9 Ogos 1965"],
    ["Singapura keluar daripada Malaysia pada…", "9 Ogos 1965", "16 September 1963", "31 Ogos 1957", "13 Mei 1969"],
    ["Negara jiran yang melancarkan Konfrontasi terhadap pembentukan Malaysia ialah…", "Indonesia", "Thailand", "Brunei", "Singapura"],
    ["Antara tokoh Sabah yang terlibat dalam pembentukan Malaysia ialah…", "Tun Fuad Stephens", "Tun Tan Cheng Lock", "Dato' Onn Jaafar", "Tun V.T. Sambanthan"],
    ["Antara tokoh Sarawak yang terlibat dalam pembentukan Malaysia ialah…", "Tun Temenggong Jugah", "Tun Datu Mustapha", "Lee Kuan Yew", "Tunku Abdul Rahman"]
  ]},
  { n: 2, t: "Negeri-negeri di Malaysia", q: [
    ["Malaysia mempunyai ___ buah negeri.", "13", "14", "11", "16"],
    ["Wilayah Persekutuan terdiri daripada Kuala Lumpur, Putrajaya dan…", "Labuan", "Langkawi", "Melaka", "Johor Bahru"],
    ["Ibu negeri Perak ialah…", "Ipoh", "Kuala Kangsar", "Taiping", "Teluk Intan"],
    ["Ibu negeri Pahang ialah…", "Kuantan", "Pekan", "Temerloh", "Bentong"],
    ["Ibu negeri Sabah ialah…", "Kota Kinabalu", "Sandakan", "Tawau", "Kudat"],
    ["Ibu negeri Sarawak ialah…", "Kuching", "Miri", "Sibu", "Bintulu"],
    ["Ibu negeri Kedah ialah…", "Alor Setar", "Sungai Petani", "Kulim", "Langkawi"],
    ["Ibu negeri Selangor ialah…", "Shah Alam", "Klang", "Petaling Jaya", "Kuala Lumpur"],
    ["Ibu negeri Perlis ialah…", "Kangar", "Arau", "Padang Besar", "Kuala Perlis"],
    ["Bandar diraja Perak ialah…", "Kuala Kangsar", "Ipoh", "Taiping", "Lumut"],
    ["Bandar diraja Pahang ialah…", "Pekan", "Kuantan", "Raub", "Jerantut"],
    ["Bandar diraja Selangor ialah…", "Klang", "Shah Alam", "Kajang", "Rawang"],
    ["Ketua negeri bagi Negeri Sembilan bergelar…", "Yang di-Pertuan Besar", "Sultan", "Raja", "Yang di-Pertua Negeri"],
    ["Ketua negeri bagi Perlis bergelar…", "Raja", "Sultan", "Yang di-Pertuan Besar", "Yang di-Pertua Negeri"],
    ["Ketua negeri bagi Melaka, Pulau Pinang, Sabah dan Sarawak bergelar…", "Yang di-Pertua Negeri", "Sultan", "Raja", "Perdana Menteri"]
  ]},
  { n: 3, t: "Rukun Negara", q: [
    ["Rukun Negara diisytiharkan pada…", "31 Ogos 1970", "31 Ogos 1957", "16 September 1963", "13 Mei 1969"],
    ["Rukun Negara diperkenalkan selepas peristiwa…", "13 Mei 1969", "Konfrontasi", "Malayan Union", "Perjanjian Pangkor"],
    ["Prinsip pertama Rukun Negara ialah…", "Kepercayaan kepada Tuhan", "Kesetiaan kepada Raja dan Negara", "Keluhuran Perlembagaan", "Kedaulatan Undang-undang"],
    ["Prinsip kedua Rukun Negara ialah…", "Kesetiaan kepada Raja dan Negara", "Kepercayaan kepada Tuhan", "Kesopanan dan Kesusilaan", "Keluhuran Perlembagaan"],
    ["Prinsip ketiga Rukun Negara ialah…", "Keluhuran Perlembagaan", "Kedaulatan Undang-undang", "Kepercayaan kepada Tuhan", "Kesopanan dan Kesusilaan"],
    ["Prinsip keempat Rukun Negara ialah…", "Kedaulatan Undang-undang", "Keluhuran Perlembagaan", "Kesetiaan kepada Raja dan Negara", "Kepercayaan kepada Tuhan"],
    ["Prinsip kelima Rukun Negara ialah…", "Kesopanan dan Kesusilaan", "Kedaulatan Undang-undang", "Keluhuran Perlembagaan", "Kepercayaan kepada Tuhan"],
    ["Rukun Negara mempunyai ___ prinsip.", "5", "4", "6", "3"],
    ["Matlamat utama Rukun Negara ialah untuk…", "memupuk perpaduan rakyat", "memisahkan kaum", "mengurangkan pelajaran", "menambah cukai"]
  ]},
  { n: 4, t: "Kaum di Malaysia", q: [
    ["Kaum Bumiputera yang paling ramai di Sabah ialah…", "Kadazandusun", "Iban", "Bidayuh", "Melanau"],
    ["Kaum Bumiputera yang paling ramai di Sarawak ialah…", "Iban", "Kadazandusun", "Murut", "Bajau"],
    ["Penduduk asal Semenanjung Malaysia dikenali sebagai…", "Orang Asli", "Orang Ulu", "Bajau", "Iban"],
    ["Alat muzik sape berasal daripada masyarakat…", "Orang Ulu di Sarawak", "Cina", "India", "Melayu Kelantan"],
    ["Alat muzik sompoton berasal daripada masyarakat…", "Kadazandusun di Sabah", "Iban di Sarawak", "Melayu di Johor", "Cina di Pulau Pinang"],
    ["Tarian Sumazau berasal dari…", "Sabah", "Sarawak", "Kelantan", "Melaka"],
    ["Tarian Ngajat ialah tarian masyarakat…", "Iban", "Kadazandusun", "Cina", "Portugis"],
    ["Tarian Zapin popular di negeri…", "Johor", "Sabah", "Sarawak", "Perlis"],
    ["Permainan tradisional yang dimainkan dengan menerbangkan layang-layang besar ialah…", "wau", "gasing", "congkak", "batu seremban"],
    ["Permainan tradisional yang menggunakan papan berlubang dan biji guli ialah…", "congkak", "wau", "sepak raga", "gasing"],
    ["Cerita rakyat Mahsuri berkait dengan pulau…", "Langkawi", "Pangkor", "Tioman", "Redang"]
  ]},
  { n: 5, t: "Agama dan Kepercayaan", q: [
    ["Agama bagi Persekutuan Malaysia ialah…", "Islam", "Kristian", "Buddha", "Hindu"],
    ["Perlembagaan menjamin agama lain…", "bebas diamalkan dengan aman", "dilarang", "hanya diamalkan di luar negara", "tidak boleh diajar"],
    ["Rumah ibadat bagi penganut agama Islam ialah…", "masjid", "kuil", "gereja", "tokong"],
    ["Rumah ibadat bagi penganut agama Hindu ialah…", "kuil", "masjid", "gereja", "gurdwara"],
    ["Rumah ibadat bagi penganut agama Kristian ialah…", "gereja", "kuil", "tokong", "masjid"],
    ["Rumah ibadat bagi penganut agama Buddha ialah…", "tokong", "gereja", "gurdwara", "masjid"],
    ["Rumah ibadat bagi penganut agama Sikh ialah…", "gurdwara", "tokong", "kuil", "gereja"],
    ["Sikap yang betul terhadap agama lain ialah…", "saling menghormati", "mengejek", "memusuhi", "merosakkan rumah ibadat"]
  ]},
  { n: 6, t: "Perayaan Masyarakat di Malaysia", q: [
    ["Hari Raya Aidilfitri disambut selepas umat Islam berpuasa pada bulan…", "Ramadan", "Syawal", "Zulhijah", "Muharam"],
    ["Perayaan yang dikenali sebagai Pesta Cahaya ialah…", "Deepavali", "Tahun Baharu Cina", "Krismas", "Wesak"],
    ["Pemberian angpau sinonim dengan perayaan…", "Tahun Baharu Cina", "Deepavali", "Hari Gawai", "Krismas"],
    ["Hari Wesak disambut oleh penganut agama…", "Buddha", "Hindu", "Kristian", "Islam"],
    ["Pesta Kaamatan ialah perayaan menuai di…", "Sabah", "Sarawak", "Kelantan", "Kedah"],
    ["Hari Gawai ialah perayaan menuai di…", "Sarawak", "Sabah", "Pahang", "Johor"],
    ["Krismas disambut oleh penganut agama…", "Kristian", "Buddha", "Hindu", "Sikh"],
    ["Amalan mengadakan rumah terbuka semasa perayaan dapat…", "mengeratkan perpaduan", "memecahbelahkan rakyat", "membazir sahaja", "menimbulkan pergaduhan"]
  ]},
  { n: 7, t: "Pemimpin Negara Malaysia", q: [
    ["Perdana Menteri pertama Malaysia ialah…", "Tunku Abdul Rahman", "Tun Abdul Razak", "Tun Hussein Onn", "Tun Dr. Mahathir Mohamad"],
    ["Tunku Abdul Rahman digelar Bapa…", "Kemerdekaan", "Pembangunan", "Perpaduan", "Pemodenan"],
    ["Tun Abdul Razak digelar Bapa…", "Pembangunan", "Kemerdekaan", "Perpaduan", "Pemodenan"],
    ["Tun Hussein Onn digelar Bapa…", "Perpaduan", "Pembangunan", "Kemerdekaan", "Pemodenan"],
    ["Tun Dr. Mahathir Mohamad digelar Bapa…", "Pemodenan", "Kemerdekaan", "Perpaduan", "Pembangunan"],
    ["Perdana Menteri ketiga Malaysia ialah…", "Tun Hussein Onn", "Tun Abdul Razak", "Tunku Abdul Rahman", "Tun Abdullah Ahmad Badawi"],
    ["Perdana Menteri kelima Malaysia ialah…", "Tun Abdullah Ahmad Badawi", "Tun Dr. Mahathir Mohamad", "Tun Hussein Onn", "Tun Abdul Razak"],
    ["Perdana Menteri dilantik oleh…", "Yang di-Pertuan Agong", "Ketua Hakim Negara", "Menteri Besar", "Speaker Dewan Rakyat"],
    ["Perdana Menteri ialah ketua…", "kerajaan dan Jemaah Menteri", "agama Islam", "angkatan tentera", "Majlis Raja-Raja"],
    ["Dasar Ekonomi Baru (DEB) diperkenalkan pada zaman pentadbiran…", "Tun Abdul Razak", "Tunku Abdul Rahman", "Tun Hussein Onn", "Tun Abdullah Ahmad Badawi"]
  ]},
  { n: 8, t: "Kemajuan Ekonomi Malaysia", q: [
    ["Pada awal kemerdekaan, ekonomi Malaysia bergantung kepada getah dan…", "bijih timah", "kereta", "telefon pintar", "pelancongan angkasa"],
    ["Syarikat minyak dan gas nasional Malaysia ialah…", "PETRONAS", "PROTON", "TNB", "Pos Malaysia"],
    ["Kereta nasional pertama Malaysia ialah…", "Proton Saga", "Perodua Kancil", "Proton Wira", "Perodua Myvi"],
    ["Malaysia merupakan antara pengeluar utama dunia bagi…", "minyak sawit", "gandum", "salji", "anggur"],
    ["FELDA ditubuhkan untuk membantu…", "peneroka membangunkan tanah pertanian", "pelajar universiti", "pelancong asing", "pemandu teksi"],
    ["Menara Berkembar Petronas terletak di…", "Kuala Lumpur", "Putrajaya", "Johor Bahru", "Kota Kinabalu"],
    ["Putrajaya dibina sebagai pusat…", "pentadbiran kerajaan persekutuan", "perlombongan", "perikanan", "pertanian"],
    ["Contoh sektor ekonomi yang membawa pendapatan negara ialah…", "pembuatan, perkhidmatan dan pelancongan", "perjudian", "pemburuan haram", "pembalakan haram"]
  ]},
  { n: 9, t: "Sukan Kebanggaan Malaysia", q: [
    ["Datuk Lee Chong Wei terkenal dalam sukan…", "badminton", "skuasy", "bola sepak", "berbasikal"],
    ["Datuk Nicol David terkenal dalam sukan…", "skuasy", "badminton", "renang", "tenis"],
    ["Pandelela Rinong terkenal dalam sukan…", "terjun", "lumba lari", "badminton", "boling"],
    ["Datuk Azizulhasni Awang terkenal dalam sukan…", "berbasikal trek", "renang", "skuasy", "hoki"],
    ["Datuk Mokhtar Dahari ialah legenda sukan…", "bola sepak", "badminton", "hoki", "sepak takraw"],
    ["Piala Thomas ialah kejohanan berpasukan dalam sukan…", "badminton", "bola sepak", "hoki", "tenis"],
    ["Sukan Komanwel 1998 diadakan di…", "Kuala Lumpur", "Johor Bahru", "Kuching", "Ipoh"],
    ["Sukan berperanan sebagai alat…", "perpaduan rakyat", "perpecahan", "pergaduhan", "permusuhan"]
  ]},
  { n: 10, t: "Malaysia dan Dunia", q: [
    ["ASEAN ditubuhkan pada tahun…", "1967", "1957", "1963", "1975"],
    ["ASEAN ditubuhkan di…", "Bangkok", "Kuala Lumpur", "Jakarta", "Manila"],
    ["Negara pengasas ASEAN ialah Malaysia, Indonesia, Thailand, Filipina dan…", "Singapura", "Brunei", "Vietnam", "Myanmar"],
    ["Komanwel ialah pertubuhan negara-negara yang kebanyakannya pernah dijajah oleh…", "British", "Portugis", "Belanda", "Jepun"],
    ["OIC ialah singkatan bagi pertubuhan…", "Kerjasama Islam", "Kesihatan Sedunia", "Bangsa-Bangsa Bersatu", "Negara Asia Tenggara"],
    ["Ibu pejabat Pertubuhan Bangsa-Bangsa Bersatu (PBB) terletak di…", "New York", "London", "Paris", "Geneva"],
    ["Malaysia menjadi anggota PBB sejak tahun…", "1957", "1963", "1967", "1970"],
    ["Malaysia menyumbang kepada keamanan dunia dengan menghantar…", "pasukan pengaman PBB", "pelancong", "atlet sahaja", "penyanyi"]
  ]}
],

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Penjodoh Bilangan dan Kata Nama", q: [
    ["Penjodoh bilangan yang sesuai: \"sebutir ___\"", "mutiara", "kereta", "rumah", "lembu"],
    ["Penjodoh bilangan yang sesuai: \"sepucuk ___\"", "senapang", "kain", "bunga", "kasut"],
    ["Penjodoh bilangan yang sesuai: \"segulung ___\"", "tikar", "pisang", "lembu", "bola"],
    ["Penjodoh bilangan yang sesuai: \"sepasukan ___\"", "pemain", "kereta", "rumah", "buku"],
    ["Penjodoh bilangan yang sesuai: \"sekawan ___\"", "burung", "rumah", "kertas", "pensel"],
    ["Penjodoh bilangan yang sesuai: \"serumpun ___\"", "buluh", "kucing", "buku", "kereta"],
    ["Penjodoh bilangan yang sesuai: \"sebuah ___\"", "negara", "ikan", "baju", "pensel"],
    ["Penjodoh bilangan yang sesuai: \"sebatang ___\"", "sungai", "kucing", "buku", "baju"],
    ["Kata nama terbitan bagi \"adil\" ialah…", "keadilan", "mengadili", "diadili", "adilan"],
    ["Kata nama terbitan bagi \"sabar\" ialah…", "kesabaran", "bersabar", "menyabarkan", "sabaran"],
    ["Kata nama terbitan bagi \"lukis\" ialah…", "pelukis", "melukis", "dilukis", "berlukis"]
  ]},
  { t: "Imbuhan dan Kata Kerja", q: [
    ["Imbuhan \"memper-…-kan\" + \"kenal\" menjadi…", "memperkenalkan", "mengenalkan", "perkenalan", "pengenalan"],
    ["Imbuhan \"di-…-i\" + \"hormat\" menjadi…", "dihormati", "dihormatkan", "menghormati", "kehormatan"],
    ["Imbuhan \"ke-…-an\" + \"jaya\" menjadi…", "kejayaan", "berjaya", "menjayakan", "penjaya"],
    ["Imbuhan \"ber-…-an\" + \"salam\" menjadi…", "bersalaman", "persalaman", "salaman", "bersalam"],
    ["Imbuhan \"me-\" + \"syukur\" + \"-i\" menjadi…", "mensyukuri", "menyukuri", "mesyukuri", "mengsyukuri"],
    ["Mereka ___ kemenangan itu dengan gembira.", "meraikan", "diraikan", "perayaan", "keraian"],
    ["Peraturan sekolah mesti ___ oleh semua murid.", "dipatuhi", "mematuhi", "kepatuhan", "patuhan"],
    ["Guru besar ___ hadiah kepada murid cemerlang.", "menyampaikan", "disampaikan", "penyampaian", "sampaian"],
    ["Kata kerja pasif diri pertama yang betul ialah…", "Buku itu saya baca.", "Buku itu dibaca saya.", "Buku itu dibaca oleh saya.", "Buku itu membaca saya."],
    ["Yang manakah kata kerja tak transitif berpelengkap?", "menjadi (guru)", "makan (nasi)", "membeli (buku)", "menendang (bola)"]
  ]},
  { t: "Peribahasa", q: [
    ["Peribahasa \"air dicincang tidak akan putus\" bermaksud…", "persaudaraan tidak putus walaupun bergaduh", "air sukar dipotong", "sungai yang panjang", "air yang jernih"],
    ["Peribahasa \"ada udang di sebalik batu\" bermaksud…", "ada maksud tersembunyi", "banyak udang di sungai", "suka bersembunyi", "orang yang jujur"],
    ["Peribahasa \"bagai menatang minyak yang penuh\" bermaksud…", "menjaga dengan penuh kasih sayang", "membawa minyak", "tumpah minyak", "berjalan perlahan"],
    ["Peribahasa \"hangat-hangat tahi ayam\" bermaksud…", "bersemangat pada awal sahaja", "cuaca panas", "ayam yang sakit", "rajin berterusan"],
    ["Peribahasa \"kerana pulut santan binasa, kerana mulut badan binasa\" bermaksud…", "kata-kata yang tidak dijaga mendatangkan bencana", "makan pulut berbahaya", "santan basi", "suka bercakap baik"],
    ["Peribahasa \"di mana bumi dipijak, di situ langit dijunjung\" bermaksud…", "menghormati adat tempat yang didiami", "memijak bumi", "melihat langit", "tidak menghormati orang"],
    ["Peribahasa \"yang bulat tidak datang bergolek, yang pipih tidak datang melayang\" bermaksud…", "kejayaan memerlukan usaha", "bola bergolek sendiri", "barang mudah didapati", "rezeki datang tanpa usaha"],
    ["Peribahasa \"seperti aur dengan tebing\" bermaksud…", "saling membantu", "selalu bergaduh", "tinggal di tebing", "suka berkebun"],
    ["Simpulan bahasa \"panjang tangan\" bermaksud…", "suka mencuri", "suka menolong", "tinggi lampai", "suka bersalam"],
    ["Simpulan bahasa \"buah hati\" bermaksud…", "orang yang sangat disayangi", "buah yang manis", "jantung", "hadiah"],
    ["Simpulan bahasa \"kaki ayam\" bermaksud…", "tidak memakai kasut", "kaki yang kurus", "suka berjalan", "berlari laju"]
  ]},
  { t: "Ayat dan Tanda Baca", q: [
    ["Yang manakah ayat majmuk gabungan?", "Ali membaca buku dan adiknya menulis karangan.", "Ali membaca buku.", "Buku itu dibaca oleh Ali.", "Ali, bacalah buku itu."],
    ["Yang manakah ayat majmuk pancangan?", "Murid yang rajin itu mendapat hadiah.", "Murid itu rajin.", "Murid itu mendapat hadiah.", "Rajinlah belajar."],
    ["Ayat \"Adik menangis kerana jatuh.\" ialah ayat…", "majmuk", "tunggal", "tanya", "seruan"],
    ["Cakap ajuk bagi \"Ibu berkata bahawa dia akan pulang lewat.\" ialah…", "\"Saya akan pulang lewat,\" kata ibu.", "\"Ibu akan pulang lewat,\" kata ibu.", "Ibu pulang lewat kata ibu.", "Kata ibu dia pulang lewat"],
    ["Cakap pindah bagi: \"Saya akan membantu kamu,\" kata Siti kepada Ali. ialah…", "Siti berkata kepada Ali bahawa dia akan membantunya.", "Siti berkata saya akan membantu kamu.", "Ali akan membantu Siti.", "\"Siti akan membantu,\" kata Ali."],
    ["Tanda baca titik bertindih (:) digunakan sebelum…", "senarai atau penerangan", "akhir ayat tanya", "seruan", "nama orang"],
    ["Tanda sempang (-) digunakan dalam…", "kata ganda seperti kanak-kanak", "akhir ayat", "nama tempat", "senarai panjang"],
    ["Ayat yang betul ialah…", "Para hadirin dijemput duduk.", "Para hadirin-hadirin dijemput duduk.", "Para-para hadirin dijemput duduk.", "Hadirin-hadirin para dijemput duduk."],
    ["Ayat yang betul ialah…", "Semua murid hadir ke majlis itu.", "Semua murid-murid hadir ke majlis itu.", "Murid-murid semua-semua hadir.", "Semua para murid-murid hadir."],
    ["Kesalahan dalam ayat \"Banyak kereta-kereta di jalan raya.\" ialah…", "kata ganda tidak perlu selepas \"banyak\"", "tiada kesalahan", "salah ejaan jalan raya", "tiada tanda koma"]
  ]},
  { t: "Ejaan dan Kosa Kata", q: [
    ["Ejaan yang betul ialah…", "kerjasama", "kerja sama", "kerjesama", "kerje sama"],
    ["Ejaan yang betul ialah…", "antarabangsa", "antara bangsa", "antara-bangsa", "antarbangsa"],
    ["Ejaan yang betul ialah…", "setiausaha", "setia usaha", "setia-usaha", "setiausahe"],
    ["Ejaan yang betul ialah…", "pertandingan", "pertandinggan", "pertandigan", "petandingan"],
    ["Ejaan yang betul ialah…", "teknologi", "tekonologi", "teknolagi", "teknoloji"],
    ["Maksud perkataan \"gigih\" ialah…", "bersungguh-sungguh", "malas", "lemah", "takut"],
    ["Maksud perkataan \"murni\" ialah…", "suci dan baik", "kotor", "kasar", "jahat"],
    ["Maksud perkataan \"kemarau\" ialah…", "musim kering tanpa hujan", "musim hujan", "banjir besar", "musim sejuk"],
    ["Maksud perkataan \"lestari\" ialah…", "kekal dan berterusan", "rosak", "sementara", "baru"],
    ["Antonim bagi \"sementara\" ialah…", "kekal", "singkat", "baru", "pendek"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["Which word means \"to make something better\"?", "improve", "destroy", "ignore", "forget"],
    ["Which word means \"to keep something safe\"?", "protect", "damage", "lose", "break"],
    ["Which word means \"a person who visits a place for fun\"?", "tourist", "tailor", "tenant", "teacher"],
    ["Which word means \"very old\"?", "ancient", "modern", "recent", "fresh"],
    ["Which word means \"very important\"?", "essential", "useless", "tiny", "boring"],
    ["The opposite of \"generous\" is…", "stingy", "kind", "helpful", "friendly"],
    ["The opposite of \"brave\" is…", "cowardly", "bold", "strong", "fearless"],
    ["The opposite of \"increase\" is…", "decrease", "grow", "raise", "add"],
    ["A synonym of \"begin\" is…", "start", "finish", "stop", "end"],
    ["A synonym of \"difficult\" is…", "hard", "easy", "simple", "light"]
  ]},
  { t: "Tenses", q: [
    ["She ___ already ___ her lunch.", "has … eaten", "have … eaten", "has … ate", "is … eating"],
    ["They ___ in Penang since 2019.", "have lived", "has lived", "lived since", "are live"],
    ["While I ___ , the phone rang.", "was cooking", "am cooking", "cook", "cooks"],
    ["By next year, I ___ in Form 1.", "will be", "was", "am being", "have been"],
    ["Past participle of \"write\" is…", "written", "wrote", "writed", "writing"],
    ["Past participle of \"go\" is…", "gone", "went", "goed", "going"],
    ["Past participle of \"choose\" is…", "chosen", "chose", "choosed", "chosed"],
    ["Which sentence is in the past continuous tense?", "We were watching TV.", "We watch TV.", "We have watched TV.", "We will watch TV."],
    ["Which sentence is in the present perfect tense?", "I have finished my work.", "I finished my work.", "I am finishing my work.", "I will finish my work."]
  ]},
  { t: "Active and Passive", q: [
    ["Passive: \"The cat chased the mouse.\"", "The mouse was chased by the cat.", "The cat was chased by the mouse.", "The mouse chased the cat.", "The mouse is chasing the cat."],
    ["Passive: \"Ali cleans the classroom.\"", "The classroom is cleaned by Ali.", "The classroom was cleaned by Ali.", "Ali is cleaned by the classroom.", "The classroom cleans Ali."],
    ["Active: \"The letter was written by Mei Ling.\"", "Mei Ling wrote the letter.", "Mei Ling writes the letter.", "The letter wrote Mei Ling.", "Mei Ling was writing."],
    ["\"The cake ___ by my mother yesterday.\"", "was baked", "is baked", "baked", "bakes"],
    ["\"English ___ in many countries.\"", "is spoken", "speaks", "spoke", "is speak"],
    ["Which sentence is passive?", "The trees were planted by the pupils.", "The pupils planted the trees.", "The pupils plant trees.", "The pupils are planting trees."]
  ]},
  { t: "Reported Speech", q: [
    ["She said, \"I am tired.\" → She said that she ___ tired.", "was", "is", "am", "were"],
    ["He said, \"I like football.\" → He said that he ___ football.", "liked", "likes", "like", "liking"],
    ["Ali said, \"I will come.\" → Ali said that he ___ come.", "would", "will", "shall", "can't"],
    ["The teacher said, \"Open your books.\" → The teacher told us ___ our books.", "to open", "open", "opened", "opening"],
    ["Mum said, \"Don't run.\" → Mum told me ___ run.", "not to", "don't", "to not", "no"],
    ["Siti asked, \"Where is the library?\" → Siti asked where the library ___.", "was", "is", "were", "be"]
  ]},
  { t: "Connectors and Prepositions", q: [
    ["___ it was raining, they continued playing.", "Although", "Because", "So", "Unless"],
    ["You will not pass ___ you study hard.", "unless", "because", "although", "and"],
    ["She is good at singing ___ dancing.", "as well as", "but", "although", "unless"],
    ["___ finishing his homework, he went out to play.", "After", "Before", "Unless", "Although"],
    ["He is interested ___ science.", "in", "on", "at", "for"],
    ["She is afraid ___ spiders.", "of", "with", "at", "on"],
    ["We must take care ___ our environment.", "of", "at", "on", "with"],
    ["He apologised ___ being late.", "for", "of", "at", "with"],
    ["Malaysia is famous ___ its delicious food.", "for", "of", "at", "with"]
  ]},
  { t: "Idioms and Proverbs", q: [
    ["\"Don't count your chickens before they hatch\" means…", "don't be too sure before something happens", "count your chickens carefully", "eggs are fragile", "farmers are busy"],
    ["\"Actions speak louder than words\" means…", "what you do matters more than what you say", "shout loudly", "talk a lot", "be quiet"],
    ["\"Practice makes perfect\" means…", "you improve by practising", "nobody is perfect", "never practise", "practise once only"],
    ["\"Hit the nail on the head\" means…", "say exactly the right thing", "hurt your hand", "build a house", "make a mistake"],
    ["\"Over the moon\" means…", "extremely happy", "very tired", "flying high", "lost"],
    ["\"Spill the beans\" means…", "reveal a secret", "drop food", "cook beans", "be messy"],
    ["\"Break a leg!\" means…", "good luck", "be careful", "go to hospital", "stop dancing"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM (ikut bidang KSSR) ======================= */
pi: [
  { t: "Al-Quran dan Tajwid", q: [
    ["Mad wajib muttasil berlaku apabila huruf mad bertemu hamzah dalam ___ perkataan.", "satu", "dua", "tiga", "tiada"],
    ["Mad jaiz munfasil berlaku apabila huruf mad bertemu hamzah dalam ___ perkataan.", "dua", "satu", "tiga", "tiada"],
    ["Mad wajib muttasil dibaca sepanjang…", "4 atau 5 harakat", "2 harakat", "6 harakat", "1 harakat"],
    ["Mad asli (tabi'i) dibaca sepanjang…", "2 harakat", "4 harakat", "6 harakat", "8 harakat"],
    ["Huruf qalqalah ialah…", "ق ط ب ج د", "ي ن م و", "ل ر", "ء ه ع ح غ خ"],
    ["Qalqalah kubra berlaku apabila huruf qalqalah…", "dimatikan kerana berhenti di hujung ayat", "berbaris atas", "di tengah perkataan berbaris", "bersabdu sahaja"],
    ["Surah al-Insyirah mengandungi ___ ayat.", "8", "6", "11", "5"],
    ["Surah ad-Duha mengandungi ___ ayat.", "11", "8", "5", "6"],
    ["Surah at-Tin mengandungi ___ ayat.", "8", "11", "5", "6"],
    ["Surah al-Insyirah memberi pengajaran bahawa…", "selepas kesusahan ada kemudahan", "kita perlu bermalasan", "harta paling penting", "kita tidak perlu berusaha"]
  ]},
  { t: "Akidah", q: [
    ["Sifat mustahil bagi Allah ialah sifat yang…", "tidak mungkin ada pada Allah", "wajib ada pada Allah", "harus bagi Allah", "ada pada manusia sahaja"],
    ["Lawan bagi sifat Wujud (ada) ialah…", "'Adam (tiada)", "Fana' (binasa)", "Huduth (baharu)", "'Ajzun (lemah)"],
    ["Lawan bagi sifat Baqa' (kekal) ialah…", "Fana' (binasa)", "'Adam (tiada)", "Jahlun (jahil)", "Summun (tuli)"],
    ["Lawan bagi sifat Qudrah (berkuasa) ialah…", "'Ajzun (lemah)", "Fana' (binasa)", "Maut (mati)", "Bukmun (bisu)"],
    ["Sifat harus bagi Allah ialah…", "Allah boleh mencipta atau tidak mencipta sesuatu", "Allah wajib mencipta", "Allah tidak boleh mencipta", "Allah seperti makhluk"],
    ["Sifat wajib bagi rasul ada…", "4", "20", "13", "6"],
    ["Sifat Siddiq bagi rasul bermaksud…", "benar", "amanah", "menyampaikan", "bijaksana"],
    ["Sifat Amanah bagi rasul bermaksud…", "boleh dipercayai", "benar", "bijaksana", "menyampaikan"],
    ["Sifat Tabligh bagi rasul bermaksud…", "menyampaikan", "benar", "amanah", "bijaksana"],
    ["Sifat Fatanah bagi rasul bermaksud…", "bijaksana", "benar", "amanah", "menyampaikan"]
  ]},
  { t: "Ibadah", q: [
    ["Rukun haji ada ___ perkara.", "6", "5", "4", "13"],
    ["Wukuf di Arafah dilakukan pada ___ Zulhijah.", "9", "10", "1", "15"],
    ["Ibadah korban dilakukan bermula ___ Zulhijah.", "10", "9", "1", "27"],
    ["Saie dilakukan antara Bukit Safa dan Bukit…", "Marwah", "Uhud", "Thur", "Arafah"],
    ["Tawaf ialah mengelilingi Kaabah sebanyak ___ kali.", "7", "3", "5", "10"],
    ["Pakaian ihram lelaki ialah…", "dua helai kain putih tidak berjahit", "baju melayu", "jubah berwarna", "seluar dan kemeja"],
    ["Menguruskan jenazah hukumnya…", "fardu kifayah", "fardu ain", "sunat", "harus"],
    ["Antara perkara wajib dalam pengurusan jenazah ialah memandikan, mengkafankan, menyembahyangkan dan…", "mengebumikan", "membakar", "menghias", "menyimpan"],
    ["Solat jenazah tidak mempunyai…", "rukuk dan sujud", "niat", "takbir", "salam"],
    ["Umrah boleh dilakukan pada…", "bila-bila masa sepanjang tahun", "bulan Zulhijah sahaja", "bulan Ramadan sahaja", "hari Jumaat sahaja"]
  ]},
  { t: "Sirah", q: [
    ["Perang Badar berlaku pada bulan…", "Ramadan", "Syawal", "Muharam", "Rejab"],
    ["Perang pertama dalam sejarah Islam ialah Perang…", "Badar", "Uhud", "Khandak", "Tabuk"],
    ["Dalam Perang Khandak, umat Islam menggali…", "parit", "telaga", "terowong", "kubu batu"],
    ["Cadangan menggali parit dalam Perang Khandak diberi oleh…", "Salman al-Farisi", "Abu Bakar", "Umar al-Khattab", "Khalid al-Walid"],
    ["Perjanjian antara umat Islam dan Quraisy pada tahun 6 Hijrah ialah Perjanjian…", "Hudaibiyah", "Aqabah", "Madinah", "Taif"],
    ["Pembukaan Kota Makkah (Fathu Makkah) berlaku pada tahun…", "8 Hijrah", "1 Hijrah", "2 Hijrah", "11 Hijrah"],
    ["Khulafa' ar-Rasyidin terdiri daripada ___ orang khalifah.", "4", "5", "3", "10"],
    ["Khalifah kedua ialah…", "Umar al-Khattab", "Abu Bakar as-Siddiq", "Uthman bin Affan", "Ali bin Abi Talib"],
    ["Khalifah ketiga ialah…", "Uthman bin Affan", "Umar al-Khattab", "Ali bin Abi Talib", "Abu Bakar as-Siddiq"],
    ["Khalifah keempat ialah…", "Ali bin Abi Talib", "Uthman bin Affan", "Umar al-Khattab", "Muawiyah"]
  ]},
  { t: "Adab", q: [
    ["Adab apabila mendengar azan ialah…", "berhenti bercakap dan menjawab azan", "terus bermain", "menguatkan muzik", "berlari"],
    ["Adab menziarahi orang sakit ialah…", "mendoakan kesembuhannya dan tidak lama sangat", "membuat bising", "duduk berjam-jam", "makan makanan pesakit"],
    ["Adab menggunakan media sosial ialah…", "tidak menyebarkan fitnah", "menghina orang", "berkongsi berita palsu", "membuli orang lain"],
    ["Sebelum berkongsi sesuatu berita, kita perlu…", "menyemak kesahihannya", "terus sebarkan", "menambah cerita", "mengubah fakta"],
    ["Islam menggalakkan kita bersikap…", "jujur dan amanah", "suka berbohong", "pemarah", "sombong"],
    ["Menghormati orang yang berlainan agama ialah tuntutan…", "Islam", "yang salah", "tidak penting", "hanya di sekolah"]
  ]},
  { t: "Jawi", q: [
    ["ماليسيا|Perkataan Jawi ini dibaca…", "Malaysia", "Melaka", "Malayu", "Melati"],
    ["کمرديکاٴن|Perkataan Jawi ini dibaca…", "kemerdekaan", "kemerahan", "kemudahan", "kebersihan"],
    ["Ejaan Jawi bagi \"Malaysia\" ialah…", "ماليسيا", "مليسيا", "ماليسي", "ملايسيا"],
    ["Ejaan Jawi bagi \"sekolah\" ialah…", "سکوله", "سکله", "سکولا", "سيکوله"],
    ["Tanda hamzah tiga suku (ٴ) digunakan dalam ejaan perkataan seperti…", "kemerdekaan", "buku", "rumah", "makan"],
    ["Jenis khat yang dipelajari di sekolah rendah termasuk Nasakh dan…", "Rikaah", "Rumi", "Latin", "Braille"]
  ]}
],

/* ======================= BAHASA ARAB (ikut tema) ======================= */
ba: [
  { t: "Kesihatan", q: [
    ["طَبِيبٌ|Perkataan ini bermaksud…", "doktor", "jururawat", "pesakit", "guru"],
    ["مُمَرِّضَةٌ|Perkataan ini bermaksud…", "jururawat", "doktor", "guru", "polis"],
    ["مَرِيضٌ|Perkataan ini bermaksud…", "sakit / pesakit", "sihat", "doktor", "ubat"],
    ["دَوَاءٌ|Perkataan ini bermaksud…", "ubat", "makanan", "air", "hospital"],
    ["صِحَّةٌ|Perkataan ini bermaksud…", "kesihatan", "kesakitan", "kebersihan", "kekuatan"],
    ["مُسْتَشْفَى|Tempat ini ialah…", "hospital", "klinik gigi", "farmasi", "sekolah"]
  ]},
  { t: "Membeli-belah", q: [
    ["كَمْ ثَمَنُ هَذَا؟|Soalan ini bermaksud…", "Berapakah harga ini?", "Apakah ini?", "Di manakah ini?", "Siapakah ini?"],
    ["رَخِيصٌ|Perkataan ini bermaksud…", "murah", "mahal", "besar", "baru"],
    ["غَالٍ|Perkataan ini bermaksud…", "mahal", "murah", "kecil", "lama"],
    ["دُكَّانٌ|Perkataan ini bermaksud…", "kedai", "rumah", "sekolah", "masjid"],
    ["بَائِعٌ|Perkataan ini bermaksud…", "penjual", "pembeli", "guru", "doktor"],
    ["اِشْتَرَى|Kata kerja ini bermaksud…", "telah membeli", "telah menjual", "telah makan", "telah pergi"]
  ]},
  { t: "Sukan dan Riadah", q: [
    ["كُرَةُ الْقَدَمِ|Sukan ini ialah…", "bola sepak", "badminton", "renang", "lari"],
    ["الرِّيشَةُ الطَّائِرَةُ|Sukan ini ialah…", "badminton", "bola sepak", "bola keranjang", "renang"],
    ["السِّبَاحَةُ|Sukan ini ialah…", "renang", "lari", "badminton", "bola tampar"],
    ["مَلْعَبٌ|Perkataan ini bermaksud…", "padang / stadium", "kelas", "rumah", "kedai"],
    ["لَاعِبٌ|Perkataan ini bermaksud…", "pemain", "penonton", "guru", "jurulatih"],
    ["رِيَاضَةٌ|Perkataan ini bermaksud…", "sukan", "makanan", "pelajaran", "permainan video"]
  ]},
  { t: "Bulan Hijriah", q: [
    ["Bulan pertama dalam kalendar Hijrah ialah…", "مُحَرَّمٌ", "رَمَضَانُ", "شَوَّالٌ", "ذُو الْحِجَّةِ"],
    ["Bulan umat Islam berpuasa ialah…", "رَمَضَانُ", "مُحَرَّمٌ", "رَجَبٌ", "صَفَرٌ"],
    ["Bulan Hari Raya Aidilfitri ialah…", "شَوَّالٌ", "رَمَضَانُ", "مُحَرَّمٌ", "رَجَبٌ"],
    ["Bulan ibadah haji ialah…", "ذُو الْحِجَّةِ", "شَوَّالٌ", "رَمَضَانُ", "صَفَرٌ"],
    ["Kalendar Hijrah mempunyai ___ bulan.", "12", "10", "13", "11"]
  ]},
  { t: "Tatabahasa", q: [
    ["Perkataan dalam bahasa Arab terbahagi kepada isim, fi'il dan…", "harf", "sifat", "jumlah", "ayat"],
    ["كِتَابٌ ialah contoh…", "isim (kata nama)", "fi'il (kata kerja)", "harf (partikel)", "kata tanya"],
    ["كَتَبَ ialah contoh…", "fi'il (kata kerja)", "isim (kata nama)", "harf (partikel)", "kata sifat"],
    ["فِي ialah contoh…", "harf (partikel)", "isim", "fi'il", "kata sifat"],
    ["Bentuk jamak bagi طَالِبٌ (murid) ialah…", "طُلَّابٌ", "طَالِبَةٌ", "طَالِبَانِ", "مُطَالِبٌ"],
    ["طَالِبَانِ bermaksud…", "dua orang murid", "ramai murid", "seorang murid", "murid perempuan"],
    ["Perempuan bagi مُدَرِّسٌ (guru lelaki) ialah…", "مُدَرِّسَةٌ", "مُدَرِّسُونَ", "مَدْرَسَةٌ", "دَرْسٌ"]
  ]},
  { t: "Perjalanan", q: [
    ["سَفَرٌ|Perkataan ini bermaksud…", "perjalanan / musafir", "rumah", "makanan", "sekolah"],
    ["قِطَارٌ|Kenderaan ini ialah…", "kereta api", "kapal", "basikal", "kapal terbang"],
    ["سَفِينَةٌ|Kenderaan ini ialah…", "kapal", "kereta", "bas", "basikal"],
    ["حَافِلَةٌ|Kenderaan ini ialah…", "bas", "teksi", "kereta api", "lori"],
    ["جَوَازُ السَّفَرِ|Perkataan ini bermaksud…", "pasport", "tiket", "beg", "peta"],
    ["فُنْدُقٌ|Tempat ini ialah…", "hotel", "hospital", "pasar", "masjid"]
  ]}
]
};
})();
