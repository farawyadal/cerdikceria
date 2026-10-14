/* =========================================================
   TINGKATAN 5 — Cerdik Ceria (Sekolah Menengah, KSSM)
   Matematik, Matematik Tambahan, Sains, Fizik, Kimia, Biologi & Sejarah:
   bab ikut buku teks KSSM Tingkatan 5.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang.
   Bahasa Arab: ikut tema dan tatabahasa. Geografi (elektif) tidak dimasukkan.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu ---------- */
const N = n => n < 0 ? "−" + (-n) : String(n);
const gcd = (a, b) => b ? gcd(Math.abs(b), Math.abs(a) % Math.abs(b)) : Math.abs(a);
const frac = (n, d) => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return d / g === 1 ? N(n / g) : `${N(n / g)}/${d / g}`; };
const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const sup = n => String(n).split("").map(c => SUP[c]).join("");
const nz = (a, b) => { let v = 0; while (!v) v = r(a, b); return v; };
function qi(text, ans, offs, exp) {
  const s = new Set(); let t = 0;
  while (s.size < 3 && t < 80) { t++; const v = ans + pick(offs) * (Math.random() < .5 ? -1 : 1); if (v !== ans && !(ans >= 0 && v < 0)) s.add(v); }
  let k = 1; while (s.size < 3) { s.add(ans + k * 7); k++; }
  return [text, N(ans), ...[...s].map(N), exp || ""];
}
function fromF(text, right, pool, more, exp) {
  const set = new Set(pool.map(String).filter(x => x !== String(right)));
  let t = 0; while (set.size < 3 && t < 120) { t++; const v = String(more()); if (v !== String(right)) set.add(v); }
  return from(text, right, [...set], exp);
}
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
const term = (a, n, first) => { // a xⁿ dengan tanda
  const s = a < 0 ? (first ? "−" : " − ") : (first ? "" : " + ");
  const c = Math.abs(a); const cs = (c === 1 && n !== 0) ? "" : String(c);
  return s + cs + (n === 0 ? "" : n === 1 ? "x" : "x" + sup(n));
};
const poly = ts => ts.filter(([a]) => a).map(([a, n], i) => term(a, n, i === 0)).join("") || "0";
const mat = m => `[${m[0][0] < 0 ? N(m[0][0]) : m[0][0]}  ${N(m[0][1])} ; ${N(m[1][0])}  ${N(m[1][1])}]`;
const fact = n => n <= 1 ? 1 : n * fact(n - 1);
const nPr = (n, k) => fact(n) / fact(n - k);
const nCr = (n, k) => nPr(n, k) / fact(k);

SOALAN["m5"] = {

/* ======================= MATEMATIK (KSSM T5) ======================= */
math: [
  { t: "Ubahan",
    q: [
      ["Jika y berubah secara langsung dengan x, maka…", "y = kx", "y = k/x", "y = x + k", "y = kx²  sahaja"],
      ["Jika y berubah secara songsang dengan x, maka…", "y = k/x", "y = kx", "y = k + x", "y = kx³"],
      ["Ubahan bergabung melibatkan…", "ubahan langsung dan songsang serentak", "satu pemboleh ubah sahaja", "pemalar sahaja", "tiada pemboleh ubah"],
      ["Jika y ∝ x dan x digandakan dua, maka y…", "turut digandakan dua", "menjadi separuh", "tidak berubah", "menjadi empat kali"],
      ["Jika y ∝ 1/x dan x digandakan dua, maka y…", "menjadi separuh", "digandakan dua", "tidak berubah", "menjadi sifar"]
    ],
    g: [
      () => { const k = r(2, 9), x1 = r(2, 6), x2 = r(2, 12); if (x1 === x2) return null; return qi(`y berubah secara langsung dengan x. Apabila x = ${x1}, y = ${k * x1}. Cari y apabila x = ${x2}.`, k * x2, [k, 1, 2], `k = ${k}, y = ${k}x`); },
      () => { const x1 = r(2, 6), x2 = pick([1, 2, 3, 4, 6, 12]), k = 12 * r(1, 3); if (x1 === x2 || k % x1) return null; return qi(`y berubah secara songsang dengan x. Apabila x = ${x1}, y = ${k / x1}. Cari y apabila x = ${x2}.`, k / x2, [1, 2, k / x1], `k = xy = ${k}`); },
      () => { const k = r(1, 4), x = r(2, 6); return qi(`y berubah secara langsung dengan x². Apabila x = 1, y = ${k}. Cari y apabila x = ${x}.`, k * x * x, [k, x, 2 * k], `y = ${k}x²`); }
    ] },
  { t: "Matriks",
    q: [
      ["Peringkat bagi matriks dengan 2 baris dan 3 lajur ialah…", "2 × 3", "3 × 2", "6", "5"],
      ["Matriks identiti 2 × 2 ialah…", "[1  0 ; 0  1]", "[0  1 ; 1  0]", "[1  1 ; 1  1]", "[0  0 ; 0  0]"],
      ["Dua matriks boleh didarab jika bilangan lajur matriks pertama sama dengan bilangan… matriks kedua.", "baris", "lajur", "unsur", "pepenjuru"],
      ["Matriks songsang bagi A tidak wujud jika penentu A…", "sama dengan 0", "positif", "negatif", "sama dengan 1"],
      ["A × A⁻¹ = ?", "I (matriks identiti)", "0", "A", "A²"]
    ],
    g: [
      () => { const a = r(-5, 9), b = r(-5, 9), c = r(-5, 9), d = r(-5, 9); return qi(`Cari penentu bagi matriks ${mat([[a, b], [c, d]])}.`, a * d - b * c, [1, 2, Math.abs(a * d + b * c - (a * d - b * c)) || 3], "Penentu = ad − bc"); },
      () => { const A = [[r(-4, 6), r(-4, 6)], [r(-4, 6), r(-4, 6)]], B = [[r(-4, 6), r(-4, 6)], [r(-4, 6), r(-4, 6)]]; const S = [[A[0][0] + B[0][0], A[0][1] + B[0][1]], [A[1][0] + B[1][0], A[1][1] + B[1][1]]]; return fromF(`${mat(A)} + ${mat(B)} = ?`, mat(S), [mat([[S[0][0], S[1][0]], [S[0][1], S[1][1]]]), mat([[A[0][0] - B[0][0], A[0][1] - B[0][1]], [A[1][0] - B[1][0], A[1][1] - B[1][1]]])], () => mat([[S[0][0] + nz(-2, 2), S[0][1]], [S[1][0], S[1][1] + nz(-2, 2)]])); },
      () => { const k = nz(-3, 4), A = [[r(-4, 6), r(-4, 6)], [r(-4, 6), r(-4, 6)]]; const R = A.map(row => row.map(v => k * v)); return fromF(`${N(k)} × ${mat(A)} = ?`, mat(R), [mat(A.map(row => row.map(v => v + k)))], () => mat([[R[0][0] + nz(-3, 3), R[0][1]], [R[1][0], R[1][1]]])); },
      () => { const a = r(1, 4), b = r(-3, 3), c = r(-3, 3), d = r(1, 4), x = r(-3, 4), y = r(-3, 4); const p = a * x + b * y, q2 = c * x + d * y; return fromF(`${mat([[a, b], [c, d]])} × [${N(x)} ; ${N(y)}] = ?`, `[${N(p)} ; ${N(q2)}]`, [`[${N(a * x + c * y)} ; ${N(b * x + d * y)}]`, `[${N(a * x)} ; ${N(d * y)}]`], () => `[${N(p + nz(-3, 3))} ; ${N(q2)}]`); }
    ] },
  { t: "Matematik Pengguna: Insurans",
    q: [
      ["Bayaran berkala yang dibuat oleh pemegang polisi kepada syarikat insurans dipanggil…", "premium", "deduktibel", "pampasan", "dividen"],
      ["Deduktibel ialah…", "jumlah kerugian yang ditanggung sendiri oleh pemegang polisi", "keuntungan syarikat", "faedah bank", "cukai kerajaan"],
      ["Insurans motor yang wajib di Malaysia sekurang-kurangnya ialah polisi…", "pihak ketiga", "komprehensif", "hayat", "perubatan"],
      ["Insurans hayat memberi perlindungan terhadap risiko…", "kematian atau hilang upaya", "kecurian kereta", "kebakaran rumah", "kemalangan jalan sahaja"],
      ["Peratusan ko-insurans digunakan dalam insurans…", "perubatan dan harta", "hayat sahaja", "motor pihak ketiga", "pendidikan"]
    ],
    g: [
      () => { const rate = pick([1.5, 2, 2.5, 3, 4]), sum = pick([50, 80, 100, 150, 200]) * 1000; const ans = rate * sum / 1000; return fromF(`Kadar premium ${rm(rate)} bagi setiap RM1 000 nilai muka. Cari premium bagi nilai muka ${rm(sum)}.`, rm(ans), [rm(ans * 10), rm(ans / 10), rm(ans + rate)], () => rm(ans + nz(-5, 5) * 10)); },
      () => { const loss = pick([3, 4, 5, 6, 8]) * 1000, ded = pick([200, 300, 500]); if (ded >= loss) return null; return fromF(`Kerugian ${rm(loss)}, deduktibel ${rm(ded)}. Berapakah bayaran pampasan syarikat insurans?`, rm(loss - ded), [rm(loss), rm(ded), rm(loss + ded)], () => rm(loss - ded + nz(-3, 3) * 100), "Pampasan = kerugian − deduktibel"); },
      () => { const cost = pick([10, 12, 15, 20]) * 1000, ded = 1000, co = pick([80, 70, 75]); const ans = (cost - ded) * co / 100; return fromF(`Kos perubatan ${rm(cost)}, deduktibel ${rm(ded)}, ko-insurans ${co}/${100 - co} (syarikat/pemegang). Berapa bayaran syarikat?`, rm(ans), [rm(cost * co / 100), rm((cost - ded) * (100 - co) / 100), rm(cost - ded)], () => rm(ans + nz(-4, 4) * 100)); }
    ] },
  { t: "Matematik Pengguna: Percukaian",
    q: [
      ["Cukai yang dikenakan ke atas pendapatan individu dipanggil…", "cukai pendapatan", "cukai jalan", "cukai pintu", "cukai tanah"],
      ["Cukai pintu (taksiran) dibayar kepada…", "pihak berkuasa tempatan", "LHDN", "bank", "syarikat insurans"],
      ["Cukai tanah dibayar kepada…", "pejabat tanah (kerajaan negeri)", "LHDN", "majlis sukan", "sekolah"],
      ["Agensi yang mengutip cukai pendapatan di Malaysia ialah…", "LHDN", "JPJ", "KWSP", "PERKESO"],
      ["Rebat cukai ialah…", "jumlah yang ditolak daripada cukai yang perlu dibayar", "jumlah tambahan cukai", "denda", "faedah simpanan"],
      ["Pelepasan cukai ditolak daripada…", "pendapatan tahunan untuk mendapat pendapatan bercukai", "cukai yang dikira", "gaji bulanan sahaja", "premium insurans"]
    ],
    g: [
      () => { const p = pick([50, 80, 120, 200, 250, 300]), t = pick([5, 6, 8, 10]); const ans = p * t / 100; return fromF(`Harga barang ${rm(p)} dikenakan cukai ${t}%. Berapakah cukainya?`, rm(ans), [rm(p + ans), rm(ans * 10), rm(ans / 2)], () => rm(ans + nz(-4, 4))); },
      () => { const v = pick([12, 15, 18, 24, 30]) * 1000, rate = pick([4, 5, 6, 8]); const ans = v * rate / 100; return fromF(`Nilai tahunan rumah ${rm(v)}, kadar cukai pintu ${rate}%. Berapakah cukai pintu setahun?`, rm(ans), [rm(ans / 2), rm(ans * 2), rm(v / rate)], () => rm(ans + nz(-5, 5) * 10)); },
      () => { const inc = pick([48, 60, 72, 84]) * 1000, rel = pick([9, 12, 15, 18]) * 1000; return fromF(`Pendapatan tahunan ${rm(inc)}, jumlah pelepasan ${rm(rel)}. Cari pendapatan bercukai.`, rm(inc - rel), [rm(inc + rel), rm(inc), rm(rel)], () => rm(inc - rel + nz(-3, 3) * 1000)); }
    ] },
  { t: "Kekongruenan, Pembesaran dan Gabungan Transformasi",
    q: [
      ["Dua bentuk kongruen mempunyai…", "saiz dan bentuk yang sama", "bentuk sama tetapi saiz berbeza", "luas berbeza", "sisi berbeza"],
      ["Pembesaran dengan faktor skala negatif menghasilkan imej yang…", "songsang di sebelah lain pusat", "lebih kecil sahaja", "sama di tempat yang sama", "berputar 90°"],
      ["Jika faktor skala ialah k, luas imej = ?", "k² × luas objek", "k × luas objek", "2k × luas objek", "luas objek ÷ k"],
      ["Transformasi yang mengekalkan saiz dan bentuk ialah isometri, contohnya…", "translasi, pantulan dan putaran", "pembesaran", "regangan", "ricihan"],
      ["Gabungan transformasi AB bermaksud…", "lakukan B dahulu, kemudian A", "lakukan A dahulu, kemudian B", "lakukan serentak", "lakukan A sahaja"]
    ],
    g: [
      () => { const k = pick([2, 3, 4, -2, -3]), L = r(2, 12); return qi(`Luas objek ${L} cm². Pembesaran dengan faktor skala ${N(k)}. Cari luas imej (cm²).`, k * k * L, [L, Math.abs(k) * L, 2], "Luas imej = k² × luas objek"); },
      () => { const k = pick([2, 3, 4]), s = r(2, 9); return qi(`Sisi objek ${s} cm. Faktor skala ${k}. Panjang sisi imej (cm)?`, k * s, [s, k, 2]); },
      () => { const k = pick([2, 3, 4, 5]), L = k * k * r(1, 6); return fromF(`Luas imej ${L} cm², luas objek ${L / (k * k)} cm². Faktor skala (positif) ialah…`, String(k), [String(k * k), String(k + 1), String(k * 2)], () => String(r(1, 9))); }
    ] },
  { t: "Nisbah dan Graf Fungsi Trigonometri",
    q: [
      ["sin 90° = ?", "1", "0", "−1", "½"],
      ["cos 180° = ?", "−1", "1", "0", "½"],
      ["tan 45° = ?", "1", "0", "√3", "½"],
      ["Dalam sukuan kedua (90° – 180°), fungsi yang positif ialah…", "sin", "cos", "tan", "semua"],
      ["Dalam sukuan ketiga (180° – 270°), fungsi yang positif ialah…", "tan", "sin", "cos", "semua"],
      ["Dalam sukuan keempat (270° – 360°), fungsi yang positif ialah…", "cos", "sin", "tan", "tiada"],
      ["Amplitud graf y = 3 sin x ialah…", "3", "1", "6", "360°"],
      ["Tempoh graf y = sin x ialah…", "360°", "180°", "90°", "720°"],
      ["Tempoh graf y = tan x ialah…", "180°", "360°", "90°", "270°"]
    ],
    g: [
      () => { const a = r(2, 9), b = pick([1, 2, 3]); return fromF(`Amplitud graf y = ${a} cos ${b === 1 ? "" : b}x ialah…`, String(a), [String(a * 2), String(b), String(a + b)], () => String(r(1, 12))); },
      () => { const [ang, s] = pick([[150, "sin 30°"], [210, "−sin 30°"], [330, "−sin 30°"], [120, "sin 60°"], [240, "−sin 60°"], [300, "−sin 60°"], [135, "sin 45°"], [225, "−sin 45°"]]); return from(`sin ${ang}° = ?`, s, ["sin 30°", "−sin 30°", "sin 60°", "−sin 60°", "sin 45°", "−sin 45°", "cos 30°"]); }
    ] },
  { t: "Sukatan Serakan Data Terkumpul",
    q: [
      ["Titik tengah kelas = ?", "(had bawah + had atas) ÷ 2", "had atas − had bawah", "kekerapan ÷ 2", "had atas × 2"],
      ["Ogif ialah graf…", "kekerapan longgokan", "bar", "pai", "garis lurus"],
      ["Kuartil kedua (Q2) juga dikenali sebagai…", "median", "min", "mod", "julat"],
      ["Julat antara kuartil = ?", "Q3 − Q1", "Q3 + Q1", "Q2 − Q1", "maksimum − minimum"],
      ["Sisihan piawai ialah… varians.", "punca kuasa dua", "kuasa dua", "separuh", "dua kali"],
      ["Histogram mempunyai bar yang…", "bersentuhan", "berjarak", "bulat", "bertindih"]
    ],
    g: [
      () => { const lo = r(1, 9) * 10, w = pick([5, 10, 20]); const hi = lo + w - 1; return fromF(`Titik tengah bagi kelas ${lo} – ${hi} ialah…`, String((lo + hi) / 2), [String(lo + w / 2), String(hi - lo), String(lo)], () => String((lo + hi) / 2 + nz(-3, 3))); },
      () => { const v = pick([4, 9, 16, 25, 36, 49]); return qi(`Varians suatu data ialah ${v}. Cari sisihan piawai.`, Math.sqrt(v), [1, 2, v - Math.sqrt(v) > 0 ? 3 : 1]); },
      () => { const q1 = r(10, 30), q3 = q1 + r(5, 25); return qi(`Q1 = ${q1}, Q3 = ${q3}. Cari julat antara kuartil.`, q3 - q1, [1, 2, 5]); }
    ] },
  { t: "Pemodelan Matematik",
    q: [
      ["Langkah pertama dalam pemodelan matematik ialah…", "mengenal pasti dan mendefinisikan masalah", "menguji model", "melapor dapatan", "menyelesaikan persamaan"],
      ["Selepas membina model, langkah seterusnya ialah…", "menyelesaikan masalah matematik", "membuang data", "mengulang dari awal", "memadam andaian"],
      ["Membuat andaian dalam pemodelan bertujuan untuk…", "memudahkan masalah", "menambah kesukaran", "mengelirukan", "menghapuskan data"],
      ["Model linear sesuai untuk situasi yang mempunyai kadar perubahan…", "tetap", "berubah-ubah", "eksponen", "rawak"],
      ["Model eksponen sesuai untuk menerangkan…", "pertumbuhan populasi bakteria", "harga tetap", "jarak tetap", "suhu malar"],
      ["Mengesahkan model bermaksud…", "membandingkan hasil model dengan data sebenar", "memadam model", "menukar soalan", "menghafal jawapan"]
    ] }
],

/* ======================= MATEMATIK TAMBAHAN (KSSM T5) ======================= */
addmath: [
  { t: "Sukatan Membulat",
    q: [
      ["π radian = ?", "180°", "360°", "90°", "57.3°"],
      ["1 radian lebih kurang…", "57.3°", "180°", "3.142°", "90°"],
      ["Panjang lengkok, s = ?", "jθ (θ dalam radian)", "½j²θ", "2πj", "πj²"],
      ["Luas sektor, L = ?", "½j²θ (θ dalam radian)", "jθ", "πj²", "2πj"]
    ],
    g: [
      () => { const j = r(2, 12), t = pick([0.5, 1, 1.2, 1.5, 2, 2.5]); const s = +(j * t).toFixed(2); return fromF(`Jejari ${j} cm, sudut ${t} rad. Cari panjang lengkok (cm).`, String(s), [String(+(0.5 * j * j * t).toFixed(2)), String(+(j + t).toFixed(2)), String(+(2 * j * t).toFixed(2))], () => String(+(s + nz(-5, 5) * 0.5).toFixed(2)), "s = jθ"); },
      () => { const j = pick([2, 4, 6, 8, 10]), t = pick([0.5, 1, 1.5, 2]); const L = +(0.5 * j * j * t).toFixed(2); return fromF(`Jejari ${j} cm, sudut ${t} rad. Cari luas sektor (cm²).`, String(L), [String(+(j * t).toFixed(2)), String(+(j * j * t).toFixed(2)), String(+(0.5 * j * t).toFixed(2))], () => String(+(L + nz(-5, 5)).toFixed(2)), "L = ½j²θ"); },
      () => { const [d, rad] = pick([[30, "π/6"], [45, "π/4"], [60, "π/3"], [90, "π/2"], [120, "2π/3"], [135, "3π/4"], [150, "5π/6"], [180, "π"], [270, "3π/2"], [360, "2π"]]); return from(`Tukarkan ${d}° kepada radian.`, rad, ["π/6", "π/4", "π/3", "π/2", "2π/3", "3π/4", "5π/6", "π", "3π/2", "2π"]); }
    ] },
  { t: "Pembezaan",
    q: [
      ["d/dx (c), dengan c pemalar = ?", "0", "1", "c", "x"],
      ["d/dx (xⁿ) = ?", "nxⁿ⁻¹", "xⁿ⁺¹/(n+1)", "nxⁿ", "xⁿ⁻¹"],
      ["Pada titik pegun, dy/dx = ?", "0", "1", "−1", "tak tertakrif"],
      ["Jika d²y/dx² > 0 pada titik pegun, titik itu ialah titik…", "minimum", "maksimum", "lengkok balas", "asalan"],
      ["Jika d²y/dx² < 0 pada titik pegun, titik itu ialah titik…", "maksimum", "minimum", "lengkok balas", "persilangan"],
      ["Petua rantai digunakan untuk membezakan…", "fungsi gubahan", "pemalar", "fungsi linear sahaja", "nombor"]
    ],
    g: [
      () => { const a = nz(-6, 6), n = r(2, 5); return fromF(`d/dx (${poly([[a, n]])}) = ?`, poly([[a * n, n - 1]]), [poly([[a, n - 1]]), poly([[a * n, n]]), poly([[a * (n - 1), n - 1]])], () => poly([[a * n + nz(-3, 3), n - 1]])); },
      () => { const a = nz(-4, 4), b = nz(-6, 6), c = r(-9, 9), x = r(-3, 3); return qi(`y = ${poly([[a, 2], [b, 1], [c, 0]])}. Cari kecerunan tangen pada x = ${N(x)}.`, 2 * a * x + b, [1, 2, Math.abs(a) || 2], "dy/dx = 2ax + b"); },
      () => { const a = nz(-3, 3), h = r(-5, 5); const b = -2 * a * h; return qi(`y = ${poly([[a, 2], [b, 1], [r(1, 9), 0]])}. Cari nilai x bagi titik pegun.`, h, [1, 2, 3], "dy/dx = 0"); },
      () => { const a = nz(-3, 3), b = r(-5, 5), x = r(-2, 2); return qi(`y = ${poly([[a, 3], [b, 1]])}. Cari d²y/dx² apabila x = ${N(x)}.`, 6 * a * x, [a || 1, 2, 3]); }
    ] },
  { t: "Pengamiran",
    q: [
      ["∫ xⁿ dx = ?", "xⁿ⁺¹/(n+1) + c", "nxⁿ⁻¹ + c", "xⁿ + c", "(n+1)xⁿ + c"],
      ["Pengamiran ialah proses… pembezaan.", "songsang", "sama dengan", "gandaan", "separuh"],
      ["∫ k dx, dengan k pemalar = ?", "kx + c", "k + c", "0", "x + c"],
      ["Kamiran tentu boleh digunakan untuk mencari… di bawah lengkung.", "luas", "kecerunan", "pintasan", "titik pusingan"],
      ["Isi padu janaan dicari dengan…", "π∫y² dx", "∫y dx", "∫x dy sahaja", "2∫y dx"]
    ],
    g: [
      () => { const n = r(1, 4), m = n + 1, a = m * nz(-3, 3); return fromF(`∫ ${poly([[a, n]])} dx = ?`, poly([[a / m, m]]) + " + c", [poly([[a, m]]) + " + c", poly([[a * n, n - 1]]) + " + c", poly([[a / n, m]]) + " + c"], () => poly([[a / m + nz(-2, 2), m]]) + " + c"); },
      () => { const a = pick([1, 2, 3]), b = r(1, 4); const ans = a * b * b; return qi(`Nilaikan ∫ dari 0 hingga ${b} bagi ${poly([[2 * a, 1]])} dx.`, ans, [1, a, b], `[${a === 1 ? "" : a}x²] dari 0 hingga ${b}`); },
      () => { const b = r(1, 3); return qi(`Nilaikan ∫ dari 0 hingga ${b} bagi 3x² dx.`, b * b * b, [1, b, 3], "[x³]"); }
    ] },
  { t: "Pilih Atur dan Gabungan",
    q: [
      ["Bilangan pilih atur n objek berbeza ialah…", "n!", "n²", "2ⁿ", "n"],
      ["0! = ?", "1", "0", "tak tertakrif", "−1"],
      ["Gabungan digunakan apabila… tidak penting.", "susunan", "bilangan", "objek", "pilihan"],
      ["ⁿCᵣ = ?", "n! ÷ (r!(n − r)!)", "n! ÷ (n − r)!", "n × r", "n! × r!"],
      ["ⁿPᵣ = ?", "n! ÷ (n − r)!", "n! ÷ (r!(n − r)!)", "n^r", "r!"]
    ],
    g: [
      () => { const n = r(3, 6); return qi(`Berapakah cara menyusun ${n} buku berbeza di atas rak?`, fact(n), [n, fact(n - 1), 2], `${n}!`); },
      () => { const n = r(5, 9), k = r(2, 3); return qi(`Cari ${n}P${k}.`, nPr(n, k), [nCr(n, k) === nPr(n, k) ? 1 : nPr(n, k) - nCr(n, k), n, k], `${n}! ÷ ${n - k}!`); },
      () => { const n = r(5, 10), k = r(2, 4); return qi(`Berapakah cara memilih ${k} orang daripada ${n} orang?`, nCr(n, k), [n, k, nPr(n, k) - nCr(n, k)], `${n}C${k}`); },
      () => { const w = pick(["BUKU", "KUDA", "MEJA", "LAUT", "BOLA", "RODA"]); return qi(`Berapakah cara menyusun semua huruf perkataan "${w}"?`, 24, [4, 12, 6]); }
    ] },
  { t: "Taburan Kebarangkalian",
    q: [
      ["Taburan binomial mempunyai… kesudahan bagi setiap percubaan.", "dua", "tiga", "banyak", "satu"],
      ["Min taburan binomial ialah…", "np", "npq", "√(npq)", "n/p"],
      ["Varians taburan binomial ialah…", "npq", "np", "√(np)", "p + q"],
      ["Graf taburan normal berbentuk…", "loceng dan simetri", "garis lurus", "huruf U", "segi tiga"],
      ["Skor-z bagi X ialah…", "(X − μ) ÷ σ", "(X + μ) ÷ σ", "X ÷ μ", "σ ÷ (X − μ)"],
      ["Jumlah luas di bawah lengkung taburan normal ialah…", "1", "0.5", "100", "0"]
    ],
    g: [
      () => { const n = pick([10, 20, 40, 50, 100]), p = pick([0.1, 0.2, 0.25, 0.4, 0.5]); return fromF(`X ~ B(${n}, ${p}). Cari min.`, String(+(n * p).toFixed(2)), [String(+(n * p * (1 - p)).toFixed(2)), String(n), String(+(n * (1 - p)).toFixed(2))], () => String(+(n * p + nz(-5, 5)).toFixed(2)), "min = np"); },
      () => { const n = pick([10, 20, 40, 100]), p = pick([0.2, 0.5, 0.25]); const v = +(n * p * (1 - p)).toFixed(2); return fromF(`X ~ B(${n}, ${p}). Cari varians.`, String(v), [String(+(n * p).toFixed(2)), String(+Math.sqrt(v).toFixed(2)), String(+(n * (1 - p)).toFixed(2))], () => String(+(v + nz(-4, 4)).toFixed(2)), "varians = npq"); },
      () => { const mu = r(4, 9) * 10, s = pick([2, 4, 5, 10]), k = nz(-3, 3); return fromF(`X ~ N(${mu}, ${s * s}). Cari skor-z bagi X = ${mu + k * s}.`, N(k), [N(-k), N(k * s), String(mu + k * s)], () => N(k + nz(-2, 2)), "z = (X − μ)/σ"); }
    ] },
  { t: "Fungsi Trigonometri",
    q: [
      ["sin²x + cos²x = ?", "1", "0", "2", "tan x"],
      ["1 + tan²x = ?", "sec²x", "cosec²x", "cos²x", "1"],
      ["1 + cot²x = ?", "cosec²x", "sec²x", "sin²x", "0"],
      ["sec x = ?", "1/cos x", "1/sin x", "1/tan x", "sin x/cos x"],
      ["cosec x = ?", "1/sin x", "1/cos x", "cos x/sin x", "tan x"],
      ["sin 2x = ?", "2 sin x cos x", "2 sin x", "sin²x − cos²x", "1 − 2 sin x"],
      ["cos 2x = ?", "cos²x − sin²x", "2 sin x cos x", "2 cos x", "1 + sin²x"],
      ["Bilangan kitaran graf y = sin 2x bagi 0 ≤ x ≤ 2π ialah…", "2", "1", "4", "½"]
    ],
    g: [
      () => { const a = r(2, 6), b = pick([1, 2, 3]), c = nz(-3, 3); return fromF(`Nilai maksimum bagi y = ${a} sin ${b === 1 ? "" : b}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} ialah…`, N(a + c), [N(a), N(c - a), N(a * b)], () => N(a + c + nz(-3, 3))); },
      () => { const b = pick([1, 2, 3, 4]); return fromF(`Bilangan kitaran bagi y = cos ${b === 1 ? "" : b}x untuk 0 ≤ x ≤ 2π ialah…`, String(b), [String(2 * b), String(b + 1), b > 1 ? String(b - 1) : "½"], () => String(r(1, 9))); }
    ] },
  { t: "Pengaturcaraan Linear",
    q: [
      ["Pengaturcaraan linear digunakan untuk mencari nilai… fungsi objektif.", "optimum (maksimum atau minimum)", "purata", "median", "sifar"],
      ["Rantau yang memenuhi semua kekangan dipanggil rantau…", "tersaur (R)", "kosong", "luar", "kritikal"],
      ["Ketaksamaan y ≥ 2x melibatkan rantau… garis y = 2x.", "di atas dan pada", "di bawah", "di kiri sahaja", "jauh dari"],
      ["Garis putus-putus pada graf menunjukkan ketaksamaan…", "< atau >", "≤ atau ≥", "=", "tiada"],
      ["Nilai optimum biasanya berlaku di… rantau tersaur.", "bucu", "tengah", "luar", "mana-mana titik"]
    ],
    g: [
      () => { const a = r(2, 9), b = r(2, 9), x = r(1, 10), y = r(1, 10); return qi(`Fungsi objektif k = ${a}x + ${b}y. Cari nilai k pada titik (${x}, ${y}).`, a * x + b * y, [a, b, 1]); },
      () => { const pts = shuffle([[r(0, 3), r(5, 9)], [r(4, 6), r(3, 6)], [r(7, 9), r(0, 2)]]); const a = r(2, 6), b = r(2, 6); const vals = pts.map(([x, y]) => a * x + b * y); const mx = Math.max(...vals); if (vals.filter(v => v === mx).length > 1) return null; const best = pts[vals.indexOf(mx)]; return from(`k = ${a}x + ${b}y. Bucu rantau: ${pts.map(p => `(${p[0]}, ${p[1]})`).join(", ")}. Titik yang memberi k maksimum ialah…`, `(${best[0]}, ${best[1]})`, [...pts.filter(p => p !== best).map(p => `(${p[0]}, ${p[1]})`), "(0, 0)"]); }
    ] },
  { t: "Kinematik Gerakan Linear",
    q: [
      ["Halaju ialah kadar perubahan… terhadap masa.", "sesaran", "pecutan", "jisim", "daya"],
      ["Pecutan ialah kadar perubahan… terhadap masa.", "halaju", "sesaran", "jarak", "masa"],
      ["Jika s ialah sesaran, maka v = ?", "ds/dt", "∫s dt", "d²s/dt²", "s/t²"],
      ["Jika v ialah halaju, maka a = ?", "dv/dt", "∫v dt", "v × t", "v²"],
      ["Zarah berhenti seketika apabila…", "v = 0", "a = 0", "s = 0", "t = 0"],
      ["Sesaran boleh dicari daripada halaju dengan…", "pengamiran", "pembezaan", "pendaraban", "pembahagian"]
    ],
    g: [
      () => { const a = nz(-3, 3), b = nz(-6, 6), t = r(0, 5); return qi(`s = ${poly([[a, 2], [b, 1]]).replace(/x/g, "t")}. Cari halaju apabila t = ${t}.`, 2 * a * t + b, [1, 2, Math.abs(a) || 1], "v = ds/dt"); },
      () => { const a = nz(-3, 3), b = r(-5, 5), t = r(0, 4); return qi(`v = ${poly([[a, 2], [b, 1], [r(-5, 5), 0]]).replace(/x/g, "t")}. Cari pecutan apabila t = ${t}.`, 2 * a * t + b, [1, 2, 3], "a = dv/dt"); },
      () => { const p = r(1, 6), k = pick([1, 2]); return qi(`v = ${k === 1 ? "" : k}t ${"−"} ${k * p} (m/s). Bilakah zarah berhenti seketika (s)?`, p, [1, 2, k]); }
    ] }
],

/* ======================= SAINS (KSSM T5) ======================= */
sains: [
  { t: "Mikroorganisma", q: [
    ["Mikroorganisma yang paling kecil dan hanya boleh membiak dalam sel hidup ialah…", "virus", "bakteria", "kulat", "alga"],
    ["Yis tergolong dalam kumpulan…", "kulat", "bakteria", "virus", "protozoa"],
    ["Penyakit malaria disebabkan oleh…", "protozoa (Plasmodium)", "virus", "bakteria", "kulat"],
    ["Antibiotik digunakan untuk merawat jangkitan…", "bakteria", "virus", "kulat sahaja", "cacing"],
    ["Pembiakan bakteria secara aseks dipanggil…", "belahan dedua", "pertunasan", "spora", "persenyawaan"],
    ["Mikroorganisma berguna dalam penghasilan tempe ialah…", "kulat (Rhizopus)", "virus", "Plasmodium", "Salmonella"],
    ["Vektor bagi penyakit denggi ialah nyamuk…", "Aedes", "Anopheles", "Culex", "lalat rumah"],
    ["Teknik aseptik bertujuan untuk…", "mengelakkan pencemaran oleh mikroorganisma", "membiakkan virus", "memanaskan makanan", "menambah rasa"]
  ]},
  { t: "Nutrisi dan Teknologi Makanan", q: [
    ["Nilai kalori makanan diukur dalam unit…", "kJ g⁻¹", "kg", "°C", "ml"],
    ["Nitrogen diserap oleh tumbuhan dalam bentuk…", "ion nitrat", "gas nitrogen", "protein", "urea pepejal"],
    ["Bakteria pengikat nitrogen terdapat dalam nodul akar tumbuhan…", "kekacang", "padi", "kelapa sawit", "getah"],
    ["Kaedah pengawetan makanan dengan memanaskan susu pada 63 °C selama 30 minit ialah…", "pempasteuran", "pengetinan", "penyejukbekuan", "pengasinan"],
    ["Pengawetan ikan masin menggunakan prinsip…", "osmosis", "respirasi", "fotosintesis", "penyejatan sahaja"],
    ["Makanan terubah suai genetik dikenali sebagai…", "GMO", "GPS", "MSG", "SST"],
    ["Teknologi pengeluaran makanan yang menanam tanpa tanah ialah…", "hidroponik", "fertigasi tanah", "tebang bakar", "pemuliharaan"]
  ]},
  { t: "Kelestarian Alam Sekitar", q: [
    ["Pembangunan lestari bermaksud memenuhi keperluan kini tanpa…", "menjejaskan keperluan generasi akan datang", "menggunakan sumber", "membina apa-apa", "menebang pokok"],
    ["Amalan 5R termasuk Reduce, Reuse, Recycle, Recover dan…", "Rethink", "Remove", "Run", "Repeat"],
    ["Gas rumah hijau utama yang meningkatkan pemanasan global ialah…", "karbon dioksida", "oksigen", "nitrogen", "helium"],
    ["Penipisan lapisan ozon disebabkan oleh…", "CFC", "oksigen", "air", "nitrogen"],
    ["Eutrofikasi berlaku akibat lebihan… di dalam air.", "baja (nitrat dan fosfat)", "oksigen", "garam", "pasir"],
    ["Hujan asid terhasil daripada gas…", "sulfur dioksida dan nitrogen oksida", "oksigen", "argon", "metana sahaja"],
    ["Teknologi hijau contohnya ialah…", "panel solar", "pembakaran terbuka", "insinerator tanpa penapis", "kenderaan berasap"]
  ]},
  { t: "Kadar Tindak Balas", q: [
    ["Kadar tindak balas ialah perubahan kuantiti bahan per…", "unit masa", "unit jisim", "unit isi padu sahaja", "unit suhu"],
    ["Faktor yang meningkatkan kadar tindak balas ialah…", "suhu lebih tinggi", "saiz bahan lebih besar", "kepekatan lebih rendah", "tiada mangkin"],
    ["Serbuk zink bertindak balas lebih cepat daripada ketulan zink kerana…", "jumlah luas permukaan lebih besar", "jisim lebih besar", "lebih berat", "warna berbeza"],
    ["Mangkin ialah bahan yang… kadar tindak balas tanpa berubah secara kimia.", "meningkatkan", "menghentikan", "mengurangkan sahaja", "tidak menjejaskan"],
    ["Makanan disimpan dalam peti sejuk untuk… kadar penguraian.", "melambatkan", "mempercepat", "mengekalkan", "menggandakan"],
    ["Teori yang menerangkan kadar tindak balas ialah teori…", "perlanggaran", "evolusi", "atom Dalton", "kenyal"]
  ]},
  { t: "Sebatian Karbon", q: [
    ["Sebatian organik ialah sebatian yang berasal daripada…", "benda hidup", "batuan", "logam", "garam"],
    ["Hidrokarbon terdiri daripada unsur…", "karbon dan hidrogen sahaja", "karbon dan oksigen", "natrium dan klorin", "nitrogen dan hidrogen"],
    ["Alkana ialah hidrokarbon…", "tepu", "tak tepu", "beraroma", "berlogam"],
    ["Alkena ialah hidrokarbon…", "tak tepu", "tepu", "ionik", "logam"],
    ["Etanol boleh dihasilkan melalui…", "penapaian glukosa oleh yis", "penyulingan air", "pembakaran arang", "elektrolisis"],
    ["Sabun dihasilkan melalui proses…", "saponifikasi", "penapaian", "pempolimeran", "penyulingan berperingkat"],
    ["Minyak sawit ialah sejenis…", "lemak/minyak (ester)", "alkana", "alkohol", "polimer sintetik"],
    ["Penyulingan berperingkat petroleum memisahkan pecahan berdasarkan…", "takat didih", "warna", "jisim pepejal", "bau"]
  ]},
  { t: "Elektrokimia", q: [
    ["Elektrolit ialah bahan yang boleh mengkonduksikan elektrik dalam keadaan…", "leburan atau larutan akueus", "pepejal sahaja", "gas sahaja", "beku"],
    ["Elektrod yang disambung kepada terminal positif ialah…", "anod", "katod", "elektrolit", "voltmeter"],
    ["Ion positif bergerak ke…", "katod", "anod", "bateri", "suis"],
    ["Penyaduran sudu dengan argentum: sudu dijadikan…", "katod", "anod", "elektrolit", "wayar"],
    ["Sel kimia menukarkan tenaga kimia kepada tenaga…", "elektrik", "haba sahaja", "bunyi", "nuklear"],
    ["Penulenan kuprum dengan elektrolisis menggunakan kuprum tak tulen sebagai…", "anod", "katod", "elektrolit", "mangkin"],
    ["Pengekstrakan aluminium daripada bauksit menggunakan…", "elektrolisis", "penapaian", "penyulingan", "pengasinan"]
  ]},
  { t: "Cahaya dan Optik", q: [
    ["Kanta cembung juga dikenali sebagai kanta…", "penumpu", "pencapah", "rata", "cermin"],
    ["Kanta cekung juga dikenali sebagai kanta…", "pencapah", "penumpu", "pembesar", "teleskop"],
    ["Rabun jauh diperbetulkan dengan kanta…", "cekung", "cembung", "silinder", "prisma"],
    ["Rabun dekat diperbetulkan dengan kanta…", "cembung", "cekung", "rata", "lutsinar"],
    ["Mikroskop menggunakan dua kanta…", "cembung", "cekung", "rata", "satu cekung satu cermin"],
    ["Pembiasan cahaya berlaku apabila cahaya…", "melalui medium berbeza ketumpatan", "dipantulkan cermin", "diserap", "dihasilkan"],
    ["Kamera menghasilkan imej yang…", "nyata, songsang dan dikecilkan", "maya dan tegak", "besar dan tegak", "maya dan songsang"]
  ]},
  { t: "Daya dan Tekanan", q: [
    ["Tekanan = ?", "daya ÷ luas", "daya × luas", "jisim × pecutan", "luas ÷ daya"],
    ["Unit tekanan ialah…", "pascal (Pa)", "newton (N)", "joule (J)", "watt (W)"],
    ["Pisau tajam memotong dengan mudah kerana luas permukaan kecil menghasilkan tekanan…", "tinggi", "rendah", "sifar", "sama"],
    ["Tekanan cecair bertambah dengan…", "kedalaman", "luas bekas", "bentuk bekas", "warna cecair"],
    ["Prinsip Pascal diaplikasikan dalam…", "jek hidraulik", "termometer", "kompas", "kanta"],
    ["Prinsip Bernoulli menerangkan…", "daya angkat sayap kapal terbang", "kapal terapung", "pembiasan cahaya", "magnet"],
    ["Prinsip Archimedes menerangkan…", "daya apungan", "tekanan udara", "geseran", "inersia"]
  ]},
  { t: "Teknologi Angkasa Lepas", q: [
    ["Satelit yang kelihatan pegun dari Bumi berada dalam orbit…", "geopegun", "rendah Bumi", "kutub", "elips"],
    ["Sistem kedudukan sejagat dikenali sebagai…", "GPS", "GSM", "USB", "LED"],
    ["Satelit komunikasi pertama Malaysia ialah…", "MEASAT-1", "Hubble", "Apollo 11", "Sputnik 1"],
    ["Satelit buatan pertama di dunia ialah…", "Sputnik 1", "Apollo 11", "Hubble", "MEASAT"],
    ["Angkasawan pertama Malaysia ialah…", "Dato' Dr. Sheikh Muszaphar Shukor", "Neil Armstrong", "Yuri Gagarin", "Tunku Abdul Rahman"],
    ["Teleskop angkasa yang terkenal ialah teleskop…", "Hubble", "Galileo darat", "kanta tangan", "mikroskop"],
    ["Aplikasi satelit penderiaan jauh termasuk…", "memantau bencana alam dan cuaca", "membuat roti", "memasak", "menjahit"]
  ]}
],

/* ======================= FIZIK (KSSM T5) ======================= */
fizik: [
  { t: "Daya dan Gerakan II",
    q: [
      ["Daya paduan ialah…", "satu daya tunggal yang mewakili gabungan dua atau lebih daya", "daya geseran sahaja", "berat objek", "daya graviti"],
      ["Objek dalam keseimbangan daya mempunyai daya paduan…", "sifar", "maksimum", "negatif", "sama dengan berat"],
      ["Hukum Hooke: pemanjangan spring berkadar terus dengan…", "daya yang dikenakan", "panjang asal", "suhu", "jisim spring sahaja"],
      ["Pemalar spring, k = ?", "F ÷ x", "F × x", "x ÷ F", "½Fx"],
      ["Tenaga keupayaan kenyal = ?", "½kx²", "kx", "mgh", "½mv²"],
      ["Spring disusun selari menjadikan sistem lebih…", "kaku (pemanjangan kurang)", "lembut", "panjang", "ringan"]
    ],
    g: [
      () => { const F = r(2, 12), x = pick([1, 2, 4, 5]); return fromF(`Daya ${F} N memanjangkan spring sebanyak ${x} cm. Pemalar spring (N cm⁻¹)?`, String(+(F / x).toFixed(2)), [String(F * x), String(+(x / F).toFixed(2)), String(F + x)], () => String(+(F / x + nz(-3, 3)).toFixed(2)), "k = F/x"); },
      () => { const a = r(3, 12), b = r(3, 12); return qi(`Dua daya ${a} N dan ${b} N bertindak pada arah bertentangan. Magnitud daya paduan (N)?`, Math.abs(a - b), [a, b, a + b - Math.abs(a - b) || 2]); },
      () => { const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15]]); return qi(`Dua daya ${a} N dan ${b} N bertindak berserenjang. Magnitud daya paduan (N)?`, c, [a, b, 2], "Teorem Pythagoras"); }
    ] },
  { t: "Tekanan",
    q: [
      ["Tekanan cecair, P = ?", "hρg", "ρ/h", "F × A", "mgh"],
      ["Tekanan atmosfera di aras laut lebih kurang…", "101 kPa (76 cmHg)", "1 Pa", "10 N", "0 Pa"],
      ["Alat untuk mengukur tekanan atmosfera ialah…", "barometer", "termometer", "ammeter", "manometer sahaja"],
      ["Prinsip Pascal menyatakan tekanan dalam bendalir tertutup dipindahkan…", "secara seragam ke semua arah", "ke atas sahaja", "ke bawah sahaja", "tidak dipindahkan"],
      ["Prinsip Archimedes: daya apungan sama dengan…", "berat bendalir yang disesarkan", "berat objek sahaja", "isi padu objek", "jisim bekas"],
      ["Mengikut prinsip Bernoulli, apabila laju bendalir bertambah, tekanannya…", "berkurang", "bertambah", "tidak berubah", "menjadi sifar"]
    ],
    g: [
      () => { const h = r(1, 10), rho = pick([1000, 800, 1200]); return fromF(`Cari tekanan cecair (Pa) pada kedalaman ${h} m, ketumpatan ${fmt(rho)} kg m⁻³, g = 10 m s⁻².`, fmt(h * rho * 10), [fmt(h * rho), fmt(rho * 10), fmt(h * rho * 100)], () => fmt(h * rho * 10 + nz(-5, 5) * 1000), "P = hρg"); },
      () => { const F1 = r(1, 10) * 10, A1 = pick([2, 5, 10]), k = pick([5, 10, 20]); return qi(`Jek hidraulik: daya ${F1} N pada omboh ${A1} cm². Omboh besar ${A1 * k} cm². Daya pada omboh besar (N)?`, F1 * k, [F1, k * 10, F1 * 2], "F₁/A₁ = F₂/A₂"); },
      () => { const F = r(2, 20) * 10, A = pick([2, 4, 5, 10]); return qi(`Daya ${F} N bertindak pada luas ${A} m². Tekanan (Pa)?`, F / A, [F, A, F * A - F / A || 5]); }
    ] },
  { t: "Elektrik",
    q: [
      ["Hukum Ohm: V = ?", "IR", "I/R", "R/I", "I + R"],
      ["Unit rintangan ialah…", "ohm (Ω)", "volt (V)", "ampere (A)", "watt (W)"],
      ["Ammeter disambung secara… dalam litar.", "sesiri", "selari", "terbalik", "bebas"],
      ["Voltmeter disambung secara… merentasi komponen.", "selari", "sesiri", "bersilang", "terbalik"],
      ["Rintangan dawai bertambah apabila panjangnya…", "bertambah", "berkurang", "tidak berubah", "dipotong"],
      ["Kuasa elektrik, P = ?", "VI", "V/I", "I/V", "V + I"],
      ["Unit tenaga elektrik yang dibil oleh TNB ialah…", "kWj (kilowatt-jam)", "watt", "volt", "ampere"]
    ],
    g: [
      () => { const I = r(1, 6), R = r(2, 12); return qi(`Arus ${I} A mengalir melalui perintang ${R} Ω. Beza keupayaan (V)?`, I * R, [I, R, I + R]); },
      () => { const a = r(1, 9), b = r(1, 9), c = r(1, 9); return qi(`Perintang ${a} Ω, ${b} Ω dan ${c} Ω disambung secara sesiri. Rintangan berkesan (Ω)?`, a + b + c, [1, 2, a]); },
      () => { const [a, b, e] = pick([[2, 2, "1"], [3, 6, "2"], [6, 6, "3"], [4, 4, "2"], [6, 12, "4"], [12, 12, "6"]]); return fromF(`Perintang ${a} Ω dan ${b} Ω disambung secara selari. Rintangan berkesan (Ω)?`, e, [String(a + b), String(a * b), String((a + b) / 2)], () => String(r(1, 15)), "1/R = 1/R₁ + 1/R₂"); },
      () => { const P = pick([1, 2, 1.5, 3]), t = r(2, 8), c = pick([0.2, 0.25, 0.5]); const E = P * t; return fromF(`Pemanas ${P} kW digunakan ${t} jam. Kos jika 1 kWj = RM${c.toFixed(2)}?`, rm(E * c), [rm(E), rm(P * c), rm(t * c)], () => rm(E * c + nz(-4, 4) * 0.25)); }
    ] },
  { t: "Keelektromagnetan",
    q: [
      ["Petua genggaman tangan kanan digunakan untuk menentukan arah…", "medan magnet di sekeliling konduktor", "arus ulang-alik", "tenaga haba", "cahaya"],
      ["Petua tangan kiri Fleming digunakan untuk…", "motor elektrik", "penjana", "transformer", "bateri"],
      ["Petua tangan kanan Fleming digunakan untuk…", "penjana (dinamo)", "motor", "loceng", "kompas"],
      ["Aruhan elektromagnet berlaku apabila konduktor…", "memotong garis medan magnet", "dipanaskan", "disejukkan", "dicat"],
      ["Transformer injak naik mempunyai lilitan sekunder yang… lilitan primer.", "lebih banyak daripada", "lebih sedikit daripada", "sama dengan", "tiada"],
      ["Transformer hanya berfungsi dengan arus…", "ulang-alik (a.u.)", "terus (a.t.)", "statik", "bateri sahaja"],
      ["Elektrik dihantar pada voltan tinggi untuk mengurangkan…", "kehilangan tenaga dalam kabel", "arus bekalan", "kuasa", "frekuensi"]
    ],
    g: [
      () => { const Np = pick([100, 200, 400, 500]), Ns = pick([20, 50, 1000, 2000]), Vp = pick([240, 12, 24, 120]); const Vs = Vp * Ns / Np; if (!Number.isInteger(Vs)) return null; return qi(`Transformer unggul: Np = ${Np}, Ns = ${Ns}, Vp = ${Vp} V. Cari Vs (V).`, Vs, [Vp, Math.round(Vp * Np / Ns) || 1, 2], "Vs/Vp = Ns/Np"); }
    ] },
  { t: "Elektronik",
    q: [
      ["Pancaran termion ialah pembebasan elektron daripada permukaan logam yang…", "dipanaskan", "disejukkan", "dicat", "dibasahkan"],
      ["Diod membenarkan arus mengalir dalam… arah sahaja.", "satu", "dua", "semua", "tiada"],
      ["Proses menukar arus ulang-alik kepada arus terus ialah…", "rektifikasi", "aruhan", "amplifikasi", "pengionan"],
      ["Transistor boleh berfungsi sebagai…", "suis automatik dan penguat arus", "bateri", "mentol", "fius"],
      ["Tiga terminal transistor ialah…", "pengeluar, tapak dan pengumpul", "anod, katod dan grid", "positif, negatif dan neutral", "primer, sekunder dan teras"],
      ["Kapasitor dalam litar rektifikasi berfungsi untuk…", "meratakan arus output", "menambah voltan", "menghentikan arus", "menukar a.t. ke a.u."],
      ["Separuh pengalir jenis-n didop dengan atom yang menambah…", "elektron bebas", "lohong", "proton", "neutron"]
    ] },
  { t: "Fizik Nuklear",
    q: [
      ["Zarah alfa ialah nukleus…", "helium", "hidrogen", "karbon", "uranium"],
      ["Sinaran yang paling tinggi kuasa penembusannya ialah…", "gama", "alfa", "beta", "inframerah"],
      ["Separuh hayat ialah masa untuk…", "separuh daripada nukleus radioaktif mereput", "semua nukleus mereput", "nukleus berganda", "suhu jatuh separuh"],
      ["Pembelahan nukleus berat seperti uranium dipanggil…", "pembelahan nukleus", "pelakuran nukleus", "pereputan alfa", "pengionan"],
      ["Tenaga Matahari terhasil daripada…", "pelakuran nukleus", "pembelahan nukleus", "pembakaran", "tindak balas kimia"],
      ["Persamaan tenaga Einstein ialah…", "E = mc²", "E = mgh", "E = ½mv²", "E = IV"],
      ["Alat untuk mengesan sinaran radioaktif ialah…", "tiub Geiger-Muller", "ammeter", "termometer", "barometer"]
    ],
    g: [
      () => { const T = pick([2, 3, 5, 8, 10]), n = r(1, 4), m0 = pick([64, 80, 128, 160, 320]); return qi(`Jisim asal bahan radioaktif ${m0} g, separuh hayat ${T} hari. Jisim tinggal selepas ${n * T} hari (g)?`, m0 / Math.pow(2, n), [m0 / 2 ** (n + 1), m0 / 2 ** Math.max(n - 1, 0) - m0 / 2 ** n || 4, 5], `${n} separuh hayat`); }
    ] },
  { t: "Fizik Kuantum",
    q: [
      ["Tenaga foton, E = ?", "hf", "mc", "mgh", "½mv²"],
      ["h dalam E = hf ialah pemalar…", "Planck", "Newton", "Hooke", "graviti"],
      ["Kesan fotoelektrik ialah pemancaran elektron apabila logam disinari…", "cahaya berfrekuensi cukup tinggi", "bunyi", "haba sahaja", "gelombang radio sahaja"],
      ["Kesan fotoelektrik diterangkan oleh…", "Albert Einstein", "Isaac Newton", "Galileo", "Archimedes"],
      ["Frekuensi minimum untuk kesan fotoelektrik dipanggil frekuensi…", "ambang", "maksimum", "resonans", "semula jadi"],
      ["Konsep kuantum menyatakan tenaga dipancarkan dalam bentuk…", "paket diskret (kuantum)", "aliran berterusan sahaja", "jisim", "cas positif"],
      ["Contoh aplikasi kesan fotoelektrik ialah…", "sel suria", "kipas", "termos", "periuk tekanan"]
    ] }
],

/* ======================= KIMIA (KSSM T5) ======================= */
kimia: [
  { t: "Keseimbangan Redoks", q: [
    ["Pengoksidaan ialah… elektron.", "kehilangan", "penerimaan", "perkongsian", "pemusnahan"],
    ["Penurunan ialah… elektron.", "penerimaan", "kehilangan", "perkongsian", "pemindahan proton"],
    ["Agen pengoksidaan ialah bahan yang…", "menerima elektron", "menderma elektron", "tidak berubah", "menderma proton"],
    ["Nombor pengoksidaan oksigen dalam kebanyakan sebatian ialah…", "−2", "+2", "0", "−1"],
    ["Nombor pengoksidaan unsur bebas seperti Na ialah…", "0", "+1", "−1", "+2"],
    ["Pengaratan besi memerlukan…", "oksigen dan air", "oksigen sahaja", "air sahaja", "garam sahaja"],
    ["Logam yang lebih elektropositif disalut pada besi untuk melindunginya, contohnya…", "zink (penggalvanian)", "kuprum", "argentum", "aurum"],
    ["Dalam sel elektrolisis, pengoksidaan berlaku di…", "anod", "katod", "elektrolit", "wayar"]
  ]},
  { t: "Sebatian Karbon", q: [
    ["Formula am alkana ialah…", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁OH"],
    ["Formula am alkena ialah…", "CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₊₁COOH", "CₙH₂ₙ₋₂"],
    ["Kumpulan berfungsi alkohol ialah…", "−OH (hidroksil)", "−COOH", "C=C", "−COO−"],
    ["Kumpulan berfungsi asid karboksilik ialah…", "−COOH (karboksil)", "−OH", "C=C", "−NH₂"],
    ["Ester terhasil daripada tindak balas asid karboksilik dengan…", "alkohol", "alkana", "air", "logam"],
    ["Ujian untuk alkena: air bromin berwarna perang bertukar…", "tidak berwarna", "biru", "merah", "hitam"],
    ["Etena ditukarkan kepada etana melalui proses…", "penghidrogenan", "penghidratan", "pengesteran", "pembakaran"],
    ["Isomer ialah sebatian dengan formula molekul sama tetapi…", "formula struktur berbeza", "jisim berbeza", "unsur berbeza", "bilangan atom berbeza"]
  ]},
  { t: "Termokimia", q: [
    ["Tindak balas eksotermik… haba ke persekitaran.", "membebaskan", "menyerap", "tidak melibatkan", "menyimpan"],
    ["Tindak balas endotermik… haba dari persekitaran.", "menyerap", "membebaskan", "tidak melibatkan", "memusnahkan"],
    ["Bagi tindak balas eksotermik, ΔH bernilai…", "negatif", "positif", "sifar", "tak terhingga"],
    ["Contoh proses endotermik ialah…", "melarutkan ammonium nitrat dalam air", "pembakaran", "peneutralan", "respirasi"],
    ["Haba peneutralan asid kuat dan alkali kuat lebih kurang…", "−57 kJ mol⁻¹", "+57 kJ mol⁻¹", "−5 kJ mol⁻¹", "0"],
    ["Pek sejuk segera menggunakan prinsip tindak balas…", "endotermik", "eksotermik", "redoks", "pempolimeran"]
  ]},
  { t: "Polimer", q: [
    ["Polimer ialah molekul besar yang terbina daripada banyak…", "monomer", "atom bebas", "ion", "elektron"],
    ["Monomer bagi polietena ialah…", "etena", "etana", "stirena", "isoprena"],
    ["Getah asli ialah polimer bagi…", "isoprena", "etena", "glukosa", "asid amino"],
    ["Proses menambah sulfur pada getah untuk menjadikannya lebih kuat ialah…", "pemvulkanan", "penggumpalan", "pengesteran", "penapaian"],
    ["Asid yang digunakan untuk menggumpalkan susu getah ialah…", "asid metanoik (asid formik)", "asid sulfurik", "asid nitrik", "asid hidroklorik"],
    ["Contoh polimer semula jadi ialah…", "kanji dan protein", "PVC", "nilon", "polistirena"],
    ["Polimer sintetik sukar dilupuskan kerana…", "tidak terbiodegradasikan", "mudah larut", "mudah terbakar sahaja", "terlalu ringan"]
  ]},
  { t: "Kimia Konsumer dan Industri", q: [
    ["Sabun kurang berkesan dalam air liat kerana membentuk…", "kekat (skum)", "buih banyak", "gas", "kristal garam"],
    ["Bahagian hidrofilik molekul sabun… air.", "larut dalam", "menolak", "tidak bertindak balas dengan", "membekukan"],
    ["Bahan tambah makanan yang menghalang pertumbuhan mikroorganisma ialah…", "pengawet", "pewarna", "perisa", "penstabil"],
    ["Antioksidan dalam makanan mencegah…", "pengoksidaan lemak (tengik)", "pertumbuhan", "pewarnaan", "pemanisan"],
    ["Ubat analgesik digunakan untuk…", "melegakan kesakitan", "membunuh bakteria", "merawat jangkitan kulat", "menidurkan"],
    ["Nanoteknologi melibatkan bahan bersaiz…", "1 – 100 nanometer", "1 – 100 meter", "1 – 100 sentimeter", "1 – 100 milimeter"],
    ["Contoh teknologi hijau dalam pengurusan sisa ialah…", "pengkomposan", "pembakaran terbuka", "pembuangan ke sungai", "penimbusan tanpa kawalan"]
  ]}
],

/* ======================= BIOLOGI (KSSM T5) ======================= */
bio: [
  { t: "Organisasi Tisu Tumbuhan dan Pertumbuhan", q: [
    ["Tisu meristem ialah tisu yang…", "aktif membahagi", "mati", "mengangkut air sahaja", "menyimpan kanji sahaja"],
    ["Meristem apeks terdapat di…", "hujung pucuk dan akar", "batang tengah", "daun sahaja", "bunga"],
    ["Meristem sisi menyebabkan pertumbuhan…", "sekunder (bertambah lilit)", "primer (bertambah panjang)", "bunga", "akar sahaja"],
    ["Tisu xilem mengangkut…", "air dan garam mineral", "makanan", "oksigen", "hormon sahaja"],
    ["Tisu floem mengangkut…", "bahan organik (sukrosa)", "air sahaja", "garam mineral sahaja", "karbon dioksida"],
    ["Kitaran hidup tumbuhan yang hidup lebih dua tahun ialah…", "saka (perenial)", "semusim (anual)", "dwimusim", "sehari"]
  ]},
  { t: "Struktur dan Fungsi Daun", q: [
    ["Liang stoma dikawal oleh…", "sel pengawal", "sel epidermis", "sel palisad", "xilem"],
    ["Fotosintesis berlaku terutamanya di sel…", "mesofil palisad", "epidermis atas", "xilem", "floem"],
    ["Transpirasi ialah kehilangan… dari permukaan tumbuhan.", "wap air", "oksigen sahaja", "glukosa", "karbon dioksida"],
    ["Persamaan fotosintesis: karbon dioksida + air → glukosa + …", "oksigen", "karbon dioksida", "nitrogen", "tenaga haba"],
    ["Tindak balas bersandarkan cahaya berlaku di…", "tilakoid (grana)", "stroma", "mitokondrion", "nukleus"],
    ["Titik pampasan dicapai apabila kadar fotosintesis… kadar respirasi.", "sama dengan", "lebih tinggi daripada", "lebih rendah daripada", "dua kali ganda"],
    ["Faktor yang mempengaruhi kadar fotosintesis termasuk…", "keamatan cahaya, suhu dan kepekatan CO₂", "warna pasu", "bunyi", "jenis tanah sahaja"]
  ]},
  { t: "Nutrisi dalam Tumbuhan", q: [
    ["Makronutrien yang diperlukan untuk sintesis protein ialah…", "nitrogen", "zink", "kuprum", "boron"],
    ["Kekurangan magnesium menyebabkan daun…", "kekuningan (klorosis)", "lebih hijau", "bertambah besar", "berbunga"],
    ["Tumbuhan karnivor seperti periuk kera memerangkap serangga untuk mendapatkan…", "nitrogen", "air", "oksigen", "cahaya"],
    ["Contoh tumbuhan parasit ialah…", "Rafflesia", "pokok mangga", "padi", "kaktus"],
    ["Mikronutrien diperlukan dalam kuantiti…", "kecil", "besar", "sangat besar", "tidak diperlukan"],
    ["Fosforus penting untuk…", "pertumbuhan akar dan sintesis ATP", "warna bunga sahaja", "bau", "duri"]
  ]},
  { t: "Pengangkutan dalam Tumbuhan", q: [
    ["Air diserap oleh akar melalui…", "osmosis di sel rambut akar", "fotosintesis", "translokasi", "respirasi"],
    ["Daya utama yang menarik air ke atas dalam xilem ialah…", "tarikan transpirasi", "tekanan akar sahaja", "graviti", "angin"],
    ["Pengangkutan bahan organik melalui floem dipanggil…", "translokasi", "transpirasi", "gutasi", "osmosis"],
    ["Gutasi ialah kehilangan air dalam bentuk…", "titisan cecair melalui hidatod", "wap melalui stoma", "gas", "kanji"],
    ["Kadar transpirasi bertambah apabila…", "angin kencang dan kelembapan rendah", "kelembapan tinggi", "gelap", "suhu rendah"],
    ["Eksperimen gelang batang menunjukkan bengkak di atas gelang kerana…", "floem dibuang, makanan terkumpul", "xilem pecah", "air terkumpul", "akar mati"]
  ]},
  { t: "Gerak Balas dalam Tumbuhan", q: [
    ["Gerak balas tumbuhan terhadap cahaya ialah…", "fototropisme", "geotropisme", "hidrotropisme", "tigmotropisme"],
    ["Gerak balas akar ke arah graviti ialah…", "geotropisme positif", "fototropisme positif", "tigmotropisme", "hidrotropisme negatif"],
    ["Gerak balas sulur paut melilit sokongan ialah…", "tigmotropisme", "fototropisme", "geotropisme", "kemotropisme"],
    ["Hormon tumbuhan yang menyebabkan pucuk membengkok ke arah cahaya ialah…", "auksin", "etilena", "asid absisik", "insulin"],
    ["Hormon yang mempercepat pemasakan buah ialah…", "etilena", "auksin", "giberelin", "sitokinin"],
    ["Daun semalu menguncup apabila disentuh. Ini ialah gerak balas…", "nastik (tigmonasti)", "fototropisme", "geotropisme", "hidrotropisme"]
  ]},
  { t: "Pembiakan Seks dalam Tumbuhan Berbunga", q: [
    ["Organ pembiakan jantan bunga ialah…", "stamen", "pistil", "kelopak", "sepal"],
    ["Organ pembiakan betina bunga ialah…", "pistil (karpel)", "stamen", "debunga", "ranggi"],
    ["Pendebungaan ialah pemindahan debunga dari anter ke…", "stigma", "ovari", "sepal", "tangkai"],
    ["Persenyawaan ganda dua menghasilkan zigot dan…", "nukleus endosperma triploid", "dua zigot", "dua biji", "kelopak"],
    ["Selepas persenyawaan, ovul berkembang menjadi…", "biji benih", "buah", "bunga", "daun"],
    ["Selepas persenyawaan, ovari berkembang menjadi…", "buah", "biji benih", "akar", "debunga"],
    ["Bunga yang didebungakan oleh angin biasanya…", "kecil, tidak berwarna terang dan tiada nektar", "besar dan wangi", "berwarna terang", "banyak nektar"]
  ]},
  { t: "Penyesuaian Tumbuhan dalam Habitat Berbeza", q: [
    ["Tumbuhan xerofit hidup di kawasan…", "kering", "berair", "berlumpur masin", "kutub sahaja"],
    ["Kaktus mempunyai duri (daun terubah suai) untuk…", "mengurangkan kehilangan air", "menangkap cahaya", "membiak", "menyerap nutrien"],
    ["Tumbuhan hidrofit hidup di…", "dalam atau atas air", "padang pasir", "gunung kering", "batu"],
    ["Bakau mempunyai pneumatofor untuk…", "pertukaran gas", "menyimpan makanan", "menyerap garam", "membiak"],
    ["Halofit ialah tumbuhan yang hidup di kawasan…", "bermasin", "padang pasir", "tasik air tawar", "hutan sejuk"],
    ["Teratai mempunyai daun lebar dan terapung dengan stoma di permukaan…", "atas", "bawah", "tepi", "tiada stoma"]
  ]},
  { t: "Biodiversiti", q: [
    ["Biodiversiti bermaksud…", "kepelbagaian organisma hidup", "satu spesies sahaja", "bilangan manusia", "jenis tanah"],
    ["Sistem penamaan binomial diperkenalkan oleh…", "Carolus Linnaeus", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"],
    ["Nama saintifik manusia ialah…", "Homo sapiens", "Felis catus", "Oryza sativa", "Canis familiaris"],
    ["Hierarki pengelasan yang betul dari besar ke kecil ialah…", "alam, filum, kelas, order, famili, genus, spesies", "spesies, genus, famili, order", "kelas, alam, filum", "genus, spesies, alam"],
    ["Dalam nama binomial, perkataan pertama ialah…", "genus", "spesies", "famili", "order"],
    ["Kunci dikotomi digunakan untuk…", "mengenal pasti organisma", "mengukur suhu", "membuat ubat", "mengira populasi"],
    ["Mikroorganisma yang mempunyai nukleus sebenar dikelaskan sebagai…", "eukariot", "prokariot", "virus", "bakteria"]
  ]},
  { t: "Ekosistem", q: [
    ["Pengeluar dalam ekosistem ialah…", "tumbuhan hijau", "harimau", "kulat", "manusia"],
    ["Pengurai seperti kulat dan bakteria berfungsi untuk…", "menguraikan bahan organik", "fotosintesis", "memangsa", "mendebungakan"],
    ["Hubungan di mana kedua-dua organisma mendapat manfaat ialah…", "mutualisme", "parasitisme", "komensalisme", "pemangsaan"],
    ["Hubungan di mana satu mendapat manfaat dan satu lagi tidak terjejas ialah…", "komensalisme", "mutualisme", "parasitisme", "persaingan"],
    ["Tenaga dalam rantai makanan… pada setiap aras trof.", "berkurang", "bertambah", "sama", "berganda"],
    ["Kaedah persampelan kuadrat sesuai untuk menganggar populasi…", "tumbuhan", "burung", "ikan", "rama-rama"],
    ["Kaedah tangkap, tanda, lepas dan tangkap semula sesuai untuk…", "haiwan yang bergerak", "tumbuhan", "kulat", "lumut"]
  ]},
  { t: "Kelestarian Alam Sekitar", q: [
    ["Penebangan hutan secara berleluasa boleh menyebabkan…", "hakisan tanah dan banjir kilat", "udara lebih bersih", "biodiversiti bertambah", "hujan bertambah sejuk"],
    ["Kesan rumah hijau yang berlebihan menyebabkan…", "pemanasan global", "zaman ais", "kepupusan bakteria", "hujan salji"],
    ["BOD tinggi dalam air sungai menunjukkan air…", "tercemar teruk", "sangat bersih", "beroksigen tinggi", "tiada organisma"],
    ["Kawalan biologi menggunakan… untuk mengawal perosak.", "musuh semula jadi", "racun kimia", "api", "bunyi"],
    ["Contoh kawalan biologi ialah menggunakan burung pungguk untuk mengawal…", "tikus di ladang sawit", "nyamuk", "rumput", "siput"],
    ["Pemuliharaan bermaksud…", "penggunaan sumber secara bijak", "memusnahkan habitat", "memburu haiwan", "membuang sisa"]
  ]},
  { t: "Pewarisan", q: [
    ["Bapa genetik ialah…", "Gregor Mendel", "Charles Darwin", "Robert Hooke", "Louis Pasteur"],
    ["Alel dominan ialah alel yang…", "menunjukkan cirinya walaupun hanya satu", "tersembunyi", "tidak diwarisi", "hanya pada lelaki"],
    ["Genotip Tt ialah…", "heterozigot", "homozigot dominan", "homozigot resesif", "haploid"],
    ["Kacukan Tt × Tt menghasilkan nisbah fenotip…", "3 : 1", "1 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1"],
    ["Kacukan dihibrid (AaBb × AaBb) menghasilkan nisbah fenotip…", "9 : 3 : 3 : 1", "3 : 1", "1 : 1", "1 : 2 : 1"],
    ["Penentuan jantina: lelaki mempunyai kromosom seks…", "XY", "XX", "YY", "X sahaja"],
    ["Buta warna ialah penyakit pewarisan…", "terangkai seks", "berjangkit", "disebabkan virus", "disebabkan pemakanan"],
    ["Kumpulan darah dengan alel IA dan IB ialah…", "AB", "A", "B", "O"]
  ]},
  { t: "Variasi", q: [
    ["Variasi selanjar contohnya…", "ketinggian", "kumpulan darah", "lesung pipit", "keupayaan menggulung lidah"],
    ["Variasi tak selanjar contohnya…", "kumpulan darah", "berat badan", "ketinggian", "warna kulit"],
    ["Graf variasi selanjar berbentuk…", "taburan normal (loceng)", "carta bar terpisah", "garis lurus", "bulatan"],
    ["Mutasi ialah perubahan…", "bahan genetik secara rawak", "berat badan", "pakaian", "tabiat"],
    ["Sindrom Down disebabkan oleh…", "lebihan satu kromosom 21", "kekurangan vitamin", "jangkitan bakteria", "kemalangan"],
    ["Faktor yang menyebabkan variasi termasuk…", "pindah silang dan persenyawaan rawak", "makan banyak", "tidur lewat", "warna baju"]
  ]},
  { t: "Teknologi Genetik", q: [
    ["Kejuruteraan genetik melibatkan…", "pemindahan gen dari satu organisma ke organisma lain", "kacukan biasa", "pemakanan", "pembiakan aseks semula jadi"],
    ["Insulin manusia kini dihasilkan menggunakan…", "bakteria terubah suai genetik", "daun pokok", "air laut", "batu"],
    ["Profil DNA digunakan dalam…", "forensik dan ujian paterniti", "memasak", "pertanian sahaja", "penjanaan elektrik"],
    ["Terapi gen bertujuan untuk…", "merawat penyakit genetik", "menambah berat", "mengubah warna rambut", "membuat ubat batuk"],
    ["Klon ialah organisma yang…", "seiras secara genetik dengan induknya", "berbeza sepenuhnya", "tiada DNA", "haploid"],
    ["Contoh tanaman GMO ialah jagung yang…", "tahan perosak", "berwarna biru", "tanpa biji", "boleh bercakap"]
  ]}
],

/* ======================= SEJARAH (KSSM T5) ======================= */
sejarah: [
  { n: 1, t: "Kedaulatan Negara", q: [
    ["Kedaulatan bermaksud negara mempunyai kuasa…", "penuh untuk mentadbir tanpa campur tangan luar", "terhad", "di bawah negara lain", "sementara"],
    ["Antara ciri negara berdaulat ialah mempunyai…", "wilayah, rakyat, kerajaan dan kedaulatan", "pantai sahaja", "raja sahaja", "tentera asing"],
    ["Ancaman kepada kedaulatan negara termasuk…", "pencerobohan wilayah", "pelancongan", "perdagangan", "pendidikan"],
    ["Pertikaian Pulau Batu Puteh diputuskan oleh…", "Mahkamah Keadilan Antarabangsa (ICJ)", "Mahkamah Persekutuan", "ASEAN", "PBB Dewan Keselamatan"],
    ["Pulau Sipadan dan Ligitan diputuskan milik Malaysia pada tahun…", "2002", "2008", "1963", "1990"],
    ["Pasukan yang menjaga keselamatan perairan Malaysia ialah…", "APMM (Maritim Malaysia)", "JPJ", "Bomba", "SPR"],
    ["Rakyat boleh mempertahankan kedaulatan dengan…", "taat setia dan bersatu padu", "menyebar fitnah", "mengabaikan undang-undang", "berpecah belah"]
  ]},
  { n: 2, t: "Perlembagaan Persekutuan", q: [
    ["Perlembagaan Persekutuan ialah undang-undang…", "tertinggi negara", "negeri sahaja", "sementara", "antarabangsa"],
    ["Agama Persekutuan ialah Islam, seperti dalam Perkara…", "3", "152", "153", "160"],
    ["Bahasa kebangsaan ialah bahasa Melayu, seperti dalam Perkara…", "152", "3", "153", "1"],
    ["Kedudukan istimewa orang Melayu dan bumiputera Sabah dan Sarawak terkandung dalam Perkara…", "153", "152", "3", "8"],
    ["Kebebasan asasi rakyat termasuk…", "kebebasan beragama", "kebebasan melanggar undang-undang", "kebebasan menghina", "kebebasan mencuri"],
    ["Pindaan perlembagaan biasanya memerlukan sokongan… ahli Dewan Rakyat.", "dua pertiga", "separuh", "semua", "satu perempat"],
    ["Pengasingan kuasa membahagikan kuasa kepada badan perundangan, eksekutif dan…", "kehakiman", "tentera", "polis", "media"]
  ]},
  { n: 3, t: "Raja Berperlembagaan dan Demokrasi Berparlimen", q: [
    ["Sistem pemerintahan Malaysia ialah Demokrasi Berparlimen dan…", "Raja Berperlembagaan", "Raja Mutlak", "Republik", "Komunis"],
    ["Yang di-Pertuan Agong bertindak atas nasihat…", "Jemaah Menteri / Perdana Menteri", "rakyat secara langsung", "hakim", "polis"],
    ["Parlimen Malaysia terdiri daripada Yang di-Pertuan Agong, Dewan Negara dan…", "Dewan Rakyat", "Majlis Raja-Raja", "Mahkamah", "Kabinet"],
    ["Ahli Dewan Rakyat dipilih melalui…", "pilihan raya umum", "lantikan raja", "undian Kabinet", "keturunan"],
    ["Perdana Menteri dilantik oleh…", "Yang di-Pertuan Agong", "Dewan Negara", "Ketua Hakim", "SPR"],
    ["Yang di-Pertuan Agong memegang jawatan selama…", "5 tahun", "4 tahun", "seumur hidup", "10 tahun"],
    ["Majlis Raja-Raja dianggotai oleh Raja-Raja Melayu dan…", "Yang di-Pertua Negeri", "Perdana Menteri", "Menteri Besar", "Ketua Polis"]
  ]},
  { n: 4, t: "Sistem Persekutuan", q: [
    ["Sistem persekutuan ialah pembahagian kuasa antara kerajaan…", "pusat (persekutuan) dan negeri", "dua negara", "bandar dan kampung", "raja dan rakyat sahaja"],
    ["Perkara dalam Senarai Persekutuan contohnya…", "pertahanan dan hal ehwal luar", "tanah", "agama Islam", "kerajaan tempatan"],
    ["Perkara dalam Senarai Negeri contohnya…", "tanah dan agama Islam", "pertahanan", "mata wang", "hubungan luar"],
    ["Perkara dalam Senarai Bersama contohnya…", "kebajikan masyarakat", "pertahanan", "tanah", "mata wang"],
    ["Ketua kerajaan negeri yang beraja dikenali sebagai…", "Menteri Besar", "Ketua Menteri", "Perdana Menteri", "Gabenor"],
    ["Ketua kerajaan negeri tidak beraja seperti Melaka dikenali sebagai…", "Ketua Menteri", "Menteri Besar", "Sultan", "Datuk Bandar"],
    ["Jika undang-undang negeri bercanggah dengan undang-undang persekutuan, yang terpakai ialah undang-undang…", "persekutuan", "negeri", "tempatan", "antarabangsa"]
  ]},
  { n: 5, t: "Pembentukan Malaysia", q: [
    ["Malaysia dibentuk pada…", "16 September 1963", "31 Ogos 1957", "9 Ogos 1965", "1 Februari 1948"],
    ["Gagasan Malaysia diumumkan oleh Tunku Abdul Rahman pada tahun…", "1961", "1957", "1963", "1965"],
    ["Suruhanjaya yang meninjau pendapat rakyat Sabah dan Sarawak ialah…", "Suruhanjaya Cobbold", "Suruhanjaya Reid", "Suruhanjaya Pilihan Raya", "Suruhanjaya Templer"],
    ["Wilayah yang menyertai Persekutuan Tanah Melayu membentuk Malaysia ialah Sabah, Sarawak dan…", "Singapura", "Brunei", "Patani", "Riau"],
    ["Negara yang tidak menyertai Malaysia walaupun pada awalnya dijemput ialah…", "Brunei", "Singapura", "Sabah", "Sarawak"],
    ["Singapura keluar daripada Malaysia pada…", "9 Ogos 1965", "16 September 1963", "31 Ogos 1957", "1 Januari 1966"],
    ["Perjanjian yang memuatkan syarat penyertaan Sabah dan Sarawak ialah…", "Perjanjian Malaysia 1963", "Perjanjian Pangkor", "Perjanjian Inggeris-Belanda", "Perjanjian Bangkok"]
  ]},
  { n: 6, t: "Cabaran Selepas Pembentukan Malaysia", q: [
    ["Negara yang melancarkan Konfrontasi terhadap Malaysia ialah…", "Indonesia", "Thailand", "Filipina", "Brunei"],
    ["Slogan Konfrontasi Indonesia ialah…", "Ganyang Malaysia", "Malaysia Boleh", "Bersatu Teguh", "1Malaysia"],
    ["Filipina menuntut wilayah…", "Sabah", "Sarawak", "Pulau Pinang", "Labuan sahaja"],
    ["Konfrontasi berakhir dengan perjanjian damai pada tahun…", "1966", "1963", "1965", "1970"],
    ["Peristiwa 13 Mei 1969 membawa kepada penubuhan…", "MAGERAN", "ASEAN", "UMNO", "Perikatan"],
    ["Selepas 13 Mei 1969, ideologi negara yang diperkenalkan ialah…", "Rukun Negara", "Wawasan 2020", "Dasar Pandang ke Timur", "Islam Hadhari"],
    ["Rukun Negara diisytiharkan pada…", "31 Ogos 1970", "16 September 1963", "31 Ogos 1957", "13 Mei 1969"]
  ]},
  { n: 7, t: "Membina Kesejahteraan Negara", q: [
    ["Prinsip pertama Rukun Negara ialah…", "Kepercayaan kepada Tuhan", "Kesetiaan kepada Raja dan Negara", "Keluhuran Perlembagaan", "Kesopanan dan Kesusilaan"],
    ["Prinsip kelima Rukun Negara ialah…", "Kesopanan dan Kesusilaan", "Kedaulatan Undang-undang", "Kepercayaan kepada Tuhan", "Keluhuran Perlembagaan"],
    ["Dasar yang menekankan perpaduan melalui kebudayaan ialah Dasar…", "Kebudayaan Kebangsaan", "Ekonomi Baru", "Pertanian Negara", "Pandang ke Timur"],
    ["Penyata Razak 1956 berkaitan dengan…", "pendidikan", "pertanian", "pertahanan", "kesihatan"],
    ["Program Latihan Khidmat Negara (PLKN) bertujuan untuk…", "memupuk patriotisme dan perpaduan", "melatih tentera upahan", "mengajar bahasa asing", "mengutip cukai"],
    ["Jabatan yang bertanggungjawab memupuk perpaduan ialah…", "Jabatan Perpaduan Negara dan Integrasi Nasional", "JPJ", "LHDN", "Jabatan Laut"]
  ]},
  { n: 8, t: "Membina Kemakmuran Negara", q: [
    ["Dasar Ekonomi Baru (DEB) diperkenalkan pada tahun…", "1971", "1957", "1991", "2001"],
    ["Matlamat serampang dua mata DEB ialah membasmi kemiskinan dan…", "menyusun semula masyarakat", "menambah cukai", "membina tentera", "menutup kilang"],
    ["Agensi yang membuka tanah rancangan untuk penduduk luar bandar ialah…", "FELDA", "TNB", "PETRONAS", "LHDN"],
    ["Dasar Pandang ke Timur menjadikan negara… sebagai contoh.", "Jepun dan Korea Selatan", "Britain", "Amerika Syarikat", "Australia"],
    ["Wawasan 2020 dilancarkan oleh…", "Tun Dr. Mahathir Mohamad", "Tunku Abdul Rahman", "Tun Abdul Razak", "Tun Hussein Onn"],
    ["Bapa Pembangunan Malaysia ialah…", "Tun Abdul Razak", "Tunku Abdul Rahman", "Tun Hussein Onn", "Tun Dr. Mahathir"],
    ["Syarikat minyak dan gas nasional Malaysia ialah…", "PETRONAS", "PROTON", "MAS", "TNB"]
  ]},
  { n: 9, t: "Dasar Luar Malaysia", q: [
    ["Malaysia menjadi anggota PBB pada tahun…", "1957", "1963", "1967", "1945"],
    ["ASEAN ditubuhkan pada tahun 1967 melalui…", "Deklarasi Bangkok", "Deklarasi Kuala Lumpur", "Perjanjian Paris", "Piagam PBB"],
    ["Negara pengasas ASEAN termasuk Malaysia, Indonesia, Filipina, Singapura dan…", "Thailand", "Brunei", "Vietnam", "Myanmar"],
    ["Konsep ZOPFAN bermaksud zon…", "aman, bebas dan berkecuali", "perdagangan bebas", "ketenteraan", "pelancongan"],
    ["Malaysia menganggotai Pertubuhan Kerjasama Islam (OIC) untuk…", "mengukuhkan hubungan dengan negara Islam", "berperang", "menjajah", "mengasingkan diri"],
    ["Dasar luar Malaysia pada masa kini bersifat…", "berkecuali dan bersahabat dengan semua negara", "memihak satu blok sahaja", "tertutup", "agresif"],
    ["Pertubuhan negara-negara bekas tanah jajahan British ialah…", "Komanwel", "ASEAN", "OIC", "NAM"]
  ]},
  { n: 10, t: "Kecemerlangan Malaysia di Persada Dunia", q: [
    ["Malaysia pernah dipilih sebagai ahli tidak tetap Majlis Keselamatan…", "PBB", "ASEAN", "OIC", "Komanwel"],
    ["Pasukan pengaman Malaysia yang berkhidmat di bawah PBB dikenali sebagai…", "MALBATT", "Force 136", "MPAJA", "PLKN"],
    ["Mercu tanda Malaysia yang pernah menjadi bangunan tertinggi dunia ialah…", "Menara Berkembar PETRONAS", "Menara KL", "Bangunan Sultan Abdul Samad", "Stadium Merdeka"],
    ["Pendaki Malaysia pertama yang menawan puncak Everest pada 1997 ialah…", "M. Magendran dan N. Mohanadas", "Datuk Lee Chong Wei", "Nicol David", "Azizulhasni Awang"],
    ["Pemain squasy Malaysia yang pernah menjadi nombor satu dunia bertahun-tahun ialah…", "Datuk Nicol David", "Datuk Lee Chong Wei", "Pandelela Rinong", "Mohd Azizulhasni"],
    ["Kereta nasional pertama Malaysia ialah…", "Proton Saga", "Perodua Kancil", "Proton Wira", "Myvi"],
    ["Malaysia terkenal sebagai pengeluar utama dunia bagi…", "minyak sawit", "gandum", "kopi Arabika", "salji"]
  ]}
],

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Golongan Kata dan Imbuhan", q: [
    ["Imbuhan apitan \"pe-…-an\" + \"bangun\" menjadi…", "pembangunan", "perbangunan", "kebangunan", "pembangun"],
    ["Imbuhan apitan \"memper-…-i\" + \"baru\" menjadi…", "memperbaharui", "memperbarukan", "membaharui", "memperbaru"],
    ["Imbuhan \"ke-…-an\" yang membawa maksud 'terlalu' ialah…", "kebesaran (baju itu)", "kerajaan", "keadilan", "kemerdekaan"],
    ["Kata nama terbitan bagi \"tulis\" yang bermaksud orang yang menulis ialah…", "penulis", "tulisan", "penulisan", "bertulis"],
    ["Kata kerja transitif ialah kata kerja yang…", "memerlukan objek", "tidak memerlukan objek", "menunjukkan sifat", "menunjukkan arah"],
    ["Kata kerja tak transitif dalam ayat ialah…", "Adik sedang tidur.", "Adik memakan kuih.", "Ibu memasak nasi.", "Ali menendang bola."],
    ["Kata adjektif warna ialah…", "kemerah-merahan", "besar", "cepat", "lazat"],
    ["Kata tanya yang betul: \"___ kamu datang lewat?\"", "Mengapakah", "Apakah", "Siapakah", "Manakah"]
  ]},
  { t: "Ayat dan Kesalahan Bahasa", q: [
    ["Ayat yang betul ialah…", "Kami berasa bangga dengan kejayaan itu.", "Kami merasa bangga dengan kejayaan itu.", "Kami rasa-rasa bangga kejayaan itu.", "Kami berasa bangga kepada kejayaan itu."],
    ["Ayat yang betul ialah…", "Mereka bertanya kepada guru.", "Mereka bertanyakan kepada guru.", "Mereka menanya kepada guru.", "Mereka tanya pada guru."],
    ["Ayat yang betul ialah…", "Pelajar itu sedang mengulang kaji pelajaran.", "Pelajar itu sedang mengulangkaji pelajaran.", "Pelajar itu sedang ulang-kaji.", "Pelajar itu sedang mengulang-ngulang kaji."],
    ["Ayat yang betul ialah…", "Dia mendapat hadiah daripada pengetua.", "Dia mendapat hadiah dari pengetua.", "Dia mendapat hadiah kepada pengetua.", "Dia dapatkan hadiah pengetua."],
    ["\"Dari\" digunakan untuk menunjukkan…", "tempat, arah atau masa", "punca manusia", "sumber benda abstrak", "perbandingan"],
    ["\"Daripada\" digunakan untuk menunjukkan…", "sumber manusia, asal kejadian atau perbandingan", "arah sahaja", "waktu sahaja", "tempat sahaja"],
    ["Ayat yang betul ialah…", "Rumah itu dibina daripada kayu.", "Rumah itu dibina dari kayu.", "Rumah itu dibina kepada kayu.", "Rumah itu dibina oleh kayu."]
  ]},
  { t: "Peribahasa", q: [
    ["Maksud \"berat sama dipikul, ringan sama dijinjing\":", "bekerjasama dalam suka dan duka", "membawa barang berat", "malas bekerja", "bersendirian"],
    ["Maksud \"seperti aur dengan tebing\":", "saling membantu", "bermusuhan", "pemalas", "angkuh"],
    ["Maksud \"bagai menatang minyak yang penuh\":", "menjaga dengan penuh kasih sayang", "membazir minyak", "bekerja keras", "tergesa-gesa"],
    ["Maksud \"ukur baju di badan sendiri\":", "membuat sesuatu mengikut kemampuan diri", "menjahit baju", "membeli baju", "suka bergaya"],
    ["Maksud \"bersatu teguh, bercerai roboh\":", "perpaduan membawa kekuatan", "rumah roboh", "bercerai berai", "teguh berdiri"],
    ["Maksud \"rajin dan usaha tangga kejayaan\":", "kejayaan dicapai dengan rajin berusaha", "tangga yang tinggi", "malas belajar", "nasib baik"],
    ["Maksud simpulan bahasa \"kaki bangku\":", "tidak pandai bermain bola sepak", "kaki kerusi", "suka duduk", "tukang kayu"],
    ["Maksud simpulan bahasa \"kepala batu\":", "degil", "bijak", "kuat", "botak"]
  ]},
  { t: "Ejaan dan Istilah", q: [
    ["Ejaan yang betul ialah…", "kerjasama", "kerja sama", "kerja-sama", "kerjesama"],
    ["Ejaan yang betul ialah…", "antarabangsa", "antara bangsa", "antara-bangsa", "antarbangsa"],
    ["Ejaan yang betul ialah…", "pascasiswazah", "pasca siswazah", "pasca-siswazah", "paskasiswazah"],
    ["Ejaan yang betul ialah…", "akhbar", "akbar", "ahkbar", "akhbaar"],
    ["Ejaan yang betul ialah…", "infrastruktur", "infrastuktur", "infra struktur", "inferastruktur"],
    ["Istilah bahasa Melayu bagi \"artificial intelligence\" ialah…", "kecerdasan buatan", "kepintaran palsu", "otak mesin", "akal tiruan"],
    ["Istilah bahasa Melayu bagi \"entrepreneur\" ialah…", "usahawan", "pengurus", "pedagang kecil", "pekerja"]
  ]},
  { t: "Penulisan dan Komunikasi", q: [
    ["Karangan berbentuk perbincangan perlu mengemukakan…", "isi yang disokong huraian dan contoh", "dialog sahaja", "puisi", "senarai nama"],
    ["Surat kiriman tidak rasmi ditulis kepada…", "kawan atau keluarga", "pengetua", "jabatan kerajaan", "syarikat"],
    ["Ucapan yang baik perlu ada…", "kata aluan, isi dan penutup", "nombor rujukan", "tandatangan saksi", "senarai harga"],
    ["Laporan yang baik menggunakan bahasa…", "ringkas, jelas dan tepat", "berbunga-bunga", "slanga", "bahasa SMS"],
    ["Bahasa yang sopan semasa berbincang ialah…", "\"Saya kurang bersetuju kerana…\"", "\"Kamu bodoh!\"", "\"Diamlah!\"", "\"Tak payah cakap.\""],
    ["Sinopsis ialah…", "ringkasan jalan cerita", "biodata pengarang", "senarai watak sahaja", "kritikan"],
    ["Pendapat dalam karangan perlu disokong dengan…", "fakta dan contoh", "khabar angin", "emosi semata-mata", "bahasa kasar"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["Choose the synonym of \"meticulous\".", "careful", "careless", "quick", "lazy"],
    ["Choose the antonym of \"generous\".", "stingy", "kind", "giving", "helpful"],
    ["Choose the synonym of \"enormous\".", "huge", "tiny", "average", "narrow"],
    ["Choose the antonym of \"temporary\".", "permanent", "short", "brief", "quick"],
    ["\"Sustainable\" means…", "able to continue without harming the environment", "very expensive", "easy to break", "made of plastic"],
    ["\"A person who repairs pipes and taps\" is a…", "plumber", "carpenter", "electrician", "mechanic"],
    ["Choose the correct collocation: ___ an effort.", "make", "do", "take", "give up"],
    ["Choose the correct collocation: ___ attention.", "pay", "give up", "make", "take off"]
  ]},
  { t: "Grammar in Context", q: [
    ["Neither the teacher nor the students ___ ready.", "were", "was", "is", "be"],
    ["Each of the boys ___ a bicycle.", "has", "have", "are having", "having"],
    ["She is used to ___ early.", "waking up", "wake up", "woke up", "wakes up"],
    ["I look forward to ___ from you.", "hearing", "hear", "heard", "be hearing"],
    ["This is the best book I ___ read.", "have ever", "had ever", "ever have", "am ever"],
    ["He suggested that we ___ earlier.", "leave", "left", "leaving", "to leave"],
    ["The man ___ car was stolen called the police.", "whose", "who", "which", "whom"],
    ["She sings ___ than her sister.", "better", "best", "more good", "gooder"]
  ]},
  { t: "Conditionals, Wishes and Modals", q: [
    ["I wish I ___ more time.", "had", "have", "will have", "having"],
    ["If only he ___ listened to me!", "had", "has", "have", "would"],
    ["If I had known, I ___ you.", "would have told", "will tell", "told", "would tell"],
    ["You ___ have locked the door. I found it open.", "should", "must", "can", "will"],
    ["She ___ be at home; her car is outside.", "must", "can't", "needn't", "shouldn't"],
    ["We ___ to submit the form by Friday. It's compulsory.", "have", "might", "could", "would"],
    ["Had I studied harder, I ___ the exam.", "would have passed", "will pass", "pass", "passed"]
  ]},
  { t: "Idioms and Phrasal Verbs", q: [
    ["\"Cost an arm and a leg\" means…", "very expensive", "very cheap", "painful", "dangerous"],
    ["\"Under the weather\" means…", "feeling unwell", "in the rain", "very happy", "outside"],
    ["\"Spill the beans\" means…", "reveal a secret", "cook beans", "make a mess", "waste food"],
    ["\"Call it a day\" means…", "stop working for the day", "phone someone", "start a new day", "name a day"],
    ["\"Carry on\" means…", "continue", "stop", "carry something", "go away"],
    ["\"Come up with\" an idea means…", "think of it", "forget it", "reject it", "copy it"],
    ["\"Look up\" a word means…", "search for its meaning", "admire it", "ignore it", "write it"],
    ["\"Set up\" a business means…", "start it", "close it", "sell it", "lose it"]
  ]},
  { t: "Reading and Writing Skills", q: [
    ["The writer's purpose in an advertisement is usually to…", "persuade", "entertain only", "apologise", "complain"],
    ["A thesis statement is found in the…", "introduction of an essay", "conclusion only", "title", "reference list"],
    ["Which connector introduces an example?", "For instance", "However", "Therefore", "In conclusion"],
    ["Which connector shows sequence?", "Subsequently", "Nevertheless", "Whereas", "Unless"],
    ["In a review, the writer gives…", "an opinion and recommendation", "only the price", "a recipe", "a timetable"],
    ["To 'skim' a text means to read it…", "quickly for the main idea", "word by word", "backwards", "aloud only"],
    ["To 'scan' a text means to read it…", "to find specific information", "for pleasure", "slowly", "to memorise"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM ======================= */
pi: [
  { t: "Tilawah dan Tajwid", q: [
    ["Hukum nun mati bertemu huruf ي ن م و dalam kalimah berasingan ialah…", "idgham maal ghunnah", "idgham bila ghunnah", "izhar halqi", "iqlab"],
    ["Hukum nun mati bertemu huruf ل atau ر ialah…", "idgham bila ghunnah", "idgham maal ghunnah", "ikhfa'", "izhar"],
    ["Hukum nun mati bertemu huruf ب ialah…", "iqlab", "ikhfa'", "izhar", "idgham"],
    ["Hukum nun mati bertemu huruf halqi (ء ه ع ح غ خ) ialah…", "izhar halqi", "ikhfa' haqiqi", "iqlab", "idgham"],
    ["Bilangan huruf ikhfa' haqiqi ialah…", "15", "6", "4", "1"],
    ["Hukum mim mati bertemu huruf ب ialah…", "ikhfa' syafawi", "izhar syafawi", "idgham mithlain", "iqlab"],
    ["Hukum mim mati bertemu huruf م ialah…", "idgham mithlain (mimi)", "ikhfa' syafawi", "izhar syafawi", "iqlab"]
  ]},
  { t: "Hadis", q: [
    ["Hadis \"Sesungguhnya setiap amalan itu dengan niat\" menekankan kepentingan…", "niat yang ikhlas", "makan bersama", "solat jemaah", "bersukan"],
    ["Hadis tentang mencegah kemungkaran menyebut cara dengan tangan, lisan dan…", "hati", "harta", "kaki", "senjata"],
    ["Hadis tentang kebersihan menyatakan bahawa kebersihan itu sebahagian daripada…", "iman", "harta", "ilmu", "adat"],
    ["Dalam hadis, hubungan sesama mukmin diibaratkan seperti…", "satu binaan yang saling menguatkan", "dua musuh", "dua orang asing", "air dan minyak"],
    ["Hadis mengajar supaya kita mengasihi saudara seperti…", "mengasihi diri sendiri", "mengasihi harta", "membenci musuh", "mengasihi haiwan sahaja"],
    ["Perawi hadis yang paling banyak meriwayatkan hadis ialah…", "Abu Hurairah RA", "Abu Bakar RA", "Umar RA", "Bilal RA"]
  ]},
  { t: "Akidah", q: [
    ["Rukun iman ada…", "6", "5", "7", "4"],
    ["Beriman kepada rasul termasuk mempercayai bahawa rasul bersifat…", "siddiq, amanah, tabligh dan fatanah", "pemarah", "lalai", "pendusta"],
    ["Mukjizat terbesar Nabi Muhammad SAW ialah…", "al-Quran", "tongkat", "unta", "kapal"],
    ["Perkara yang boleh merosakkan akidah ialah…", "khurafat dan tahyul", "berdoa kepada Allah", "membaca al-Quran", "bersedekah"],
    ["Ajaran sesat ialah ajaran yang…", "bertentangan dengan al-Quran dan sunnah", "diajar di sekolah", "disahkan ulama muktabar", "menggalakkan solat"],
    ["Iman kepada hari akhirat mendorong seseorang untuk…", "beramal soleh", "bermalas-malasan", "berbuat jahat", "melupakan ibadah"]
  ]},
  { t: "Ibadah dan Muamalat", q: [
    ["Riba hukumnya…", "haram", "harus", "sunat", "wajib"],
    ["Jual beli yang sah memerlukan penjual, pembeli, barang, harga dan…", "sighah (ijab dan qabul)", "saksi seramai sepuluh", "resit bercetak", "cukai"],
    ["Wakaf bermaksud…", "menyerahkan harta untuk kegunaan umum kerana Allah", "meminjam wang", "menjual tanah", "membayar hutang"],
    ["Takaful ialah sistem insurans berasaskan…", "konsep saling membantu menurut syariah", "riba", "perjudian", "spekulasi"],
    ["Solat jamak bermaksud…", "menghimpunkan dua solat dalam satu waktu", "memendekkan solat empat rakaat", "solat berjemaah", "solat sunat"],
    ["Solat qasar bermaksud…", "memendekkan solat empat rakaat menjadi dua", "menghimpunkan dua solat", "solat di rumah", "solat sunat"],
    ["Antara syarat qasar ialah jarak perjalanan sekurang-kurangnya…", "2 marhalah (lebih kurang 81 km)", "1 km", "10 km", "500 km"]
  ]},
  { t: "Sirah dan Tamadun Islam", q: [
    ["Khalifah yang memperkenalkan kalendar Hijrah ialah…", "Saidina Umar al-Khattab", "Saidina Abu Bakar", "Saidina Uthman", "Saidina Ali"],
    ["Khalifah yang membukukan al-Quran dalam satu mushaf rasmi (Mushaf Uthmani) ialah…", "Saidina Uthman bin Affan", "Saidina Umar", "Saidina Ali", "Saidina Abu Bakar"],
    ["Usaha pengumpulan al-Quran pertama dilakukan pada zaman…", "Saidina Abu Bakar", "Saidina Ali", "Bani Umaiyah", "Bani Abbasiyah"],
    ["Bait al-Hikmah ialah pusat ilmu di Baghdad pada zaman…", "Bani Abbasiyah", "Khulafa' ar-Rasyidin", "Uthmaniyah", "Mughal"],
    ["Tokoh perubatan Islam yang menulis al-Qanun fi al-Tibb ialah…", "Ibnu Sina", "Al-Khawarizmi", "Ibnu Khaldun", "Al-Biruni"],
    ["Tokoh matematik yang dikaitkan dengan algebra ialah…", "Al-Khawarizmi", "Ibnu Sina", "Al-Farabi", "Ibnu Rusyd"],
    ["Khalifah keempat Khulafa' ar-Rasyidin ialah…", "Saidina Ali bin Abi Talib", "Saidina Uthman", "Saidina Umar", "Muawiyah"]
  ]},
  { t: "Adab dan Akhlak", q: [
    ["Sifat qanaah bermaksud…", "berasa cukup dengan rezeki", "tamak", "boros", "malas"],
    ["Sifat istiqamah bermaksud…", "tetap pendirian dan berterusan dalam kebaikan", "mudah berubah", "berputus asa", "bermalas-malasan"],
    ["Adab menuntut ilmu termasuk…", "menghormati guru", "bercakap semasa guru mengajar", "meniru", "ponteng kelas"],
    ["Pembaziran ialah sifat…", "saudara syaitan", "terpuji", "dituntut", "wajib"],
    ["Menjaga alam sekitar ialah tanggungjawab manusia sebagai…", "khalifah di bumi", "pelancong", "tetamu sahaja", "pemilik mutlak"],
    ["Sifat ujub bermaksud…", "kagum dengan diri sendiri", "rendah diri", "bersyukur", "pemurah"]
  ]},
  { t: "Jawi", q: [
    ["كرجاسام|Perkataan Jawi ini dibaca…", "kerjasama", "kerajaan", "kerusi", "keranda"],
    ["ڤرڤادوان|Perkataan Jawi ini dibaca…", "perpaduan", "perpustakaan", "peraduan", "perpindahan"],
    ["Ejaan Jawi bagi \"rakyat\" ialah…", "رعيت", "رقيت", "راکيت", "رعيات"],
    ["Ejaan Jawi bagi \"masjid\" ialah…", "مسجد", "مسجيد", "ماسجد", "مسچد"],
    ["Ejaan Jawi bagi \"guru\" ialah…", "ݢورو", "ڠورو", "ݢرو", "کورو"],
    ["Huruf Jawi \"ۏ\" melambangkan bunyi…", "v", "f", "p", "w"]
  ]}
],

/* ======================= BAHASA ARAB ======================= */
ba: [
  { t: "Pendidikan dan Cita-cita", q: [
    ["جَامِعَةٌ|Perkataan ini bermaksud…", "universiti", "sekolah", "kelas", "perpustakaan"],
    ["مَكْتَبَةٌ|Perkataan ini bermaksud…", "perpustakaan", "pejabat", "kedai", "makmal"],
    ["مُهَنْدِسٌ|Perkataan ini bermaksud…", "jurutera", "doktor", "peguam", "guru"],
    ["مُحَامٍ|Perkataan ini bermaksud…", "peguam", "hakim", "polis", "askar"],
    ["أُرِيدُ أَنْ أَكُونَ طَبِيبًا|Ayat ini bermaksud…", "Saya mahu menjadi doktor", "Saya seorang doktor", "Saya pergi ke doktor", "Doktor itu baik"],
    ["اِمْتِحَانٌ|Perkataan ini bermaksud…", "peperiksaan", "cuti", "hadiah", "pelajaran"]
  ]},
  { t: "Ekonomi dan Perniagaan", q: [
    ["تِجَارَةٌ|Perkataan ini bermaksud…", "perniagaan / perdagangan", "pertanian", "pelancongan", "perindustrian"],
    ["سُوقٌ|Perkataan ini bermaksud…", "pasar", "masjid", "sekolah", "jalan"],
    ["ثَمَنٌ|Perkataan ini bermaksud…", "harga", "wang syiling", "kedai", "pembeli"],
    ["بَائِعٌ|Perkataan ini bermaksud…", "penjual", "pembeli", "pekerja", "pengurus"],
    ["كَمْ ثَمَنُ هٰذَا؟|Soalan ini bermaksud…", "Berapakah harga ini?", "Apakah ini?", "Di manakah ini?", "Siapakah ini?"],
    ["رَخِيصٌ|Perkataan ini bermaksud…", "murah", "mahal", "baru", "lama"],
    ["غَالٍ|Perkataan ini bermaksud…", "mahal", "murah", "cantik", "besar"]
  ]},
  { t: "Alam dan Cuaca", q: [
    ["مَطَرٌ|Perkataan ini bermaksud…", "hujan", "angin", "awan", "salji"],
    ["شَمْسٌ|Perkataan ini bermaksud…", "matahari", "bulan", "bintang", "langit"],
    ["قَمَرٌ|Perkataan ini bermaksud…", "bulan", "matahari", "bintang", "awan"],
    ["حَارٌّ|Perkataan ini bermaksud…", "panas", "sejuk", "basah", "kering"],
    ["بَارِدٌ|Perkataan ini bermaksud…", "sejuk", "panas", "nyaman", "lembap"],
    ["الْجَوُّ جَمِيلٌ الْيَوْمَ|Ayat ini bermaksud…", "Cuaca indah hari ini", "Hujan turun hari ini", "Saya suka cuaca", "Esok cuaca panas"]
  ]},
  { t: "Fi'il Mudhari' Majzum", q: [
    ["Fi'il mudhari' menjadi majzum apabila didahului oleh…", "لَمْ atau لَا النَّاهِيَة", "أَنْ atau لَنْ", "مِنْ atau إِلَى", "فِي atau عَلَى"],
    ["Tanda i'rab majzum bagi fi'il mudhari' mufrad sahih ialah…", "sukun", "fathah", "dhammah", "kasrah"],
    ["لَمْ أَذْهَبْ|Ayat ini bermaksud…", "Saya tidak pergi (belum/tidak telah pergi)", "Saya akan pergi", "Saya sedang pergi", "Pergilah"],
    ["لَا تَكْذِبْ|Ayat ini bermaksud…", "Jangan berbohong", "Saya tidak berbohong", "Dia berbohong", "Mereka akan berbohong"],
    ["Bentuk yang betul: لَمْ ___ (يَكْتُبُ)", "يَكْتُبْ", "يَكْتُبُ", "يَكْتُبَ", "كَتَبَ"],
    ["Maksud لَمْ ialah…", "tidak (bagi masa lampau)", "tidak akan", "jangan", "sedang"]
  ]},
  { t: "Isim Tafdhil (Kata Perbandingan)", q: [
    ["Isim tafdhil digunakan untuk menunjukkan…", "perbandingan (lebih/paling)", "kata kerja", "kata ganti", "kata tanya"],
    ["Wazan isim tafdhil ialah…", "أَفْعَلُ", "فَاعِلٌ", "مَفْعُولٌ", "فَعِيلٌ"],
    ["كَبِيرٌ ← أَكْبَرُ|Perkataan أَكْبَرُ bermaksud…", "lebih besar", "besar", "kecil", "paling kecil"],
    ["عَلِيٌّ أَطْوَلُ مِنْ أَحْمَدَ|Ayat ini bermaksud…", "Ali lebih tinggi daripada Ahmad", "Ali sama tinggi dengan Ahmad", "Ahmad lebih tinggi daripada Ali", "Ali pendek"],
    ["Isim tafdhil bagi صَغِيرٌ ialah…", "أَصْغَرُ", "صُغْرَى", "صَغِيرَةٌ", "صِغَارٌ"],
    ["Huruf yang digunakan selepas isim tafdhil untuk maksud 'daripada' ialah…", "مِنْ", "فِي", "عَلَى", "إِلَى"]
  ]}

]
};
})();
