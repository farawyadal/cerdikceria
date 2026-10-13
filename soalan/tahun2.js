/* =========================================================
   TAHUN 2 — Cerdik Ceria
   Matematik & Sains: bab ikut DSKP / buku teks KSSR Tahun 2.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang KSSR.
   Bahasa Arab: ikut tema perbendaharaan kata.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🐱|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tahun 2 ---------- */
const SA = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan"];
function sebut(n) {
  if (n === 0) return "kosong";
  if (n === 1000) return "seribu";
  let out = [];
  const ra = Math.floor(n / 100), rest = n % 100;
  if (ra) out.push(ra === 1 ? "seratus" : SA[ra] + " ratus");
  if (rest) {
    if (rest < 10) out.push(SA[rest]);
    else if (rest === 10) out.push("sepuluh");
    else if (rest === 11) out.push("sebelas");
    else if (rest < 20) out.push(SA[rest - 10] + " belas");
    else { const p = Math.floor(rest / 10), s = rest % 10; out.push(SA[p] + " puluh" + (s ? " " + SA[s] : "")); }
  }
  return out.join(" ");
}
const TEMPAT = ["sa", "puluh", "ratus"];
const sen = n => n + " sen";
const rm = n => "RM" + n;
const JAM = h => String.fromCodePoint(0x1F550 + h - 1);        // 🕐 … 🕛 (tepat)
const JAM30 = h => String.fromCodePoint(0x1F55C + h - 1);      // 🕜 … 🕧 (setengah)
const KOTAK = (n, d) => "🟩".repeat(n) + "⬜".repeat(d - n);

SOALAN[2] = {

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Kata Nama dan Penjodoh Bilangan", q: [
    ["Yang manakah kata nama am?", "sekolah", "Kuala Lumpur", "Ahmad", "Sungai Klang"],
    ["Yang manakah kata nama khas?", "Pulau Pinang", "pulau", "pantai", "laut"],
    ["Kata nama khas ditulis bermula dengan huruf…", "besar", "kecil", "condong", "nombor"],
    ["Penjodoh bilangan yang sesuai: \"seekor ___\"", "kucing", "kereta", "pensel", "rumah"],
    ["Penjodoh bilangan yang sesuai: \"sebuah ___\"", "kereta", "ikan", "pensel", "baju"],
    ["Penjodoh bilangan yang sesuai: \"sebatang ___\"", "pensel", "buku", "ayam", "baju"],
    ["Penjodoh bilangan yang sesuai: \"sehelai ___\"", "baju", "kereta", "pokok", "kucing"],
    ["Penjodoh bilangan yang sesuai: \"sebiji ___\"", "bola", "pensel", "kain", "lembu"],
    ["Penjodoh bilangan yang sesuai: \"seorang ___\"", "guru", "kucing", "buku", "kereta"],
    ["Penjodoh bilangan yang sesuai: \"sekeping ___\"", "kertas", "kucing", "pokok", "guru"],
    ["🐄🐄🐄|Tiga ___ lembu.", "ekor", "buah", "biji", "orang"],
    ["🚗🚗|Dua ___ kereta.", "buah", "ekor", "batang", "helai"]
  ]},
  { t: "Kata Kerja", q: [
    ["Yang manakah kata kerja?", "menyapu", "penyapu", "bersih", "lantai"],
    ["Yang manakah kata kerja?", "berlari", "kasut", "laju", "padang"],
    ["🧹|Kakak sedang ___ lantai.", "menyapu", "memasak", "menulis", "berenang"],
    ["✍️|Adik sedang ___ surat.", "menulis", "menyapu", "menendang", "memandu"],
    ["🍳|Ibu sedang ___ di dapur.", "memasak", "berenang", "melukis", "berlari"],
    ["⚽|Abang sedang ___ bola.", "menendang", "membaca", "menjahit", "menyiram"],
    ["🚿|Ayah sedang ___ pokok bunga.", "menyiram", "menjahit", "memandu", "menulis"],
    ["🎨|Mei Ling suka ___ gambar.", "melukis", "menyiram", "menyapu", "menendang"],
    ["Imbuhan \"ber-\" + \"main\" menjadi…", "bermain", "memain", "pemain", "permainan"],
    ["Imbuhan \"me-\" + \"baca\" menjadi…", "membaca", "mebaca", "menbaca", "pembaca"],
    ["Imbuhan \"me-\" + \"lukis\" menjadi…", "melukis", "melukisan", "pelukis", "berlukis"],
    ["Saya ___ ke sekolah dengan basikal.", "pergi", "pulang ke", "makan", "tidur"]
  ]},
  { t: "Kata Adjektif dan Lawan Kata", q: [
    ["Yang manakah kata adjektif?", "comel", "kucing", "makan", "di"],
    ["Yang manakah kata adjektif?", "tinggi", "pokok", "memanjat", "dan"],
    ["🐘|Gajah sangat ___.", "besar", "kecil", "ringan", "nipis"],
    ["🐢|Kura-kura berjalan dengan ___.", "perlahan", "laju", "cepat", "pantas"],
    ["🌶️|Cili rasanya…", "pedas", "manis", "masam", "masin"],
    ["🍬|Gula-gula rasanya…", "manis", "pahit", "masin", "pedas"],
    ["Lawan bagi \"tebal\" ialah…", "nipis", "besar", "lebar", "berat"],
    ["Lawan bagi \"berat\" ialah…", "ringan", "besar", "kuat", "tebal"],
    ["Lawan bagi \"jauh\" ialah…", "dekat", "panjang", "luas", "tinggi"],
    ["Lawan bagi \"baru\" ialah…", "lama", "cantik", "mahal", "kecil"],
    ["Lawan bagi \"kenyang\" ialah…", "lapar", "dahaga", "penat", "sakit"],
    ["Lawan bagi \"naik\" ialah…", "turun", "masuk", "keluar", "atas"]
  ]},
  { t: "Kata Ganda dan Sinonim", q: [
    ["\"budak-budak\" ialah contoh…", "kata ganda", "kata kerja", "kata adjektif", "kata tanya"],
    ["Kata ganda bagi \"buku\" ialah…", "buku-buku", "bubuku", "buku buku buku", "berbuku"],
    ["🌸🌸🌸|Banyak ___ di taman.", "bunga-bunga", "bunga", "berbunga", "bunganya"],
    ["Sinonim bagi \"cantik\" ialah…", "indah", "hodoh", "kotor", "besar"],
    ["Sinonim bagi \"besar\" ialah…", "luas", "kecil", "sempit", "pendek"],
    ["Sinonim bagi \"suka\" ialah…", "gemar", "benci", "marah", "takut"],
    ["Sinonim bagi \"cepat\" ialah…", "laju", "lambat", "perlahan", "berat"],
    ["Sinonim bagi \"pandai\" ialah…", "bijak", "malas", "lambat", "kecil"],
    ["Sinonim bagi \"sedih\" ialah…", "pilu", "gembira", "riang", "suka"],
    ["Sinonim bagi \"ibu\" ialah…", "emak", "bapa", "kakak", "nenek"]
  ]},
  { t: "Ayat dan Tanda Baca", q: [
    ["Tanda baca di akhir ayat penyata ialah…", ".", "?", "!", ","],
    ["Tanda baca di akhir ayat tanya ialah…", "?", ".", ",", "!"],
    ["Tanda koma (,) digunakan untuk…", "memisahkan senarai benda", "menamatkan ayat", "bertanya", "terkejut"],
    ["Ayat yang betul ialah…", "Adik minum susu.", "Susu adik minum.", "Minum susu adik adik.", "Adik susu minum."],
    ["Ayat yang betul ialah…", "Ali pergi ke kedai.", "Ke kedai Ali pergi pergi.", "Kedai Ali ke pergi.", "Pergi Ali kedai ke."],
    ["___ kamu pergi ke sekolah? — Dengan bas.", "Bagaimanakah", "Siapakah", "Apakah", "Bilakah"],
    ["___ hari jadi kamu? — Pada 5 Mei.", "Bilakah", "Siapakah", "Di manakah", "Berapakah"],
    ["___ nama guru kelas kamu?", "Siapakah", "Di manakah", "Bilakah", "Berapakah"],
    ["Ibu membeli ikan, sayur ___ buah.", "dan", "tetapi", "atau", "kerana"],
    ["Saya mahu bermain ___ hujan turun.", "tetapi", "dan", "atau", "dengan"],
    ["Ucapan untuk kawan yang menang pertandingan ialah…", "Tahniah", "Maaf", "Selamat jalan", "Selamat malam"],
    ["Ayat \"Wah, cantiknya bunga itu!\" ialah ayat…", "seruan", "tanya", "perintah", "penyata"]
  ]},
  { t: "Kosa Kata dan Ejaan", q: [
    ["🦒|Ini ialah…", "zirafah", "kuda", "unta", "rusa"],
    ["🐊|Ini ialah…", "buaya", "biawak", "ular", "katak"],
    ["🍍|Ini ialah…", "nanas", "durian", "mangga", "betik"],
    ["🥥|Ini ialah…", "kelapa", "durian", "manggis", "rambutan"],
    ["🚑|Ini ialah…", "ambulans", "bas", "lori", "teksi"],
    ["⛵|Ini ialah…", "perahu layar", "kapal terbang", "kereta api", "basikal"],
    ["🌈|Ini ialah…", "pelangi", "awan", "kilat", "bintang"],
    ["Ejaan yang betul ialah…", "rambutan", "rambotan", "rembutan", "rambutaan"],
    ["Ejaan yang betul ialah…", "kereta api", "keretapi", "kreta api", "kereta-api"],
    ["Ejaan yang betul ialah…", "perpustakaan", "perpustakan", "pepustakaan", "perpustakaam"],
    ["Ejaan yang betul ialah…", "jururawat", "juru rawat", "jurawat", "jururawad"],
    ["Ejaan yang betul ialah…", "Disember", "Desember", "Disembar", "Dicember"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Phonics and Spelling", q: [
    ["Which word rhymes with \"cake\"?", "lake", "cook", "cat", "kick"],
    ["Which word rhymes with \"bee\"?", "tree", "bed", "bat", "bow"],
    ["Which word rhymes with \"light\"?", "kite", "lit", "late", "lot"],
    ["Which word has the \"sh\" sound?", "ship", "chip", "sip", "zip"],
    ["Which word has the \"ch\" sound?", "chair", "share", "hair", "car"],
    ["🐑|The correct spelling is…", "sheep", "sheap", "shep", "sheepp"],
    ["🌳|The correct spelling is…", "tree", "trea", "tre", "trie"],
    ["🦆|The correct spelling is…", "duck", "duk", "dack", "duc"],
    ["🦷|The correct spelling is…", "tooth", "toothe", "tuth", "toth"],
    ["🧀|The correct spelling is…", "cheese", "chese", "cheeze", "chees"],
    ["Which word is spelled correctly?", "school", "skool", "shcool", "scool"],
    ["Which word is spelled correctly?", "friend", "freind", "frend", "friand"]
  ]},
  { t: "Daily Routines and Time", q: [
    ["I brush my teeth in the…", "morning", "lunch", "kitchen", "garden"],
    ["We eat lunch in the…", "afternoon", "midnight", "early morning", "bedroom"],
    ["I go to bed at…", "night", "noon", "breakfast", "school"],
    ["Which day comes after Wednesday?", "Thursday", "Tuesday", "Friday", "Monday"],
    ["Which day comes before Saturday?", "Friday", "Sunday", "Thursday", "Monday"],
    ["How many days are there in a week?", "seven", "five", "six", "ten"],
    ["The first meal of the day is…", "breakfast", "lunch", "dinner", "supper"],
    ["🕒|It is three o'…", "clock", "time", "watch", "hour"],
    ["🛁|I take a ___ every day.", "bath", "bed", "book", "bus"],
    ["After school, I do my…", "homework", "breakfast", "pillow", "shoes"]
  ]},
  { t: "Places and Prepositions", q: [
    ["We borrow books at the…", "library", "zoo", "beach", "garage"],
    ["We see animals at the…", "zoo", "library", "bank", "hospital"],
    ["Sick people go to the…", "hospital", "school", "zoo", "cinema"],
    ["We buy bread at the…", "bakery", "clinic", "library", "garden"],
    ["We play on the swings at the…", "playground", "kitchen", "bank", "bathroom"],
    ["The cat is ___ the box. (inside)", "in", "on", "under", "behind"],
    ["The book is ___ the table. (on top)", "on", "in", "under", "between"],
    ["The ball is ___ the chair. (below)", "under", "on", "in", "above"],
    ["The bird is ___ the tree. (on a branch)", "in", "under", "below", "behind"],
    ["Ali sits ___ Siti and Ravi.", "between", "under", "on", "in"],
    ["The car is ___ the house. (at the back)", "behind", "in", "on", "between"]
  ]},
  { t: "Animals and Nature", q: [
    ["🦓|This is a…", "zebra", "horse", "donkey", "tiger"],
    ["🐧|This is a…", "penguin", "duck", "parrot", "owl"],
    ["🦉|This is an…", "owl", "eagle", "ostrich", "octopus"],
    ["🐙|This is an…", "octopus", "owl", "ant", "eel"],
    ["🐜|This is an…", "ant", "owl", "eagle", "egg"],
    ["Which animal has stripes?", "zebra", "elephant", "frog", "rabbit"],
    ["Which animal lives in the sea?", "shark", "lion", "goat", "camel"],
    ["Which animal can hop?", "kangaroo", "snail", "fish", "snake"],
    ["☀️|This is the…", "sun", "moon", "star", "cloud"],
    ["🌧️|What is the weather like?", "rainy", "sunny", "windy", "snowy"],
    ["🌬️|What is the weather like?", "windy", "rainy", "sunny", "hot"],
    ["A baby frog is called a…", "tadpole", "kitten", "puppy", "calf"]
  ]},
  { t: "Food and Shopping", q: [
    ["🍔|This is a…", "burger", "pizza", "sandwich", "cake"],
    ["🍕|This is a…", "pizza", "pie", "burger", "bread"],
    ["🥪|This is a…", "sandwich", "burger", "cookie", "taco"],
    ["🍪|This is a…", "cookie", "cake", "bread", "pie"],
    ["🍉|This is a…", "watermelon", "papaya", "melon", "mango"],
    ["\"How much is the pencil?\" — \"It is ___.\"", "RM1", "blue", "long", "mine"],
    ["\"Can I help you?\" — \"Yes, I want ___ apples.\"", "two", "blue", "happy", "fast"],
    ["We use a ___ to eat soup.", "spoon", "knife", "plate", "cup"],
    ["We drink tea from a…", "cup", "plate", "fork", "bowl"],
    ["Which one is healthy?", "fruits and vegetables", "a lot of sweets", "a lot of soft drinks", "too much fried food"]
  ]},
  { t: "Grammar", q: [
    ["The children ___ in the garden.", "are", "is", "am", "be"],
    ["My sister ___ a doll.", "has", "have", "having", "is"],
    ["They ___ two cats.", "have", "has", "is", "am"],
    ["He ___ to school every day.", "walks", "walk", "walking", "walked to"],
    ["I ___ rice every day.", "eat", "eats", "eating", "is eat"],
    ["One box, two ___.", "boxes", "boxs", "box", "boxies"],
    ["One baby, two ___.", "babies", "babys", "babyes", "baby"],
    ["One man, two ___.", "men", "mans", "manes", "man"],
    ["___ is my book. (near)", "This", "Those", "These", "They"],
    ["___ are my shoes. (near)", "These", "This", "That", "It"],
    ["She is ___ than her brother. (tall)", "taller", "tall", "tallest", "more tall"]
  ]},
  { t: "Feelings", q: [
    ["😀|He feels…", "happy", "sad", "angry", "scared"],
    ["😨|She feels…", "scared", "happy", "sleepy", "hungry"],
    ["😴|The baby is…", "sleepy", "angry", "excited", "scared"],
    ["🤒|Ali is…", "sick", "happy", "strong", "hungry"],
    ["I want to eat. I am…", "hungry", "thirsty", "sleepy", "angry"],
    ["I want to drink. I am…", "thirsty", "hungry", "tired", "happy"],
    ["My friend got a present. She feels…", "happy", "sad", "angry", "sick"],
    ["Someone took my toy. I feel…", "angry", "happy", "sleepy", "hungry"],
    ["When a friend is sad, we should…", "help and comfort them", "laugh at them", "walk away", "shout at them"]
  ]}
],

/* ======================= MATEMATIK (bab DSKP Tahun 2) ======================= */
math: [
  { t: "Nombor Bulat hingga 1000",
    q: [
      ["Nombor terbesar tiga digit ialah…", "999", "100", "900", "1000"],
      ["Nombor terkecil tiga digit ialah…", "100", "101", "999", "10"],
      ["\"seribu\" ditulis sebagai…", "1000", "100", "10 000", "1100"]
    ],
    g: [
      () => { const n = r(101, 999); const ws = [n + 1, n - 1, n + 10, n - 10, n + 100, n - 100].filter(x => x > 0 && x < 1000).map(sebut); return from(`${n} disebut…`, sebut(n), ws); },
      () => { const n = r(101, 999); const s = String(n); const swap = Number(s[0] + s[2] + s[1]); return from(`Nombor bagi \"${sebut(n)}\" ialah…`, String(n), [n + 10, n - 10, n + 100, n - 100, swap, n + 1, n - 1].filter(x => x > 0 && x < 1000 && x !== n).map(String)); },
      () => { let n, s, p, d; do { n = r(101, 999); s = String(n); p = r(0, 2); d = +s[2 - p]; } while (!d || s.split("").filter(x => +x === d).length > 1); const v = d * 10 ** p; return from(`Nilai digit ${d} dalam ${n} ialah…`, String(v), [d, d * 10, d * 100].filter(x => x !== v).map(String).concat([String(v + 1)]), `Digit ${d} berada di tempat ${TEMPAT[p]}.`); },
      () => { const s = new Set(); while (s.size < 4) s.add(r(100, 999)); const ns = [...s].sort((a, b) => b - a); return ["Nombor manakah yang paling besar?", ...ns.map(String), ""]; },
      () => { const s = new Set(); while (s.size < 4) s.add(r(100, 999)); const ns = [...s].sort((a, b) => a - b); return ["Nombor manakah yang paling kecil?", ...ns.map(String), ""]; },
      () => { const st = pick([2, 5, 10, 100]), a = r(1, 999 - st * 4); const seq = [a, a + st, a + 2 * st, a + 3 * st]; const hide = r(1, 3); const ans = seq[hide]; return q(`Lengkapkan pola nombor:\n${seq.map((x, i) => i === hide ? "___" : x).join(", ")}`, ans, [1, st, 10], false, `Tambah ${st} setiap kali.`); },
      () => { const n = r(11, 994); const u = pick([10, 100]); const ans = Math.round(n / u) * u; return q(`Bundarkan ${n} kepada ${u === 10 ? "puluh" : "ratus"} yang terdekat.`, ans, [u, u * 2, 1]); }
    ] },
  { t: "Operasi Asas",
    q: [
      ["Tanda \"×\" bermaksud…", "darab", "bahagi", "tambah", "tolak"],
      ["Tanda \"÷\" bermaksud…", "bahagi", "darab", "tolak", "tambah"],
      ["Sebarang nombor darab 0 ialah…", "0", "1", "nombor itu sendiri", "10"],
      ["Sebarang nombor darab 1 ialah…", "nombor itu sendiri", "0", "1", "10"]
    ],
    g: [
      () => { const a = r(100, 800), b = r(10, 999 - a); return q(`${a} + ${b} = ?`, a + b, [1, 10, 100]); },
      () => { const a = r(200, 999), b = r(10, a - 1); return q(`${a} − ${b} = ?`, a - b, [1, 10, 100]); },
      () => { const a = pick([2, 3, 4, 5, 10]), b = r(1, 10); return q(`${a} × ${b} = ?`, a * b, [a, 1, 2]); },
      () => { const a = pick([2, 3, 4, 5, 10]), b = r(1, 10); return q(`${a * b} ÷ ${a} = ?`, b, [1, 2]); },
      () => { const a = r(11, 99); return q(`${a} × 10 = ?`, a * 10, [10, 100, a], false, "Tambah satu sifar di belakang."); },
      () => { const a = r(11, 99) * 10; return q(`${a} ÷ 10 = ?`, a / 10, [1, 10, a / 100 || 1], false, "Buang satu sifar di belakang."); },
      () => { const b = pick(["🍬", "🍎", "🧁", "⭐"]), g = r(2, 5), n = r(2, 5); return q(`${(b.repeat(n) + "\n").repeat(g).trim()}|Ada ${g} kumpulan, setiap kumpulan ${n}. Berapakah jumlahnya?`, g * n, [1, g, n]); },
      () => { const n = pick(["Aina", "Kumar", "Lim", "Hafiz"]), k = pick([2, 3, 4, 5]), e = r(2, 9); return q(`🍪|${n} mempunyai ${k * e} keping biskut. Biskut itu dibahagi sama banyak kepada ${k} orang kawan. Berapa keping setiap orang dapat?`, e, [1, 2, k]); },
      () => { const a = r(120, 600), b = r(50, 300); return q(`📚|Perpustakaan ada ${a} buku cerita dan ${b} buku sains. Berapakah jumlah buku?`, a + b, [1, 10, 100]); }
    ] },
  { t: "Pecahan dan Perpuluhan",
    q: [
      ["🟩🟩⬜⬜|Bahagian berwarna ialah…", "2/4", "1/4", "3/4", "4/2"],
      ["🟩🟩🟩⬜|Bahagian berwarna ialah…", "3/4", "1/4", "2/4", "4/3"],
      ["Yang manakah pecahan wajar?", "2/5", "5/2", "7/3", "4/4"],
      ["0.1 bersamaan dengan…", "1/10", "1/100", "10/1", "1/1"],
      ["0.5 dibaca sebagai…", "sifar perpuluhan lima", "lima puluh", "lima perpuluhan sifar", "kosong lima"],
      ["Yang manakah lebih besar?", "3/4", "1/4", "2/4", "Semua sama", "Tiga perempat lebih besar."]
    ],
    g: [
      () => { const d = r(2, 8), n = r(1, d - 1); const right = `${n}/${d}`; return from(`${KOTAK(n, d)}|Bahagian berwarna ialah…`, right, [`${d - n}/${d}`, `${d}/${n}`, `${n}/${d + 1}`, `${n + 1}/${d}`].filter(x => x !== right)); },
      () => { const n = r(1, 9); return from(`${KOTAK(n, 10)}|Bahagian berwarna dalam bentuk perpuluhan ialah…`, `0.${n}`, [`0.${10 - n}`, `${n}.0`, `0.0${n}`, `${n}.10`].filter(x => x !== `0.${n}`)); },
      () => { const n = r(1, 9); return from(`${n}/10 dalam bentuk perpuluhan ialah…`, `0.${n}`, [`${n}.0`, `0.0${n}`, `1.${n}`, `0.${10 - n}`].filter(x => x !== `0.${n}`)); },
      () => { const d = pick([5, 6, 8, 10]); let a = r(1, d - 1), b = r(1, d - 1); while (b === a) b = r(1, d - 1); const big = Math.max(a, b); return from(`Pecahan manakah lebih besar: ${a}/${d} atau ${b}/${d}?`, `${big}/${d}`, [`${Math.min(a, b)}/${d}`, "Sama besar", "Tidak dapat dibanding"]); }
    ] },
  { t: "Wang",
    q: [
      ["RM1 = ___ sen", "100", "10", "50", "1000"],
      ["Wang kertas yang paling besar nilainya di bawah ialah…", "RM100", "RM50", "RM20", "RM10"],
      ["Duit syiling yang paling kecil nilainya di bawah ialah…", "5 sen", "10 sen", "20 sen", "50 sen"],
      ["Dua keping RM50 = ?", "RM100", "RM50", "RM10", "RM500"]
    ],
    g: [
      () => { const cs = [5, 10, 20, 50]; let a = pick(cs), b = pick(cs), c = pick(cs); if (a + b + c > 100) c = 5; return q(`🪙|${sen(a)} + ${sen(b)} + ${sen(c)} = ?`, a + b + c, [5, 10, 20], false, "", sen); },
      () => { const ns = [1, 5, 10, 20, 50]; const a = pick(ns), b = pick(ns), c = pick([1, 5, 10]); return q(`💵|${rm(a)} + ${rm(b)} + ${rm(c)} = ?`, a + b + c, [1, 5, 10], false, "", rm); },
      () => { const a = r(20, 100), b = r(1, a - 1); return q(`💵|${rm(a)} − ${rm(b)} = ?`, a - b, [1, 5, 10], false, "", rm); },
      () => { const h = r(2, 9), n = r(2, 5); return q(`🧃|Sekotak jus berharga RM${h}. Berapakah harga ${n} kotak jus?`, h * n, [h, 1, 2], false, "", rm); },
      () => { const h = pick([20, 30, 40, 50, 60, 70, 80]), bayar = 100; return q(`🍦|Aiskrim berharga ${sen(h)}. Kamu membayar RM1. Berapakah baki?`, bayar - h, [10, 20], false, "", sen); }
    ] },
  { t: "Masa dan Waktu",
    q: [
      ["1 jam = ___ minit", "60", "100", "30", "24"],
      ["1 hari = ___ jam", "24", "12", "60", "7"],
      ["1 minggu = ___ hari", "7", "5", "10", "30"],
      ["Setengah jam = ___ minit", "30", "50", "15", "60"]
    ],
    g: [
      () => { const h = r(1, 12); return from(`${JAM(h)}|Jam menunjukkan pukul berapa?`, `pukul ${h}`, shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(x => x !== h)).slice(0, 4).map(x => `pukul ${x}`).concat([`pukul ${h} setengah`])); },
      () => { const h = r(1, 12); const right = `pukul ${h} setengah`; return from(`${JAM30(h)}|Jam menunjukkan pukul berapa?`, right, [`pukul ${h}`, `pukul ${h % 12 + 1} setengah`, `pukul ${(h + 10) % 12 + 1} setengah`, `pukul ${h % 12 + 1}`]); },
      () => { const h = r(2, 5); return q(`${h} jam = ___ minit`, h * 60, [60, 10, 30]); },
      () => { const d = r(2, 4); return q(`${d} hari = ___ jam`, d * 24, [24, 12, 10]); },
      () => { const w = r(2, 4); return q(`${w} minggu = ___ hari`, w * 7, [7, 1, 2]); },
      () => { const h = r(1, 3), m = pick([10, 15, 20, 30, 45]); return q(`${h} jam ${m} minit = ___ minit`, h * 60 + m, [60, 10, 40]); }
    ] },
  { t: "Ukuran dan Sukatan",
    q: [
      ["1 m = ___ cm", "100", "10", "1000", "60"],
      ["1 kg = ___ g", "1000", "100", "10", "500"],
      ["1 liter = ___ ml", "1000", "100", "10", "500"],
      ["Alat untuk mengukur panjang buku ialah…", "pembaris", "penimbang", "bikar", "jam"],
      ["Unit yang sesuai untuk mengukur panjang padang ialah…", "meter (m)", "gram (g)", "liter (l)", "sentimeter persegi"],
      ["Unit yang sesuai untuk menyukat air dalam gelas ialah…", "mililiter (ml)", "kilogram (kg)", "meter (m)", "jam"],
      ["Yang manakah paling berat?", "🧱 1 kg", "🪶 10 g", "🍬 5 g", "📄 2 g"]
    ],
    g: [
      () => { const m = r(2, 9); return q(`${m} m = ___ cm`, m * 100, [100, 10, 50]); },
      () => { const k = r(2, 9); return q(`${k} kg = ___ g`, k * 1000, [1000, 100, 500]); },
      () => { const l = r(2, 9); return q(`${l} liter = ___ ml`, l * 1000, [1000, 100, 500]); },
      () => { const a = r(12, 60), b = r(5, 40); return q(`📏|Reben merah ${a} cm, reben biru ${b} cm. Berapakah jumlah panjang?`, a + b, [1, 10, 5], false, "", x => x + " cm"); },
      () => { const a = r(300, 900), b = r(50, a - 50); return q(`⚖️|Beg A ${a} g, beg B ${b} g. Berapakah beza jisim?`, a - b, [10, 50, 100], false, "", x => x + " g"); }
    ] },
  { t: "Ruang", q: [
    ["🎲|Bentuk ini ialah…", "kubus", "kuboid", "sfera", "kon"],
    ["📦|Bentuk ini ialah…", "kuboid", "kubus", "silinder", "piramid"],
    ["🥫|Bentuk ini ialah…", "silinder", "kon", "kubus", "sfera"],
    ["🍦|Bentuk kon aiskrim ialah…", "kon", "silinder", "piramid", "kubus"],
    ["⚽|Bentuk bola ialah…", "sfera", "silinder", "kon", "kubus"],
    ["🔺|Bentuk dua dimensi ini ialah…", "segi tiga", "bulatan", "segi empat sama", "segi empat tepat"],
    ["Kubus mempunyai ___ permukaan rata.", "6", "4", "5", "8"],
    ["Kubus mempunyai ___ bucu.", "8", "6", "12", "4"],
    ["Kubus mempunyai ___ tepi.", "12", "8", "6", "10"],
    ["Piramid bertapak segi empat mempunyai ___ bucu.", "5", "4", "6", "8"],
    ["Silinder mempunyai ___ permukaan rata.", "2", "1", "0", "3"],
    ["Kon mempunyai ___ permukaan rata.", "1", "0", "2", "3"],
    ["Bentuk yang tidak mempunyai permukaan rata ialah…", "sfera", "kubus", "kon", "silinder"],
    ["Segi empat tepat mempunyai ___ sisi.", "4", "3", "5", "6"],
    ["Bentangan kubus terdiri daripada ___ segi empat sama.", "6", "4", "5", "8"]
  ]},
  { t: "Pengurusan Data",
    q: [
      ["Carta yang menggunakan palang untuk menunjukkan data ialah…", "carta palang", "piktograf", "jadual waktu", "peta"],
      ["Mengumpul data boleh dilakukan dengan cara…", "bertanya dan mencatat", "meneka sahaja", "tidur", "melukis bebas"]
    ],
    g: [
      () => {
        const items = shuffle(["⚽ Bola", "🏸 Badminton", "🏊 Renang", "🏃 Lari"]).slice(0, 4);
        const c = shuffle([2, 3, 4, 5, 6, 7, 8]).slice(0, 4);
        const chart = items.map((e, i) => e.split(" ")[0] + " " + "🟦".repeat(c[i]) + " " + c[i]).join("\n");
        const t = r(0, 3), names = items.map(x => x.split(" ")[1]);
        if (t === 0) { const m = c.indexOf(Math.max(...c)); return [`${chart}|Sukan kegemaran murid kelas 2 Cerdas. Sukan manakah paling digemari?`, names[m], ...names.filter((_, i) => i !== m), ""]; }
        if (t === 1) { const m = c.indexOf(Math.min(...c)); return [`${chart}|Sukan manakah paling kurang digemari?`, names[m], ...names.filter((_, i) => i !== m), ""]; }
        if (t === 2) { const tot = c.reduce((a, b) => a + b, 0); return q(`${chart}|Berapakah jumlah murid semuanya?`, tot, [1, 2, 3]); }
        return q(`${chart}|Berapakah beza bilangan murid yang memilih ${names[0]} dan ${names[1]}?`, Math.abs(c[0] - c[1]), [1, 2]);
      }
    ] }
],

/* ======================= SAINS (topik DSKP Tahun 2) ======================= */
sains: [
  { t: "Kemahiran Saintifik", q: [
    ["Kita mengumpul maklumat menggunakan deria. Kemahiran ini dipanggil…", "memerhati", "meramal", "mengukur", "mengelas"],
    ["Mengasingkan objek mengikut ciri yang sama dipanggil…", "mengelas", "memerhati", "meramal", "berkomunikasi"],
    ["Kita menggunakan ___ untuk mengukur panjang.", "pembaris", "termometer", "jam", "penimbang"],
    ["Membuat jangkaan tentang apa yang akan berlaku dipanggil…", "meramal", "mengelas", "mengukur", "melukis"],
    ["Selepas aktiviti di bilik sains, kita perlu…", "membasuh tangan", "makan", "berlari", "meninggalkan bahan bersepah"],
    ["Bahan di bilik sains tidak boleh…", "dirasa tanpa kebenaran guru", "diperhati", "dilabel", "disimpan"],
    ["Melaporkan hasil penyiasatan kepada kelas dipanggil…", "berkomunikasi", "mengelas", "meramal", "mengukur"]
  ]},
  { t: "Manusia", q: [
    ["Manusia membiak dengan…", "melahirkan anak", "bertelur", "bertunas", "membiak melalui biji"],
    ["Bayi akan membesar dan menjadi…", "lebih tinggi dan lebih berat", "lebih kecil", "lebih ringan", "tidak berubah"],
    ["👶|Bayi baru lahir mendapat makanan daripada…", "susu ibu", "nasi", "roti", "buah"],
    ["Ukuran yang menunjukkan kita membesar ialah…", "tinggi dan berat badan", "warna baju", "nama", "alamat"],
    ["Ciri yang diwarisi daripada ibu bapa ialah…", "warna kulit dan bentuk rambut", "pakaian", "nama sekolah", "kasut"],
    ["Adik-beradik kadangkala kelihatan sama kerana mereka…", "mewarisi ciri ibu bapa", "makan makanan sama", "memakai baju sama", "tidur sebilik"],
    ["Untuk membesar dengan sihat, kita perlu…", "makan makanan berkhasiat dan bersenam", "makan gula-gula sahaja", "tidur lewat", "bermain telefon sepanjang hari"],
    ["Peringkat tumbesaran manusia: bayi → kanak-kanak → remaja → …", "dewasa", "bayi", "telur", "pupa"]
  ]},
  { t: "Haiwan", q: [
    ["Haiwan yang membiak dengan bertelur ialah…", "🐢", "🐄", "🐱", "🐒"],
    ["Haiwan yang membiak dengan melahirkan anak ialah…", "🐄", "🐔", "🐟", "🐸"],
    ["Kitar hidup rama-rama: telur → beluncas → ___ → rama-rama", "pupa", "berudu", "anak ayam", "larva katak"],
    ["Kitar hidup katak: telur → ___ → katak muda → katak", "berudu", "beluncas", "pupa", "anak ikan"],
    ["Kitar hidup nyamuk: telur → ___ → pupa → nyamuk", "jentik-jentik", "beluncas", "berudu", "anak burung"],
    ["Haiwan yang anaknya menyerupai induk ialah…", "kucing", "katak", "rama-rama", "nyamuk"],
    ["Haiwan yang anaknya tidak menyerupai induk ialah…", "rama-rama", "kucing", "gajah", "ayam"],
    ["🐛|Beluncas akan menjadi…", "rama-rama", "katak", "nyamuk", "lebah"],
    ["🐸|Berudu akan menjadi…", "katak", "ikan", "rama-rama", "nyamuk"],
    ["Kita boleh mencegah pembiakan nyamuk dengan…", "membuang air bertakung", "menyimpan tayar lama berisi air", "membiarkan longkang tersumbat", "membuka penutup tempayan"]
  ]},
  { t: "Tumbuhan", q: [
    ["Biji benih memerlukan ___ untuk bercambah.", "air, udara dan suhu yang sesuai", "cahaya sahaja", "garam", "gula"],
    ["🌱|Biji benih yang bercambah akan mengeluarkan ___ terlebih dahulu.", "akar", "bunga", "buah", "biji baru"],
    ["Tumbuhan memerlukan ___ untuk tumbuh dengan sihat.", "air, udara, cahaya matahari dan nutrien", "plastik", "batu", "minyak"],
    ["Pokok yang diletakkan dalam almari gelap akan…", "menjadi pucat dan lemah", "tumbuh lebih subur", "berbunga lebat", "berbuah"],
    ["Pokok yang tidak disiram lama akan…", "layu", "lebih segar", "lebih tinggi", "berbuah"],
    ["Bahagian anak pokok yang tumbuh ke atas ialah…", "pucuk", "akar", "biji", "tanah"],
    ["Selepas bercambah, anak pokok akan…", "membesar menjadi pokok", "menjadi biji semula", "menjadi batu", "hilang"],
    ["Contoh biji benih yang biasa digunakan untuk aktiviti bercambah ialah…", "kacang hijau", "batu kerikil", "manik plastik", "pasir"]
  ]},
  { t: "Terang dan Gelap", q: [
    ["Contoh sumber cahaya semula jadi ialah…", "Matahari", "lampu suluh", "lilin", "lampu jalan"],
    ["Contoh sumber cahaya buatan manusia ialah…", "lampu suluh", "Matahari", "bintang", "kelip-kelip"],
    ["🔦|Lampu suluh ialah sumber cahaya…", "buatan manusia", "semula jadi", "daripada haiwan", "daripada bulan"],
    ["Bayang-bayang terbentuk apabila cahaya…", "dihalang oleh objek legap", "melalui kaca jernih", "sangat malap", "berwarna"],
    ["Bayang-bayang menjadi lebih besar apabila objek…", "didekatkan kepada sumber cahaya", "dijauhkan dari sumber cahaya", "dibasahkan", "dicat"],
    ["Objek yang tidak membenarkan cahaya melaluinya dipanggil objek…", "legap", "lut sinar", "berkilat", "basah"],
    ["Bayang-bayang kita paling pendek pada waktu…", "tengah hari", "pagi", "petang", "malam"],
    ["Permainan bayang-bayang menggunakan…", "tangan dan cahaya lampu", "air", "bunyi", "angin"],
    ["Kita tidak boleh memandang terus ke arah Matahari kerana…", "boleh merosakkan mata", "Matahari terlalu kecil", "Matahari sejuk", "tiada sebab"]
  ]},
  { t: "Elektrik", q: [
    ["🔋|Komponen yang membekalkan tenaga elektrik dalam litar ialah…", "sel kering (bateri)", "mentol", "suis", "wayar"],
    ["💡|Komponen yang menyala apabila litar lengkap ialah…", "mentol", "suis", "bateri", "pita pelekat"],
    ["Komponen untuk menghidupkan dan mematikan litar ialah…", "suis", "mentol", "bateri", "wayar"],
    ["Mentol akan menyala jika litar…", "lengkap", "terputus", "tiada bateri", "tiada wayar"],
    ["Bahan yang membenarkan elektrik mengalir dipanggil…", "konduktor", "penebat", "magnet", "kaca"],
    ["Yang manakah konduktor elektrik?", "klip kertas besi", "pembaris plastik", "pemadam getah", "batang kayu"],
    ["Yang manakah penebat elektrik?", "pembaris plastik", "duit syiling", "dawai kuprum", "paku besi"],
    ["Wayar elektrik dibalut dengan plastik kerana plastik ialah…", "penebat", "konduktor", "magnet", "sumber cahaya"],
    ["Kita tidak boleh bermain dengan suis elektrik kerana…", "boleh terkena kejutan elektrik", "suis akan hilang", "lampu jadi terang", "tiada bahaya"]
  ]},
  { t: "Campuran", q: [
    ["Campuran beras dan pasir boleh diasingkan dengan cara…", "menapis menggunakan penapis", "mencairkan", "membakar", "menggoncang"],
    ["Campuran paku besi dan pasir boleh diasingkan menggunakan…", "magnet", "air", "kain", "lampu"],
    ["Campuran pasir dan air boleh diasingkan dengan cara…", "menuras menggunakan kertas turas", "menggunakan magnet", "menggoncang", "membekukan"],
    ["Bahan yang larut dalam air ialah…", "gula", "pasir", "batu", "minyak"],
    ["Bahan yang tidak larut dalam air ialah…", "pasir", "garam", "gula", "serbuk minuman"],
    ["Gula larut lebih cepat dalam air yang…", "panas", "sejuk", "berais", "kotor"],
    ["Cara melarutkan gula dengan lebih cepat ialah…", "mengacau", "membiarkan", "menyejukkan air", "menambah ais"],
    ["Gula kasar dan gula halus — yang larut lebih cepat ialah…", "gula halus", "gula kasar", "kedua-duanya sama", "tidak larut"],
    ["Minyak dan air jika dicampur akan…", "terpisah, minyak terapung", "larut sepenuhnya", "menjadi pepejal", "bertukar warna"]
  ]},
  { t: "Bumi", q: [
    ["Contoh sumber air semula jadi ialah…", "sungai dan tasik", "paip", "botol", "baldi"],
    ["Air sentiasa mengalir dari tempat ___ ke tempat ___.", "tinggi ke rendah", "rendah ke tinggi", "kering ke basah", "sejuk ke panas"],
    ["Kitar air berlaku kerana ___ air dari laut ke udara.", "penyejatan", "pembekuan", "peleburan", "pengaratan"],
    ["Wap air di udara menjadi titisan air dan membentuk…", "awan", "batu", "pasir", "tanah"],
    ["Air jatuh dari awan ke bumi sebagai…", "hujan", "angin", "kabus asap", "pasir"],
    ["Udara yang bergerak dipanggil…", "angin", "air", "bunyi", "cahaya"],
    ["🎈|Belon mengembang apabila diisi dengan…", "udara", "air batu", "pasir", "cahaya"],
    ["🪁|Layang-layang boleh terbang kerana…", "angin", "hujan", "bunyi", "cahaya"],
    ["Contoh kesan udara yang bergerak ialah…", "baju di ampaian cepat kering", "ais cair", "air membeku", "batu tenggelam"],
    ["Angin yang sangat kuat boleh menyebabkan…", "pokok tumbang", "air sungai jernih", "tanah subur", "bunga mekar"]
  ]},
  { t: "Teknologi (Set Binaan)", q: [
    ["Sebelum memasang set binaan, kita perlu melihat…", "manual bergambar", "televisyen", "buku cerita", "kalendar"],
    ["Manual bergambar membantu kita…", "memasang komponen mengikut langkah", "melukis gambar", "membaca cerita", "menyanyi"],
    ["Selepas membina, kita perlu…", "membuka binaan dan menyimpan komponen", "membuang komponen", "membiarkan bersepah", "memecahkannya"],
    ["Komponen set binaan perlu disimpan dalam…", "bekas yang betul", "tong sampah", "beg sekolah kawan", "laci dapur"],
    ["Kita boleh mencipta binaan baru dengan…", "menggunakan idea sendiri", "meniru sahaja", "merosakkan komponen", "tidak merancang"],
    ["Ketika membina, kita perlu ___ dengan rakan.", "bekerjasama", "berebut", "bergaduh", "menjerit"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM (ikut bidang KSSR) ======================= */
pi: [
  { t: "Al-Quran", q: [
    ["Baris dua di atas (ـً) dipanggil…", "fathatain", "kasratain", "dhammatain", "sukun"],
    ["Baris dua di bawah (ـٍ) dipanggil…", "kasratain", "fathatain", "dhammatain", "sabdu"],
    ["Tanda sukun menunjukkan huruf itu…", "mati (tidak berbaris)", "berbaris atas", "berbaris bawah", "dibaca panjang"],
    ["Tanda sabdu menunjukkan huruf itu dibaca…", "berganda (dua kali)", "panjang", "perlahan", "senyap"],
    ["Surah yang paling pendek dalam al-Quran ialah…", "al-Kauthar", "al-Fatihah", "al-Baqarah", "al-Ikhlas"],
    ["Surah al-Kauthar mengandungi ___ ayat.", "3", "4", "5", "7"],
    ["Surah al-Asr mengandungi ___ ayat.", "3", "4", "6", "7"],
    ["Surah an-Nas mengandungi ___ ayat.", "6", "5", "4", "7"],
    ["Surah al-Falaq mengandungi ___ ayat.", "5", "6", "4", "3"],
    ["Surah al-Asr menerangkan tentang…", "pentingnya menghargai masa", "kisah Nabi Yusuf", "cara berwuduk", "puasa"],
    ["Ketika memegang al-Quran, kita sebaiknya…", "dalam keadaan berwuduk", "sambil makan", "sambil berbaring", "dengan tangan kotor"]
  ]},
  { t: "Akidah", q: [
    ["Rukun Iman yang kedua ialah beriman kepada…", "malaikat", "kitab", "rasul", "hari akhirat"],
    ["Rukun Iman yang ketiga ialah beriman kepada…", "kitab", "malaikat", "rasul", "qada' dan qadar"],
    ["Malaikat dicipta daripada…", "cahaya (nur)", "tanah", "api", "air"],
    ["Malaikat yang wajib diketahui ada ___.", "10", "4", "25", "6"],
    ["Malaikat yang menyampaikan wahyu kepada nabi ialah…", "Jibril", "Mikail", "Israfil", "Malik"],
    ["Malaikat yang mencabut nyawa ialah…", "Izrail", "Jibril", "Ridwan", "Raqib"],
    ["Malaikat yang menjaga neraka ialah…", "Malik", "Ridwan", "Mikail", "Jibril"],
    ["Malaikat Raqib dan Atid bertugas…", "mencatat amalan manusia", "menurunkan hujan", "menjaga syurga", "meniup sangkakala"],
    ["Malaikat sentiasa…", "taat kepada Allah", "melawan perintah Allah", "makan dan minum", "tidur"],
    ["Allah Maha Mendengar. Nama Allah ini ialah…", "As-Sami'", "Al-Basir", "Al-Khaliq", "Ar-Rahman"],
    ["Allah Maha Melihat. Nama Allah ini ialah…", "Al-Basir", "As-Sami'", "Al-Malik", "Ar-Rahim"],
    ["Allah Maha Pencipta. Nama Allah ini ialah…", "Al-Khaliq", "Ar-Razzaq", "Al-Basir", "As-Sami'"]
  ]},
  { t: "Ibadah", q: [
    ["Rukun wuduk ada ___ perkara.", "6", "4", "13", "5"],
    ["Rukun wuduk yang pertama ialah…", "niat", "membasuh muka", "membasuh kaki", "menyapu kepala"],
    ["Rukun wuduk yang terakhir ialah…", "tertib", "niat", "membasuh muka", "berkumur"],
    ["Ketika berwuduk, kepala…", "disapu sebahagiannya", "dibasuh semuanya", "tidak disentuh", "dikeringkan"],
    ["Berkumur ketika berwuduk hukumnya…", "sunat", "wajib", "haram", "makruh"],
    ["Antara perkara yang membatalkan wuduk ialah…", "terkentut", "makan", "minum", "bercakap"],
    ["Solat Subuh ada ___ rakaat.", "2", "3", "4", "1"],
    ["Solat Asar ada ___ rakaat.", "4", "2", "3", "5"],
    ["Solat Isyak ada ___ rakaat.", "4", "2", "3", "5"],
    ["Azan dilaungkan untuk…", "memberitahu masuk waktu solat", "menyuruh tidur", "memulakan kelas", "memanggil makan"],
    ["Solat dimulakan dengan…", "takbiratul ihram (Allahu Akbar)", "salam", "sujud", "duduk"],
    ["Solat diakhiri dengan…", "memberi salam", "rukuk", "sujud", "berdiri"]
  ]},
  { t: "Sirah", q: [
    ["Nabi Muhammad SAW lahir pada bulan…", "Rabiulawal", "Ramadan", "Syawal", "Muharam"],
    ["Datuk Nabi Muhammad SAW bernama…", "Abdul Muttalib", "Abu Talib", "Abdullah", "Abu Bakar"],
    ["Ibu susuan Nabi Muhammad SAW ialah…", "Halimatus Saadiah", "Aminah", "Khadijah", "Aisyah"],
    ["Semasa kecil, Nabi Muhammad SAW pernah bekerja sebagai…", "pengembala kambing", "nelayan", "petani padi", "tukang kayu"],
    ["Bapa saudara yang menjaga Nabi ialah…", "Abu Talib", "Abu Lahab", "Abu Jahal", "Hamzah"],
    ["Nabi Muhammad SAW digelar…", "al-Amin", "as-Siddiq", "al-Faruq", "Zun Nurain"],
    ["Contoh akhlak Nabi Muhammad SAW yang boleh kita contohi ialah…", "jujur dan menepati janji", "suka marah", "suka berbohong", "malas"]
  ]},
  { t: "Adab", q: [
    ["Ketika masuk ke masjid, kita mendahulukan kaki…", "kanan", "kiri", "mana-mana", "kedua-dua serentak"],
    ["Di dalam masjid, kita perlu…", "bercakap perlahan dan menjaga kebersihan", "berlari-lari", "menjerit", "makan merata-rata"],
    ["Apabila guru masuk ke kelas, kita…", "bangun dan memberi salam", "terus bermain", "keluar kelas", "tidur"],
    ["Apabila meminjam barang kawan, kita perlu…", "meminta izin dahulu", "terus ambil", "menyorokkannya", "merosakkannya"],
    ["Apabila melakukan kesalahan, kita perlu…", "meminta maaf", "menyalahkan orang lain", "lari", "berbohong"],
    ["Kita minum sambil…", "duduk", "berlari", "melompat", "berbaring"],
    ["Ketika makan bersama keluarga, kita…", "mengambil makanan yang dekat", "berebut makanan", "makan sambil menjerit", "membazir makanan"],
    ["Ucapan apabila melihat sesuatu yang indah ialah…", "Subhanallah", "Astaghfirullah", "Innalillah", "Bismillah"]
  ]},
  { t: "Jawi", q: [
    ["ماکن|Perkataan Jawi ini dibaca…", "makan", "minum", "mandi", "masak"],
    ["رومه|Perkataan Jawi ini dibaca…", "rumah", "ramah", "rumai", "murah"],
    ["کاکي|Perkataan Jawi ini dibaca…", "kaki", "kakak", "kuku", "kiki"],
    ["مات|Perkataan Jawi ini dibaca…", "mata", "mati", "matu", "meta"],
    ["ايکن|Perkataan Jawi ini dibaca…", "ikan", "akan", "ikat", "ukan"],
    ["Ejaan Jawi bagi \"kaki\" ialah…", "کاکي", "ککي", "کاکيه", "قاقي"],
    ["Ejaan Jawi bagi \"mata\" ialah…", "مات", "متا", "ماتا", "ماته"],
    ["ڠ|Huruf Jawi ini mewakili bunyi…", "ng", "ny", "c", "p"],
    ["چ|Huruf Jawi ini mewakili bunyi…", "c", "j", "ng", "ny"],
    ["Tulisan Jawi ditulis dari…", "kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"]
  ]}
],

/* ======================= BAHASA ARAB (ikut tema) ======================= */
ba: [
  { t: "Perkenalan", q: [
    ["مَا اسْمُكَ؟|Soalan ini bermaksud…", "Siapa nama kamu?", "Apa khabar?", "Di mana rumah kamu?", "Berapa umur kamu?"],
    ["كَيْفَ حَالُكَ؟|Soalan ini bermaksud…", "Apa khabar?", "Siapa nama kamu?", "Di mana kamu?", "Ini apa?"],
    ["أَنَا بِخَيْرٍ|Jawapan ini bermaksud…", "Saya sihat / baik", "Saya lapar", "Saya pergi", "Saya murid"],
    ["أَهْلًا وَسَهْلًا|Ungkapan ini bermaksud…", "Selamat datang", "Selamat tinggal", "Terima kasih", "Maaf"],
    ["مَعَ السَّلَامَةِ|Ungkapan ini bermaksud…", "Selamat jalan", "Selamat datang", "Selamat pagi", "Apa khabar"],
    ["أَنْتَ|Perkataan ini bermaksud…", "kamu (lelaki)", "saya", "dia (lelaki)", "kami"],
    ["أَنْتِ|Perkataan ini bermaksud…", "kamu (perempuan)", "kamu (lelaki)", "dia (perempuan)", "saya"]
  ]},
  { t: "Nombor 1–10", q: [
    ["سِتَّةٌ|Nombor ini ialah…", "6", "7", "5", "9"],
    ["سَبْعَةٌ|Nombor ini ialah…", "7", "6", "9", "8"],
    ["ثَمَانِيَةٌ|Nombor ini ialah…", "8", "3", "6", "9"],
    ["تِسْعَةٌ|Nombor ini ialah…", "9", "7", "10", "4"],
    ["عَشَرَةٌ|Nombor ini ialah…", "10", "2", "8", "1"],
    ["Nombor 6 dalam bahasa Arab ialah…", "سِتَّةٌ", "سَبْعَةٌ", "تِسْعَةٌ", "خَمْسَةٌ"],
    ["Nombor 8 dalam bahasa Arab ialah…", "ثَمَانِيَةٌ", "ثَلَاثَةٌ", "عَشَرَةٌ", "أَرْبَعَةٌ"],
    ["⭐⭐⭐⭐⭐⭐⭐|Berapa bintang?", "سَبْعَةٌ", "سِتَّةٌ", "ثَمَانِيَةٌ", "خَمْسَةٌ"]
  ]},
  { t: "Keluarga", q: [
    ["أَبٌ|Perkataan ini bermaksud…", "bapa", "ibu", "datuk", "abang"],
    ["أُمٌّ|Perkataan ini bermaksud…", "ibu", "nenek", "kakak", "bapa"],
    ["أَخٌ|Perkataan ini bermaksud…", "saudara lelaki", "saudara perempuan", "datuk", "ibu"],
    ["أُخْتٌ|Perkataan ini bermaksud…", "saudara perempuan", "saudara lelaki", "nenek", "bapa"],
    ["جَدٌّ|Perkataan ini bermaksud…", "datuk", "bapa", "abang", "pak cik"],
    ["جَدَّةٌ|Perkataan ini bermaksud…", "nenek", "ibu", "kakak", "mak cik"],
    ["أُسْرَةٌ|Perkataan ini bermaksud…", "keluarga", "sekolah", "rumah", "kawan"]
  ]},
  { t: "Rumah", q: [
    ["بَيْتٌ|Perkataan ini bermaksud…", "rumah", "sekolah", "masjid", "kedai"],
    ["غُرْفَةٌ|Perkataan ini bermaksud…", "bilik", "dapur", "pintu", "tingkap"],
    ["مَطْبَخٌ|Perkataan ini bermaksud…", "dapur", "bilik air", "bilik tidur", "taman"],
    ["حَمَّامٌ|Perkataan ini bermaksud…", "bilik air", "dapur", "ruang tamu", "garaj"],
    ["سَرِيرٌ|Perkataan ini bermaksud…", "katil", "kerusi", "meja", "almari"],
    ["نَافِذَةٌ|Perkataan ini bermaksud…", "tingkap", "pintu", "dinding", "bumbung"],
    ["🚪|Pintu dalam bahasa Arab ialah…", "بَابٌ", "نَافِذَةٌ", "سَرِيرٌ", "بَيْتٌ"],
    ["🛏️|Katil dalam bahasa Arab ialah…", "سَرِيرٌ", "كُرْسِيٌّ", "بَابٌ", "مَطْبَخٌ"]
  ]},
  { t: "Makanan dan Minuman", q: [
    ["مَاءٌ|Perkataan ini bermaksud…", "air", "susu", "teh", "jus"],
    ["حَلِيبٌ|Perkataan ini bermaksud…", "susu", "air", "nasi", "roti"],
    ["شَايٌ|Perkataan ini bermaksud…", "teh", "kopi", "susu", "air"],
    ["عَصِيرٌ|Perkataan ini bermaksud…", "jus", "teh", "air", "susu"],
    ["خُبْزٌ|Perkataan ini bermaksud…", "roti", "nasi", "ikan", "daging"],
    ["أَرُزٌّ|Perkataan ini bermaksud…", "nasi / beras", "roti", "telur", "buah"],
    ["🥚|Telur dalam bahasa Arab ialah…", "بَيْضٌ", "خُبْزٌ", "لَحْمٌ", "مَاءٌ"],
    ["لَحْمٌ|Perkataan ini bermaksud…", "daging", "ikan", "roti", "sayur"]
  ]},
  { t: "Haiwan dan Alam", q: [
    ["🐄|Lembu dalam bahasa Arab ialah…", "بَقَرَةٌ", "دَجَاجَةٌ", "قِطٌّ", "فِيلٌ"],
    ["🐔|Ayam dalam bahasa Arab ialah…", "دَجَاجَةٌ", "بَقَرَةٌ", "طَائِرٌ", "سَمَكٌ"],
    ["🐪|Unta dalam bahasa Arab ialah…", "جَمَلٌ", "حِصَانٌ", "فِيلٌ", "أَسَدٌ"],
    ["☀️|Matahari dalam bahasa Arab ialah…", "شَمْسٌ", "قَمَرٌ", "نَجْمٌ", "مَاءٌ"],
    ["🌙|Bulan dalam bahasa Arab ialah…", "قَمَرٌ", "شَمْسٌ", "شَجَرَةٌ", "بَحْرٌ"],
    ["🌳|Pokok dalam bahasa Arab ialah…", "شَجَرَةٌ", "وَرْدَةٌ", "قَمَرٌ", "شَمْسٌ"],
    ["🌹|Bunga dalam bahasa Arab ialah…", "وَرْدَةٌ", "شَجَرَةٌ", "شَمْسٌ", "نَجْمٌ"],
    ["نَجْمٌ|Perkataan ini bermaksud…", "bintang", "bulan", "matahari", "awan"]
  ]},
  { t: "Kenderaan dan Ayat Mudah", q: [
    ["🚗|Kereta dalam bahasa Arab ialah…", "سَيَّارَةٌ", "دَرَّاجَةٌ", "طَائِرَةٌ", "سَفِينَةٌ"],
    ["🚲|Basikal dalam bahasa Arab ialah…", "دَرَّاجَةٌ", "سَيَّارَةٌ", "قِطَارٌ", "سَفِينَةٌ"],
    ["✈️|Kapal terbang dalam bahasa Arab ialah…", "طَائِرَةٌ", "سَفِينَةٌ", "سَيَّارَةٌ", "دَرَّاجَةٌ"],
    ["سَفِينَةٌ|Perkataan ini bermaksud…", "kapal", "kereta", "basikal", "kereta api"],
    ["هَذَا كِتَابٌ|Ayat ini bermaksud…", "Ini buku", "Itu pen", "Ini rumah", "Saya buku"],
    ["هَذِهِ سَيَّارَةٌ|Ayat ini bermaksud…", "Ini kereta", "Ini basikal", "Itu kereta", "Saya kereta"],
    ["هَذَا بَيْتٌ|Ayat ini bermaksud…", "Ini rumah", "Ini masjid", "Ini sekolah", "Itu rumah"]
  ]}
]
};
})();
