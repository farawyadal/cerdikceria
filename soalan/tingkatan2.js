/* =========================================================
   TINGKATAN 2 — Cerdik Ceria (Sekolah Menengah, KSSM)
   Matematik, Sains, Sejarah & Geografi: bab ikut buku teks KSSM Tingkatan 2.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang.
   Bahasa Arab: ikut tema dan tatabahasa.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🌏|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tingkatan 2 ---------- */
const N = n => n < 0 ? "−" + (-n) : String(n);
const P = n => n < 0 ? "(" + N(n) + ")" : String(n);
function qi(text, ans, offs, exp) {
  const s = new Set(); let t = 0;
  while (s.size < 3 && t < 80) { t++; const v = ans + pick(offs) * (Math.random() < .5 ? -1 : 1); if (v !== ans) s.add(v); }
  let k = 1; while (s.size < 3) { s.add(ans + k * 7); k++; }
  return [text, N(ans), ...[...s].map(N), exp || ""];
}
const gcd = (a, b) => b ? gcd(Math.abs(b), Math.abs(a) % Math.abs(b)) : Math.abs(a);
function frac(n, d) { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; n /= g; d /= g; return d === 1 ? N(n) : `${N(n)}/${d}`; }
const sgn = (k, v) => (k < 0 ? " − " : " + ") + Math.abs(k) + v;        // " + 3x" / " − 3x"
const lin = (a, b, v = "x") => (a === 1 ? "" : a === -1 ? "−" : N(a)) + v + (b ? sgn(b, "") : "");
const TRIPLE = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15]];
// from() dengan pengisi: jika kurang 3 pilihan unik, jana lagi menggunakan more()
function fromF(text, right, pool, more, exp) {
  const set = new Set(pool.map(String).filter(x => x !== String(right)));
  let t = 0; while (set.size < 3 && t < 100) { t++; const v = String(more()); if (v !== String(right)) set.add(v); }
  return from(text, right, [...set], exp);
}
const nz = (a, b) => { let v = 0; while (!v) v = r(a, b); return v; };     // integer bukan sifar
const pt = (x, y) => `(${N(x)}, ${N(y)})`;
const rndPt = () => pt(r(-8, 8), r(-8, 8));

SOALAN["m2"] = {

/* ======================= MATEMATIK (bab buku teks KSSM T2) ======================= */
math: [
  { t: "Pola dan Jujukan",
    q: [
      ["Jujukan 1, 1, 2, 3, 5, 8, … dikenali sebagai jujukan…", "Fibonacci", "Pascal", "nombor perdana", "kuasa dua"],
      ["Susunan nombor dalam bentuk segi tiga yang setiap nombornya hasil tambah dua nombor di atasnya ialah Segi Tiga…", "Pascal", "Fibonacci", "Pythagoras", "sama sisi"]
    ],
    g: [
      () => { const a = r(-10, 20), d = pick([-5, -4, -3, -2, 2, 3, 4, 5, 6, 7]); const s = [0, 1, 2, 3].map(i => a + i * d); return qi(`Sebutan seterusnya bagi jujukan:\n${s.map(N).join(", ")}, …`, a + 4 * d, [1, d, 2 * d], `Beza sepunya ialah ${N(d)}.`); },
      () => { const a = pick([1, 2, 3, 5]), m = pick([2, 3]); const s = [0, 1, 2, 3].map(i => a * m ** i); return q(`Sebutan seterusnya bagi jujukan:\n${s.join(", ")}, …`, a * m ** 4, [a * m ** 3, m, a], false, `Darab ${m} setiap kali.`); },
      () => { const a = r(1, 10), d = r(2, 7), n = r(5, 20); return q(`Jujukan ${a}, ${a + d}, ${a + 2 * d}, … Cari sebutan ke-${n}.`, a + (n - 1) * d, [d, 1, a], false, "Tₙ = a + (n − 1)d"); },
      () => { const d = r(2, 9), c = r(-5, 10); const s = [1, 2, 3, 4].map(i => d * i + c); const right = lin(d, c, "n"); return from(`Ungkapan sebutan ke-n bagi jujukan ${s.join(", ")}, … ialah…`, right, [lin(d + 1, c, "n"), lin(d, c + d, "n"), lin(c || 1, d, "n"), lin(d, -c || 2, "n")].filter(z => z !== right)); }
    ] },
  { t: "Pemfaktoran dan Pecahan Algebra",
    q: [
      ["Kembangkan: 3(x + 4)", "3x + 12", "3x + 4", "x + 12", "3x + 7"],
      ["Faktorkan: x² − 9", "(x + 3)(x − 3)", "(x − 3)²", "(x + 9)(x − 1)", "x(x − 9)"],
      ["Pemfaktoran ialah proses yang bertentangan dengan…", "pengembangan", "pembahagian", "penambahan", "penolakan"]
    ],
    g: [
      () => { const a = r(-7, 7) || 2, b = r(-7, 7) || -3; const right = "x²" + (a + b ? sgn(a + b, "x") : "") + sgn(a * b, ""); const w = ["x²" + sgn(a * b, "x") + sgn(a + b || 1, ""), "x²" + sgn(a + b + 1, "x") + sgn(a * b, ""), "x²" + (a + b ? sgn(a + b, "x") : "") + sgn(a * b + (a * b > 0 ? 1 : -1) * 2, ""), "2x" + sgn(a + b || 1, "") ]; return from(`Kembangkan: (x${sgn(a, "")})(x${sgn(b, "")})`, right, w.filter(z => z !== right)); },
      () => { const p = r(1, 8), q2 = r(1, 8); const right = `(x + ${p})(x + ${q2})`; return from(`Faktorkan: x² + ${p + q2}x + ${p * q2}`, right, [`(x − ${p})(x − ${q2})`, `(x + ${p * q2})(x + 1)`, `(x + ${p + q2})(x + 1)`, `(x + ${p})(x − ${q2})`, `(x − ${p})(x + ${q2})`, `(x + ${p + 1})(x + ${q2})`].filter(z => z !== right)); },
      () => { const k = r(2, 9), a = r(2, 9), b = r(1, 9); const g = gcd(a, b); const right = `${k * g}(${a / g}x + ${b / g})`; return from(`Faktorkan sepenuhnya: ${k * a}x + ${k * b}`, right, [`${k}(${a}x + ${b + 1})`, `${k * a}(x + ${b})`, `x(${k * a} + ${k * b})`, `${k * g + 1}(${a / g}x + ${b / g})`]); },
      () => { const a = r(2, 9); const right = `(x + ${a})(x − ${a})`; return from(`Faktorkan: x² − ${a * a}`, right, [`(x − ${a})²`, `(x + ${a})²`, `(x + ${a * a})(x − 1)`, `x(x − ${a * a})`]); }
    ] },
  { t: "Rumus Algebra",
    q: [
      ["Dalam rumus A = pl, A ialah…", "perkara rumus", "pemalar", "pekali", "sebutan serupa"],
      ["Jadikan x perkara rumus: y = x + 5", "x = y − 5", "x = y + 5", "x = 5y", "x = y ÷ 5"],
      ["Jadikan r perkara rumus: d = 2r", "r = d ÷ 2", "r = 2d", "r = d − 2", "r = d + 2"]
    ],
    g: [
      () => { const p = r(2, 20), l = r(2, 20); return q(`Diberi P = 2(p + l). Cari P apabila p = ${p} dan l = ${l}.`, 2 * (p + l), [p, l, 2]); },
      () => { const b = r(2, 12) * 2, h = r(2, 15); return q(`Diberi A = ½ × t × h. Cari h apabila A = ${b * h / 2} dan t = ${b}.`, h, [1, 2, b / 2]); },
      () => { const u = r(0, 20), a = r(1, 6), t = r(2, 10); return q(`Diberi v = u + at. Cari v apabila u = ${u}, a = ${a} dan t = ${t}.`, u + a * t, [a, t, u || 3]); },
      () => { const a = r(2, 9), right = `x = (y − ${a}) ÷ 2`; return from(`Jadikan x perkara rumus: y = 2x + ${a}`, right, [`x = (y + ${a}) ÷ 2`, `x = 2y − ${a}`, `x = y − ${a}`, `x = y ÷ 2 + ${a}`]); }
    ] },
  { t: "Poligon",
    q: [
      ["Hasil tambah sudut peluaran bagi mana-mana poligon ialah…", "360°", "180°", "540°", "720°"],
      ["Sudut pedalaman + sudut peluaran pada satu bucu poligon = ?", "180°", "90°", "360°", "270°"],
      ["Poligon sekata mempunyai sisi dan sudut yang…", "sama", "berbeza", "bengkok", "tiada"]
    ],
    g: [
      () => { const n = pick([5, 6, 8, 9, 10, 12, 15, 18, 20]); return q(`Sudut peluaran poligon sekata ${n} sisi ialah…`, 360 / n, [10, 20, 360 / n], false, "360° ÷ n", x => x + "°"); },
      () => { const n = pick([5, 6, 8, 9, 10, 12, 15, 18, 20]); return q(`Sudut peluaran poligon sekata ialah ${360 / n}°. Berapakah bilangan sisinya?`, n, [1, 2, 3], false, "n = 360° ÷ sudut peluaran"); },
      () => { const n = pick([5, 6, 8, 10, 12]); return q(`Sudut pedalaman poligon sekata ${n} sisi ialah…`, 180 - 360 / n, [10, 20, 360 / n], false, "180° − sudut peluaran", x => x + "°"); },
      () => { const n = pick([4, 5, 6, 7, 8]); return q(`Bilangan pepenjuru bagi poligon ${n} sisi ialah…`, n * (n - 3) / 2, [1, 2, n], false, "n(n − 3) ÷ 2"); }
    ] },
  { t: "Bulatan",
    q: [
      ["Garis lurus yang menghubungkan dua titik pada lilitan bulatan ialah…", "perentas", "jejari", "tangen", "lengkok"],
      ["Bahagian lilitan bulatan dipanggil…", "lengkok", "perentas", "sektor", "tembereng"],
      ["Kawasan yang dibatasi oleh dua jejari dan satu lengkok dipanggil…", "sektor", "tembereng", "perentas", "diameter"],
      ["Nilai π yang biasa digunakan ialah 22/7 atau…", "3.142", "3.0", "2.718", "1.414"]
    ],
    g: [
      () => { const r7 = 7 * r(1, 6); return q(`Lilitan bulatan berjejari ${r7} cm ialah… (π = 22/7)`, 2 * 22 * r7 / 7, [22, 44, r7], false, "Lilitan = 2πj", x => x + " cm"); },
      () => { const r7 = 7 * r(1, 4); return q(`Luas bulatan berjejari ${r7} cm ialah… (π = 22/7)`, 22 * r7 * r7 / 7, [22, 44, 2 * 22 * r7 / 7], false, "Luas = πj²", x => x + " cm²"); },
      () => { const d = 14 * r(1, 5); return q(`Diameter bulatan ialah ${d} cm. Lilitannya ialah… (π = 22/7)`, 22 * d / 7, [22, 11, d], false, "Lilitan = πd", x => x + " cm"); },
      () => { const L = 44 * r(1, 5); return q(`Lilitan bulatan ialah ${L} cm. Jejarinya ialah… (π = 22/7)`, L * 7 / 44, [7, 14, 1], false, "j = lilitan ÷ 2π", x => x + " cm"); }
    ] },
  { t: "Bentuk Geometri Tiga Dimensi",
    q: [
      ["Bilangan permukaan rata kubus ialah…", "6", "4", "8", "12"],
      ["Bilangan tepi kuboid ialah…", "12", "8", "6", "10"],
      ["Prisma segi tiga mempunyai ___ permukaan rata.", "5", "6", "4", "3"],
      ["Piramid bertapak segi empat mempunyai ___ bucu.", "5", "4", "6", "8"],
      ["Bentuk 3D yang mempunyai satu bucu dan satu tapak bulat ialah…", "kon", "silinder", "sfera", "piramid"]
    ],
    g: [
      () => { const s = r(2, 12); return q(`Luas permukaan kubus bersisi ${s} cm ialah…`, 6 * s * s, [s * s, 4 * s * s, s ** 3], false, "6 × sisi²", x => x + " cm²"); },
      () => { const j = 7 * r(1, 3), h = r(2, 15); return q(`Isi padu silinder berjejari ${j} cm dan tinggi ${h} cm ialah… (π = 22/7)`, 22 * j * j * h / 7, [22 * j * h / 7, 22 * j * j / 7, 1], false, "πj²t", x => fmt(x) + " cm³"); },
      () => { const t = r(2, 10) * 2, h = r(2, 10), L = r(3, 15); return q(`Prisma segi tiga: tapak segi tiga ${t} cm, tinggi segi tiga ${h} cm, panjang prisma ${L} cm. Isi padunya ialah…`, t * h / 2 * L, [t * h * L, t * h / 2, L], false, "Luas keratan rentas × panjang", x => fmt(x) + " cm³"); },
      () => { const s = r(3, 12) , h = r(3, 12); return q(`Isi padu piramid bertapak segi empat sama bersisi ${s * 1} cm dan tinggi ${h * 3} cm ialah…`, s * s * h, [s * s * h * 3, s * s, 3], false, "⅓ × luas tapak × tinggi", x => fmt(x) + " cm³"); }
    ] },
  { t: "Koordinat",
    q: [
      ["Titik tengah antara (0, 0) dan (4, 6) ialah…", "(2, 3)", "(4, 6)", "(8, 12)", "(3, 2)"],
      ["Jarak antara (0, 0) dan (3, 4) ialah…", "5 unit", "7 unit", "1 unit", "12 unit"]
    ],
    g: [
      () => { const x1 = r(-6, 6), y1 = r(-6, 6), dx = r(1, 4) * 2, dy = r(1, 4) * 2; const x2 = x1 + dx, y2 = y1 + dy; const right = `(${N((x1 + x2) / 2)}, ${N((y1 + y2) / 2)})`; return fromF(`Titik tengah antara (${N(x1)}, ${N(y1)}) dan (${N(x2)}, ${N(y2)}) ialah…`, right, [`(${N(x2 - x1)}, ${N(y2 - y1)})`, `(${N(x1 + x2)}, ${N(y1 + y2)})`, `(${N((y1 + y2) / 2)}, ${N((x1 + x2) / 2)})`, `(${N((x1 + x2) / 2 + 1)}, ${N((y1 + y2) / 2)})`], rndPt); },
      () => { const [a, b, c] = pick(TRIPLE), x1 = r(-5, 5), y1 = r(-5, 5); return q(`Jarak antara (${N(x1)}, ${N(y1)}) dan (${N(x1 + a)}, ${N(y1 + b)}) ialah…`, c, [1, 2, a], false, "√[(x₂ − x₁)² + (y₂ − y₁)²]", x => x + " unit"); },
      () => { const x1 = r(-8, 8), y = r(-8, 8), d = r(2, 12); return q(`Jarak antara (${N(x1)}, ${N(y)}) dan (${N(x1 + d)}, ${N(y)}) ialah…`, d, [1, 2, Math.abs(x1) || 3], false, "", x => x + " unit"); }
    ] },
  { t: "Graf Fungsi",
    q: [
      ["Fungsi ialah hubungan yang setiap objek mempunyai ___ imej.", "satu", "dua", "tiada", "banyak"],
      ["Graf fungsi y = 2x + 1 berbentuk…", "garis lurus", "lengkung", "bulatan", "parabola"],
      ["Graf fungsi y = x² berbentuk…", "lengkung (parabola)", "garis lurus", "bulatan", "zig-zag"]
    ],
    g: [
      () => { const a = r(-5, 5) || 2, b = r(-9, 9), x = r(-5, 5); return qi(`Diberi f(x) = ${lin(a, b)}. Cari f(${N(x)}).`, a * x + b, [1, a, 2]); },
      () => { const x = r(-6, 6), c = r(-5, 5); return qi(`Diberi y = x²${c ? sgn(c, "") : ""}. Cari y apabila x = ${N(x)}.`, x * x + c, [1, 2, 2 * Math.abs(x) || 3]); },
      () => { const a = r(2, 5), b = r(-6, 6); const y = r(-10, 15); if ((y - b) % a) return null; return qi(`Diberi y = ${lin(a, b)}. Cari x apabila y = ${N(y)}.`, (y - b) / a, [1, 2, a]); }
    ] },
  { t: "Laju dan Pecutan",
    q: [
      ["Laju = ?", "jarak ÷ masa", "masa ÷ jarak", "jarak × masa", "jarak + masa"],
      ["Pecutan ialah kadar perubahan…", "laju", "jarak", "masa", "arah sahaja"],
      ["Nyahpecutan bermaksud laju objek…", "berkurang", "bertambah", "tetap", "sifar"],
      ["Unit pecutan yang betul ialah…", "m/s²", "m/s", "km", "s"]
    ],
    g: [
      () => { const v = r(40, 110), t = r(2, 5); return q(`🚌|Bas bergerak ${v * t} km dalam ${t} jam. Laju puratanya ialah…`, v, [5, 10, t], false, "", x => x + " km/j"); },
      () => { const v = r(4, 30), t = r(5, 60); return q(`🏃|Objek bergerak pada laju ${v} m/s selama ${t} s. Jarak yang dilalui ialah…`, v * t, [v, t, 10], false, "Jarak = laju × masa", x => x + " m"); },
      () => { const u = r(0, 10), a = r(1, 6), t = r(2, 10); return q(`🚗|Kereta memecut dari ${u} m/s ke ${u + a * t} m/s dalam ${t} s. Pecutannya ialah…`, a, [1, 2, t], false, "(v − u) ÷ t", x => x + " m/s²"); },
      () => { const t1 = r(2, 5), t2 = r(2, 5), v = r(30, 90); const d1 = r(1, v * t1 - 1) , d2 = v * (t1 + t2) - d1; if (d2 <= 0) return null; return q(`🚗|Sebuah kereta bergerak ${d1} km dalam ${t1} jam, kemudian ${d2} km dalam ${t2} jam. Laju puratanya ialah…`, v, [5, 10, 2], false, "Jumlah jarak ÷ jumlah masa", x => x + " km/j"); }
    ] },
  { t: "Kecerunan Garis Lurus",
    q: [
      ["Kecerunan garis mengufuk ialah…", "0", "1", "tidak tertakrif", "−1"],
      ["Kecerunan garis mencancang ialah…", "tidak tertakrif", "0", "1", "−1"],
      ["Garis yang condong ke kanan ke atas mempunyai kecerunan…", "positif", "negatif", "sifar", "tidak tertakrif"]
    ],
    g: [
      () => { const m = pick([-4, -3, -2, -1, 1, 2, 3, 4]), x1 = r(-5, 5), y1 = r(-5, 5), dx = r(1, 4); return qi(`Kecerunan garis yang melalui (${N(x1)}, ${N(y1)}) dan (${N(x1 + dx)}, ${N(y1 + m * dx)}) ialah…`, m, [1, 2, 2 * m], "m = (y₂ − y₁) ÷ (x₂ − x₁)"); },
      () => { const m = pick([2, 3, 4, 5]), dx = r(2, 6); return q(`Jarak mencancang ${m * dx} unit dan jarak mengufuk ${dx} unit. Kecerunannya ialah…`, m, [1, 2, dx], false, "jarak mencancang ÷ jarak mengufuk"); },
      () => { const m = nz(-5, 5), c = nz(-9, 9); if (Math.abs(m) === Math.abs(c)) return null; const right = `pintasan-y = ${N(c)}`; return fromF(`Garis y = ${lin(m, c)} mempunyai…`, right, [`pintasan-y = ${N(m)}`, `kecerunan = ${N(c)}`, `pintasan-y = ${N(-c)}`, `kecerunan = ${N(-m)}`], () => `pintasan-y = ${N(nz(-9, 9))}`); }
    ] },
  { t: "Transformasi Isometri",
    q: [
      ["Transformasi yang mengekalkan bentuk dan saiz objek dipanggil transformasi…", "isometri", "pembesaran", "ricihan", "regangan"],
      ["Translasi, pantulan dan putaran ialah contoh transformasi…", "isometri", "pembesaran", "regangan", "bukan isometri"],
      ["Imej bagi pantulan adalah ___ dengan objek.", "kongruen", "lebih besar", "lebih kecil", "tidak sama"]
    ],
    g: [
      () => { const x = nz(-6, 6), y = nz(-6, 6), a = nz(-5, 5), b = nz(-5, 5); const right = `(${N(x + a)}, ${N(y + b)})`; return fromF(`Titik (${N(x)}, ${N(y)}) ditranslasikan dengan vektor (${N(a)}, ${N(b)}). Imejnya ialah…`, right, [`(${N(x - a)}, ${N(y - b)})`, `(${N(x + b)}, ${N(y + a)})`, `(${N(a)}, ${N(b)})`, `(${N(x + a)}, ${N(y - b)})`], rndPt); },
      () => { const x = nz(-6, 6), y = nz(-6, 6); const right = `(${N(x)}, ${N(-y)})`; return fromF(`Pantulan titik (${N(x)}, ${N(y)}) pada paksi-x menghasilkan imej…`, right, [`(${N(-x)}, ${N(y)})`, `(${N(-x)}, ${N(-y)})`, `(${N(y)}, ${N(x)})`], rndPt); },
      () => { const x = nz(-6, 6), y = nz(-6, 6); const right = `(${N(-x)}, ${N(y)})`; return fromF(`Pantulan titik (${N(x)}, ${N(y)}) pada paksi-y menghasilkan imej…`, right, [`(${N(x)}, ${N(-y)})`, `(${N(-x)}, ${N(-y)})`, `(${N(y)}, ${N(x)})`], rndPt); },
      () => { const x = nz(-6, 6), y = nz(-6, 6); const right = `(${N(-x)}, ${N(-y)})`; return fromF(`Putaran 180° titik (${N(x)}, ${N(y)}) pada asalan menghasilkan imej…`, right, [`(${N(x)}, ${N(-y)})`, `(${N(-x)}, ${N(y)})`, `(${N(y)}, ${N(x)})`], rndPt); }
    ] },
  { t: "Sukatan Kecenderungan Memusat",
    q: [
      ["Min ialah…", "jumlah nilai ÷ bilangan nilai", "nilai paling kerap", "nilai di tengah", "nilai terbesar − terkecil"],
      ["Median ialah nilai ___ selepas data disusun.", "di tengah", "paling kerap", "terbesar", "terkecil"],
      ["Mod ialah nilai yang…", "paling kerap muncul", "di tengah", "purata", "terbesar"]
    ],
    g: [
      () => { const n = pick([4, 5]), avg = r(10, 80); const xs = []; let s = 0; for (let i = 0; i < n - 1; i++) { const v = avg + r(-9, 9); xs.push(v); s += v; } xs.push(avg * n - s); if (xs[n - 1] < 0) return null; return q(`Min bagi data:\n${xs.join(", ")}`, avg, [1, 2, 5], false, `Jumlah ${avg * n} ÷ ${n}`); },
      () => { const xs = shuffle([...new Set(Array.from({ length: 14 }, () => r(1, 60)))]).slice(0, 6); if (xs.length < 6) return null; const s = xs.slice().sort((a, b) => a - b); if ((s[2] + s[3]) % 2) return null; const med = (s[2] + s[3]) / 2; return q(`Median bagi data:\n${xs.join(", ")}`, med, [1, 2, 5], false, `Susun: ${s.join(", ")}. Purata dua nilai tengah.`); },
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 5)]); return from(`Mod bagi data:\n${xs.join(", ")}`, String(m), xs.filter(x => x !== m).map(String)); }
    ] },
  { t: "Kebarangkalian Mudah",
    q: [
      ["Kebarangkalian sesuatu peristiwa adalah antara…", "0 dan 1", "1 dan 10", "−1 dan 1", "0 dan 100"],
      ["Kebarangkalian peristiwa yang pasti berlaku ialah…", "1", "0", "½", "100"],
      ["Kebarangkalian peristiwa yang mustahil berlaku ialah…", "0", "1", "½", "−1"],
      ["🪙|Kebarangkalian mendapat \"kepala\" apabila melambung syiling ialah…", "1/2", "1/4", "1", "0"]
    ],
    g: [
      () => { const k = r(1, 5); return fromF(`🎲|Sebiji dadu dilambung. Kebarangkalian mendapat nombor lebih besar daripada ${k} ialah…`, frac(6 - k, 6), [frac(k, 6), frac(6 - k + 1, 6), frac(1, 6), frac(6 - k, 5)], () => frac(r(1, 5), 6)); },
      () => { const red = r(2, 8), blue = r(1, 8), grn = r(2, 8); const tot = red + blue + grn; return fromF(`${"🔴".repeat(red)}${"🔵".repeat(blue)}${"🟢".repeat(grn)}|Sebiji guli diambil secara rawak. Kebarangkalian mendapat guli biru ialah…`, frac(blue, tot), [frac(red, tot), frac(grn, tot), frac(blue, tot - blue || 1), frac(1, tot)], () => frac(r(1, tot - 1), tot)); },
      () => { const n = r(20, 40), k = r(2, 10); return fromF(`Sebuah kotak mengandungi ${n} kad bernombor 1 hingga ${n}. Kebarangkalian mendapat kad bernombor gandaan ${k} ialah…`, frac(Math.floor(n / k), n), [frac(Math.floor(n / k) + 1, n), frac(k, n), frac(1, k + 1), frac(Math.floor(n / k), n - 1)], () => frac(r(1, n - 1), n)); }
    ] }
],

/* ======================= SAINS (bab buku teks KSSM T2) ======================= */
sains: [
  { t: "Biodiversiti", q: [
    ["Biodiversiti bermaksud…", "kepelbagaian organisma hidup", "satu jenis haiwan", "kawasan bandar", "kitar air"],
    ["Haiwan yang mempunyai tulang belakang dipanggil…", "vertebrata", "invertebrata", "mamalia sahaja", "serangga"],
    ["Contoh invertebrata ialah…", "rama-rama", "ikan", "katak", "burung"],
    ["Mamalia ialah haiwan yang…", "menyusukan anak dan berbulu", "bertelur dan bersisik", "bernafas dengan insang", "mempunyai bulu pelepah"],
    ["Katak tergolong dalam kumpulan…", "amfibia", "reptilia", "mamalia", "ikan"],
    ["Ular tergolong dalam kumpulan…", "reptilia", "amfibia", "mamalia", "aves"],
    ["Burung tergolong dalam kumpulan…", "aves", "reptilia", "amfibia", "mamalia"],
    ["Tumbuhan berbunga yang bijinya mempunyai satu kotiledon dipanggil…", "monokotiledon", "dikotiledon", "paku pakis", "lumut"],
    ["Contoh tumbuhan monokotiledon ialah…", "padi", "kacang", "mangga", "rambutan"],
    ["Kekunci dikotomi digunakan untuk…", "mengelaskan organisma", "mengira bilangan haiwan", "mengukur suhu", "melukis peta"]
  ]},
  { t: "Ekosistem", q: [
    ["Ekosistem terdiri daripada komponen hidup (biotik) dan…", "abiotik", "fotosintesis", "populasi", "habitat"],
    ["Contoh komponen abiotik ialah…", "cahaya, air dan suhu", "pokok", "burung", "kulat"],
    ["Organisma yang menghasilkan makanan sendiri dipanggil…", "pengeluar", "pengguna", "pengurai", "pemangsa"],
    ["Organisma yang mengurai bahan organik yang mati ialah…", "pengurai (bakteria dan kulat)", "pengeluar", "pengguna primer", "herbivor"],
    ["Sekumpulan organisma sama spesies di satu kawasan dipanggil…", "populasi", "komuniti", "ekosistem", "habitat"],
    ["Semua populasi yang hidup bersama di satu kawasan dipanggil…", "komuniti", "populasi", "spesies", "biosfera"],
    ["Hubungan ikan remora dengan jerung ialah contoh…", "komensalisme", "parasitisme", "mutualisme", "pemangsaan"],
    ["Hubungan lebah dengan bunga ialah contoh…", "mutualisme", "parasitisme", "komensalisme", "persaingan"],
    ["Tenaga dalam ekosistem bermula daripada…", "Matahari", "pengurai", "air", "tanah"],
    ["Penebangan hutan secara berleluasa boleh menyebabkan…", "ketidakseimbangan ekosistem", "biodiversiti bertambah", "udara lebih bersih", "banjir berkurang"]
  ]},
  { t: "Nutrisi", q: [
    ["Tujuh kelas makanan ialah karbohidrat, protein, lemak, vitamin, mineral, pelawas dan…", "air", "gula", "garam", "minyak"],
    ["Ujian iodin digunakan untuk mengesan…", "kanji", "protein", "lemak", "glukosa"],
    ["Larutan iodin bertukar menjadi ___ jika terdapat kanji.", "biru tua", "merah bata", "ungu", "kuning"],
    ["Ujian Benedict digunakan untuk mengesan…", "gula penurun (glukosa)", "kanji", "lemak", "protein"],
    ["Ujian Millon digunakan untuk mengesan…", "protein", "lemak", "kanji", "vitamin"],
    ["Kekurangan vitamin C boleh menyebabkan…", "skurvi", "rabun malam", "riket", "beri-beri"],
    ["Kekurangan vitamin A boleh menyebabkan…", "rabun malam", "skurvi", "anemia", "goiter"],
    ["Kekurangan zat besi boleh menyebabkan…", "anemia", "goiter", "skurvi", "riket"],
    ["Pencernaan protein bermula di…", "perut", "mulut", "usus besar", "esofagus"],
    ["Hasil akhir pencernaan karbohidrat ialah…", "glukosa", "asid amino", "asid lemak", "gliserol sahaja"],
    ["Penyerapan makanan tercerna berlaku di…", "usus kecil", "perut", "usus besar", "mulut"]
  ]},
  { t: "Kesihatan Manusia", q: [
    ["Penyakit yang boleh berjangkit dari seorang ke seorang lain dipanggil penyakit…", "berjangkit", "tidak berjangkit", "keturunan", "kronik sahaja"],
    ["Contoh penyakit tidak berjangkit ialah…", "diabetes", "selesema", "COVID-19", "denggi"],
    ["Denggi disebarkan oleh nyamuk…", "Aedes", "Anopheles", "Culex", "lalat"],
    ["Malaria disebarkan oleh nyamuk…", "Anopheles", "Aedes", "Culex", "lipas"],
    ["Imunisasi bertujuan untuk…", "memberi keimunan kepada badan", "menyembuhkan semua penyakit", "menambah berat badan", "mengurangkan selera makan"],
    ["Antibodi dihasilkan oleh…", "sel darah putih", "sel darah merah", "plasma", "platlet"],
    ["Antibiotik digunakan untuk merawat jangkitan…", "bakteria", "virus", "kulat sahaja", "alahan"],
    ["Langkah mencegah denggi ialah…", "memusnahkan tempat pembiakan nyamuk", "menyimpan air bertakung", "membiarkan longkang tersumbat", "membuang tayar di luar"],
    ["Cara terbaik mencegah penyebaran kuman ialah…", "membasuh tangan dengan sabun", "berkongsi cawan", "tidak mandi", "bersin tanpa menutup mulut"]
  ]},
  { t: "Air dan Larutan", q: [
    ["Formula kimia air ialah…", "H₂O", "CO₂", "O₂", "NaCl"],
    ["Air terdiri daripada unsur hidrogen dan…", "oksigen", "karbon", "nitrogen", "natrium"],
    ["Takat didih air tulen ialah…", "100°C", "0°C", "50°C", "37°C"],
    ["Bahan yang melarut dipanggil…", "zat terlarut", "pelarut", "larutan", "ampaian"],
    ["Air sering dipanggil pelarut…", "universal", "organik", "pepejal", "terhad"],
    ["Larutan yang tidak boleh melarutkan zat terlarut lagi pada suhu tertentu dipanggil larutan…", "tepu", "cair", "pekat", "tidak tepu"],
    ["Keterlarutan gula dalam air bertambah apabila suhu air…", "meningkat", "menurun", "tidak berubah", "membeku"],
    ["Kaedah merawat air dengan mendidih bertujuan untuk…", "membunuh kuman", "menambah garam", "membuang warna sahaja", "menyejukkan air"],
    ["Proses penapisan air di loji termasuk pengenapan, penurasan dan…", "pengklorinan", "penyulingan alkohol", "pembakaran", "pembekuan"],
    ["Penyejatan air paling cepat apabila…", "suhu tinggi dan berangin", "suhu rendah", "lembap", "tiada angin"]
  ]},
  { t: "Asid dan Alkali", q: [
    ["Asid menukarkan kertas litmus biru kepada…", "merah", "biru", "hijau", "kuning"],
    ["Alkali menukarkan kertas litmus merah kepada…", "biru", "merah", "putih", "hitam"],
    ["Nilai pH bagi bahan neutral ialah…", "7", "1", "14", "0"],
    ["Bahan dengan pH kurang daripada 7 ialah…", "asid", "alkali", "neutral", "garam sahaja"],
    ["Bahan dengan pH lebih daripada 7 ialah…", "alkali", "asid", "neutral", "air tulen"],
    ["Tindak balas antara asid dan alkali dipanggil…", "peneutralan", "pengaratan", "pembakaran", "penyejatan"],
    ["Hasil peneutralan ialah garam dan…", "air", "oksigen", "karbon dioksida sahaja", "hidrogen"],
    ["Ubat gastrik mengandungi bahan ___ untuk meneutralkan asid berlebihan dalam perut.", "alkali", "asid", "gula", "garam"],
    ["Contoh asid dalam kehidupan harian ialah…", "cuka", "sabun", "ubat gigi", "air kapur"],
    ["Tanah berasid boleh dineutralkan dengan menambah…", "kapur", "cuka", "garam biasa", "gula"]
  ]},
  { t: "Keelektrikan dan Kemagnetan", q: [
    ["Unit arus elektrik ialah…", "ampere (A)", "volt (V)", "ohm (Ω)", "watt (W)"],
    ["Unit voltan ialah…", "volt (V)", "ampere (A)", "ohm (Ω)", "joule (J)"],
    ["Unit rintangan ialah…", "ohm (Ω)", "volt (V)", "ampere (A)", "newton (N)"],
    ["Hukum Ohm: V = ?", "IR", "I ÷ R", "R ÷ I", "I + R"],
    ["Alat untuk mengukur arus elektrik ialah…", "ammeter", "voltmeter", "termometer", "barometer"],
    ["Alat untuk mengukur voltan ialah…", "voltmeter", "ammeter", "ohm meter sahaja", "kompas"],
    ["Dalam litar selari, voltan merentasi setiap perintang adalah…", "sama", "berbeza", "sifar", "berganda"],
    ["Dalam litar bersiri, arus yang mengalir adalah…", "sama di semua titik", "berbeza", "sifar", "bertambah"],
    ["Kutub magnet yang sama akan…", "menolak", "menarik", "tidak bertindak", "bercahaya"],
    ["Elektromagnet ialah magnet yang dihasilkan oleh…", "arus elektrik dalam gegelung", "batu magnet semula jadi", "getah", "plastik"]
  ]},
  { t: "Daya dan Gerakan", q: [
    ["Unit SI bagi daya ialah…", "newton (N)", "joule (J)", "watt (W)", "pascal (Pa)"],
    ["Berat ialah daya ___ ke atas sesuatu objek.", "graviti", "geseran", "apungan", "elastik"],
    ["Jisim diukur dalam unit…", "kilogram", "newton", "meter", "saat"],
    ["Momen daya = ?", "daya × jarak serenjang dari fulkrum", "daya ÷ jarak", "jisim × pecutan", "daya + jarak"],
    ["Prinsip yang menyatakan tekanan dalam cecair dipindahkan sama rata ke semua arah ialah Prinsip…", "Pascal", "Archimedes", "Bernoulli", "Newton"],
    ["Brek hidraulik kereta menggunakan Prinsip…", "Pascal", "Archimedes", "Bernoulli", "Hooke"],
    ["Tekanan = ?", "daya ÷ luas", "daya × luas", "luas ÷ daya", "jisim × luas"],
    ["Pisau yang tajam memotong dengan lebih mudah kerana…", "luas permukaan kecil menghasilkan tekanan tinggi", "pisau berat", "geseran kurang", "pisau panjang"]
  ]},
  { t: "Haba", q: [
    ["Haba bergerak dari kawasan ___ ke kawasan ___.", "panas ke sejuk", "sejuk ke panas", "atas ke bawah", "kiri ke kanan"],
    ["Pemindahan haba melalui pepejal dipanggil…", "konduksi", "perolakan", "sinaran", "penyejatan"],
    ["Pemindahan haba melalui cecair dan gas dipanggil…", "perolakan", "konduksi", "sinaran", "pantulan"],
    ["Haba Matahari sampai ke Bumi melalui…", "sinaran", "konduksi", "perolakan", "pantulan"],
    ["Bayu laut berlaku pada waktu…", "siang", "malam", "subuh", "tengah malam sahaja"],
    ["Permukaan hitam dan kusam adalah ___ haba yang baik.", "penyerap dan pemancar", "pemantul", "penebat", "pengalir"],
    ["Permukaan putih berkilat adalah ___ haba yang baik.", "pemantul", "penyerap", "pemancar", "pengalir"],
    ["Termos mengurangkan pemindahan haba dengan menggunakan…", "vakum dan permukaan berkilat", "logam tebal", "permukaan hitam", "lubang udara"],
    ["Apabila dipanaskan, kebanyakan bahan akan…", "mengembang", "mengecut", "membeku", "tenggelam"]
  ]},
  { t: "Gelombang Bunyi", q: [
    ["Bunyi dihasilkan oleh objek yang…", "bergetar", "diam", "sejuk", "berwarna"],
    ["Bunyi tidak dapat bergerak melalui…", "vakum", "udara", "air", "keluli"],
    ["Bunyi bergerak paling laju melalui…", "pepejal", "cecair", "gas", "vakum"],
    ["Pantulan bunyi dipanggil…", "gema", "pembiasan", "resonans", "frekuensi"],
    ["Kenyaringan bunyi bergantung kepada…", "amplitud", "frekuensi", "panjang gelombang sahaja", "warna"],
    ["Kelangsingan (pic) bunyi bergantung kepada…", "frekuensi", "amplitud", "jisim", "suhu sahaja"],
    ["Unit frekuensi ialah…", "hertz (Hz)", "desibel (dB)", "meter (m)", "saat (s)"],
    ["Unit kenyaringan bunyi ialah…", "desibel (dB)", "hertz (Hz)", "watt (W)", "newton (N)"],
    ["Julat pendengaran manusia ialah lebih kurang…", "20 Hz hingga 20 000 Hz", "1 Hz hingga 10 Hz", "50 000 Hz ke atas", "0 Hz"],
    ["Kelawar dan ikan lumba-lumba menggunakan bunyi ___ untuk mengesan objek.", "ultrasonik", "infrasonik", "boleh didengar sahaja", "elektrik"]
  ]},
  { t: "Bintang dan Galaksi dalam Alam Semesta", q: [
    ["Galaksi tempat Sistem Suria berada ialah…", "Bima Sakti", "Andromeda", "Magellan", "Orion"],
    ["Bintang yang paling hampir dengan Bumi ialah…", "Matahari", "Sirius", "Polaris", "Proxima Centauri"],
    ["Bintang terbentuk daripada awan gas dan debu yang dipanggil…", "nebula", "komet", "asteroid", "meteor"],
    ["Bintang yang sangat besar boleh berakhir sebagai…", "lubang hitam", "planet", "asteroid", "komet"],
    ["Warna bintang menunjukkan…", "suhu permukaannya", "jaraknya sahaja", "umurnya sahaja", "bentuknya"],
    ["Bintang berwarna biru adalah lebih ___ daripada bintang merah.", "panas", "sejuk", "kecil", "lama"],
    ["Jarak antara bintang diukur dalam unit…", "tahun cahaya", "kilometer sahaja", "meter", "jam"],
    ["Tahun cahaya ialah ukuran…", "jarak", "masa", "jisim", "suhu"]
  ]},
  { t: "Sistem Suria", q: [
    ["Bilangan planet dalam Sistem Suria ialah…", "8", "9", "7", "10"],
    ["Planet yang paling besar ialah…", "Musytari", "Zuhal", "Bumi", "Neptun"],
    ["Planet yang paling hampir dengan Matahari ialah…", "Utarid", "Zuhrah", "Bumi", "Marikh"],
    ["Planet yang paling panas ialah…", "Zuhrah", "Utarid", "Marikh", "Musytari"],
    ["Planet gas gergasi termasuk Musytari, Zuhal, Uranus dan…", "Neptun", "Marikh", "Bumi", "Utarid"],
    ["Planet daratan (berbatu) termasuk Utarid, Zuhrah, Bumi dan…", "Marikh", "Musytari", "Zuhal", "Neptun"],
    ["Bumi mengambil masa ___ untuk beredar mengelilingi Matahari.", "365¼ hari", "24 jam", "30 hari", "12 bulan lunar"],
    ["Graviti Matahari menyebabkan planet…", "beredar dalam orbit", "berhenti", "pecah", "bercahaya sendiri"]
  ]},
  { t: "Meteoroid, Asteroid dan Komet", q: [
    ["Jasad berbatu yang mengorbit Matahari, kebanyakannya di antara Marikh dan Musytari, ialah…", "asteroid", "komet", "meteor", "bintang"],
    ["Kawasan antara Marikh dan Musytari yang mempunyai banyak asteroid dipanggil…", "lingkaran asteroid", "Bima Sakti", "Lingkaran Api", "buruj"],
    ["Komet terdiri daripada ais, debu dan…", "batu", "air laut", "logam cair", "tumbuhan"],
    ["Ekor komet sentiasa menghala ___ Matahari.", "menjauhi", "ke arah", "ke atas", "ke bawah"],
    ["Meteoroid yang terbakar dalam atmosfera Bumi kelihatan sebagai…", "meteor (tahi bintang)", "komet", "asteroid", "bulan"],
    ["Meteoroid yang jatuh dan sampai ke permukaan Bumi dipanggil…", "meteorit", "meteor", "komet", "asteroid"],
    ["Komet Halley boleh dilihat dari Bumi lebih kurang setiap…", "76 tahun", "1 tahun", "10 tahun", "500 tahun"]
  ]}
],

/* ======================= SEJARAH (bab buku teks KSSM T2) ======================= */
sejarah: [
  { n: 1, t: "Kerajaan Alam Melayu", q: [
    ["Alam Melayu merangkumi kawasan Semenanjung Tanah Melayu, Sumatera, Jawa, Borneo dan…", "kepulauan Filipina", "India", "China", "Arab"],
    ["Kerajaan Funan dianggap kerajaan…", "terawal di Asia Tenggara", "terakhir di Alam Melayu", "di Eropah", "di Afrika"],
    ["Kerajaan Srivijaya berpusat di…", "Palembang", "Melaka", "Jawa Timur", "Kedah"],
    ["Kerajaan Majapahit berpusat di…", "Jawa", "Sumatera", "Borneo", "Semenanjung"],
    ["Kerajaan Kedah Tua berpusat di…", "Lembah Bujang", "Palembang", "Kemboja", "Jawa"],
    ["Kerajaan Srivijaya terkenal sebagai kuasa…", "maritim (laut)", "agraria sahaja", "padang pasir", "pergunungan"],
    ["Kerajaan agraria bergantung kepada…", "pertanian", "perdagangan laut", "perlombongan minyak", "perindustrian"],
    ["Kerajaan luar yang sezaman dan menjalin hubungan dengan kerajaan Alam Melayu ialah…", "China dan India", "Amerika", "Australia", "Brazil"]
  ]},
  { n: 2, t: "Sistem Pemerintahan dan Kegiatan Ekonomi Masyarakat Alam Melayu", q: [
    ["Pemerintah tertinggi dalam kerajaan Alam Melayu ialah…", "raja", "pedagang", "petani", "nelayan"],
    ["Konsep \"daulat\" bermaksud raja mempunyai…", "kuasa dan kedaulatan yang tinggi", "banyak harta sahaja", "ramai anak", "kapal yang besar"],
    ["Rakyat yang menderhaka kepada raja dipercayai akan terkena…", "tulah", "pahala", "hadiah", "ganjaran"],
    ["Kegiatan ekonomi utama kerajaan maritim ialah…", "perdagangan", "perlombongan bijih timah", "penternakan", "perkilangan"],
    ["Hasil hutan yang didagangkan termasuk…", "kapur barus, gaharu dan rotan", "minyak petrol", "kereta", "plastik"],
    ["Pelabuhan entrepot ialah pelabuhan yang…", "mengumpul dan mengedarkan semula barang dagangan", "untuk kapal perang sahaja", "ditutup kepada pedagang", "untuk menangkap ikan"],
    ["Sistem pertukaran barang dengan barang dipanggil sistem…", "barter", "kredit", "cukai", "kerah"]
  ]},
  { n: 3, t: "Sosiobudaya Masyarakat Kerajaan Alam Melayu", q: [
    ["Tulisan yang digunakan pada Batu Bersurat Kedukan Bukit ialah tulisan…", "Pallava", "Jawi", "Rumi", "Kawi"],
    ["Batu Bersurat Terengganu ditulis dalam tulisan…", "Jawi", "Pallava", "Rumi", "Cina"],
    ["Contoh karya persuratan Melayu tradisional ialah…", "Hikayat Raja-raja Pasai", "Romeo dan Juliet", "Harry Potter", "Mahabharata versi moden"],
    ["Candi Borobudur terletak di…", "Jawa", "Kedah", "Sumatera", "Kemboja"],
    ["Angkor Wat terletak di…", "Kemboja", "Thailand", "Jawa", "Myanmar"],
    ["Golongan pemerintah dalam struktur sosial terdiri daripada raja dan…", "pembesar", "rakyat", "hamba", "pedagang asing"],
    ["Golongan yang paling ramai dalam masyarakat ialah…", "rakyat biasa", "raja", "pembesar", "golongan agama"]
  ]},
  { n: 4, t: "Agama, Kepercayaan dan Keunikan Warisan", q: [
    ["Sebelum kedatangan agama lain, masyarakat Alam Melayu mengamalkan kepercayaan…", "animisme", "Islam", "Kristian", "Sikh"],
    ["Animisme ialah kepercayaan bahawa…", "benda-benda mempunyai semangat", "hanya ada satu Tuhan", "tiada Tuhan", "raja ialah dewa"],
    ["Agama yang dibawa oleh pedagang India ialah Hindu dan…", "Buddha", "Islam", "Kristian", "Sikh"],
    ["Islam tersebar ke Alam Melayu melalui pedagang, pendakwah dan…", "perkahwinan", "peperangan", "penjajahan", "perlombongan"],
    ["Antara keunikan warisan masyarakat Alam Melayu ialah…", "seni pertukangan dan seni bina tradisional", "bangunan pencakar langit", "kereta api laju", "telefon"],
    ["Rumah tradisional Melayu dibina bertiang tinggi untuk…", "mengelakkan banjir dan binatang buas", "kelihatan cantik sahaja", "menyimpan kereta", "tujuan sukan"]
  ]},
  { n: 5, t: "Kesultanan Melayu Melaka", q: [
    ["Pengasas Kesultanan Melayu Melaka ialah…", "Parameswara", "Sultan Mahmud Syah", "Tun Perak", "Hang Tuah"],
    ["Melaka diasaskan sekitar tahun…", "1400", "1511", "1641", "1786"],
    ["Pelabuhan Melaka terlindung daripada tiupan angin…", "monsun", "puting beliung", "bayu darat", "salji"],
    ["Undang-undang bertulis Melaka yang berkaitan dengan perkara di darat ialah…", "Hukum Kanun Melaka", "Undang-undang Laut Melaka", "Perlembagaan", "Piagam Madinah"],
    ["Undang-undang yang berkaitan dengan pelayaran dan perdagangan laut ialah…", "Undang-undang Laut Melaka", "Hukum Kanun Melaka", "Undang-undang 99", "Adat Perpatih"],
    ["Pegawai yang menguruskan pelabuhan Melaka ialah…", "Syahbandar", "Laksamana", "Temenggung", "Bendahara"],
    ["Melaka jatuh ke tangan Portugis pada tahun…", "1511", "1400", "1641", "1824"],
    ["Ketua angkatan Portugis yang menyerang Melaka ialah…", "Alfonso de Albuquerque", "Francis Light", "Stamford Raffles", "James Brooke"],
    ["Sultan Melaka ketika Melaka diserang Portugis ialah…", "Sultan Mahmud Syah", "Parameswara", "Sultan Mansur Syah", "Sultan Alauddin Riayat Syah"]
  ]},
  { n: 6, t: "Kesultanan Johor Riau", q: [
    ["Kesultanan Johor diasaskan oleh…", "Sultan Alauddin Riayat Syah II", "Parameswara", "Sultan Mahmud Syah", "Raja Kecil"],
    ["Kesultanan Johor ialah penerus warisan Kesultanan…", "Melayu Melaka", "Kedah", "Pasai", "Majapahit"],
    ["Pusat pentadbiran Johor Riau pernah berpindah-randah kerana…", "ancaman musuh", "kekurangan air", "gempa bumi", "kekurangan penduduk"],
    ["Johor menjadi pelabuhan entrepot yang terkenal di kawasan…", "Selatan Semenanjung dan Riau", "Kedah", "Kelantan", "Borneo"],
    ["Golongan yang turut berperanan dalam pentadbiran Johor Riau ialah orang…", "Bugis", "Portugis", "Belanda", "Inggeris"]
  ]},
  { n: 7, t: "Kesultanan Melayu Pahang, Perak, Terengganu dan Selangor", q: [
    ["Kesultanan Perak diasaskan oleh putera Sultan Mahmud Syah iaitu…", "Sultan Muzaffar Syah", "Sultan Alauddin", "Parameswara", "Sultan Mansur Syah"],
    ["Kesultanan Selangor diasaskan oleh keturunan…", "Bugis", "Minangkabau", "Siam", "Aceh"],
    ["Sultan pertama Selangor ialah…", "Sultan Salehuddin", "Sultan Muzaffar Syah", "Sultan Zainal Abidin", "Raja Kecil"],
    ["Kesultanan Terengganu dikaitkan dengan Sultan…", "Zainal Abidin I", "Salehuddin", "Mahmud Syah", "Muzaffar Syah"],
    ["Warisan Kesultanan Melayu Melaka yang diteruskan di negeri-negeri ini termasuk…", "sistem pemerintahan beraja dan adat istiadat", "sistem republik", "bahasa Portugis", "sistem komunis"]
  ]},
  { n: 8, t: "Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis", q: [
    ["Antara kerajaan Melayu tertua di Semenanjung ialah…", "Kedah", "Selangor", "Perlis", "Johor"],
    ["Negeri Sembilan mengamalkan Adat…", "Perpatih", "Temenggung", "Raja", "Laut"],
    ["Adat Perpatih dibawa oleh masyarakat…", "Minangkabau", "Bugis", "Aceh", "Siam"],
    ["Ketua negeri Negeri Sembilan bergelar…", "Yang di-Pertuan Besar", "Sultan", "Raja", "Yang di-Pertua Negeri"],
    ["Ketua negeri Perlis bergelar…", "Raja", "Sultan", "Yang di-Pertuan Besar", "Yang di-Pertua Negeri"],
    ["Perlis pernah menjadi sebahagian daripada negeri…", "Kedah", "Perak", "Kelantan", "Pahang"]
  ]},
  { n: 9, t: "Warisan Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis", q: [
    ["Dalam Adat Perpatih, pemimpin bagi setiap luak dipanggil…", "Undang", "Penghulu", "Bendahara", "Laksamana"],
    ["Adat Perpatih mengamalkan sistem…", "kekeluargaan nasab ibu", "nasab bapa sahaja", "monarki mutlak", "republik"],
    ["Antara warisan Kelantan yang terkenal ialah…", "wau dan dikir barat", "Zapin Johor", "Sumazau", "Ngajat"],
    ["Antara warisan Kedah ialah tapak arkeologi di…", "Lembah Bujang", "Gua Niah", "Bukit Tengkorak", "Lenggong"],
    ["Rumah Minangkabau di Negeri Sembilan terkenal dengan bumbung berbentuk…", "tanduk kerbau (gonjong)", "kubah", "rata", "piramid"]
  ]},
  { n: 10, t: "Sarawak dan Sabah", q: [
    ["Sarawak pernah diperintah oleh keluarga…", "Brooke", "Raffles", "Light", "Albuquerque"],
    ["Rajah Putih pertama Sarawak ialah…", "James Brooke", "Charles Brooke", "Vyner Brooke", "Francis Light"],
    ["Sabah pernah ditadbir oleh…", "Syarikat Borneo Utara British", "Syarikat Hindia Timur Belanda", "Portugis", "Kesultanan Melaka"],
    ["Kaum Bumiputera terbesar di Sarawak ialah…", "Iban", "Kadazandusun", "Bajau", "Murut"],
    ["Kaum Bumiputera terbesar di Sabah ialah…", "Kadazandusun", "Iban", "Bidayuh", "Melanau"],
    ["Rumah panjang ialah kediaman tradisional masyarakat…", "Iban", "Melayu Johor", "Cina", "Portugis"],
    ["Pesta menuai di Sabah dipanggil…", "Pesta Kaamatan", "Hari Gawai", "Thaipusam", "Chap Goh Mei"],
    ["Pesta menuai di Sarawak dipanggil…", "Hari Gawai", "Pesta Kaamatan", "Deepavali", "Pesta Air"]
  ]}
],

/* ======================= GEOGRAFI (bab buku teks KSSM T2) ======================= */
geo: [
  { t: "Skala dan Jarak",
    q: [
      ["Skala peta menunjukkan hubungan antara jarak di peta dengan…", "jarak sebenar", "ketinggian", "suhu", "masa"],
      ["Skala 1 : 50 000 bermaksud 1 cm di peta mewakili…", "50 000 cm sebenar", "50 000 km", "50 m", "5 km"],
      ["Skala yang ditulis dengan perkataan seperti \"1 cm mewakili 1 km\" dipanggil skala…", "penyata", "pecahan", "lurus", "nisbah"]
    ],
    g: [
      () => { const d = r(2, 12), k = pick([25000, 50000, 100000]); return q(`Jarak di peta ${d} cm. Skala 1 : ${fmt(k)}. Jarak sebenar ialah…`, d * k / 100000, [0.5, 1, 2], true, "", x => (Number.isInteger(x) ? x : x.toFixed(2).replace(/0$/, "")) + " km"); },
      () => { const km = r(1, 10), k = pick([50000, 100000]); return q(`Jarak sebenar ${km} km. Skala 1 : ${fmt(k)}. Jarak di peta ialah…`, km * 100000 / k, [1, 2, 0.5], true, "", x => x + " cm"); }
    ] },
  { t: "Peta Topografi", q: [
    ["Garisan pada peta yang menyambungkan tempat yang sama tinggi dipanggil…", "garis kontur", "garis lintang", "garis bujur", "garis sempadan"],
    ["Garis kontur yang rapat menunjukkan cerun yang…", "curam", "landai", "rata", "berlubang"],
    ["Garis kontur yang jarang menunjukkan cerun yang…", "landai", "curam", "tegak", "berbatu"],
    ["Selang kontur ialah beza ketinggian antara…", "dua garis kontur yang bersebelahan", "dua bandar", "laut dan gunung", "dua sungai"],
    ["Rujukan grid enam angka digunakan untuk menentukan…", "kedudukan sesuatu tempat dengan tepat", "suhu", "ketinggian sahaja", "skala"],
    ["Peta topografi menunjukkan ciri fizikal dan…", "ciri budaya (buatan manusia)", "cuaca harian", "harga tanah", "jumlah penduduk sahaja"],
    ["Simbol ▲ pada peta topografi biasanya mewakili…", "puncak / stesen trigonometri", "sekolah", "masjid", "jalan raya"]
  ]},
  { t: "Pengaruh Pergerakan Bumi terhadap Cuaca dan Iklim", q: [
    ["Cuaca ialah keadaan atmosfera dalam tempoh…", "singkat", "35 tahun", "satu abad", "satu milenium"],
    ["Iklim ialah purata keadaan cuaca dalam tempoh…", "panjang (sekurang-kurangnya 30 tahun)", "satu hari", "satu minggu", "satu jam"],
    ["Peredaran Bumi dan kecondongan paksi menyebabkan berlakunya…", "musim", "siang dan malam sahaja", "gempa bumi", "pasang surut"],
    ["Pada 21 Jun, matahari berada tegak di atas…", "Garisan Sartan", "Garisan Jadi", "Khatulistiwa", "Kutub Utara"],
    ["Pada 22 Disember, matahari berada tegak di atas…", "Garisan Jadi", "Garisan Sartan", "Khatulistiwa", "Kutub Selatan"],
    ["Ekuinoks berlaku apabila matahari tegak di atas…", "Khatulistiwa", "Garisan Sartan", "Garisan Jadi", "Kutub"],
    ["Hemisfera utara mengalami musim panas apabila matahari tegak di atas…", "Garisan Sartan", "Garisan Jadi", "Kutub Selatan", "Garisan Antarabangsa"]
  ]},
  { t: "Cuaca dan Iklim di Malaysia", q: [
    ["Malaysia mengalami iklim…", "Khatulistiwa", "Mediterranean", "padang pasir", "kutub"],
    ["Suhu purata tahunan di Malaysia ialah lebih kurang…", "27°C", "10°C", "40°C", "0°C"],
    ["Monsun Timur Laut biasanya bertiup pada bulan…", "November hingga Mac", "Mei hingga September", "Julai sahaja", "Ogos hingga Oktober sahaja"],
    ["Monsun Timur Laut membawa hujan lebat ke…", "pantai timur Semenanjung", "pantai barat Semenanjung", "Perlis sahaja", "Pulau Pinang sahaja"],
    ["Monsun Barat Daya bertiup pada bulan…", "Mei hingga September", "November hingga Mac", "Januari sahaja", "Disember sahaja"],
    ["Hujan perolakan biasanya turun pada waktu…", "petang", "pagi", "tengah malam", "subuh"],
    ["Alat untuk mengukur hujan ialah…", "tolok hujan", "termometer", "barometer", "anemometer"],
    ["Alat untuk mengukur kelajuan angin ialah…", "anemometer", "barometer", "tolok hujan", "higrometer"]
  ]},
  { t: "Pengangkutan di Malaysia", q: [
    ["Lebuh raya yang menghubungkan utara dan selatan Semenanjung ialah…", "Lebuhraya Utara-Selatan (PLUS)", "Lebuhraya Pantai Timur", "Lebuhraya Pan Borneo", "Lebuhraya KL-Karak sahaja"],
    ["Lapangan terbang antarabangsa utama Malaysia ialah…", "KLIA", "Lapangan Terbang Subang", "Lapangan Terbang Kota Bharu", "Lapangan Terbang Ipoh"],
    ["Pelabuhan tersibuk di Malaysia ialah…", "Pelabuhan Klang", "Pelabuhan Kuantan", "Pelabuhan Kemaman", "Pelabuhan Kuching"],
    ["Pengangkutan rel di bandar seperti LRT dan MRT membantu…", "mengurangkan kesesakan lalu lintas", "menambah kesesakan", "mencemarkan sungai", "melambatkan perjalanan"],
    ["Lebuhraya Pan Borneo dibina di…", "Sabah dan Sarawak", "Johor", "Perak", "Kedah"],
    ["Kelebihan pengangkutan air ialah…", "boleh membawa muatan berat dengan kos rendah", "paling laju", "boleh ke semua tempat di darat", "tidak perlu pelabuhan"]
  ]},
  { t: "Telekomunikasi di Malaysia", q: [
    ["Contoh alat telekomunikasi moden ialah…", "telefon pintar", "burung merpati", "isyarat asap", "gendang"],
    ["Internet membolehkan maklumat disebarkan dengan…", "pantas ke seluruh dunia", "sangat perlahan", "melalui pos sahaja", "kertas sahaja"],
    ["Satelit komunikasi Malaysia yang pertama ialah…", "MEASAT", "TiungSAT", "RazakSAT", "Sputnik"],
    ["Antara kesan negatif telekomunikasi ialah…", "penyebaran berita palsu dan jenayah siber", "komunikasi lebih cepat", "pembelajaran dalam talian", "urusan perbankan mudah"],
    ["Kabel dasar laut digunakan untuk…", "menghantar data internet antara negara", "menangkap ikan", "mengukur kedalaman laut", "menyalurkan minyak"]
  ]},
  { t: "Kepelbagaian Iklim dan Pengaruhnya terhadap Kegiatan Manusia di Asia", q: [
    ["Iklim padang pasir panas di Asia terdapat di…", "Asia Barat (contohnya Arab Saudi)", "Asia Tenggara", "Jepun", "Siberia"],
    ["Penduduk di kawasan padang pasir biasanya memakai pakaian yang…", "longgar dan menutup badan", "ketat dan nipis", "tebal berbulu", "tiada lengan"],
    ["Kawasan beriklim tundra di Asia terletak di…", "utara Rusia (Siberia)", "Malaysia", "India", "Arab Saudi"],
    ["Penanaman padi sawah sesuai di kawasan beriklim…", "Monsun Tropika dan Khatulistiwa", "padang pasir", "tundra", "kutub"],
    ["Kegiatan penternakan rusa kutub dijalankan oleh masyarakat di kawasan…", "tundra", "padang pasir", "hutan hujan", "Mediterranean"],
    ["Rumah di kawasan bersalji biasanya mempunyai bumbung…", "curam", "rata", "terbuka", "tiada"]
  ]},
  { t: "Jenis dan Kemajuan Pengangkutan di Asia", q: [
    ["Kereta api laju Shinkansen terdapat di negara…", "Jepun", "India", "Malaysia", "Thailand"],
    ["Terusan Suez menghubungkan Laut Mediterranean dengan…", "Laut Merah", "Laut China Selatan", "Lautan Pasifik", "Laut Hitam"],
    ["Pengangkutan yang sesuai di kawasan padang pasir pada zaman dahulu ialah…", "unta", "perahu", "kereta salji", "kuda laut"],
    ["Kemajuan pengangkutan membantu…", "perdagangan dan pelancongan", "mengurangkan hubungan antara negara", "memperlahankan ekonomi", "mengasingkan penduduk"],
    ["Jalan Sutera pada zaman dahulu menghubungkan China dengan…", "Asia Barat dan Eropah", "Australia", "Amerika", "Afrika Selatan"]
  ]},
  { t: "Pemanasan Global", q: [
    ["Pemanasan global ialah peningkatan…", "suhu purata Bumi", "hujan", "salji", "bilangan pokok"],
    ["Gas rumah hijau utama ialah…", "karbon dioksida", "oksigen", "nitrogen", "argon"],
    ["Antara punca pemanasan global ialah…", "pembakaran bahan api fosil", "menanam pokok", "berbasikal", "menjimatkan elektrik"],
    ["Kesan pemanasan global ialah…", "ais di kutub mencair dan paras laut naik", "ais bertambah", "suhu menurun", "hutan bertambah"],
    ["Cara mengurangkan pemanasan global ialah…", "menggunakan tenaga boleh baharu", "membakar hutan", "menggunakan lebih banyak kereta", "membazir elektrik"],
    ["Perjanjian antarabangsa untuk menangani perubahan iklim ialah…", "Perjanjian Paris", "Perjanjian Pangkor", "Perjanjian Hudaibiyah", "Perjanjian Malaysia 1963"]
  ]},
  { t: "Teknologi Hijau", q: [
    ["Teknologi hijau ialah teknologi yang…", "mesra alam dan mengurangkan pencemaran", "mencemarkan alam", "membazir tenaga", "menggunakan banyak plastik"],
    ["Contoh teknologi hijau ialah…", "panel solar", "enjin diesel lama", "pembakaran terbuka", "lampu pijar"],
    ["Lampu LED lebih mesra alam kerana…", "menggunakan kurang tenaga", "lebih panas", "lebih mahal sahaja", "lebih terang sahaja"],
    ["Kenderaan elektrik membantu mengurangkan…", "pencemaran udara", "kesesakan", "kemalangan", "kos jalan raya"],
    ["Bangunan hijau direka untuk…", "menjimatkan tenaga dan air", "menggunakan lebih banyak elektrik", "tiada tingkap", "membazir air"],
    ["Biogas boleh dihasilkan daripada…", "sisa organik", "plastik", "kaca", "besi"]
  ]}
],

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Golongan Kata", q: [
    ["Kata nama terbitan bagi \"jaya\" dengan apitan ke-…-an ialah…", "kejayaan", "berjaya", "menjayakan", "penjaya"],
    ["Kata nama terbitan bagi \"lukis\" dengan apitan pe-…-an ialah…", "pelukisan", "pelukis", "melukis", "lukisan"],
    ["Yang manakah kata kerja pasif?", "dihantar", "menghantar", "penghantar", "hantaran"],
    ["Yang manakah kata adjektif?", "cemerlang", "kecemerlangan", "mencemerlangkan", "dicemerlangkan"],
    ["Kata adjektif bentuk dalam senarai di bawah ialah…", "bujur", "harum", "lambat", "rindu"],
    ["Kata adjektif pancaindera dalam senarai di bawah ialah…", "lemak (rasa)", "jauh", "baharu", "berani"],
    ["Kata bantu aspek \"sedang\" menunjukkan perbuatan yang…", "masih berlaku", "telah berlaku", "akan berlaku", "tidak berlaku"],
    ["Kata bantu ragam \"mesti\" menunjukkan…", "kewajipan", "kemungkinan", "masa lampau", "keinginan sahaja"],
    ["Kata penguat yang hadir di belakang kata adjektif ialah…", "sekali", "sangat", "terlalu", "paling"],
    ["Kata arah ialah kata yang hadir sebelum kata nama untuk menunjukkan…", "arah atau kedudukan", "masa", "bilangan", "perasaan"]
  ]},
  { t: "Imbuhan dan Penggandaan", q: [
    ["Imbuhan \"meN-…-kan\" + \"sihat\" menjadi…", "menyihatkan", "mensihatkan", "mesihatkan", "menghatkan"],
    ["Imbuhan \"meN-…-i\" + \"kasih\" menjadi…", "mengasihi", "mengkasihi", "mekasihi", "menasihi"],
    ["Imbuhan \"peN-…-an\" + \"satu\" menjadi…", "penyatuan", "pensatuan", "pesatuan", "pengsatuan"],
    ["Imbuhan \"ber-…-an\" + \"datang\" menjadi…", "berdatangan", "kedatangan", "pendatang", "didatangi"],
    ["Imbuhan \"ke-…-an\" dalam \"kesejukan\" bermaksud…", "mengalami keadaan sejuk", "agak sejuk", "paling sejuk", "membuat sejuk"],
    ["Kata ganda penuh ialah…", "rumah-rumah", "sayur-mayur", "lelaki", "tetamu"],
    ["Kata ganda separa ialah…", "lelaki", "rumah-rumah", "kuih-muih", "anak-anak"],
    ["Kata ganda berentak ialah…", "lauk-pauk", "budak-budak", "dedaun", "pepohon"],
    ["Kata ganda yang membawa maksud \"bermacam-macam jenis\" ialah…", "kuih-muih", "budak-budak", "lelaki", "tetamu"],
    ["Penggandaan \"kemerah-merahan\" bermaksud…", "agak merah", "sangat merah", "banyak merah", "tidak merah"]
  ]},
  { t: "Ayat Aktif, Pasif dan Majmuk", q: [
    ["Ayat pasif bagi \"Polis menangkap pencuri itu.\" ialah…", "Pencuri itu ditangkap oleh polis.", "Polis ditangkap oleh pencuri itu.", "Pencuri itu menangkap polis.", "Ditangkap polis pencuri itu oleh."],
    ["Ayat pasif diri kedua yang betul ialah…", "Buku itu kamu bawa.", "Buku itu dibawa kamu.", "Buku itu dibawa oleh kamu.", "Kamu dibawa buku itu."],
    ["Ayat aktif tak transitif ialah…", "Adik sedang tidur.", "Adik membaca buku.", "Buku dibaca adik.", "Adik membeli kuih."],
    ["Ayat majmuk pancangan keterangan menggunakan kata hubung seperti…", "kerana, supaya, apabila", "yang", "dan, atau", "bahawa"],
    ["Ayat majmuk campuran mengandungi…", "lebih daripada satu jenis ayat majmuk", "satu subjek sahaja", "satu predikat sahaja", "kata seru sahaja"],
    ["Ayat \"Mereka bermain bola sepak dan kami menonton.\" ialah ayat majmuk…", "gabungan", "pancangan relatif", "pancangan keterangan", "pancangan komplemen"],
    ["Ayat \"Guru berkata bahawa ujian ditangguhkan.\" ialah ayat majmuk pancangan…", "komplemen", "relatif", "keterangan", "gabungan"],
    ["Ayat yang betul ialah…", "Mereka berbincang tentang projek itu.", "Mereka berbincang projek itu.", "Mereka membincangkan tentang projek itu.", "Mereka membincang tentang projek itu."]
  ]},
  { t: "Peribahasa", q: [
    ["Peribahasa \"bagai pinang dibelah dua\" bermaksud…", "sangat sepadan", "berpisah", "bergaduh", "berbeza"],
    ["Peribahasa \"berat sama dipikul, ringan sama dijinjing\" bermaksud…", "bekerjasama dalam susah dan senang", "membawa barang berat", "malas", "suka membeli"],
    ["Peribahasa \"ada udang di sebalik batu\" bermaksud…", "ada maksud tersembunyi", "banyak udang", "suka bersembunyi", "jujur"],
    ["Peribahasa \"hangat-hangat tahi ayam\" bermaksud…", "bersemangat pada awal sahaja", "cuaca panas", "rajin berterusan", "ayam sakit"],
    ["Peribahasa \"seperti kacang lupakan kulit\" bermaksud…", "lupa asal usul atau jasa orang", "suka makan kacang", "pemurah", "rajin"],
    ["Peribahasa \"sediakan payung sebelum hujan\" bermaksud…", "bersedia sebelum sesuatu berlaku", "membeli payung", "takut hujan", "suka hujan"],
    ["Peribahasa \"bagai aur dengan tebing\" bermaksud…", "saling membantu", "selalu bergaduh", "tinggal di tebing", "berkebun"],
    ["Simpulan bahasa \"buah tangan\" bermaksud…", "hadiah atau ole-ole", "buah-buahan", "tangan besar", "kerja tangan"],
    ["Simpulan bahasa \"mulut murai\" bermaksud…", "orang yang banyak bercakap", "orang pendiam", "suara merdu", "suka makan"],
    ["Simpulan bahasa \"anak emas\" bermaksud…", "anak kesayangan", "anak yang kaya", "anak degil", "emas kecil"]
  ]},
  { t: "Ejaan, Tanda Baca dan Kosa Kata", q: [
    ["Ejaan yang betul ialah…", "dipertanggungjawabkan", "dipertanggung jawabkan", "dipertanggungjawapkan", "dipertangungjawabkan"],
    ["Ejaan yang betul ialah…", "kakitangan", "kaki tangan", "kakitanggan", "kaki-tangan"],
    ["Ejaan yang betul ialah…", "pascasiswazah", "pasca siswazah", "pasca-siswazah", "paskasiswazah"],
    ["Ejaan yang betul ialah…", "ekstrakurikulum", "ekstra kurikulum", "ekstra-kurikulum", "ekstrakurikulam"],
    ["Penggunaan huruf besar yang betul ialah…", "Hari Raya Aidilfitri", "hari raya aidilfitri", "Hari raya Aidilfitri", "hari Raya aidilfitri"],
    ["Tanda koma bertitik (;) digunakan untuk…", "memisahkan klausa yang setara", "menamatkan ayat tanya", "menunjukkan seruan", "memulakan petikan"],
    ["Maksud \"tekun\" ialah…", "rajin dan bersungguh-sungguh", "malas", "cepat lupa", "sombong"],
    ["Maksud \"inovasi\" ialah…", "pembaharuan atau ciptaan baharu", "kemunduran", "peniruan", "kerosakan"],
    ["Antonim bagi \"optimis\" ialah…", "pesimis", "ceria", "yakin", "positif"],
    ["Sinonim bagi \"lazim\" ialah…", "biasa", "luar biasa", "jarang", "aneh"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["A word that means \"to make something happen sooner\" is…", "accelerate", "delay", "postpone", "pause"],
    ["A word that means \"not interested\" is…", "indifferent", "curious", "eager", "keen"],
    ["A word that means \"able to be seen through\" is…", "transparent", "opaque", "solid", "dense"],
    ["A synonym of \"assist\" is…", "help", "hinder", "ignore", "stop"],
    ["A synonym of \"reside\" is…", "live", "leave", "travel", "work"],
    ["The opposite of \"generous\" is…", "stingy", "kind", "giving", "friendly"],
    ["The opposite of \"include\" is…", "exclude", "contain", "involve", "add"],
    ["Which word is spelled correctly?", "environment", "enviroment", "envirnoment", "environmant"],
    ["Which word is spelled correctly?", "occasion", "ocassion", "occassion", "ocasion"],
    ["Which prefix makes \"possible\" negative?", "im-", "un-", "dis-", "non-"]
  ]},
  { t: "Tenses", q: [
    ["She ___ for two hours when the bus finally arrived.", "had been waiting", "has been waiting", "is waiting", "waits"],
    ["They ___ the project by next Friday.", "will have finished", "have finished", "finished", "are finishing"],
    ["I ___ this book three times.", "have read", "had read", "reading", "am read"],
    ["While she ___ dinner, the phone rang.", "was cooking", "cooked", "is cooking", "has cooked"],
    ["He ___ to Sabah last year.", "went", "has gone", "goes", "had go"],
    ["The past participle of \"begin\" is…", "begun", "began", "beginned", "begin"],
    ["The past participle of \"choose\" is…", "chosen", "chose", "choosed", "chosed"],
    ["Which sentence is in the future continuous tense?", "This time tomorrow, I will be flying to Sabah.", "I flew to Sabah.", "I fly to Sabah.", "I have flown to Sabah."]
  ]},
  { t: "Passive Voice and Reported Speech", q: [
    ["Passive: \"The workers built the bridge.\"", "The bridge was built by the workers.", "The bridge built the workers.", "The workers were built by the bridge.", "The bridge is building by the workers."],
    ["Passive: \"People speak Malay in Malaysia.\"", "Malay is spoken in Malaysia.", "Malay speaks in Malaysia.", "Malaysia is spoken Malay.", "Malay was speaking in Malaysia."],
    ["\"The homework ___ by tomorrow.\"", "must be submitted", "must submit", "must submitted", "must be submit"],
    ["She said, \"I am busy.\" → She said that she ___ busy.", "was", "is", "am", "be"],
    ["He said, \"I will help you.\" → He said that he ___ help me.", "would", "will", "shall", "can"],
    ["She asked, \"Do you like durian?\" → She asked me ___ I liked durian.", "if", "that", "what", "do"],
    ["The teacher said, \"Don't be late.\" → The teacher told us ___ late.", "not to be", "don't be", "to not", "no be"]
  ]},
  { t: "Conditionals and Connectors", q: [
    ["If it rains, we ___ indoors.", "will stay", "stayed", "would stayed", "staying"],
    ["If I ___ a bird, I would fly to the mountains.", "were", "am", "will be", "be"],
    ["If you heat ice, it ___.", "melts", "melted", "will melted", "melting"],
    ["___ she was tired, she finished her homework.", "Although", "Because", "So", "Unless"],
    ["You will miss the bus ___ you hurry.", "unless", "because", "although", "and"],
    ["He studied hard; ___, he passed with flying colours.", "therefore", "however", "although", "unless"],
    ["She likes coffee; ___, her brother prefers tea.", "however", "therefore", "because", "so"]
  ]},
  { t: "Gerunds, Infinitives and Prepositions", q: [
    ["I enjoy ___ novels.", "reading", "to read", "read", "reads"],
    ["She decided ___ a doctor.", "to become", "becoming", "become", "became"],
    ["He is looking forward to ___ his grandparents.", "visiting", "visit", "visited", "be visit"],
    ["We are proud ___ our school.", "of", "with", "at", "on"],
    ["She is responsible ___ the class library.", "for", "of", "to", "with"],
    ["He insisted ___ paying the bill.", "on", "at", "for", "with"],
    ["They succeeded ___ winning the match.", "in", "on", "at", "for"]
  ]},
  { t: "Idioms and Phrasal Verbs", q: [
    ["\"Bite off more than you can chew\" means…", "take on more than you can handle", "eat too much", "talk too much", "be very hungry"],
    ["\"Cost an arm and a leg\" means…", "very expensive", "very cheap", "painful", "free"],
    ["\"Let the cat out of the bag\" means…", "reveal a secret", "free a pet", "go shopping", "make a mess"],
    ["\"On cloud nine\" means…", "extremely happy", "very tired", "flying", "confused"],
    ["\"Look up\" a word means…", "search for it in a dictionary", "look at the sky", "admire", "ignore"],
    ["\"Turn down\" an offer means…", "reject it", "accept it", "lower the volume", "build it"],
    ["\"Come across\" an old photo means…", "find it by chance", "lose it", "destroy it", "frame it"],
    ["\"Get along with\" someone means…", "have a good relationship", "argue", "travel", "leave"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM (ikut bidang) ======================= */
pi: [
  { t: "Tilawah dan Tajwid", q: [
    ["Mad wajib muttasil berlaku apabila huruf mad bertemu hamzah dalam…", "satu kalimah", "dua kalimah", "akhir ayat", "awal ayat"],
    ["Mad jaiz munfasil berlaku apabila huruf mad bertemu hamzah dalam…", "dua kalimah", "satu kalimah", "sabdu", "sukun"],
    ["Mad wajib muttasil dibaca sepanjang…", "4 atau 5 harakat", "2 harakat", "6 harakat", "1 harakat"],
    ["Mad lazim dibaca sepanjang…", "6 harakat", "2 harakat", "4 harakat", "1 harakat"],
    ["Mad 'aridh lissukun berlaku apabila…", "berhenti pada huruf selepas huruf mad", "huruf mad bertemu hamzah", "huruf bersabdu", "di awal ayat"],
    ["Ra' dibaca tebal (tafkhim) apabila berbaris…", "atas atau hadapan", "bawah", "mati selepas baris bawah", "bersabdu sahaja"],
    ["Lam pada kalimah Allah dibaca tebal apabila huruf sebelumnya berbaris…", "atas atau hadapan", "bawah", "mati", "sabdu"],
    ["Waqaf bermaksud…", "berhenti", "menyambung", "memanjangkan", "mendengung"]
  ]},
  { t: "Hadis", q: [
    ["Hadis tentang \"Agama itu nasihat\" menunjukkan pentingnya…", "saling menasihati ke arah kebaikan", "berdiam diri", "mengumpat", "bergaduh"],
    ["Hadis \"Senyumanmu kepada saudaramu adalah sedekah\" mengajar kita bahawa…", "senyuman juga satu kebaikan", "sedekah hanya dengan wang", "tidak perlu senyum", "senyum itu haram"],
    ["Hadis \"Muslim yang baik ialah yang orang lain selamat daripada lidah dan tangannya\" mengajar kita…", "menjaga tutur kata dan perbuatan", "bercakap kasar", "memukul orang", "memaki"],
    ["Perawi hadis ialah…", "orang yang meriwayatkan hadis", "orang yang membaca al-Quran", "imam solat", "khatib"],
    ["Antara kitab hadis yang terkenal ialah…", "Sahih al-Bukhari", "Muqaddimah", "al-Qanun fi al-Tibb", "Sulalatus Salatin"]
  ]},
  { t: "Akidah", q: [
    ["Beriman kepada malaikat bermaksud percaya bahawa malaikat…", "makhluk Allah yang taat", "boleh disembah", "sama seperti manusia", "tidak wujud"],
    ["Malaikat dicipta daripada…", "cahaya (nur)", "tanah", "api", "air"],
    ["Jin dicipta daripada…", "api", "cahaya", "tanah", "air"],
    ["Manusia (Nabi Adam a.s.) dicipta daripada…", "tanah", "api", "cahaya", "air"],
    ["Malaikat yang mencatat amalan buruk ialah…", "Atid", "Raqib", "Ridwan", "Jibril"],
    ["Malaikat yang bertugas menyoal di alam kubur ialah…", "Munkar dan Nakir", "Raqib dan Atid", "Malik dan Ridwan", "Jibril dan Mikail"],
    ["Kesan beriman kepada malaikat Raqib dan Atid ialah kita…", "berhati-hati dalam setiap perbuatan", "bebas melakukan dosa", "tidak perlu solat", "menyembah malaikat"],
    ["Sifat Sama' bagi Allah bermaksud Allah…", "Maha Mendengar", "Maha Melihat", "Maha Berkuasa", "Maha Mengetahui"],
    ["Sifat Basar bagi Allah bermaksud Allah…", "Maha Melihat", "Maha Mendengar", "Maha Hidup", "Maha Esa"]
  ]},
  { t: "Ibadah", q: [
    ["Syarat wajib solat ialah Islam, baligh, berakal dan…", "suci daripada haid dan nifas", "kaya", "sudah berkahwin", "tinggal di bandar"],
    ["Antara syarat sah solat ialah…", "menghadap kiblat", "memakai jam", "solat di masjid sahaja", "berjemaah sahaja"],
    ["Perkara yang membatalkan solat ialah…", "bercakap dengan sengaja", "membaca surah", "rukuk", "sujud"],
    ["Solat sunat yang dilakukan selepas terbit matahari ialah solat…", "Duha", "Tahajud", "Witir", "Tarawih"],
    ["Solat sunat yang dilakukan pada waktu malam selepas tidur ialah solat…", "Tahajud", "Duha", "Tarawih", "Jumaat"],
    ["Solat sunat dengan bilangan rakaat ganjil yang menutup solat malam ialah solat…", "Witir", "Duha", "Tahajud", "Istikharah"],
    ["Solat untuk memohon petunjuk dalam membuat keputusan ialah solat…", "Istikharah", "Hajat", "Duha", "Tarawih"],
    ["Solat jamak takdim bermaksud menghimpunkan dua solat dalam waktu solat…", "yang pertama", "yang kedua", "Subuh", "Maghrib sahaja"]
  ]},
  { t: "Sirah", q: [
    ["Nabi Muhammad SAW berhijrah ke Madinah pada tahun…", "622 Masihi", "570 Masihi", "610 Masihi", "632 Masihi"],
    ["Masjid pertama yang dibina oleh Nabi ialah Masjid…", "Quba", "Nabawi", "al-Haram", "al-Aqsa"],
    ["Golongan Ansar ialah…", "penduduk Madinah yang membantu Nabi", "penduduk Makkah yang berhijrah", "musuh Islam", "pedagang Rom"],
    ["Golongan Muhajirin ialah…", "orang Islam yang berhijrah dari Makkah", "penduduk Madinah", "orang Yahudi", "orang Rom"],
    ["Nabi mempersaudarakan golongan Ansar dan Muhajirin untuk…", "mengukuhkan perpaduan", "bergaduh", "berdagang sahaja", "memisahkan mereka"],
    ["Perang pertama antara orang Islam dan Quraisy ialah Perang…", "Badar", "Uhud", "Khandak", "Hunain"],
    ["Perang Badar berlaku pada bulan…", "Ramadan", "Syawal", "Rejab", "Muharam"],
    ["Dalam Perang Uhud, tentera Islam tewas kerana tentera pemanah…", "meninggalkan bukit tanpa kebenaran", "terlalu ramai", "tidak membawa senjata", "hujan lebat"]
  ]},
  { t: "Adab dan Akhlak", q: [
    ["Adab bermusafir termasuk…", "membaca doa menaiki kenderaan", "berjalan tanpa tujuan", "tidak memberitahu keluarga", "membuang sampah merata"],
    ["Adab dalam majlis ilmu ialah…", "mendengar dengan teliti", "bercakap sesama sendiri", "tidur", "keluar masuk"],
    ["Sifat qanaah bermaksud…", "berasa cukup dengan apa yang ada", "tamak", "boros", "kedekut"],
    ["Sifat tawaduk bermaksud…", "rendah diri", "sombong", "pemarah", "malas"],
    ["Islam melarang sikap riak iaitu…", "menunjuk-nunjuk amalan", "rendah diri", "bersedekah secara rahsia", "bersyukur"],
    ["Menjaga alam sekitar ialah tanggungjawab manusia sebagai…", "khalifah di muka bumi", "pengunjung sahaja", "pemilik mutlak", "tetamu"]
  ]},
  { t: "Jawi", q: [
    ["کبرسيهن|Perkataan Jawi ini dibaca…", "kebersihan", "kebaikan", "kebenaran", "keberanian"],
    ["ڤرڤادوان|Perkataan Jawi ini dibaca…", "perpaduan", "perpisahan", "perjalanan", "permainan"],
    ["Ejaan Jawi bagi \"perpaduan\" ialah…", "ڤرڤادوان", "ڤرڤدوان", "ڤرفادوان", "ڤرڤادوانا"],
    ["Ejaan Jawi bagi \"kebersihan\" ialah…", "کبرسيهن", "کبرسهن", "کبرسيهان", "قبرسيهن"],
    ["Huruf Jawi ڽ mewakili bunyi…", "ny", "ng", "n", "y"],
    ["Imbuhan \"ke-…-an\" dalam tulisan Jawi ditulis sebagai…", "ک … ن", "ق … ن", "ک … ان", "ک … ه"]
  ]}
],

/* ======================= BAHASA ARAB (tema dan tatabahasa) ======================= */
ba: [
  { t: "Kehidupan Harian", q: [
    ["أَسْتَيْقِظُ مُبَكِّرًا|Ayat ini bermaksud…", "Saya bangun awal", "Saya tidur awal", "Saya makan pagi", "Saya pergi lewat"],
    ["أَتَنَاوَلُ الْفُطُورَ|Ayat ini bermaksud…", "Saya bersarapan", "Saya makan malam", "Saya minum petang", "Saya makan tengah hari"],
    ["أَذْهَبُ إِلَى الْمَدْرَسَةِ بِالْحَافِلَةِ|Ayat ini bermaksud…", "Saya pergi ke sekolah dengan bas", "Saya pulang dari sekolah", "Saya ke pasar dengan kereta", "Saya berjalan ke rumah"],
    ["الْغَدَاءُ|Perkataan ini bermaksud…", "makan tengah hari", "sarapan", "makan malam", "minum petang"],
    ["الْعَشَاءُ|Perkataan ini bermaksud…", "makan malam", "makan tengah hari", "sarapan", "kudapan"],
    ["أَنَامُ|Kata kerja ini bermaksud…", "saya tidur", "saya bangun", "saya makan", "saya mandi"]
  ]},
  { t: "Masa dan Waktu", q: [
    ["السَّاعَةُ الْوَاحِدَةُ|Waktu ini ialah…", "pukul satu", "pukul dua", "pukul sepuluh", "pukul tujuh"],
    ["السَّاعَةُ الْخَامِسَةُ|Waktu ini ialah…", "pukul lima", "pukul empat", "pukul enam", "pukul tiga"],
    ["كَمِ السَّاعَةُ؟|Soalan ini bermaksud…", "Pukul berapa sekarang?", "Berapa harganya?", "Bila kamu datang?", "Di mana jam?"],
    ["نِصْفٌ|Perkataan ini bermaksud…", "setengah", "suku", "tepat", "lebih"],
    ["رُبْعٌ|Perkataan ini bermaksud…", "suku", "setengah", "tepat", "kurang"],
    ["الصَّبَاحُ|Perkataan ini bermaksud…", "pagi", "petang", "malam", "tengah hari"]
  ]},
  { t: "Kesihatan dan Badan", q: [
    ["رَأْسِي يُؤْلِمُنِي|Ayat ini bermaksud…", "Kepala saya sakit", "Perut saya sakit", "Saya sihat", "Tangan saya sakit"],
    ["طَبِيبٌ|Perkataan ini bermaksud…", "doktor", "jururawat", "pesakit", "farmasi"],
    ["مَرِيضٌ|Perkataan ini bermaksud…", "sakit / pesakit", "sihat", "doktor", "ubat"],
    ["دَوَاءٌ|Perkataan ini bermaksud…", "ubat", "air", "makanan", "hospital"],
    ["بَطْنٌ|Perkataan ini bermaksud…", "perut", "kepala", "kaki", "tangan"],
    ["الرِّيَاضَةُ مُفِيدَةٌ لِلصِّحَّةِ|Ayat ini bermaksud…", "Bersukan berfaedah untuk kesihatan", "Sukan itu susah", "Saya suka sukan", "Kesihatan itu mahal"]
  ]},
  { t: "Kata Kerja Mudhari' dan Dhamir", q: [
    ["أَنَا أَكْتُبُ|Ayat ini bermaksud…", "Saya sedang menulis", "Saya telah menulis", "Dia menulis", "Kami menulis"],
    ["هُوَ يَكْتُبُ|Ayat ini bermaksud…", "Dia (lelaki) sedang menulis", "Dia (perempuan) menulis", "Saya menulis", "Mereka menulis"],
    ["هِيَ تَكْتُبُ|Ayat ini bermaksud…", "Dia (perempuan) sedang menulis", "Dia (lelaki) menulis", "Kamu menulis", "Kami menulis"],
    ["نَحْنُ نَكْتُبُ|Ayat ini bermaksud…", "Kami sedang menulis", "Saya menulis", "Mereka menulis", "Kamu semua menulis"],
    ["Kata kerja mudhari' yang sesuai untuk أَنْتَ ialah…", "تَكْتُبُ", "أَكْتُبُ", "يَكْتُبُ", "نَكْتُبُ"],
    ["Kata kerja mudhari' yang sesuai untuk أَنَا ialah…", "أَقْرَأُ", "يَقْرَأُ", "تَقْرَأُ", "نَقْرَأُ"]
  ]},
  { t: "Kata Sifat dan Warna", q: [
    ["Kata sifat dalam bahasa Arab mesti sepadan dengan kata nama dari segi jantina dan…", "bilangan serta i'rab", "warna", "saiz huruf", "bunyi"],
    ["Kata sifat yang betul untuk \"مَدْرَسَةٌ\" (besar) ialah…", "كَبِيرَةٌ", "كَبِيرٌ", "كِبَارٌ", "أَكْبَرُ"],
    ["Kata sifat yang betul untuk \"بَيْتٌ\" (besar) ialah…", "كَبِيرٌ", "كَبِيرَةٌ", "كُبْرَى", "كِبَارٌ"],
    ["سَيَّارَةٌ حَمْرَاءُ|Frasa ini bermaksud…", "kereta merah", "kereta biru", "kereta besar", "kereta baru"],
    ["قَلَمٌ أَزْرَقُ|Frasa ini bermaksud…", "pen biru", "pen merah", "pen hijau", "pen hitam"],
    ["Bentuk perempuan bagi أَحْمَرُ ialah…", "حَمْرَاءُ", "أَحْمَرَةٌ", "حُمْرٌ", "أَحْمَرَانِ"]
  ]},
  { t: "Nombor 11–20 dan Bilangan", q: [
    ["أَحَدَ عَشَرَ|Nombor ini ialah…", "11", "12", "21", "10"],
    ["اِثْنَا عَشَرَ|Nombor ini ialah…", "12", "11", "20", "2"],
    ["خَمْسَةَ عَشَرَ|Nombor ini ialah…", "15", "5", "50", "14"],
    ["عِشْرُونَ|Nombor ini ialah…", "20", "12", "2", "200"],
    ["Nombor 13 dalam bahasa Arab ialah…", "ثَلَاثَةَ عَشَرَ", "ثَلَاثُونَ", "ثَلَاثَةٌ", "عَشَرَةٌ"],
    ["كَمْ طَالِبًا فِي الْفَصْلِ؟|Soalan ini bermaksud…", "Berapa orang murid dalam kelas?", "Siapa murid dalam kelas?", "Di mana kelas?", "Bila kelas bermula?"]
  ]}
]
};
})();
