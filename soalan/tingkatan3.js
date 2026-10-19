/* =========================================================
   TINGKATAN 3 — Cerdik Ceria (Sekolah Menengah, KSSM)
   Matematik, Sains & Sejarah: bab ikut buku teks KSSM Tingkatan 3.
   Geografi: disusun ikut topik Tingkatan 3 (susunan bab rasmi belum disahkan).
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang.
   Bahasa Arab: ikut tema dan tatabahasa.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🌏|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tingkatan 3 ---------- */
const N = n => n < 0 ? "−" + (-n) : String(n);
const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const sup = n => String(n).split("").map(c => SUP[c]).join("");
const pw = (b, e) => e === 1 ? b : b + sup(e);
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const frac = (n, d) => { const g = gcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
function fromF(text, right, pool, more, exp) {
  const set = new Set(pool.map(String).filter(x => x !== String(right)));
  let t = 0; while (set.size < 3 && t < 100) { t++; const v = String(more()); if (v !== String(right)) set.add(v); }
  return from(text, right, [...set], exp);
}
const TRIPLE = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]];
const rm = x => "RM" + fmt(x);

SOALAN["m3"] = {

/* ======================= MATEMATIK (bab buku teks KSSM T3) ======================= */
math: [
  { t: "Indeks",
    q: [
      ["a⁰ = ? (a ≠ 0)", "1", "0", "a", "tidak tertakrif"],
      ["a⁻¹ bersamaan dengan…", "1/a", "−a", "a", "0"],
      ["Dalam 5³, nombor 5 dipanggil…", "asas", "indeks", "pekali", "kuasa dua"],
      ["(ab)ⁿ = ?", "aⁿbⁿ", "abⁿ", "aⁿb", "(a + b)ⁿ"]
    ],
    g: [
      () => { const m = r(2, 9), n = r(2, 9); return fromF(`Permudahkan: ${pw("a", m)} × ${pw("a", n)}`, pw("a", m + n), [pw("a", m * n), pw("a", Math.abs(m - n) || 1), pw("2a", m + n)], () => pw("a", r(2, 20))); },
      () => { const n = r(2, 8), m = n + r(1, 8); return fromF(`Permudahkan: ${pw("x", m)} ÷ ${pw("x", n)}`, pw("x", m - n), [pw("x", m + n), pw("x", Math.floor(m / n) || 2), pw("x", m * n)], () => pw("x", r(1, 20))); },
      () => { const m = r(2, 6), n = r(2, 5); return fromF(`Permudahkan: (${pw("y", m)})${sup(n)}`, pw("y", m * n), [pw("y", m + n), pw("y", m), pw("y", n)], () => pw("y", r(2, 30))); },
      () => { const b = pick([2, 3, 5, 10]), e = r(2, b === 2 ? 6 : 3); return q(`${b}${sup(e)} = ?`, b ** e, [b, e, b * e], false, "", fmt); },
      () => { const b = pick([2, 3, 4, 5]), e = r(1, 3); const right = `1/${b ** e}`; return fromF(`${b}${sup(-e)} = ?`, right, [`−${b ** e}`, `${b ** e}`, `1/${b * e}`], () => `1/${r(2, 100)}`); }
    ] },
  { t: "Bentuk Piawai",
    q: [
      ["Bentuk piawai ditulis sebagai A × 10ⁿ dengan…", "1 ≤ A < 10", "A > 10", "0 < A < 1", "A = 10"],
      ["Bilangan angka bererti bagi 0.00305 ialah…", "3", "5", "6", "2"],
      ["Bilangan angka bererti bagi 4 050 ialah…", "3", "4", "2", "1"]
    ],
    g: [
      () => { const a = r(11, 99) / 10, n = r(3, 7); const val = Math.round(a * 10 ** n); const right = `${a} × 10${sup(n)}`; return fromF(`${fmt(val)} dalam bentuk piawai ialah…`, right, [`${a} × 10${sup(n + 1)}`, `${a} × 10${sup(n - 1)}`, `${a * 10} × 10${sup(n - 1)}`, `${a} × 10${sup(-n)}`], () => `${a} × 10${sup(r(1, 9))}`); },
      () => { const a = r(11, 99) / 10, n = r(2, 5); const val = (a / 10 ** n).toFixed(n + 1).replace(/0+$/, ""); const right = `${a} × 10${sup(-n)}`; return fromF(`${val} dalam bentuk piawai ialah…`, right, [`${a} × 10${sup(n)}`, `${a} × 10${sup(-n - 1)}`, `${a} × 10${sup(-n + 1)}`], () => `${a} × 10${sup(-r(1, 8))}`); },
      () => { const n = r(10000, 99999); const s = String(n); const right = fmt(Math.round(n / 1000) * 1000); return fromF(`Bundarkan ${fmt(n)} kepada 2 angka bererti.`, right, [fmt(Math.round(n / 100) * 100), fmt(Math.round(n / 10000) * 10000), s.slice(0, 2)], () => fmt(Math.round(n / 1000) * 1000 + pick([-2000, -1000, 1000, 2000]))); },
      () => { const a = r(2, 9), b = r(2, 9), m = r(2, 5), n = r(2, 5); const p = a * b; const right = p >= 10 ? `${p / 10} × 10${sup(m + n + 1)}` : `${p} × 10${sup(m + n)}`; return fromF(`(${a} × 10${sup(m)}) × (${b} × 10${sup(n)}) = ?`, right, [`${p} × 10${sup(m * n)}`, `${a + b} × 10${sup(m + n)}`, p >= 10 ? `${p / 10} × 10${sup(m + n)}` : `${p} × 10${sup(m + n + 1)}`], () => `${p >= 10 ? p / 10 : p} × 10${sup(r(2, 12))}`); }
    ] },
  { t: "Matematik Pengguna: Simpanan, Pelaburan, Kredit dan Hutang",
    q: [
      ["Faedah mudah dikira berdasarkan…", "jumlah prinsipal sahaja", "prinsipal dan faedah terkumpul", "dividen", "inflasi"],
      ["Faedah kompaun dikira berdasarkan…", "prinsipal dan faedah terkumpul", "prinsipal sahaja", "hutang sahaja", "cukai"],
      ["Contoh pelaburan berisiko tinggi berbanding simpanan tetap ialah…", "saham", "akaun simpanan", "simpanan tetap", "tabung di rumah"],
      ["Penggunaan kad kredit yang bijak ialah…", "membayar baki penuh sebelum tarikh akhir", "membayar minimum sahaja setiap bulan", "berbelanja melebihi had", "meminjamkan kad kepada kawan"],
      ["Bayaran lewat kad kredit biasanya menyebabkan…", "caj faedah dan caj lewat", "potongan harga", "hadiah percuma", "tiada kesan"]
    ],
    g: [
      () => { const P = r(2, 20) * 1000, k = pick([2, 3, 4, 5]), t = r(1, 4); return q(`🏦|RM${fmt(P)} disimpan dengan kadar faedah mudah ${k}% setahun. Berapakah faedah selepas ${t} tahun?`, P * k / 100 * t, [P * k / 100, 100, 10], false, "I = Prt", rm); },
      () => { const P = r(2, 20) * 1000, k = pick([2, 3, 4, 5]), t = r(1, 4); return q(`🏦|RM${fmt(P)} disimpan dengan kadar faedah mudah ${k}% setahun. Berapakah jumlah wang selepas ${t} tahun?`, P + P * k / 100 * t, [P * k / 100, 100, 1000], false, "Jumlah = P + Prt", rm); },
      () => { const P = r(1, 10) * 1000, k = pick([2, 4, 5, 10]); const A = +(P * (1 + k / 100) ** 2).toFixed(2); return q(`📈|RM${fmt(P)} disimpan dengan faedah kompaun ${k}% setahun, dikompaun setahun sekali. Berapakah nilai matang selepas 2 tahun?`, A, [P * k / 100, P * k / 50, 10], true, "MV = P(1 + r/n)ⁿᵗ", rm); },
      () => { const P = r(2, 10) * 1000, k = pick([3, 4, 5, 6]), t = r(2, 5); const tot = P + P * k / 100 * t; const m = t * 12; if (tot % m) return null; return q(`🚲|Pinjaman RM${fmt(P)} dengan faedah sama rata ${k}% setahun selama ${t} tahun. Berapakah bayaran ansuran bulanan?`, tot / m, [10, 5, 20], false, `Jumlah bayaran RM${fmt(tot)} ÷ ${m} bulan`, rm); }
    ] },
  { t: "Lukisan Berskala",
    q: [
      ["Lukisan berskala 1 : 100 bermaksud 1 cm dalam lukisan mewakili…", "100 cm sebenar", "100 m sebenar", "1 m dalam lukisan", "10 cm sebenar"],
      ["Skala 2 : 1 bermaksud lukisan itu…", "dua kali ganda saiz sebenar", "separuh saiz sebenar", "sama saiz", "sepuluh kali kecil"],
      ["Lukisan berskala digunakan oleh…", "arkitek dan jurutera", "tukang masak", "penyanyi", "atlet"]
    ],
    g: [
      () => { const L = r(2, 15), k = pick([50, 100, 200, 500]); return q(`📐|Panjang dalam lukisan ${L} cm. Skala 1 : ${k}. Panjang sebenar ialah…`, L * k / 100, [1, 2, L], true, "", x => (Number.isInteger(x) ? x : x.toFixed(1)) + " m"); },
      () => { const real = r(2, 20) * 2, k = pick([100, 200, 400]); return q(`📐|Panjang sebenar ${real} m. Skala 1 : ${k}. Panjang dalam lukisan ialah…`, real * 100 / k, [1, 2, 0.5], true, "", x => x + " cm"); },
      () => { const a = r(2, 9), b = r(2, 9); return q(`🏠|Pelan sebuah bilik berukuran ${a} cm × ${b} cm dengan skala 1 : 100. Luas sebenar bilik itu ialah…`, a * b, [a + b, 2 * (a + b), a * b * 100], false, "1 cm mewakili 1 m", x => x + " m²"); }
    ] },
  { t: "Nisbah Trigonometri",
    q: [
      ["sin θ = ?", "sisi bertentangan ÷ hipotenus", "sisi bersebelahan ÷ hipotenus", "sisi bertentangan ÷ sisi bersebelahan", "hipotenus ÷ sisi bertentangan"],
      ["cos θ = ?", "sisi bersebelahan ÷ hipotenus", "sisi bertentangan ÷ hipotenus", "sisi bertentangan ÷ sisi bersebelahan", "hipotenus ÷ sisi bersebelahan"],
      ["tan θ = ?", "sisi bertentangan ÷ sisi bersebelahan", "sisi bersebelahan ÷ hipotenus", "sisi bertentangan ÷ hipotenus", "hipotenus ÷ sisi bersebelahan"],
      ["sin 30° = ?", "0.5", "1", "0.866", "0"],
      ["tan 45° = ?", "1", "0", "0.5", "tidak tertakrif"],
      ["cos 60° = ?", "0.5", "0.866", "1", "0"]
    ],
    g: [
      () => { const [a, b, c] = pick(TRIPLE); return fromF(`Segi tiga bersudut tegak: sisi bertentangan θ = ${a}, sisi bersebelahan = ${b}, hipotenus = ${c}. sin θ = ?`, frac(a, c), [frac(b, c), frac(a, b), frac(b, a), frac(c, a)], () => frac(r(1, c - 1), c)); },
      () => { const [a, b, c] = pick(TRIPLE); return fromF(`Segi tiga bersudut tegak: sisi bertentangan θ = ${a}, sisi bersebelahan = ${b}, hipotenus = ${c}. cos θ = ?`, frac(b, c), [frac(a, c), frac(a, b), frac(b, a), frac(c, b)], () => frac(r(1, c - 1), c)); },
      () => { const [a, b, c] = pick(TRIPLE); return fromF(`Segi tiga bersudut tegak: sisi bertentangan θ = ${a}, sisi bersebelahan = ${b}, hipotenus = ${c}. tan θ = ?`, frac(a, b), [frac(b, a), frac(a, c), frac(b, c), frac(c, b)], () => frac(r(1, 30), b)); },
      () => { const [a, b, c] = pick(TRIPLE), k = r(1, 3); return q(`🪜|Hipotenus ${c * k} m dan sin θ = ${frac(a, c)}. Panjang sisi bertentangan θ ialah…`, a * k, [1, b * k - a * k || 2, k], false, "Bertentangan = sin θ × hipotenus", x => x + " m"); }
    ] },
  { t: "Sudut dan Tangen bagi Bulatan", q: [
    ["Sudut pada pusat bulatan adalah ___ sudut pada lilitan yang dicangkum oleh lengkok yang sama.", "dua kali", "separuh", "sama dengan", "tiga kali"],
    ["Sudut dalam semibulatan ialah…", "90°", "180°", "45°", "60°"],
    ["Sudut pada lilitan yang dicangkum oleh lengkok yang sama adalah…", "sama", "berbeza", "dua kali ganda", "pelengkap"],
    ["Hasil tambah sudut bertentangan dalam sisi empat kitaran ialah…", "180°", "360°", "90°", "270°"],
    ["Tangen kepada bulatan berserenjang dengan…", "jejari pada titik sentuhan", "diameter mana-mana", "perentas", "lengkok"],
    ["Dua tangen dari satu titik luar ke bulatan adalah…", "sama panjang", "berbeza panjang", "selari", "berserenjang"],
    ["Sudut pada pusat ialah 110°. Sudut pada lilitan yang dicangkum oleh lengkok yang sama ialah…", "55°", "110°", "220°", "70°"],
    ["Satu sudut dalam sisi empat kitaran ialah 75°. Sudut bertentangannya ialah…", "105°", "75°", "15°", "285°"],
    ["Sudut di antara tangen dan jejari pada titik sentuhan ialah…", "90°", "45°", "180°", "60°"]
  ]},
  { t: "Pelan dan Dongakan", q: [
    ["Pelan ialah unjuran ortogon yang dilihat dari…", "atas", "hadapan", "sisi", "bawah"],
    ["Dongakan depan dilihat dari arah…", "hadapan", "atas", "sisi", "belakang sahaja"],
    ["Dongakan sisi dilihat dari arah…", "sisi (kiri atau kanan)", "atas", "hadapan", "bawah"],
    ["Garis putus-putus dalam lukisan pelan menunjukkan…", "tepi yang tersembunyi", "tepi yang kelihatan", "garis tengah", "ukuran"],
    ["🥫|Pelan bagi silinder yang berdiri tegak ialah…", "bulatan", "segi empat tepat", "segi tiga", "segi empat sama"],
    ["🥫|Dongakan depan bagi silinder yang berdiri tegak ialah…", "segi empat tepat", "bulatan", "segi tiga", "trapezium"],
    ["Dongakan depan bagi kon yang berdiri tegak ialah…", "segi tiga", "bulatan", "segi empat tepat", "trapezium"],
    ["Pelan bagi kubus ialah…", "segi empat sama", "segi tiga", "bulatan", "trapezium"]
  ]},
  { t: "Lokus dalam Dua Dimensi", q: [
    ["Lokus ialah…", "laluan titik yang bergerak mengikut syarat tertentu", "satu titik tetap", "sebuah poligon", "satu garis selari sahaja"],
    ["Lokus titik yang sentiasa berjarak tetap dari satu titik ialah…", "bulatan", "garis lurus", "segi empat", "parabola"],
    ["Lokus titik yang sama jarak dari dua titik ialah…", "pembahagi dua sama serenjang", "bulatan", "garis selari", "pembahagi dua sama sudut"],
    ["Lokus titik yang sama jarak dari dua garis bersilang ialah…", "pembahagi dua sama sudut", "pembahagi dua sama serenjang", "bulatan", "garis selari"],
    ["Lokus titik yang berjarak tetap dari satu garis lurus ialah…", "sepasang garis selari", "bulatan", "satu titik", "pembahagi dua sama sudut"],
    ["Persilangan dua lokus menunjukkan titik yang…", "memenuhi kedua-dua syarat", "tidak memenuhi syarat", "memenuhi satu syarat sahaja", "berada di luar rajah"],
    ["Lokus hujung jarum minit jam yang berputar ialah…", "bulatan", "garis lurus", "segi tiga", "titik"]
  ]},
  { t: "Garis Lurus",
    q: [
      ["Bentuk persamaan garis lurus ialah y = mx + c, dengan m ialah…", "kecerunan", "pintasan-y", "pintasan-x", "titik asalan"],
      ["Dalam y = mx + c, c ialah…", "pintasan-y", "kecerunan", "pintasan-x", "jarak"],
      ["Dua garis selari mempunyai kecerunan yang…", "sama", "berbeza", "bertentangan tanda", "sifar sahaja"],
      ["Persamaan bagi paksi-x ialah…", "y = 0", "x = 0", "y = x", "y = 1"]
    ],
    g: [
      () => { const m = r(-6, 6) || 2, c = r(-9, 9); return fromF(`Kecerunan garis y = ${m === 1 ? "" : m === -1 ? "−" : N(m)}x${c ? ` ${c < 0 ? "−" : "+"} ${Math.abs(c)}` : ""} ialah…`, N(m), [N(c), N(-m), N(m + 1)], () => N(r(-9, 9))); },
      () => { const m = r(-6, 6) || 3, c = r(-9, 9) || 4; return fromF(`Pintasan-y bagi garis y = ${m === 1 ? "" : m === -1 ? "−" : N(m)}x${c ? ` ${c < 0 ? "−" : "+"} ${Math.abs(c)}` : ""} ialah…`, N(c), [N(m), N(-c), N(c + 1)], () => N(r(-12, 12))); },
      () => { const m = r(1, 5), c = r(-6, 6), x = r(-4, 5); const y = m * x + c; const right = `y = ${m === 1 ? "" : m}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}`; return fromF(`Persamaan garis lurus berkecerunan ${m} yang melalui (${N(x)}, ${N(y)}) ialah…`, right, [`y = ${m === 1 ? "" : m}x ${-c < 0 ? "−" : "+"} ${Math.abs(c)}`, `y = ${m + 1}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}`, `y = ${m === 1 ? "" : m}x ${y < 0 ? "−" : "+"} ${Math.abs(y)}`], () => `y = ${m}x + ${r(10, 20)}`, "Gantikan titik untuk mencari c."); },
      () => { const m = pick([1, 2, 3, 4, 5]), x0 = r(-6, 6) || 2; const c = -m * x0; return fromF(`Pintasan-x bagi garis y = ${m === 1 ? "" : m}x${c ? ` ${c < 0 ? "−" : "+"} ${Math.abs(c)}` : ""} ialah…`, N(x0), [N(c), N(-x0), N(x0 + 1)], () => N(r(-10, 10)), "Letak y = 0."); }
    ] }
],

/* ======================= SAINS (bab buku teks KSSM T3) ======================= */
sains: [
  { t: "Rangsangan dan Gerak Balas", q: [
    ["Sistem saraf manusia terdiri daripada sistem saraf pusat dan sistem saraf…", "periferi", "tunjang", "otak", "darah"],
    ["Unit asas sistem saraf ialah…", "neuron", "nefron", "alveolus", "sel darah merah"],
    ["Tindakan refleks dikawal oleh…", "saraf tunjang", "otak besar", "jantung", "hati"],
    ["Contoh tindakan refleks ialah…", "menarik tangan apabila tersentuh benda panas", "membaca buku", "menulis karangan", "menyanyi"],
    ["Tindakan terkawal ialah tindakan yang…", "disedari dan dikawal oleh otak", "berlaku secara automatik", "tidak melibatkan saraf", "dikawal oleh saraf tunjang sahaja"],
    ["Bahagian mata yang mengawal jumlah cahaya masuk ialah…", "iris dan pupil", "retina", "kornea", "saraf optik"],
    ["Imej terbentuk pada bahagian mata yang dipanggil…", "retina", "kanta", "kornea", "iris"],
    ["Rabun jauh boleh diperbetulkan dengan kanta…", "cekung", "cembung", "silinder", "prisma"],
    ["Rabun dekat boleh diperbetulkan dengan kanta…", "cembung", "cekung", "rata", "prisma"],
    ["Gerak balas tumbuhan terhadap cahaya dipanggil…", "fototropisme", "geotropisme", "hidrotropisme", "tigmotropisme"],
    ["Gerak balas akar terhadap graviti dipanggil…", "geotropisme positif", "fototropisme", "tigmotropisme", "hidrotropisme negatif"]
  ]},
  { t: "Respirasi", q: [
    ["Organ utama sistem respirasi manusia ialah…", "peparu", "jantung", "ginjal", "perut"],
    ["Pertukaran gas dalam peparu berlaku di…", "alveolus", "trakea", "bronkus", "rongga hidung"],
    ["Semasa menarik nafas, diafragma akan…", "mengecut dan mendatar", "mengendur dan melengkung ke atas", "tidak bergerak", "pecah"],
    ["Semasa menghembus nafas, isi padu rongga toraks…", "berkurang", "bertambah", "tidak berubah", "menjadi kosong"],
    ["Oksigen diangkut oleh darah dalam bentuk…", "oksihemoglobin", "plasma sahaja", "platlet", "glukosa"],
    ["Respirasi sel menghasilkan tenaga, air dan…", "karbon dioksida", "oksigen", "glukosa", "klorofil"],
    ["Merokok boleh menyebabkan penyakit…", "kanser peparu dan emfisema", "skurvi", "riket", "anemia sahaja"],
    ["Bahan dalam asap rokok yang menyebabkan ketagihan ialah…", "nikotin", "karbon dioksida", "oksigen", "nitrogen"],
    ["Pertukaran gas pada tumbuhan berlaku melalui…", "stoma", "akar sahaja", "bunga", "biji"]
  ]},
  { t: "Pengangkutan", q: [
    ["Organ yang mengepam darah ke seluruh badan ialah…", "jantung", "peparu", "hati", "ginjal"],
    ["Salur darah yang membawa darah keluar dari jantung ialah…", "arteri", "vena", "kapilari", "limfa"],
    ["Salur darah yang membawa darah kembali ke jantung ialah…", "vena", "arteri", "aorta", "kapilari"],
    ["Salur darah yang paling halus ialah…", "kapilari", "arteri", "vena", "aorta"],
    ["Komponen darah yang membantu pembekuan darah ialah…", "platlet", "sel darah merah", "sel darah putih", "plasma"],
    ["Komponen darah yang melawan jangkitan ialah…", "sel darah putih", "sel darah merah", "platlet", "plasma"],
    ["Kumpulan darah penderma universal ialah…", "O", "AB", "A", "B"],
    ["Kumpulan darah penerima universal ialah…", "AB", "O", "A", "B"],
    ["Air diangkut dalam tumbuhan melalui tisu…", "xilem", "floem", "epidermis", "stoma"],
    ["Makanan diangkut dalam tumbuhan melalui tisu…", "floem", "xilem", "kutikel", "akar rambut"],
    ["Kehilangan air dari tumbuhan melalui stoma dipanggil…", "transpirasi", "respirasi", "fotosintesis", "osmosis"]
  ]},
  { t: "Kereaktifan Logam", q: [
    ["Logam paling reaktif dalam senarai ini ialah…", "kalium", "kuprum", "emas", "ferum"],
    ["Logam yang paling tidak reaktif ialah…", "emas", "natrium", "magnesium", "zink"],
    ["Logam bertindak balas dengan oksigen menghasilkan…", "oksida logam", "garam", "hidrogen", "air"],
    ["Bijih besi ialah contoh mineral…", "oksida logam", "karbonat", "sulfida", "unsur bebas"],
    ["Bijih timah (kasiterit) ialah…", "timah oksida", "timah sulfida", "timah karbonat", "timah tulen"],
    ["Logam yang wujud secara semula jadi sebagai unsur bebas ialah…", "emas", "natrium", "kalium", "magnesium"],
    ["Proses mengekstrak besi dalam relau bagas menggunakan…", "karbon (kok)", "air", "garam", "oksigen sahaja"],
    ["Logam yang lebih reaktif daripada karbon diekstrak dengan…", "elektrolisis", "penurunan dengan karbon", "penurasan", "penyulingan"],
    ["Aluminium diekstrak daripada bauksit melalui…", "elektrolisis", "pemanasan dengan karbon", "penapisan", "penghabluran"]
  ]},
  { t: "Termokimia", q: [
    ["Tindak balas yang membebaskan haba ke persekitaran ialah tindak balas…", "eksotermik", "endotermik", "neutral", "fotosintesis"],
    ["Tindak balas yang menyerap haba dari persekitaran ialah tindak balas…", "endotermik", "eksotermik", "pembakaran", "peneutralan"],
    ["Pembakaran bahan api ialah contoh tindak balas…", "eksotermik", "endotermik", "fotokimia", "penguraian"],
    ["Melarutkan ammonium nitrat dalam air menyebabkan air menjadi…", "sejuk", "panas", "berwarna", "masin"],
    ["Pek sejuk segera menggunakan prinsip tindak balas…", "endotermik", "eksotermik", "peneutralan", "pembakaran"],
    ["Pek panas segera menggunakan prinsip tindak balas…", "eksotermik", "endotermik", "fotosintesis", "penyejatan"],
    ["Fotosintesis ialah tindak balas…", "endotermik", "eksotermik", "peneutralan", "pembakaran"],
    ["Respirasi sel ialah tindak balas…", "eksotermik", "endotermik", "fotokimia", "penguraian"]
  ]},
  { t: "Elektrik dan Kemagnetan", q: [
    ["Penjana elektrik menukar tenaga kinetik kepada tenaga…", "elektrik", "kimia", "bunyi", "cahaya"],
    ["Transformer injak naik digunakan untuk…", "menaikkan voltan", "menurunkan voltan", "menukar AT kepada AU", "menyimpan tenaga"],
    ["Transformer injak turun digunakan untuk…", "menurunkan voltan", "menaikkan voltan", "menghasilkan arus", "menyimpan cas"],
    ["Arus terus (AT) dibekalkan oleh…", "bateri", "soket di rumah", "stesen jana kuasa", "transformer"],
    ["Arus ulang-alik (AU) dibekalkan oleh…", "bekalan elektrik utama", "bateri", "sel solar sahaja", "sel kering"],
    ["Voltan bekalan elektrik di rumah di Malaysia ialah lebih kurang…", "240 V", "12 V", "110 V", "1.5 V"],
    ["Fius berfungsi untuk…", "memutuskan litar apabila arus berlebihan", "menambah arus", "menyimpan elektrik", "menurunkan voltan"],
    ["Wayar bumi (earth) dalam plag tiga pin berwarna…", "hijau dan kuning", "biru", "perang", "merah"],
    ["Wayar hidup dalam plag tiga pin berwarna…", "perang", "biru", "hijau dan kuning", "hitam"],
    ["Wayar neutral dalam plag tiga pin berwarna…", "biru", "perang", "hijau dan kuning", "merah"]
  ]},
  { t: "Tenaga dan Kuasa", q: [
    ["Kerja = ?", "daya × sesaran", "daya ÷ masa", "jisim × pecutan", "tenaga ÷ masa"],
    ["Kuasa = ?", "kerja ÷ masa", "kerja × masa", "daya × jarak", "jisim × halaju"],
    ["Unit kuasa ialah…", "watt (W)", "joule (J)", "newton (N)", "volt (V)"],
    ["Unit tenaga ialah…", "joule (J)", "watt (W)", "newton (N)", "pascal (Pa)"],
    ["Tenaga keupayaan graviti bergantung kepada jisim dan…", "ketinggian", "warna", "suhu", "laju"],
    ["Tenaga kinetik bergantung kepada jisim dan…", "laju", "ketinggian", "warna", "isi padu"],
    ["Prinsip keabadian tenaga menyatakan bahawa tenaga…", "tidak boleh dicipta atau dimusnahkan", "boleh dicipta", "hilang selepas digunakan", "hanya wujud dalam makanan"],
    ["Seseorang mengangkat beban 50 N setinggi 2 m. Kerja yang dilakukan ialah…", "100 J", "25 J", "52 J", "48 J"],
    ["Kerja 600 J dilakukan dalam 30 s. Kuasanya ialah…", "20 W", "18000 W", "630 W", "570 W"]
  ]},
  { t: "Keradioaktifan", q: [
    ["Keradioaktifan ditemui oleh…", "Henri Becquerel", "Isaac Newton", "Albert Einstein", "Charles Darwin"],
    ["Sinaran radioaktif yang paling tinggi kuasa penembusannya ialah…", "sinar gama", "zarah alfa", "zarah beta", "cahaya nampak"],
    ["Zarah alfa boleh dihalang oleh…", "sehelai kertas", "kepingan plumbum tebal", "konkrit tebal", "tiada apa-apa"],
    ["Sinar gama boleh dikurangkan oleh…", "plumbum tebal atau konkrit", "sehelai kertas", "kain", "kayu nipis"],
    ["Separuh hayat ialah masa untuk ___ bahan radioaktif mereput.", "separuh", "semua", "satu perempat", "sepuluh peratus"],
    ["Kegunaan radioisotop dalam perubatan ialah…", "membunuh sel kanser", "menambah berat badan", "menyembuhkan selesema", "menguatkan gigi"],
    ["Simbol amaran radioaktif berbentuk…", "trefoil (tiga bilah)", "tengkorak", "api", "titisan air"],
    ["Pekerja yang mengendalikan bahan radioaktif memakai…", "lencana filem untuk mengesan dos sinaran", "topi keledar sahaja", "kasut sukan", "jam tangan"]
  ]},
  { t: "Cuaca Angkasa", q: [
    ["Angin suria ialah aliran zarah bercas dari…", "Matahari", "Bulan", "Bumi", "Marikh"],
    ["Fenomena cahaya berwarna di langit kawasan kutub dipanggil…", "aurora", "gerhana", "meteor", "komet"],
    ["Medan magnet Bumi (magnetosfera) melindungi Bumi daripada…", "angin suria", "hujan", "angin monsun", "gempa bumi"],
    ["Tompok matahari ialah kawasan di permukaan Matahari yang lebih…", "sejuk dan gelap", "panas dan terang", "basah", "berair"],
    ["Nyalaan suria boleh mengganggu…", "komunikasi satelit dan grid elektrik", "pertumbuhan pokok", "pasang surut", "rasa makanan"],
    ["Kitaran aktiviti Matahari berlaku lebih kurang setiap…", "11 tahun", "1 tahun", "100 tahun", "1 bulan"]
  ]},
  { t: "Penerokaan Angkasa Lepas", q: [
    ["Angkasawan pertama Malaysia ialah…", "Dato' Dr. Sheikh Muszaphar Shukor", "Neil Armstrong", "Yuri Gagarin", "Tunku Abdul Rahman"],
    ["Manusia pertama ke angkasa lepas ialah…", "Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Sheikh Muszaphar"],
    ["Manusia pertama menjejakkan kaki ke Bulan ialah…", "Neil Armstrong", "Yuri Gagarin", "Galileo", "Copernicus"],
    ["Satelit buatan pertama di dunia ialah…", "Sputnik 1", "MEASAT", "Hubble", "Apollo 11"],
    ["Teleskop angkasa yang terkenal ialah teleskop…", "Hubble", "Sputnik", "MEASAT", "Apollo"],
    ["Stesen Angkasa Antarabangsa dikenali sebagai…", "ISS", "NASA", "ESA", "MYSA"],
    ["Agensi Angkasa Malaysia dikenali sebagai…", "MYSA", "NASA", "ESA", "JAXA"],
    ["Kegunaan satelit termasuk…", "komunikasi, ramalan cuaca dan GPS", "menanam padi", "memasak", "menangkap ikan"]
  ]}
],

/* ======================= SEJARAH (bab buku teks KSSM T3) ======================= */
sejarah: [
  { n: 1, t: "Kedatangan Kuasa Barat", q: [
    ["Antara faktor kedatangan kuasa Barat ke Asia Tenggara ialah untuk mendapatkan…", "bahan mentah dan rempah", "salji", "minyak zaitun", "teknologi Asia"],
    ["Slogan 3G kuasa Barat ialah Gold, Glory dan…", "Gospel", "Gun", "Green", "Grain"],
    ["Revolusi Perindustrian di Eropah menyebabkan keperluan kepada…", "bahan mentah dan pasaran baharu", "lebih ramai petani", "hutan", "kuda"],
    ["Kuasa Barat pertama yang menakluki Melaka ialah…", "Portugis", "Belanda", "British", "Sepanyol"],
    ["Belanda menakluki Melaka pada tahun…", "1641", "1511", "1824", "1786"],
    ["Persaingan kuasa Barat menyebabkan mereka berebut…", "tanah jajahan", "pemain bola", "teknologi angkasa", "kemerdekaan"]
  ]},
  { n: 2, t: "Pentadbiran Negeri-negeri Selat", q: [
    ["Francis Light menduduki Pulau Pinang pada tahun…", "1786", "1819", "1824", "1874"],
    ["Stamford Raffles membuka Singapura pada tahun…", "1819", "1786", "1824", "1867"],
    ["Perjanjian yang membahagikan Alam Melayu antara British dan Belanda ialah Perjanjian…", "London 1824", "Pangkor 1874", "Bangkok 1909", "Burney 1826"],
    ["Negeri-negeri Selat terdiri daripada Pulau Pinang, Melaka dan…", "Singapura", "Perak", "Johor", "Kedah"],
    ["Negeri-negeri Selat dibentuk pada tahun…", "1826", "1786", "1874", "1896"],
    ["Pada tahun 1867, Negeri-negeri Selat menjadi…", "tanah jajahan mahkota British", "negeri merdeka", "milik Belanda", "milik Siam"],
    ["Pentadbir tertinggi Negeri-negeri Selat bergelar…", "Gabenor", "Residen", "Penasihat", "Sultan"]
  ]},
  { n: 3, t: "Pentadbiran Negeri-negeri Melayu Bersekutu", q: [
    ["Negeri-negeri Melayu Bersekutu terdiri daripada Perak, Selangor, Negeri Sembilan dan…", "Pahang", "Johor", "Kedah", "Kelantan"],
    ["Negeri-negeri Melayu Bersekutu dibentuk pada tahun…", "1896", "1874", "1909", "1946"],
    ["Perjanjian Pangkor 1874 membawa kepada pelantikan…", "Residen British di Perak", "Gabenor di Melaka", "Raja di Perlis", "Penasihat di Johor"],
    ["Residen British pertama di Perak ialah…", "J.W.W. Birch", "Frank Swettenham", "Francis Light", "James Brooke"],
    ["Ketua pentadbir Negeri-negeri Melayu Bersekutu ialah…", "Residen Jeneral", "Gabenor", "Sultan Perak", "Penasihat British"],
    ["Pusat pentadbiran Negeri-negeri Melayu Bersekutu ialah…", "Kuala Lumpur", "Taiping", "Kuantan", "Seremban"],
    ["Negeri-negeri Melayu Bersekutu kaya dengan hasil…", "bijih timah", "minyak", "emas sahaja", "padi sahaja"]
  ]},
  { n: 4, t: "Pentadbiran Negeri-negeri Melayu Tidak Bersekutu", q: [
    ["Negeri-negeri Melayu Tidak Bersekutu terdiri daripada Perlis, Kedah, Kelantan, Terengganu dan…", "Johor", "Pahang", "Perak", "Selangor"],
    ["Perjanjian Bangkok 1909 menyebabkan Siam menyerahkan Kedah, Perlis, Kelantan dan Terengganu kepada…", "British", "Belanda", "Portugis", "Jepun"],
    ["Pegawai British di Negeri-negeri Melayu Tidak Bersekutu bergelar…", "Penasihat British", "Residen", "Gabenor", "Residen Jeneral"],
    ["Negeri yang terakhir menerima Penasihat British ialah…", "Terengganu", "Johor", "Kedah", "Perlis"],
    ["Johor menerima Penasihat Am British pada tahun…", "1914", "1874", "1896", "1909"],
    ["Sultan Johor yang terkenal dengan usaha pemodenan Johor ialah…", "Sultan Abu Bakar", "Sultan Mahmud Syah", "Sultan Alauddin", "Sultan Zainal Abidin"]
  ]},
  { n: 5, t: "Pentadbiran Barat di Sarawak dan Sabah", q: [
    ["James Brooke dilantik sebagai Raja Sarawak pada tahun…", "1841", "1881", "1786", "1946"],
    ["Pemerintahan Brooke di Sarawak berakhir apabila Sarawak diserahkan kepada British pada tahun…", "1946", "1963", "1941", "1888"],
    ["Sabah ditadbir oleh Syarikat Borneo Utara British mulai tahun…", "1881", "1841", "1824", "1957"],
    ["Ibu pejabat awal Syarikat Borneo Utara British terletak di…", "Kudat", "Kuching", "Miri", "Labuan sahaja"],
    ["Rajah Brooke yang terakhir ialah…", "Charles Vyner Brooke", "James Brooke", "Charles Brooke", "Francis Light"],
    ["Pentadbiran Barat di Sarawak dan Sabah memperkenalkan sistem…", "pentadbiran dan undang-undang moden", "beraja mutlak", "kesultanan", "republik"]
  ]},
  { n: 6, t: "Kesan Pentadbiran Barat terhadap Ekonomi dan Sosial", q: [
    ["Penjajahan British memperkenalkan ekonomi…", "dagangan (komersial)", "sara diri sahaja", "barter sahaja", "komunis"],
    ["Tanaman komersial utama yang diperkenalkan ialah…", "getah", "padi bukit", "ubi kayu", "keledek"],
    ["Kedatangan buruh dari China banyak bekerja di sektor…", "perlombongan bijih timah", "perladangan teh sahaja", "perikanan laut dalam", "perkhidmatan awam"],
    ["Kedatangan buruh dari India banyak bekerja di sektor…", "perladangan getah", "perlombongan emas", "perkapalan", "perbankan"],
    ["Kesan sosial penjajahan ialah wujudnya…", "masyarakat majmuk", "satu kaum sahaja", "tiada sekolah", "tiada bandar"],
    ["Sistem pendidikan zaman British menyebabkan wujud sekolah…", "vernakular", "kebangsaan sahaja", "satu aliran", "tiada sekolah"],
    ["Pembinaan jalan kereta api awal di Tanah Melayu bertujuan untuk…", "mengangkut bijih timah", "pelancongan", "sukan", "pertahanan sahaja"]
  ]},
  { n: 7, t: "Penentangan Masyarakat Tempatan", q: [
    ["Dato' Maharaja Lela menentang British di…", "Pasir Salak, Perak", "Naning", "Pasir Puteh", "Kubu Rentap"],
    ["Dol Said menentang British di…", "Naning", "Perak", "Pahang", "Sabah"],
    ["Dato' Bahaman menentang British di…", "Pahang", "Kelantan", "Terengganu", "Negeri Sembilan"],
    ["Tok Janggut menentang British di…", "Kelantan", "Terengganu", "Kedah", "Perlis"],
    ["Haji Abdul Rahman Limbong menentang British di…", "Terengganu", "Kelantan", "Pahang", "Johor"],
    ["Rentap menentang pemerintahan Brooke di…", "Sarawak", "Sabah", "Brunei", "Labuan"],
    ["Mat Salleh menentang Syarikat Borneo Utara British di…", "Sabah", "Sarawak", "Johor", "Perak"],
    ["Antara sebab penentangan masyarakat tempatan ialah…", "campur tangan dalam adat dan pengenalan cukai baharu", "mahukan lebih banyak cukai", "suka kepada penjajah", "mahu berhijrah"]
  ]},
  { n: 8, t: "Kebijaksanaan Raja dan Pembesar Melayu Menangani Cabaran Barat", q: [
    ["Sultan Abu Bakar dikenali sebagai…", "Bapa Johor Moden", "Bapa Kemerdekaan", "Bapa Pembangunan", "Bapa Perpaduan"],
    ["Undang-undang Tubuh Kerajaan Johor diperkenalkan pada tahun…", "1895", "1874", "1909", "1946"],
    ["Antara usaha Sultan Abu Bakar ialah…", "memodenkan pentadbiran Johor", "menyerahkan Johor kepada British", "menghapuskan bahasa Melayu", "menutup pelabuhan"],
    ["Raja-raja Melayu Utara menggunakan diplomasi dengan…", "Siam dan British", "Portugis", "Jepun", "Belanda"],
    ["Pembesar Melayu turut berusaha memodenkan negeri melalui…", "pendidikan dan pentadbiran", "peperangan sahaja", "menjual tanah", "menutup sekolah"],
    ["Kebijaksanaan pemerintah tempatan membantu…", "mengekalkan kedaulatan negeri", "menyerahkan negeri", "melemahkan negeri", "memecahkan negeri"]
  ]}
],

/* ======================= GEOGRAFI (topik Tingkatan 3) ======================= */
geo: [
  { t: "Peta Topografi", q: [
    ["Garis kontur yang rapat menunjukkan cerun yang…", "curam", "landai", "rata", "berair"],
    ["Selang kontur ialah beza ketinggian antara…", "dua garis kontur bersebelahan", "laut dan puncak", "dua sungai", "dua bandar"],
    ["Keratan rentas dilukis untuk menunjukkan…", "profil bentuk muka bumi", "taburan penduduk", "suhu", "hujan"],
    ["Bearing sudutan diukur dari arah…", "utara mengikut arah jam", "selatan", "timur", "barat"],
    ["Ciri budaya pada peta topografi ialah ciri…", "buatan manusia", "semula jadi", "cuaca", "tanah"],
    ["Contoh ciri fizikal pada peta topografi ialah…", "sungai dan bukit", "jalan raya", "sekolah", "masjid"]
  ]},
  { t: "Jadual dan Graf", q: [
    ["Graf yang sesuai untuk menunjukkan perubahan suhu sepanjang tahun ialah…", "graf garis", "carta pai", "piktograf", "peta"],
    ["Graf yang sesuai untuk menunjukkan jumlah hujan bulanan ialah…", "graf bar", "carta pai", "graf garis berganda", "jadual sahaja"],
    ["Graf yang menggabungkan suhu dan hujan dipanggil graf…", "kombinasi (klimograf)", "pai", "bar mudah", "garis tunggal"],
    ["Carta pai sesuai untuk menunjukkan…", "peratusan bahagian daripada keseluruhan", "perubahan mengikut masa", "lokasi", "jarak"],
    ["Paksi-x pada graf garis biasanya menunjukkan…", "masa", "jumlah", "peratus", "suhu"],
    ["Jadual digunakan untuk…", "menyusun data supaya mudah dibaca", "melukis peta", "mengukur hujan", "menyukat jarak"]
  ]},
  { t: "Sumber Semula Jadi di Malaysia", q: [
    ["Sumber semula jadi yang boleh diperbaharui ialah…", "hutan dan air", "petroleum", "bijih timah", "arang batu"],
    ["Sumber semula jadi yang tidak boleh diperbaharui ialah…", "petroleum dan gas asli", "hutan", "air", "angin"],
    ["Petroleum di Malaysia banyak ditemui di perairan…", "Terengganu, Sabah dan Sarawak", "Perlis", "Selat Johor", "Pulau Pinang"],
    ["Bijih timah banyak dilombong di Lembah…", "Kinta", "Bujang", "Klang", "Lenggong"],
    ["Antara kegunaan sumber hutan ialah…", "kayu balak dan hasil hutan", "minyak petrol", "bijih timah", "garam"],
    ["Pengurusan sumber secara lestari bermaksud…", "menggunakan sumber tanpa menjejaskan generasi akan datang", "menghabiskan sumber", "menjual semua sumber", "tidak menggunakan sumber"]
  ]},
  { t: "Sumber Hutan dan Hidupan Liar", q: [
    ["Jenis hutan yang paling luas di Malaysia ialah hutan…", "hujan tropika", "paya bakau sahaja", "konifer", "savana"],
    ["Hutan paya bakau terdapat di kawasan…", "pinggir pantai berlumpur", "puncak gunung", "padang pasir", "tanah tinggi"],
    ["Hutan paya bakau berfungsi untuk…", "melindungi pantai daripada hakisan ombak", "menghasilkan padi", "membina bandar", "menyimpan salji"],
    ["Hidupan liar terancam di Malaysia termasuk…", "harimau Malaya dan orang utan", "ayam dan lembu", "kucing dan anjing", "itik dan kambing"],
    ["Taman Negara yang tertua di Malaysia terletak di…", "Pahang, Kelantan dan Terengganu", "Johor", "Sabah", "Perlis"],
    ["Antara cara memulihara hutan ialah…", "penanaman semula dan pembalakan terpilih", "pembalakan berleluasa", "pembakaran terbuka", "pertanian pindah"],
    ["Hutan simpan kekal diwujudkan untuk…", "melindungi hutan daripada dimusnahkan", "dijadikan bandar", "kawasan kilang", "tapak pelupusan"]
  ]},
  { t: "Kegiatan Ekonomi di Malaysia", q: [
    ["Sektor ekonomi utama yang melibatkan pengeluaran bahan mentah dipanggil sektor…", "primer", "sekunder", "tertier", "kuaternari"],
    ["Perindustrian ialah contoh sektor…", "sekunder", "primer", "tertier", "kuaternari"],
    ["Pelancongan dan perbankan ialah contoh sektor…", "tertier (perkhidmatan)", "primer", "sekunder", "perlombongan"],
    ["Tanaman komoditi utama Malaysia ialah…", "kelapa sawit", "gandum", "kapas", "anggur"],
    ["Kawasan perindustrian utama di Malaysia termasuk…", "Lembah Klang", "Banjaran Titiwangsa", "Tasik Chini", "Taman Negara"],
    ["Pelancongan eko menekankan…", "pemuliharaan alam semula jadi", "pembinaan bangunan tinggi", "pembalakan", "perlombongan"]
  ]},
  { t: "Sumber Semula Jadi Utama dan Kerjasama Ekonomi di Dunia", q: [
    ["Negara pengeluar petroleum utama di Asia Barat ialah…", "Arab Saudi", "Jepun", "Singapura", "Malaysia"],
    ["OPEC ialah pertubuhan negara-negara pengeksport…", "petroleum", "beras", "getah", "kopi"],
    ["ASEAN ialah pertubuhan kerjasama negara-negara…", "Asia Tenggara", "Eropah", "Afrika", "Amerika Selatan"],
    ["APEC ialah kerjasama ekonomi negara-negara…", "Asia Pasifik", "Eropah", "Afrika", "Timur Tengah sahaja"],
    ["Kesatuan Eropah dikenali sebagai…", "EU", "ASEAN", "OPEC", "APEC"],
    ["Kerjasama ekonomi antara negara membawa faedah seperti…", "perdagangan lebih mudah", "peperangan", "kemiskinan", "pencemaran"]
  ]},
  { t: "Pengurusan Sisa dan Kitar Semula", q: [
    ["Amalan 3R ialah Reduce, Reuse dan…", "Recycle", "Remove", "Refuse", "Repair"],
    ["Tong kitar semula berwarna biru adalah untuk…", "kertas", "kaca", "plastik", "sisa makanan"],
    ["Tong kitar semula berwarna coklat adalah untuk…", "kaca", "kertas", "plastik", "tin"],
    ["Tong kitar semula berwarna jingga adalah untuk…", "plastik dan tin aluminium", "kertas", "kaca", "sisa makanan"],
    ["Pengasingan sisa di punca bermaksud…", "mengasingkan sisa di rumah mengikut jenis", "membuang semua sisa bersama", "membakar sisa", "menanam sisa"],
    ["Sisa organik boleh diproses menjadi…", "kompos", "plastik", "kaca", "logam"]
  ]}
],

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Golongan Kata dan Imbuhan", q: [
    ["Imbuhan apitan \"memper-…-kan\" + \"juang\" menjadi…", "memperjuangkan", "menjuangkan", "perjuangan", "berjuang"],
    ["Imbuhan apitan \"di-…-i\" + \"lawat\" menjadi…", "dilawati", "dilawatkan", "melawati", "lawatan"],
    ["Imbuhan apitan \"ber-…-kan\" + \"senjata\" menjadi…", "bersenjatakan", "bersenjata", "persenjataan", "menyenjatakan"],
    ["Imbuhan \"ter-\" dalam \"terlelap\" membawa maksud…", "tidak sengaja", "paling", "boleh", "sudah lama"],
    ["Imbuhan \"ter-\" dalam \"terpandai\" membawa maksud…", "paling", "tidak sengaja", "boleh", "sedang"],
    ["Kata sendi nama yang betul: \"Pertandingan itu berlangsung ___ 3 hari.\"", "selama", "sejak", "semenjak", "dari"],
    ["Kata sendi nama yang betul: \"Ali tinggal di Ipoh ___ tahun 2010.\"", "sejak", "selama", "untuk", "bagi"],
    ["Kata sendi nama yang betul: \"Hadiah ini ___ pemenang.\"", "untuk", "kepada", "dari", "pada"],
    ["Kata hubung pancangan keterangan syarat ialah…", "jika", "kerana", "supaya", "walaupun"],
    ["Kata hubung pancangan keterangan tujuan ialah…", "supaya", "kerana", "jika", "walaupun"]
  ]},
  { t: "Ayat dan Struktur", q: [
    ["Pola ayat \"Ali murid.\" ialah…", "FN + FN", "FN + FK", "FN + FA", "FN + FS"],
    ["Pola ayat \"Ali sedang belajar.\" ialah…", "FN + FK", "FN + FN", "FN + FA", "FN + FS"],
    ["Pola ayat \"Ali sangat rajin.\" ialah…", "FN + FA", "FN + FN", "FN + FK", "FN + FS"],
    ["Pola ayat \"Ali di perpustakaan.\" ialah…", "FN + FS", "FN + FN", "FN + FK", "FN + FA"],
    ["Ayat songsang bagi \"Murid-murid itu sedang bermain.\" ialah…", "Sedang bermain murid-murid itu.", "Murid-murid itu bermain sedang.", "Bermain sedang murid-murid itu.", "Itu murid-murid sedang bermain."],
    ["Ayat yang betul ialah…", "Kami akan berbincang tentang masalah itu.", "Kami akan membincangkan tentang masalah itu.", "Kami akan berbincangkan masalah itu.", "Kami akan membincang tentang masalah itu."],
    ["Saya menerima sepucuk surat ___ ibu.", "daripada", "dari", "kepada", "pada", "\"daripada\" digunakan untuk manusia; \"dari\" untuk tempat dan masa."],
    ["Ayat yang betul ialah…", "Para pelajar diminta hadir awal.", "Para pelajar-pelajar diminta hadir awal.", "Semua para pelajar diminta hadir.", "Pelajar-pelajar semua diminta hadir."],
    ["Kesalahan dalam \"Banyak buku-buku dibeli oleh ibu.\" ialah…", "penggandaan selepas kata bilangan \"banyak\"", "tiada kesalahan", "salah imbuhan", "salah tanda baca"]
  ]},
  { t: "Peribahasa", q: [
    ["Peribahasa \"bagai menatang minyak yang penuh\" bermaksud…", "menjaga dengan penuh kasih sayang", "membawa minyak", "membazir", "tamak"],
    ["Peribahasa \"di mana bumi dipijak, di situ langit dijunjung\" bermaksud…", "menghormati adat tempat yang didiami", "memijak bumi", "melihat langit", "tidak menghormati orang"],
    ["Peribahasa \"bulat air kerana pembetung, bulat manusia kerana muafakat\" bermaksud…", "kesepakatan membawa kekuatan", "air yang bulat", "pembetung tersumbat", "suka berpecah"],
    ["Peribahasa \"kerana pulut santan binasa, kerana mulut badan binasa\" bermaksud…", "kata-kata yang tidak dijaga mendatangkan bencana", "makan pulut berbahaya", "santan basi", "pandai bercakap"],
    ["Peribahasa \"ukur baju di badan sendiri\" bermaksud…", "melakukan sesuatu mengikut kemampuan diri", "menjahit baju", "membeli baju mahal", "meminjam baju"],
    ["Peribahasa \"yang bulat tidak datang bergolek, yang pipih tidak datang melayang\" bermaksud…", "kejayaan memerlukan usaha", "barang mudah didapati", "bola bergolek", "rezeki datang sendiri"],
    ["Peribahasa \"seperti melepaskan anjing tersepit\" bermaksud…", "menolong orang yang tidak mengenang budi", "menolong haiwan", "menyelamatkan diri", "membalas budi"],
    ["Peribahasa \"alang-alang menyeluk pekasam, biar sampai ke pangkal lengan\" bermaksud…", "melakukan sesuatu biarlah hingga selesai", "suka makan pekasam", "malas bekerja", "berhenti separuh jalan"],
    ["Simpulan bahasa \"tin kosong\" bermaksud…", "orang yang banyak cakap tetapi tiada ilmu", "bekas kosong", "orang miskin", "orang pendiam"],
    ["Simpulan bahasa \"duri dalam daging\" bermaksud…", "sesuatu yang selalu menyakitkan hati", "makanan berduri", "sakit gigi", "tulang ikan"]
  ]},
  { t: "Ejaan dan Istilah", q: [
    ["Ejaan yang betul ialah…", "kuarantin", "karantin", "kuarentin", "quarantin"],
    ["Ejaan yang betul ialah…", "teknikal", "teknikel", "tekhnikal", "teknical"],
    ["Ejaan yang betul ialah…", "aktiviti", "aktiviri", "aktivity", "aktifiti"],
    ["Ejaan yang betul ialah…", "biodiversiti", "bio diversiti", "biodeversiti", "biodiversity"],
    ["Ejaan yang betul ialah…", "infrastruktur", "infra struktur", "infrastuktur", "infrastruktor"],
    ["Maksud \"kontemporari\" ialah…", "masa kini", "zaman dahulu", "masa hadapan", "tradisional"],
    ["Maksud \"mapan\" ialah…", "kukuh dan stabil", "goyah", "lemah", "baharu"],
    ["Maksud \"proaktif\" ialah…", "bertindak awal sebelum masalah berlaku", "lambat bertindak", "tidak peduli", "bertindak selepas masalah"],
    ["Antonim bagi \"maju\" ialah…", "mundur", "pesat", "moden", "canggih"],
    ["Sinonim bagi \"musnah\" ialah…", "binasa", "bina", "baiki", "pulih"]
  ]},
  { t: "Komunikasi dan Laras Bahasa", q: [
    ["Laras bahasa yang digunakan dalam surat rasmi ialah laras bahasa…", "rasmi", "basahan", "slanga", "pasar"],
    ["Dalam surat rasmi, \"Sekian, terima kasih.\" ditulis di bahagian…", "penutup", "pembuka", "isi pertama", "tajuk"],
    ["Bahasa yang digunakan dalam perbualan harian dengan rakan ialah bahasa…", "basahan", "rasmi", "undang-undang", "saintifik"],
    ["Penggunaan bahasa rojak bermaksud…", "mencampuradukkan bahasa Melayu dengan bahasa lain", "bahasa Melayu yang baku", "bahasa sastera", "bahasa istana"],
    ["Bahasa istana digunakan untuk berkomunikasi dengan…", "golongan diraja", "kawan", "adik", "jiran"],
    ["Perkataan \"santap\" dalam bahasa istana bermaksud…", "makan", "tidur", "mandi", "berjalan"],
    ["Perkataan \"beradu\" dalam bahasa istana bermaksud…", "tidur", "makan", "mandi", "pergi"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["A word that means \"to reduce\" is…", "diminish", "expand", "enlarge", "boost"],
    ["A word that means \"very important\" is…", "crucial", "trivial", "minor", "optional"],
    ["A word that means \"to put off until later\" is…", "postpone", "advance", "hurry", "complete"],
    ["A synonym of \"obtain\" is…", "get", "lose", "give", "drop"],
    ["A synonym of \"commence\" is…", "begin", "end", "pause", "finish"],
    ["The opposite of \"ancient\" is…", "contemporary", "historic", "old", "antique"],
    ["The opposite of \"scarce\" is…", "plentiful", "rare", "limited", "few"],
    ["Which word is spelled correctly?", "necessary", "neccessary", "necessery", "nesessary"],
    ["Which word is spelled correctly?", "accommodation", "acommodation", "accomodation", "acomodation"],
    ["The suffix \"-less\" in \"careless\" means…", "without", "full of", "able to", "again"]
  ]},
  { t: "Tenses and Voice", q: [
    ["By 2030, scientists ___ a cure for the disease.", "will have found", "have found", "found", "are finding"],
    ["She ___ English for five years before she moved to London.", "had studied", "has studied", "studies", "will study"],
    ["The new bridge ___ next year.", "will be opened", "will open by", "opened", "is opening by"],
    ["The thief ___ by the police last night.", "was caught", "is caught", "caught", "has catch"],
    ["Many trees ___ every year to make paper.", "are cut down", "cut down", "were cutting", "is cut down"],
    ["Which sentence is in the present perfect continuous tense?", "I have been waiting for an hour.", "I waited for an hour.", "I am waiting.", "I will wait."],
    ["Which sentence is passive?", "The results will be announced tomorrow.", "They will announce the results.", "They announce results.", "They are announcing results."]
  ]},
  { t: "Relative Clauses and Connectors", q: [
    ["The girl ___ won the prize is my cousin.", "who", "which", "whose", "where"],
    ["This is the book ___ I told you about.", "which", "who", "whom", "where"],
    ["That is the man ___ car was stolen.", "whose", "who", "which", "whom"],
    ["This is the school ___ my father studied.", "where", "which", "who", "whose"],
    ["___ the heavy rain, the match continued.", "Despite", "Although", "Because", "Unless"],
    ["She was tired; ___, she kept working.", "nevertheless", "therefore", "so", "because"],
    ["He saved money ___ he could buy a laptop.", "so that", "although", "unless", "despite"]
  ]},
  { t: "Conditionals and Reported Speech", q: [
    ["If I had studied harder, I ___ the exam.", "would have passed", "will pass", "would pass", "passed"],
    ["If I were you, I ___ apologise.", "would", "will", "am", "did"],
    ["Unless you water the plants, they ___.", "will die", "die", "would died", "dying"],
    ["\"I have finished,\" he said. → He said that he ___.", "had finished", "has finished", "finishes", "finished have"],
    ["\"Where do you live?\" she asked. → She asked me where I ___.", "lived", "live", "do live", "living"],
    ["\"Please close the door,\" said the teacher. → The teacher asked me ___ the door.", "to close", "close", "closed", "closing"]
  ]},
  { t: "Idioms and Phrasal Verbs", q: [
    ["\"Burn the midnight oil\" means…", "study or work late into the night", "waste oil", "cook at night", "light a candle"],
    ["\"Beat around the bush\" means…", "avoid saying something directly", "garden work", "hunt animals", "get lost"],
    ["\"The ball is in your court\" means…", "it is your decision now", "you are playing tennis", "you lost the ball", "it is someone else's turn"],
    ["\"Call off\" the event means…", "cancel it", "start it", "phone someone", "advertise it"],
    ["\"Bring up\" a topic means…", "mention it", "end it", "forget it", "write it"],
    ["\"Set up\" a business means…", "start it", "close it", "sell it", "move it"],
    ["\"Make up your mind\" means…", "decide", "forget", "imagine", "sleep"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM (ikut bidang) ======================= */
pi: [
  { t: "Tilawah dan Tajwid", q: [
    ["Idgham mutamathilain berlaku apabila dua huruf yang bertemu adalah…", "sama makhraj dan sifat", "berlainan makhraj", "huruf halqi", "huruf qalqalah"],
    ["Idgham mutajanisain berlaku apabila dua huruf…", "sama makhraj tetapi berlainan sifat", "sama sifat dan makhraj", "huruf halqi", "huruf syamsiah"],
    ["Idgham mutaqaribain berlaku apabila dua huruf…", "berhampiran makhraj dan sifatnya", "sama makhraj", "berjauhan makhraj", "huruf mad"],
    ["Hukum ghunnah musyaddadah berlaku pada huruf nun dan mim yang…", "bersabdu", "mati", "berbaris atas", "bertanwin"],
    ["Ghunnah musyaddadah dibaca dengan dengung sepanjang…", "2 harakat", "4 harakat", "6 harakat", "tiada dengung"],
    ["Tanda waqaf \"م\" (lazim) bermaksud…", "mesti berhenti", "tidak boleh berhenti", "boleh berhenti atau sambung", "lebih baik sambung"],
    ["Tanda waqaf \"لا\" bermaksud…", "tidak boleh berhenti", "mesti berhenti", "lebih baik berhenti", "harus berhenti"]
  ]},
  { t: "Hadis", q: [
    ["Hadis \"Tidak sempurna iman seseorang sehingga dia mengasihi saudaranya seperti dia mengasihi dirinya sendiri\" mengajar kita…", "mengasihi sesama Muslim", "mementingkan diri", "bermusuhan", "bersaing secara tidak sihat"],
    ["Hadis tentang menjaga lidah mengajar kita agar…", "berkata baik atau diam", "bercakap kasar", "mengumpat", "berbohong"],
    ["Hadis tentang kebersihan menyatakan bahawa kebersihan sebahagian daripada…", "iman", "harta", "ilmu sahaja", "kekayaan"],
    ["Hadis \"Sebaik-baik manusia ialah yang paling bermanfaat kepada manusia lain\" menggalakkan kita…", "membantu orang lain", "hidup sendirian", "mementingkan diri", "malas"],
    ["Sunnah ialah amalan yang…", "dilakukan atau disarankan oleh Rasulullah SAW", "dilarang", "makruh", "rekaan"]
  ]},
  { t: "Akidah", q: [
    ["Beriman kepada rasul bermaksud percaya bahawa Allah mengutus rasul untuk…", "menyampaikan wahyu kepada manusia", "menjadi raja", "berniaga", "berperang sahaja"],
    ["Sifat wajib bagi rasul ialah Siddiq, Amanah, Tabligh dan…", "Fatanah", "Kizib", "Khianat", "Kitman"],
    ["Mukjizat ialah…", "perkara luar biasa yang dikurniakan kepada nabi", "sihir", "ilmu biasa", "kekayaan"],
    ["Mukjizat terbesar Nabi Muhammad SAW ialah…", "al-Quran", "tongkat", "unta", "kapal"],
    ["Mukjizat Nabi Musa a.s. ialah…", "tongkat yang menjadi ular", "membelah bulan", "kapal besar", "menghidupkan burung tanah liat"],
    ["Nabi Muhammad SAW ialah…", "nabi dan rasul terakhir", "nabi pertama", "bukan rasul", "malaikat"],
    ["Kepercayaan bahawa ada nabi selepas Nabi Muhammad SAW adalah…", "bertentangan dengan akidah Islam", "dibenarkan", "sunat", "harus"]
  ]},
  { t: "Ibadah", q: [
    ["Waktu wajib zakat fitrah bermula apabila…", "terbenam matahari pada hari terakhir Ramadan", "masuk 1 Ramadan", "selesai solat sunat Aidilfitri", "masuk bulan Zulhijah", "Waktu harus: sepanjang Ramadan. Waktu wajib: terbenam matahari hari terakhir Ramadan. Waktu afdal: sebelum solat sunat Aidilfitri. Makruh selepas solat raya, dan haram dilewatkan selepas terbenam matahari 1 Syawal."],
    ["Asnaf zakat ada…", "8 golongan", "5 golongan", "10 golongan", "3 golongan"],
    ["Contoh asnaf zakat ialah…", "fakir dan miskin", "orang kaya", "peniaga besar", "pelancong"],
    ["Zakat harta wajib apabila cukup nisab dan…", "haul (genap setahun)", "sebulan", "seminggu", "sehari"],
    ["Puasa sunat pada hari Isnin dan…", "Khamis", "Jumaat", "Sabtu", "Ahad"],
    ["Antara perkara yang membatalkan puasa ialah…", "makan dan minum dengan sengaja", "makan kerana terlupa", "mandi", "bersugi"],
    ["Orang yang dibenarkan tidak berpuasa ialah…", "orang sakit dan musafir", "orang malas", "orang yang sibuk bermain", "orang kaya"]
  ]},
  { t: "Sirah", q: [
    ["Perjanjian Hudaibiyah dimeterai pada tahun…", "6 Hijrah", "1 Hijrah", "10 Hijrah", "2 Hijrah"],
    ["Pembukaan Kota Makkah (Fathu Makkah) berlaku pada tahun…", "8 Hijrah", "6 Hijrah", "2 Hijrah", "11 Hijrah"],
    ["Ketika Fathu Makkah, Nabi Muhammad SAW menunjukkan sifat…", "pemaaf", "pendendam", "pemarah", "sombong"],
    ["Haji Wida' ialah haji…", "terakhir Nabi Muhammad SAW", "pertama umat Islam", "Nabi Ibrahim", "khalifah"],
    ["Nabi Muhammad SAW wafat pada tahun…", "11 Hijrah", "8 Hijrah", "13 Hijrah", "2 Hijrah"],
    ["Peperangan yang menggunakan strategi menggali parit ialah Perang…", "Khandak (Ahzab)", "Badar", "Uhud", "Tabuk"]
  ]},
  { t: "Adab dan Akhlak", q: [
    ["Adab berjiran dalam Islam termasuk…", "tidak menyakiti jiran", "membuat bising", "mengumpat jiran", "membuang sampah di depan rumah jiran"],
    ["Sifat ikhlas bermaksud melakukan sesuatu…", "kerana Allah semata-mata", "untuk dipuji", "untuk ganjaran dunia sahaja", "kerana terpaksa"],
    ["Sifat istiqamah bermaksud…", "tetap dan berterusan dalam kebaikan", "mudah berubah", "malas", "berpura-pura"],
    ["Islam melarang perbuatan buli kerana…", "menyakiti orang lain", "baik untuk kesihatan", "menghiburkan", "tiada kesan"],
    ["Adab menggunakan telefon pintar termasuk…", "tidak menyebar fitnah dan menjaga masa", "bermain sepanjang malam", "membuli di media sosial", "berkongsi kata laluan"],
    ["Sifat syukur ditunjukkan dengan…", "menggunakan nikmat ke arah kebaikan", "membazir", "mengeluh", "sombong"]
  ]},
  { t: "Jawi", q: [
    ["تڠݢوڠجواب|Perkataan Jawi ini dibaca…", "tanggungjawab", "tanggungan", "tenggelam", "tunggu"],
    ["ڤنديديقن|Perkataan Jawi ini dibaca…", "pendidikan", "pendidik", "pendakian", "pendapatan"],
    ["Ejaan Jawi bagi \"pendidikan\" ialah…", "ڤنديديقن", "ڤنديديکن", "ڤندديقن", "فنديديقن"],
    ["Ejaan Jawi bagi \"ilmu\" ialah…", "علمو", "علم", "ايلمو", "عيلمو"],
    ["Perkataan pinjaman Arab dalam Jawi biasanya…", "dikekalkan ejaan asalnya", "dieja seperti Rumi", "tidak boleh ditulis", "ditukar huruf"],
    ["Tulisan Jawi dikatakan berkembang di Alam Melayu bersama kedatangan…", "Islam", "Portugis", "British", "Jepun"]
  ]}
],

/* ======================= BAHASA ARAB (tema dan tatabahasa) ======================= */
ba: [
  { t: "Alam Sekitar", q: [
    ["بِيئَةٌ|Perkataan ini bermaksud…", "alam sekitar", "rumah", "sekolah", "makanan"],
    ["نَظِيفٌ|Perkataan ini bermaksud…", "bersih", "kotor", "besar", "panas"],
    ["وَسِخٌ|Perkataan ini bermaksud…", "kotor", "bersih", "cantik", "baru"],
    ["شَجَرَةٌ|Perkataan ini bermaksud…", "pokok", "bunga", "rumput", "daun"],
    ["نَهْرٌ|Perkataan ini bermaksud…", "sungai", "laut", "tasik", "kolam"],
    ["نُحَافِظُ عَلَى الْبِيئَةِ|Ayat ini bermaksud…", "Kami menjaga alam sekitar", "Kami mencemarkan alam", "Kami pergi ke taman", "Kami membuang sampah"]
  ]},
  { t: "Perayaan dan Sambutan", q: [
    ["عِيدُ الْفِطْرِ|Perayaan ini ialah…", "Hari Raya Aidilfitri", "Hari Raya Aidiladha", "Maulidur Rasul", "Awal Muharam"],
    ["عِيدُ الْأَضْحَى|Perayaan ini ialah…", "Hari Raya Aidiladha", "Hari Raya Aidilfitri", "Israk Mikraj", "Nuzul Quran"],
    ["عِيدٌ سَعِيدٌ|Ucapan ini bermaksud…", "Selamat Hari Raya", "Selamat pagi", "Selamat jalan", "Terima kasih"],
    ["رَمَضَانُ كَرِيمٌ|Ucapan ini sesuai pada bulan…", "Ramadan", "Syawal", "Muharam", "Rejab"],
    ["صَوْمٌ|Perkataan ini bermaksud…", "puasa", "solat", "zakat", "haji"],
    ["زِيَارَةٌ|Perkataan ini bermaksud…", "lawatan / ziarah", "hadiah", "makanan", "jemputan"]
  ]},
  { t: "Pekerjaan dan Cita-cita", q: [
    ["مُهَنْدِسٌ|Pekerjaan ini ialah…", "jurutera", "doktor", "guru", "peguam"],
    ["مُحَامٍ|Pekerjaan ini ialah…", "peguam", "polis", "jururawat", "petani"],
    ["طَيَّارٌ|Pekerjaan ini ialah…", "juruterbang", "pemandu", "pelaut", "tukang masak"],
    ["مَاذَا تُرِيدُ أَنْ تَكُونَ؟|Soalan ini bermaksud…", "Kamu mahu jadi apa?", "Kamu tinggal di mana?", "Kamu sedang buat apa?", "Siapa nama kamu?"],
    ["أُرِيدُ أَنْ أَكُونَ طَبِيبًا|Ayat ini bermaksud…", "Saya mahu menjadi doktor", "Saya seorang doktor", "Saya pergi ke doktor", "Doktor itu baik"],
    ["Bentuk perempuan bagi مُعَلِّمٌ ialah…", "مُعَلِّمَةٌ", "مُعَلِّمُونَ", "مُعَلِّمَانِ", "تَعْلِيمٌ"]
  ]},
  { t: "Fi'il Madhi dengan Dhamir", q: [
    ["كَتَبْتُ|Kata kerja ini bermaksud…", "saya telah menulis", "dia telah menulis", "kamu menulis", "kami menulis"],
    ["كَتَبْنَا|Kata kerja ini bermaksud…", "kami telah menulis", "saya telah menulis", "mereka menulis", "dia menulis"],
    ["كَتَبُوا|Kata kerja ini bermaksud…", "mereka (lelaki) telah menulis", "kami telah menulis", "dia telah menulis", "kamu telah menulis"],
    ["كَتَبَتْ|Kata kerja ini bermaksud…", "dia (perempuan) telah menulis", "dia (lelaki) telah menulis", "saya telah menulis", "kamu telah menulis"],
    ["Fi'il madhi yang sesuai untuk أَنَا (pergi) ialah…", "ذَهَبْتُ", "ذَهَبَ", "ذَهَبُوا", "ذَهَبَتْ"],
    ["Fi'il madhi yang sesuai untuk نَحْنُ (membaca) ialah…", "قَرَأْنَا", "قَرَأْتُ", "قَرَأَ", "قَرَأُوا"]
  ]},
  { t: "Fi'il Amar dan Nahi", q: [
    ["اُكْتُبْ|Kata kerja ini bermaksud…", "tulislah!", "dia menulis", "jangan tulis", "saya menulis"],
    ["اِجْلِسْ|Kata kerja ini bermaksud…", "duduklah!", "berdirilah!", "pergilah!", "tidurlah!"],
    ["لَا تَتَكَلَّمْ|Larangan ini bermaksud…", "Jangan bercakap!", "Bercakaplah!", "Dia bercakap", "Saya bercakap"],
    ["لَا تَرْمِ الْقُمَامَةَ|Larangan ini bermaksud…", "Jangan buang sampah!", "Buanglah sampah!", "Kutip sampah!", "Sampah itu kotor"],
    ["Fi'il amar digunakan untuk…", "memberi arahan", "menceritakan masa lalu", "menafikan", "bertanya"],
    ["Fi'il nahi dibentuk dengan menambah ___ sebelum fi'il mudhari'.", "لَا", "مَا", "لَنْ", "قَدْ"]
  ]},
  { t: "Isim Dhamir Muttasil (Kata Ganti Bersambung)", q: [
    ["كِتَابِي|Frasa ini bermaksud…", "buku saya", "buku kamu", "buku dia", "buku kami"],
    ["كِتَابُكَ|Frasa ini bermaksud…", "buku kamu (lelaki)", "buku saya", "buku dia", "buku mereka"],
    ["كِتَابُهُ|Frasa ini bermaksud…", "buku dia (lelaki)", "buku dia (perempuan)", "buku saya", "buku kami"],
    ["كِتَابُهَا|Frasa ini bermaksud…", "buku dia (perempuan)", "buku dia (lelaki)", "buku kamu", "buku saya"],
    ["كِتَابُنَا|Frasa ini bermaksud…", "buku kami", "buku saya", "buku mereka", "buku kamu"],
    ["بَيْتُهُمْ|Frasa ini bermaksud…", "rumah mereka", "rumah kami", "rumah dia", "rumah kamu"]
  ]}
]
};
})();
