/* =========================================================
   TINGKATAN 1 — Cerdik Ceria (Sekolah Menengah, KSSM)
   Matematik, Sains, Sejarah & Geografi: bab ikut buku teks KSSM Tingkatan 1.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang.
   Bahasa Arab: ikut tema dan tatabahasa asas.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🌏|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tingkatan 1 ---------- */
const N = n => n < 0 ? "−" + (-n) : String(n);           // nombor dengan tanda tolak sebenar
const P = n => n < 0 ? "(" + N(n) + ")" : String(n);      // dalam kurungan jika negatif
function qi(text, ans, offs, exp) {                       // soalan integer (boleh negatif)
  const s = new Set(); let t = 0;
  while (s.size < 3 && t < 80) { t++; const v = ans + pick(offs) * (Math.random() < .5 ? -1 : 1); if (v !== ans) s.add(v); }
  let k = 1; while (s.size < 3) { s.add(ans + k * 7); k++; }
  return [text, N(ans), ...[...s].map(N), exp || ""];
}
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a / gcd(a, b) * b;
const SETS = s => "{" + s.join(", ") + "}";
const TRIPLE = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15], [7, 24, 25], [12, 16, 20], [9, 40, 41]];

SOALAN["m1"] = {

/* ======================= MATEMATIK (bab buku teks KSSM T1) ======================= */
math: [
  { t: "Nombor Nisbah",
    q: [
      ["Integer ialah…", "nombor bulat positif, negatif dan sifar", "pecahan sahaja", "perpuluhan sahaja", "nombor positif sahaja"],
      ["Suhu 5°C di bawah sifar ditulis sebagai…", "−5°C", "5°C", "+5°C", "0.5°C"],
      ["Yang manakah paling kecil?", "−9", "−2", "0", "3"]
    ],
    g: [
      () => { const a = r(-20, 20), b = r(-20, 20); return qi(`${N(a)} + ${P(b)} = ?`, a + b, [1, 2, 2 * Math.abs(b) || 4]); },
      () => { const a = r(-20, 20), b = r(-20, 20); return qi(`${N(a)} − ${P(b)} = ?`, a - b, [1, 2, 2 * Math.abs(b) || 4]); },
      () => { const a = r(-12, 12) || 3, b = r(-9, 9) || -2; return qi(`${N(a)} × ${P(b)} = ?`, a * b, [1, 2 * Math.abs(a * b) || 6, Math.abs(a)], "Tanda sama → positif; tanda berbeza → negatif."); },
      () => { const b = pick([-9, -6, -5, -4, -3, -2, 2, 3, 4, 5]), c = r(-12, 12) || 4; return qi(`${N(b * c)} ÷ ${P(b)} = ?`, c, [1, 2 * Math.abs(c) || 6, 2]); },
      () => { const xs = shuffle([r(-15, -1), r(-15, -1), r(1, 15), r(0, 15)]); if (new Set(xs).size < 4) return null; const asc = xs.slice().sort((a, b) => a - b); const by = a => a.map(N).join(", "); const negLast = asc.filter(x => x >= 0).concat(asc.filter(x => x < 0).sort((a, b) => b - a)); return from(`Susun dalam tertib menaik:\n${by(xs)}`, by(asc), [by(asc.slice().reverse()), by(xs), by(negLast), by([asc[1], asc[0], asc[2], asc[3]]), by([asc[0], asc[2], asc[1], asc[3]]), by([asc[0], asc[1], asc[3], asc[2]])], "Nombor negatif yang lebih besar nilainya adalah lebih kecil."); },
      () => { const t = r(-8, 5), d = r(3, 15); return qi(`🌡️|Suhu pada waktu malam ialah ${N(t)}°C. Pada waktu siang suhu naik ${d}°C. Berapakah suhu siang (°C)?`, t + d, [1, 2, 2 * Math.abs(t) || 4]); }
    ] },
  { t: "Faktor dan Gandaan",
    q: [
      ["Faktor perdana bagi 12 ialah…", "2 dan 3", "1, 2, 3, 4, 6, 12", "4 dan 3", "2 sahaja"],
      ["Nombor perdana yang genap ialah…", "2", "4", "0", "1"]
    ],
    g: [
      () => { const g = r(2, 12), a = g * r(2, 9), b = g * r(2, 9); const h = gcd(a, b); return q(`FSTB (faktor sepunya terbesar) bagi ${a} dan ${b} ialah…`, h, [h, 1, 2]); },
      () => { const a = r(2, 15), b = r(2, 15); return q(`GSTK (gandaan sepunya terkecil) bagi ${a} dan ${b} ialah…`, lcm(a, b), [a, b, lcm(a, b) / 2 || 2]); },
      () => { const n = r(12, 99); const fs = []; for (let i = 2; i < n; i++) if (n % i === 0) fs.push(i); if (!fs.length) return null; const f = pick(fs); const non = []; for (let i = 2; i < n; i++) if (n % i) non.push(i); return from(`Yang manakah faktor bagi ${n}?`, String(f), shuffle(non).slice(0, 6).map(String)); },
      () => { const a = r(3, 12), k = r(2, 12); const nonm = [a * k + 1, a * k - 1, a * k + 2, a * k + Math.ceil(a / 2)].filter(x => x % a); return from(`Yang manakah gandaan bagi ${a}?`, String(a * k), nonm.map(String)); },
      () => { const a = pick([4, 5, 6, 8]), b = pick([6, 9, 10, 12]); return q(`🚌|Bas A bertolak setiap ${a} minit dan bas B setiap ${b} minit. Kedua-duanya bertolak serentak pada 7:00 pagi. Selepas berapa minit mereka bertolak serentak lagi?`, lcm(a, b), [a, b, a * b === lcm(a, b) ? a + b : a * b], false, "Cari GSTK.", x => x + " minit"); }
    ] },
  { t: "Kuasa Dua, Punca Kuasa Dua, Kuasa Tiga dan Punca Kuasa Tiga",
    q: [
      ["Kuasa dua sempurna ialah…", "nombor yang hasil daripada n × n", "nombor genap", "nombor perdana", "nombor ganjil"],
      ["√0 = ?", "0", "1", "tiada", "10"]
    ],
    g: [
      () => { const n = r(2, 20); return q(`${n}² = ?`, n * n, [n, 2 * n, 1, 10]); },
      () => { const n = r(2, 20); return q(`√${n * n} = ?`, n, [1, 2, n]); },
      () => { const n = r(2, 10); return q(`${n}³ = ?`, n ** 3, [n * n, 3 * n, n]); },
      () => { const n = r(2, 10); return q(`∛${n ** 3} = ?`, n, [1, 2, 3]); },
      () => { const a = r(2, 9), b = r(2, 6); return q(`${a}² + ${b}³ = ?`, a * a + b ** 3, [a, b, 2 * a, 3 * b]); },
      () => { const n = r(3, 15); return q(`🟩|Luas sebuah segi empat sama ialah ${n * n} cm². Berapakah panjang sisinya?`, n, [1, 2, n], false, "Sisi = √luas", x => x + " cm"); }
    ] },
  { t: "Nisbah, Kadar dan Kadaran",
    q: [
      ["Kadar ialah perbandingan dua kuantiti dengan…", "unit yang berbeza", "unit yang sama", "tiada unit", "nombor yang sama"],
      ["Nisbah 15 : 25 dalam bentuk termudah ialah…", "3 : 5", "5 : 3", "15 : 5", "1 : 5"]
    ],
    g: [
      () => { const a = r(1, 9), b = r(1, 9), k = r(2, 15); if (a === b) return null; const g = gcd(a, b); const right = `${a / g} : ${b / g}`; return from(`Nisbah ${a * k} : ${b * k} dalam bentuk termudah ialah…`, right, [`${b / g} : ${a / g}`, `${a * k / g} : ${b / g}`, `${a / g + 1} : ${b / g}`, `${a / g} : ${(a + b) / g}`, `${a / g} : ${b / g + 1}`, `${a / g * 2} : ${b / g}`]); },
      () => { const a = r(1, 5), b = r(1, 5), k = r(10, 60) * 2; return q(`💰|RM${(a + b) * k} dibahagi antara Ali dan Bala mengikut nisbah ${a} : ${b}. Berapakah bahagian Bala?`, b * k, [k, a * k, 10], false, "", x => "RM" + x); },
      () => { const v = r(40, 110), t = r(2, 5); return q(`🚗|Kereta bergerak ${v * t} km dalam ${t} jam. Berapakah lajunya?`, v, [5, 10, t], false, "Laju = jarak ÷ masa", x => x + " km/j"); },
      () => { const n = r(3, 8), h = r(2, 9), m = r(n + 2, 20); return q(`📒|${n} buah buku nota berharga RM${n * h}. Berapakah harga ${m} buah buku nota?`, m * h, [h, n, 2], false, "Kaedah unitari.", x => "RM" + x); },
      () => { let a = r(2, 6), b = r(2, 6), c = r(2, 6); const k = r(2, 9); if (a === b && b === c) c = c === 6 ? 5 : c + 1; { const gd = (x, y) => y ? gd(y, x % y) : x, g = gd(gd(a, b), c); a /= g; b /= g; c /= g; } return q(`Nisbah p : q : r = ${a} : ${b} : ${c}. Jika q = ${b * k}, cari r.`, c * k, [k, b * k, c]); }
    ] },
  { t: "Ungkapan Algebra",
    q: [
      ["Dalam sebutan 5xy, pekalinya ialah…", "5", "x", "y", "xy"],
      ["Sebutan serupa dengan 3ab ialah…", "−7ab", "3a", "3b", "3a²b"],
      ["Bilangan sebutan dalam 2x + 3y − 4 ialah…", "3", "2", "4", "1"]
    ],
    g: [
      () => { const a = r(2, 9), b = r(-9, 9) || 4, x = r(-5, 6); return qi(`Nilai ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} apabila x = ${N(x)} ialah…`, a * x + b, [1, a, 2 * Math.abs(b) || 3]); },
      () => { const a = r(2, 9), b = r(2, 9), c = r(2, a + b - 2); const k = a + b - c; const right = (k === 1 ? "" : k) + "x"; return from(`Permudahkan: ${a}x + ${b}x − ${c}x`, right, [`${a + b + c}x`, `${a + b}x`, `${k}x²`, `${Math.abs(a - b + c)}x`].filter(z => z !== right)); },
      () => { const a = r(2, 7), b = r(2, 7), c = r(2, 7), d = r(2, 7); const right = `${a + c}x + ${b + d}y`; return from(`Permudahkan: ${a}x + ${b}y + ${c}x + ${d}y`, right, [`${a + b}x + ${c + d}y`, `${a + b + c + d}xy`, `${a + c}x − ${b + d}y`, `${a * c}x + ${b * d}y`, `${a + c + 1}x + ${b + d}y`, `${a + c}x + ${b + d + 1}y`]); },
      () => { const a = r(2, 6), x = r(2, 6), y = r(2, 6); return q(`Nilai ${a}xy apabila x = ${x} dan y = ${y} ialah…`, a * x * y, [a, x * y, a + x + y]); }
    ] },
  { t: "Persamaan Linear",
    q: [
      ["Persamaan linear dalam satu pemboleh ubah mempunyai kuasa tertinggi…", "1", "2", "3", "0"],
      ["Yang manakah persamaan linear?", "2x + 5 = 11", "x² = 9", "x³ + 1 = 0", "xy = 4"]
    ],
    g: [
      () => { const x = r(-9, 12), a = r(2, 9), b = r(-15, 15); const c = a * x + b; return qi(`Selesaikan: ${a}x${b ? ` ${b < 0 ? "−" : "+"} ${Math.abs(b)}` : ""} = ${N(c)}\nx = ?`, x, [1, 2, a]); },
      () => { const x = r(1, 15), b = r(1, 20); return qi(`Selesaikan: x + ${b} = ${x + b}\nx = ?`, x, [1, b, 2]); },
      () => { const x = r(2, 12), d = r(2, 6); return qi(`Selesaikan: x ÷ ${d} = ${x}\nx = ?`, x * d, [d, x, 1]); },
      () => { const x = r(5, 30); return q(`🧮|Hasil tambah dua nombor berturutan ialah ${2 * x + 1}. Berapakah nombor yang lebih kecil?`, x, [1, 2, 3], false, "x + (x + 1) = jumlah"); },
      () => { const h = r(2, 9), n = r(3, 9), s = r(1, 20); return q(`🖊️|Ahmad membeli ${n} batang pen dan sebuah fail berharga RM${s}. Jumlah bayaran ialah RM${n * h + s}. Berapakah harga sebatang pen?`, h, [1, 2, n], false, `${n}x + ${s} = ${n * h + s}`, x => "RM" + x); }
    ] },
  { t: "Ketaksamaan Linear",
    q: [
      ["Simbol \">\" bermaksud…", "lebih besar daripada", "kurang daripada", "sama dengan", "tidak sama dengan"],
      ["Simbol \"≤\" bermaksud…", "kurang daripada atau sama dengan", "lebih besar daripada", "kurang daripada sahaja", "tidak sama dengan"],
      ["Jika kedua-dua belah ketaksamaan didarab dengan nombor negatif, simbol ketaksamaan…", "diterbalikkan", "kekal", "hilang", "menjadi ="]
    ],
    g: [
      () => { const a = r(1, 15), c = r(a + 1, 30); const sym = pick([">", "<", "≥", "≤"]); const right = `x ${sym} ${c - a}`; const flip = { ">": "<", "<": ">", "≥": "≤", "≤": "≥" }[sym]; return from(`Selesaikan: x + ${a} ${sym} ${c}`, right, [`x ${flip} ${c - a}`, `x ${sym} ${c + a}`, `x ${sym} ${a}`, `x = ${c - a}`]); },
      () => { const k = r(2, 6), v = r(2, 9); const sym = pick([">", "<"]); const right = `x ${sym} ${v}`; const flip = sym === ">" ? "<" : ">"; return from(`Selesaikan: ${k}x ${sym} ${k * v}`, right, [`x ${flip} ${v}`, `x ${sym} ${k * v}`, `x ${sym} ${v + k}`, `x = ${v}`]); },
      () => { const k = r(2, 6), v = r(2, 9); const right = `x < ${N(-v)}`; return from(`Selesaikan: −${k}x > ${k * v}`, right, [`x > ${N(-v)}`, `x > ${v}`, `x < ${v}`, `x = ${N(-v)}`], "Bahagi dengan nombor negatif → terbalikkan simbol."); },
      () => { const v = r(2, 15); const xs = [v - 1, v, v + 1, v + 3]; return from(`Integer manakah memuaskan x > ${v}?`, String(v + 1 + r(0, 3)), [String(v), String(v - 1), String(v - 2), String(v - 3)]); }
    ] },
  { t: "Garis dan Sudut",
    q: [
      ["Dua sudut yang hasil tambahnya 90° dipanggil sudut…", "pelengkap", "penggenap", "bertentang bucu", "refleks"],
      ["Dua sudut yang hasil tambahnya 180° dipanggil sudut…", "penggenap", "pelengkap", "tegak", "tirus"],
      ["Sudut bertentang bucu adalah…", "sama besar", "hasil tambahnya 90°", "hasil tambahnya 360°", "sentiasa 90°"],
      ["Sudut refleks ialah sudut antara…", "180° dan 360°", "90° dan 180°", "0° dan 90°", "tepat 180°"]
    ],
    g: [
      () => { const a = r(5, 85); return q(`Pelengkap bagi ${a}° ialah…`, 90 - a, [10, 90, 180 - a - (90 - a) || 5], false, "", x => x + "°"); },
      () => { const a = r(5, 175); return q(`Penggenap bagi ${a}° ialah…`, 180 - a, [10, 90, 20], false, "", x => x + "°"); },
      () => { const a = r(20, 160); return from(`Dua garis lurus bersilang. Satu sudut ialah ${a}°. Sudut bertentang bucunya ialah…`, `${a}°`, [`${180 - a}°`, `${360 - a}°`, `${a + 10}°`, `${a + 20}°`, `${Math.abs(90 - a) || 30}°`]); },
      () => { const a = r(60, 150), b = r(40, 300 - a - 20); const c = 360 - a - b; if (c <= 0) return null; return q(`Tiga sudut di sekitar satu titik ialah ${a}°, ${b}° dan x. Cari x.`, c, [10, 20, 30], false, "Jumlah sudut sekitar titik = 360°", z => z + "°"); },
      () => { const a = r(30, 150); return from(`Dua garis selari dipotong oleh garis rentas. Satu sudut selang-seli ialah ${a}°. Sudut selang-seli yang satu lagi ialah…`, `${a}°`, [`${180 - a}°`, `${360 - a}°`, `${a / 2}°`, `${a + 10}°`, `${a + 20}°`]); }
    ] },
  { t: "Poligon Asas",
    q: [
      ["Segi tiga sama sisi mempunyai setiap sudut pedalaman sebanyak…", "60°", "90°", "45°", "120°"],
      ["Segi tiga sama kaki mempunyai ___ sisi yang sama panjang.", "2", "3", "0", "4"],
      ["Sisi empat yang mempunyai sepasang sisi selari sahaja ialah…", "trapezium", "segi empat selari", "rombus", "segi empat sama"],
      ["Pepenjuru segi empat sama bersilang pada sudut…", "90°", "45°", "60°", "180°"]
    ],
    g: [
      () => { const a = r(20, 100), b = r(20, 160 - a); return q(`Dua sudut dalam sebuah segi tiga ialah ${a}° dan ${b}°. Cari sudut ketiga.`, 180 - a - b, [10, 20, 5], false, "Jumlah sudut segi tiga = 180°", x => x + "°"); },
      () => { const n = pick([5, 6, 7, 8, 9, 10]); return q(`Hasil tambah sudut pedalaman bagi poligon ${n} sisi ialah…`, (n - 2) * 180, [180, 90, 360], false, "(n − 2) × 180°", x => x + "°"); },
      () => { const n = pick([5, 6, 8, 9, 10, 12]); return q(`Setiap sudut pedalaman poligon sekata ${n} sisi ialah…`, (n - 2) * 180 / n, [10, 20, 30], false, "(n − 2) × 180° ÷ n", x => x + "°"); },
      () => { const a = r(50, 130), b = r(50, 130), c = r(50, 330 - a - b > 50 ? 330 - a - b : 60); const d = 360 - a - b - c; if (d <= 10 || d >= 180) return null; return q(`Tiga sudut dalam sebuah sisi empat ialah ${a}°, ${b}° dan ${c}°. Cari sudut keempat.`, d, [10, 20, 30], false, "Jumlah sudut sisi empat = 360°", x => x + "°"); }
    ] },
  { t: "Perimeter dan Luas",
    q: [
      ["Luas segi empat selari = ?", "tapak × tinggi", "½ × tapak × tinggi", "panjang + lebar", "2 × (tapak + tinggi)"],
      ["Luas trapezium = ?", "½ × (hasil tambah sisi selari) × tinggi", "tapak × tinggi", "panjang × lebar", "½ × tapak × tinggi"],
      ["Luas lelayang = ?", "½ × hasil darab pepenjuru", "pepenjuru × pepenjuru", "sisi × sisi", "½ × tapak"]
    ],
    g: [
      () => { const b = r(3, 20), h = r(2, 15); return q(`Luas segi empat selari dengan tapak ${b} cm dan tinggi ${h} cm ialah…`, b * h, [b, h, b * h / 2 || 2], false, "", x => x + " cm²"); },
      () => { const a = r(2, 12), b = r(a + 1, 20), h = r(2, 12) * 2; return q(`Luas trapezium dengan sisi selari ${a} cm dan ${b} cm serta tinggi ${h} cm ialah…`, (a + b) * h / 2, [h, a * h, 10], false, "½ × (a + b) × t", x => x + " cm²"); },
      () => { const b = r(2, 15) * 2, h = r(3, 20); return q(`Luas segi tiga dengan tapak ${b} cm dan tinggi ${h} cm ialah…`, b * h / 2, [b * h / 2, b, h], false, "", x => x + " cm²"); },
      () => { const p = r(2, 12) * 2, q2 = r(3, 15); return q(`Luas lelayang dengan pepenjuru ${p} cm dan ${q2} cm ialah…`, p * q2 / 2, [p * q2 / 2, p, q2], false, "", x => x + " cm²"); },
      () => { const a = r(3, 12), b = r(3, 12), c = r(3, 12), d = r(3, 12), e = r(3, 12); return q(`Perimeter pentagon dengan sisi ${a}, ${b}, ${c}, ${d} dan ${e} cm ialah…`, a + b + c + d + e, [1, 2, a], false, "", x => x + " cm"); }
    ] },
  { t: "Pengenalan Set",
    q: [
      ["Set yang tidak mempunyai unsur dipanggil…", "set kosong", "set semesta", "subset", "pelengkap"],
      ["Simbol ∅ mewakili…", "set kosong", "set semesta", "unsur", "subset"],
      ["Simbol ξ mewakili…", "set semesta", "set kosong", "unsur", "pelengkap"],
      ["Simbol \"∈\" bermaksud…", "ialah unsur bagi", "bukan unsur bagi", "subset bagi", "sama dengan"],
      ["Set A = {huruf vokal}. n(A) = ?", "5", "26", "21", "4"]
    ],
    g: [
      () => { const A = [...new Set(Array.from({ length: r(4, 8) }, () => r(1, 30)))]; return q(`A = ${SETS(A)}\nn(A) = ?`, A.length, [1, 2]); },
      () => { const m = pick([2, 3, 4, 5]); const lim = r(15, 30); const A = []; for (let i = m; i <= lim; i += m) A.push(i); return q(`A = {gandaan ${m} yang kurang daripada atau sama dengan ${lim}}\nn(A) = ?`, A.length, [1, 2]); },
      () => { const A = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5).sort((a, b) => a - b); const notIn = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !A.includes(x)); return from(`A = ${SETS(A)}\nYang manakah BUKAN unsur set A?`, String(pick(notIn)), A.map(String)); },
      () => { const A = shuffle([1, 2, 3, 4, 5, 6, 7, 8]).slice(0, r(1, 3)).sort((a, b) => a - b); return q(`Bilangan subset bagi set ${SETS(A)} ialah…`, 2 ** A.length, [1, 2, A.length], false, "Bilangan subset = 2ⁿ"); }
    ] },
  { t: "Pengendalian Data",
    q: [
      ["Data yang diperoleh secara mengira ialah data…", "diskret", "selanjar", "kualitatif", "rawak"],
      ["Data seperti tinggi dan jisim ialah data…", "selanjar", "diskret", "kategori", "nominal"],
      ["Warna kegemaran ialah contoh data…", "kategori (kualitatif)", "numerik diskret", "numerik selanjar", "kuantitatif"],
      ["Carta yang sesuai untuk menunjukkan perubahan data mengikut masa ialah…", "graf garis", "carta pai", "piktograf", "gambar rajah Venn"],
      ["Carta yang sesuai untuk menunjukkan bahagian daripada keseluruhan ialah…", "carta pai", "graf garis", "histogram", "plot titik"]
    ],
    g: [
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 5)]); return from(`Mod bagi data:\n${xs.join(", ")}`, String(m), xs.filter(x => x !== m).map(String)); },
      () => { const xs = Array.from({ length: 6 }, () => r(10, 90)); return q(`Julat bagi data:\n${xs.join(", ")}`, Math.max(...xs) - Math.min(...xs), [1, 10, 5]); },
      () => { const c = shuffle([3, 5, 6, 8, 10, 12]).slice(0, 4); const tot = c.reduce((a, b) => a + b, 0); const items = ["Bola sepak", "Badminton", "Bola jaring", "Olahraga"]; const k = r(0, 3); return q(`📊 Sukan pilihan murid:\n${items.map((x, i) => `${x}: ${c[i]}`).join("\n")}|Berapakah jumlah murid?`, tot, [1, 2, 5]); }
    ] },
  { t: "Teorem Pythagoras",
    q: [
      ["Sisi terpanjang dalam segi tiga bersudut tegak dipanggil…", "hipotenus", "tapak", "tinggi", "pepenjuru"],
      ["Teorem Pythagoras: c² = ?", "a² + b²", "a + b", "a² − b²", "2ab"],
      ["Set nombor yang membentuk segi tiga bersudut tegak ialah…", "3, 4, 5", "2, 3, 4", "4, 5, 6", "1, 2, 3"]
    ],
    g: [
      () => { const [a, b, c] = pick(TRIPLE), k = r(1, 3); return q(`📐|Segi tiga bersudut tegak dengan sisi ${a * k} cm dan ${b * k} cm. Panjang hipotenus ialah…`, c * k, [1, 2, k], false, "c = √(a² + b²)", x => x + " cm"); },
      () => { const [a, b, c] = pick(TRIPLE), k = r(1, 3); return q(`📐|Hipotenus ${c * k} cm dan satu sisi ${a * k} cm. Panjang sisi yang satu lagi ialah…`, b * k, [1, 2, k], false, "b = √(c² − a²)", x => x + " cm"); },
      () => { const [a, b, c] = pick(TRIPLE); const bad = [a, b, c + 1]; return from(`Set manakah membentuk segi tiga bersudut tegak?`, `${a}, ${b}, ${c}`, [`${bad.join(", ")}`, `${a + 1}, ${b}, ${c}`, `${a}, ${b + 2}, ${c}`, `${a}, ${b}, ${a + b}`]); },
      () => { const [a, b, c] = pick(TRIPLE); return q(`🪜|Tangga sepanjang ${c} m disandarkan pada dinding. Kaki tangga ${a} m dari dinding. Berapakah tinggi hujung tangga pada dinding?`, b, [1, 2, a], false, "", x => x + " m"); }
    ] }
],

/* ======================= SAINS (bab buku teks KSSM T1) ======================= */
sains: [
  { t: "Pengenalan kepada Penyiasatan Saintifik", q: [
    ["Bidang sains yang mengkaji hidupan ialah…", "biologi", "fizik", "kimia", "geologi"],
    ["Bidang sains yang mengkaji bahan dan tindak balasnya ialah…", "kimia", "biologi", "astronomi", "botani"],
    ["Bidang sains yang mengkaji bintang dan planet ialah…", "astronomi", "zoologi", "kimia", "meteorologi"],
    ["Unit SI bagi jisim ialah…", "kilogram (kg)", "gram (g)", "newton (N)", "liter (l)"],
    ["Unit SI bagi suhu ialah…", "kelvin (K)", "darjah Celsius (°C)", "joule (J)", "watt (W)"],
    ["Unit SI bagi arus elektrik ialah…", "ampere (A)", "volt (V)", "ohm (Ω)", "watt (W)"],
    ["Imbuhan \"kilo\" bermaksud…", "1000", "100", "0.01", "0.001"],
    ["Imbuhan \"mili\" bermaksud…", "0.001", "0.01", "1000", "100"],
    ["Alat yang lebih jitu daripada pembaris untuk mengukur diameter luar tiub ialah…", "angkup vernier", "pita pengukur", "termometer", "neraca spring"],
    ["Simbol bahaya bergambar api bermaksud bahan…", "mudah terbakar", "toksik", "menghakis", "radioaktif"],
    ["Simbol bahaya bergambar tengkorak bermaksud bahan…", "toksik (beracun)", "mudah terbakar", "mudah meletup", "merengsa"],
    ["Ketumpatan = ?", "jisim ÷ isi padu", "isi padu ÷ jisim", "jisim × isi padu", "jisim + isi padu"],
    ["Langkah pertama dalam kaedah saintifik ialah…", "mengenal pasti masalah", "membuat kesimpulan", "mengumpul data", "menulis laporan"],
    ["Alat untuk memanaskan bahan di makmal ialah…", "penunu Bunsen", "silinder penyukat", "kelalang kon", "corong turas"]
  ]},
  { t: "Sel sebagai Unit Asas Hidupan", q: [
    ["Unit asas bagi semua benda hidup ialah…", "sel", "tisu", "organ", "atom"],
    ["Organisma yang terdiri daripada satu sel sahaja dipanggil organisma…", "unisel", "multisel", "vertebrata", "invertebrata"],
    ["Contoh organisma unisel ialah…", "Amoeba", "kucing", "pokok mangga", "cendawan tiram"],
    ["Bahagian sel yang mengawal semua aktiviti sel ialah…", "nukleus", "sitoplasma", "vakuol", "dinding sel"],
    ["Struktur yang terdapat pada sel tumbuhan tetapi TIDAK pada sel haiwan ialah…", "dinding sel dan kloroplas", "nukleus", "membran sel", "sitoplasma"],
    ["Kloroplas mengandungi klorofil untuk…", "fotosintesis", "respirasi", "perkumuhan", "pembiakan"],
    ["Organel yang menjalankan respirasi sel ialah…", "mitokondria", "kloroplas", "nukleus", "vakuol"],
    ["Dinding sel memberikan sel tumbuhan…", "bentuk yang tetap dan sokongan", "warna hijau", "makanan", "tenaga"],
    ["Organisasi sel yang betul ialah…", "sel → tisu → organ → sistem → organisma", "tisu → sel → organ → sistem", "organ → sel → tisu → sistem", "sistem → organ → tisu → sel"],
    ["Alat untuk melihat sel ialah…", "mikroskop", "teleskop", "periskop", "kanta mata sahaja"],
    ["Hasil fotosintesis ialah glukosa dan…", "oksigen", "karbon dioksida", "nitrogen", "air garam"],
    ["Respirasi sel menghasilkan tenaga, karbon dioksida dan…", "air", "oksigen", "glukosa", "klorofil"]
  ]},
  { t: "Koordinasi dan Gerak Balas", q: [
    ["Homeostasis ialah proses mengekalkan…", "persekitaran dalam badan yang stabil", "berat badan sahaja", "tinggi badan", "warna kulit"],
    ["Suhu badan manusia yang normal ialah lebih kurang…", "37°C", "30°C", "40°C", "25°C"],
    ["Apabila badan panas, kita akan…", "berpeluh", "menggigil", "kulit berbintik", "rambut tegak"],
    ["Apabila badan terlalu sejuk, kita akan…", "menggigil", "berpeluh banyak", "minum air sejuk", "membuka baju"],
    ["Organ yang mengawal kandungan air dalam badan dengan menghasilkan air kencing ialah…", "ginjal", "jantung", "paru-paru", "hati"],
    ["Pada hari panas, isi padu air kencing biasanya…", "berkurang", "bertambah", "sama", "tiada"],
    ["Tumbuhan mengawal kehilangan air melalui pembukaan dan penutupan…", "stoma", "akar", "bunga", "biji"],
    ["Pada hari panas, stoma akan ___ untuk mengurangkan kehilangan air.", "tertutup", "terbuka luas", "pecah", "membesar"],
    ["Sistem yang menerima rangsangan dan menghasilkan gerak balas ialah sistem…", "saraf", "pencernaan", "perkumuhan", "pembiakan"],
    ["Sistem saraf pusat terdiri daripada otak dan…", "saraf tunjang", "jantung", "kulit", "paru-paru"]
  ]},
  { t: "Pembiakan", q: [
    ["Pembiakan yang melibatkan percantuman gamet jantan dan betina ialah pembiakan…", "seks", "aseks", "vegetatif", "pertunasan"],
    ["Amoeba membiak secara…", "belahan dedua", "pertunasan", "spora", "biji benih"],
    ["Yis membiak secara…", "pertunasan", "belahan dedua", "spora sahaja", "regenerasi"],
    ["Kulat roti membiak melalui…", "spora", "biji benih", "pertunasan", "belahan dedua"],
    ["Planaria yang dipotong boleh tumbuh menjadi individu baharu melalui…", "regenerasi", "spora", "pertunasan", "persenyawaan"],
    ["Bahagian jantan pada bunga ialah…", "stamen", "pistil", "kelopak", "sepal"],
    ["Bahagian betina pada bunga ialah…", "pistil", "stamen", "filamen", "anter"],
    ["Debunga dihasilkan oleh…", "anter", "stigma", "ovari", "stil"],
    ["Pemindahan debunga dari anter ke stigma dipanggil…", "pendebungaan", "persenyawaan", "percambahan", "penyebaran"],
    ["Selepas persenyawaan, ovari akan berkembang menjadi…", "buah", "daun", "akar", "batang"],
    ["Sel pembiakan lelaki dipanggil…", "sperma", "ovum", "zigot", "embrio"],
    ["Persenyawaan dalam manusia biasanya berlaku di…", "tiub Falopio", "uterus", "faraj", "ovari"]
  ]},
  { t: "Jirim", q: [
    ["Jirim ialah sesuatu yang mempunyai jisim dan…", "memenuhi ruang", "berwarna", "berbau", "bergerak"],
    ["Zarah dalam pepejal tersusun…", "rapat dan teratur", "jauh dan bebas", "renggang dan tidak teratur", "tidak bergerak langsung dan tiada daya tarikan"],
    ["Zarah dalam gas bergerak…", "bebas dan laju", "bergetar di tempat tetap", "perlahan dan rapat", "tidak bergerak"],
    ["Resapan berlaku paling cepat dalam…", "gas", "cecair", "pepejal", "vakum"],
    ["Perubahan pepejal terus kepada gas dipanggil…", "pemejalwapan", "peleburan", "pendidihan", "kondensasi"],
    ["Contoh bahan yang mengalami pemejalwapan ialah…", "ais kering", "garam", "gula", "pasir"],
    ["Takat lebur ais ialah…", "0°C", "100°C", "−10°C", "37°C"],
    ["Takat didih air tulen pada aras laut ialah…", "100°C", "0°C", "50°C", "212°C"],
    ["Apabila jirim dipanaskan, zarah-zarahnya akan…", "bergerak lebih laju", "bergerak lebih perlahan", "berhenti", "menjadi lebih kecil"],
    ["Bau minyak wangi tersebar ke seluruh bilik kerana…", "resapan", "kondensasi", "pembekuan", "peleburan"]
  ]},
  { t: "Jadual Berkala", q: [
    ["Bahan yang terdiri daripada satu jenis atom sahaja dipanggil…", "unsur", "sebatian", "campuran", "larutan"],
    ["Air (H₂O) ialah contoh…", "sebatian", "unsur", "campuran", "logam"],
    ["Simbol bagi oksigen ialah…", "O", "Ox", "Og", "Os"],
    ["Simbol bagi natrium ialah…", "Na", "N", "So", "Nt"],
    ["Simbol bagi besi ialah…", "Fe", "Fi", "Be", "Ir"],
    ["Simbol bagi kuprum ialah…", "Cu", "Co", "Kp", "C"],
    ["Simbol bagi emas ialah…", "Au", "Em", "Ag", "Go"],
    ["Lajur menegak dalam Jadual Berkala dipanggil…", "kumpulan", "kala", "baris", "blok"],
    ["Baris mendatar dalam Jadual Berkala dipanggil…", "kala", "kumpulan", "lajur", "siri"],
    ["Ciri logam ialah…", "berkilat dan mengkonduksi elektrik", "rapuh dan kusam", "penebat elektrik", "tidak mengkonduksi haba"],
    ["Kaedah untuk mengasingkan pasir daripada air ialah…", "penurasan", "penyulingan", "kromatografi", "penghabluran"],
    ["Kaedah untuk mengasingkan pewarna dalam dakwat ialah…", "kromatografi", "penurasan", "penapisan", "magnet"],
    ["Udara ialah contoh…", "campuran", "unsur", "sebatian", "logam"]
  ]},
  { t: "Udara", q: [
    ["Gas yang paling banyak dalam udara ialah…", "nitrogen", "oksigen", "karbon dioksida", "argon"],
    ["Peratus oksigen dalam udara ialah lebih kurang…", "21%", "78%", "1%", "50%"],
    ["Peratus nitrogen dalam udara ialah lebih kurang…", "78%", "21%", "0.03%", "50%"],
    ["Gas yang diperlukan untuk pembakaran ialah…", "oksigen", "nitrogen", "argon", "helium"],
    ["Tiga keperluan pembakaran ialah bahan api, haba dan…", "oksigen", "air", "nitrogen", "cahaya"],
    ["Gas yang mengeruhkan air kapur ialah…", "karbon dioksida", "oksigen", "nitrogen", "hidrogen"],
    ["Tumbuhan mengambil karbon dioksida dan membebaskan oksigen melalui…", "fotosintesis", "respirasi", "pembakaran", "pereputan"],
    ["Gas beracun yang dihasilkan oleh ekzos kenderaan ialah…", "karbon monoksida", "oksigen", "nitrogen", "argon"],
    ["Bahan yang menipiskan lapisan ozon ialah…", "CFC (klorofluorokarbon)", "oksigen", "wap air", "nitrogen"],
    ["Peningkatan gas rumah hijau menyebabkan…", "pemanasan global", "zaman ais", "udara lebih bersih", "hujan berkurang sahaja"],
    ["Salah satu cara mengurangkan pencemaran udara ialah…", "menggunakan pengangkutan awam", "membakar sampah terbuka", "menebang hutan", "membuka semua kilang"]
  ]},
  { t: "Cahaya dan Optik", q: [
    ["Imej dalam cermin satah adalah…", "tegak, maya dan sama saiz", "songsang dan nyata", "lebih besar", "lebih kecil dan nyata"],
    ["Imej dalam cermin satah adalah songsang…", "sisi (kiri-kanan)", "atas-bawah", "depan-belakang", "tiada"],
    ["Sudut tuju bagi pantulan cahaya adalah ___ dengan sudut pantulan.", "sama", "lebih besar", "lebih kecil", "dua kali"],
    ["Pembengkokan cahaya apabila melalui medium berlainan dipanggil…", "pembiasan", "pantulan", "serakan", "penyerapan"],
    ["Kanta yang menumpukan cahaya ialah kanta…", "cembung", "cekung", "satah", "lutsinar rata"],
    ["Kanta yang mencapahkan cahaya ialah kanta…", "cekung", "cembung", "pembesar", "kamera"],
    ["Kanta pembesar ialah sejenis kanta…", "cembung", "cekung", "rata", "cermin"],
    ["Prisma kaca boleh menyerakkan cahaya putih kepada…", "tujuh warna spektrum", "satu warna", "warna hitam", "dua warna"],
    ["Objek kelihatan merah kerana ia ___ cahaya merah.", "memantulkan", "menyerap", "menghasilkan", "membiaskan"],
    ["Periskop menggunakan dua cermin satah untuk…", "melihat dari tempat tersembunyi", "membesarkan objek", "menumpukan cahaya", "menyerakkan cahaya"],
    ["Mata manusia mempunyai kanta jenis…", "cembung", "cekung", "satah", "prisma"]
  ]},
  { t: "Bumi", q: [
    ["Lapisan Bumi yang paling luar ialah…", "kerak", "mantel", "teras luar", "teras dalam"],
    ["Lapisan Bumi yang paling panas ialah…", "teras dalam", "kerak", "mantel", "atmosfera"],
    ["Batuan yang terbentuk daripada magma yang menyejuk ialah batuan…", "igneus", "enapan", "metamorfik", "kapur"],
    ["Granit ialah contoh batuan…", "igneus", "enapan", "metamorfik", "fosil"],
    ["Batu kapur ialah contoh batuan…", "enapan", "igneus", "metamorfik", "magma"],
    ["Marmar terbentuk daripada batu kapur yang mengalami haba dan tekanan. Ia batuan…", "metamorfik", "igneus", "enapan", "lava"],
    ["Fosil biasanya ditemui dalam batuan…", "enapan", "igneus", "metamorfik", "magma"],
    ["Gempa bumi di dasar laut boleh menyebabkan…", "tsunami", "jerebu", "kemarau", "salji"],
    ["Bahagian Bumi yang terdiri daripada semua air dipanggil…", "hidrosfera", "atmosfera", "litosfera", "biosfera"],
    ["Lapisan udara yang menyelubungi Bumi dipanggil…", "atmosfera", "hidrosfera", "litosfera", "mantel"],
    ["Air yang tersimpan di dalam tanah dipanggil air…", "bawah tanah", "permukaan", "laut", "hujan asid"]
  ]}
],

/* ======================= SEJARAH (bab buku teks KSSM T1) ======================= */
sejarah: [
  { n: 1, t: "Mengenali Sejarah", q: [
    ["Perkataan \"sejarah\" dikatakan berasal daripada perkataan Arab…", "syajaratun (pokok)", "tarikh", "madana", "umran"],
    ["Tokoh yang digelar \"Bapa Sejarah\" ialah…", "Herodotus", "Ibnu Khaldun", "Socrates", "Plato"],
    ["Ibnu Khaldun terkenal dengan karya…", "Muqaddimah", "Sulalatus Salatin", "Hikayat Hang Tuah", "Suma Oriental"],
    ["Sumber yang dihasilkan pada zaman peristiwa itu berlaku dipanggil sumber…", "primer", "sekunder", "lisan sahaja", "tertier"],
    ["Buku rujukan yang ditulis berdasarkan sumber lain ialah sumber…", "sekunder", "primer", "artifak", "arkeologi"],
    ["Contoh sumber primer ialah…", "surat asal, artifak dan fosil", "buku teks", "ensiklopedia", "majalah"],
    ["Kaedah kajian yang mengkaji tinggalan manusia melalui ekskavasi ialah kaedah…", "arkeologi", "lisan", "bertulis", "temu bual"],
    ["Singkatan S.M. bermaksud…", "Sebelum Masihi", "Selepas Masihi", "Sejarah Melayu", "Sebelum Merdeka"],
    ["Takwim Hijrah bermula dengan peristiwa…", "hijrah Nabi Muhammad SAW ke Madinah", "kelahiran Nabi", "Perang Badar", "pembukaan Makkah"],
    ["Tafsiran sejarah boleh berbeza kerana…", "sumber dan pandangan sejarawan berbeza", "sejarah tidak benar", "peristiwa tidak berlaku", "sejarawan tidak membaca"]
  ]},
  { n: 2, t: "Zaman Air Batu", q: [
    ["Zaman Air Batu juga dikenali sebagai zaman…", "Pleistosen", "Holosen", "Neolitik", "Logam"],
    ["Zaman selepas Zaman Air Batu ialah zaman…", "Holosen", "Pleistosen", "Paleolitik", "Mesolitik"],
    ["Pada Zaman Air Batu, sebahagian besar kawasan Bumi diliputi…", "ais", "hutan hujan tropika", "padang pasir", "lautan hangat"],
    ["Apabila ais mencair, paras air laut…", "naik", "turun", "kekal", "kering"],
    ["Pentas tanah yang menghubungkan Semenanjung Tanah Melayu, Sumatera, Jawa dan Borneo dipanggil…", "Pentas Sunda", "Pentas Sahul", "Banjaran Titiwangsa", "Dataran Kedah"],
    ["Kenaikan paras air laut menyebabkan terbentuknya…", "Selat Melaka dan Laut China Selatan", "Gunung Kinabalu", "Tasik Chini", "Sungai Pahang"],
    ["Perubahan iklim pada akhir Zaman Air Batu menyebabkan manusia…", "berhijrah dan menyesuaikan diri", "pupus serta-merta", "tinggal di atas ais", "berhenti mencari makanan"],
    ["Bukti Zaman Air Batu dapat dikaji melalui…", "fosil, lapisan tanah dan batuan", "televisyen", "akhbar", "telefon"]
  ]},
  { n: 3, t: "Zaman Prasejarah", q: [
    ["Zaman prasejarah ialah zaman sebelum manusia mengenal…", "tulisan", "api", "makanan", "air"],
    ["Zaman Paleolitik juga dikenali sebagai Zaman…", "Batu Lama", "Batu Baru", "Logam", "Gangsa"],
    ["Zaman Neolitik juga dikenali sebagai Zaman…", "Batu Baru", "Batu Lama", "Batu Pertengahan", "Besi"],
    ["Pada Zaman Neolitik, manusia mula…", "bercucuk tanam dan membuat tembikar", "menggunakan komputer", "membina bandar moden", "menulis buku"],
    ["Tengkorak manusia berusia kira-kira 40 000 tahun ditemui di…", "Gua Niah, Sarawak", "Gua Cha, Kelantan", "Bukit Tengkorak, Sabah", "Kota Tampan, Perak"],
    ["Rangka Perak Man ditemui di…", "Gua Gunung Runtuh, Lenggong", "Gua Niah", "Gua Cha", "Lembah Bujang"],
    ["Tapak bengkel alat batu Kota Tampan terletak di…", "Lenggong, Perak", "Sabah", "Sarawak", "Kelantan"],
    ["Bukit Tengkorak di Sabah terkenal sebagai tapak pembuatan…", "tembikar", "kapal", "kereta", "kain sutera"],
    ["Gendang gangsa Dong Son berasal dari…", "Vietnam", "Mesir", "India", "China"],
    ["Lukisan gua prasejarah yang terkenal di Perancis ialah di Gua…", "Lascaux", "Niah", "Tambun", "Cha"],
    ["Zaman Logam menyaksikan penggunaan…", "gangsa dan besi", "plastik", "batu sahaja", "kayu sahaja"]
  ]},
  { n: 4, t: "Mengenali Tamadun", q: [
    ["Perkataan \"tamadun\" berasal daripada perkataan Arab…", "madana", "syajaratun", "tarikh", "salam"],
    ["Ibnu Khaldun menggunakan istilah ___ untuk tamadun.", "umran", "kultur", "polis", "civitas"],
    ["Perkataan Inggeris \"civilization\" berasal daripada perkataan Latin…", "civitas (bandar)", "polis", "madana", "kultur"],
    ["Ciri tamadun termasuk petempatan kekal, sistem pemerintahan dan…", "sistem tulisan", "telefon pintar", "kereta", "televisyen"],
    ["Pengkhususan pekerjaan bermaksud…", "setiap orang melakukan pekerjaan tertentu", "semua orang bertani sahaja", "tiada pekerjaan", "berburu sahaja"],
    ["Tamadun awal biasanya muncul di lembah…", "sungai", "gunung berapi", "padang pasir tanpa air", "kutub"],
    ["Mengapakah tamadun awal muncul di lembah sungai?", "tanah subur dan bekalan air mencukupi", "tiada penduduk", "cuaca sangat sejuk", "tiada binatang"],
    ["Konsep tamadun menurut Islam menekankan pembangunan…", "material dan kerohanian", "material sahaja", "ketenteraan sahaja", "hiburan sahaja"]
  ]},
  { n: 5, t: "Tamadun Awal Dunia", q: [
    ["Tamadun Mesopotamia muncul di antara Sungai Tigris dan Sungai…", "Euphrates", "Nil", "Indus", "Huang He"],
    ["Tulisan tamadun Mesopotamia dipanggil…", "cuneiform", "hieroglif", "piktograf Cina", "Jawi"],
    ["Kod undang-undang terkenal di Mesopotamia ialah Undang-undang…", "Hammurabi", "Dua Belas Jadual", "Melaka", "Manu"],
    ["Bangunan bertingkat untuk ibadat di Mesopotamia dipanggil…", "ziggurat", "piramid", "kuil Parthenon", "pagoda"],
    ["Tamadun Mesir Purba muncul di lembah Sungai…", "Nil", "Tigris", "Indus", "Huang He"],
    ["Tulisan tamadun Mesir Purba dipanggil…", "hieroglif", "cuneiform", "Sanskrit", "kaligrafi Cina"],
    ["Raja Mesir Purba digelar…", "firaun", "kaisar", "maharaja", "sultan"],
    ["Bandar terkenal tamadun Indus ialah Harappa dan…", "Mohenjo-daro", "Babylon", "Memphis", "Anyang"],
    ["Tamadun Indus terkenal dengan…", "perancangan bandar dan sistem saliran yang teratur", "piramid", "Tembok Besar", "ziggurat"],
    ["Tamadun Huang He muncul di lembah Sungai…", "Kuning", "Nil", "Indus", "Euphrates"],
    ["Tulang ramalan (tulang oracle) ialah ciri tamadun…", "Huang He (China)", "Mesir", "Indus", "Mesopotamia"]
  ]},
  { n: 6, t: "Peningkatan Tamadun Yunani dan Rom", q: [
    ["Negara kota dalam tamadun Yunani dipanggil…", "polis", "civitas", "kerajaan", "empayar"],
    ["Dua negara kota Yunani yang terkenal ialah Athens dan…", "Sparta", "Rom", "Babylon", "Kartago"],
    ["Athens terkenal dengan amalan sistem…", "demokrasi", "beraja mutlak", "komunis", "tentera"],
    ["Sparta terkenal kerana kekuatan…", "tentera", "perdagangan", "seni lukis", "pertanian sahaja"],
    ["Ahli falsafah Yunani yang terkenal ialah…", "Socrates, Plato dan Aristotle", "Confucius dan Mencius", "Ibnu Sina dan al-Farabi", "Hammurabi dan Firaun"],
    ["Sukan Olimpik bermula dalam tamadun…", "Yunani", "Rom", "Mesir", "China"],
    ["Undang-undang Rom yang terkenal ialah Undang-undang…", "Dua Belas Jadual", "Hammurabi", "Manu", "Melaka"],
    ["Seni bina Rom yang digunakan untuk menyalurkan air ialah…", "akueduk", "piramid", "ziggurat", "pagoda"],
    ["Stadium besar Rom yang terkenal ialah…", "Colosseum", "Parthenon", "Taj Mahal", "Kaabah"],
    ["Kuil terkenal di Athens yang dibina untuk dewi Athena ialah…", "Parthenon", "Colosseum", "Pantheon", "Ziggurat Ur"]
  ]},
  { n: 7, t: "Peningkatan Tamadun India dan China", q: [
    ["Maharaja Dinasti Maurya yang terkenal ialah…", "Asoka", "Shi Huang Di", "Julius Caesar", "Hammurabi"],
    ["Zaman keemasan tamadun India berlaku pada zaman Dinasti…", "Gupta", "Qin", "Han", "Maurya"],
    ["Pusat pengajian terkenal di India purba ialah…", "Nalanda", "Baitul Hikmah", "Oxford", "Al-Azhar"],
    ["Maharaja pertama yang menyatukan China ialah…", "Shi Huang Di", "Asoka", "Confucius", "Kublai Khan"],
    ["Shi Huang Di ialah maharaja Dinasti…", "Qin", "Han", "Tang", "Ming"],
    ["Laluan perdagangan antara China dan Barat yang terkenal ialah…", "Jalan Sutera", "Jalan Rempah", "Selat Melaka sahaja", "Jalan Emas"],
    ["Ahli falsafah China yang menekankan nilai moral dan hormat kepada ibu bapa ialah…", "Confucius", "Socrates", "Asoka", "Herodotus"],
    ["Kertas dicipta di China pada zaman Dinasti…", "Han", "Qin", "Shang", "Zhou"],
    ["Tembok Besar China dibina untuk…", "mempertahankan negara daripada serangan", "pelancongan", "perdagangan sahaja", "pertanian"],
    ["Sistem peperiksaan awam di China digunakan untuk memilih…", "pegawai kerajaan", "pedagang", "petani", "askar sahaja"]
  ]},
  { n: 8, t: "Tamadun Islam dan Sumbangannya", q: [
    ["Zaman sebelum kedatangan Islam di Tanah Arab dikenali sebagai zaman…", "Jahiliah", "Keemasan", "Moden", "Logam"],
    ["Dokumen perlembagaan bertulis yang dibentuk oleh Nabi Muhammad SAW di Madinah ialah…", "Piagam Madinah", "Perjanjian Hudaibiyah", "Undang-undang Hammurabi", "Magna Carta"],
    ["Khulafa al-Rasyidin terdiri daripada ___ orang khalifah.", "4", "3", "5", "7"],
    ["Pusat pemerintahan Kerajaan Umaiyah ialah…", "Damsyik", "Baghdad", "Kaherah", "Makkah"],
    ["Pusat pemerintahan Kerajaan Abbasiyah ialah…", "Baghdad", "Damsyik", "Kordova", "Madinah"],
    ["Pusat ilmu terkenal di Baghdad pada zaman Abbasiyah ialah…", "Baitul Hikmah", "Nalanda", "Akademi Plato", "Universiti Oxford"],
    ["Ibnu Sina terkenal dalam bidang…", "perubatan", "pelayaran", "seni bina", "pertanian"],
    ["Karya perubatan Ibnu Sina yang terkenal ialah…", "al-Qanun fi al-Tibb", "Muqaddimah", "al-Jabr", "Sulalatus Salatin"],
    ["Al-Khawarizmi terkenal sebagai pelopor ilmu…", "algebra", "perubatan", "sejarah", "astronomi sahaja"],
    ["Contoh seni bina Islam yang terkenal di Baitulmaqdis ialah…", "Kubah Batu (Dome of the Rock)", "Colosseum", "Parthenon", "Tembok Besar"]
  ]}
],

/* ======================= GEOGRAFI (bab buku teks KSSM T1) ======================= */
geo: [
  { t: "Arah", q: [
    ["🧭|Alat untuk menentukan arah ialah…", "kompas", "termometer", "barometer", "teleskop"],
    ["Arah di antara utara dan timur ialah…", "timur laut", "tenggara", "barat laut", "barat daya"],
    ["Arah di antara selatan dan timur ialah…", "tenggara", "timur laut", "barat daya", "barat laut"],
    ["Arah di antara selatan dan barat ialah…", "barat daya", "barat laut", "tenggara", "timur laut"],
    ["Arah di antara utara dan barat ialah…", "barat laut", "barat daya", "timur laut", "tenggara"],
    ["Bearing diukur mengikut arah jam bermula dari arah…", "utara", "selatan", "timur", "barat"],
    ["Bearing 090° bersamaan arah…", "timur", "barat", "selatan", "utara"],
    ["Bearing 180° bersamaan arah…", "selatan", "utara", "timur", "barat"],
    ["Bearing 270° bersamaan arah…", "barat", "timur", "utara", "selatan"],
    ["Arah bertentangan dengan timur laut ialah…", "barat daya", "barat laut", "tenggara", "selatan"]
  ]},
  { t: "Kedudukan", q: [
    ["Garisan latitud 0° dikenali sebagai…", "Khatulistiwa", "Garisan Meridian Pangkal", "Garisan Antarabangsa", "Kutub Utara"],
    ["Garisan longitud 0° dikenali sebagai…", "Garisan Meridian Pangkal (Greenwich)", "Khatulistiwa", "Garisan Sartan", "Garisan Jadi"],
    ["Garisan latitud ialah garisan yang dilukis…", "mendatar (timur ke barat)", "menegak (utara ke selatan)", "menyerong", "bulat sahaja di kutub"],
    ["Garisan longitud menghubungkan…", "Kutub Utara dan Kutub Selatan", "timur dan barat", "dua benua", "dua lautan"],
    ["Malaysia terletak berhampiran dengan garisan…", "Khatulistiwa", "Kutub Utara", "Meridian Pangkal", "Garisan Antarabangsa"],
    ["Rujukan grid enam angka lebih tepat daripada grid empat angka kerana…", "menunjukkan kedudukan dengan lebih terperinci", "lebih pendek", "tiada nombor", "hanya untuk peta dunia"],
    ["Dalam membaca rujukan grid, kita membaca garisan ___ dahulu.", "timuran (menegak)", "utaraan (mendatar)", "mana-mana", "tiada"]
  ]},
  { t: "Peta Lakar", q: [
    ["Peta lakar ialah peta yang dilukis…", "secara ringkas tanpa skala tepat", "dengan alat GPS sahaja", "menggunakan satelit", "sangat terperinci"],
    ["Unsur penting dalam peta ialah tajuk, arah utara, petunjuk dan…", "skala", "nama pelukis sahaja", "tarikh lahir", "warna kegemaran"],
    ["Petunjuk pada peta menerangkan maksud…", "simbol yang digunakan", "arah", "tajuk", "skala"],
    ["Simbol pada peta digunakan untuk mewakili…", "ciri-ciri seperti sekolah, jalan dan sungai", "nama orang", "harga tanah", "cuaca"],
    ["Arah utara pada peta biasanya ditunjukkan dengan…", "anak panah bertanda U", "bulatan", "garis putus-putus", "segi tiga"],
    ["Skala peta menunjukkan hubungan antara jarak di peta dengan…", "jarak sebenar di permukaan bumi", "ketinggian", "suhu", "masa"]
  ]},
  { t: "Lakaran Peta Malaysia", q: [
    ["Malaysia terdiri daripada Semenanjung Malaysia, Sabah dan…", "Sarawak", "Brunei", "Singapura", "Sumatera"],
    ["Semenanjung Malaysia dan Malaysia Timur dipisahkan oleh…", "Laut China Selatan", "Selat Melaka", "Lautan Hindi", "Laut Sulu"],
    ["Negara yang bersempadan dengan Semenanjung Malaysia di utara ialah…", "Thailand", "Singapura", "Indonesia", "Brunei"],
    ["Negara di selatan Semenanjung Malaysia ialah…", "Singapura", "Thailand", "Filipina", "Vietnam"],
    ["Negara yang dikelilingi oleh negeri Sarawak ialah…", "Brunei", "Singapura", "Thailand", "Filipina"],
    ["Selat yang memisahkan Semenanjung Malaysia dengan Sumatera ialah…", "Selat Melaka", "Selat Johor", "Selat Sunda", "Selat Makasar"],
    ["Negeri paling utara di Semenanjung Malaysia ialah…", "Perlis", "Kedah", "Kelantan", "Pulau Pinang"],
    ["Negeri paling selatan di Semenanjung Malaysia ialah…", "Johor", "Melaka", "Negeri Sembilan", "Pahang"],
    ["Negeri terbesar di Malaysia ialah…", "Sarawak", "Sabah", "Pahang", "Perak"]
  ]},
  { t: "Bumi", q: [
    ["Bumi ialah planet yang ke-___ dari Matahari.", "3", "2", "4", "5"],
    ["Putaran Bumi pada paksinya menyebabkan…", "siang dan malam", "musim", "gerhana", "pasang surut sahaja"],
    ["Bumi mengambil masa ___ untuk berputar sekali pada paksinya.", "24 jam", "12 jam", "365 hari", "7 hari"],
    ["Bumi beredar mengelilingi Matahari dalam masa lebih kurang…", "365¼ hari", "30 hari", "24 jam", "100 hari"],
    ["Bumi berputar dari arah…", "barat ke timur", "timur ke barat", "utara ke selatan", "selatan ke utara"],
    ["Paksi Bumi condong sebanyak lebih kurang…", "23½°", "45°", "90°", "0°"],
    ["Perbezaan waktu antara tempat di dunia berlaku kerana…", "putaran Bumi dan perbezaan longitud", "latitud", "ketinggian gunung", "suhu"],
    ["Setiap 15° longitud mewakili perbezaan waktu…", "1 jam", "4 minit", "15 minit", "1 hari"]
  ]},
  { t: "Bentuk Muka Bumi", q: [
    ["Gunung tertinggi di Malaysia ialah…", "Gunung Kinabalu", "Gunung Tahan", "Gunung Ledang", "Gunung Jerai"],
    ["Gunung tertinggi di Semenanjung Malaysia ialah…", "Gunung Tahan", "Gunung Kinabalu", "Gunung Mulu", "Gunung Ledang"],
    ["Banjaran gunung utama di Semenanjung Malaysia ialah Banjaran…", "Titiwangsa", "Crocker", "Bintang", "Himalaya"],
    ["Banjaran gunung di Sabah yang terkenal ialah Banjaran…", "Crocker", "Titiwangsa", "Bintang", "Tahan"],
    ["Kawasan tanah rendah yang rata dipanggil…", "dataran", "banjaran", "lembah", "tanah tinggi"],
    ["Kawasan rendah di antara dua bukit atau gunung dipanggil…", "lembah", "dataran", "tanjung", "teluk"],
    ["Tanah yang menganjur ke laut dipanggil…", "tanjung", "teluk", "pulau", "lembah"],
    ["Laut yang menjorok ke daratan dipanggil…", "teluk", "tanjung", "semenanjung", "dataran"],
    ["Tanah tinggi Cameron terletak di negeri…", "Pahang", "Perak", "Kedah", "Johor"]
  ]},
  { t: "Saliran", q: [
    ["Sungai terpanjang di Malaysia ialah Sungai…", "Rajang", "Pahang", "Kinabatangan", "Perak"],
    ["Sungai terpanjang di Semenanjung Malaysia ialah Sungai…", "Pahang", "Perak", "Kelantan", "Klang"],
    ["Bahagian sungai berhampiran punca dipanggil…", "hulu", "hilir", "kuala", "muara"],
    ["Tempat sungai bertemu laut dipanggil…", "kuala (muara)", "hulu", "punca", "anak sungai"],
    ["Sungai kecil yang mengalir masuk ke sungai utama dipanggil…", "anak sungai", "kuala", "lembangan", "tasik"],
    ["Kawasan yang disaliri oleh sungai utama dan anak-anak sungainya dipanggil…", "lembangan saliran", "dataran", "tanjung", "lembah"],
    ["Tasik buatan manusia yang besar di Terengganu ialah Tasik…", "Kenyir", "Chini", "Bera", "Temenggor"],
    ["Tasik semula jadi di Pahang yang terkenal ialah Tasik…", "Chini", "Kenyir", "Temenggor", "Pedu"],
    ["Pola saliran yang menyerupai cabang pokok dipanggil pola…", "dendritik", "jejari", "selari", "trelis"]
  ]},
  { t: "Penduduk di Malaysia", q: [
    ["Kepadatan penduduk dikira dengan…", "bilangan penduduk ÷ keluasan kawasan", "keluasan ÷ penduduk", "penduduk × keluasan", "penduduk + keluasan"],
    ["Unit kepadatan penduduk ialah…", "orang per km²", "km", "orang", "km²"],
    ["Kawasan yang paling padat penduduk di Semenanjung Malaysia ialah di…", "pantai barat", "pantai timur", "tanah tinggi tengah", "hutan simpan"],
    ["Antara faktor yang menarik penduduk ke pantai barat ialah…", "peluang pekerjaan dan kemudahan", "hutan tebal", "kawasan bergunung", "tiada jalan raya"],
    ["Kawasan yang jarang penduduk biasanya ialah kawasan…", "bergunung dan berhutan tebal", "bandar", "pelabuhan", "dataran subur"],
    ["Penghijrahan dari luar bandar ke bandar dipanggil migrasi…", "desa–bandar", "bandar–desa", "antarabangsa", "bandar–bandar"],
    ["Bancian penduduk di Malaysia biasanya dijalankan setiap…", "10 tahun", "1 tahun", "5 tahun", "20 tahun"]
  ]},
  { t: "Petempatan di Malaysia", q: [
    ["Petempatan yang rumah-rumahnya tersusun memanjang di sepanjang jalan atau sungai dipanggil petempatan…", "berjajar", "berkelompok", "berselerak", "terancang"],
    ["Petempatan yang rumah-rumahnya berkumpul rapat di satu kawasan dipanggil petempatan…", "berkelompok", "berjajar", "berselerak", "linear"],
    ["Petempatan yang rumah-rumahnya jauh antara satu sama lain dipanggil petempatan…", "berselerak", "berkelompok", "berjajar", "padat"],
    ["Putrajaya berfungsi sebagai pusat…", "pentadbiran kerajaan persekutuan", "perlombongan", "perikanan", "pelancongan pantai"],
    ["Contoh bandar pelabuhan utama di Malaysia ialah…", "Pelabuhan Klang", "Cameron Highlands", "Genting Highlands", "Putrajaya"],
    ["Bandar yang terkenal sebagai pusat pelancongan tanah tinggi ialah…", "Cameron Highlands", "Pelabuhan Klang", "Kuantan", "Putrajaya"],
    ["Ciri petempatan bandar ialah…", "penduduk padat dan kegiatan ekonomi bukan pertanian", "penduduk jarang", "tiada kemudahan", "kegiatan pertanian sahaja"]
  ]},
  { t: "Bentuk Muka Bumi dan Saliran di Asia Tenggara", q: [
    ["Sungai terpanjang di Asia Tenggara ialah Sungai…", "Mekong", "Rajang", "Chao Phraya", "Irrawaddy"],
    ["Sungai Mekong mengalir melalui beberapa negara termasuk Laos, Kemboja dan…", "Vietnam", "Malaysia", "Singapura", "Filipina"],
    ["Negara kepulauan terbesar di Asia Tenggara ialah…", "Indonesia", "Filipina", "Malaysia", "Thailand"],
    ["Banyak gunung berapi di Indonesia dan Filipina kerana terletak dalam…", "Lingkaran Api Pasifik", "Khatulistiwa", "Gurun Sahara", "Kutub Selatan"],
    ["Sungai utama yang mengalir melalui Bangkok ialah Sungai…", "Chao Phraya", "Mekong", "Irrawaddy", "Merah"],
    ["Sungai utama di Myanmar ialah Sungai…", "Irrawaddy", "Mekong", "Chao Phraya", "Rajang"],
    ["Negara Asia Tenggara yang tidak mempunyai pantai (terkurung daratan) ialah…", "Laos", "Kemboja", "Vietnam", "Thailand"]
  ]},
  { t: "Penduduk dan Petempatan di Asia Tenggara", q: [
    ["Negara yang mempunyai penduduk paling ramai di Asia Tenggara ialah…", "Indonesia", "Filipina", "Vietnam", "Malaysia"],
    ["Negara yang paling padat penduduk di Asia Tenggara ialah…", "Singapura", "Indonesia", "Laos", "Brunei"],
    ["Ibu negara Thailand ialah…", "Bangkok", "Hanoi", "Manila", "Yangon"],
    ["Ibu negara Filipina ialah…", "Manila", "Jakarta", "Bangkok", "Phnom Penh"],
    ["Ibu negara Vietnam ialah…", "Hanoi", "Ho Chi Minh", "Vientiane", "Bangkok"],
    ["Ibu negara Kemboja ialah…", "Phnom Penh", "Vientiane", "Hanoi", "Yangon"],
    ["Ibu negara Laos ialah…", "Vientiane", "Phnom Penh", "Bangkok", "Manila"],
    ["Ibu negara Brunei ialah…", "Bandar Seri Begawan", "Kuching", "Kota Kinabalu", "Miri"]
  ]},
  { t: "Sumber Air", q: [
    ["Contoh sumber air permukaan ialah…", "sungai, tasik dan kolam takungan", "air bawah tanah", "awan", "salji gunung"],
    ["Air yang tersimpan di bawah permukaan tanah dipanggil…", "air bawah tanah", "air permukaan", "air laut", "air hujan"],
    ["Empangan dibina untuk…", "menakung air bagi bekalan domestik dan elektrik", "mencemarkan sungai", "menghalang hujan", "membina jalan"],
    ["Antara punca pencemaran sungai ialah…", "pembuangan sampah dan sisa kilang", "menanam pokok", "hujan", "ikan"],
    ["Cara menjimatkan air di rumah ialah…", "menutup paip semasa memberus gigi", "membiarkan paip terbuka", "mencuci kereta setiap hari", "mandi lama-lama"],
    ["Sistem penuaian air hujan membolehkan kita…", "menggunakan semula air hujan", "mengeringkan sungai", "mencemarkan air", "menghalang banjir sepenuhnya"],
    ["Kawasan hutan yang dikekalkan untuk melindungi sumber air dipanggil kawasan…", "tadahan air", "perindustrian", "perumahan", "pelupusan sampah"]
  ]},
  { t: "Sisa Domestik", q: [
    ["Sisa domestik ialah sisa yang dihasilkan dari…", "rumah", "kilang besar sahaja", "lombong", "hospital sahaja"],
    ["Contoh sisa domestik ialah…", "sisa makanan, plastik dan kertas", "sisa radioaktif", "sisa lombong", "asap kilang"],
    ["Sisa makanan boleh dijadikan…", "baja kompos", "plastik", "kaca", "logam"],
    ["Amalan 3R ialah Reduce, Reuse dan…", "Recycle", "Repair", "Refuse", "Remove"],
    ["\"Reduce\" bermaksud…", "mengurangkan penggunaan", "kitar semula", "guna semula", "membuang"],
    ["Tempat sisa dibuang dan ditanam secara terkawal dipanggil…", "tapak pelupusan sanitari", "taman", "kilang", "empangan"],
    ["Membakar sampah secara terbuka boleh menyebabkan…", "pencemaran udara", "udara bersih", "hujan", "tanah subur"],
    ["Salah satu cara mengurangkan sisa plastik ialah…", "membawa beg sendiri ketika membeli-belah", "menggunakan banyak beg plastik", "membuang plastik ke sungai", "membakar plastik"]
  ]}
],

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Kata Nama dan Kata Ganti Nama", q: [
    ["Yang manakah kata nama terbitan berapitan pe-…-an?", "pendidikan", "didik", "mendidik", "pendidik"],
    ["Yang manakah kata nama terbitan berapitan ke-…-an?", "kebersihan", "bersih", "membersihkan", "pembersih"],
    ["Yang manakah kata nama terbitan berakhiran -an?", "tulisan", "menulis", "penulis", "ditulis"],
    ["Kata ganti nama diri orang pertama jamak ialah…", "kami / kita", "kamu", "mereka", "beliau"],
    ["Kata ganti nama \"beta\" digunakan oleh…", "raja", "guru", "murid", "doktor"],
    ["Kata ganti nama \"patik\" digunakan apabila rakyat bercakap dengan…", "raja", "kawan", "adik", "jiran"],
    ["Kata ganti nama \"baginda\" merujuk kepada…", "raja atau nabi", "kawan rapat", "haiwan", "benda"],
    ["Kata ganti nama yang sesuai untuk orang yang dihormati (diri ketiga) ialah…", "beliau", "dia", "ia", "mereka"],
    ["Penjodoh bilangan yang sesuai: \"sebuah ___\"", "kapal", "kucing", "baju", "bunga"],
    ["Penjodoh bilangan yang sesuai: \"sekuntum ___\"", "bunga", "buku", "batu", "rumah"],
    ["Penjodoh bilangan yang sesuai: \"sepucuk ___\"", "surat", "pisang", "kain", "lembu"]
  ]},
  { t: "Imbuhan", q: [
    ["Imbuhan \"meN-\" + \"tolong\" menjadi…", "menolong", "mentolong", "metolong", "menyolong"],
    ["Imbuhan \"meN-\" + \"sapu\" menjadi…", "menyapu", "mensapu", "mesapu", "mengsapu"],
    ["Imbuhan \"meN-\" + \"kacau\" menjadi…", "mengacau", "mekacau", "mengkacau", "menkacau"],
    ["Imbuhan \"meN-\" + \"bina\" menjadi…", "membina", "mebina", "menbina", "mengbina"],
    ["Imbuhan \"meN-\" + \"cat\" menjadi…", "mengecat", "mecat", "mencat", "menyecat"],
    ["Imbuhan \"peN-\" + \"curi\" menjadi…", "pencuri", "pecuri", "penyuri", "pengcuri"],
    ["Imbuhan \"ber-\" + \"ajar\" menjadi…", "belajar", "berajar", "bajar", "melajar"],
    ["Imbuhan \"memper-…-kan\" + \"kenal\" menjadi…", "memperkenalkan", "mengenalkan", "perkenalkan", "memperkenal"],
    ["Imbuhan sisipan \"-el-\" + \"tunjuk\" menjadi…", "telunjuk", "petunjuk", "menunjuk", "tunjukan"],
    ["Imbuhan sisipan \"-em-\" + \"getar\" menjadi…", "gemetar", "bergetar", "menggetar", "getaran"],
    ["Imbuhan sisipan \"-er-\" + \"gigi\" menjadi…", "gerigi", "bergigi", "gigian", "menggigi"]
  ]},
  { t: "Kata Kerja dan Kata Adjektif", q: [
    ["Kata kerja transitif memerlukan…", "objek", "subjek sahaja", "kata seru", "kata tanya"],
    ["Yang manakah kata kerja tak transitif?", "menangis", "membeli", "menulis", "menolak"],
    ["Ayat yang menggunakan kata kerja pasif ialah…", "Rumah itu dicat oleh Pak Ali.", "Pak Ali mengecat rumah itu.", "Pak Ali sedang mengecat.", "Pak Ali suka mengecat."],
    ["Kata kerja pasif diri pertama yang betul ialah…", "Kerja itu saya siapkan.", "Kerja itu disiapkan saya.", "Kerja itu disiapkan oleh saya.", "Kerja itu menyiapkan saya."],
    ["Yang manakah kata adjektif perasaan?", "rindu", "tinggi", "merah", "jauh"],
    ["Yang manakah kata adjektif sifatan?", "berani", "sejuk", "bulat", "lama"],
    ["Yang manakah kata adjektif waktu?", "lewat", "wangi", "kurus", "biru"],
    ["Kata adjektif dalam ayat \"Bunga itu sangat harum.\" ialah…", "harum", "bunga", "sangat", "itu"],
    ["Darjah penghabisan bagi \"cantik\" ialah…", "tercantik", "lebih cantik", "secantik", "cantik sekali-sekala"],
    ["Imbuhan \"se-\" dalam \"setinggi\" menunjukkan darjah…", "kesamaan", "penghabisan", "perbandingan lebih", "biasa"]
  ]},
  { t: "Kata Tugas", q: [
    ["Kata sendi nama \"di\" digunakan di hadapan kata nama yang menunjukkan…", "tempat", "masa sahaja", "manusia", "haiwan"],
    ["Kata sendi nama \"kepada\" digunakan untuk…", "manusia, haiwan dan unsur mujarad", "tempat sahaja", "masa sahaja", "arah sahaja"],
    ["\"daripada\" digunakan untuk menunjukkan…", "asal kejadian atau perbandingan", "tempat", "arah ke", "masa"],
    ["Kami bertolak ___ Kuala Lumpur pukul 8 pagi.", "dari", "daripada", "kepada", "pada"],
    ["Baju ini diperbuat ___ kapas.", "daripada", "dari", "kepada", "di"],
    ["Kata hubung pancangan relatif ialah…", "yang", "dan", "tetapi", "atau"],
    ["Kata hubung gabungan ialah…", "dan", "yang", "bahawa", "kerana"],
    ["Kata hubung pancangan komplemen ialah…", "bahawa", "dan", "tetapi", "atau"],
    ["Kata seru yang menunjukkan perasaan kagum ialah…", "Wah", "Aduh", "Cis", "Amboi"],
    ["Kata penegas \"-lah\" dalam \"Dialah juara\" berfungsi untuk…", "menegaskan", "bertanya", "menafikan", "menyeru"],
    ["Kata nafi yang digunakan sebelum kata nama ialah…", "bukan", "tidak", "jangan", "usah"]
  ]},
  { t: "Ayat", q: [
    ["Ayat terdiri daripada dua bahagian iaitu subjek dan…", "predikat", "objek", "keterangan", "penerang"],
    ["Dalam ayat \"Adik sedang tidur.\", subjeknya ialah…", "adik", "sedang", "tidur", "sedang tidur"],
    ["Susunan ayat biasa ialah…", "subjek + predikat", "predikat + subjek", "objek + subjek", "keterangan sahaja"],
    ["Ayat susunan songsang bagi \"Pemandangan itu sangat indah.\" ialah…", "Sangat indah pemandangan itu.", "Pemandangan sangat itu indah.", "Indah pemandangan sangat itu.", "Itu pemandangan indah sangat."],
    ["Ayat \"Jangan buang sampah di sini.\" ialah ayat…", "perintah (larangan)", "tanya", "penyata", "seruan"],
    ["Ayat \"Silakan masuk.\" ialah ayat…", "perintah (silaan)", "tanya", "penyata", "seruan"],
    ["Ayat majmuk gabungan dibentuk menggunakan kata hubung seperti…", "dan, tetapi, atau", "yang", "bahawa", "supaya"],
    ["Ayat majmuk pancangan relatif menggunakan kata hubung…", "yang", "dan", "tetapi", "atau"],
    ["Ayat yang betul ialah…", "Semua murid hadir ke majlis itu.", "Semua murid-murid hadir ke majlis itu.", "Para murid-murid hadir.", "Banyak murid-murid hadir."],
    ["Kesalahan dalam ayat \"Mereka-mereka pergi ke pasar.\" ialah…", "kata ganti nama tidak boleh digandakan", "tiada kesalahan", "salah tanda baca", "salah ejaan pasar"]
  ]},
  { t: "Peribahasa dan Simpulan Bahasa", q: [
    ["Simpulan bahasa \"berat sebelah\" bermaksud…", "tidak adil", "berat badan", "malas", "sakit"],
    ["Simpulan bahasa \"cakar ayam\" bermaksud…", "tulisan yang buruk", "makanan ayam", "suka bergaduh", "jalan berlubang"],
    ["Simpulan bahasa \"kepala angin\" bermaksud…", "perangai yang tidak menentu", "pening kepala", "suka angin", "bijak"],
    ["Simpulan bahasa \"ringan tulang\" bermaksud…", "rajin", "kurus", "malas", "lemah"],
    ["Simpulan bahasa \"tangkai jering\" bermaksud…", "kedekut", "pemurah", "rajin", "pandai"],
    ["Peribahasa \"bagai aur dengan tebing\" bermaksud…", "saling membantu", "selalu bergaduh", "tinggal di tebing", "suka berkebun"],
    ["Peribahasa \"seperti katak di bawah tempurung\" bermaksud…", "berpengetahuan sempit", "pandai", "suka bersembunyi", "takut"],
    ["Peribahasa \"melentur buluh biarlah dari rebungnya\" bermaksud…", "mendidik anak sejak kecil", "menanam buluh", "memasak rebung", "membuat kraf"],
    ["Peribahasa \"air yang tenang jangan disangka tiada buaya\" bermaksud…", "orang pendiam jangan disangka tidak berilmu atau berani", "sungai yang bahaya", "jangan mandi di sungai", "buaya suka air tenang"],
    ["Peribahasa \"bagai menatang minyak yang penuh\" bermaksud…", "menjaga dengan penuh kasih sayang", "membawa minyak", "membazir minyak", "berjalan perlahan"],
    ["Peribahasa \"di mana ada kemahuan, di situ ada jalan\" bermaksud…", "jika berusaha pasti ada cara untuk berjaya", "jalan yang jauh", "sesat jalan", "malas berusaha"]
  ]},
  { t: "Ejaan dan Kosa Kata", q: [
    ["Ejaan yang betul ialah…", "kerjasama", "kerja sama", "kerjesama", "kerja-sama"],
    ["Ejaan yang betul ialah…", "tanggungjawab", "tanggung jawab", "tangungjawab", "tanggong jawab"],
    ["Ejaan yang betul ialah…", "antarabangsa", "antara bangsa", "antara-bangsa", "antarbangsa"],
    ["Ejaan yang betul ialah…", "beritahu", "beri tahu", "bertahu", "beritau"],
    ["Ejaan yang betul ialah…", "sukarelawan", "suka relawan", "sukerelawan", "sukarela wan"],
    ["Ejaan yang betul ialah…", "matlamat", "matalamat", "mat lamat", "matlamad"],
    ["Maksud \"bersahaja\" ialah…", "tidak dibuat-buat", "sombong", "marah", "terburu-buru"],
    ["Maksud \"gigih\" ialah…", "tekun dan bersungguh-sungguh", "malas", "lemah", "takut"],
    ["Maksud \"lazim\" ialah…", "biasa", "pelik", "jarang", "baru"],
    ["Antonim bagi \"kusut\" ialah…", "kemas", "serabut", "kotor", "rosak"],
    ["Sinonim bagi \"cerdik\" ialah…", "pintar", "bodoh", "lembap", "malas"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["A person who studies the stars is an…", "astronomer", "astronaut", "archaeologist", "architect"],
    ["A person who studies ancient remains is an…", "archaeologist", "astronomer", "accountant", "athlete"],
    ["A word that means \"very small\" is…", "tiny", "huge", "massive", "vast"],
    ["A word that means \"to look at carefully\" is…", "examine", "ignore", "skip", "forget"],
    ["The opposite of \"permanent\" is…", "temporary", "lasting", "stable", "fixed"],
    ["The opposite of \"ancient\" is…", "modern", "old", "historic", "ruined"],
    ["A synonym of \"courageous\" is…", "brave", "afraid", "lazy", "careless"],
    ["A synonym of \"rapid\" is…", "fast", "slow", "late", "weak"],
    ["Which word is a noun?", "happiness", "happy", "happily", "happier"],
    ["Which word is an adverb?", "carefully", "careful", "care", "careless"]
  ]},
  { t: "Tenses", q: [
    ["She ___ to school every day.", "walks", "walk", "walking", "walked to"],
    ["They ___ football when it started to rain.", "were playing", "are playing", "play", "plays"],
    ["I ___ my homework already.", "have finished", "has finished", "finishing", "finish"],
    ["He ___ in Penang since 2015.", "has lived", "have lived", "lives since", "is living since"],
    ["Tomorrow, we ___ the science museum.", "will visit", "visited", "visits", "have visited"],
    ["By the time we arrived, the movie ___.", "had started", "has started", "starts", "will start"],
    ["The past tense of \"bring\" is…", "brought", "bringed", "brang", "bought"],
    ["The past tense of \"catch\" is…", "caught", "catched", "cought", "catches"],
    ["The past participle of \"write\" is…", "written", "wrote", "writed", "writing"],
    ["Which sentence is in the present continuous tense?", "The baby is sleeping.", "The baby sleeps.", "The baby slept.", "The baby has slept."]
  ]},
  { t: "Modal Verbs", q: [
    ["You ___ wear a helmet when riding a motorcycle. (rule)", "must", "might", "could", "would"],
    ["___ I borrow your pen, please?", "May", "Must", "Should", "Would have"],
    ["It ___ rain later. Bring an umbrella. (possibility)", "might", "must", "shall", "has to"],
    ["You ___ eat more vegetables. (advice)", "should", "mustn't", "might", "can't"],
    ["She ___ speak three languages. (ability)", "can", "must", "should", "may"],
    ["You ___ smoke in the hospital. (prohibition)", "mustn't", "needn't", "might", "could"],
    ["You ___ bring food. Lunch is provided. (not necessary)", "needn't", "mustn't", "can't", "shouldn't have"]
  ]},
  { t: "Articles and Quantifiers", q: [
    ["She is ___ honest girl.", "an", "a", "the", "some"],
    ["He wants to be ___ engineer.", "an", "a", "the", "any"],
    ["I saw ___ unicorn in the story book.", "a", "an", "some", "any"],
    ["___ sun rises in the east.", "The", "A", "An", "Some"],
    ["There isn't ___ milk left.", "any", "some", "many", "a"],
    ["How ___ water do you drink a day?", "much", "many", "few", "a few"],
    ["How ___ students are in the hall?", "many", "much", "little", "a little"],
    ["I have ___ friends in this school, so I am not lonely.", "a few", "a little", "much", "little"],
    ["There is ___ sugar in the jar. We need to buy more.", "little", "few", "many", "a few"]
  ]},
  { t: "Prepositions", q: [
    ["She is good ___ mathematics.", "at", "in", "on", "with"],
    ["He is afraid ___ the dark.", "of", "from", "with", "at"],
    ["We arrived ___ the airport early.", "at", "on", "to", "into"],
    ["The book is ___ the shelf.", "on", "at", "into", "of"],
    ["I have lived here ___ five years.", "for", "since", "from", "at"],
    ["The concert starts ___ 8 p.m.", "at", "on", "in", "by"],
    ["My birthday is ___ 12 June.", "on", "in", "at", "by"],
    ["He jumped ___ the pool.", "into", "on", "at", "of"],
    ["She is interested ___ painting.", "in", "on", "at", "for"]
  ]},
  { t: "Question Tags and Sentences", q: [
    ["You are a student, ___?", "aren't you", "isn't it", "don't you", "are you"],
    ["She can't swim, ___?", "can she", "can't she", "does she", "isn't she"],
    ["They went home early, ___?", "didn't they", "did they", "weren't they", "don't they"],
    ["He doesn't like durian, ___?", "does he", "doesn't he", "is he", "did he"],
    ["Let's go to the library, ___?", "shall we", "will we", "don't we", "aren't we"],
    ["Which sentence is correct?", "Neither Ali nor Siti is absent.", "Neither Ali nor Siti are absent.", "Neither Ali or Siti is absent.", "Neither Ali and Siti is absent."],
    ["Which sentence is correct?", "Each of the students has a book.", "Each of the students have a book.", "Each students has a book.", "Each of student have a book."],
    ["Which sentence is in the passive voice?", "The letter was posted by Ravi.", "Ravi posted the letter.", "Ravi posts letters.", "Ravi is posting the letter."]
  ]},
  { t: "Idioms and Phrasal Verbs", q: [
    ["\"Break the ice\" means…", "start a conversation in an awkward situation", "break something cold", "make ice", "be very cold"],
    ["\"Under the weather\" means…", "feeling unwell", "outside in the rain", "very happy", "very busy"],
    ["\"Once in a blue moon\" means…", "very rarely", "every month", "at night", "always"],
    ["\"Hit the books\" means…", "study hard", "throw books", "buy books", "read comics"],
    ["\"Give up\" means…", "stop trying", "give a gift", "stand up", "go upstairs"],
    ["\"Look forward to\" means…", "be excited about something in the future", "look in front", "forget", "be afraid of"],
    ["\"Put off\" the meeting means…", "postpone it", "start it", "cancel forever", "attend it"],
    ["\"Run out of\" sugar means…", "have no more sugar", "run with sugar", "buy sugar", "spill sugar"],
    ["\"Carry on\" means…", "continue", "stop", "carry a bag", "go back"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM (ikut bidang) ======================= */
pi: [
  { t: "Tilawah dan Tajwid", q: [
    ["Huruf izhar halqi ada ___ huruf.", "6", "4", "15", "2"],
    ["Huruf idgham maal ghunnah ialah…", "ي ن م و", "ل ر", "ب", "ء ه ع ح غ خ"],
    ["Huruf idgham bila ghunnah ialah…", "ل ر", "ي ن م و", "ب", "ق ط ب ج د"],
    ["Hukum nun mati atau tanwin bertemu huruf ب ialah…", "iqlab", "izhar", "idgham", "ikhfa'"],
    ["Bilangan huruf ikhfa' hakiki ialah…", "15", "6", "4", "2"],
    ["Hukum mim mati bertemu huruf ب ialah…", "ikhfa' syafawi", "izhar syafawi", "idgham mithlain", "iqlab"],
    ["Hukum mim mati bertemu huruf م ialah…", "idgham mithlain", "ikhfa' syafawi", "izhar syafawi", "izhar halqi"],
    ["Alif lam yang tidak dibaca dan huruf selepasnya bersabdu dipanggil alif lam…", "syamsiah", "qamariah", "halqi", "syafawi"],
    ["Alif lam yang dibaca dengan jelas dipanggil alif lam…", "qamariah", "syamsiah", "ikhfa'", "idgham"],
    ["Mad asli (tabi'i) dibaca sepanjang…", "2 harakat", "4 harakat", "6 harakat", "1 harakat"],
    ["Huruf qalqalah ialah…", "ق ط ب ج د", "ي ن م و", "ل ر", "ب sahaja"]
  ]},
  { t: "Hadis", q: [
    ["Hadis \"Sesungguhnya setiap amalan bergantung kepada niat\" diriwayatkan daripada…", "Umar al-Khattab r.a.", "Abu Bakar r.a.", "Ali r.a.", "Aisyah r.a."],
    ["Hadis tentang niat menunjukkan bahawa niat…", "menentukan nilai sesuatu amalan", "tidak penting", "hanya untuk solat", "boleh diabaikan"],
    ["Hadis ialah sumber hukum Islam yang ke-…", "2", "1", "3", "4"],
    ["Perkataan, perbuatan dan pengakuan Nabi SAW dipanggil…", "sunnah (hadis)", "ijmak", "qiyas", "fatwa"],
    ["Hadis yang diriwayatkan oleh Imam Bukhari dan Imam Muslim dipanggil…", "muttafaq 'alaih", "hadis daif", "hadis maudhu'", "hadis qudsi"],
    ["Contoh mengamalkan hadis tentang niat ialah…", "belajar dengan ikhlas kerana Allah", "belajar untuk menunjuk-nunjuk", "menipu dalam peperiksaan", "malas belajar"]
  ]},
  { t: "Akidah", q: [
    ["Rukun Iman ada…", "6 perkara", "5 perkara", "4 perkara", "13 perkara"],
    ["Rukun Islam ada…", "5 perkara", "6 perkara", "4 perkara", "20 perkara"],
    ["Ihsan bermaksud…", "beribadah seolah-olah melihat Allah, dan jika tidak, Allah melihat kita", "bersedekah sahaja", "berpuasa sunat", "solat berjemaah"],
    ["Perbuatan menyekutukan Allah dipanggil…", "syirik", "tauhid", "ikhlas", "tawakal"],
    ["Tauhid Rububiyyah bermaksud mengesakan Allah sebagai…", "Pencipta dan Pentadbir alam", "satu-satunya yang disembah", "yang mempunyai nama dan sifat", "pemberi hujan sahaja"],
    ["Tauhid Uluhiyyah bermaksud mengesakan Allah dalam…", "ibadah", "penciptaan", "nama sahaja", "rezeki sahaja"],
    ["Sifat wajib bagi Allah ada…", "20", "13", "99", "4"],
    ["Sifat Wujud bermaksud Allah…", "ada", "kekal", "Esa", "berkuasa"],
    ["Mempercayai tangkal boleh memberi perlindungan boleh membawa kepada…", "syirik", "pahala", "tawakal", "syukur"],
    ["Beriman kepada qada' dan qadar mendorong kita untuk…", "berusaha dan bertawakal", "berputus asa", "tidak berusaha", "menyalahkan takdir"]
  ]},
  { t: "Ibadah (Taharah)", q: [
    ["Taharah bermaksud…", "bersuci", "berpuasa", "bersedekah", "berdoa"],
    ["Air mutlak ialah air yang…", "suci dan menyucikan", "suci tetapi tidak menyucikan", "bernajis", "makruh digunakan"],
    ["Air musta'mal ialah air yang…", "telah digunakan untuk bersuci (sedikit)", "air hujan", "air sungai", "air laut"],
    ["Najis anjing dan babi termasuk dalam najis…", "mughallazah (berat)", "mukhaffafah (ringan)", "mutawassitah (sederhana)", "ma'fu"],
    ["Najis mukhaffafah ialah air kencing bayi lelaki yang berumur bawah 2 tahun dan…", "hanya minum susu ibu", "sudah makan nasi", "berumur 5 tahun", "minum susu formula dan makan bubur"],
    ["Najis mughallazah dibasuh sebanyak ___ kali, salah satunya dengan air tanah.", "7", "3", "1", "5"],
    ["Najis seperti darah dan air kencing orang dewasa termasuk najis…", "mutawassitah (sederhana)", "mughallazah", "mukhaffafah", "tidak najis"],
    ["Hadas kecil boleh diangkat dengan…", "berwuduk", "mandi wajib sahaja", "bersugi", "memotong kuku"],
    ["Hadas besar boleh diangkat dengan…", "mandi wajib", "berwuduk sahaja", "membaca doa", "beristinjak"],
    ["Tayamum dilakukan apabila…", "tiada air atau tidak boleh menggunakan air", "malas berwuduk", "air terlalu sejuk", "tergesa-gesa"]
  ]},
  { t: "Sirah", q: [
    ["Nabi Muhammad SAW dilahirkan di Makkah pada Tahun…", "Gajah", "Hijrah", "Dukacita", "Kemenangan"],
    ["Peringkat awal dakwah Nabi dilakukan secara…", "sembunyi-sembunyi", "terang-terangan di pasar", "melalui surat", "di Madinah"],
    ["Dakwah secara sembunyi-sembunyi berlangsung selama lebih kurang…", "3 tahun", "10 tahun", "1 bulan", "23 tahun"],
    ["Rumah sahabat yang dijadikan pusat dakwah awal ialah rumah…", "al-Arqam bin Abi al-Arqam", "Abu Bakar", "Abu Talib", "Umar"],
    ["Umat Islam pernah berhijrah ke ___ untuk menyelamatkan diri daripada penindasan Quraisy.", "Habsyah", "Taif", "Syam", "Yaman"],
    ["Tahun kewafatan Siti Khadijah dan Abu Talib dikenali sebagai Tahun…", "Dukacita", "Gajah", "Kemenangan", "Perpaduan"],
    ["Peristiwa Israk dan Mikraj berlaku sebelum peristiwa…", "Hijrah ke Madinah", "kelahiran Nabi", "Perang Badar", "Fathu Makkah"],
    ["Sahabat yang menemani Nabi ketika berhijrah ke Madinah ialah…", "Abu Bakar as-Siddiq", "Umar al-Khattab", "Ali bin Abi Talib", "Uthman bin Affan"]
  ]},
  { t: "Adab dan Akhlak", q: [
    ["Antara adab terhadap ibu bapa ialah…", "bercakap dengan lemah lembut", "meninggikan suara", "membantah", "mengabaikan mereka"],
    ["Antara adab terhadap guru ialah…", "menghormati dan mendengar nasihatnya", "mengejek guru", "ponteng kelas", "bercakap ketika guru mengajar"],
    ["Sifat amanah bermaksud…", "boleh dipercayai dan menunaikan tanggungjawab", "suka menipu", "malas", "sombong"],
    ["Sifat sabar ialah…", "menahan diri ketika diuji", "cepat marah", "putus asa", "dendam"],
    ["Sikap yang dilarang dalam Islam ialah…", "mengumpat", "bersedekah", "menolong orang", "berkata benar"],
    ["Islam menggalakkan kita bersikap ___ dalam menggunakan media sosial.", "bertanggungjawab dan tidak menyebar fitnah", "bebas memaki", "menyebar berita palsu", "membuli"],
    ["Ucapan apabila mendengar berita kematian ialah…", "Inna lillahi wa inna ilaihi raji'un", "Alhamdulillah", "Masya-Allah", "Subhanallah"]
  ]},
  { t: "Jawi", q: [
    ["ڤلاجر|Perkataan Jawi ini dibaca…", "pelajar", "pelajaran", "belajar", "pengajar"],
    ["سکوله منڠه|Perkataan Jawi ini dibaca…", "sekolah menengah", "sekolah rendah", "sekolah agama", "sekolah kebangsaan"],
    ["ݢورو|Perkataan Jawi ini dibaca…", "guru", "guri", "garu", "kuru"],
    ["Ejaan Jawi bagi \"pelajar\" ialah…", "ڤلاجر", "ڤلاجار", "ڤلجر", "فلاجر"],
    ["Huruf Jawi ڤ mewakili bunyi…", "p", "f", "v", "q"],
    ["Huruf Jawi ݢ mewakili bunyi…", "g", "k", "ng", "q"],
    ["Huruf Jawi ۏ mewakili bunyi…", "v", "w", "f", "b"],
    ["Tulisan Jawi ditulis dari…", "kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"]
  ]}
],

/* ======================= BAHASA ARAB (tema dan tatabahasa asas) ======================= */
ba: [
  { t: "Perkenalan", q: [
    ["مَا اسْمُكَ؟|Soalan ini bermaksud…", "Siapa nama kamu?", "Apa khabar?", "Dari mana kamu?", "Berapa umur kamu?"],
    ["مِنْ أَيْنَ أَنْتَ؟|Soalan ini bermaksud…", "Dari mana kamu?", "Siapa kamu?", "Ke mana kamu?", "Bila kamu datang?"],
    ["أَنَا مِنْ مَالِيزِيَا|Ayat ini bermaksud…", "Saya dari Malaysia", "Saya ke Malaysia", "Saya suka Malaysia", "Ini Malaysia"],
    ["كَمْ عُمْرُكَ؟|Soalan ini bermaksud…", "Berapa umur kamu?", "Siapa nama kamu?", "Di mana rumah kamu?", "Apa hobi kamu?"],
    ["أَنَا طَالِبٌ فِي الْمَدْرَسَةِ الثَّانَوِيَّةِ|Ayat ini bermaksud…", "Saya murid di sekolah menengah", "Saya guru di sekolah", "Saya pergi ke sekolah", "Ini sekolah rendah"],
    ["تَشَرَّفْتُ بِمَعْرِفَتِكَ|Ungkapan ini bermaksud…", "Saya berbesar hati berkenalan dengan kamu", "Selamat tinggal", "Terima kasih", "Maafkan saya"]
  ]},
  { t: "Kata Ganti Nama (الضمائر)", q: [
    ["أَنَا|Kata ganti ini bermaksud…", "saya", "kamu", "dia", "kami"],
    ["أَنْتَ|Kata ganti ini bermaksud…", "kamu (lelaki)", "kamu (perempuan)", "dia (lelaki)", "saya"],
    ["أَنْتِ|Kata ganti ini bermaksud…", "kamu (perempuan)", "kamu (lelaki)", "dia (perempuan)", "kami"],
    ["هُوَ|Kata ganti ini bermaksud…", "dia (lelaki)", "dia (perempuan)", "mereka", "saya"],
    ["هِيَ|Kata ganti ini bermaksud…", "dia (perempuan)", "dia (lelaki)", "kamu", "kami"],
    ["نَحْنُ|Kata ganti ini bermaksud…", "kami / kita", "mereka", "kamu semua", "saya"],
    ["هُمْ|Kata ganti ini bermaksud…", "mereka (lelaki)", "kami", "dia", "kamu"],
    ["Kata ganti yang sesuai untuk \"Ahmad\" ialah…", "هُوَ", "هِيَ", "أَنَا", "نَحْنُ"],
    ["Kata ganti yang sesuai untuk \"Fatimah\" ialah…", "هِيَ", "هُوَ", "أَنْتَ", "هُمْ"]
  ]},
  { t: "Kata Tunjuk dan Ayat Namaan", q: [
    ["هَذَا|Kata tunjuk ini bermaksud…", "ini (lelaki)", "ini (perempuan)", "itu (lelaki)", "itu (perempuan)"],
    ["هَذِهِ|Kata tunjuk ini bermaksud…", "ini (perempuan)", "ini (lelaki)", "itu (lelaki)", "itu (perempuan)"],
    ["ذَلِكَ|Kata tunjuk ini bermaksud…", "itu (lelaki)", "ini (lelaki)", "itu (perempuan)", "ini (perempuan)"],
    ["تِلْكَ|Kata tunjuk ini bermaksud…", "itu (perempuan)", "itu (lelaki)", "ini (perempuan)", "ini (lelaki)"],
    ["Ayat namaan (الجملة الاسمية) terdiri daripada mubtada' dan…", "khabar", "fi'il", "fa'il", "maf'ul"],
    ["Dalam ayat \"الْبَيْتُ كَبِيرٌ\", mubtada' ialah…", "الْبَيْتُ", "كَبِيرٌ", "tiada", "kedua-duanya"],
    ["الْبَيْتُ كَبِيرٌ|Ayat ini bermaksud…", "Rumah itu besar", "Rumah itu kecil", "Ini rumah", "Rumah saya baru"],
    ["هَذِهِ مَدْرَسَةٌ جَمِيلَةٌ|Ayat ini bermaksud…", "Ini sekolah yang cantik", "Itu sekolah yang besar", "Ini rumah yang cantik", "Sekolah ini baru"]
  ]},
  { t: "Bilangan (Mufrad, Muthanna, Jamak)", q: [
    ["كِتَابٌ|Bentuk ini ialah…", "mufrad (tunggal)", "muthanna (dua)", "jamak (ramai)", "fi'il"],
    ["كِتَابَانِ|Bentuk ini bermaksud…", "dua buah buku", "sebuah buku", "banyak buku", "buku besar"],
    ["كُتُبٌ|Bentuk ini bermaksud…", "banyak buku", "sebuah buku", "dua buah buku", "perpustakaan"],
    ["Bentuk muthanna bagi طَالِبٌ ialah…", "طَالِبَانِ", "طُلَّابٌ", "طَالِبَةٌ", "طَالِبُونَ"],
    ["Bentuk jamak bagi طَالِبٌ ialah…", "طُلَّابٌ", "طَالِبَانِ", "طَالِبَةٌ", "مَطْلُوبٌ"],
    ["مُعَلِّمُونَ|Bentuk ini bermaksud…", "guru-guru lelaki", "seorang guru", "dua orang guru", "guru perempuan"],
    ["مُعَلِّمَاتٌ|Bentuk ini bermaksud…", "guru-guru perempuan", "guru-guru lelaki", "seorang guru perempuan", "dua orang guru"]
  ]},
  { t: "Kata Sendi (حروف الجر)", q: [
    ["فِي|Kata sendi ini bermaksud…", "di dalam", "di atas", "dari", "ke"],
    ["عَلَى|Kata sendi ini bermaksud…", "di atas", "di dalam", "di bawah", "dengan"],
    ["مِنْ|Kata sendi ini bermaksud…", "dari / daripada", "ke", "di", "dengan"],
    ["إِلَى|Kata sendi ini bermaksud…", "ke", "dari", "di atas", "dengan"],
    ["الْقَلَمُ عَلَى الْمَكْتَبِ|Ayat ini bermaksud…", "Pen itu di atas meja", "Pen itu di dalam beg", "Pen itu di bawah meja", "Meja itu di atas pen"],
    ["ذَهَبْتُ إِلَى الْمَدْرَسَةِ|Ayat ini bermaksud…", "Saya telah pergi ke sekolah", "Saya pulang dari sekolah", "Saya di sekolah", "Sekolah saya besar"],
    ["Selepas huruf jar, isim biasanya berbaris…", "bawah (majrur)", "atas", "depan", "mati"]
  ]},
  { t: "Kata Kerja (الفعل)", q: [
    ["Fi'il madhi menunjukkan perbuatan yang…", "telah berlaku", "sedang berlaku", "akan berlaku", "perintah"],
    ["Fi'il mudhari' menunjukkan perbuatan yang…", "sedang atau akan berlaku", "telah berlaku", "perintah", "larangan"],
    ["كَتَبَ|Kata kerja ini bermaksud…", "dia (lelaki) telah menulis", "dia sedang menulis", "tulislah!", "penulis"],
    ["يَقْرَأُ|Kata kerja ini bermaksud…", "dia (lelaki) sedang/akan membaca", "dia telah membaca", "bacalah!", "pembaca"],
    ["اُكْتُبْ|Kata kerja ini ialah…", "fi'il amar (perintah): tulislah!", "fi'il madhi", "fi'il mudhari'", "isim"],
    ["ذَهَبَ أَحْمَدُ إِلَى السُّوقِ|Ayat ini bermaksud…", "Ahmad telah pergi ke pasar", "Ahmad sedang ke sekolah", "Ahmad pulang dari pasar", "Pasar Ahmad besar"],
    ["Ayat yang dimulakan dengan fi'il dipanggil…", "jumlah fi'liyyah", "jumlah ismiyyah", "mubtada'", "khabar"]
  ]}
]
};
})();
