/* =========================================================
   TINGKATAN 4 — Cerdik Ceria (Sekolah Menengah, KSSM)
   Matematik, Matematik Tambahan, Sains, Fizik, Kimia, Biologi & Sejarah:
   bab ikut buku teks KSSM Tingkatan 4.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang.
   Bahasa Arab: ikut tema dan tatabahasa. Geografi (elektif): akan datang.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu ---------- */
const N = n => n < 0 ? "−" + (-n) : String(n);
const P = n => n < 0 ? "(" + N(n) + ")" : String(n);
const gcd = (a, b) => b ? gcd(Math.abs(b), Math.abs(a) % Math.abs(b)) : Math.abs(a);
const frac = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return d / g === 1 ? N(n / g) : `${N(n / g)}/${d / g}`; };
const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const sup = n => String(n).split("").map(c => SUP[c]).join("");
const SUB = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" };
const sub = n => String(n).split("").map(c => SUB[c]).join("");
const nz = (a, b) => { let v = 0; while (!v) v = r(a, b); return v; };
function qi(text, ans, offs, exp) {
  const s = new Set(); let t = 0;
  while (s.size < 3 && t < 80) { t++; const v = ans + pick(offs) * (Math.random() < .5 ? -1 : 1); if (v !== ans) s.add(v); }
  let k = 1; while (s.size < 3) { s.add(ans + k * 7); k++; }
  return [text, N(ans), ...[...s].map(N), exp || ""];
}
function fromF(text, right, pool, more, exp) {
  const set = new Set(pool.map(String).filter(x => x !== String(right)));
  let t = 0; while (set.size < 3 && t < 120) { t++; const v = String(more()); if (v !== String(right)) set.add(v); }
  return from(text, right, [...set], exp);
}
const lin = (a, b, v = "x") => (a === 1 ? "" : a === -1 ? "−" : N(a)) + v + (b ? (b < 0 ? " − " : " + ") + Math.abs(b) : "");
const TRIPLE = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17]];
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));

SOALAN["m4"] = {

/* ======================= MATEMATIK (KSSM T4) ======================= */
math: [
  { t: "Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah",
    q: [
      ["Bentuk am persamaan kuadratik ialah…", "ax² + bx + c = 0", "ax + b = 0", "ax³ + b = 0", "a/x + b = 0"],
      ["Graf fungsi kuadratik f(x) = ax² + bx + c dengan a > 0 berbentuk…", "∪ (mempunyai titik minimum)", "∩ (mempunyai titik maksimum)", "garis lurus", "bulatan"],
      ["Paksi simetri bagi graf f(x) = x² − 4 ialah…", "x = 0", "y = 0", "x = 4", "y = −4"]
    ],
    g: [
      () => { const p = nz(-7, 7), q2 = nz(-7, 7); if (p === q2) return null; const b = -(p + q2), c = p * q2; const right = `x = ${N(Math.min(p, q2))} atau x = ${N(Math.max(p, q2))}`; return fromF(`Selesaikan: x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} = 0`, right, [`x = ${N(-Math.max(p, q2))} atau x = ${N(-Math.min(p, q2))}`, `x = ${N(b)} atau x = ${N(c)}`, `x = ${N(p + 1)} atau x = ${N(q2 + 1)}`], () => `x = ${N(r(-9, 0))} atau x = ${N(r(1, 9))}`, "Faktorkan: (x − p)(x − q) = 0"); },
      () => { const a = nz(-3, 3), b = r(-6, 6), c = r(-9, 9), x = r(-4, 4); return qi(`Diberi f(x) = ${a === 1 ? "" : a === -1 ? "−" : N(a)}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}. Cari f(${N(x)}).`, a * x * x + b * x + c, [1, 2, Math.abs(b) || 3]); }
    ] },
  { t: "Asas Nombor",
    q: [
      ["Nombor dalam asas 2 hanya menggunakan digit…", "0 dan 1", "0 hingga 9", "1 dan 2", "0 hingga 2"],
      ["Digit terbesar dalam asas 8 ialah…", "7", "8", "9", "6"],
      ["Sistem asas 2 digunakan dalam…", "komputer", "jam", "kalendar", "wang"]
    ],
    g: [
      () => { const n = r(5, 63); const right = n.toString(2) + sub(2); return fromF(`Tukarkan ${n}${sub(10)} kepada asas 2.`, right, [(n + 1).toString(2) + sub(2), (n - 1).toString(2) + sub(2), n.toString(2).split("").reverse().join("") + sub(2)], () => r(5, 63).toString(2) + sub(2)); },
      () => { const n = r(9, 200); const right = n.toString(8) + sub(8); return fromF(`Tukarkan ${n}${sub(10)} kepada asas 8.`, right, [(n + 1).toString(8) + sub(8), (n + 8).toString(8) + sub(8), n.toString(5) + sub(8)], () => r(9, 200).toString(8) + sub(8)); },
      () => { const n = r(6, 124); const s5 = n.toString(5); return q(`Tukarkan ${s5}${sub(5)} kepada asas 10.`, n, [1, 5, 25]); },
      () => { const n = r(5, 31); const s2 = n.toString(2); return q(`Tukarkan ${s2}${sub(2)} kepada asas 10.`, n, [1, 2, 4]); }
    ] },
  { t: "Penaakulan Logik", q: [
    ["Pernyataan ialah ayat yang…", "boleh ditentukan benar atau palsu", "berbentuk soalan", "berbentuk arahan", "berbentuk seruan"],
    ["Yang manakah pernyataan?", "5 ialah nombor perdana.", "Tutup pintu itu.", "Adakah hari ini Isnin?", "Wah, cantiknya!"],
    ["Penafian bagi \"Semua burung boleh terbang\" ialah…", "Bukan semua burung boleh terbang", "Semua burung tidak boleh terbang", "Burung boleh terbang", "Tiada burung"],
    ["Pernyataan majmuk \"p dan q\" adalah benar jika…", "kedua-dua p dan q benar", "salah satu benar", "kedua-dua palsu", "p palsu"],
    ["Pernyataan majmuk \"p atau q\" adalah palsu jika…", "kedua-dua p dan q palsu", "salah satu benar", "kedua-dua benar", "p benar"],
    ["Akas bagi \"Jika p, maka q\" ialah…", "Jika q, maka p", "Jika bukan p, maka bukan q", "Jika bukan q, maka bukan p", "p dan q"],
    ["Kontrapositif bagi \"Jika p, maka q\" ialah…", "Jika bukan q, maka bukan p", "Jika q, maka p", "Jika bukan p, maka bukan q", "p atau q"],
    ["Penaakulan deduktif ialah membuat kesimpulan…", "khusus daripada premis umum", "umum daripada kes khusus", "secara rawak", "tanpa premis"],
    ["Penaakulan induktif ialah membuat kesimpulan…", "umum daripada kes-kes khusus", "khusus daripada premis umum", "tanpa bukti", "daripada satu premis sahaja"]
  ]},
  { t: "Operasi Set",
    q: [
      ["A ∩ B ialah set unsur yang…", "berada dalam A dan juga B", "berada dalam A atau B", "hanya dalam A", "tiada dalam A atau B"],
      ["A ∪ B ialah set unsur yang…", "berada dalam A atau B atau kedua-duanya", "berada dalam A dan B sahaja", "bukan dalam A", "kosong"],
      ["A' ialah…", "pelengkap set A", "subset A", "kesatuan A", "persilangan A"]
    ],
    g: [
      () => { const nA = r(8, 25), nB = r(8, 25), nI = r(1, Math.min(nA, nB) - 1); return q(`n(A) = ${nA}, n(B) = ${nB}, n(A ∩ B) = ${nI}. Cari n(A ∪ B).`, nA + nB - nI, [nI, 1, 2], false, "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)"); },
      () => { const xi = r(30, 60), nA = r(10, 25), nB = r(10, 25), nI = r(1, 8); const u = nA + nB - nI; if (u > xi) return null; return q(`n(ξ) = ${xi}, n(A) = ${nA}, n(B) = ${nB}, n(A ∩ B) = ${nI}. Cari n((A ∪ B)').`, xi - u, [nI, 1, 2]); },
      () => { const A = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).slice(0, 5).sort((a, b) => a - b), B = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).slice(0, 5).sort((a, b) => a - b); const I = A.filter(x => B.includes(x)); const right = I.length ? "{" + I.join(", ") + "}" : "∅"; return fromF(`A = {${A.join(", ")}}\nB = {${B.join(", ")}}\nA ∩ B = ?`, right, ["{" + [...new Set(A.concat(B))].sort((a, b) => a - b).join(", ") + "}", "{" + A.join(", ") + "}", "{" + B.join(", ") + "}"], () => "{" + shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).slice(0, r(1, 3)).sort((a, b) => a - b).join(", ") + "}"); }
    ] },
  { t: "Rangkaian dalam Teori Graf",
    q: [
      ["Dalam teori graf, titik dipanggil…", "bucu", "tepi", "darjah", "gelung"],
      ["Garis yang menghubungkan dua bucu dipanggil…", "tepi", "bucu", "darjah", "pokok"],
      ["Darjah bucu ialah bilangan…", "tepi yang bertemu pada bucu itu", "bucu dalam graf", "gelung sahaja", "laluan"],
      ["Pokok ialah graf yang…", "terhubung dan tiada litar", "mempunyai gelung", "tidak terhubung", "mempunyai satu bucu sahaja"],
      ["Graf berpemberat ialah graf yang tepinya mempunyai…", "nilai (contohnya jarak atau kos)", "warna", "anak panah sahaja", "gelung"],
      ["Graf terarah ialah graf yang tepinya mempunyai…", "arah", "pemberat sahaja", "gelung sahaja", "warna"]
    ],
    g: [
      () => { const e = r(3, 15); return q(`Sebuah graf mempunyai ${e} tepi. Hasil tambah darjah semua bucu ialah…`, 2 * e, [e, 1, 2], false, "Hasil tambah darjah = 2 × bilangan tepi"); },
      () => { const v = r(4, 12); return q(`Sebuah pokok mempunyai ${v} bucu. Bilangan tepinya ialah…`, v - 1, [1, 2, v], false, "Pokok: tepi = bucu − 1"); }
    ] },
  { t: "Ketaksamaan Linear dalam Dua Pemboleh Ubah",
    q: [
      ["Rantau bagi y > mx + c terletak di ___ garis y = mx + c.", "atas", "bawah", "kiri", "pada"],
      ["Garis sempadan bagi y ≥ 2x dilukis sebagai garis…", "penuh", "putus-putus", "melengkung", "tiada"],
      ["Garis sempadan bagi y < x + 1 dilukis sebagai garis…", "putus-putus", "penuh", "tebal", "tiada"]
    ],
    g: [
      () => { const m = r(-3, 3), c = r(-5, 5), x = r(-4, 4), y = r(-8, 8); const holds = y > m * x + c; return from(`Adakah titik (${N(x)}, ${N(y)}) memuaskan y > ${lin(m || 1, c)}${m ? "" : ""}?`.replace(lin(m || 1, c), m ? lin(m, c) : (c ? N(c) : "0")), holds ? "Ya" : "Tidak", [holds ? "Tidak" : "Ya", "Hanya jika x = 0", "Tidak dapat ditentukan"]); }
    ] },
  { t: "Graf Gerakan",
    q: [
      ["Kecerunan graf jarak-masa mewakili…", "laju", "pecutan", "jarak", "masa"],
      ["Kecerunan graf laju-masa mewakili…", "pecutan", "laju", "jarak", "sesaran"],
      ["Luas di bawah graf laju-masa mewakili…", "jarak yang dilalui", "pecutan", "laju purata", "masa"],
      ["Garis mengufuk pada graf jarak-masa bermaksud objek…", "pegun", "bergerak laju", "memecut", "berpatah balik"],
      ["Garis mengufuk pada graf laju-masa bermaksud objek bergerak dengan…", "laju seragam", "pecutan", "nyahpecutan", "laju sifar sahaja"]
    ],
    g: [
      () => { const v = r(2, 20), t = r(2, 10); return q(`Graf laju-masa: laju seragam ${v} m/s selama ${t} s. Jarak yang dilalui ialah…`, v * t, [v, t, 2], false, "Luas segi empat tepat", x => x + " m"); },
      () => { const v = r(4, 30), t = r(2, 10) * 2; return q(`Graf laju-masa: laju bertambah seragam dari 0 ke ${v} m/s dalam ${t} s. Jarak yang dilalui ialah…`, v * t / 2, [v * t / 2, v, t], false, "Luas segi tiga = ½ × tapak × tinggi", x => x + " m"); },
      () => { const d = r(20, 300), t = r(2, 10); if (d % t) return null; return q(`Graf jarak-masa: objek bergerak ${d} m dalam ${t} s. Lajunya ialah…`, d / t, [1, 2, t], false, "", x => x + " m/s"); }
    ] },
  { t: "Sukatan Serakan Data Tak Terkumpul",
    q: [
      ["Julat = ?", "nilai terbesar − nilai terkecil", "kuartil ketiga − kuartil pertama", "min − median", "nilai terbesar + nilai terkecil"],
      ["Julat antara kuartil = ?", "Q₃ − Q₁", "Q₂ − Q₁", "Q₃ + Q₁", "nilai terbesar − nilai terkecil"],
      ["Sisihan piawai ialah punca kuasa dua bagi…", "varians", "julat", "min", "median"],
      ["Plot kotak menunjukkan nilai minimum, Q₁, median, Q₃ dan…", "nilai maksimum", "mod", "min", "varians"]
    ],
    g: [
      () => { const xs = Array.from({ length: 7 }, () => r(10, 90)); return q(`Julat bagi data:\n${xs.join(", ")}`, Math.max(...xs) - Math.min(...xs), [1, 5, 10]); },
      () => { const xs = shuffle([...new Set(Array.from({ length: 15 }, () => r(1, 60)))]).slice(0, 7); if (xs.length < 7) return null; const s = xs.slice().sort((a, b) => a - b); return q(`Julat antara kuartil bagi data:\n${xs.join(", ")}`, s[5] - s[1], [1, 2, 5], false, `Susun: ${s.join(", ")}. Q₁ = ${s[1]}, Q₃ = ${s[5]}.`); }
    ] },
  { t: "Kebarangkalian Peristiwa Bergabung",
    q: [
      ["Dua peristiwa tak bersandar bermaksud…", "kejadian satu peristiwa tidak mempengaruhi yang lain", "berlaku serentak sahaja", "mustahil berlaku", "pasti berlaku"],
      ["Bagi peristiwa saling eksklusif, P(A ∩ B) = ?", "0", "1", "P(A) × P(B)", "P(A) + P(B)"],
      ["Bagi peristiwa tak bersandar, P(A ∩ B) = ?", "P(A) × P(B)", "P(A) + P(B)", "0", "1"]
    ],
    g: [
      () => { return from("🪙🪙|Dua syiling dilambung. Kebarangkalian mendapat dua \"kepala\" ialah…", "1/4", ["1/2", "3/4", "1/3", "1/8"]); },
      () => { const k = r(1, 6); return fromF(`🎲🎲|Dua dadu dilambung. Kebarangkalian kedua-duanya menunjukkan nombor ${k} ialah…`, "1/36", ["1/6", "1/12", "2/36", "1/18"], () => `1/${r(2, 40)}`); },
      () => { const a = r(1, 9), b = r(1, 9); return fromF(`P(A) = ${a}/10 dan P(B) = ${b}/10. A dan B tak bersandar. Cari P(A ∩ B).`, frac(a * b, 100), [frac(a + b, 10), frac(a * b, 10), frac(a, 10)], () => frac(r(1, 99), 100)); }
    ] },
  { t: "Matematik Pengguna: Pengurusan Kewangan",
    q: [
      ["Langkah pertama dalam proses pengurusan kewangan ialah…", "menetapkan matlamat kewangan", "berbelanja", "meminjam", "melabur tanpa rancangan"],
      ["Matlamat kewangan SMART bermaksud spesifik, boleh diukur, boleh dicapai, realistik dan…", "mempunyai tempoh masa", "mahal", "rahsia", "mudah sahaja"],
      ["Perbelanjaan tetap contohnya…", "sewa rumah dan ansuran kereta", "makan di restoran", "membeli hadiah", "hiburan"],
      ["Perbelanjaan tidak tetap contohnya…", "bil elektrik dan makanan", "sewa rumah", "ansuran pinjaman", "premium insurans"],
      ["Aliran tunai positif bermaksud…", "pendapatan melebihi perbelanjaan", "perbelanjaan melebihi pendapatan", "tiada pendapatan", "berhutang"]
    ],
    g: [
      () => { const inc = r(25, 60) * 100, fx = r(8, 20) * 100, vx = r(5, 15) * 100; const cf = inc - fx - vx; return qi(`💼|Pendapatan bulanan RM${fmt(inc)}. Perbelanjaan tetap RM${fmt(fx)} dan tidak tetap RM${fmt(vx)}. Aliran tunai bulanan (RM) ialah…`, cf, [100, 200, 500]); },
      () => { const goal = r(3, 12) * 1000, m = pick([6, 10, 12, 20, 24]); if (goal % m) return null; return q(`🎯|Ali mahu menyimpan RM${fmt(goal)} dalam ${m} bulan. Berapakah simpanan setiap bulan?`, goal / m, [10, 50, 100], false, "", rm); }
    ] }
],

/* ======================= MATEMATIK TAMBAHAN (KSSM T4) ======================= */
addmath: [
  { t: "Fungsi",
    q: [
      ["Fungsi gubahan fg(x) bermaksud…", "f(g(x))", "g(f(x))", "f(x) × g(x)", "f(x) + g(x)"],
      ["Fungsi songsang f⁻¹ wujud jika f ialah fungsi…", "satu dengan satu", "banyak dengan satu", "malar", "kuadratik sahaja"],
      ["Jika f(x) = x + 3, maka f⁻¹(x) = ?", "x − 3", "x + 3", "3x", "x/3"]
    ],
    g: [
      () => { const a = nz(-4, 4), b = r(-6, 6), c = nz(-3, 3), d = r(-5, 5), x = r(-3, 3); const gx = c * x + d; return qi(`f(x) = ${lin(a, b)}, g(x) = ${lin(c, d)}. Cari fg(${N(x)}).`, a * gx + b, [1, a, 2]); },
      () => { const a = pick([2, 3, 4, 5]), b = r(-9, 9), y = r(-10, 15); if ((y - b) % a) return null; return qi(`f(x) = ${lin(a, b)}. Cari f⁻¹(${N(y)}).`, (y - b) / a, [1, 2, a], "f⁻¹(y) = (y − b) ÷ a"); },
      () => { const a = nz(-3, 3), b = r(-5, 5), x = r(-4, 4); return qi(`f(x) = x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}, g(x) = ${lin(a, 0)}. Cari gf(${N(x)}).`, a * (x * x + b), [1, a, 2]); }
    ] },
  { t: "Fungsi Kuadratik",
    q: [
      ["Jika b² − 4ac > 0, persamaan kuadratik mempunyai…", "dua punca nyata yang berbeza", "dua punca sama", "tiada punca nyata", "satu punca kompleks"],
      ["Jika b² − 4ac = 0, persamaan kuadratik mempunyai…", "dua punca nyata yang sama", "dua punca berbeza", "tiada punca nyata", "tiga punca"],
      ["Jika b² − 4ac < 0, persamaan kuadratik mempunyai…", "tiada punca nyata", "dua punca berbeza", "dua punca sama", "satu punca"],
      ["Bentuk verteks fungsi kuadratik ialah…", "f(x) = a(x − h)² + k", "f(x) = ax + b", "f(x) = ax² + bx + c", "f(x) = (x − p)(x − q)"]
    ],
    g: [
      () => { const a = nz(-3, 3), b = r(-8, 8), c = r(-8, 8); const D = b * b - 4 * a * c; const right = D > 0 ? "dua punca nyata yang berbeza" : D === 0 ? "dua punca nyata yang sama" : "tiada punca nyata"; return from(`Jenis punca bagi ${a === 1 ? "" : a === -1 ? "−" : N(a)}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} = 0 ialah…`, right, ["dua punca nyata yang berbeza", "dua punca nyata yang sama", "tiada punca nyata", "tiga punca nyata"], `b² − 4ac = ${N(D)}`); },
      () => { const h = r(-6, 6), k = r(-9, 9), a = pick([1, 2, -1, -2]); const right = `(${N(h)}, ${N(k)})`; return fromF(`Titik ${a > 0 ? "minimum" : "maksimum"} bagi f(x) = ${a === 1 ? "" : a === -1 ? "−" : N(a)}(x ${h < 0 ? "+" : "−"} ${Math.abs(h)})² ${k < 0 ? "−" : "+"} ${Math.abs(k)} ialah…`, right, [`(${N(-h)}, ${N(k)})`, `(${N(h)}, ${N(-k)})`, `(${N(k)}, ${N(h)})`], () => `(${N(r(-9, 9))}, ${N(r(-9, 9))})`); },
      () => { const p = nz(-6, 6), q2 = nz(-6, 6); return qi(`Hasil tambah punca bagi x² ${-(p + q2) < 0 ? "−" : "+"} ${Math.abs(p + q2)}x ${p * q2 < 0 ? "−" : "+"} ${Math.abs(p * q2)} = 0 ialah…`, p + q2, [1, 2, 2 * Math.abs(p + q2) || 4], "Hasil tambah punca = −b/a"); }
    ] },
  { t: "Sistem Persamaan",
    q: [
      ["Sistem persamaan linear dalam tiga pemboleh ubah boleh diselesaikan dengan kaedah…", "penghapusan atau penggantian", "pemfaktoran sahaja", "melukis bulatan", "teorem Pythagoras"],
      ["Persamaan serentak satu linear dan satu tak linear biasanya diselesaikan dengan kaedah…", "penggantian", "penghapusan sahaja", "graf garis lurus", "kuasa dua sempurna sahaja"]
    ],
    g: [
      () => { const x = r(-6, 8), y = r(-6, 8), a = nz(1, 4), b = nz(1, 4), c = nz(1, 4), d = nz(-4, 4); if (a * d - b * c === 0) return null; const e1 = a * x + b * y, e2 = c * x + d * y; const right = `x = ${N(x)}, y = ${N(y)}`; return fromF(`Selesaikan:\n${lin(a, 0)} + ${lin(b, 0, "y")} = ${N(e1)}\n${lin(c, 0)} ${d < 0 ? "−" : "+"} ${Math.abs(d) === 1 ? "" : Math.abs(d)}y = ${N(e2)}`, right, [`x = ${N(y)}, y = ${N(x)}`, `x = ${N(x + 1)}, y = ${N(y)}`, `x = ${N(x)}, y = ${N(y - 1)}`], () => `x = ${N(r(-6, 8))}, y = ${N(r(-6, 8))}`); }
    ] },
  { t: "Indeks, Surd dan Logaritma",
    q: [
      ["logₐ 1 = ?", "0", "1", "a", "tidak tertakrif"],
      ["logₐ a = ?", "1", "0", "a", "a²"],
      ["logₐ (xy) = ?", "logₐ x + logₐ y", "logₐ x × logₐ y", "logₐ x − logₐ y", "x logₐ y"],
      ["logₐ xⁿ = ?", "n logₐ x", "logₐ n + x", "xⁿ logₐ", "(logₐ x)ⁿ"],
      ["√2 × √8 = ?", "4", "√10", "16", "2√2"]
    ],
    g: [
      () => { const b = pick([2, 3, 5, 10]), n = r(1, b === 2 ? 7 : 4); return qi(`log${sub(b)} ${fmt(b ** n)} = ?`, n, [1, 2, b]); },
      () => { const b = pick([2, 3, 4, 5]), n = r(2, 4); return q(`Jika log${sub(b)} x = ${n}, cari x.`, b ** n, [b, n, b * n]); },
      () => { const a = pick([2, 3, 5, 6, 7]), k = r(2, 6); const right = `${k}√${a}`; return fromF(`Permudahkan: √${k * k * a}`, right, [`${a}√${k}`, `${k * a}`, `${k * k}√${a}`], () => `${r(2, 9)}√${a}`); }
    ] },
  { t: "Janjang",
    q: [
      ["Janjang aritmetik mempunyai…", "beza sepunya yang tetap", "nisbah sepunya yang tetap", "sebutan yang sama", "sebutan rawak"],
      ["Janjang geometri mempunyai…", "nisbah sepunya yang tetap", "beza sepunya yang tetap", "sebutan menurun sahaja", "beza sifar"],
      ["Hasil tambah hingga ketakterhinggaan bagi janjang geometri wujud jika…", "|r| < 1", "r > 1", "r = 1", "r < −1"]
    ],
    g: [
      () => { const a = r(-10, 20), d = nz(-6, 6), n = r(5, 20); return qi(`Janjang aritmetik: a = ${N(a)}, d = ${N(d)}. Cari sebutan ke-${n}.`, a + (n - 1) * d, [d, 1, a || 3], "Tₙ = a + (n − 1)d"); },
      () => { const a = r(1, 10), d = r(1, 6), n = r(5, 15); return q(`Hasil tambah ${n} sebutan pertama janjang aritmetik ${a}, ${a + d}, ${a + 2 * d}, … ialah…`, n * (2 * a + (n - 1) * d) / 2, [d, a, n], false, "Sₙ = n/2 [2a + (n − 1)d]"); },
      () => { const a = pick([1, 2, 3, 4, 5]), rr = pick([2, 3]), n = r(3, 6); return q(`Janjang geometri: a = ${a}, r = ${rr}. Cari sebutan ke-${n}.`, a * rr ** (n - 1), [a * rr ** (n - 2), a * rr ** n, rr], false, "Tₙ = arⁿ⁻¹"); },
      () => { const rr = pick([[1, 2], [1, 3], [1, 4], [2, 3], [3, 4]]), k = r(1, 6); const a = k * rr[1]; const S = a / (1 - rr[0] / rr[1]); return q(`Hasil tambah hingga ketakterhinggaan bagi janjang geometri dengan a = ${a} dan r = ${rr[0]}/${rr[1]} ialah…`, S, [a, k, 2], false, "S∞ = a ÷ (1 − r)"); }
    ] },
  { t: "Hukum Linear", q: [
    ["Hukum linear digunakan untuk menukar hubungan tak linear kepada bentuk…", "Y = mX + c", "y = ax²", "y = aˣ", "x² + y² = r²"],
    ["Bagi y = axⁿ, mengambil log memberi…", "log y = n log x + log a", "log y = a log x + n", "y = n log x", "log y = log a × n"],
    ["Dalam Y = mX + c, m mewakili…", "kecerunan garis lurus terbaik", "pintasan-Y", "nilai X", "pemalar a sahaja"],
    ["Garis lurus penyuaian terbaik dilukis supaya…", "titik-titik bertaburan seimbang di kedua-dua belah garis", "melalui semua titik", "melalui titik asalan sahaja", "mengufuk"],
    ["Bagi y = abˣ, plot yang sesuai ialah…", "log y melawan x", "y melawan x", "y melawan log x", "x melawan y²"]
  ]},
  { t: "Geometri Koordinat",
    q: [
      ["Dua garis serenjang mempunyai hasil darab kecerunan…", "−1", "1", "0", "tidak tertakrif"],
      ["Dua garis selari mempunyai kecerunan yang…", "sama", "hasil darab −1", "bertentangan", "sifar"]
    ],
    g: [
      () => { const m = pick([-4, -3, -2, -1, 1, 2, 3, 4, 5]); return fromF(`Kecerunan garis yang serenjang dengan garis berkecerunan ${N(m)} ialah…`, frac(-1, m), [N(m), N(-m), frac(1, m)], () => frac(nz(-5, 5), r(1, 5))); },
      () => { const x1 = r(-6, 6), y1 = r(-6, 6), x2 = x1 + 3 * r(1, 3), y2 = y1 + 3 * r(-3, 3); const px = x1 + (x2 - x1) / 3, py = y1 + (y2 - y1) / 3; const right = `(${N(px)}, ${N(py)})`; return fromF(`Titik P membahagi tembereng garis dari A(${N(x1)}, ${N(y1)}) ke B(${N(x2)}, ${N(y2)}) dengan nisbah 1 : 2. Koordinat P ialah…`, right, [`(${N((x1 + x2) / 2)}, ${N((y1 + y2) / 2)})`, `(${N(x1 + 2 * (x2 - x1) / 3)}, ${N(y1 + 2 * (y2 - y1) / 3)})`, `(${N(px + 1)}, ${N(py)})`], () => `(${N(r(-8, 8))}, ${N(r(-8, 8))})`, "Rumus pembahagi tembereng garis"); },
      () => { const [a, b, c] = pick(TRIPLE), x1 = r(-5, 5), y1 = r(-5, 5); return q(`Jarak antara A(${N(x1)}, ${N(y1)}) dan B(${N(x1 + a)}, ${N(y1 - b)}) ialah…`, c, [1, 2, a], false, "", x => x + " unit"); }
    ] },
  { t: "Vektor",
    q: [
      ["Vektor mempunyai magnitud dan…", "arah", "warna", "jisim", "suhu"],
      ["Kuantiti skalar hanya mempunyai…", "magnitud", "arah", "magnitud dan arah", "unit vektor"],
      ["Vektor unit mempunyai magnitud…", "1", "0", "2", "tidak tetap"],
      ["Dua vektor selari jika satu vektor ialah ___ vektor yang lain.", "gandaan skalar", "songsangan sahaja", "kuasa dua", "punca kuasa dua"]
    ],
    g: [
      () => { const [a, b, c] = pick(TRIPLE), sa = pick([1, -1]), sb = pick([1, -1]); return q(`Magnitud vektor ${N(sa * a)}i ${sb < 0 ? "−" : "+"} ${b}j ialah…`, c, [1, 2, a], false, "|v| = √(x² + y²)", x => x + " unit"); },
      () => { const a = r(-6, 6), b = r(-6, 6), c = r(-6, 6), d = r(-6, 6); const right = `${N(a + c)}i ${b + d < 0 ? "−" : "+"} ${Math.abs(b + d)}j`; return fromF(`(${N(a)}i ${b < 0 ? "−" : "+"} ${Math.abs(b)}j) + (${N(c)}i ${d < 0 ? "−" : "+"} ${Math.abs(d)}j) = ?`, right, [`${N(a - c)}i ${b - d < 0 ? "−" : "+"} ${Math.abs(b - d)}j`, `${N(a + c)}i ${b - d < 0 ? "−" : "+"} ${Math.abs(b - d)}j`, `${N(a * c)}i ${b * d < 0 ? "−" : "+"} ${Math.abs(b * d)}j`], () => `${N(r(-9, 9))}i + ${r(0, 9)}j`); }
    ] },
  { t: "Penyelesaian Segi Tiga",
    q: [
      ["Petua sinus: a/sin A = ?", "b/sin B", "b/cos B", "sin B/b", "a/cos A"],
      ["Petua kosinus: a² = ?", "b² + c² − 2bc kos A", "b² + c² + 2bc kos A", "b² − c²", "2bc sin A"],
      ["Luas segi tiga = ?", "½ ab sin C", "ab sin C", "½ ab kos C", "a + b + c"],
      ["Kes berambiguiti berlaku apabila diberi…", "dua sisi dan satu sudut bukan kandungan", "tiga sisi", "dua sudut dan satu sisi", "tiga sudut"]
    ],
    g: [
      () => { const a = r(2, 12) * 2, b = r(2, 15); return q(`Luas segi tiga dengan a = ${a} cm, b = ${b} cm dan sudut C = 30° ialah…`, a * b / 4, [a * b / 2, a * b, a + b], false, "½ab sin 30° = ¼ab", x => x + " cm²"); },
      () => { const a = r(2, 12), b = r(2, 12); return q(`Segi tiga dengan a = ${a} cm, b = ${b} cm dan C = 90°. Panjang c² ialah…`, a * a + b * b, [2 * a * b, a + b, 1], false, "kos 90° = 0, jadi c² = a² + b²", x => x + " cm²"); }
    ] },
  { t: "Nombor Indeks",
    q: [
      ["Nombor indeks digunakan untuk menunjukkan…", "perubahan kuantiti berbanding tahun asas", "jumlah penduduk", "jarak", "suhu"],
      ["Nombor indeks bagi tahun asas ialah…", "100", "0", "1", "10"],
      ["Indeks gubahan ialah…", "purata berpemberat bagi beberapa nombor indeks", "julat indeks", "indeks tunggal", "indeks tahun asas"]
    ],
    g: [
      () => { const q0 = r(2, 20) * 5, k = pick([80, 90, 110, 120, 125, 150, 160, 200]); const q1 = q0 * k / 100; if (!Number.isInteger(q1 * 100)) return null; return q(`Harga sebuah barang pada tahun asas RM${q0} dan pada tahun semasa RM${q1}. Nombor indeksnya ialah…`, k, [5, 10, 20], false, "I = (Q₁ ÷ Q₀) × 100"); },
      () => { const I = pick([110, 120, 125, 150, 140]), q0 = r(2, 20) * 10; return q(`Nombor indeks harga ialah ${I} dan harga pada tahun asas RM${q0}. Harga pada tahun semasa ialah…`, q0 * I / 100, [10, 5, q0 / 10], false, "", rm); }
    ] }
],

/* ======================= SAINS (KSSM T4) ======================= */
sains: [
  { t: "Langkah Keselamatan dalam Makmal", q: [
    ["Alat yang digunakan untuk memadam kebakaran kecil di makmal ialah…", "alat pemadam api", "bikar", "tabung uji", "silinder penyukat"],
    ["Kebuk wasap digunakan ketika mengendalikan bahan yang…", "mengeluarkan gas berbahaya", "tidak berbau", "pepejal sahaja", "air paip"],
    ["Bahan kimia yang tertumpah ke kulit perlu…", "dibilas dengan air yang banyak", "dibiarkan", "disapu dengan kain kering sahaja", "ditutup dengan plaster"],
    ["Sisa kimia di makmal perlu dibuang…", "mengikut arahan guru dan peraturan", "ke dalam sinki terus", "ke dalam tong sampah biasa", "di luar makmal"],
    ["Alat pemadam api jenis CO₂ sesuai untuk kebakaran melibatkan…", "peralatan elektrik", "kertas sahaja", "kayu sahaja", "kain sahaja"],
    ["Simbol bahaya bergambar api bermaksud bahan…", "mudah terbakar", "toksik", "menghakis", "radioaktif"]
  ]},
  { t: "Pertolongan Cemas", q: [
    ["CPR bermaksud…", "resusitasi kardiopulmonari", "rawatan patah tulang", "membalut luka", "ubat batuk"],
    ["Langkah pertama sebelum membantu mangsa ialah…", "memastikan kawasan selamat", "memberi ubat", "menggerakkan mangsa", "memberi minuman"],
    ["Manuver Heimlich digunakan untuk membantu mangsa yang…", "tercekik", "pengsan kerana panas", "patah kaki", "luka kecil"],
    ["Nombor kecemasan di Malaysia ialah…", "999", "911", "112 sahaja", "100"],
    ["Luka berdarah perlu ditekan dengan…", "kain bersih", "tangan kotor", "tanah", "daun"],
    ["Mangsa yang terkena renjatan elektrik tidak boleh disentuh sebelum…", "bekalan elektrik dimatikan", "dipanggil namanya", "diberi air", "didudukkan"]
  ]},
  { t: "Teknik Mengukur Parameter Kesihatan Badan", q: [
    ["BMI dikira dengan…", "jisim (kg) ÷ tinggi² (m²)", "tinggi ÷ jisim", "jisim × tinggi", "umur ÷ jisim"],
    ["Bacaan tekanan darah normal bagi orang dewasa ialah lebih kurang…", "120/80 mmHg", "200/150 mmHg", "60/40 mmHg", "160/120 mmHg"],
    ["Alat untuk mengukur tekanan darah ialah…", "sfigmomanometer", "termometer", "stetoskop sahaja", "glukometer"],
    ["Alat untuk mengukur aras glukosa dalam darah ialah…", "glukometer", "termometer", "sfigmomanometer", "barometer"],
    ["Kadar denyutan nadi normal semasa rehat ialah lebih kurang…", "60–100 denyutan seminit", "10–20 denyutan seminit", "150–200 denyutan seminit", "1–5 denyutan seminit"],
    ["BMI antara 18.5 dan 24.9 dikategorikan sebagai…", "normal", "kurang berat badan", "obes", "berlebihan berat badan"]
  ]},
  { t: "Teknologi Hijau untuk Kelestarian Alam Sekitar", q: [
    ["Teknologi hijau bertujuan untuk…", "mengurangkan kesan buruk terhadap alam sekitar", "menambah pencemaran", "membazir tenaga", "menghapuskan hutan"],
    ["Contoh sumber tenaga boleh baharu ialah…", "solar dan angin", "arang batu", "petroleum", "gas asli"],
    ["Rawatan sisa kumbahan bertujuan untuk…", "mengelakkan pencemaran air", "menambah sisa", "mencemarkan sungai", "menghasilkan plastik"],
    ["Biogas dihasilkan melalui penguraian bahan organik secara…", "anaerobik", "aerobik sahaja", "pembakaran", "penyejatan"],
    ["Penggunaan beg kain berbanding beg plastik membantu…", "mengurangkan sisa plastik", "menambah sisa", "mencemar laut", "menambah pembakaran"]
  ]},
  { t: "Genetik", q: [
    ["Unit asas pewarisan ialah…", "gen", "sel darah", "protein", "kromosom seks sahaja"],
    ["Gen terletak pada…", "kromosom", "sitoplasma", "membran sel", "ribosom"],
    ["Bilangan kromosom dalam sel badan manusia ialah…", "46", "23", "44", "48"],
    ["Bilangan kromosom dalam gamet manusia ialah…", "23", "46", "22", "92"],
    ["Pembahagian sel yang menghasilkan gamet ialah…", "meiosis", "mitosis", "pembelahan dedua", "pertunasan"],
    ["Alel dominan ditandakan dengan huruf…", "besar", "kecil", "nombor", "simbol"],
    ["Kromosom seks bagi lelaki ialah…", "XY", "XX", "YY", "XO"],
    ["Mutasi ialah…", "perubahan pada bahan genetik", "pembiakan biasa", "pertumbuhan normal", "pencernaan"]
  ]},
  { t: "Sokongan, Pergerakan dan Pertumbuhan", q: [
    ["Rangka manusia dewasa mempunyai lebih kurang ___ tulang.", "206", "300", "106", "256"],
    ["Sendi pada siku ialah sendi…", "engsel", "lesung", "geluncur", "pusingan"],
    ["Sendi pada bahu ialah sendi…", "lesung", "engsel", "tetap", "geluncur"],
    ["Tisu yang menghubungkan otot dengan tulang ialah…", "tendon", "ligamen", "rawan", "saraf"],
    ["Tisu yang menghubungkan tulang dengan tulang ialah…", "ligamen", "tendon", "otot", "kulit"],
    ["Osteoporosis ialah keadaan di mana tulang menjadi…", "rapuh", "lebih kuat", "lebih panjang", "lebih tebal"]
  ]},
  { t: "Koordinasi Badan", q: [
    ["Sistem yang mengawal koordinasi badan melalui hormon ialah sistem…", "endokrin", "saraf", "pencernaan", "rangka"],
    ["Hormon insulin dirembes oleh…", "pankreas", "tiroid", "adrenal", "pituitari"],
    ["Insulin berfungsi untuk…", "merendahkan aras glukosa darah", "menaikkan suhu badan", "menambah tinggi", "menghasilkan air liur"],
    ["Kelenjar yang digelar \"kelenjar induk\" ialah…", "pituitari", "tiroid", "pankreas", "adrenal"],
    ["Hormon adrenalina dirembes ketika…", "keadaan cemas atau takut", "tidur", "makan", "membaca"],
    ["Penyalahgunaan dadah boleh merosakkan sistem…", "saraf", "rangka sahaja", "pencernaan sahaja", "kulit sahaja"]
  ]},
  { t: "Unsur dan Bahan", q: [
    ["Jadual Berkala moden disusun mengikut tertib menaik…", "nombor proton", "jisim", "nombor nukleon", "takat lebur"],
    ["Unsur dalam Kumpulan 18 dipanggil…", "gas adi", "logam alkali", "halogen", "logam peralihan"],
    ["Unsur dalam Kumpulan 1 dipanggil…", "logam alkali", "halogen", "gas adi", "metaloid"],
    ["Unsur dalam Kumpulan 17 dipanggil…", "halogen", "gas adi", "logam alkali", "logam peralihan"],
    ["Gas adi tidak reaktif kerana…", "mempunyai susunan elektron yang stabil", "terlalu berat", "berwarna", "cecair"],
    ["Contoh metaloid ialah…", "silikon", "natrium", "klorin", "helium"]
  ]},
  { t: "Bahan Kimia dalam Perindustrian", q: [
    ["Aloi ialah campuran logam dengan…", "logam atau unsur lain", "air", "plastik", "kaca sahaja"],
    ["Gangsa ialah aloi kuprum dan…", "timah", "zink", "besi", "emas"],
    ["Loyang ialah aloi kuprum dan…", "zink", "timah", "aluminium", "nikel"],
    ["Keluli ialah aloi besi dan…", "karbon", "kuprum", "timah", "plumbum"],
    ["Polimer ialah molekul besar yang terdiri daripada banyak…", "monomer", "atom tunggal", "ion", "aloi"],
    ["Contoh polimer semula jadi ialah…", "getah asli", "polietena", "PVC", "nilon"]
  ]},
  { t: "Bahan Kimia dalam Perubatan dan Kesihatan", q: [
    ["Antibiotik digunakan untuk merawat jangkitan…", "bakteria", "virus", "kulat sahaja", "alahan"],
    ["Analgesik digunakan untuk…", "melegakan kesakitan", "membunuh bakteria", "merawat jangkitan kulat", "menambah tenaga"],
    ["Ubat tradisional berasal daripada…", "tumbuhan dan haiwan", "plastik", "logam", "kaca"],
    ["Antibiotik mesti dihabiskan mengikut preskripsi supaya…", "bakteria tidak menjadi rintang", "cepat habis", "lebih murah", "tidak membazir sahaja"],
    ["Bahan aditif makanan seperti pengawet digunakan untuk…", "memanjangkan hayat makanan", "menambah berat", "mengubah warna sahaja", "menambah lemak"],
    ["Kosmetik yang tidak berdaftar mungkin mengandungi…", "bahan berbahaya seperti merkuri", "air sahaja", "vitamin C", "sabun biasa"]
  ]},
  { t: "Daya dan Gerakan", q: [
    ["Hukum Gerakan Newton Pertama dikenali sebagai hukum…", "inersia", "momentum", "tindakan-tindak balas", "graviti"],
    ["Momentum = ?", "jisim × halaju", "jisim × pecutan", "daya × masa", "jisim ÷ halaju"],
    ["Daya = ?", "jisim × pecutan", "jisim × halaju", "jarak ÷ masa", "kerja ÷ masa"],
    ["Tali pinggang keledar membantu mengurangkan kecederaan akibat…", "inersia", "geseran", "graviti", "tekanan udara"],
    ["Hukum Newton Ketiga menyatakan setiap tindakan ada…", "tindak balas yang sama magnitud dan bertentangan arah", "tindak balas yang lebih besar", "tiada tindak balas", "tindak balas yang sama arah"],
    ["Beg udara kereta mengurangkan kecederaan dengan…", "memanjangkan masa hentaman", "menambah daya", "menambah laju", "mengurangkan jisim"]
  ]},
  { t: "Tenaga Nuklear", q: [
    ["Pembelahan nukleus berat kepada nukleus lebih kecil dipanggil…", "pembelahan nukleus (fisi)", "pelakuran nukleus", "pereputan alfa", "ionisasi"],
    ["Pelakuran nukleus berlaku di dalam…", "Matahari", "reaktor nuklear biasa", "bateri", "lampu"],
    ["Bahan api dalam reaktor nuklear biasanya…", "uranium", "arang batu", "petrol", "air"],
    ["Rod kawalan dalam reaktor nuklear berfungsi untuk…", "menyerap neutron dan mengawal tindak balas", "menambah haba", "menyejukkan air", "menghasilkan uranium"],
    ["Kelebihan tenaga nuklear ialah…", "tidak membebaskan karbon dioksida semasa penjanaan", "tiada sisa", "sangat murah dibina", "tiada risiko"],
    ["Kelemahan tenaga nuklear ialah…", "sisa radioaktif yang sukar diurus", "menghasilkan banyak asap", "bergantung kepada angin", "hanya pada waktu siang"]
  ]}
],

/* ======================= FIZIK (KSSM T4) ======================= */
fizik: [
  { t: "Pengukuran",
    q: [
      ["Kuantiti asas ialah kuantiti yang…", "tidak boleh ditakrifkan dalam sebutan kuantiti lain", "diterbitkan daripada kuantiti lain", "tiada unit", "hanya untuk jisim"],
      ["Unit SI bagi masa ialah…", "saat (s)", "minit", "jam", "hari"],
      ["Unit SI bagi suhu ialah…", "kelvin (K)", "darjah Celsius", "Fahrenheit", "joule"],
      ["Contoh kuantiti terbitan ialah…", "halaju", "jisim", "panjang", "masa"],
      ["Unit bagi daya dalam sebutan unit asas ialah…", "kg m s⁻²", "kg m s⁻¹", "kg m²", "m s⁻²"],
      ["Kuantiti vektor mempunyai magnitud dan…", "arah", "warna", "suhu", "jisim"],
      ["Contoh kuantiti skalar ialah…", "jisim", "sesaran", "halaju", "daya"],
      ["Dalam graf garis lurus melalui asalan, y adalah ___ dengan x.", "berkadar terus", "berkadar songsang", "tidak berkaitan", "malar"]
    ] },
  { t: "Daya dan Gerakan I",
    q: [
      ["Sesaran ialah…", "jarak terpendek antara dua titik dalam arah tertentu", "jumlah jarak dilalui", "laju", "masa"],
      ["Inersia ialah sifat objek untuk…", "menentang perubahan keadaan gerakan", "memecut sendiri", "jatuh ke bawah", "menarik objek lain"],
      ["Objek berjisim lebih besar mempunyai inersia yang lebih…", "besar", "kecil", "sama", "sifar"],
      ["Prinsip keabadian momentum menyatakan jumlah momentum sebelum dan selepas perlanggaran adalah…", "sama", "bertambah", "berkurang", "sifar"],
      ["Impuls = ?", "daya × masa", "jisim × pecutan", "daya ÷ masa", "jisim × jarak"],
      ["Berat = ?", "jisim × pecutan graviti", "jisim ÷ graviti", "daya × masa", "isi padu × ketumpatan"]
    ],
    g: [
      () => { const u = r(0, 20), a = r(1, 6), t = r(2, 10); return q(`Objek dengan halaju awal ${u} m/s memecut ${a} m/s² selama ${t} s. Halaju akhir ialah…`, u + a * t, [a, t, 2], false, "v = u + at", x => x + " m/s"); },
      () => { const m = r(2, 50), a = r(1, 10); return q(`Daya yang diperlukan untuk memecutkan objek ${m} kg pada ${a} m/s² ialah…`, m * a, [m, a, 10], false, "F = ma", x => x + " N"); },
      () => { const m = r(1, 20), v = r(2, 30); return q(`Momentum objek berjisim ${m} kg yang bergerak ${v} m/s ialah…`, m * v, [m, v, 2], false, "p = mv", x => x + " kg m s⁻¹"); },
      () => { const m = r(2, 80); return q(`Berat objek berjisim ${m} kg di Bumi (g = 10 N/kg) ialah…`, m * 10, [m, 9.8, 1], false, "W = mg", x => x + " N"); }
    ] },
  { t: "Kegravitian",
    q: [
      ["Hukum Kegravitian Semesta dikemukakan oleh…", "Isaac Newton", "Johannes Kepler", "Galileo", "Einstein"],
      ["Daya graviti antara dua jasad berkadar songsang dengan…", "kuasa dua jarak antara pusat", "jarak", "jisim", "masa"],
      ["Pecutan graviti di permukaan Bumi ialah lebih kurang…", "9.81 m/s²", "1.6 m/s²", "100 m/s²", "0 m/s²"],
      ["Hukum Kepler Pertama menyatakan orbit planet berbentuk…", "elips", "bulatan sempurna", "garis lurus", "segi empat"],
      ["Satelit geopegun mengorbit Bumi dengan tempoh…", "24 jam", "12 jam", "1 jam", "365 hari"],
      ["Halaju lepas ialah halaju minimum untuk…", "terlepas daripada tarikan graviti", "mengorbit Bumi", "jatuh bebas", "terapung"],
      ["Jika jarak antara dua jasad digandakan, daya graviti menjadi…", "¼ daripada asal", "½ daripada asal", "2 kali", "4 kali"]
    ] },
  { t: "Haba",
    q: [
      ["Keseimbangan terma berlaku apabila dua objek…", "mempunyai suhu yang sama", "bersentuhan sahaja", "berbeza suhu", "panas"],
      ["Muatan haba tentu ialah haba yang diperlukan untuk menaikkan suhu ___ bahan sebanyak 1°C.", "1 kg", "1 g", "1 m³", "1 mol"],
      ["Haba pendam ialah haba yang diserap atau dibebaskan semasa…", "perubahan fasa tanpa perubahan suhu", "suhu meningkat", "suhu menurun", "pengembangan"],
      ["Hukum Boyle: bagi gas pada suhu malar, tekanan berkadar songsang dengan…", "isi padu", "suhu", "jisim", "ketumpatan"],
      ["Hukum Charles: pada tekanan malar, isi padu berkadar terus dengan…", "suhu mutlak", "tekanan", "jisim", "masa"],
      ["Air digunakan sebagai penyejuk enjin kerana mempunyai…", "muatan haba tentu yang tinggi", "takat didih rendah", "ketumpatan rendah", "warna jernih"]
    ],
    g: [
      () => { const m = r(1, 5), c = pick([4200, 900, 390]), d = r(5, 40); return q(`Haba yang diperlukan untuk memanaskan ${m} kg bahan (c = ${fmt(c)} J kg⁻¹ °C⁻¹) sebanyak ${d}°C ialah…`, m * c * d, [m * c, c * d, 1000], false, "Q = mcθ", x => fmt(x) + " J"); },
      () => { const P1 = r(1, 5) * 100, V1 = r(2, 10), k = pick([2, 4, 5]); return q(`Gas pada ${P1} kPa dengan isi padu ${V1 * k} cm³ dimampatkan kepada ${V1} cm³ (suhu malar). Tekanan baharu ialah…`, P1 * k, [P1, 100, P1 * k / 2], false, "P₁V₁ = P₂V₂", x => fmt(x) + " kPa"); }
    ] },
  { t: "Gelombang",
    q: [
      ["Gelombang melintang mempunyai getaran zarah yang ___ arah perambatan.", "berserenjang dengan", "selari dengan", "bertentangan dengan", "tiada kaitan dengan"],
      ["Gelombang bunyi ialah gelombang…", "membujur", "melintang", "elektromagnet", "permukaan sahaja"],
      ["Gelombang elektromagnet boleh merambat melalui…", "vakum", "pepejal sahaja", "cecair sahaja", "gas sahaja"],
      ["Pembelauan gelombang paling ketara apabila saiz celah ___ panjang gelombang.", "hampir sama dengan", "jauh lebih besar daripada", "jauh lebih kecil daripada", "sifar"],
      ["Gelombang EM dengan frekuensi tertinggi dalam senarai ini ialah…", "sinar gama", "gelombang radio", "gelombang mikro", "cahaya nampak"],
      ["Amplitud gelombang menentukan…", "tenaga atau kenyaringan", "frekuensi", "laju", "panjang gelombang"]
    ],
    g: [
      () => { const f = r(2, 50) * 10, lam = r(1, 10) / 10; const v = +(f * lam).toFixed(1); return q(`Gelombang berfrekuensi ${f} Hz dan panjang gelombang ${lam} m. Lajunya ialah…`, v, [10, 1, f / 10], true, "v = fλ", x => x + " m/s"); },
      () => { const T = pick([0.1, 0.2, 0.25, 0.5, 0.05]); return q(`Tempoh sebuah gelombang ialah ${T} s. Frekuensinya ialah…`, 1 / T, [1, 2, 5], false, "f = 1/T", x => x + " Hz"); }
    ] },
  { t: "Cahaya dan Optik",
    q: [
      ["Indeks biasan n = ?", "laju cahaya dalam vakum ÷ laju cahaya dalam medium", "sudut tuju × sudut biasan", "laju dalam medium ÷ laju dalam vakum", "sin r ÷ sin i"],
      ["Pantulan dalam penuh berlaku apabila sudut tuju ___ sudut genting.", "lebih besar daripada", "lebih kecil daripada", "sama dengan", "sifar"],
      ["Gentian optik menggunakan prinsip…", "pantulan dalam penuh", "pembiasan sahaja", "pembelauan", "penyerapan"],
      ["Kanta cembung juga dikenali sebagai kanta…", "penumpu", "pencapah", "satah", "cermin"],
      ["Kuasa kanta diukur dalam unit…", "diopter (D)", "meter", "watt", "joule"],
      ["Rabun jauh dibetulkan dengan kanta…", "cekung", "cembung", "silinder", "prisma"],
      ["Imej pada skrin wayang ialah imej…", "nyata, songsang dan diperbesar", "maya dan tegak", "maya dan kecil", "nyata dan sama saiz"]
    ],
    g: [
      () => { const f = pick([0.1, 0.2, 0.25, 0.5]); return q(`Kuasa kanta cembung dengan panjang fokus ${f} m ialah…`, 1 / f, [1, 2, 5], false, "P = 1/f", x => "+" + x + " D"); }
    ] }
],

/* ======================= KIMIA (KSSM T4) ======================= */
kimia: [
  { t: "Pengenalan kepada Kimia", q: [
    ["Kimia ialah kajian tentang…", "struktur, sifat dan perubahan bahan", "hidupan sahaja", "bintang", "sejarah"],
    ["Langkah pertama dalam kaedah saintifik ialah…", "mengenal pasti masalah", "membuat kesimpulan", "menulis laporan", "mengumpul data"],
    ["Pemboleh ubah yang ditetapkan supaya ujian adil ialah pemboleh ubah…", "dimalarkan", "dimanipulasikan", "bergerak balas", "bebas sahaja"],
    ["Contoh kerjaya berkaitan kimia ialah…", "ahli farmasi", "juruterbang", "pelukis", "atlet"],
    ["Peralatan perlindungan diri di makmal termasuk…", "kot makmal dan cermin mata keselamatan", "selipar", "baju sukan", "topi keledar motosikal"]
  ]},
  { t: "Jirim dan Struktur Atom",
    q: [
      ["Zarah subatom yang bercas positif ialah…", "proton", "elektron", "neutron", "ion"],
      ["Zarah subatom yang tidak bercas ialah…", "neutron", "proton", "elektron", "nukleus"],
      ["Nombor proton ialah bilangan…", "proton dalam nukleus", "neutron", "proton + neutron", "elektron valens"],
      ["Nombor nukleon ialah bilangan…", "proton + neutron", "proton sahaja", "elektron sahaja", "neutron sahaja"],
      ["Isotop ialah atom unsur yang sama dengan bilangan ___ yang berbeza.", "neutron", "proton", "elektron", "petala"],
      ["Susunan elektron bagi natrium (nombor proton 11) ialah…", "2.8.1", "2.9", "2.8.2", "8.2.1"],
      ["Model atom dengan elektron beredar dalam petala dikemukakan oleh…", "Niels Bohr", "Dalton", "Thomson", "Newton"]
    ],
    g: [
      () => { const els = [["C", 6, 12], ["N", 7, 14], ["O", 8, 16], ["Na", 11, 23], ["Mg", 12, 24], ["Al", 13, 27], ["Cl", 17, 35], ["K", 19, 39], ["Ca", 20, 40]]; const [s, p, a] = pick(els); return q(`Atom ${s} mempunyai nombor proton ${p} dan nombor nukleon ${a}. Bilangan neutronnya ialah…`, a - p, [1, 2, p], false, "Neutron = nombor nukleon − nombor proton"); },
      () => { const els = [[3, "2.1"], [6, "2.4"], [8, "2.6"], [10, "2.8"], [12, "2.8.2"], [13, "2.8.3"], [15, "2.8.5"], [17, "2.8.7"], [19, "2.8.8.1"], [20, "2.8.8.2"]]; const [p, ec] = pick(els); return from(`Susunan elektron bagi atom dengan nombor proton ${p} ialah…`, ec, els.map(e => e[1])); }
    ] },
  { t: "Konsep Mol, Formula dan Persamaan Kimia",
    q: [
      ["Pemalar Avogadro ialah…", "6.02 × 10²³ mol⁻¹", "6.02 × 10²³", "1.6 × 10⁻¹⁹", "22.4 dm³"],
      ["Isi padu molar gas pada STP ialah…", "22.4 dm³ mol⁻¹", "24 cm³", "1 dm³", "6.02 dm³"],
      ["Formula kimia bagi air ialah…", "H₂O", "HO₂", "H₂O₂", "OH"],
      ["Formula kimia bagi karbon dioksida ialah…", "CO₂", "CO", "C₂O", "CO₃"],
      ["Persamaan kimia yang seimbang mematuhi hukum…", "keabadian jisim", "Boyle", "Ohm", "Newton"]
    ],
    g: [
      () => { const ms = [["H₂O", 18], ["CO₂", 44], ["NaCl", 58.5], ["O₂", 32], ["NH₃", 17], ["CH₄", 16], ["MgO", 40], ["CaCO₃", 100]]; const [f, M] = pick(ms); return q(`Jisim molekul relatif ${f} ialah… (H = 1, C = 12, N = 14, O = 16, Na = 23, Mg = 24, Cl = 35.5, Ca = 40)`, M, [1, 2, 16], true, "", x => String(x)); },
      () => { const ms = [["H₂O", 18], ["CO₂", 44], ["O₂", 32], ["CH₄", 16], ["NaOH", 40], ["CaCO₃", 100]]; const [f, M] = pick(ms), n = pick([0.5, 1, 2, 3, 4, 5]); return q(`Jisim bagi ${n} mol ${f} ialah… (jisim molar = ${M} g mol⁻¹)`, n * M, [M, n, M / 2], true, "Jisim = mol × jisim molar", x => x + " g"); },
      () => { const n = pick([0.5, 1, 2, 3, 0.25]); return q(`Isi padu ${n} mol gas pada STP ialah…`, n * 22.4, [22.4, 1, 11.2], true, "V = n × 22.4 dm³", x => (Math.round(x * 10) / 10) + " dm³"); }
    ] },
  { t: "Jadual Berkala Unsur", q: [
    ["Unsur dalam Jadual Berkala disusun mengikut tertib menaik…", "nombor proton", "jisim atom", "nombor nukleon", "kereaktifan"],
    ["Kumpulan 1 dikenali sebagai…", "logam alkali", "halogen", "gas adi", "logam peralihan"],
    ["Kereaktifan logam Kumpulan 1 ___ apabila menuruni kumpulan.", "bertambah", "berkurang", "tidak berubah", "menjadi sifar"],
    ["Kereaktifan halogen ___ apabila menuruni Kumpulan 17.", "berkurang", "bertambah", "tidak berubah", "menjadi sifar"],
    ["Logam peralihan biasanya membentuk sebatian yang…", "berwarna", "tidak berwarna", "gas", "tidak larut sahaja"],
    ["Saiz atom ___ apabila merentasi Kala 3 dari kiri ke kanan.", "berkurang", "bertambah", "tidak berubah", "berganda"],
    ["Gas adi wujud sebagai…", "atom tunggal (monoatom)", "molekul dwiatom", "ion", "pepejal"]
  ]},
  { t: "Ikatan Kimia", q: [
    ["Ikatan ion terbentuk melalui…", "pemindahan elektron", "perkongsian elektron", "perkongsian proton", "pemindahan neutron"],
    ["Ikatan kovalen terbentuk melalui…", "perkongsian elektron", "pemindahan elektron", "daya graviti", "ikatan logam"],
    ["Natrium klorida ialah contoh sebatian…", "ion", "kovalen", "logam", "gas adi"],
    ["Air ialah contoh sebatian…", "kovalen", "ion", "logam", "aloi"],
    ["Sebatian ion biasanya mempunyai takat lebur yang…", "tinggi", "rendah", "sama dengan air", "sifar"],
    ["Sebatian ion boleh mengkonduksi elektrik dalam keadaan…", "leburan atau larutan akueus", "pepejal", "gas", "beku"],
    ["Ikatan hidrogen menyebabkan air mempunyai takat didih yang…", "tinggi luar biasa", "sangat rendah", "sama dengan gas", "negatif"]
  ]},
  { t: "Asid, Bes dan Garam",
    q: [
      ["Asid ialah bahan yang mengion dalam air menghasilkan ion…", "H⁺ (hidrogen)", "OH⁻", "Na⁺", "Cl⁻"],
      ["Alkali ialah bes yang larut dalam air menghasilkan ion…", "OH⁻ (hidroksida)", "H⁺", "Cl⁻", "SO₄²⁻"],
      ["Larutan dengan pH 7 adalah…", "neutral", "berasid", "beralkali", "pekat"],
      ["Asid kuat mengion ___ dalam air.", "secara lengkap", "separa", "tidak", "perlahan"],
      ["Peneutralan menghasilkan garam dan…", "air", "hidrogen", "oksigen", "karbon"],
      ["Asid + karbonat logam menghasilkan garam, air dan…", "karbon dioksida", "hidrogen", "oksigen", "nitrogen"],
      ["Asid + logam reaktif menghasilkan garam dan…", "hidrogen", "karbon dioksida", "air", "oksigen"]
    ],
    g: [
      () => { const e = r(1, 4); return q(`pH bagi larutan dengan kepekatan ion H⁺ = 1 × 10⁻${e === 1 ? "¹" : e === 2 ? "²" : e === 3 ? "³" : "⁴"} mol dm⁻³ ialah…`, e, [1, 2, 7]); }
    ] },
  { t: "Kadar Tindak Balas", q: [
    ["Kadar tindak balas meningkat apabila suhu…", "meningkat", "menurun", "tidak berubah", "menjadi sifar"],
    ["Mangkin berfungsi untuk…", "meningkatkan kadar tindak balas tanpa berubah secara kimia", "menambah hasil", "menghentikan tindak balas", "menurunkan suhu"],
    ["Serbuk zink bertindak balas lebih cepat daripada ketulan zink kerana…", "jumlah luas permukaan lebih besar", "jisim lebih kecil", "warna berbeza", "suhu lebih rendah"],
    ["Menurut teori perlanggaran, tindak balas berlaku apabila zarah berlanggar dengan…", "tenaga yang mencukupi dan orientasi betul", "sebarang tenaga", "tiada tenaga", "laju sahaja"],
    ["Tenaga minimum yang diperlukan untuk tindak balas berlaku dipanggil tenaga…", "pengaktifan", "kinetik", "keupayaan", "haba"],
    ["Makanan disimpan dalam peti sejuk untuk ___ kadar pereputan.", "melambatkan", "mempercepat", "menghentikan sepenuhnya", "tidak mengubah"]
  ]},
  { t: "Bahan Buatan dalam Industri", q: [
    ["Aloi lebih keras daripada logam tulen kerana…", "atom asing mengganggu susunan lapisan atom", "lebih berat", "lebih berkilat", "lebih murah"],
    ["Kaca soda kapur dihasilkan daripada pasir, natrium karbonat dan…", "batu kapur", "garam", "besi", "plastik"],
    ["Kaca borosilikat tahan…", "perubahan suhu mendadak", "pukulan sahaja", "air sahaja", "cahaya"],
    ["Seramik termaju digunakan dalam…", "cip komputer dan jubin pesawat angkasa", "pakaian", "makanan", "kertas"],
    ["Bahan komposit ialah gabungan dua atau lebih bahan dengan…", "sifat yang lebih baik", "sifat yang sama", "sifat yang lemah", "satu bahan sahaja"],
    ["Contoh bahan komposit ialah…", "konkrit bertetulang", "besi tulen", "air", "oksigen"]
  ]}
],

/* ======================= BIOLOGI (KSSM T4) ======================= */
bio: [
  { t: "Pengenalan kepada Biologi dan Peraturan Makmal", q: [
    ["Biologi ialah kajian tentang…", "benda hidup", "bintang dan planet", "bahan kimia sahaja", "batuan"],
    ["Bidang biologi yang mengkaji mikroorganisma ialah…", "mikrobiologi", "zoologi", "botani", "geologi"],
    ["Bidang biologi yang mengkaji tumbuhan ialah…", "botani", "zoologi", "anatomi", "ekologi"],
    ["Bidang biologi yang mengkaji haiwan ialah…", "zoologi", "botani", "virologi", "genetik"],
    ["Sisa biologi seperti kultur bakteria perlu dinyahkan dengan…", "autoklaf sebelum dibuang", "dibuang ke sinki", "dibakar di dalam makmal", "disimpan di dalam laci"],
    ["Langkah pertama kaedah saintifik selepas memerhati ialah…", "mengenal pasti masalah", "membuat kesimpulan", "menulis laporan", "mentafsir data"],
    ["Pemboleh ubah yang sengaja diubah dalam eksperimen ialah pemboleh ubah…", "dimanipulasikan", "bergerak balas", "dimalarkan", "tetap"]
  ]},
  { t: "Biologi Sel dan Organisasi Sel", q: [
    ["Organel yang menjalankan respirasi sel untuk menghasilkan tenaga ialah…", "mitokondrion", "ribosom", "vakuol", "kloroplas"],
    ["Organel tempat sintesis protein ialah…", "ribosom", "lisosom", "jasad Golgi", "nukleus"],
    ["Struktur yang terdapat dalam sel tumbuhan tetapi TIDAK dalam sel haiwan ialah…", "dinding sel", "membran plasma", "mitokondrion", "nukleus"],
    ["Kloroplas mengandungi pigmen…", "klorofil", "hemoglobin", "melanin", "karotena sahaja"],
    ["Organel yang mengandungi enzim hidrolitik untuk mencernakan bahan ialah…", "lisosom", "ribosom", "sentriol", "kloroplas"],
    ["Jasad Golgi berfungsi untuk…", "memproses, membungkus dan mengangkut protein", "fotosintesis", "menghasilkan tenaga", "menyimpan air"],
    ["Contoh organisma unisel ialah…", "Amoeba sp.", "ikan", "pokok mangga", "manusia"],
    ["Susunan organisasi sel yang betul ialah…", "sel → tisu → organ → sistem → organisma", "tisu → sel → organ → sistem", "organ → sel → tisu → sistem", "sistem → organ → tisu → sel"],
    ["Sel darah merah tidak mempunyai nukleus supaya…", "lebih banyak ruang untuk hemoglobin", "lebih berat", "boleh membahagi", "lebih kuat"]
  ]},
  { t: "Pergerakan Bahan Merentasi Membran Plasma", q: [
    ["Struktur membran plasma diterangkan oleh model…", "mozek bendalir", "kunci dan mangga", "atom Bohr", "heliks ganda dua"],
    ["Resapan ringkas ialah pergerakan molekul dari kawasan…", "kepekatan tinggi ke rendah", "kepekatan rendah ke tinggi", "bertenaga rendah ke tinggi", "gelap ke cerah"],
    ["Osmosis ialah resapan molekul… melalui membran separa telap.", "air", "glukosa", "protein", "kanji"],
    ["Pengangkutan aktif memerlukan…", "tenaga (ATP) dan protein pembawa", "tiada tenaga", "air sahaja", "cahaya"],
    ["Sel darah merah dalam larutan hipotonik akan…", "mengembang dan pecah (hemolisis)", "mengecut (krenasi)", "kekal sama", "bertukar warna"],
    ["Sel tumbuhan dalam larutan hipertonik mengalami…", "plasmolisis", "hemolisis", "segah", "pembahagian"],
    ["Larutan yang mempunyai kepekatan zat terlarut sama dengan sitoplasma dipanggil…", "isotonik", "hipotonik", "hipertonik", "neutral"],
    ["Ikan masin tahan lama kerana bakteria kehilangan air melalui…", "osmosis", "fotosintesis", "respirasi", "pencernaan"]
  ]},
  { t: "Komposisi Kimia dalam Sel", q: [
    ["Unsur utama dalam karbohidrat ialah…", "karbon, hidrogen dan oksigen", "karbon dan nitrogen sahaja", "natrium dan klorin", "besi dan zink"],
    ["Contoh monosakarida ialah…", "glukosa", "maltosa", "kanji", "selulosa"],
    ["Maltosa terbentuk daripada dua molekul…", "glukosa", "fruktosa", "galaktosa", "sukrosa"],
    ["Unit asas protein ialah…", "asid amino", "glukosa", "asid lemak", "nukleotida"],
    ["Lipid terdiri daripada gliserol dan…", "asid lemak", "asid amino", "glukosa", "nukleotida"],
    ["Unit asas asid nukleik (DNA) ialah…", "nukleotida", "asid amino", "gliserol", "monosakarida"],
    ["Ikatan yang menyambungkan dua asid amino ialah ikatan…", "peptida", "glikosidik", "ester", "hidrogen"],
    ["Air penting dalam sel kerana ia ialah…", "pelarut universal", "sumber tenaga utama", "enzim", "hormon"]
  ]},
  { t: "Metabolisme dan Enzim", q: [
    ["Metabolisme terdiri daripada anabolisme dan…", "katabolisme", "osmosis", "resapan", "fotosintesis"],
    ["Enzim ialah sejenis…", "protein", "lipid", "karbohidrat", "vitamin"],
    ["Enzim bertindak sebagai…", "mangkin biologi", "hormon", "sumber tenaga", "pelarut"],
    ["Model tindakan enzim yang menerangkan tapak aktif sepadan dengan substrat ialah…", "hipotesis kunci dan mangga", "model mozek bendalir", "teori atom", "hukum Hooke"],
    ["Enzim akan ternyahasli pada suhu…", "terlalu tinggi", "bilik", "rendah", "badan"],
    ["Pepsin berfungsi paling baik dalam keadaan…", "berasid", "beralkali", "neutral", "bergaram"],
    ["Amilase menghidrolisiskan kanji kepada…", "maltosa", "asid amino", "gliserol", "sukrosa"],
    ["Suhu optimum kebanyakan enzim dalam badan manusia ialah sekitar…", "37 °C", "0 °C", "60 °C", "100 °C"]
  ]},
  { t: "Pembahagian Sel", q: [
    ["Mitosis menghasilkan… sel anak yang serupa.", "2", "4", "1", "8"],
    ["Meiosis menghasilkan… sel anak.", "4", "2", "1", "6"],
    ["Meiosis berlaku untuk menghasilkan…", "gamet", "sel kulit", "sel tulang", "sel darah"],
    ["Bilangan kromosom sel anak hasil meiosis ialah…", "separuh (haploid)", "sama (diploid)", "dua kali ganda", "tiada"],
    ["Peringkat mitosis di mana kromosom tersusun di satah khatulistiwa ialah…", "metafasa", "profasa", "anafasa", "telofasa"],
    ["Pindah silang berlaku semasa…", "profasa I meiosis", "metafasa mitosis", "interfasa", "telofasa II"],
    ["Pembahagian sitoplasma dipanggil…", "sitokinesis", "kariokinesis", "interfasa", "replikasi"],
    ["Pembahagian sel yang tidak terkawal boleh menyebabkan…", "kanser", "anemia", "diabetes", "asma"]
  ]},
  { t: "Respirasi Sel", q: [
    ["Persamaan respirasi aerob: glukosa + oksigen → karbon dioksida + air + …", "tenaga", "kanji", "asid laktik", "etanol"],
    ["Respirasi anaerob dalam otot manusia menghasilkan…", "asid laktik", "etanol", "oksigen", "glukosa"],
    ["Penapaian oleh yis menghasilkan etanol dan…", "karbon dioksida", "oksigen", "asid laktik", "air"],
    ["Respirasi aerob berlaku di dalam…", "mitokondrion", "ribosom", "kloroplas", "nukleus"],
    ["Respirasi aerob menghasilkan tenaga yang… berbanding respirasi anaerob.", "lebih banyak", "lebih sedikit", "sama", "tiada"],
    ["Hutang oksigen berlaku selepas…", "senaman cergas", "tidur", "makan", "minum air"],
    ["Penapaian oleh yis digunakan dalam pembuatan…", "roti", "keju sahaja", "garam", "gula"]
  ]},
  { t: "Sistem Respirasi dalam Manusia dan Haiwan", q: [
    ["Struktur respirasi pada serangga ialah…", "sistem trakea", "insang", "peparu", "kulit sahaja"],
    ["Ikan bernafas menggunakan…", "insang", "peparu", "trakea", "spirakel"],
    ["Pertukaran gas dalam peparu manusia berlaku di…", "alveolus", "trakea", "bronkus", "laring"],
    ["Semasa menarik nafas, diafragma…", "mengecut dan mendatar", "mengendur dan melengkung ke atas", "tidak bergerak", "pecah"],
    ["Katak dewasa bernafas melalui peparu dan…", "kulit lembap", "insang", "trakea", "sisik"],
    ["Ciri alveolus yang membantu pertukaran gas ialah dindingnya…", "nipis satu sel", "tebal", "kering", "keras"],
    ["Oksigen diangkut dalam darah sebagai…", "oksihemoglobin", "karbaminohemoglobin", "glukosa", "plasma sahaja"],
    ["Penyakit peparu yang berkaitan dengan asap rokok ialah…", "emfisema", "rabies", "malaria", "denggi"]
  ]},
  { t: "Nutrisi dan Sistem Pencernaan Manusia", q: [
    ["Pencernaan kanji bermula di…", "mulut", "perut", "usus besar", "esofagus"],
    ["Pencernaan protein bermula di…", "perut", "mulut", "usus besar", "rektum"],
    ["Hempedu dihasilkan oleh… dan disimpan dalam pundi hempedu.", "hati", "pankreas", "perut", "limpa"],
    ["Hempedu membantu… lemak.", "mengemulsikan", "menyerap", "membakar", "menyimpan"],
    ["Penyerapan makanan tercerna berlaku di…", "usus kecil (vilus)", "perut", "esofagus", "usus besar"],
    ["Usus besar terutamanya menyerap…", "air", "glukosa", "asid amino", "protein"],
    ["Pengecutan otot esofagus yang menolak makanan dipanggil…", "peristalsis", "osmosis", "emulsi", "asimilasi"],
    ["Kekurangan vitamin C menyebabkan…", "skurvi", "rabun malam", "riket", "beri-beri"],
    ["Gizi seimbang mengandungi semua kelas makanan dalam…", "kuantiti yang betul", "jumlah berlebihan", "satu kelas sahaja", "bentuk minuman"]
  ]},
  { t: "Pengangkutan dalam Manusia dan Haiwan", q: [
    ["Sistem peredaran darah manusia ialah sistem…", "tertutup dan ganda dua", "terbuka", "tunggal", "tiada jantung"],
    ["Serangga mempunyai sistem peredaran…", "terbuka", "tertutup ganda dua", "tertutup tunggal", "tiada"],
    ["Ikan mempunyai sistem peredaran…", "tertutup tunggal", "terbuka", "ganda dua", "tiada"],
    ["Salur darah yang membawa darah keluar dari jantung ialah…", "arteri", "vena", "kapilari", "limfa"],
    ["Vena mempunyai… untuk mengelak darah mengalir balik.", "injap", "otot tebal", "dinding satu sel", "hemoglobin"],
    ["Sel darah yang membantu pembekuan darah ialah…", "platlet", "sel darah merah", "neutrofil", "limfosit"],
    ["Ruang jantung yang mengepam darah ke seluruh badan ialah…", "ventrikel kiri", "ventrikel kanan", "atrium kiri", "atrium kanan"],
    ["Bendalir yang kembali ke salur darah melalui sistem limfa ialah…", "bendalir tisu (limfa)", "air liur", "hempedu", "air kencing"]
  ]},
  { t: "Keimunan Manusia", q: [
    ["Barisan pertahanan pertama badan termasuk…", "kulit dan membran mukus", "antibodi", "limfosit", "vaksin"],
    ["Fagositosis dilakukan oleh…", "neutrofil dan monosit", "sel darah merah", "platlet", "sel saraf"],
    ["Antibodi dihasilkan oleh…", "limfosit", "neutrofil", "platlet", "eritrosit"],
    ["Imunisasi melalui suntikan vaksin memberi keimunan…", "aktif buatan", "pasif semula jadi", "aktif semula jadi", "pasif buatan"],
    ["Bayi mendapat antibodi melalui susu ibu. Ini ialah keimunan…", "pasif semula jadi", "aktif buatan", "aktif semula jadi", "pasif buatan"],
    ["Suntikan serum antibodi (antiserum) memberi keimunan…", "pasif buatan", "aktif buatan", "aktif semula jadi", "pasif semula jadi"],
    ["AIDS disebabkan oleh virus…", "HIV", "denggi", "influenza", "rabies"],
    ["Bahan asing yang merangsang penghasilan antibodi dipanggil…", "antigen", "enzim", "hormon", "vitamin"]
  ]},
  { t: "Koordinasi dan Gerak Balas dalam Manusia", q: [
    ["Unit asas sistem saraf ialah…", "neuron", "nefron", "alveolus", "vilus"],
    ["Neuron yang membawa impuls dari reseptor ke sistem saraf pusat ialah neuron…", "aferen (deria)", "eferen (motor)", "geganti", "otot"],
    ["Bahagian otak yang mengawal keseimbangan badan ialah…", "serebelum", "serebrum", "medula oblongata", "hipotalamus"],
    ["Medula oblongata mengawal…", "kadar denyutan jantung dan pernafasan", "pemikiran", "keseimbangan", "penglihatan"],
    ["Hormon insulin dirembeskan oleh…", "pankreas", "tiroid", "adrenal", "pituitari"],
    ["Hormon adrenalina dirembeskan semasa…", "kecemasan atau takut", "tidur", "makan", "berehat"],
    ["Tindakan refleks melibatkan…", "saraf tunjang", "serebrum", "kelenjar tiroid", "hati"],
    ["Kelenjar yang dikenali sebagai 'kelenjar induk' ialah…", "pituitari", "adrenal", "tiroid", "pankreas"],
    ["Ruang kecil antara dua neuron dipanggil…", "sinaps", "akson", "dendrit", "nodus"]
  ]},
  { t: "Homeostasis dan Sistem Urinari Manusia", q: [
    ["Homeostasis ialah pengekalan… persekitaran dalam badan.", "keadaan yang stabil", "suhu tinggi", "air yang banyak", "gula yang tinggi"],
    ["Unit fungsi ginjal ialah…", "nefron", "neuron", "alveolus", "vilus"],
    ["Ultraturasan berlaku di…", "glomerulus", "tubul berlingkar distal", "salur pengumpul", "pundi kencing"],
    ["Hormon ADH meningkatkan penyerapan semula…", "air", "glukosa", "garam", "urea"],
    ["Apabila aras glukosa darah tinggi, pankreas merembeskan…", "insulin", "glukagon", "adrenalina", "ADH"],
    ["Apabila badan panas, kita…", "berpeluh dan salur darah kulit mengembang", "menggigil", "salur darah mengecut", "bulu roma tegak"],
    ["Bahan buangan bernitrogen utama dalam air kencing ialah…", "urea", "glukosa", "protein", "lemak"],
    ["Rawatan bagi kegagalan ginjal ialah…", "hemodialisis", "vaksin", "pembedahan mata", "terapi cahaya"]
  ]},
  { t: "Sokongan dan Pergerakan dalam Manusia dan Haiwan", q: [
    ["Rangka manusia ialah jenis…", "endorangka", "eksorangka", "rangka hidrostatik", "tiada rangka"],
    ["Cacing tanah mempunyai rangka…", "hidrostatik", "endorangka", "eksorangka", "tulang"],
    ["Serangga mempunyai…", "eksorangka", "endorangka", "rangka hidrostatik", "rangka rawan"],
    ["Tisu yang menyambung otot kepada tulang ialah…", "tendon", "ligamen", "rawan", "saraf"],
    ["Tisu yang menyambung tulang kepada tulang ialah…", "ligamen", "tendon", "otot", "kulit"],
    ["Sendi pada lutut ialah sendi…", "engsel", "lesung", "tidak bergerak", "pelana"],
    ["Sendi bahu ialah sendi…", "lesung", "engsel", "tidak bergerak", "pasak"],
    ["Penyakit tulang rapuh akibat kekurangan kalsium ialah…", "osteoporosis", "artritis", "skurvi", "anemia"],
    ["Apabila otot biseps mengecut, lengan…", "membengkok", "melurus", "berpusing", "tidak bergerak"]
  ]},
  { t: "Pembiakan Seks, Perkembangan dan Pertumbuhan dalam Manusia dan Haiwan", q: [
    ["Gamet jantan manusia ialah…", "sperma", "ovum", "zigot", "embrio"],
    ["Persenyawaan dalam manusia biasanya berlaku di…", "tiub Falopio", "uterus", "ovari", "faraj"],
    ["Hasil persenyawaan sperma dan ovum ialah…", "zigot", "gamet", "plasenta", "fetus"],
    ["Struktur yang membekalkan nutrien dan oksigen kepada fetus ialah…", "plasenta", "ovari", "testis", "tiub Falopio"],
    ["Kembar seiras terbentuk daripada…", "satu zigot yang terbahagi dua", "dua ovum berbeza", "dua sperma dan satu ovum", "tiga zigot"],
    ["Hormon yang merangsang ovulasi ialah…", "LH", "insulin", "ADH", "tiroksina"],
    ["Lengkung pertumbuhan manusia berbentuk…", "sigmoid (S)", "garis lurus", "bulatan", "zigzag"],
    ["Pertumbuhan serangga dengan pertukaran kulit (ekdisis) menghasilkan lengkung…", "berperingkat (tangga)", "sigmoid licin", "lurus", "menurun"]
  ]}
],

/* ======================= SEJARAH (KSSM T4) ======================= */
sejarah: [
  { n: 1, t: "Warisan Negara Bangsa", q: [
    ["Negara bangsa bermaksud negara berdaulat yang didiami rakyat yang…", "bersatu dengan identiti yang sama", "tidak mempunyai kerajaan", "dijajah", "tiada sempadan"],
    ["Kerajaan Melayu Melaka diasaskan oleh…", "Parameswara", "Hang Tuah", "Sultan Mahmud Shah", "Tun Perak"],
    ["Ciri negara bangsa Kesultanan Melayu Melaka termasuk mempunyai…", "kedaulatan, undang-undang dan wilayah", "tiada pemimpin", "tiada rakyat", "tiada bahasa"],
    ["Undang-undang bertulis Kesultanan Melayu Melaka ialah Hukum Kanun Melaka dan…", "Undang-undang Laut Melaka", "Perlembagaan 1957", "Kanun Keseksaan", "Undang-undang Tubuh Johor"],
    ["Bahasa yang menjadi lingua franca di Melaka ialah…", "bahasa Melayu", "bahasa Inggeris", "bahasa Portugis", "bahasa Belanda"],
    ["Konsep daulat bermaksud kuasa… raja.", "tertinggi", "terendah", "sementara", "terhad kepada istana"],
    ["Warisan kerajaan Melayu tradisional yang kekal hingga kini ialah…", "institusi raja", "sistem kerah", "perhambaan", "cukai kepala"]
  ]},
  { n: 2, t: "Kebangkitan Nasionalisme", q: [
    ["Nasionalisme bermaksud perasaan… terhadap tanah air.", "cinta dan taat setia", "benci", "takut", "tidak peduli"],
    ["Antara faktor kebangkitan nasionalisme di Tanah Melayu ialah…", "peranan akhbar dan majalah", "kedatangan Jepun sahaja", "kekurangan makanan", "pertandingan sukan"],
    ["Majalah Al-Imam diterbitkan oleh golongan…", "Kaum Muda (reformis Islam)", "British", "pedagang Cina", "Jepun"],
    ["Kesatuan Melayu Muda (KMM) ditubuhkan pada tahun…", "1938", "1946", "1957", "1926"],
    ["Pengasas Kesatuan Melayu Muda ialah…", "Ibrahim Haji Yaakob", "Dato' Onn Jaafar", "Tunku Abdul Rahman", "Tan Cheng Lock"],
    ["Pendidikan di Maktab Perguruan Sultan Idris (MPSI) melahirkan tokoh nasionalis kerana…", "menanam semangat cinta akan bangsa", "mengajar bahasa Inggeris sahaja", "dibiayai Jepun", "hanya untuk bangsawan"],
    ["Kesatuan Melayu Singapura ditubuhkan pada tahun 1926 oleh…", "Mohammad Eunos Abdullah", "Burhanuddin al-Helmi", "Ahmad Boestamam", "Onn Jaafar"]
  ]},
  { n: 3, t: "Konflik Dunia dan Pendudukan Jepun di Negara Kita", q: [
    ["Jepun mendarat di Kota Bharu, Kelantan pada…", "8 Disember 1941", "31 Ogos 1957", "15 Februari 1942", "2 September 1945"],
    ["British menyerah kalah kepada Jepun di Singapura pada…", "15 Februari 1942", "8 Disember 1941", "15 Ogos 1945", "1 April 1946"],
    ["Jepun menggunakan dasar 'Asia untuk…'", "orang Asia", "orang Eropah", "Jepun sahaja", "British"],
    ["Mata wang yang dikeluarkan Jepun dikenali sebagai…", "duit pisang", "ringgit", "dolar Selat", "rupiah"],
    ["Jepun menyerah kalah selepas bom atom digugurkan di Hiroshima dan…", "Nagasaki", "Tokyo", "Osaka", "Kyoto"],
    ["Gerakan penentangan Jepun yang terkenal ialah…", "Force 136", "UMNO", "MCA", "Kesatuan Melayu Muda"],
    ["Selepas Jepun menyerah kalah, berlaku zaman… selama 14 hari.", "Bintang Tiga", "Darurat", "Merdeka", "Malayan Union"]
  ]},
  { n: 4, t: "Era Peralihan Kuasa British di Negara Kita", q: [
    ["Malayan Union diisytiharkan pada…", "1 April 1946", "31 Ogos 1957", "1 Februari 1948", "16 September 1963"],
    ["Pegawai British yang ditugaskan mendapatkan tandatangan raja-raja Melayu untuk Malayan Union ialah…", "Sir Harold MacMichael", "Sir Edward Gent", "Sir Gerald Templer", "Francis Light"],
    ["Malayan Union ditentang kerana…", "melucutkan kuasa raja-raja Melayu", "memberi kemerdekaan", "memajukan ekonomi", "mengurangkan cukai"],
    ["UMNO ditubuhkan pada 11 Mei 1946 di…", "Istana Besar Johor Bahru", "Kuala Lumpur", "Melaka", "Pulau Pinang"],
    ["Presiden pertama UMNO ialah…", "Dato' Onn Jaafar", "Tunku Abdul Rahman", "Tun Abdul Razak", "Tun Hussein Onn"],
    ["Kerakyatan Malayan Union berasaskan prinsip…", "jus soli", "jus sanguinis", "keturunan raja", "agama"],
    ["Orang Melayu memakai kain putih di songkok sebagai tanda… Malayan Union.", "berkabung menentang", "menyokong", "merayakan", "menerima"]
  ]},
  { n: 5, t: "Persekutuan Tanah Melayu 1948", q: [
    ["Persekutuan Tanah Melayu ditubuhkan pada…", "1 Februari 1948", "1 April 1946", "31 Ogos 1957", "16 September 1963"],
    ["Persekutuan Tanah Melayu 1948 menggantikan…", "Malayan Union", "Negeri-negeri Selat", "Negeri Melayu Bersekutu sahaja", "Malaysia"],
    ["Ketua kerajaan Persekutuan Tanah Melayu 1948 ialah…", "Pesuruhjaya Tinggi British", "Perdana Menteri", "Yang di-Pertuan Agong", "Gabenor Jeneral"],
    ["Dalam Persekutuan 1948, kedudukan raja-raja Melayu…", "dikembalikan", "dihapuskan", "diserahkan kepada Jepun", "tidak berubah dari Malayan Union"],
    ["Syarat kerakyatan Persekutuan 1948 lebih…", "ketat", "longgar", "mudah", "tiada syarat"],
    ["Pergerakan yang menentang Persekutuan 1948 dan mengemukakan Perlembagaan Rakyat ialah gabungan…", "AMCJA-PUTERA", "UMNO-MCA", "Perikatan", "Barisan Nasional"],
    ["Persekutuan Tanah Melayu 1948 terdiri daripada 9 negeri Melayu serta…", "Pulau Pinang dan Melaka", "Singapura dan Sabah", "Sarawak dan Brunei", "Singapura sahaja"]
  ]},
  { n: 6, t: "Ancaman Komunis dan Perisytiharan Darurat", q: [
    ["Darurat diisytiharkan pada tahun…", "1948", "1957", "1960", "1941"],
    ["Darurat diisytiharkan selepas peristiwa pembunuhan pengurus ladang di…", "Sungai Siput, Perak", "Kota Bharu", "Bukit Kepong", "Melaka"],
    ["Rancangan Briggs memindahkan penduduk ke…", "kampung baru", "bandar besar", "luar negara", "kawasan hutan"],
    ["Tujuan Rancangan Briggs ialah memutuskan bekalan kepada…", "pengganas komunis", "British", "penduduk kampung", "pedagang"],
    ["Peristiwa Bukit Kepong berlaku pada tahun…", "1950", "1948", "1957", "1960"],
    ["Darurat ditamatkan secara rasmi pada…", "31 Julai 1960", "31 Ogos 1957", "1 Februari 1948", "16 September 1963"],
    ["Rundingan Baling 1955 diadakan antara Tunku Abdul Rahman dengan…", "Chin Peng", "Harold Briggs", "Gerald Templer", "Onn Jaafar"],
    ["Pesuruhjaya Tinggi yang memperkenalkan konsep 'memenangi hati dan fikiran rakyat' ialah…", "Sir Gerald Templer", "Sir Henry Gurney", "Sir Harold MacMichael", "Sir Edward Gent"]
  ]},
  { n: 7, t: "Usaha Ke Arah Kemerdekaan", q: [
    ["Sistem Ahli diperkenalkan pada tahun 1951 untuk…", "melatih pemimpin tempatan mentadbir", "menghapuskan raja", "mengusir British", "menubuhkan tentera"],
    ["Jawatankuasa Hubungan Antara Kaum (CLC) ditubuhkan untuk…", "memupuk perpaduan kaum", "membina jalan", "mengutip cukai", "melawan Jepun"],
    ["Parti Perikatan pada awalnya ialah gabungan UMNO dan…", "MCA", "MIC", "PAS", "Parti Negara"],
    ["MIC menyertai Perikatan pada tahun…", "1954", "1946", "1957", "1963"],
    ["Rombongan kemerdekaan ke London diketuai oleh…", "Tunku Abdul Rahman", "Dato' Onn Jaafar", "Tan Cheng Lock", "V.T. Sambanthan"],
    ["Rombongan kemerdekaan ke London berlangsung pada awal tahun…", "1956", "1955", "1957", "1950"],
    ["Kerjasama kaum dalam Perikatan berasaskan semangat…", "tolak ansur", "persaingan", "permusuhan", "penjajahan"]
  ]},
  { n: 8, t: "Pilihan Raya", q: [
    ["Pilihan raya pertama di peringkat bandaran diadakan di George Town pada tahun…", "1951", "1955", "1959", "1948"],
    ["Pilihan Raya Umum Majlis Perundangan Persekutuan yang pertama diadakan pada tahun…", "1955", "1957", "1959", "1963"],
    ["Dalam pilihan raya 1955, Perikatan memenangi… daripada 52 kerusi.", "51", "52", "40", "26"],
    ["Pilihan raya umum pertama selepas merdeka diadakan pada tahun…", "1959", "1955", "1957", "1964"],
    ["Badan yang mengendalikan pilihan raya di Malaysia ialah…", "Suruhanjaya Pilihan Raya (SPR)", "Polis Diraja Malaysia", "Mahkamah Persekutuan", "Dewan Rakyat"],
    ["Pilihan raya membolehkan rakyat…", "memilih wakil rakyat", "melantik raja", "menggubal undang-undang sendiri", "mengutip cukai"]
  ]},
  { n: 9, t: "Perlembagaan Persekutuan Tanah Melayu 1957", q: [
    ["Suruhanjaya yang merangka Perlembagaan Persekutuan 1957 ialah…", "Suruhanjaya Reid", "Suruhanjaya Cobbold", "Suruhanjaya Pilihan Raya", "Suruhanjaya Hak Asasi"],
    ["Pengerusi Suruhanjaya Reid ialah…", "Lord Reid", "Lord Cobbold", "Sir Gerald Templer", "Harold Briggs"],
    ["Perlembagaan ialah… negara.", "undang-undang tertinggi", "lagu", "bendera", "mata wang"],
    ["Unsur tradisi dalam perlembagaan termasuk…", "institusi raja, agama Islam, bahasa Melayu dan kedudukan istimewa orang Melayu", "cukai pendapatan", "sistem pendidikan Inggeris", "hak mengundi sahaja"],
    ["Ketua Negara Persekutuan Tanah Melayu ialah…", "Yang di-Pertuan Agong", "Perdana Menteri", "Ketua Hakim", "Pesuruhjaya Tinggi"],
    ["Yang di-Pertuan Agong dipilih oleh…", "Majlis Raja-Raja", "rakyat", "Dewan Rakyat", "Perdana Menteri"],
    ["Prinsip yang menjadi asas kerjasama kaum dalam perlembagaan ialah…", "kontrak sosial", "pecah dan perintah", "monopoli", "perhambaan"]
  ]},
  { n: 10, t: "Pemasyhuran Kemerdekaan", q: [
    ["Tarikh kemerdekaan Persekutuan Tanah Melayu ialah…", "31 Ogos 1957", "16 September 1963", "1 Februari 1948", "8 Februari 1956"],
    ["Kemerdekaan dimasyhurkan di…", "Stadium Merdeka", "Dataran Merdeka", "Istana Negara", "Parlimen"],
    ["Pengisytiharan tarikh kemerdekaan dibuat oleh Tunku Abdul Rahman di Padang Pahlawan, Bandar Hilir…", "Melaka", "Johor Bahru", "Kuala Lumpur", "Pulau Pinang"],
    ["Perdana Menteri pertama Persekutuan Tanah Melayu ialah…", "Tunku Abdul Rahman", "Tun Abdul Razak", "Tun Hussein Onn", "Dato' Onn Jaafar"],
    ["Yang di-Pertuan Agong pertama ialah Tuanku Abdul Rahman, Yang di-Pertuan Besar…", "Negeri Sembilan", "Johor", "Selangor", "Perak"],
    ["Laungan yang dilaungkan Tunku semasa pemasyhuran kemerdekaan ialah…", "Merdeka!", "Hidup Melayu!", "Bersatu!", "Malaysia Boleh!"],
    ["Lagu kebangsaan Persekutuan Tanah Melayu ialah…", "Negaraku", "Jalur Gemilang", "Tanah Pusaka", "Keranamu Malaysia"]
  ]}
],

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Golongan Kata dan Imbuhan", q: [
    ["Imbuhan apitan \"ke-…-an\" + \"adil\" menjadi…", "keadilan", "berkeadilan", "pengadilan", "diadili"],
    ["Imbuhan apitan \"per-…-an\" + \"satu\" menjadi…", "persatuan", "kesatuan", "penyatuan", "bersatu"],
    ["Kata majmuk yang dieja bercantum ialah…", "kakitangan", "kapal terbang", "ibu bapa", "rumah sakit"],
    ["Kata majmuk yang betul ialah…", "tanggungjawab", "tanggung jawab", "tanggung-jawab", "tanggong jawab"],
    ["Kata ganda separa ialah…", "lelaki", "rumah-rumah", "sayur-mayur", "kuih-muih"],
    ["Kata ganda berentak ialah…", "sayur-mayur", "lelaki", "buku-buku", "kanak-kanak"],
    ["Kata adjektif dalam \"Rumah itu sangat besar.\" ialah…", "besar", "rumah", "sangat", "itu"],
    ["Kata penguat dalam \"Dia amat rajin.\" ialah…", "amat", "dia", "rajin", "tiada"],
    ["Penggunaan \"para\" yang betul ialah…", "para pelajar", "para-para pelajar", "para pelajar-pelajar", "pelajar para"]
  ]},
  { t: "Ayat dan Ragam Ayat", q: [
    ["Ayat pasif ialah ayat yang mengutamakan…", "objek atau penyambut", "pelaku", "kata kerja tak transitif", "kata adjektif"],
    ["Ayat pasif bagi \"Ali menulis surat itu.\" ialah…", "Surat itu ditulis oleh Ali.", "Ali ditulis surat itu.", "Surat itu menulis Ali.", "Ditulis Ali surat."],
    ["Ayat pasif dengan kata ganti diri pertama yang betul ialah…", "Buku itu saya baca.", "Buku itu dibaca oleh saya.", "Buku itu dibaca saya.", "Saya dibaca buku itu."],
    ["Ayat majmuk gabungan menggunakan kata hubung…", "dan, tetapi, atau", "kerana, supaya", "yang", "apabila, jika"],
    ["Ayat majmuk pancangan relatif menggunakan kata hubung…", "yang", "dan", "tetapi", "atau"],
    ["Ayat yang betul ialah…", "Semua murid dikehendaki hadir.", "Semua murid-murid dikehendaki hadir.", "Murid-murid semua-semua hadir.", "Semua para murid hadir."],
    ["Ayat yang betul ialah…", "Kerajaan sedang membina jambatan itu.", "Kerajaan sedang dibina jambatan itu.", "Jambatan itu sedang membina kerajaan.", "Kerajaan sedang bina-bina jambatan."],
    ["Kesalahan dalam \"Mereka-mereka itu sudah pulang.\" ialah…", "kata ganti nama tidak boleh digandakan", "tiada kesalahan", "salah tanda baca", "salah kata kerja"]
  ]},
  { t: "Peribahasa", q: [
    ["Maksud \"bagai aur dengan tebing\":", "saling membantu", "bermusuhan", "sombong", "malas"],
    ["Maksud \"seperti katak di bawah tempurung\":", "berpengetahuan sempit", "rajin belajar", "kaya raya", "pandai bercakap"],
    ["Maksud \"bulat air kerana pembetung, bulat manusia kerana muafakat\":", "kesepakatan membawa kejayaan", "air sungai jernih", "manusia suka bergaduh", "pembetung tersumbat"],
    ["Maksud \"hendak seribu daya, tak hendak seribu dalih\":", "jika mahu pasti ada cara", "malas bekerja", "banyak wang", "pandai berdalih"],
    ["Maksud \"melentur buluh biarlah dari rebungnya\":", "mendidik anak sejak kecil", "menebang buluh", "membuat kerja tangan", "membina rumah"],
    ["Maksud \"genggam bara api biar sampai jadi arang\":", "membuat sesuatu biar sampai berjaya", "bermain api", "mudah berputus asa", "takut mencuba"],
    ["Maksud simpulan bahasa \"buah hati\":", "kekasih atau anak tersayang", "buah-buahan", "jantung", "doktor"],
    ["Maksud simpulan bahasa \"tangan terbuka\":", "pemurah", "kedekut", "pencuri", "malas"],
    ["Maksud \"air dicincang tidak akan putus\":", "pertalian saudara sukar diputuskan", "air sukar dipotong", "sungai yang panjang", "orang yang kuat"]
  ]},
  { t: "Ejaan, Tanda Baca dan Istilah", q: [
    ["Ejaan yang betul ialah…", "kualiti", "kwaliti", "qualiti", "kualitee"],
    ["Ejaan yang betul ialah…", "sistem", "sistim", "system", "sisteem"],
    ["Ejaan yang betul ialah…", "teknologi", "teknoloji", "tehnologi", "teknolugi"],
    ["Ejaan yang betul ialah…", "nasihat", "nasehat", "nasihaat", "nesihat"],
    ["Ejaan yang betul ialah…", "di samping", "disamping", "di-samping", "dsamping"],
    ["Penggunaan tanda koma bertitik (;) ialah untuk…", "memisahkan klausa yang setara dalam ayat panjang", "menamatkan ayat", "menunjukkan soalan", "memulakan dialog"],
    ["Istilah bahasa Melayu bagi \"database\" ialah…", "pangkalan data", "dasar data", "perpustakaan data", "simpan data"],
    ["Istilah bahasa Melayu bagi \"globalisation\" ialah…", "globalisasi", "globalisme", "pengglobalan dunia", "duniawi"]
  ]},
  { t: "Laras Bahasa dan Penulisan", q: [
    ["Laras bahasa yang digunakan dalam surat kiriman rasmi ialah laras…", "formal", "basahan", "slanga", "pasar"],
    ["Rencana biasanya mengandungi…", "tajuk, pendahuluan, isi dan penutup", "salam pembuka sahaja", "dialog sahaja", "puisi"],
    ["Ucapan dimulakan dengan…", "kata sapaan kepada hadirin", "kesimpulan", "rujukan", "tandatangan"],
    ["Ringkasan karangan mestilah…", "padat dan tidak melebihi bilangan patah perkataan", "lebih panjang daripada teks", "menyalin semua contoh", "mengandungi pendapat sendiri sahaja"],
    ["Penanda wacana untuk memulakan isi ialah…", "Pertama sekali", "Kesimpulannya", "Oleh itu", "Akhir sekali"],
    ["Penanda wacana untuk penutup ialah…", "Kesimpulannya", "Pertama sekali", "Selain itu", "Di samping itu"],
    ["Ayat topik dalam perenggan ialah ayat yang menyatakan…", "isi utama perenggan", "contoh sahaja", "kesimpulan karangan", "tajuk buku"],
    ["Bahasa yang sesuai dalam laporan ialah…", "ringkas, tepat dan formal", "berbunga-bunga", "bahasa SMS", "bahasa pasar"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["Choose the synonym of \"abundant\".", "plentiful", "scarce", "tiny", "empty"],
    ["Choose the antonym of \"ancient\".", "modern", "old", "historic", "antique"],
    ["Choose the synonym of \"diligent\".", "hardworking", "lazy", "careless", "slow"],
    ["Choose the antonym of \"optimistic\".", "pessimistic", "hopeful", "positive", "cheerful"],
    ["\"A person who designs buildings\" is an…", "architect", "engineer", "accountant", "author"],
    ["\"A place where planes take off and land\" is an…", "airport", "harbour", "station", "terminal bus"],
    ["The word \"environmentally friendly\" means…", "not harmful to nature", "very friendly", "full of plants", "expensive"],
    ["Choose the correct collocation: ___ a decision.", "make", "do", "take up", "give"]
  ]},
  { t: "Tenses", q: [
    ["She ___ in Penang since 2015.", "has lived", "lives", "lived", "is living"],
    ["By the time we arrived, the movie ___.", "had started", "has started", "starts", "will start"],
    ["Look! The children ___ in the rain.", "are playing", "play", "played", "have played"],
    ["I ___ my homework before dinner yesterday.", "finished", "finish", "have finished", "will finish"],
    ["Next year, they ___ a new school.", "will build", "built", "have built", "build"],
    ["While I ___ , the phone rang.", "was cooking", "cooked", "am cooking", "cook"],
    ["He usually ___ to school by bus.", "goes", "go", "going", "gone"],
    ["They ___ for two hours when the bus finally came.", "had been waiting", "have waited", "waits", "are waiting"]
  ]},
  { t: "Passive Voice and Reported Speech", q: [
    ["Passive: \"The cat chased the mouse.\"", "The mouse was chased by the cat.", "The mouse chased the cat.", "The mouse is chased by the cat.", "The cat was chased by the mouse."],
    ["Passive: \"They will announce the results tomorrow.\"", "The results will be announced tomorrow.", "The results will announce tomorrow.", "The results are announced tomorrow.", "The results was announced tomorrow."],
    ["Passive: \"Someone has stolen my bicycle.\"", "My bicycle has been stolen.", "My bicycle was stealing.", "My bicycle has stolen.", "My bicycle is steal."],
    ["Reported: She said, \"I am tired.\"", "She said that she was tired.", "She said that I am tired.", "She said she is tiring.", "She says I was tired."],
    ["Reported: He said, \"I will come tomorrow.\"", "He said that he would come the next day.", "He said that he will come tomorrow.", "He said that I would come tomorrow.", "He says he came the next day."],
    ["Reported: \"Do you like durians?\" she asked me.", "She asked me if I liked durians.", "She asked me do I like durians.", "She asked me if you like durians.", "She asked did I liked durians."],
    ["Reported: The teacher said, \"Close the door.\"", "The teacher told us to close the door.", "The teacher said close the door.", "The teacher told us closing the door.", "The teacher told that we closed the door."]
  ]},
  { t: "Conditionals and Modals", q: [
    ["If it rains, we ___ at home.", "will stay", "would stay", "stayed", "had stayed"],
    ["If I were rich, I ___ a big house.", "would buy", "will buy", "buy", "bought"],
    ["If she had studied, she ___ the exam.", "would have passed", "will pass", "passed", "would pass"],
    ["If you heat ice, it ___.", "melts", "melted", "will melted", "would melt"],
    ["You ___ wear a helmet when riding a motorcycle. It's the law.", "must", "might", "could", "may"],
    ["It ___ rain later, so bring an umbrella.", "might", "must", "should not", "can't"],
    ["You ___ see a doctor if you feel unwell.", "should", "mustn't", "needn't", "couldn't"],
    ["Unless you hurry, you ___ the bus.", "will miss", "missed", "would miss", "miss"]
  ]},
  { t: "Idioms and Phrasal Verbs", q: [
    ["\"Break the ice\" means…", "start a conversation in an awkward situation", "smash something", "feel cold", "stop talking"],
    ["\"Hit the books\" means…", "study hard", "throw books", "buy books", "sell books"],
    ["\"Once in a blue moon\" means…", "very rarely", "every night", "at full moon", "always"],
    ["\"Piece of cake\" means something is…", "very easy", "delicious", "expensive", "broken"],
    ["\"Look after\" means…", "take care of", "search for", "admire", "ignore"],
    ["\"Give up\" means…", "stop trying", "donate", "lift", "continue"],
    ["\"Put off\" the meeting means…", "postpone it", "cancel forever", "start it", "attend it"],
    ["\"Run out of\" sugar means…", "have no more sugar", "buy sugar", "spill sugar", "sell sugar"],
    ["\"Turn down\" an offer means…", "reject it", "accept it", "improve it", "copy it"]
  ]},
  { t: "Reading and Writing Skills", q: [
    ["The main idea of a paragraph is usually found in the…", "topic sentence", "last word", "title only", "footnote"],
    ["A formal email should begin with…", "a proper greeting such as 'Dear Sir/Madam'", "'Hey bro'", "an emoji", "no greeting"],
    ["Which connector shows contrast?", "However", "Moreover", "Therefore", "Firstly"],
    ["Which connector shows result?", "Therefore", "However", "Although", "Meanwhile"],
    ["Which connector adds information?", "Furthermore", "Nevertheless", "Despite", "Unless"],
    ["A summary should…", "include only the main points", "copy the whole text", "add your own story", "list every example"],
    ["An article usually has a…", "title, introduction, body and conclusion", "date and signature only", "dialogue only", "recipe"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM ======================= */
pi: [
  { t: "Tilawah dan Tajwid", q: [
    ["Mad lazim kalimi muthaqqal dibaca sepanjang…", "6 harakat", "2 harakat", "4 harakat", "1 harakat"],
    ["Mad wajib muttasil berlaku apabila huruf mad bertemu hamzah dalam…", "satu kalimah", "dua kalimah", "akhir ayat", "huruf qalqalah"],
    ["Mad jaiz munfasil berlaku apabila huruf mad bertemu hamzah dalam…", "dua kalimah", "satu kalimah", "huruf syamsiah", "huruf qamariah"],
    ["Mad 'arid lissukun berlaku apabila huruf mad diikuti huruf yang dimatikan kerana…", "waqaf", "tasydid", "tanwin", "idgham"],
    ["Huruf qalqalah ialah…", "ق ط ب ج د", "ا و ي", "ل ر", "م ن"],
    ["Hukum alif lam syamsiah dibaca…", "idgham (lam tidak dibaca)", "izhar (lam dibaca jelas)", "ikhfa'", "iqlab"],
    ["Hukum alif lam qamariah dibaca…", "izhar (lam dibaca jelas)", "idgham", "ikhfa'", "dengung"]
  ]},
  { t: "Hadis", q: [
    ["Hadis ialah segala yang disandarkan kepada Nabi Muhammad SAW sama ada perkataan, perbuatan atau…", "pengakuan (taqrir)", "mimpi", "cerita rakyat", "pendapat sahabat sahaja"],
    ["Sumber hukum Islam yang kedua selepas al-Quran ialah…", "hadis (sunnah)", "ijmak", "qias", "adat"],
    ["Kitab hadis yang dihimpunkan oleh Imam al-Bukhari dinamakan…", "Sahih al-Bukhari", "Muwatta'", "Sunan Abi Daud", "Riyadhus Solihin"],
    ["Hadis yang menyeru menuntut ilmu menegaskan bahawa menuntut ilmu ialah…", "wajib bagi setiap Muslim", "sunat", "harus", "makruh"],
    ["Hadis tentang menjaga lidah mengajar kita supaya…", "berkata baik atau diam", "banyak bercakap", "mengumpat", "berbohong"],
    ["Hadis \"Agama itu nasihat\" mengajar kita untuk…", "saling menasihati dengan ikhlas", "mencela orang", "berdiam diri", "mementingkan diri"]
  ]},
  { t: "Akidah", q: [
    ["Beriman kepada qada' dan qadar ialah rukun iman yang ke-…", "6", "5", "4", "3"],
    ["Qada' bermaksud…", "ketetapan Allah sejak azali", "usaha manusia", "doa", "nasib baik sahaja"],
    ["Perkara yang boleh membatalkan iman ialah…", "syirik", "bersedekah", "membaca al-Quran", "berpuasa"],
    ["Syirik ialah…", "menyekutukan Allah", "beriman kepada Allah", "berdoa kepada Allah", "membantu jiran"],
    ["Sifat wajib Allah \"Wahdaniyyah\" bermaksud…", "Esa", "Kekal", "Mendengar", "Melihat"],
    ["Hari Akhirat juga dikenali sebagai…", "Yaumul Qiyamah", "Yaumul Jumu'ah", "Lailatul Qadar", "Aidilfitri"],
    ["Antara tanda kiamat besar ialah…", "matahari terbit dari barat", "hujan lebat", "gerhana bulan biasa", "musim kemarau"]
  ]},
  { t: "Ibadah", q: [
    ["Rukun haji yang dilakukan pada 9 Zulhijjah ialah…", "wukuf di Arafah", "tawaf", "sa'ie", "bercukur"],
    ["Sa'ie dilakukan antara Bukit Safa dan Bukit…", "Marwah", "Uhud", "Tursina", "Arafah"],
    ["Umrah berbeza dengan haji kerana umrah tidak mempunyai…", "wukuf di Arafah", "ihram", "tawaf", "sa'ie"],
    ["Zakat fitrah wajib dikeluarkan pada bulan…", "Ramadan", "Syawal sahaja", "Muharam", "Zulhijjah"],
    ["Nisab zakat emas ialah…", "85 gram", "20 gram", "100 gram", "500 gram"],
    ["Korban disembelih pada hari raya…", "Aidiladha dan hari tasyrik", "Aidilfitri", "Maulidur Rasul", "Awal Muharam"],
    ["Hukum melaksanakan haji bagi yang berkemampuan ialah…", "wajib sekali seumur hidup", "sunat", "harus", "setiap tahun"]
  ]},
  { t: "Sirah", q: [
    ["Perjanjian Hudaibiyah dimeterai pada tahun Hijrah ke-…", "6", "2", "8", "10"],
    ["Pembukaan kota Makkah (Fathu Makkah) berlaku pada tahun Hijrah ke-…", "8", "6", "2", "10"],
    ["Peperangan pertama dalam sejarah Islam ialah Perang…", "Badar", "Uhud", "Khandak", "Hunain"],
    ["Perang Khandak juga dikenali sebagai Perang…", "Ahzab", "Badar", "Tabuk", "Mu'tah"],
    ["Cadangan menggali parit dalam Perang Khandak dikemukakan oleh…", "Salman al-Farisi", "Abu Bakar", "Umar", "Ali"],
    ["Haji Wida' (haji perpisahan) Rasulullah SAW berlaku pada tahun Hijrah ke-…", "10", "8", "6", "2"],
    ["Khalifah pertama selepas wafat Rasulullah SAW ialah…", "Saidina Abu Bakar as-Siddiq", "Saidina Umar", "Saidina Uthman", "Saidina Ali"]
  ]},
  { t: "Adab dan Akhlak", q: [
    ["Adab menggunakan media sosial termasuk…", "menyemak kesahihan berita sebelum berkongsi", "menyebarkan fitnah", "mengecam orang", "berkongsi maklumat peribadi orang lain"],
    ["Tabayyun bermaksud…", "menyelidik kesahihan berita", "menyebar berita", "mempercayai semua berita", "mengabaikan berita"],
    ["Sifat amanah bermaksud…", "boleh dipercayai", "pemarah", "pemalas", "penakut"],
    ["Adab bergaul dengan rakan berlainan jantina ialah…", "menjaga batas pergaulan", "bebas tanpa batas", "bersentuhan", "berdua-duaan"],
    ["Akhlak terhadap ibu bapa termasuk…", "berbuat baik dan mendoakan mereka", "meninggikan suara", "mengabaikan mereka", "membantah"],
    ["Sifat mazmumah (keji) ialah…", "hasad dengki", "sabar", "syukur", "ikhlas"],
    ["Ihsan bermaksud beribadah seolah-olah…", "kita melihat Allah", "orang melihat kita", "untuk dipuji", "tidak perlu niat"]
  ]},
  { t: "Jawi", q: [
    ["ماليسيا|Perkataan Jawi ini dibaca…", "Malaysia", "Melaka", "Melayu", "Malam"],
    ["نڬارا|Perkataan Jawi ini dibaca…", "negara", "negeri", "nangka", "naga"],
    ["Ejaan Jawi bagi \"sekolah\" ialah…", "سکوله", "سکولا", "سيکوله", "سکوڠ"],
    ["Ejaan Jawi bagi \"buku\" ialah…", "بوکو", "بکو", "بوکوه", "بوکق"],
    ["Ejaan Jawi bagi \"ibu\" ialah…", "ايبو", "ابو", "عيبو", "ايبوه"],
    ["Huruf Jawi tambahan yang melambangkan bunyi \"ng\" ialah…", "ڠ", "ڽ", "ڤ", "ڬ"],
    ["Huruf Jawi tambahan yang melambangkan bunyi \"ny\" ialah…", "ڽ", "ڠ", "چ", "ۏ"]
  ]}
],

/* ======================= BAHASA ARAB ======================= */
ba: [
  { t: "Kesihatan", q: [
    ["صِحَّةٌ|Perkataan ini bermaksud…", "kesihatan", "makanan", "sekolah", "rumah"],
    ["مَرِيضٌ|Perkataan ini bermaksud…", "sakit", "sihat", "gembira", "lapar"],
    ["طَبِيبٌ|Perkataan ini bermaksud…", "doktor", "guru", "jururawat", "polis"],
    ["دَوَاءٌ|Perkataan ini bermaksud…", "ubat", "air", "makanan", "buah"],
    ["مُسْتَشْفَى|Perkataan ini bermaksud…", "hospital", "sekolah", "pasar", "masjid"],
    ["رِيَاضَةٌ|Perkataan ini bermaksud…", "sukan / bersenam", "tidur", "makan", "belajar"],
    ["أَشْعُرُ بِالصُّدَاعِ|Ayat ini bermaksud…", "Saya berasa sakit kepala", "Saya berasa lapar", "Saya berasa gembira", "Saya berasa sejuk"]
  ]},
  { t: "Pelancongan", q: [
    ["سِيَاحَةٌ|Perkataan ini bermaksud…", "pelancongan", "perdagangan", "pertanian", "pendidikan"],
    ["مَطَارٌ|Perkataan ini bermaksud…", "lapangan terbang", "stesen bas", "pelabuhan", "hotel"],
    ["فُنْدُقٌ|Perkataan ini bermaksud…", "hotel", "hospital", "kedai", "taman"],
    ["طَائِرَةٌ|Perkataan ini bermaksud…", "kapal terbang", "kereta", "kapal", "kereta api"],
    ["جَزِيرَةٌ|Perkataan ini bermaksud…", "pulau", "gunung", "sungai", "bandar"],
    ["جَوَازُ السَّفَرِ|Frasa ini bermaksud…", "pasport", "tiket", "beg", "peta"],
    ["سَافَرْتُ إِلَى مَكَّةَ|Ayat ini bermaksud…", "Saya telah bermusafir ke Makkah", "Saya akan ke Makkah", "Saya tinggal di Makkah", "Saya belajar di Makkah"]
  ]},
  { t: "Teknologi", q: [
    ["حَاسُوبٌ|Perkataan ini bermaksud…", "komputer", "telefon", "televisyen", "radio"],
    ["هَاتِفٌ|Perkataan ini bermaksud…", "telefon", "komputer", "kamera", "jam"],
    ["شَبَكَةٌ|Perkataan ini bermaksud…", "rangkaian / jaringan", "skrin", "papan kekunci", "tetikus"],
    ["بَرِيدٌ إِلِكْتُرُونِيٌّ|Frasa ini bermaksud…", "e-mel", "surat khabar", "laman web", "pejabat pos"],
    ["شَاشَةٌ|Perkataan ini bermaksud…", "skrin", "buku", "meja", "kerusi"],
    ["أَسْتَخْدِمُ الْحَاسُوبَ|Ayat ini bermaksud…", "Saya menggunakan komputer", "Saya membeli komputer", "Saya membaiki komputer", "Saya menjual komputer"]
  ]},
  { t: "Isim Mausul (Kata Nama Penghubung)", q: [
    ["Isim mausul bagi mufrad muzakkar ialah…", "الَّذِي", "الَّتِي", "الَّذِينَ", "اللَّاتِي"],
    ["Isim mausul bagi mufrad muannas ialah…", "الَّتِي", "الَّذِي", "الَّذِينَ", "اللَّذَانِ"],
    ["Isim mausul bagi jamak muzakkar ialah…", "الَّذِينَ", "الَّذِي", "الَّتِي", "اللَّتَانِ"],
    ["هٰذَا الطَّالِبُ ___ نَجَحَ|Pilih isim mausul yang sesuai.", "الَّذِي", "الَّتِي", "الَّذِينَ", "اللَّاتِي"],
    ["هٰذِهِ الطَّالِبَةُ ___ نَجَحَتْ|Pilih isim mausul yang sesuai.", "الَّتِي", "الَّذِي", "الَّذِينَ", "اللَّذَانِ"],
    ["Maksud الَّذِي dalam bahasa Melayu ialah…", "yang", "dan", "di", "ke"]
  ]},
  { t: "Fi'il Mudhari' Mansub", q: [
    ["Fi'il mudhari' menjadi mansub apabila didahului oleh huruf seperti…", "أَنْ، لَنْ، كَيْ", "لَمْ، لَا", "مِنْ، إِلَى", "فِي، عَلَى"],
    ["Tanda i'rab mansub bagi fi'il mudhari' mufrad ialah…", "baris atas (fathah)", "baris hadapan (dhammah)", "sukun", "baris bawah"],
    ["لَنْ أَكْذِبَ|Ayat ini bermaksud…", "Saya tidak akan berbohong", "Saya sedang berbohong", "Saya telah berbohong", "Jangan berbohong"],
    ["أُرِيدُ أَنْ أَدْرُسَ|Ayat ini bermaksud…", "Saya mahu belajar", "Saya telah belajar", "Saya tidak belajar", "Saya sedang tidur"],
    ["Bentuk yang betul: لَنْ ___ (يَذْهَبُ)", "يَذْهَبَ", "يَذْهَبُ", "يَذْهَبْ", "ذَهَبَ"],
    ["Maksud huruf لَنْ ialah…", "tidak akan", "telah", "sedang", "jangan"]
  ]},
  { t: "Adad (Nombor)", q: [
    ["ثَلَاثَةٌ|Nombor ini ialah…", "3", "4", "5", "6"],
    ["سَبْعَةٌ|Nombor ini ialah…", "7", "6", "8", "9"],
    ["عَشَرَةٌ|Nombor ini ialah…", "10", "9", "11", "12"],
    ["عِشْرُونَ|Nombor ini ialah…", "20", "12", "30", "200"],
    ["مِائَةٌ|Nombor ini ialah…", "100", "1000", "10", "50"],
    ["Bahasa Arab bagi \"lima\" ialah…", "خَمْسَةٌ", "سِتَّةٌ", "أَرْبَعَةٌ", "ثَمَانِيَةٌ"],
    ["Bahasa Arab bagi \"pertama\" ialah…", "الْأَوَّلُ", "الثَّانِي", "الثَّالِثُ", "الْأَخِيرُ"]
  ]}
],
geo: []
};
})();
