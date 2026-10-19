/* =========================================================
   TAHUN 4 — Cerdik Ceria
   Matematik, Sains & Sejarah: bab/unit ikut DSKP / buku teks KSSR Tahun 4.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang KSSR.
   Bahasa Arab: ikut tema perbendaharaan kata.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🐱|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tahun 4 ---------- */
const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d === 1) return String(n); if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`; return `${n}/${d}`; }
const dec = (x, p = 3) => String(+x.toFixed(p));
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
const TEMPAT = ["sa", "puluh", "ratus", "ribu", "puluh ribu"];
function grid(x, y, mark, n = 6) {
  const K = v => v + "️⃣", rows = [];
  for (let j = n; j >= 1; j--) { let s = K(j); for (let i = 1; i <= n; i++) s += (i === x && j === y) ? mark : "⬜"; rows.push(s); }
  rows.push(K(0) + Array.from({ length: n }, (_, i) => K(i + 1)).join(""));
  return rows.join("\n");
}

SOALAN[4] = {

/* ======================= MATEMATIK (bab DSKP Tahun 4) ======================= */
math: [
  { t: "Nombor Bulat dan Operasi Asas",
    q: [
      ["Nombor terbesar lima digit ialah…", "99 999", "10 000", "90 000", "100 000"],
      ["Yang manakah nombor ganjil?", "357", "246", "1 000", "88"],
      ["Yang manakah nombor genap?", "4 528", "4 527", "1 111", "999"],
      ["Nombor genap berakhir dengan digit…", "0, 2, 4, 6 atau 8", "1, 3, 5, 7 atau 9", "5 sahaja", "9 sahaja"]
    ],
    g: [
      () => { let n, s, p, d; do { n = r(10001, 99999); s = String(n); p = r(0, 4); d = +s[4 - p]; } while (!d || s.split("").filter(x => +x === d).length > 1); const v = d * 10 ** p; return from(`Nilai digit ${d} dalam ${fmt(n)} ialah…`, fmt(v), [d, d * 10, d * 100, d * 1000, d * 10000].filter(x => x !== v).map(fmt), `Digit ${d} berada di tempat ${TEMPAT[p]}.`); },
      () => { const n = r(10001, 94999); const ans = Math.round(n / 10000) * 10000; return q(`Bundarkan ${fmt(n)} kepada puluh ribu yang terdekat.`, ans, [10000, 1000]); },
      () => { const n = r(1001, 99499); const ans = Math.round(n / 1000) * 1000; return q(`Bundarkan ${fmt(n)} kepada ribu yang terdekat.`, ans, [1000, 100, 10000]); },
      () => { const a = r(10000, 70000), b = r(1000, 99999 - a); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const a = r(20000, 99999), b = r(1000, a - 1); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const b = r(11, 99), a = r(100, Math.floor(99999 / b)); return q(`${fmt(a)} × ${b} = ?`, a * b, [a, b, 10, 100]); },
      () => { const b = r(2, 99), c = r(100, Math.floor(99999 / b)); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 10, b]); },
      () => { const a = r(1000, 50000), b = r(100, 40000); return q(`${fmt(a)} + ___ = ${fmt(a + b)}`, b, [1, 10, 100, 1000], false, "Tolak untuk mencari nombor yang tidak diketahui."); },
      () => { const a = r(1000, 9000), b = r(2, 9), c = r(100, 900); return q(`${fmt(a)} + ${b} × ${c} = ?`, a + b * c, [c, b, 10], false, "Darab dahulu, kemudian tambah."); },
      () => { const k = r(12, 60), n = r(120, 900); return q(`🥚|Sebuah ladang menghasilkan ${n} biji telur sehari. Berapakah jumlah telur dalam ${k} hari?`, n * k, [n, k, 100]); }
    ] },
  { t: "Pecahan, Perpuluhan dan Peratus",
    q: [
      ["Yang manakah nombor bercampur?", "2 1/3", "7/3", "1/3", "3/3"],
      ["0.25 dalam bentuk pecahan termudah ialah…", "1/4", "25/10", "2/5", "1/25"],
      ["1/2 dalam bentuk peratus ialah…", "50%", "12%", "20%", "2%"]
    ],
    g: [
      () => { const d = pick([2, 3, 4, 5, 6, 8]), w = r(1, 4), n = r(1, d - 1); const im = w * d + n; return from(`${im}/${d} dalam bentuk nombor bercampur ialah…`, frac(im, d), [frac(im + d, d), `${n} ${w}/${d}`, frac(im - 1, d), `${w} ${d}/${im}`].filter(x => !/ 0\//.test(x))); },
      () => { const d = pick([2, 3, 4, 5, 6, 8]), w = r(1, 4), n = r(1, d - 1); const right = `${w * d + n}/${d}`; return from(`${w} ${n}/${d} dalam bentuk pecahan tak wajar ialah…`, right, [`${w * n + d}/${d}`, `${w + n}/${d}`, `${w * d}/${d}`, `${w * d + n}/${d + 1}`, `${w * d + n + 1}/${d}`, `${w * d - n}/${d}`]); },
      () => { const [d1, d2] = pick([[2, 4], [3, 6], [4, 8], [2, 6], [5, 10], [3, 9]]); const a = r(1, d1 - 1), b = r(1, d2 - 1); const right = frac(a * d2 / d1 + b, d2); return from(`${a}/${d1} + ${b}/${d2} = ?`, right, [frac(a + b, d1 + d2), frac(a + b, d2), frac(a * d2 / d1 + b + 1, d2), frac(a + b, d1)]); },
      () => { const d = pick([3, 4, 5, 6, 8, 10]), a = r(1, d - 1), n = d * r(3, 25); return q(`${a}/${d} daripada ${fmt(n)} = ?`, n / d * a, [1, n / d, a, 2]); },
      () => { const a = r(1001, 9999) / 1000, b = r(1001, 9999) / 1000; return q(`${dec(a)} + ${dec(b)} = ?`, +(a + b).toFixed(3), [0.1, 1, 0.01, 0.001], true, "", x => dec(x)); },
      () => { const a = r(5001, 9999) / 1000, b = r(1001, 4999) / 1000; return q(`${dec(a)} − ${dec(b)} = ?`, +(a - b).toFixed(3), [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const a = r(101, 999) / 100, b = r(2, 9); return q(`${dec(a, 2)} × ${b} = ?`, +(a * b).toFixed(2), [0.1, 1, 0.5], true, "", x => dec(x, 2)); },
      () => { const b = r(2, 9), c = r(101, 999) / 100; return q(`${dec(b * c, 2)} ÷ ${b} = ?`, c, [0.1, 1, 0.01], true, "", x => dec(x, 2)); },
      () => { const p = pick([10, 20, 25, 50, 75]), n = r(2, 40) * 20; return q(`${p}% daripada ${fmt(n)} = ?`, n * p / 100, [5, 10, 20, n / 10]); },
      () => { const pr = pick([[1, 4], [3, 4], [1, 5], [2, 5], [3, 10], [7, 10], [9, 20], [3, 25], [1, 2]]); return q(`${pr[0]}/${pr[1]} dalam bentuk peratus ialah…`, pr[0] / pr[1] * 100, [5, 10, 15], false, "", x => x + "%"); }
    ] },
  { t: "Wang",
    q: [
      ["Contoh instrumen pembayaran ialah…", "kad debit", "kad pengenalan", "lesen memandu", "kad laporan"],
      ["Bayaran tanpa tunai menggunakan telefon dipanggil…", "e-dompet", "cek kertas", "duit syiling", "buku akaun"],
      ["Membuat bajet bermaksud…", "merancang perbelanjaan mengikut pendapatan", "berbelanja tanpa had", "meminjam wang", "membuang wang"],
      ["Mata wang Singapura ialah…", "Dolar Singapura", "Ringgit", "Rupiah", "Baht"],
      ["Mata wang Jepun ialah…", "Yen", "Won", "Yuan", "Rupee"],
      ["Mata wang Arab Saudi ialah…", "Riyal", "Dinar", "Dirham", "Lira"]
    ],
    g: [
      () => { const a = r(1000, 60000), b = r(500, 99999 - a); return q(`💵|RM${fmt(a)} + RM${fmt(b)} = ?`, a + b, [1, 10, 100], false, "", rm); },
      () => { const a = r(10000, 99999), b = r(1000, a - 1); return q(`🏦|Simpanan Encik Lim RM${fmt(a)}. Dia mengeluarkan RM${fmt(b)}. Berapakah baki?`, a - b, [10, 100, 1000], false, "", rm); },
      () => { const h = r(120, 2500), n = r(3, 30); return q(`💻|Sebuah tablet berharga RM${fmt(h)}. Sekolah membeli ${n} buah. Berapakah jumlah harga?`, h * n, [h, 100, 10], false, "", rm); },
      () => { const n = r(3, 12), e = r(150, 5000); return q(`🎁|Wang RM${fmt(n * e)} dibahagi sama rata kepada ${n} orang. Berapakah bahagian setiap orang?`, e, [1, 10, 100], false, "", rm); },
      () => { const g = r(800, 3000), b = r(200, g - 100); return q(`📒|Pendapatan bulanan Aiman RM${fmt(g)}. Perbelanjaannya RM${fmt(b)}. Berapakah wang yang boleh disimpan?`, g - b, [10, 100, 50], false, "", rm); }
    ] },
  { t: "Masa dan Waktu",
    q: [
      ["1 milenium = ___ abad", "10", "100", "1000", "12"],
      ["1 abad = ___ dekad", "10", "100", "12", "5"],
      ["1 tahun = ___ bulan", "12", "10", "52", "365"],
      ["1 minggu = ___ hari", "7", "5", "10", "12"],
      ["Jam 0000 dalam sistem 24 jam ialah…", "12:00 tengah malam", "12:00 tengah hari", "10:00 pagi", "1:00 pagi"],
      ["Jam 1200 dalam sistem 24 jam ialah…", "12:00 tengah hari", "12:00 tengah malam", "2:00 petang", "10:00 pagi"]
    ],
    g: [
      () => { const H = r(1, 11), M = pick([0, 5, 15, 20, 30, 40, 45, 55]); const s = String(H).padStart(2, "0") + String(M).padStart(2, "0"); const right = `${H}:${String(M).padStart(2, "0")} pagi`; return from(`🕰️|Jam ${s} dalam sistem 12 jam ialah…`, right, [`${H}:${String(M).padStart(2, "0")} petang`, `${H + 1}:${String(M).padStart(2, "0")} pagi`, `${H}:${String((M + 30) % 60).padStart(2, "0")} pagi`, `${H}:${String(M).padStart(2, "0")} malam`]); },
      () => { const H = r(13, 23), M = pick([0, 10, 15, 30, 45, 50]); const ap = H < 19 ? "petang" : "malam"; const right = `${H - 12}:${String(M).padStart(2, "0")} ${ap}`; return from(`🕰️|Jam ${H}${String(M).padStart(2, "0")} dalam sistem 12 jam ialah…`, right, [`${H - 12}:${String(M).padStart(2, "0")} pagi`, `${H - 11}:${String(M).padStart(2, "0")} ${ap}`, `${(H - 13) || 12}:${String(M).padStart(2, "0")} ${ap}`, `${H - 12}:${String((M + 30) % 60).padStart(2, "0")} ${ap}`]); },
      () => { const s = r(6, 14), sm = pick([0, 15, 30, 45]), d = r(1, 5), dm = pick([15, 30, 45]); let em = sm + dm, eh = s + d + Math.floor(em / 60); em %= 60; const f = (h, m) => String(h).padStart(2, "0") + String(m).padStart(2, "0"); const right = `${d} jam ${dm} minit`; return from(`🚌|Bas bertolak jam ${f(s, sm)} dan tiba jam ${f(eh, em)}. Berapa lamakah perjalanan itu?`, right, [`${d + 1} jam ${dm} minit`, `${d} jam ${(dm + 15) % 60} minit`, `${d - 1 || d + 2} jam ${dm} minit`, `${d} jam`]); },
      () => { const a = r(2, 9), b = r(1, 9); return q(`${a} abad ${b} dekad = ___ tahun`, a * 100 + b * 10, [10, 100, 90]); },
      () => { const w = r(2, 9), d = r(1, 6); return q(`${w} minggu ${d} hari = ___ hari`, w * 7 + d, [7, 1, 10]); },
      () => { const y = r(2, 9), m = r(1, 11); return q(`${y} tahun ${m} bulan = ___ bulan`, y * 12 + m, [12, 1, 10]); }
    ] },
  { t: "Ukuran dan Sukatan",
    q: [
      ["1 cm = ___ mm", "10", "100", "1000", "1"],
      ["1 km = ___ m", "1000", "100", "10", "10 000"],
      ["Jarak antara dua bandar sesuai diukur dalam…", "kilometer (km)", "milimeter (mm)", "gram (g)", "mililiter (ml)"],
      ["Ketebalan sebuah buku sesuai diukur dalam…", "milimeter (mm)", "kilometer (km)", "kilogram (kg)", "liter (l)"]
    ],
    g: [
      () => { const c = r(2, 99); return q(`${c} cm = ___ mm`, c * 10, [10, 100, 1]); },
      () => { const k = r(1, 9), m = r(1, 999); return q(`${k} km ${m} m = ___ m`, k * 1000 + m, [1000, 100, 10]); },
      () => { const m = r(1001, 9999); return q(`${fmt(m)} m = ___ km`, m / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const g = r(1001, 9999); return q(`${fmt(g)} g = ___ kg`, g / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const l = r(11, 99) / 10; return q(`${dec(l, 1)} l = ___ ml`, Math.round(l * 1000), [100, 1000, 10], false, "", fmt); },
      () => { const a = r(1, 5) * 1000 + r(1, 999), b = r(100, 900); return q(`🛣️|Ali berjalan ${fmt(a)} m pada waktu pagi dan ${b} m pada waktu petang. Berapakah jumlah jarak dalam meter?`, a + b, [10, 100, 1000], false, "", x => fmt(x) + " m"); },
      () => { const l = r(2, 9), c = r(3, 8); return q(`🥤|${l} liter air dituang sama banyak ke dalam ${c * 2} botol. Berapakah isi padu air dalam setiap botol (ml)?`, Math.round(l * 1000 / (c * 2)), [10, 50, 100], false, "", x => fmt(x) + " ml"); }
    ] },
  { t: "Ruang",
    q: [
      ["Sudut yang kurang daripada 90° dipanggil sudut…", "tirus", "tegak", "cakah", "lurus"],
      ["Sudut yang lebih daripada 90° tetapi kurang daripada 180° dipanggil sudut…", "cakah", "tirus", "tegak", "refleks"],
      ["Sudut 90° dipanggil sudut…", "tegak", "tirus", "cakah", "lurus"],
      ["Dua garis yang tidak akan bertemu walaupun dipanjangkan ialah garis…", "selari", "serenjang", "bersilang", "melengkung"],
      ["Dua garis yang bersilang membentuk sudut tegak ialah garis…", "serenjang", "selari", "lengkung", "putus-putus"],
      ["Segi empat sama mempunyai ___ sudut tegak.", "4", "2", "3", "0"],
      ["Rel kereta api ialah contoh garis…", "selari", "serenjang", "melengkung", "bersilang"]
    ],
    g: [
      () => { const s = pick([5, 6, 8]), l = r(3, 15); const nm = { 5: "pentagon", 6: "heksagon", 8: "oktagon" }[s]; return q(`Perimeter sebuah ${nm} sekata bersisi ${l} cm ialah…`, s * l, [l, s, 2], false, "Perimeter = bilangan sisi × panjang sisi", x => x + " cm"); },
      () => { const p = r(4, 30), l = r(2, 20); return q(`Luas segi empat tepat ${p} cm × ${l} cm ialah…`, p * l, [p, l, 10], false, "Luas = panjang × lebar", x => x + " cm²"); },
      () => { const s = r(3, 15); return q(`Luas segi empat sama bersisi ${s} cm ialah…`, s * s, [s, 2 * s, 4], false, "", x => x + " cm²"); },
      () => { const t = r(2, 15) * 2, h = r(3, 20); return q(`Luas segi tiga dengan tapak ${t} cm dan tinggi ${h} cm ialah…`, t * h / 2, [t * h / 2, t, h], false, "Luas = ½ × tapak × tinggi", x => x + " cm²"); },
      () => { const s = r(2, 9); return q(`🧊|Isi padu kubus bersisi ${s} cm ialah…`, s ** 3, [s * s, s, 3 * s], false, "Isi padu = sisi × sisi × sisi", x => x + " cm³"); },
      () => { const a = r(2, 12), b = r(2, 10), c = r(2, 10); return q(`📦|Isi padu kuboid ${a} cm × ${b} cm × ${c} cm ialah…`, a * b * c, [a * b, b * c, 10], false, "Isi padu = panjang × lebar × tinggi", x => x + " cm³"); },
      () => { const a = pick([20, 35, 45, 60, 80, 100, 120, 150, 170, 90]); const right = a < 90 ? "tirus" : a === 90 ? "tegak" : "cakah"; return from(`Sudut ${a}° ialah sudut…`, right, ["tirus", "tegak", "cakah", "lurus"]); }
    ] },
  { t: "Koordinat, Nisbah dan Kadaran",
    q: [
      ["Nisbah 1 : 100 bermaksud…", "1 bahagian berbanding 100 bahagian", "100 bahagian berbanding 1", "1 tambah 100", "1 darab 100"],
      ["Kaedah unitari bermaksud mencari nilai…", "satu unit dahulu", "semua unit sekali gus", "dua unit", "tiada unit"]
    ],
    g: [
      () => { const x = r(1, 6), y = r(1, 6), m = pick(["🏠", "🌳", "⭐", "🚩"]); const right = `(${x}, ${y})`; return from(`${grid(x, y, m)}|Apakah koordinat ${m}?`, right, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${x - 1 || 3}, ${y})`, `(${x}, ${y - 1 || 4})`]); },
      () => { const x1 = r(1, 3), y1 = r(1, 3), dx = r(1, 3), dy = r(1, 3); const right = `${dx} unit ke kanan, ${dy} unit ke atas`; return from(`🗺️|Dari (${x1}, ${y1}) ke (${x1 + dx}, ${y1 + dy}), bagaimanakah kita bergerak?`, right, [`${dy} unit ke kanan, ${dx} unit ke atas`, `${dx} unit ke kiri, ${dy} unit ke atas`, `${dx} unit ke kanan, ${dy} unit ke bawah`, `${dx + 1} unit ke kanan, ${dy} unit ke atas`]); },
      () => { const n = r(2, 8), h = r(2, 12), m = r(n + 1, 15); return q(`📗|${n} buah buku berharga RM${n * h}. Berapakah harga ${m} buah buku?`, m * h, [h, n, 2], false, "Cari harga sebuah dahulu.", rm); },
      () => { const k = pick([10, 100, 1000]), n = r(2, 9); return from(`1 cm pada peta mewakili ${fmt(k)} cm sebenar. Apakah nisbah ini?`, `1 : ${fmt(k)}`, [`${fmt(k)} : 1`, `1 : ${fmt(k * 10)}`, `1 : ${fmt(k / 10 || 1)}`, `${n} : ${fmt(k)}`]); },
      () => { const per = r(3, 12), n = r(4, 15); return q(`🧁|Resipi memerlukan ${per} biji telur untuk 1 dulang kek. Berapakah telur untuk ${n} dulang?`, per * n, [per, n, 2]); }
    ] },
  { t: "Pengurusan Data",
    q: [
      ["Data yang dipaparkan menggunakan gambar dipanggil…", "piktograf", "carta palang", "carta pai", "jadual"],
      ["Paksi mencancang dalam carta palang biasanya menunjukkan…", "kekerapan atau bilangan", "nama sahaja", "warna", "tarikh lahir"]
    ],
    g: [
      () => {
        const days = ["Isnin", "Selasa", "Rabu", "Khamis", "Jumaat"].slice(0, 4); const c = shuffle([3, 4, 5, 6, 7, 8]).slice(0, 4), per = pick([5, 10, 20]);
        const chart = days.map((d, i) => d.slice(0, 3) + " " + "📗".repeat(c[i])).join("\n");
        const t = r(0, 2), k = r(0, 3);
        if (t === 0) return q(`${chart}|Bilangan buku yang dipinjam dari perpustakaan. Setiap 📗 mewakili ${per} buah buku. Berapakah buku dipinjam pada hari ${days[k]}?`, c[k] * per, [per, 5, 10]);
        if (t === 1) { const tot = c.reduce((a, b) => a + b, 0) * per; return q(`${chart}|Setiap 📗 mewakili ${per} buah buku. Berapakah jumlah buku yang dipinjam?`, tot, [per, 10, 20]); }
        const m = c.indexOf(Math.max(...c)); return [`${chart}|Hari manakah paling banyak buku dipinjam?`, days[m], ...days.filter((_, i) => i !== m), ""];
      }
    ] }
],

/* ======================= SAINS (bab buku teks Tahun 4) ======================= */
sains: [
  { t: "Kemahiran Saintifik", q: [
    ["Pemboleh ubah yang diubah dalam eksperimen dipanggil pemboleh ubah…", "dimanipulasi", "bergerak balas", "dimalarkan", "tetap"],
    ["Pemboleh ubah yang diperhati dan diukur hasilnya dipanggil pemboleh ubah…", "bergerak balas", "dimanipulasi", "dimalarkan", "bebas"],
    ["Pemboleh ubah yang dikekalkan sama dipanggil pemboleh ubah…", "dimalarkan", "dimanipulasi", "bergerak balas", "rawak"],
    ["Kemahiran membuat kesimpulan awal daripada pemerhatian ialah…", "membuat inferens", "meramal", "mengukur", "mengelas"],
    ["Mentakrif sesuatu berdasarkan apa yang dilakukan dan diperhati dipanggil…", "mendefinisi secara operasi", "mengelas", "meramal", "berkomunikasi"],
    ["Data dalam jadual boleh dipersembahkan dalam bentuk…", "graf", "puisi", "lagu", "lukisan bebas"],
    ["Bahan kimia di makmal perlu dikendalikan dengan…", "berhati-hati mengikut arahan guru", "tangan kosong", "tergesa-gesa", "bermain-main"]
  ]},
  { t: "Manusia", q: [
    ["Organ utama pernafasan manusia ialah…", "paru-paru", "jantung", "ginjal", "perut"],
    ["Laluan udara semasa menarik nafas: hidung → trakea → …", "paru-paru", "perut", "jantung", "ginjal"],
    ["Semasa menarik nafas, dada akan…", "naik dan mengembang", "turun dan mengecut", "tidak bergerak", "menjadi panas"],
    ["Udara yang dihembus mengandungi lebih banyak…", "karbon dioksida", "oksigen", "nitrogen sahaja", "asap"],
    ["Perkumuhan ialah proses menyingkirkan…", "bahan buangan dari badan", "makanan", "darah", "tulang"],
    ["Peluh disingkirkan melalui…", "kulit", "paru-paru", "ginjal", "mulut"],
    ["Air kencing dihasilkan oleh…", "ginjal", "paru-paru", "kulit", "jantung"],
    ["Karbon dioksida disingkirkan melalui…", "paru-paru", "kulit", "ginjal", "usus"],
    ["Menarik tangan apabila tersentuh benda panas ialah contoh…", "gerak balas terhadap rangsangan", "perkumuhan", "pernafasan", "pembiakan"],
    ["Organ yang mengawal gerak balas badan ialah…", "otak", "perut", "paru-paru", "ginjal"],
    ["Merokok boleh merosakkan…", "paru-paru", "kuku", "rambut", "gigi susu sahaja"],
    ["Kadar pernafasan meningkat selepas…", "bersenam", "tidur", "duduk diam", "membaca"]
  ]},
  { t: "Haiwan", q: [
    ["🐟|Ikan bernafas menggunakan…", "insang", "paru-paru", "spirakel", "kulit kering"],
    ["🦗|Belalang bernafas melalui…", "spirakel", "insang", "paru-paru", "hidung"],
    ["🪱|Cacing tanah bernafas melalui…", "kulit yang lembap", "insang", "spirakel", "paru-paru"],
    ["🐋|Ikan paus bernafas menggunakan…", "paru-paru", "insang", "spirakel", "kulit"],
    ["🐸|Katak dewasa bernafas melalui…", "paru-paru dan kulit lembap", "insang sahaja", "spirakel", "sirip"],
    ["Berudu bernafas menggunakan…", "insang", "paru-paru", "spirakel", "kulit kering"],
    ["Haiwan menyingkirkan bahan buangan melalui proses…", "perkumuhan", "pernafasan", "pembiakan", "fotosintesis"],
    ["Contoh haiwan yang melahirkan anak ialah…", "🐄", "🐔", "🐢", "🐍"],
    ["Contoh haiwan yang bertelur ialah…", "🐊", "🐐", "🐱", "🐋"],
    ["🐢|Penyu bernafas menggunakan…", "paru-paru", "insang", "spirakel", "kulit sahaja"]
  ]},
  { t: "Tumbuhan", q: [
    ["Tumbuhan membuat makanan melalui proses…", "fotosintesis", "respirasi", "perkumuhan", "pencernaan"],
    ["Fotosintesis memerlukan cahaya matahari, air dan…", "karbon dioksida", "oksigen", "nitrogen", "asap"],
    ["Fotosintesis berlaku terutamanya di…", "daun", "akar", "bunga", "biji"],
    ["Hasil fotosintesis ialah makanan (kanji) dan…", "oksigen", "karbon dioksida", "air garam", "asap"],
    ["Tumbuhan tumbuh ke arah cahaya. Ini ialah gerak balas terhadap…", "cahaya", "graviti", "sentuhan", "bunyi"],
    ["Akar tumbuh ke bawah. Ini ialah gerak balas terhadap…", "graviti", "cahaya", "sentuhan", "angin"],
    ["Akar tumbuh ke arah sumber air. Ini ialah gerak balas terhadap…", "air", "cahaya", "bunyi", "angin"],
    ["Daun pokok semalu menguncup apabila…", "disentuh", "disiram", "terkena cahaya", "dibaja"],
    ["Pokok kacang panjang memanjat penyokong. Ini gerak balas terhadap…", "sentuhan", "bunyi", "graviti sahaja", "angin"],
    ["Tumbuhan menyingkirkan wap air melalui proses…", "transpirasi", "fotosintesis", "pembiakan", "pendebungaan"],
    ["Daun yang gugur juga ialah cara tumbuhan…", "menyingkirkan bahan buangan", "membuat makanan", "bernafas", "membiak"]
  ]},
  { t: "Sifat Cahaya", q: [
    ["Cahaya bergerak dalam garis…", "lurus", "bengkok", "bulat", "zig-zag"],
    ["🪞|Cermin memantulkan cahaya. Proses ini dipanggil…", "pantulan cahaya", "pembiasan cahaya", "penyerapan", "penyejatan"],
    ["Straw di dalam gelas air kelihatan bengkok kerana…", "pembiasan cahaya", "pantulan cahaya", "bayang-bayang", "gerhana"],
    ["Periskop menggunakan prinsip…", "pantulan cahaya", "pembiasan cahaya", "magnet", "elektrik"],
    ["Cahaya membias apabila bergerak dari udara ke…", "air", "udara", "vakum", "cermin"],
    ["Bayang-bayang terbentuk kerana cahaya…", "bergerak lurus dan dihalang", "membengkok", "dipantul", "berwarna"],
    ["Permukaan yang paling baik memantulkan cahaya ialah…", "cermin", "kain hitam", "kayu kasar", "kertas pasir"],
    ["🔍|Kanta pembesar membesarkan imej objek melalui…", "pembiasan cahaya", "pantulan bunyi", "magnet", "elektrik"],
    ["Cermin sisi kereta membantu pemandu melihat ke belakang melalui…", "pantulan cahaya", "pembiasan", "bunyi", "magnet"]
  ]},
  { t: "Bunyi", q: [
    ["Bunyi dihasilkan oleh objek yang…", "bergetar", "diam", "sejuk", "berwarna"],
    ["🥁|Apabila dram dipukul, kulit dram akan…", "bergetar", "pecah", "mencair", "bercahaya"],
    ["Bunyi tidak boleh bergerak melalui…", "vakum (ruang kosong)", "udara", "air", "kayu"],
    ["Bunyi yang dipantulkan kembali dipanggil…", "gema", "bisikan", "getaran", "irama"],
    ["Bunyi bergerak paling cepat melalui…", "pepejal", "udara", "vakum", "gas"],
    ["Bunyi bising yang kuat boleh menyebabkan…", "kerosakan pendengaran", "kesihatan lebih baik", "tidur lena", "rambut panjang"],
    ["Bunyi menjadi lebih kuat apabila getaran…", "lebih kuat", "lebih perlahan", "berhenti", "tiada"],
    ["Penebat bunyi di bilik muzik dibuat daripada bahan yang…", "lembut dan menyerap bunyi", "keras dan licin", "berkilat", "kaca nipis"],
    ["🦇|Kelawar menggunakan ___ untuk mengesan objek dalam gelap.", "gema bunyi", "cahaya", "bau sahaja", "magnet"]
  ]},
  { t: "Tenaga", q: [
    ["Sumber tenaga utama di Bumi ialah…", "Matahari", "Bulan", "bateri", "lampu"],
    ["Tenaga yang dimiliki oleh objek yang bergerak ialah tenaga…", "kinetik", "keupayaan", "kimia", "bunyi"],
    ["Tenaga yang tersimpan dalam makanan ialah tenaga…", "kimia", "kinetik", "bunyi", "cahaya"],
    ["Tenaga yang tersimpan dalam spring yang ditekan ialah tenaga…", "keupayaan", "kinetik", "haba", "bunyi"],
    ["🔦|Dalam lampu suluh, tenaga kimia ditukar kepada tenaga elektrik, kemudian kepada tenaga…", "cahaya", "bunyi", "kinetik", "keupayaan"],
    ["📻|Radio menukarkan tenaga elektrik kepada tenaga…", "bunyi", "kimia", "keupayaan", "cahaya sahaja"],
    ["Contoh sumber tenaga boleh baharu ialah…", "Matahari dan angin", "petroleum", "arang batu", "gas asli"],
    ["Contoh sumber tenaga tidak boleh baharu ialah…", "petroleum", "angin", "air", "Matahari"],
    ["Kita perlu menjimatkan tenaga kerana…", "sesetengah sumber tenaga akan habis", "tenaga tidak berguna", "tenaga murah", "tenaga berbahaya"],
    ["Panel solar menukar tenaga cahaya kepada tenaga…", "elektrik", "bunyi", "kimia", "kinetik"]
  ]},
  { t: "Bahan", q: [
    ["Contoh bahan semula jadi ialah…", "kayu", "plastik", "kaca", "nilon"],
    ["Contoh bahan buatan manusia ialah…", "plastik", "kayu", "batu", "kapas"],
    ["Bahan yang membenarkan semua cahaya melaluinya ialah bahan…", "lut sinar", "legap", "lut cahaya", "berkilat"],
    ["Bahan yang tidak membenarkan cahaya melaluinya ialah bahan…", "legap", "lut sinar", "lut cahaya", "kenyal"],
    ["Kertas minyak membenarkan sebahagian cahaya melaluinya. Ia bahan…", "lut cahaya", "lut sinar", "legap", "konduktor"],
    ["Periuk dibuat daripada logam kerana logam…", "pengalir haba yang baik", "penebat haba", "lut sinar", "kenyal"],
    ["Pemegang periuk dibuat daripada plastik kerana plastik…", "penebat haba", "pengalir haba", "berkilat", "berat"],
    ["Getah sesuai untuk membuat bola kerana getah…", "kenyal", "lut sinar", "keras", "mudah pecah"],
    ["Amalan 3R ialah kurangkan, guna semula dan…", "kitar semula", "buang", "bakar", "tanam"],
    ["Botol plastik terpakai boleh…", "dikitar semula", "dibakar di tepi jalan", "dibuang ke sungai", "dibiarkan merata"]
  ]},
  { t: "Bumi", q: [
    ["Bumi berputar pada paksinya dari arah…", "barat ke timur", "timur ke barat", "utara ke selatan", "selatan ke utara"],
    ["Putaran Bumi pada paksinya menyebabkan berlakunya…", "siang dan malam", "musim hujan", "gempa bumi", "gerhana"],
    ["Bumi mengambil masa ___ untuk berputar sekali pada paksinya.", "24 jam", "12 jam", "7 hari", "365 hari"],
    ["Bumi beredar mengelilingi Matahari dalam masa lebih kurang…", "365¼ hari", "24 jam", "30 hari", "12 jam"],
    ["🌅|Matahari kelihatan terbit di sebelah…", "timur", "barat", "utara", "selatan"],
    ["Matahari kelihatan terbenam di sebelah…", "barat", "timur", "utara", "selatan"],
    ["🍎|Objek yang dilepaskan akan jatuh ke bawah kerana…", "tarikan graviti Bumi", "angin", "magnet", "cahaya"],
    ["Bahagian Bumi yang menghadap Matahari mengalami…", "siang", "malam", "gerhana", "musim sejuk"],
    ["Pergerakan Bumi mengelilingi Matahari dipanggil…", "peredaran", "putaran", "gerhana", "fasa"]
  ]},
  { t: "Mesin (Tuas)", q: [
    ["Tuas mempunyai tiga bahagian iaitu fulkrum, beban dan…", "daya", "roda", "gear", "skru"],
    ["Titik pusat tempat tuas berpusing dipanggil…", "fulkrum", "beban", "daya", "paksi Bumi"],
    ["Jongkang-jongket ialah contoh…", "tuas", "takal", "skru", "baji"],
    ["✂️|Gunting ialah contoh…", "tuas", "takal", "gear", "satah condong"],
    ["Kereta sorong ialah contoh…", "tuas", "takal", "skru", "baji"],
    ["Semakin jauh daya dikenakan dari fulkrum, beban menjadi…", "lebih mudah diangkat", "lebih susah diangkat", "lebih berat", "tidak berubah"],
    ["Pembuka penutup botol ialah contoh…", "tuas", "takal", "gear", "baji"],
    ["Penyapu digunakan sebagai…", "tuas", "takal", "skru", "gear"]
  ]}
],

/* ======================= SEJARAH (Unit ikut DSKP Tahun 4) ======================= */
sejarah: [
  { n: 1, t: "Mengenali Sejarah", q: [
    ["Sejarah ialah kajian tentang peristiwa…", "masa lalu", "masa hadapan", "dalam mimpi", "rekaan"],
    ["Contoh sumber primer ialah…", "dokumen asal dan artifak", "buku teks", "buku rujukan", "artikel internet"],
    ["Contoh sumber sekunder ialah…", "buku teks", "surat asal", "artifak", "fosil"],
    ["Menggali tanah untuk mencari artifak lama ialah kaedah kajian…", "arkeologi", "lisan", "bertulis", "telefon"],
    ["Menemu bual orang tua tentang peristiwa lama ialah kaedah kajian…", "lisan", "arkeologi", "bertulis", "makmal"],
    ["Satu dekad bersamaan…", "10 tahun", "100 tahun", "5 tahun", "1000 tahun"],
    ["Satu abad bersamaan…", "100 tahun", "10 tahun", "50 tahun", "1000 tahun"],
    ["Tempat menyimpan dokumen sejarah negara ialah…", "Arkib Negara", "pasar raya", "stadium", "lapangan terbang"],
    ["Tempat mempamerkan artifak sejarah ialah…", "muzium", "hospital", "bank", "kedai runcit"],
    ["Mempelajari sejarah membolehkan kita…", "mengambil iktibar daripada peristiwa lalu", "meramal nombor ekor", "melupakan masa lalu", "bermain"]
  ]},
  { n: 2, t: "Saya dan Keluarga", q: [
    ["Maklumat diri seperti nama dan tarikh lahir dipanggil…", "biodata", "salasilah", "lencana", "moto"],
    ["Keluarga asas terdiri daripada…", "ibu bapa dan anak-anak", "datuk dan nenek sahaja", "jiran", "kawan sekelas"],
    ["Keluarga yang turut merangkumi datuk, nenek, bapa saudara dan ibu saudara dipanggil keluarga…", "kembangan", "asas", "angkat", "kecil"],
    ["Rajah yang menunjukkan susunan keturunan keluarga dipanggil…", "salasilah keluarga", "peta", "carta pai", "jadual waktu"],
    ["Adik-beradik ayah atau ibu yang lelaki dipanggil…", "bapa saudara", "sepupu", "datuk", "anak saudara"],
    ["Anak kepada bapa saudara kita dipanggil…", "sepupu", "anak saudara", "adik", "cucu"],
    ["Peranan anak dalam keluarga ialah…", "menghormati dan membantu ibu bapa", "bergaduh dengan adik-beradik", "melawan ibu bapa", "malas"],
    ["Dokumen yang mencatat kelahiran seseorang ialah…", "sijil kelahiran", "kad laporan", "pasport sahaja", "resit"]
  ]},
  { n: 3, t: "Sejarah Sekolah", q: [
    ["Ketua pentadbir di sekolah rendah ialah…", "guru besar", "pengawas", "ketua kelas", "tukang kebun"],
    ["Identiti sekolah termasuk lencana, moto dan…", "lagu sekolah", "kantin", "padang", "tandas"],
    ["Persatuan Ibu Bapa dan Guru dikenali sebagai…", "PIBG", "PBB", "PDRM", "PTD"],
    ["Lencana sekolah ialah…", "lambang sekolah", "peraturan sekolah", "jadual waktu", "buku latihan"],
    ["Moto sekolah ialah…", "kata-kata semangat yang menjadi pegangan", "nama guru besar", "alamat sekolah", "senarai murid"],
    ["Mengetahui sejarah sekolah membolehkan kita…", "menghargai dan berbangga dengan sekolah", "ponteng sekolah", "merosakkan harta sekolah", "melupakan sekolah"],
    ["Pengawas sekolah membantu guru menjaga…", "disiplin murid", "kantin sahaja", "kereta guru", "padang sahaja"]
  ]},
  { n: 4, t: "Sejarah Tempat Tinggal", q: [
    ["Nama Kuala Lumpur dikatakan berasal daripada pertemuan Sungai Klang dan Sungai…", "Gombak", "Pahang", "Perak", "Muar"],
    ["Nama Pulau Pinang dikatakan berasal daripada banyaknya pokok…", "pinang", "kelapa", "durian", "getah"],
    ["Nama Melaka dikatakan berasal daripada nama…", "pokok Melaka", "seekor gajah", "sebuah sungai", "seorang raja"],
    ["Kita boleh mengetahui sejarah tempat tinggal dengan…", "bertanya kepada orang tua di kawasan itu", "meneka sahaja", "melihat televisyen kartun", "bermain permainan video"],
    ["Rajah yang menunjukkan kedudukan sesuatu tempat ialah…", "peta", "carta pai", "salasilah", "graf"],
    ["Tokoh tempatan ialah orang yang…", "berjasa kepada kawasan tempat tinggal", "baru berpindah", "tidak dikenali", "pelancong"],
    ["Contoh kawasan tempat tinggal ialah…", "kampung, taman perumahan dan bandar", "lautan", "angkasa lepas", "gunung berapi"]
  ]},
  { n: 5, t: "Zaman Air Batu", q: [
    ["Zaman Air Batu juga dikenali sebagai zaman…", "Pleistosen", "Holosen", "Logam", "Moden"],
    ["Zaman selepas Zaman Air Batu dipanggil zaman…", "Holosen", "Pleistosen", "Paleolitik", "Neolitik"],
    ["Pada Zaman Air Batu, sebahagian besar Bumi diliputi…", "ais", "hutan hujan", "padang pasir", "bandar"],
    ["Apabila ais mencair, paras air laut akan…", "naik", "turun", "kekal", "kering"],
    ["Kawasan tanah di Asia Tenggara yang tenggelam akibat air laut naik ialah…", "Pentas Sunda", "Banjaran Titiwangsa", "Gunung Kinabalu", "Tasik Chini"],
    ["Akibat perubahan alam sekitar, manusia dan haiwan…", "berhijrah ke tempat lain", "kekal di tempat yang sama", "menjadi ais", "tidak terkesan"],
    ["Bukti adanya Zaman Air Batu boleh dikaji melalui…", "fosil dan lapisan batuan", "telefon pintar", "surat khabar", "televisyen"]
  ]},
  { n: 6, t: "Zaman Prasejarah", q: [
    ["Zaman Batu Lama juga dikenali sebagai zaman…", "Paleolitik", "Neolitik", "Mesolitik", "Logam"],
    ["Zaman Batu Pertengahan dikenali sebagai zaman…", "Mesolitik", "Paleolitik", "Neolitik", "Holosen"],
    ["Zaman Batu Baru dikenali sebagai zaman…", "Neolitik", "Paleolitik", "Mesolitik", "Pleistosen"],
    ["Zaman selepas Zaman Batu Baru ialah Zaman…", "Logam", "Air Batu", "Paleolitik", "Moden"],
    ["Rangka Perak Man ditemui di…", "Gua Gunung Runtuh, Lenggong", "Gua Niah", "Gua Cha", "Bukit Tengkorak"],
    ["Lembah Lenggong di Perak diiktiraf sebagai Tapak Warisan Dunia oleh…", "UNESCO", "ASEAN", "FIFA", "WHO"],
    ["Tapak prasejarah Gua Niah terletak di…", "Sarawak", "Sabah", "Kelantan", "Perak"],
    ["Tapak prasejarah Bukit Tengkorak terletak di…", "Sabah", "Sarawak", "Pahang", "Kedah"],
    ["Pada Zaman Neolitik, manusia mula…", "bercucuk tanam dan menternak", "menggunakan telefon", "memandu kereta", "membina bangunan tinggi"],
    ["Pada Zaman Logam, manusia menggunakan alatan daripada…", "gangsa dan besi", "plastik", "kaca", "kertas"],
    ["Manusia Zaman Paleolitik hidup dengan cara…", "memburu dan mengumpul hasil hutan", "berniaga di pasar raya", "bekerja di kilang", "bertani secara moden"]
  ]},
  { n: 7, t: "Kerajaan Melayu Awal", q: [
    ["Kerajaan Kedah Tua berpusat di…", "Lembah Bujang", "Melaka", "Palembang", "Jawa"],
    ["Kerajaan Srivijaya berpusat di…", "Palembang", "Lembah Bujang", "Jawa Timur", "Kemboja"],
    ["Kerajaan Majapahit berpusat di…", "Jawa", "Sumatera", "Semenanjung Tanah Melayu", "Borneo"],
    ["Kerajaan Funan terletak di kawasan…", "Kemboja dan Vietnam sekarang", "Sabah", "Johor", "Filipina"],
    ["Kerajaan Gangga Negara dipercayai terletak di…", "Perak", "Kelantan", "Pahang", "Johor"],
    ["Antara kegiatan ekonomi kerajaan Melayu awal ialah…", "pertanian dan perdagangan", "perlombongan minyak di laut dalam", "pembuatan kereta", "teknologi maklumat"],
    ["Pelabuhan entrepot ialah pelabuhan…", "persinggahan dan pengumpulan barang dagangan", "untuk kapal perang sahaja", "yang ditutup", "untuk menangkap ikan sahaja"],
    ["Hasil hutan yang didagangkan termasuk…", "rotan dan damar", "telefon", "kereta", "kain sutera dari China sahaja"],
    ["Kerajaan Melayu awal menjalin hubungan diplomatik untuk…", "keamanan dan perdagangan", "berperang sahaja", "mengasingkan diri", "menutup pelabuhan"]
  ]},
  { n: 8, t: "Tokoh Terbilang Kesultanan Melayu Melaka", q: [
    ["Golongan pemerintah dalam Kesultanan Melayu Melaka terdiri daripada Sultan dan…", "pembesar", "rakyat", "hamba", "pedagang asing"],
    ["Ketua kerajaan dan pemerintah tertinggi Melaka ialah…", "Sultan", "Bendahara", "Laksamana", "Temenggung"],
    ["Pembesar yang menjadi penasihat Sultan ialah…", "Bendahara", "Syahbandar", "Temenggung", "Penghulu Bendahari"],
    ["Pembesar yang mengetuai angkatan laut ialah…", "Laksamana", "Temenggung", "Bendahara", "Syahbandar"],
    ["Pembesar yang menjaga keamanan dalam negeri ialah…", "Temenggung", "Laksamana", "Bendahara", "Syahbandar"],
    ["Pegawai yang menguruskan pelabuhan Melaka ialah…", "Syahbandar", "Bendahara", "Temenggung", "Laksamana"],
    ["Pembesar yang menguruskan perbendaharaan negeri ialah…", "Penghulu Bendahari", "Laksamana", "Temenggung", "Syahbandar"],
    ["Tokoh terbilang ialah individu yang…", "mempunyai sifat mulia dan banyak berjasa", "kaya sahaja", "terkenal kerana nakal", "tidak dikenali"]
  ]},
  { n: 9, t: "Pengasas Kesultanan Melayu Melaka", q: [
    ["Pengasas Kesultanan Melayu Melaka ialah…", "Parameswara", "Tun Perak", "Hang Tuah", "Sultan Mahmud Syah"],
    ["Parameswara ialah putera raja dari…", "Palembang", "Johor", "Kedah", "Jawa"],
    ["Sulalatus Salatin juga dikenali sebagai…", "Sejarah Melayu", "Hikayat Hang Tuah", "Suma Oriental", "Tuhfat al-Nafis"],
    ["Suma Oriental ditulis oleh…", "Tome Pires", "Tun Sri Lanang", "Raja Ali Haji", "Munsyi Abdullah"],
    ["Sulalatus Salatin dikaitkan dengan…", "Tun Sri Lanang", "Tome Pires", "Francis Light", "Stamford Raffles"],
    ["Menurut Sejarah Melayu, Parameswara melihat seekor ___ menendang anjing pemburu.", "pelanduk putih", "harimau", "gajah", "rusa"],
    ["Melaka diasaskan sekitar tahun…", "1400", "1511", "1824", "1957"],
    ["Antara kelebihan pelabuhan Melaka ialah…", "terlindung daripada tiupan angin monsun", "terletak di tengah padang pasir", "tiada bekalan air", "airnya terlalu cetek"],
    ["Pedagang datang ke Melaka dengan bantuan…", "angin monsun", "kapal terbang", "kereta api", "jalan raya"]
  ]},
  { n: 10, t: "Tun Perak Bendahara Terbilang", q: [
    ["Sebelum menjadi Bendahara, Tun Perak pernah menjadi Penghulu di…", "Kelang", "Muar", "Pahang", "Johor"],
    ["Tun Perak terkenal sebagai Bendahara yang…", "bijaksana", "malas", "kedekut", "penakut"],
    ["Tun Perak berkhidmat sebagai Bendahara di bawah ___ orang Sultan Melaka.", "4", "1", "2", "10"],
    ["Antara peranan Bendahara ialah…", "penasihat Sultan dan ketua pembesar", "ketua angkatan laut", "pengurus pelabuhan", "pengutip cukai sahaja"],
    ["Tun Perak berjaya mempertahankan Melaka daripada serangan…", "Siam", "Portugis", "Belanda", "British"],
    ["Antara sumbangan Tun Perak ialah…", "mengukuhkan pentadbiran Melaka", "menyerahkan Melaka kepada musuh", "menutup pelabuhan", "melemahkan tentera"],
    ["Sifat Tun Perak yang boleh dicontohi ialah…", "bijaksana dan taat setia", "sombong", "pemarah", "suka berbohong"]
  ]},
  { n: 11, t: "Hang Tuah Laksamana Terbilang", q: [
    ["Hang Tuah terkenal sebagai…", "Laksamana", "Bendahara", "Sultan", "Syahbandar"],
    ["Hang Tuah terkenal kerana sifatnya yang…", "taat setia dan berani", "malas", "kedekut", "penakut"],
    ["Sahabat-sahabat Hang Tuah ialah Hang Jebat, Hang Kasturi, Hang Lekir dan…", "Hang Lekiu", "Hang Li Po", "Tun Perak", "Tun Teja"],
    ["Hang Tuah mahir dalam seni…", "silat", "lukisan", "muzik", "masakan"],
    ["Antara peranan Laksamana ialah…", "menjaga keselamatan perairan Melaka", "mengutip cukai", "menjadi Sultan", "menguruskan sekolah"],
    ["Laksamana juga bertugas melindungi…", "pedagang di perairan Melaka", "hutan sahaja", "kebun Sultan", "sekolah"],
    ["Sifat Hang Tuah yang boleh dicontohi ialah…", "bertanggungjawab dan setia kepada negara", "suka bergaduh", "malas bekerja", "pentingkan diri"]
  ]}
],

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Kata Nama dan Penjodoh Bilangan", q: [
    ["Penjodoh bilangan yang sesuai: \"sebilah ___\"", "pisau", "buku", "rumah", "telur"],
    ["Penjodoh bilangan yang sesuai: \"sebentuk ___\"", "cincin", "kereta", "lembu", "surat"],
    ["Penjodoh bilangan yang sesuai: \"sepucuk ___\"", "pistol", "kain", "bunga", "kerusi"],
    ["Penjodoh bilangan yang sesuai: \"sekaki ___\"", "payung", "pisang", "baju", "buku"],
    ["Penjodoh bilangan yang sesuai: \"sebutir ___\"", "permata", "rumah", "lembu", "baju"],
    ["Penjodoh bilangan yang sesuai: \"sepohon ___\"", "pokok", "bunga", "rumah", "surat"],
    ["Penjodoh bilangan yang sesuai: \"segugus ___\"", "pulau", "ikan", "kerusi", "pensel"],
    ["Penjodoh bilangan yang sesuai: \"sesikat ___\"", "pisang", "rambut", "bunga", "kain"],
    ["Yang manakah kata nama terbitan?", "kebersihan", "bersih", "membersih", "dibersihkan"],
    ["Yang manakah kata nama terbitan?", "pemandu", "pandu", "memandu", "dipandu"],
    ["\"Baginda\" digunakan untuk merujuk kepada…", "raja", "kawan", "guru", "haiwan"],
    ["Kata ganti nama tunjuk ialah…", "ini dan itu", "saya dan kamu", "dia dan mereka", "siapa dan apa"]
  ]},
  { t: "Imbuhan", q: [
    ["Imbuhan apitan \"ke-…-an\" + \"bersih\" menjadi…", "kebersihan", "pembersihan", "membersihkan", "bersihan"],
    ["Imbuhan apitan \"pe-…-an\" + \"jalan\" menjadi…", "perjalanan", "pejalanan", "penjalanan", "berjalanan"],
    ["Imbuhan apitan \"me-…-kan\" + \"besar\" menjadi…", "membesarkan", "mebesarkan", "pembesaran", "terbesar"],
    ["Imbuhan apitan \"me-…-i\" + \"hormat\" menjadi…", "menghormati", "mehormati", "menhormati", "dihormatkan"],
    ["Imbuhan akhiran \"-an\" + \"makan\" menjadi…", "makanan", "memakan", "pemakan", "dimakan"],
    ["Imbuhan \"ter-\" + \"tinggi\" bermaksud…", "paling tinggi", "agak tinggi", "kurang tinggi", "sangat rendah"],
    ["Imbuhan \"se-\" dalam \"setinggi\" bermaksud…", "sama tinggi", "paling tinggi", "tidak tinggi", "terlalu tinggi"],
    ["Kami mesti ___ guru.", "menghormati", "hormatan", "penghormatan", "kehormatan"],
    ["Ibu ___ adik kuih.", "membelikan", "membeli", "pembelian", "belian"],
    ["___ sungai itu sangat cantik.", "Pemandangan", "Memandang", "Dipandang", "Pandangkan"],
    ["Pokok itu ___ oleh angin kencang.", "ditumbangkan", "menumbangkan", "penumbang", "tumbangan"]
  ]},
  { t: "Kata Adjektif dan Kata Tugas", q: [
    ["Yang manakah kata adjektif perasaan?", "gembira", "tinggi", "merah", "jauh"],
    ["Yang manakah kata adjektif jarak?", "dekat", "manis", "sedih", "bulat"],
    ["Yang manakah kata adjektif bentuk?", "bulat", "harum", "lama", "berani"],
    ["Yang manakah kata adjektif pancaindera?", "harum", "sedih", "jauh", "baru"],
    ["Kereta itu ___ laju.", "sangat", "dan", "kerana", "ke"],
    ["Dia ___ rajin di dalam kelas.", "paling", "atau", "kepada", "dengan"],
    ["Rumah ini besar ___.", "sekali", "sangat", "paling", "terlalu"],
    ["Saya membawa payung ___ hujan turun.", "kerana", "tetapi", "atau", "supaya"],
    ["Kami berlatih setiap hari ___ menang.", "supaya", "kerana", "tetapi", "atau"],
    ["___ hujan lebat, mereka tetap ke sekolah.", "Walaupun", "Kerana", "Supaya", "Dan"],
    ["Kata seru yang menunjukkan kesakitan ialah…", "Aduh", "Wah", "Syabas", "Amboi"]
  ]},
  { t: "Peribahasa dan Simpulan Bahasa", q: [
    ["Simpulan bahasa \"kaki bangku\" bermaksud…", "tidak pandai bermain bola", "kaki panjang", "suka duduk", "kaki kerusi"],
    ["Simpulan bahasa \"anak emas\" bermaksud…", "anak kesayangan", "anak yang kaya", "emas kecil", "anak yang degil"],
    ["Simpulan bahasa \"besar hati\" bermaksud…", "gembira dan bangga", "sombong", "marah", "takut"],
    ["Simpulan bahasa \"keras kepala\" bermaksud…", "degil", "pandai", "berani", "kuat"],
    ["Simpulan bahasa \"lipas kudung\" bermaksud…", "sangat pantas", "malas", "lemah", "takut"],
    ["Simpulan bahasa \"ulat buku\" bermaksud…", "orang yang suka membaca", "ulat yang makan buku", "buku yang rosak", "orang yang malas"],
    ["Peribahasa \"berat sama dipikul, ringan sama dijinjing\" bermaksud…", "bekerjasama dalam susah dan senang", "membawa barang berat", "malas membantu", "suka membeli-belah"],
    ["Peribahasa \"di mana ada kemahuan, di situ ada jalan\" bermaksud…", "jika berusaha pasti berjaya", "jalan yang panjang", "tersesat jalan", "malas berusaha"],
    ["Peribahasa \"sedikit-sedikit, lama-lama jadi bukit\" bermaksud…", "usaha sedikit demi sedikit akan membuahkan hasil", "mendaki bukit", "membuang sampah", "malas"],
    ["Peribahasa \"seperti katak di bawah tempurung\" bermaksud…", "berpengetahuan sempit", "katak yang takut", "suka bersembunyi", "pandai"]
  ]},
  { t: "Ayat", q: [
    ["Yang manakah ayat pasif?", "Buku itu dibaca oleh Ali.", "Ali membaca buku itu.", "Ali suka membaca.", "Ali sedang membaca."],
    ["Yang manakah ayat aktif?", "Ibu memasak nasi.", "Nasi dimasak oleh ibu.", "Nasi itu sudah dimasak.", "Nasi dimasak ibu."],
    ["Ayat pasif bagi \"Kucing itu menangkap tikus.\" ialah…", "Tikus ditangkap oleh kucing itu.", "Kucing itu ditangkap oleh tikus.", "Tikus menangkap kucing itu.", "Kucing itu tikus ditangkap."],
    ["Yang manakah ayat majmuk?", "Ali membaca buku dan Abu menulis surat.", "Ali membaca buku.", "Abu menulis.", "Mereka rajin."],
    ["Ayat \"Tolong ambilkan buku itu.\" ialah ayat…", "permintaan", "tanya", "penyata", "seruan"],
    ["Ayat \"Jangan buang sampah di sini.\" ialah ayat…", "larangan", "tanya", "seruan", "penyata"],
    ["Ayat \"Syabas, kamu menang!\" ialah ayat…", "seruan", "tanya", "perintah", "pasif"],
    ["Ayat yang betul ialah…", "Mereka bermain bola di padang.", "Mereka bola bermain padang di.", "Di padang mereka bola bermain.", "Bermain mereka di bola padang."],
    ["Cakap pindah bagi: \"Saya lapar,\" kata Adik. ialah…", "Adik berkata bahawa dia lapar.", "Adik berkata saya lapar.", "Saya lapar kata adik.", "Adik lapar kata saya."],
    ["Tanda baca yang tepat: Ibu bertanya___ \"Sudahkah kamu makan___\"", ", ?", ". .", "? ,", "! ."]
  ]},
  { t: "Ejaan dan Kata Majmuk", q: [
    ["Ejaan yang betul ialah…", "tanggungjawab", "tanggung jawab", "tangungjawab", "tanggong jawab"],
    ["Ejaan yang betul ialah…", "kakitangan", "kaki tangan", "kakitanggan", "kaki-tangan"],
    ["Ejaan yang betul ialah…", "kapal terbang", "kapalterbang", "kapal-terbang", "kapel terbang"],
    ["Ejaan yang betul ialah…", "bumiputera", "bumi putera", "bumi-putera", "bumiputra"],
    ["Ejaan yang betul ialah…", "sukarela", "suka rela", "suka-rela", "sukerela"],
    ["Ejaan yang betul ialah…", "jalan raya", "jalanraya", "jalan-raya", "jalanan raya"],
    ["Ejaan yang betul ialah…", "pejabat", "pejebat", "pejabet", "pajabat"],
    ["Ejaan yang betul ialah…", "televisyen", "telivisyen", "televisen", "talevisyen"],
    ["Yang manakah kata majmuk?", "air terjun", "berair", "airnya", "pengairan"],
    ["Yang manakah kata majmuk?", "rumah sakit", "rumah-rumah", "berumah", "perumahan"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["A person who designs buildings is an…", "architect", "astronaut", "artist", "athlete"],
    ["A person who travels into space is an…", "astronaut", "architect", "author", "actor"],
    ["A person who writes books is an…", "author", "actor", "athlete", "artist"],
    ["A place where planes land is an…", "airport", "harbour", "station", "garage"],
    ["A place where ships stop is a…", "harbour", "airport", "garage", "library"],
    ["🌋|This is a…", "volcano", "waterfall", "island", "desert"],
    ["🏝️|This is an…", "island", "volcano", "river", "valley"],
    ["🌵|Cactus plants grow in the…", "desert", "sea", "rainforest", "kitchen"],
    ["Which word means \"very happy\"?", "delighted", "furious", "gloomy", "nervous"],
    ["Which word means \"very angry\"?", "furious", "cheerful", "calm", "sleepy"],
    ["Which word means \"scared\"?", "frightened", "excited", "proud", "bored"]
  ]},
  { t: "Tenses", q: [
    ["Yesterday, she ___ a letter to her friend.", "wrote", "writes", "write", "writing"],
    ["Every morning, he ___ his bicycle to school.", "rides", "rode", "ride", "riding"],
    ["Listen! Someone ___ the piano.", "is playing", "plays", "played", "play"],
    ["We ___ dinner when the lights went out.", "were having", "are having", "have", "has"],
    ["I ___ my homework tomorrow.", "will finish", "finished", "finish", "finishing"],
    ["The past tense of \"teach\" is…", "taught", "teached", "teach", "tought"],
    ["The past tense of \"fly\" is…", "flew", "flied", "flown", "flys"],
    ["The past tense of \"sleep\" is…", "slept", "sleeped", "slep", "sleeps"],
    ["The past tense of \"think\" is…", "thought", "thinked", "thank", "thinks"],
    ["Last holiday, my family ___ to Langkawi.", "went", "go", "goes", "going"]
  ]},
  { t: "Countable and Uncountable", q: [
    ["How ___ sugar do you need?", "much", "many", "few", "long"],
    ["How ___ eggs are in the basket?", "many", "much", "little", "long"],
    ["There is ___ milk in the fridge.", "some", "many", "a", "few"],
    ["Are there ___ apples left?", "any", "much", "a", "little"],
    ["I would like ___ water, please.", "some", "many", "an", "few"],
    ["Which one is uncountable?", "rice", "apple", "book", "chair"],
    ["Which one is countable?", "pencil", "water", "sugar", "air"],
    ["We have a ___ of bread.", "loaf", "pair", "flock", "bunch"],
    ["She bought a ___ of shoes.", "pair", "loaf", "slice", "glass"],
    ["Can I have a ___ of cake?", "slice", "pair", "flock", "herd"]
  ]},
  { t: "Comparisons", q: [
    ["A car is ___ than a bicycle.", "faster", "fast", "fastest", "more fast"],
    ["The Pacific is the ___ ocean in the world.", "largest", "larger", "large", "most large"],
    ["This story is ___ than that one.", "more interesting", "interestinger", "most interesting", "interesting"],
    ["Mount Everest is the ___ mountain in the world.", "highest", "higher", "high", "most high"],
    ["Far, farther, ___.", "farthest", "farest", "most far", "farer"],
    ["Little, less, ___.", "least", "littlest", "lesser", "lessest"],
    ["My bag is as heavy ___ yours.", "as", "than", "so", "like"],
    ["Durian is the ___ fruit I have ever eaten.", "most delicious", "deliciouser", "more delicious", "delicious"]
  ]},
  { t: "Conjunctions and Prepositions", q: [
    ["I wanted to go out, ___ it was raining.", "but", "and", "or", "so"],
    ["She was tired, ___ she went to bed early.", "so", "but", "or", "because"],
    ["We stayed at home ___ it was raining.", "because", "so", "but", "or"],
    ["___ you study hard, you will pass.", "If", "But", "So", "Or"],
    ["We waited ___ the bus came.", "until", "because", "so", "but"],
    ["The meeting is ___ 3 p.m.", "at", "on", "in", "by"],
    ["We go back to our hometown ___ Hari Raya.", "during", "between", "under", "across"],
    ["The cat jumped ___ the wall.", "over", "under", "between", "among"],
    ["The bird flew ___ the window into the room.", "through", "under", "over", "between"],
    ["He divided the sweets ___ his three friends.", "among", "between", "under", "over"]
  ]},
  { t: "Idioms and Phrasal Verbs", q: [
    ["The idiom \"a piece of cake\" means…", "very easy", "very sweet", "a birthday party", "very hungry"],
    ["The idiom \"as busy as a bee\" means…", "very busy", "very lazy", "very small", "very sweet"],
    ["The idiom \"as cool as a cucumber\" means…", "very calm", "very cold", "very green", "very hungry"],
    ["\"Pick up\" your toys means…", "take them from the floor", "throw them", "buy them", "break them"],
    ["\"Wake up\" means…", "stop sleeping", "go to sleep", "stand still", "sit down"],
    ["\"Put on\" your jacket means…", "wear it", "take it off", "wash it", "sell it"],
    ["\"Take off\" your shoes means…", "remove them", "wear them", "buy them", "clean them"],
    ["The plane will \"take off\" soon means…", "leave the ground", "land", "stop", "break"],
    ["\"Look out!\" means…", "be careful", "look outside", "go out", "look for something"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM (ikut bidang KSSR) ======================= */
pi: [
  { t: "Al-Quran dan Tajwid", q: [
    ["Hukum nun mati atau tanwin bertemu huruf ب ialah…", "iqlab", "izhar", "idgham", "ikhfa'"],
    ["Hukum nun mati atau tanwin bertemu huruf ل atau ر ialah…", "idgham bila ghunnah", "idgham maal ghunnah", "izhar", "iqlab"],
    ["Huruf idgham maal ghunnah ialah…", "ي ن م و", "ل ر", "ب", "ء ه ع ح غ خ"],
    ["Bilangan huruf ikhfa' hakiki ialah…", "15", "6", "4", "2"],
    ["Hukum mim mati bertemu huruf ب ialah…", "ikhfa' syafawi", "izhar syafawi", "idgham mithlain", "iqlab"],
    ["Hukum mim mati bertemu huruf م ialah…", "idgham mithlain", "ikhfa' syafawi", "izhar syafawi", "iqlab"],
    ["Iqlab bermaksud menukar bunyi nun mati atau tanwin kepada bunyi huruf…", "م", "ب", "ن", "ل"],
    ["Surah az-Zalzalah mengandungi ___ ayat.", "8", "5", "11", "6"],
    ["Surah at-Takathur mengandungi ___ ayat.", "8", "7", "11", "5"],
    ["Surah al-Qari'ah menceritakan tentang…", "hari kiamat", "kisah Nabi Musa", "puasa", "zakat"],
    ["Surah al-'Adiyat mengandungi ___ ayat.", "11", "8", "5", "6"]
  ]},
  { t: "Hadis", q: [
    ["Rasulullah SAW menyuruh orang yang beriman supaya ___ tetamu.", "memuliakan", "membiarkan", "menghalau", "mengejek", "Maksud hadis: Sesiapa yang beriman kepada Allah dan hari akhirat, hendaklah dia memuliakan tetamunya. (Riwayat al-Bukhari dan Muslim)"],
    ["Menurut hadis, memuliakan tetamu ialah tanda seseorang itu beriman kepada Allah dan…", "hari akhirat", "malaikat sahaja", "kitab sahaja", "jiran"],
    ["Cara menyambut tetamu yang baik ialah…", "menjawab salam dan menjemput masuk dengan muka manis", "berpura-pura tiada di rumah", "membiarkan tetamu di luar", "terus menonton televisyen"],
    ["Contoh memuliakan tetamu ialah…", "menghidangkan minuman atau makanan", "bermain telefon tanpa melayan", "bercakap kasar", "meninggalkan tetamu seorang diri"],
    ["Apabila tetamu hendak pulang, kita sebaiknya…", "menghantarnya ke pintu dan mengucapkan terima kasih", "terus masuk ke bilik", "menutup pintu dengan kuat", "tidak menghiraukannya"],
    ["Antara kebaikan memuliakan tetamu ialah…", "mengeratkan silaturahim", "menimbulkan pergaduhan", "membazir masa", "menjauhkan saudara"]
  ]},
  { t: "Akidah", q: [
    ["Beriman kepada hari akhirat ialah Rukun Iman yang ke-…", "5", "4", "6", "3"],
    ["Hari akhirat juga dikenali sebagai hari…", "kiamat", "raya", "jadi", "minggu"],
    ["Kematian seseorang dikenali sebagai kiamat…", "kecil (sughra)", "besar (kubra)", "sederhana", "terakhir"],
    ["Kehancuran seluruh alam dikenali sebagai kiamat…", "besar (kubra)", "kecil (sughra)", "sederhana", "awal"],
    ["Malaikat yang meniup sangkakala pada hari kiamat ialah…", "Israfil", "Jibril", "Izrail", "Mikail"],
    ["Malaikat yang menyoal manusia di dalam kubur ialah…", "Munkar dan Nakir", "Raqib dan Atid", "Jibril dan Mikail", "Malik dan Ridwan"],
    ["Beriman kepada qada' dan qadar bermaksud percaya kepada…", "ketentuan Allah", "nasib baik sahaja", "tangkal", "ramalan bintang"],
    ["Sifat Qidam bermaksud Allah…", "sedia ada tanpa permulaan", "kekal", "Esa", "mendengar"],
    ["Sifat Qiyamuhu binafsihi bermaksud Allah…", "berdiri dengan sendiri", "berbeza dengan makhluk", "berkuasa", "melihat"],
    ["Sifat Iradah bermaksud Allah…", "berkehendak", "mengetahui", "hidup", "berkata-kata"],
    ["Al-Awwal bermaksud Allah Yang Maha…", "Awal", "Akhir", "Kaya", "Kuat"]
  ]},
  { t: "Ibadah", q: [
    ["Sujud sahwi dilakukan apabila…", "terlupa dalam solat", "selesai makan", "membaca al-Quran", "selepas mandi"],
    ["Sujud sahwi dilakukan sebelum…", "memberi salam", "takbiratul ihram", "membaca al-Fatihah", "rukuk"],
    ["Solat qasar bermaksud…", "memendekkan solat empat rakaat kepada dua rakaat", "menghimpunkan dua solat", "solat sunat", "solat berjemaah"],
    ["Solat jamak bermaksud…", "menghimpunkan dua solat dalam satu waktu", "memendekkan solat", "solat tanpa wuduk", "solat sambil duduk sahaja"],
    ["Solat yang boleh diqasarkan ialah Zohor, Asar dan…", "Isyak", "Subuh", "Maghrib", "Duha"],
    ["Solat yang tidak boleh diqasarkan ialah Subuh dan…", "Maghrib", "Zohor", "Asar", "Isyak"],
    ["Solat jamak dan qasar dibenarkan bagi orang yang…", "bermusafir", "malas", "sibuk bermain", "sedang makan"],
    ["Solat Duha dilakukan pada waktu…", "pagi selepas matahari naik", "tengah malam", "selepas Maghrib", "sebelum Subuh"],
    ["Solat sunat yang dilakukan sebelum atau selepas solat fardu dipanggil solat sunat…", "rawatib", "Duha", "Tarawih", "Hari Raya"],
    ["Solat Tarawih dilakukan pada bulan…", "Ramadan", "Syawal", "Rejab", "Muharam"]
  ]},
  { t: "Sirah", q: [
    ["Umat Islam berhijrah ke Habsyah untuk…", "menyelamatkan diri daripada penindasan Quraisy", "berniaga", "melancong", "belajar bahasa"],
    ["Raja Habsyah yang melindungi umat Islam ialah…", "Raja Najasyi", "Raja Abrahah", "Raja Kisra", "Raja Heraklius"],
    ["Tahun Siti Khadijah dan Abu Talib wafat dikenali sebagai Tahun…", "Dukacita", "Gajah", "Hijrah", "Kemenangan"],
    ["Ketika berdakwah di Taif, Nabi Muhammad SAW…", "dilempar batu tetapi tetap bersabar", "disambut meriah", "menjadi raja", "berperang"],
    ["Israk ialah perjalanan Nabi dari Masjidil Haram ke…", "Masjidil Aqsa", "Masjid Nabawi", "Masjid Quba", "Gua Hira'"],
    ["Mikraj ialah perjalanan Nabi naik ke…", "Sidratul Muntaha", "Gua Thur", "Bukit Uhud", "Madinah"],
    ["Kenderaan Nabi semasa Israk dan Mikraj ialah…", "Buraq", "unta", "kuda", "kapal"],
    ["Ibadah yang diterima semasa peristiwa Israk dan Mikraj ialah…", "solat lima waktu", "puasa", "zakat", "haji"]
  ]},
  { t: "Adab", q: [
    ["Aurat lelaki ialah antara…", "pusat dan lutut", "kepala dan kaki", "bahu dan siku", "seluruh badan"],
    ["Pakaian yang baik menurut Islam ialah pakaian yang…", "menutup aurat, bersih dan sopan", "ketat dan jarang", "kotor", "mahal sahaja"],
    ["Sebelum memakai pakaian, kita disunatkan membaca…", "Bismillah", "Alhamdulillah", "Astaghfirullah", "Subhanallah"],
    ["Ketika guru bercakap, kita perlu…", "mendengar dengan teliti", "berbual", "bermain", "tidur"],
    ["Ketika belajar, kita perlu…", "berniat ikhlas dan bersungguh-sungguh", "tidur", "bermain telefon", "meniru kawan"],
    ["Islam menggalakkan kita menjaga kebersihan kerana…", "kebersihan sebahagian daripada iman", "untuk menunjuk-nunjuk", "supaya dipuji", "tiada sebab"],
    ["Selepas menggunakan tandas, kita perlu…", "mengepam dan membasuh tangan", "terus keluar", "membiarkannya kotor", "bermain air"]
  ]},
  { t: "Jawi", q: [
    ["ڤوکوق|Perkataan Jawi ini dibaca…", "pokok", "pukul", "pakai", "pekak"],
    ["ڤندودوق|Perkataan Jawi ini dibaca…", "penduduk", "pendidik", "pandu", "pendek"],
    ["Ejaan Jawi bagi \"guru\" ialah…", "ݢورو", "کورو", "ݢرو", "ݢوروه"],
    ["Ejaan Jawi bagi \"buku\" ialah…", "بوکو", "بکو", "بوکوه", "بوک"],
    ["ݢ|Huruf Jawi ini mewakili bunyi…", "g", "k", "ng", "j"],
    ["ۏ|Huruf Jawi ini mewakili bunyi…", "v", "w", "f", "p"],
    ["Khat yang digunakan dalam tulisan al-Quran di Malaysia ialah khat…", "Nasakh", "Rumi", "Latin", "Braille"],
    ["Tulisan Jawi berasal daripada huruf…", "Arab", "Rumi", "Cina", "Tamil"]
  ]}
],

/* ======================= BAHASA ARAB (ikut tema) ======================= */
ba: [
  { t: "Hobi", q: [
    ["هِوَايَةٌ|Perkataan ini bermaksud…", "hobi", "rumah", "sekolah", "kawan"],
    ["الْقِرَاءَةُ|Hobi ini ialah…", "membaca", "melukis", "berenang", "memasak"],
    ["الرَّسْمُ|Hobi ini ialah…", "melukis", "membaca", "berenang", "menulis"],
    ["السِّبَاحَةُ|Hobi ini ialah…", "berenang", "berlari", "membaca", "memancing"],
    ["⚽|Bola sepak dalam bahasa Arab ialah…", "كُرَةُ الْقَدَمِ", "السِّبَاحَةُ", "الرَّسْمُ", "الْقِرَاءَةُ"],
    ["مَا هِوَايَتُكَ؟|Soalan ini bermaksud…", "Apakah hobi kamu?", "Siapakah nama kamu?", "Di manakah rumah kamu?", "Berapakah umur kamu?"]
  ]},
  { t: "Sifat (Kata Adjektif)", q: [
    ["كَبِيرٌ|Perkataan ini bermaksud…", "besar", "kecil", "panjang", "baru"],
    ["صَغِيرٌ|Perkataan ini bermaksud…", "kecil", "besar", "tinggi", "lama"],
    ["طَوِيلٌ|Perkataan ini bermaksud…", "panjang / tinggi", "pendek", "besar", "cantik"],
    ["قَصِيرٌ|Perkataan ini bermaksud…", "pendek", "panjang", "baru", "besar"],
    ["جَدِيدٌ|Perkataan ini bermaksud…", "baru", "lama", "kecil", "cantik"],
    ["قَدِيمٌ|Perkataan ini bermaksud…", "lama", "baru", "besar", "panjang"],
    ["جَمِيلٌ|Perkataan ini bermaksud…", "cantik", "hodoh", "kecil", "lama"],
    ["🐘|Gajah itu…", "كَبِيرٌ", "صَغِيرٌ", "قَصِيرٌ", "جَدِيدٌ"],
    ["🐜|Semut itu…", "صَغِيرٌ", "كَبِيرٌ", "طَوِيلٌ", "قَدِيمٌ"]
  ]},
  { t: "Cuaca", q: [
    ["حَارٌّ|Perkataan ini bermaksud…", "panas", "sejuk", "hujan", "berangin"],
    ["بَارِدٌ|Perkataan ini bermaksud…", "sejuk", "panas", "basah", "kering"],
    ["مَطَرٌ|Perkataan ini bermaksud…", "hujan", "angin", "panas", "awan"],
    ["رِيحٌ|Perkataan ini bermaksud…", "angin", "hujan", "salji", "matahari"],
    ["☀️|Cuaca hari ini…", "حَارٌّ", "بَارِدٌ", "مَطَرٌ", "رِيحٌ"],
    ["🌧️|Cuaca ini ialah…", "مَطَرٌ", "حَارٌّ", "شَمْسٌ", "قَمَرٌ"]
  ]},
  { t: "Tempat Awam", q: [
    ["مُسْتَشْفَى|Tempat ini ialah…", "hospital", "sekolah", "pasar", "masjid"],
    ["مَطَارٌ|Tempat ini ialah…", "lapangan terbang", "pelabuhan", "stesen bas", "hospital"],
    ["مَكْتَبَةٌ|Tempat ini ialah…", "perpustakaan", "kedai", "hospital", "taman"],
    ["سُوقٌ|Tempat ini ialah…", "pasar", "masjid", "sekolah", "rumah"],
    ["مَسْجِدٌ|Tempat ini ialah…", "masjid", "pasar", "hospital", "taman"],
    ["🏥|Hospital dalam bahasa Arab ialah…", "مُسْتَشْفَى", "مَطَارٌ", "سُوقٌ", "بَيْتٌ"],
    ["✈️|Lapangan terbang dalam bahasa Arab ialah…", "مَطَارٌ", "مُسْتَشْفَى", "مَدْرَسَةٌ", "مَسْجِدٌ"]
  ]},
  { t: "Kata Kerja (Sedang / Akan)", q: [
    ["يَكْتُبُ|Kata kerja ini bermaksud…", "sedang / akan menulis", "telah menulis", "sedang membaca", "telah membaca"],
    ["يَقْرَأُ|Kata kerja ini bermaksud…", "sedang / akan membaca", "telah membaca", "sedang menulis", "sedang makan"],
    ["يَأْكُلُ|Kata kerja ini bermaksud…", "sedang / akan makan", "telah makan", "sedang minum", "sedang tidur"],
    ["يَشْرَبُ|Kata kerja ini bermaksud…", "sedang / akan minum", "telah minum", "sedang makan", "sedang duduk"],
    ["يَذْهَبُ|Kata kerja ini bermaksud…", "sedang / akan pergi", "telah pergi", "sedang datang", "sedang tidur"],
    ["كَتَبَ|Kata kerja ini bermaksud…", "telah menulis", "sedang menulis", "telah membaca", "akan menulis"],
    ["Kata kerja \"telah\" (lampau) dalam bahasa Arab dipanggil…", "fi'il madhi", "fi'il mudhari'", "fi'il amr", "isim"]
  ]},
  { t: "Masa dan Bilangan", q: [
    ["سَاعَةٌ|Perkataan ini bermaksud…", "jam", "hari", "minggu", "bulan"],
    ["أُسْبُوعٌ|Perkataan ini bermaksud…", "minggu", "hari", "tahun", "bulan"],
    ["شَهْرٌ|Perkataan ini bermaksud…", "bulan", "minggu", "hari", "jam"],
    ["سَنَةٌ|Perkataan ini bermaksud…", "tahun", "bulan", "minggu", "hari"],
    ["الْيَوْمَ|Perkataan ini bermaksud…", "hari ini", "semalam", "esok", "minggu ini"],
    ["عِشْرُونَ|Nombor ini ialah…", "20", "10", "12", "30"],
    ["Nombor 10 dalam bahasa Arab ialah…", "عَشَرَةٌ", "عِشْرُونَ", "ثَلَاثَةٌ", "سَبْعَةٌ"]
  ]}
]
};
})();
