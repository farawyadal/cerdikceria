/* =========================================================
   TAHUN 3 — Cerdik Ceria
   Matematik & Sains: bab ikut DSKP / buku teks KSSR Tahun 3.
   BM & BI: ikut topik kemahiran. Pendidikan Islam: ikut bidang KSSR.
   Bahasa Arab: ikut tema perbendaharaan kata.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🐱|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tahun 3 ---------- */
const SA = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan"];
function sebut3(n) {
  const out = [];
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
function sebut(n) {
  if (n === 10000) return "sepuluh ribu";
  const ri = Math.floor(n / 1000), rest = n % 1000;
  const out = [];
  if (ri) out.push(ri === 1 ? "seribu" : SA[ri] + " ribu");
  if (rest) out.push(sebut3(rest));
  return out.join(" ");
}
const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d === 1) return String(n); if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`; return `${n}/${d}`; }
const TEMPAT = ["sa", "puluh", "ratus", "ribu"];
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
function grid(x, y, mark) {           // grid sukuan pertama 5×5, y ke atas
  const rows = [];
  const K = n => n + "\uFE0F\u20E3";  // 0️⃣ 1️⃣ … 5️⃣
  for (let j = 5; j >= 1; j--) { let s = K(j); for (let i = 1; i <= 5; i++) s += (i === x && j === y) ? mark : "⬜"; rows.push(s); }
  rows.push(K(0) + [1, 2, 3, 4, 5].map(K).join(""));
  return rows.join("\n");
}

SOALAN[3] = {

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Kata Nama dan Penjodoh Bilangan", q: [
    ["Penjodoh bilangan yang sesuai: \"sepucuk ___\"", "surat", "pisang", "kerusi", "kucing"],
    ["Penjodoh bilangan yang sesuai: \"sekuntum ___\"", "bunga", "pokok", "buku", "bola"],
    ["Penjodoh bilangan yang sesuai: \"sebuah ___\"", "almari", "ikan", "kain", "pensel"],
    ["Penjodoh bilangan yang sesuai: \"sebilah ___\"", "pisau", "baju", "rumah", "telur"],
    ["Penjodoh bilangan yang sesuai: \"setangkai ___\"", "bunga", "kereta", "surat", "kasut"],
    ["Penjodoh bilangan yang sesuai: \"sebentuk ___\"", "cincin", "buku", "bola", "kucing"],
    ["Penjodoh bilangan yang sesuai: \"sebiji ___\"", "telur", "pensel", "kain", "lembu"],
    ["Yang manakah kata nama khas tempat?", "Taman Negara", "taman", "hutan", "sungai"],
    ["Kata nama am bagi \"Gunung Tahan\" ialah…", "gunung", "tinggi", "Pahang", "hutan"],
    ["\"Kita\" ialah kata ganti nama diri…", "pertama", "kedua", "ketiga", "tanya"],
    ["\"Mereka\" ialah kata ganti nama diri…", "ketiga", "pertama", "kedua", "khas"],
    ["Yang manakah kata ganti nama diri kedua?", "kamu", "saya", "dia", "kami"]
  ]},
  { t: "Kata Kerja dan Imbuhan", q: [
    ["Imbuhan \"me-\" + \"tanam\" menjadi…", "menanam", "metanam", "mentanam", "penanam"],
    ["Imbuhan \"me-\" + \"pukul\" menjadi…", "memukul", "mempukul", "mepukul", "pemukul"],
    ["Imbuhan \"me-\" + \"sapu\" menjadi…", "menyapu", "mesapu", "mensapu", "penyapu"],
    ["Imbuhan \"me-\" + \"kutip\" menjadi…", "mengutip", "mekutip", "mengkutip", "pengutip"],
    ["Imbuhan \"ber-\" + \"lari\" menjadi…", "berlari", "melari", "pelari", "larian"],
    ["Imbuhan \"di-\" + \"masak\" menjadi…", "dimasak", "memasak", "pemasak", "masakan"],
    ["Nasi itu sudah ___ oleh ibu.", "dimasak", "memasak", "pemasak", "masakan"],
    ["Ahmad ___ sampah di halaman rumah.", "mengutip", "dikutip", "pengutip", "kutipan"],
    ["Yang manakah kata kerja?", "membaca", "pembaca", "bacaan", "buku"],
    ["Pak Ali sedang ___ padi di sawah.", "menuai", "dituai", "penuai", "tuaian"],
    ["Kakak ___ baju dengan seterika.", "menggosok", "digosok", "penggosok", "gosokan"]
  ]},
  { t: "Kata Sendi dan Kata Hubung", q: [
    ["Kami belajar ___ dalam kelas.", "di", "ke", "dari", "kepada"],
    ["Ayah pergi ___ pejabat setiap pagi.", "ke", "di", "dari", "kepada"],
    ["Pak cik baru pulang ___ Johor.", "dari", "daripada", "kepada", "di"],
    ["Kerusi itu diperbuat ___ kayu.", "daripada", "dari", "kepada", "di"],
    ["Adik memberikan hadiah ___ ibu.", "kepada", "ke", "di", "dari"],
    ["Ali ___ Ahmad bermain bola.", "dan", "tetapi", "atau", "kerana"],
    ["Saya tidak pergi ke sekolah ___ demam.", "kerana", "dan", "tetapi", "atau"],
    ["Kamu mahu kek ___ roti?", "atau", "dan", "kerana", "supaya"],
    ["Dia rajin ___ adiknya malas.", "tetapi", "dan", "kerana", "supaya"],
    ["Belajarlah rajin-rajin ___ lulus peperiksaan.", "supaya", "tetapi", "atau", "kerana"]
  ]},
  { t: "Peribahasa dan Simpulan Bahasa", q: [
    ["Simpulan bahasa \"ringan tulang\" bermaksud…", "rajin", "malas", "kurus", "kuat"],
    ["Simpulan bahasa \"berat mulut\" bermaksud…", "pendiam", "banyak cakap", "gemuk", "lapar"],
    ["Simpulan bahasa \"murah hati\" bermaksud…", "suka memberi", "kedekut", "pemarah", "penakut"],
    ["Simpulan bahasa \"kaki bangku\" bermaksud…", "tidak pandai bermain bola", "kaki panjang", "suka duduk", "kaki kerusi"],
    ["Simpulan bahasa \"buah tangan\" bermaksud…", "hadiah atau ole-ole", "buah-buahan", "tangan yang besar", "kerja tangan"],
    ["Simpulan bahasa \"tangan panjang\" bermaksud…", "suka mencuri", "tinggi", "suka menolong", "suka bersalam"],
    ["Peribahasa \"seperti aur dengan tebing\" bermaksud…", "saling tolong-menolong", "selalu bergaduh", "malas bekerja", "suka bercakap"],
    ["Peribahasa \"bulat air kerana pembetung, bulat manusia kerana muafakat\" bermaksud…", "kesepakatan membawa kejayaan", "air yang bulat", "suka berpecah", "membina longkang"],
    ["Bidalan \"bersatu teguh, bercerai roboh\" bermaksud…", "perpaduan membawa kekuatan", "rumah roboh", "suka bergaduh", "berpisah itu baik"],
    ["Peribahasa \"bagai pinang dibelah dua\" bermaksud…", "sangat sepadan atau serupa", "pinang yang pecah", "bergaduh", "berpisah"]
  ]},
  { t: "Sinonim dan Antonim", q: [
    ["Sinonim bagi \"gembira\" ialah…", "suka", "duka", "marah", "takut"],
    ["Sinonim bagi \"cantik\" ialah…", "jelita", "hodoh", "kotor", "buruk"],
    ["Sinonim bagi \"besar\" ialah…", "raksasa", "kecil", "halus", "kerdil"],
    ["Sinonim bagi \"rumah\" ialah…", "kediaman", "sekolah", "kedai", "pejabat"],
    ["Sinonim bagi \"berani\" ialah…", "gagah", "takut", "lemah", "malu"],
    ["Antonim bagi \"kaya\" ialah…", "miskin", "senang", "mewah", "banyak"],
    ["Antonim bagi \"cerdik\" ialah…", "bodoh", "pandai", "bijak", "pintar"],
    ["Antonim bagi \"terang\" ialah…", "gelap", "cerah", "bersinar", "jelas"],
    ["Antonim bagi \"rajin\" ialah…", "malas", "tekun", "gigih", "cekal"],
    ["Antonim bagi \"masuk\" ialah…", "keluar", "naik", "turun", "pulang"],
    ["Antonim bagi \"bising\" ialah…", "senyap", "riuh", "kuat", "ramai"]
  ]},
  { t: "Ayat dan Tanda Baca", q: [
    ["Yang manakah ayat tanya?", "Siapakah nama kamu?", "Nama saya Ali.", "Wah, cantiknya!", "Sila masuk."],
    ["Yang manakah ayat perintah?", "Tolong tutup tingkap itu.", "Tingkap itu terbuka.", "Siapakah membuka tingkap?", "Wah, besarnya tingkap!"],
    ["Yang manakah ayat seruan?", "Aduh, sakitnya kaki saya!", "Kaki saya sakit.", "Mengapakah kaki kamu sakit?", "Sila duduk."],
    ["Yang manakah ayat penyata?", "Adik suka makan buah.", "Adakah adik suka buah?", "Makanlah buah, adik.", "Wah, sedapnya buah!"],
    ["Ayat yang menggunakan huruf besar dengan betul ialah…", "Kami melawat Zoo Negara.", "kami melawat zoo negara.", "Kami Melawat zoo Negara.", "kami melawat Zoo Negara."],
    ["Ayat yang menggunakan tanda baca dengan betul ialah…", "Ibu membeli epal, oren dan pisang.", "Ibu membeli epal oren, dan pisang", "Ibu, membeli epal oren dan pisang.", "ibu membeli epal, oren dan pisang?"],
    ["Susun perkataan: \"ke\", \"pasar\", \"pergi\", \"Ibu\"", "Ibu pergi ke pasar.", "Pasar ibu ke pergi.", "Pergi ke ibu pasar.", "Ke pasar pergi ibu."],
    ["Susun perkataan: \"buku\", \"membaca\", \"Siti\", \"cerita\"", "Siti membaca buku cerita.", "Buku Siti membaca cerita.", "Cerita membaca Siti buku.", "Membaca cerita buku Siti."],
    ["Tanda baca yang sesuai: \"Wah ___ besarnya rumah itu ___\"", ", !", ". ?", "? .", "! ,"],
    ["Tanda petik (\" \") digunakan untuk…", "menunjukkan kata-kata yang diucapkan", "menamatkan ayat", "memisahkan senarai", "menunjukkan soalan"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary: Jobs and Places", q: [
    ["A person who catches fish is a…", "fisherman", "farmer", "baker", "pilot"],
    ["A person who puts out fires is a…", "firefighter", "doctor", "postman", "chef"],
    ["A person who delivers letters is a…", "postman", "pilot", "nurse", "teacher"],
    ["A person who bakes bread is a…", "baker", "farmer", "driver", "dentist"],
    ["A person who looks after our teeth is a…", "dentist", "vet", "chef", "tailor"],
    ["A doctor for animals is a…", "vet", "nurse", "pilot", "farmer"],
    ["We go to the ___ to post a letter.", "post office", "bakery", "zoo", "cinema"],
    ["We watch movies at the…", "cinema", "library", "clinic", "market"],
    ["We keep our money in the…", "bank", "zoo", "park", "kitchen"],
    ["👨‍🍳|He cooks food in a restaurant. He is a…", "chef", "pilot", "doctor", "farmer"]
  ]},
  { t: "Simple Present and Past", q: [
    ["She ___ to school by bus every day.", "goes", "go", "going", "gone"],
    ["My father ___ coffee every morning.", "drinks", "drink", "drinking", "drank to"],
    ["We ___ football every Saturday.", "play", "plays", "playing", "played to"],
    ["Yesterday, I ___ a cake.", "baked", "bake", "bakes", "baking"],
    ["Last night, we ___ television.", "watched", "watch", "watches", "watching"],
    ["The past tense of \"go\" is…", "went", "goed", "gone", "going"],
    ["The past tense of \"eat\" is…", "ate", "eated", "eaten", "eats"],
    ["The past tense of \"see\" is…", "saw", "seed", "seen", "sees"],
    ["The past tense of \"run\" is…", "ran", "runned", "running", "runs"],
    ["The past tense of \"buy\" is…", "bought", "buyed", "brought", "buys"],
    ["Look! The birds ___ in the sky.", "are flying", "flies", "flew", "fly"]
  ]},
  { t: "Pronouns and Possessives", q: [
    ["Ali is my friend. ___ is kind.", "He", "She", "It", "They"],
    ["Mei Ling is in Year 3. ___ likes to draw.", "She", "He", "It", "We"],
    ["The cat is hungry. ___ wants some fish.", "It", "He", "She", "They"],
    ["My brother and I play together. ___ are happy.", "We", "They", "He", "It"],
    ["This is Siti's bag. It is ___ bag.", "her", "his", "my", "its"],
    ["This is Ravi's pencil. It is ___ pencil.", "his", "her", "their", "its"],
    ["These toys belong to us. They are ___ toys.", "our", "their", "my", "your"],
    ["The children have new shoes. These are ___ shoes.", "their", "our", "his", "her"],
    ["Is this your book? — Yes, it is ___.", "mine", "my", "me", "I"]
  ]},
  { t: "Prepositions", q: [
    ["The fish is ___ the bowl.", "in", "on", "under", "between"],
    ["The lamp is ___ the table.", "on", "in", "under", "between"],
    ["The dog is sleeping ___ the bed.", "under", "on top of", "in", "between"],
    ["The school is ___ the bank and the post office.", "between", "on", "in", "under"],
    ["The car is parked ___ front of the house.", "in", "on", "at", "under"],
    ["I go to school ___ Monday.", "on", "in", "at", "by"],
    ["We have lunch ___ 1 o'clock.", "at", "on", "in", "by"],
    ["My birthday is ___ March.", "in", "on", "at", "by"],
    ["She walked ___ the bridge.", "across", "under", "into", "between"]
  ]},
  { t: "Adjectives and Comparisons", q: [
    ["An elephant is ___ than a mouse.", "bigger", "big", "biggest", "more big"],
    ["A cheetah is ___ than a turtle.", "faster", "fast", "fastest", "more fast"],
    ["Ali is the ___ boy in the class.", "tallest", "taller", "tall", "most tall"],
    ["This is the ___ day of the year.", "hottest", "hotter", "hot", "most hot"],
    ["Which word describes a colour?", "purple", "happy", "quickly", "jump"],
    ["Which word describes a feeling?", "happy", "blue", "round", "tall"],
    ["Which word describes a shape?", "round", "sad", "loud", "sweet"],
    ["The opposite of \"heavy\" is…", "light", "big", "strong", "dark"],
    ["The opposite of \"clean\" is…", "dirty", "neat", "new", "tidy"],
    ["The opposite of \"empty\" is…", "full", "small", "light", "open"]
  ]},
  { t: "Questions", q: [
    ["___ is your favourite colour? — Blue.", "What", "Who", "Where", "When"],
    ["___ is your teacher? — Puan Aminah.", "Who", "What", "Where", "How"],
    ["___ do you live? — In Ipoh.", "Where", "When", "Who", "What"],
    ["___ is your birthday? — In July.", "When", "Where", "Who", "Which"],
    ["___ old are you? — I am nine.", "How", "What", "Who", "Where"],
    ["___ many books do you have? — Five.", "How", "What", "Where", "Who"],
    ["___ are you late? — Because it rained.", "Why", "Who", "What", "Where"],
    ["Do you like durian? — Yes, I ___.", "do", "am", "is", "does"],
    ["Is she your sister? — Yes, she ___.", "is", "are", "do", "am"],
    ["Can you ride a bicycle? — No, I ___.", "can't", "don't", "isn't", "aren't"]
  ]},
  { t: "Spelling", q: [
    ["Which word is spelled correctly?", "beautiful", "beautifull", "beutiful", "beatiful"],
    ["Which word is spelled correctly?", "because", "becouse", "becaus", "beacuse"],
    ["Which word is spelled correctly?", "Wednesday", "Wensday", "Wednesay", "Wedensday"],
    ["Which word is spelled correctly?", "February", "Febuary", "Februari", "Febrary"],
    ["Which word is spelled correctly?", "people", "peeple", "peopel", "pepole"],
    ["🦋|The correct spelling is…", "butterfly", "buterfly", "butterfli", "butter fly"],
    ["🐘|The correct spelling is…", "elephant", "elefant", "elephent", "eliphant"],
    ["🍌|The correct spelling is…", "banana", "bananna", "bannana", "banane"],
    ["🧸|The correct spelling is…", "teddy bear", "tedy bear", "teddy bare", "tedi bear"]
  ]}
],

/* ======================= MATEMATIK (bab DSKP Tahun 3) ======================= */
math: [
  { t: "Nombor Bulat hingga 10 000",
    q: [
      ["Nombor terbesar empat digit ialah…", "9999", "1000", "9000", "10 000"],
      ["Nombor terkecil empat digit ialah…", "1000", "1001", "999", "100"],
      ["\"sepuluh ribu\" ditulis sebagai…", "10 000", "1000", "100 000", "10 100"]
    ],
    g: [
      () => { const n = r(1001, 9999); const ws = [n + 1, n - 1, n + 10, n + 100, n - 100, n + 1000, n - 1000].filter(x => x > 0 && x < 10000 && x !== n).map(sebut); return from(`${fmt(n)} disebut…`, sebut(n), ws); },
      () => { const n = r(1001, 9999); return from(`Nombor bagi \"${sebut(n)}\" ialah…`, fmt(n), [n + 10, n - 10, n + 100, n - 100, n + 1000, n - 1000, n + 1].filter(x => x > 0 && x < 10000 && x !== n).map(fmt)); },
      () => { let n, s, p, d; do { n = r(1001, 9999); s = String(n); p = r(0, 3); d = +s[3 - p]; } while (!d || s.split("").filter(x => +x === d).length > 1); const v = d * 10 ** p; return from(`Nilai digit ${d} dalam ${fmt(n)} ialah…`, fmt(v), [d, d * 10, d * 100, d * 1000].filter(x => x !== v).map(fmt), `Digit ${d} berada di tempat ${TEMPAT[p]}.`); },
      () => { const s = new Set(); while (s.size < 4) s.add(r(1000, 9999)); const ns = [...s].sort((a, b) => b - a); return ["Nombor manakah yang paling besar?", ...ns.map(fmt), ""]; },
      () => { const n = r(1001, 9499); const ans = Math.round(n / 1000) * 1000; return q(`Bundarkan ${fmt(n)} kepada ribu yang terdekat.`, ans, [1000, 100]); },
      () => { const n = r(101, 9949); const ans = Math.round(n / 100) * 100; return q(`Bundarkan ${fmt(n)} kepada ratus yang terdekat.`, ans, [100, 10, 1000]); },
      () => { const st = pick([10, 50, 100, 1000]), a = r(1, 9999 - st * 4); const seq = [a, a + st, a + 2 * st, a + 3 * st]; const hide = r(1, 3); return q(`Lengkapkan pola nombor:\n${seq.map((x, i) => i === hide ? "___" : fmt(x)).join(", ")}`, seq[hide], [st, 1, 10], false, `Tambah ${st} setiap kali.`); }
    ] },
  { t: "Operasi Asas",
    q: [
      ["Sebarang nombor darab 10, tambah ___ sifar di belakang.", "satu", "dua", "tiga", "tiada"],
      ["Sebarang nombor darab 100, tambah ___ sifar di belakang.", "dua", "satu", "tiga", "tiada"]
    ],
    g: [
      () => { const a = r(1000, 7999), b = r(100, 9999 - a); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const a = r(2000, 9999), b = r(100, a - 1); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const a = r(2, 9), b = r(1, 10); return q(`${a} × ${b} = ?`, a * b, [a, b, 1]); },
      () => { const b = r(2, 9), a = r(100, Math.floor(9999 / b)); return q(`${fmt(a)} × ${b} = ?`, a * b, [b, 10, a]); },
      () => { const b = r(2, 9), c = r(100, Math.floor(9999 / b)); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 10, b]); },
      () => { const m = pick([10, 100, 1000]); const a = r(2, Math.floor(9999 / m)); return q(`${a} × ${fmt(m)} = ?`, a * m, [m, m * 9, a]); },
      () => { const m = pick([10, 100]); const a = r(2, 99) * m; return q(`${fmt(a)} ÷ ${m} = ?`, a / m, [1, 10, a / m * 9]); },
      () => { const a = r(1000, 4000), b = r(500, 3000), c = r(100, a + b - 1); return q(`🍌|Sebuah ladang ada ${fmt(a)} pokok pisang. ${fmt(b)} pokok lagi ditanam. Kemudian ${fmt(c)} pokok ditebang. Berapakah baki pokok?`, a + b - c, [10, 100, 1000], false, "Tambah dahulu, kemudian tolak."); },
      () => { const n = r(3, 9), e = r(12, 99); return q(`📦|Setiap kotak berisi ${e} biji guli. Berapakah jumlah guli dalam ${n} kotak?`, n * e, [e, n, 10]); }
    ] },
  { t: "Pecahan, Perpuluhan dan Peratus",
    q: [
      ["1/2 setara dengan…", "2/4", "1/4", "2/3", "1/3"],
      ["Pecahan termudah bagi 4/8 ialah…", "1/2", "2/4", "4/2", "1/4"],
      ["Yang manakah pecahan tak wajar?", "7/4", "3/4", "1/2", "2/5"],
      ["50% bersamaan dengan pecahan…", "1/2", "1/5", "1/4", "1/50"],
      ["100% bermaksud…", "keseluruhan", "separuh", "suku", "tiada"],
      ["0.25 dibaca sebagai…", "sifar perpuluhan dua lima", "dua puluh lima", "dua perpuluhan lima", "sifar dua puluh lima"]
    ],
    g: [
      () => { const [a, b] = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5]]), k = r(2, 5); const right = `${a * k}/${b * k}`; return from(`${a}/${b} setara dengan…`, right, [`${a * k}/${b * k + 1}`, `${a + k}/${b + k}`, `${a * k + 1}/${b * k}`, `${a}/${b * k}`]); },
      () => { const [a, b] = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5]]), k = r(2, 5); const right = `${a}/${b}`; return from(`Pecahan termudah bagi ${a * k}/${b * k} ialah…`, right, [`${b}/${a}`, `${a * k}/${b}`, `${a + 1}/${b}`, `${a}/${b + 1}`]); },
      () => { const d = pick([5, 6, 8, 9, 10]), a = r(1, d - 1), b = r(1, d - 1); const right = frac(a + b, d); return from(`${a}/${d} + ${b}/${d} = ?`, right, [frac(a + b, d * 2), frac(a + b + 1, d), `${a + b}/${d * 2}`, frac(Math.abs(a - b) || 1, d)]); },
      () => { const d = pick([5, 6, 8, 9, 10]), a = r(2, d - 1), b = r(1, a - 1); const right = frac(a - b, d); return from(`${a}/${d} − ${b}/${d} = ?`, right, [frac(a + b, d), `${a - b}/${d * 2}`, frac(a - b + 1, d), frac(a, d)]); },
      () => { const d = pick([2, 3, 4, 5]), w = r(1, 3), n = r(1, d - 1); const im = w * d + n; const right = `${w} ${n}/${d}`; return from(`${im}/${d} dalam bentuk nombor bercampur ialah…`, right, [`${w + 1} ${n}/${d}`, `${w} ${d}/${n}`, `${n} ${w}/${d}`, `${w} ${n + 1}/${d}`].filter(x => !/ 0\//.test(x))); },
      () => { const n = r(1, 99); const right = `${n}%`; return from(`${n}/100 dalam bentuk peratus ialah…`, right, [`${100 - n}%`, `${n}0%`, `0.${n}%`, `${n + 1}%`].filter(x => x !== right)); },
      () => { const n = r(11, 99); const right = (n / 100).toFixed(2); return from(`${n}/100 dalam bentuk perpuluhan ialah…`, right, [(n / 10).toFixed(1), `0.0${n % 10}`, (n / 1000).toFixed(3), ((n + 1) / 100).toFixed(2)].filter(x => x !== right)); },
      () => { const a = r(11, 99) / 10, b = r(11, 99) / 10; return q(`${a.toFixed(1)} + ${b.toFixed(1)} = ?`, +(a + b).toFixed(1), [0.1, 1, 0.2], true, "", x => x.toFixed(1)); }
    ] },
  { t: "Wang",
    q: [
      ["Mata wang Indonesia ialah…", "Rupiah", "Baht", "Peso", "Dong"],
      ["Mata wang Thailand ialah…", "Baht", "Rupiah", "Kyat", "Riel"],
      ["Mata wang Filipina ialah…", "Peso", "Baht", "Dong", "Kip"],
      ["Mata wang Vietnam ialah…", "Dong", "Peso", "Rupiah", "Ringgit"],
      ["Mata wang Malaysia ialah…", "Ringgit", "Dolar", "Baht", "Rupiah"],
      ["Contoh keperluan ialah…", "makanan dan pakaian", "mainan mahal", "telefon baharu setiap tahun", "gula-gula"],
      ["Contoh kehendak ialah…", "mainan baharu", "air bersih", "makanan", "ubat ketika sakit"],
      ["Cara yang baik untuk berjimat ialah…", "menyimpan sebahagian wang saku", "membeli semua yang diingini", "meminjam wang kawan", "membazir"]
    ],
    g: [
      () => { const a = r(100, 5000), b = r(100, 9999 - a); return q(`💵|RM${fmt(a)} + RM${fmt(b)} = ?`, a + b, [1, 10, 100], false, "", rm); },
      () => { const a = r(1000, 9999), b = r(100, a - 1); return q(`💵|RM${fmt(a)} − RM${fmt(b)} = ?`, a - b, [1, 10, 100], false, "", rm); },
      () => { const h = r(12, 250), n = r(2, 9); return q(`👟|Sepasang kasut berharga RM${h}. Berapakah harga ${n} pasang?`, h * n, [h, 10, n], false, "", rm); },
      () => { const n = r(2, 9), e = r(15, 400); return q(`🎁|RM${fmt(n * e)} dikongsi sama banyak oleh ${n} orang. Berapakah bahagian setiap orang?`, e, [1, 10, n], false, "", rm); },
      () => { const a = r(1, 20) + r(1, 9) / 10, b = r(1, 20) + r(1, 9) / 10; return q(`🧾|RM${a.toFixed(2)} + RM${b.toFixed(2)} = ?`, +(a + b).toFixed(2), [1, 0.1, 0.5], true, "", rm); }
    ] },
  { t: "Masa dan Waktu",
    q: [
      ["1 minit = ___ saat", "60", "100", "30", "24"],
      ["1 jam = ___ minit", "60", "100", "24", "30"],
      ["Suku jam = ___ minit", "15", "25", "30", "45"],
      ["Jarum pendek pada jam menunjukkan…", "jam", "minit", "saat", "hari"]
    ],
    g: [
      () => { const m = r(2, 9); return q(`${m} minit = ___ saat`, m * 60, [60, 10, 30]); },
      () => { const m = r(2, 5), s = r(5, 55); return q(`${m} minit ${s} saat = ___ saat`, m * 60 + s, [60, 10, 40]); },
      () => { const h = r(2, 5), m = r(5, 55); return q(`${h} jam ${m} minit = ___ minit`, h * 60 + m, [60, 10, 40]); },
      () => { const t = r(2, 9) * 60 + r(1, 59); const h = Math.floor(t / 60), m = t % 60; const right = `${h} jam ${m} minit`; return from(`${t} minit = ?`, right, [`${h - 1} jam ${m} minit`, `${h + 1} jam ${m} minit`, `${h} jam ${(m + 10) % 60} minit`, `${Math.floor(t / 100)} jam ${t % 100} minit`].filter(x => x !== right)); },
      () => { const h1 = r(1, 5), m1 = r(5, 50), h2 = r(1, 4), m2 = r(5, 50); let m = m1 + m2, h = h1 + h2 + Math.floor(m / 60); m %= 60; const right = `${h} jam ${m} minit`; return from(`${h1} jam ${m1} minit + ${h2} jam ${m2} minit = ?`, right, [`${h1 + h2} jam ${m1 + m2} minit`, `${h + 1} jam ${m} minit`, `${h} jam ${(m + 10) % 60} minit`, `${h - 1} jam ${m} minit`].filter(x => x !== right), "60 minit = 1 jam"); }
    ] },
  { t: "Ukuran dan Sukatan",
    q: [
      ["1 m = ___ cm", "100", "10", "1000", "60"],
      ["1 kg = ___ g", "1000", "100", "10", "500"],
      ["1 l = ___ ml", "1000", "100", "10", "500"],
      ["Separuh kilogram = ___ g", "500", "50", "250", "1000"],
      ["Suku liter = ___ ml", "250", "25", "500", "750"]
    ],
    g: [
      () => { const m = r(1, 9), c = r(1, 99); return q(`${m} m ${c} cm = ___ cm`, m * 100 + c, [100, 10, 90]); },
      () => { const c = r(101, 999); const right = `${Math.floor(c / 100)} m ${c % 100} cm`; return from(`${c} cm = ?`, right, [`${Math.floor(c / 10)} m ${c % 10} cm`, `${Math.floor(c / 100) + 1} m ${c % 100} cm`, `${Math.floor(c / 100)} m ${(c % 100 + 10) % 100} cm`, `${c % 100} m ${Math.floor(c / 100)} cm`].filter(x => x !== right)); },
      () => { const k = r(1, 9), g = r(1, 999); return q(`${k} kg ${g} g = ___ g`, k * 1000 + g, [1000, 100, 10]); },
      () => { const l = r(1, 9), m = r(1, 999); return q(`${l} l ${m} ml = ___ ml`, l * 1000 + m, [1000, 100, 10]); },
      () => { const a = r(150, 900), b = r(150, 900); return q(`🧃|Botol A berisi ${a} ml jus. Botol B berisi ${b} ml jus. Berapakah jumlah jus?`, a + b, [10, 100, 50], false, "", x => fmt(x) + " ml"); },
      () => { const k = r(2, 9), g = r(100, 900); return q(`🍉|Sebiji tembikai ${k} kg. Sebiji betik ${g} g. Berapakah jumlah jisim dalam gram?`, k * 1000 + g, [100, 1000, 10], false, "", x => fmt(x) + " g"); }
    ] },
  { t: "Ruang", q: [
    ["Pentagon mempunyai ___ sisi.", "5", "6", "7", "8"],
    ["Heksagon mempunyai ___ sisi.", "6", "5", "7", "8"],
    ["Heptagon mempunyai ___ sisi.", "7", "6", "8", "5"],
    ["Oktagon mempunyai ___ sisi.", "8", "6", "7", "10"],
    ["🛑|Papan tanda berhenti ini berbentuk…", "oktagon", "heksagon", "pentagon", "bulatan"],
    ["Poligon sekata mempunyai sisi yang…", "sama panjang", "tidak sama panjang", "melengkung", "terputus"],
    ["Yang manakah prisma?", "kuboid", "kon", "sfera", "piramid"],
    ["Yang manakah bukan prisma?", "piramid", "kubus", "kuboid", "prisma segi tiga"],
    ["Bilangan paksi simetri segi empat sama ialah…", "4", "2", "1", "0"],
    ["Bilangan paksi simetri segi empat tepat ialah…", "2", "4", "1", "0"],
    ["Bilangan paksi simetri segi tiga sama sisi ialah…", "3", "1", "2", "0"],
    ["Garis yang membahagi bentuk kepada dua bahagian yang sama dipanggil…", "paksi simetri", "perimeter", "bucu", "jejari"]
  ]},
  { t: "Koordinat",
    q: [
      ["Dalam koordinat (3, 5), nombor pertama menunjukkan jarak…", "mengufuk (ke kanan)", "mencancang (ke atas)", "ke kiri", "ke bawah"],
      ["Titik asalan ialah…", "(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"]
    ],
    g: [
      () => { const x = r(1, 5), y = r(1, 5); const m = pick(["🍎", "⭐", "🐱", "🎈"]); const right = `(${x}, ${y})`; return from(`${grid(x, y, m)}|Apakah koordinat ${m}?`, right, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${x - 1 || 2}, ${y})`, `(${x}, ${y - 1 || 3})`].filter(z => z !== right)); },
      () => { const x = r(1, 3), y = r(1, 5), dx = r(1, 2); const right = `(${x + dx}, ${y})`; return from(`🚶|Ali berada di (${x}, ${y}). Dia bergerak ${dx} unit ke kanan. Di manakah Ali sekarang?`, right, [`(${x}, ${y + dx})`, `(${x - dx < 0 ? x + dx + 1 : x - dx}, ${y})`, `(${x + dx}, ${y + dx})`, `(${x + dx + 1}, ${y})`].filter(z => z !== right)); },
      () => { const x = r(1, 5), y = r(1, 3), dy = r(1, 2); const right = `(${x}, ${y + dy})`; return from(`🐦|Burung berada di (${x}, ${y}). Ia terbang ${dy} unit ke atas. Di manakah burung sekarang?`, right, [`(${x + dy}, ${y})`, `(${x}, ${y + dy + 1})`, `(${x + dy}, ${y + dy})`, `(${y + dy}, ${x})`].filter(z => z !== right)); }
    ] },
  { t: "Pengurusan Data",
    q: [
      ["Bulatan yang dibahagikan kepada beberapa bahagian untuk menunjukkan data dipanggil…", "carta pai", "carta palang", "piktograf", "jadual"],
      ["Jumlah keseluruhan carta pai mewakili…", "keseluruhan data (100%)", "separuh data", "satu data sahaja", "tiada data"],
      ["Bahagian terbesar dalam carta pai menunjukkan…", "data yang paling banyak", "data yang paling sedikit", "tiada data", "jumlah data"]
    ],
    g: [
      () => {
        const items = shuffle(["🍎 Epal", "🍌 Pisang", "🍇 Anggur", "🍊 Oren"]);
        const c = shuffle([2, 3, 4, 5, 6, 7]).slice(0, 4), per = pick([2, 5, 10]);
        const chart = items.map((e, i) => e.split(" ")[0] + " " + "🟨".repeat(c[i])).join("\n");
        const names = items.map(x => x.split(" ")[1]); const k = r(0, 3); const t = r(0, 2);
        if (t === 0) return q(`${chart}|Setiap 🟨 mewakili ${per} orang murid. Berapakah murid yang suka ${names[k]}?`, c[k] * per, [per, 1, per * 2]);
        if (t === 1) { const tot = c.reduce((a, b) => a + b, 0) * per; return q(`${chart}|Setiap 🟨 mewakili ${per} orang murid. Berapakah jumlah semua murid?`, tot, [per, 10, 5]); }
        const m = c.indexOf(Math.max(...c)); return [`${chart}|Buah manakah paling digemari?`, names[m], ...names.filter((_, i) => i !== m), ""];
      }
    ] }
],

/* ======================= SAINS (topik DSKP Tahun 3) ======================= */
sains: [
  { t: "Kemahiran Saintifik", q: [
    ["Kemahiran membuat kesimpulan awal berdasarkan pemerhatian ialah…", "membuat inferens", "mengukur", "mengelas", "meramal"],
    ["Mengukur menggunakan alat dan unit yang betul ialah kemahiran…", "mengukur dan menggunakan nombor", "mengelas", "memerhati", "berkomunikasi"],
    ["Alat untuk mengukur isi padu cecair dengan tepat ialah…", "silinder penyukat", "pembaris", "termometer", "neraca"],
    ["Menjangka apa yang akan berlaku seterusnya ialah…", "meramal", "mengelas", "mengukur", "memerhati"],
    ["Mempersembahkan data dalam bentuk jadual ialah…", "berkomunikasi", "meramal", "memerhati", "mengelas"],
    ["Ketika menjalankan eksperimen, kita mesti…", "mengikut arahan guru", "bermain-main", "merasa bahan kimia", "berlari"]
  ]},
  { t: "Manusia", q: [
    ["Kanak-kanak mempunyai ___ batang gigi susu.", "20", "32", "28", "10"],
    ["Orang dewasa mempunyai ___ batang gigi kekal.", "32", "20", "28", "40"],
    ["Gigi yang digunakan untuk memotong makanan ialah gigi…", "kacip", "taring", "geraham", "gusi"],
    ["Gigi yang digunakan untuk mengoyak makanan ialah gigi…", "taring", "kacip", "geraham", "susu"],
    ["Gigi yang digunakan untuk mengunyah dan mengisar makanan ialah gigi…", "geraham", "kacip", "taring", "susu"],
    ["Lapisan gigi yang paling keras ialah…", "enamel", "dentin", "pulpa", "gusi"],
    ["Kelas makanan yang membekalkan tenaga ialah…", "karbohidrat", "vitamin", "serat", "air"],
    ["Kelas makanan untuk tumbesaran dan membaiki sel ialah…", "protein", "karbohidrat", "lemak", "serat"],
    ["🍚|Nasi kaya dengan…", "karbohidrat", "protein", "vitamin", "serat"],
    ["🥚|Telur dan ikan kaya dengan…", "protein", "karbohidrat", "lemak", "serat"],
    ["🥦|Sayur-sayuran kaya dengan serat yang membantu…", "mengelakkan sembelit", "menambah tenaga sahaja", "membina otot", "menguatkan gigi"],
    ["Makanan yang perlu dimakan paling sedikit dalam piramid makanan ialah…", "lemak, gula dan garam", "nasi dan roti", "sayur dan buah", "air"],
    ["Pencernaan makanan bermula di…", "mulut", "perut", "usus kecil", "usus besar"],
    ["Makanan tercerna diserap ke dalam darah di…", "usus kecil", "mulut", "esofagus", "usus besar"],
    ["Urutan laluan makanan: mulut → esofagus → perut → …", "usus kecil → usus besar → dubur", "usus besar → usus kecil → dubur", "dubur → usus kecil", "paru-paru → jantung"]
  ]},
  { t: "Haiwan", q: [
    ["Haiwan yang makan tumbuhan sahaja dipanggil…", "herbivor", "karnivor", "omnivor", "pengeluar"],
    ["Haiwan yang makan haiwan lain sahaja dipanggil…", "karnivor", "herbivor", "omnivor", "pengurai"],
    ["Haiwan yang makan tumbuhan dan haiwan dipanggil…", "omnivor", "herbivor", "karnivor", "pengeluar"],
    ["🐄|Lembu ialah…", "herbivor", "karnivor", "omnivor", "pengurai"],
    ["🐯|Harimau ialah…", "karnivor", "herbivor", "omnivor", "pengeluar"],
    ["🐔|Ayam makan biji-bijian dan cacing. Ayam ialah…", "omnivor", "herbivor", "karnivor", "pengeluar"],
    ["Karnivor mempunyai gigi taring yang…", "tajam untuk mengoyak daging", "rata untuk mengisar rumput", "tumpul", "tiada"],
    ["Herbivor mempunyai gigi geraham yang…", "lebar dan rata untuk mengisar", "tajam seperti pisau", "tiada", "sangat panjang"],
    ["🐰|Arnab ialah…", "herbivor", "karnivor", "omnivor", "pemangsa"],
    ["🦁|Singa ialah…", "karnivor", "herbivor", "omnivor", "pengeluar"]
  ]},
  { t: "Tumbuhan", q: [
    ["🌾|Padi membiak melalui…", "biji benih", "keratan batang", "spora", "daun"],
    ["Ubi kayu boleh membiak melalui…", "keratan batang", "spora", "daun", "biji kelapa"],
    ["Paku pakis membiak melalui…", "spora", "biji benih", "keratan batang", "sulur"],
    ["🍄|Cendawan membiak melalui…", "spora", "biji benih", "daun", "keratan batang"],
    ["🫚|Halia membiak melalui…", "batang bawah tanah (rizom)", "spora", "daun", "biji benih"],
    ["Pokok setawar (cocor bebek) boleh membiak melalui…", "daun", "spora", "biji benih sahaja", "akar sahaja"],
    ["🍌|Pokok pisang membiak melalui…", "sulur (anak pokok)", "spora", "biji benih", "daun"],
    ["Keledek membiak melalui…", "ubi akar", "spora", "daun", "biji benih"],
    ["Bunga raya boleh membiak melalui biji benih dan…", "keratan batang", "spora", "daun", "sulur"],
    ["Tumbuhan perlu membiak supaya…", "spesiesnya tidak pupus", "cepat mati", "menjadi kecil", "tidak berbuah"]
  ]},
  { t: "Pengukuran", q: [
    ["Unit untuk luas permukaan ialah…", "sentimeter persegi (cm²)", "sentimeter (cm)", "gram (g)", "liter (l)"],
    ["Unit untuk isi padu pepejal ialah…", "sentimeter padu (cm³)", "sentimeter (cm)", "kilogram (kg)", "meter (m)"],
    ["Luas permukaan boleh diukur dengan mengira bilangan…", "petak segi empat sama", "garisan", "bulatan", "titik"],
    ["Isi padu batu (bentuk tidak sekata) boleh diukur menggunakan…", "air dalam silinder penyukat", "pembaris", "termometer", "neraca"],
    ["Apabila batu dimasukkan ke dalam air, paras air akan…", "naik", "turun", "tidak berubah", "hilang"],
    ["Isi padu kotak 2 cm × 2 cm × 2 cm ialah…", "8 cm³", "6 cm³", "4 cm³", "12 cm³"],
    ["Luas segi empat sama bersisi 3 cm ialah…", "9 cm²", "6 cm²", "12 cm²", "3 cm²"],
    ["Isi padu cecair diukur dalam unit…", "mililiter (ml)", "sentimeter (cm)", "gram (g)", "meter (m)"]
  ]},
  { t: "Ketumpatan", q: [
    ["Objek yang kurang tumpat daripada air akan…", "timbul", "tenggelam", "larut", "cair"],
    ["Objek yang lebih tumpat daripada air akan…", "tenggelam", "timbul", "terbang", "mengembang"],
    ["Yang manakah akan timbul di atas air?", "gabus", "batu", "paku besi", "duit syiling"],
    ["Yang manakah akan tenggelam di dalam air?", "kelereng (guli)", "bola pingpong", "daun kering", "gabus"],
    ["Air menjadi lebih tumpat apabila kita menambah…", "garam", "minyak", "ais", "pasir"],
    ["🥚|Telur yang tenggelam dalam air tawar boleh timbul jika kita menambah…", "garam", "minyak", "air suling", "gula sedikit sahaja"],
    ["Minyak terapung di atas air kerana minyak…", "kurang tumpat daripada air", "lebih tumpat daripada air", "berat", "panas"],
    ["Pelampung keselamatan dibuat daripada bahan yang…", "kurang tumpat", "lebih tumpat", "berat", "keras"]
  ]},
  { t: "Asid dan Alkali", q: [
    ["Bahan berasid akan menukarkan kertas litmus biru kepada…", "merah", "biru", "hijau", "kuning"],
    ["Bahan beralkali akan menukarkan kertas litmus merah kepada…", "biru", "merah", "putih", "hitam"],
    ["Bahan neutral tidak mengubah warna kertas…", "litmus", "lukisan", "surat khabar", "tisu"],
    ["🍋|Jus limau ialah bahan…", "berasid", "beralkali", "neutral", "bergas"],
    ["Cuka ialah bahan…", "berasid", "beralkali", "neutral", "pepejal"],
    ["🧼|Air sabun ialah bahan…", "beralkali", "berasid", "neutral", "masam"],
    ["Air suling ialah bahan…", "neutral", "berasid", "beralkali", "masin"],
    ["Bahan berasid biasanya rasa…", "masam", "pahit", "manis", "tawar"],
    ["Bahan beralkali biasanya rasa pahit dan terasa…", "licin", "kasar", "berpasir", "panas"],
    ["Kita tidak boleh merasa bahan di makmal kerana…", "boleh membahayakan diri", "rasanya sedap", "ia mahal", "guru akan marah sahaja"]
  ]},
  { t: "Sistem Suria", q: [
    ["Pusat Sistem Suria ialah…", "Matahari", "Bumi", "Bulan", "Musytari"],
    ["Bilangan planet dalam Sistem Suria ialah…", "8", "9", "7", "10"],
    ["Planet yang paling hampir dengan Matahari ialah…", "Utarid", "Zuhrah", "Bumi", "Marikh"],
    ["Planet yang paling jauh dari Matahari ialah…", "Neptun", "Uranus", "Zuhal", "Musytari"],
    ["Planet yang paling besar ialah…", "Musytari", "Zuhal", "Bumi", "Neptun"],
    ["Planet yang terkenal dengan gelang yang cantik ialah…", "Zuhal", "Marikh", "Utarid", "Bumi"],
    ["Bumi ialah planet yang ke-___ dari Matahari.", "3", "1", "2", "4"],
    ["Planet merah ialah…", "Marikh", "Zuhrah", "Neptun", "Musytari"],
    ["Satelit semula jadi Bumi ialah…", "Bulan", "Matahari", "Marikh", "bintang"],
    ["Laluan planet mengelilingi Matahari dipanggil…", "orbit", "paksi", "buruj", "galaksi"],
    ["Semakin jauh planet dari Matahari, semakin ___ masa untuk mengelilingi Matahari.", "lama", "singkat", "sama", "tiada"],
    ["Urutan planet: Utarid, Zuhrah, Bumi, …", "Marikh", "Musytari", "Zuhal", "Neptun"]
  ]},
  { t: "Mesin (Takal)", q: [
    ["Takal ialah roda yang mempunyai…", "alur untuk tali", "gigi tajam", "bateri", "skru"],
    ["Takal membantu kita…", "mengangkat beban dengan lebih mudah", "memotong kayu", "mengukur suhu", "melihat jauh"],
    ["Takal digunakan pada…", "tiang bendera", "pensel", "pinggan", "kasut"],
    ["Contoh lain penggunaan takal ialah…", "kren di tapak pembinaan", "gunting", "sudu", "pembaris"],
    ["Takal pada tiang bendera membolehkan kita menaikkan bendera dengan…", "menarik tali ke bawah", "memanjat tiang", "melontar bendera", "menolak tiang"],
    ["Perigi lama menggunakan takal untuk…", "menaikkan baldi air", "memanaskan air", "menapis air", "menyejukkan air"],
    ["Bidai tingkap boleh dinaikkan menggunakan…", "takal", "baji", "skru", "tuas"]
  ]}
],

/* ======================= PENDIDIKAN ISLAM (ikut bidang KSSR) ======================= */
pi: [
  { t: "Al-Quran", q: [
    ["Surah al-Fil menceritakan tentang…", "tentera bergajah Abrahah", "kisah Nabi Yunus", "lebah", "semut"],
    ["Surah al-Fil mengandungi ___ ayat.", "5", "4", "6", "3"],
    ["Surah Quraisy mengandungi ___ ayat.", "4", "5", "3", "6"],
    ["Surah al-Kafirun mengandungi ___ ayat.", "6", "5", "7", "4"],
    ["Surah an-Nasr mengandungi ___ ayat.", "3", "4", "5", "6"],
    ["Surah al-Ma'un mengandungi ___ ayat.", "7", "6", "5", "4"],
    ["Huruf halqi (huruf kerongkong) ada ___ huruf.", "6", "5", "4", "7"],
    ["Apabila nun mati atau tanwin bertemu huruf halqi, hukumnya…", "izhar halqi", "idgham", "ikhfa'", "iqlab"],
    ["Izhar bermaksud dibaca dengan…", "jelas", "dengung panjang", "senyap", "berganda"],
    ["Membaca al-Quran dengan tartil bermaksud membaca dengan…", "perlahan dan betul", "sangat laju", "menjerit", "berbisik sahaja"]
  ]},
  { t: "Akidah", q: [
    ["Beriman kepada kitab ialah Rukun Iman yang ke-…", "3", "2", "4", "5"],
    ["Beriman kepada rasul ialah Rukun Iman yang ke-…", "4", "3", "5", "6"],
    ["Kitab Taurat diturunkan kepada Nabi…", "Musa a.s.", "Isa a.s.", "Daud a.s.", "Muhammad SAW"],
    ["Kitab Zabur diturunkan kepada Nabi…", "Daud a.s.", "Musa a.s.", "Isa a.s.", "Adam a.s."],
    ["Kitab Injil diturunkan kepada Nabi…", "Isa a.s.", "Musa a.s.", "Daud a.s.", "Ibrahim a.s."],
    ["Al-Quran diturunkan kepada Nabi…", "Muhammad SAW", "Isa a.s.", "Musa a.s.", "Nuh a.s."],
    ["Bilangan nabi dan rasul yang wajib diketahui ialah…", "25", "10", "20", "6"],
    ["Rasul ialah utusan Allah yang…", "wajib menyampaikan ajaran kepada umatnya", "tidak menerima wahyu", "malaikat", "raja"],
    ["Ar-Rahman bermaksud Allah Yang Maha…", "Pemurah", "Kuat", "Melihat", "Mendengar"],
    ["Ar-Rahim bermaksud Allah Yang Maha…", "Penyayang", "Pencipta", "Kaya", "Agung"]
  ]},
  { t: "Ibadah", q: [
    ["Antara syarat wajib solat ialah…", "Islam, baligh dan berakal", "kaya", "dewasa sahaja", "tinggal di bandar"],
    ["Antara syarat sah solat ialah…", "menutup aurat", "memakai jam", "solat di rumah", "selepas makan"],
    ["Rukun solat ada ___ perkara.", "13", "6", "4", "20"],
    ["Ketika sujud, dahi kita menyentuh…", "tempat sujud", "lutut", "dinding", "tangan"],
    ["Bacaan ketika rukuk ialah tasbih yang memuji…", "Allah Yang Maha Agung", "Nabi Muhammad", "ibu bapa", "malaikat"],
    ["Solat yang dilakukan secara berjemaah pada hari Jumaat ialah…", "solat Jumaat", "solat Aidilfitri", "solat Tarawih", "solat Duha"],
    ["Puasa Ramadan wajib bagi orang Islam yang…", "baligh, berakal dan mampu", "kanak-kanak kecil sahaja", "sedang sakit teruk", "tidak berakal"],
    ["Ketika berpuasa, kita menahan diri daripada makan dan minum dari terbit fajar hingga…", "terbenam matahari", "tengah hari", "tengah malam", "waktu Asar"],
    ["Makan apabila tiba waktu Maghrib pada bulan puasa dipanggil…", "berbuka puasa", "bersahur", "berzakat", "bertakbir"],
    ["Makan sebelum terbit fajar dipanggil…", "bersahur", "berbuka", "bertarawih", "beriktikaf"]
  ]},
  { t: "Sirah", q: [
    ["Nabi Muhammad SAW menerima wahyu pertama pada usia…", "40 tahun", "25 tahun", "63 tahun", "10 tahun"],
    ["Wahyu pertama disampaikan oleh malaikat…", "Jibril", "Mikail", "Israfil", "Izrail"],
    ["Wanita pertama memeluk Islam ialah…", "Siti Khadijah", "Siti Aisyah", "Siti Fatimah", "Siti Aminah"],
    ["Lelaki dewasa pertama memeluk Islam ialah…", "Abu Bakar as-Siddiq", "Umar al-Khattab", "Uthman bin Affan", "Abu Talib"],
    ["Kanak-kanak pertama memeluk Islam ialah…", "Ali bin Abi Talib", "Zaid bin Harithah", "Hasan", "Husain"],
    ["Pada peringkat awal, Nabi berdakwah secara…", "sembunyi-sembunyi", "terang-terangan di pasar", "melalui surat", "di Madinah"],
    ["Ketika berdakwah, Nabi Muhammad SAW sentiasa bersikap…", "sabar dan lemah lembut", "garang", "sombong", "malas"]
  ]},
  { t: "Adab", q: [
    ["Contoh adab yang baik terhadap jiran ialah…", "berkongsi makanan dan bertegur sapa", "membuat bising waktu malam", "membuang sampah di depan rumah jiran", "bergaduh"],
    ["Jika jiran sakit, kita sebaiknya…", "menziarahinya", "membiarkannya", "mentertawakannya", "membuat bising"],
    ["Contoh menjaga alam sekitar ialah…", "tidak membuang sampah merata-rata", "menebang pokok sesuka hati", "membuang sampah ke sungai", "membazir air"],
    ["Ketika menggunakan air untuk berwuduk, kita perlu…", "berjimat", "membazir", "membiarkan paip terbuka", "bermain air"],
    ["Islam melarang kita…", "menyeksa haiwan", "memberi haiwan makan", "menjaga haiwan peliharaan", "menyayangi haiwan"],
    ["Apabila berjumpa orang yang lebih tua, kita…", "bersalam dan bercakap dengan sopan", "buat tidak tahu", "mengejek", "lari"],
    ["Ketika guru mengajar, kita…", "memberi perhatian", "berbual dengan kawan", "tidur", "bermain"]
  ]},
  { t: "Jawi", q: [
    ["سکوله|Perkataan Jawi ini dibaca…", "sekolah", "sekali", "sukalah", "sikalah"],
    ["کريتا|Perkataan Jawi ini dibaca…", "kereta", "kertas", "karut", "kirta"],
    ["کوچيڠ|Perkataan Jawi ini dibaca…", "kucing", "kacang", "kuning", "kicap"],
    ["ناسي|Perkataan Jawi ini dibaca…", "nasi", "nasa", "nusa", "nisa"],
    ["Ejaan Jawi bagi \"sekolah\" ialah…", "سکوله", "سکله", "سکولا", "سيکوله"],
    ["Ejaan Jawi bagi \"nasi\" ialah…", "ناسي", "نسي", "ناس", "نسا"],
    ["ڤ|Huruf Jawi ini mewakili bunyi…", "p", "f", "v", "ng"],
    ["ڽ|Huruf Jawi ini mewakili bunyi…", "ny", "ng", "n", "c"],
    ["Huruf Jawi yang tidak terdapat dalam huruf hijaiyah ialah…", "چ", "ب", "ت", "س"]
  ]}
],

/* ======================= BAHASA ARAB (ikut tema) ======================= */
ba: [
  { t: "Sekolah dan Alat Tulis", q: [
    ["مِمْحَاةٌ|Perkataan ini bermaksud…", "pemadam", "pensel", "pembaris", "beg"],
    ["مِسْطَرَةٌ|Perkataan ini bermaksud…", "pembaris", "pemadam", "pen", "buku"],
    ["حَقِيبَةٌ|Perkataan ini bermaksud…", "beg", "buku", "kerusi", "meja"],
    ["مَكْتَبٌ|Perkataan ini bermaksud…", "meja", "kerusi", "pintu", "kelas"],
    ["سَبُّورَةٌ|Perkataan ini bermaksud…", "papan hitam", "tingkap", "buku", "beg"],
    ["فَصْلٌ|Perkataan ini bermaksud…", "kelas", "sekolah", "kantin", "padang"],
    ["طَالِبٌ|Perkataan ini bermaksud…", "murid", "guru", "bapa", "doktor"],
    ["✏️|Pensel dalam bahasa Arab ialah…", "قَلَمُ رَصَاصٍ", "مِمْحَاةٌ", "كِتَابٌ", "حَقِيبَةٌ"]
  ]},
  { t: "Anggota Badan", q: [
    ["رَأْسٌ|Perkataan ini bermaksud…", "kepala", "tangan", "kaki", "perut"],
    ["عَيْنٌ|Perkataan ini bermaksud…", "mata", "telinga", "hidung", "mulut"],
    ["أُذُنٌ|Perkataan ini bermaksud…", "telinga", "mata", "kepala", "tangan"],
    ["أَنْفٌ|Perkataan ini bermaksud…", "hidung", "mulut", "mata", "kaki"],
    ["رِجْلٌ|Perkataan ini bermaksud…", "kaki", "tangan", "kepala", "telinga"],
    ["🦷|Gigi dalam bahasa Arab ialah…", "سِنٌّ", "فَمٌ", "يَدٌ", "عَيْنٌ"],
    ["👄|Mulut dalam bahasa Arab ialah…", "فَمٌ", "أَنْفٌ", "أُذُنٌ", "رِجْلٌ"]
  ]},
  { t: "Pakaian", q: [
    ["قَمِيصٌ|Perkataan ini bermaksud…", "baju", "seluar", "kasut", "topi"],
    ["سِرْوَالٌ|Perkataan ini bermaksud…", "seluar", "baju", "kasut", "stoking"],
    ["حِذَاءٌ|Perkataan ini bermaksud…", "kasut", "topi", "baju", "beg"],
    ["قُبَّعَةٌ|Perkataan ini bermaksud…", "topi", "kasut", "seluar", "baju"],
    ["👟|Kasut dalam bahasa Arab ialah…", "حِذَاءٌ", "قَمِيصٌ", "قُبَّعَةٌ", "سِرْوَالٌ"],
    ["👕|Baju dalam bahasa Arab ialah…", "قَمِيصٌ", "حِذَاءٌ", "سِرْوَالٌ", "قُبَّعَةٌ"],
    ["🧢|Topi dalam bahasa Arab ialah…", "قُبَّعَةٌ", "قَمِيصٌ", "حِذَاءٌ", "سِرْوَالٌ"]
  ]},
  { t: "Buah-buahan", q: [
    ["🍊|Oren dalam bahasa Arab ialah…", "بُرْتُقَالٌ", "تُفَّاحٌ", "مَوْزٌ", "عِنَبٌ"],
    ["🍎|Epal dalam bahasa Arab ialah…", "تُفَّاحٌ", "بُرْتُقَالٌ", "عِنَبٌ", "مَوْزٌ"],
    ["🍇|Anggur dalam bahasa Arab ialah…", "عِنَبٌ", "تُفَّاحٌ", "مَوْزٌ", "بُرْتُقَالٌ"],
    ["🍌|Pisang dalam bahasa Arab ialah…", "مَوْزٌ", "عِنَبٌ", "تُفَّاحٌ", "بُرْتُقَالٌ"],
    ["🌴|Kurma dalam bahasa Arab ialah…", "تَمْرٌ", "مَوْزٌ", "عِنَبٌ", "تُفَّاحٌ"],
    ["فَاكِهَةٌ|Perkataan ini bermaksud…", "buah-buahan", "sayur-sayuran", "minuman", "makanan ringan"]
  ]},
  { t: "Warna", q: [
    ["أَحْمَرُ|Warna ini ialah…", "merah", "biru", "hijau", "kuning"],
    ["أَزْرَقُ|Warna ini ialah…", "biru", "merah", "hitam", "putih"],
    ["أَخْضَرُ|Warna ini ialah…", "hijau", "kuning", "merah", "biru"],
    ["أَصْفَرُ|Warna ini ialah…", "kuning", "hijau", "putih", "merah"],
    ["🍌|Pisang masak berwarna…", "أَصْفَرُ", "أَزْرَقُ", "أَسْوَدُ", "أَحْمَرُ"],
    ["🌿|Daun berwarna…", "أَخْضَرُ", "أَحْمَرُ", "أَبْيَضُ", "أَزْرَقُ"],
    ["☁️|Awan berwarna…", "أَبْيَضُ", "أَسْوَدُ", "أَخْضَرُ", "أَصْفَرُ"]
  ]},
  { t: "Kata Tanya dan Kata Kerja", q: [
    ["مَا|Kata tanya ini bermaksud…", "apa", "siapa", "di mana", "berapa"],
    ["مَنْ|Kata tanya ini bermaksud…", "siapa", "apa", "bila", "di mana"],
    ["أَيْنَ|Kata tanya ini bermaksud…", "di mana", "siapa", "apa", "bila"],
    ["كَمْ|Kata tanya ini bermaksud…", "berapa", "siapa", "apa", "bagaimana"],
    ["مَا هَذَا؟|Soalan ini bermaksud…", "Apakah ini?", "Siapakah ini?", "Di manakah ini?", "Berapakah ini?"],
    ["أَكَلَ|Kata kerja ini bermaksud…", "telah makan", "telah minum", "telah tidur", "telah menulis"],
    ["شَرِبَ|Kata kerja ini bermaksud…", "telah minum", "telah makan", "telah duduk", "telah pergi"],
    ["جَلَسَ|Kata kerja ini bermaksud…", "telah duduk", "telah berdiri", "telah tidur", "telah pergi"],
    ["نَامَ|Kata kerja ini bermaksud…", "telah tidur", "telah makan", "telah membaca", "telah duduk"]
  ]}
]
};
})();
