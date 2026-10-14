/* =========================================================
   PRASEKOLAH — Cerdik Ceria (umur 4–6 tahun, KSPK)
   Topik umum yang biasa diajar di prasekolah. Banyak gambar,
   ayat pendek — sesuai dibacakan oleh ibu bapa atau guru.

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🐱|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   Soalan asli.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from } = MK;

const BENDA = ["🍎", "🍌", "⭐", "🎈", "🐥", "🌸", "🍓", "🚗", "🐟", "⚽", "🦋", "🧁"];
const NAMA = { "🍎": "epal", "🍌": "pisang", "⭐": "bintang", "🎈": "belon", "🐥": "anak ayam", "🌸": "bunga", "🍓": "strawberi", "🚗": "kereta", "🐟": "ikan", "⚽": "bola", "🦋": "rama-rama", "🧁": "kek cawan" };
const SEBUT = ["kosong", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan", "sepuluh"];

/* perkataan BM bergambar: [emoji, perkataan, suku kata pertama] */
const KATA = [
  ["🐱", "kucing", "ku"], ["🐟", "ikan", "i"], ["🍌", "pisang", "pi"], ["⚽", "bola", "bo"], ["📖", "buku", "bu"],
  ["🦆", "itik", "i"], ["🐘", "gajah", "ga"], ["🏠", "rumah", "ru"], ["🚗", "kereta", "ke"], ["🌙", "bulan", "bu"],
  ["🐄", "lembu", "lem"], ["🍉", "tembikai", "tem"], ["👟", "kasut", "ka"], ["🐔", "ayam", "a"], ["🌳", "pokok", "po"],
  ["🐢", "penyu", "pe"], ["🐍", "ular", "u"], ["🦋", "rama-rama", "ra"], ["🍎", "epal", "e"], ["🐐", "kambing", "kam"],
  ["🥚", "telur", "te"], ["☂️", "payung", "pa"], ["🐸", "katak", "ka"], ["🪑", "kerusi", "ke"]
];
/* perkataan BI bergambar */
const WORD = [
  ["🍎", "apple"], ["🐝", "bee"], ["🐱", "cat"], ["🐶", "dog"], ["🥚", "egg"], ["🐟", "fish"], ["🐐", "goat"],
  ["🎩", "hat"], ["🍦", "ice cream"], ["🧃", "juice"], ["🪁", "kite"], ["🦁", "lion"], ["🐒", "monkey"], ["👃", "nose"],
  ["🐙", "octopus"], ["🐷", "pig"], ["👑", "queen"], ["🐀", "rat"], ["☀️", "sun"], ["🐯", "tiger"], ["☂️", "umbrella"],
  ["🚐", "van"], ["🍉", "watermelon"], ["🦓", "zebra"], ["🦆", "duck"], ["🐸", "frog"], ["🚌", "bus"]
];
const HIJAIYAH = [["ا", "alif"], ["ب", "ba"], ["ت", "ta"], ["ث", "tsa"], ["ج", "jim"], ["ح", "ha"], ["خ", "kho"], ["د", "dal"], ["ذ", "zal"], ["ر", "ro"], ["ز", "zai"], ["س", "sin"], ["ش", "syin"], ["ص", "sod"], ["ط", "to"], ["ع", "ain"], ["ف", "fa"], ["ق", "qof"], ["ك", "kaf"], ["ل", "lam"], ["م", "mim"], ["ن", "nun"], ["و", "wau"], ["ه", "ha (simpul)"], ["ي", "ya"]];

SOALAN["p1"] = {

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Huruf Vokal dan Konsonan", q: [
    ["Yang manakah huruf vokal?", "a", "b", "m", "s"],
    ["Yang manakah huruf vokal?", "u", "t", "k", "p"],
    ["Yang manakah huruf konsonan?", "b", "a", "e", "o"],
    ["Ada berapa huruf vokal?", "5", "3", "10", "26"],
    ["Huruf vokal ialah a, e, i, o dan…", "u", "b", "k", "z"],
    ["Huruf pertama dalam abjad ialah…", "a", "b", "z", "m"],
    ["Huruf terakhir dalam abjad ialah…", "z", "a", "y", "x"]
  ], g: [
    () => { const L = "abcdefghijklmnopqrstuvwxy"; const i = r(0, L.length - 1); const ans = "abcdefghijklmnopqrstuvwxyz"[i + 1]; return from(`Huruf selepas "${L[i]}" ialah…`, ans, "abcdefghijklmnopqrstuvwxyz".split("").filter(c => c !== ans && c !== L[i]).slice(Math.max(0, i - 3), i + 4)); },
    () => { const L = "abcdefghijkmnopqrstuvwxyz"; const c = pick(L.split("")); return from(`Huruf besar bagi "${c}" ialah…`, c.toUpperCase(), shuffle(L.toUpperCase().split("").filter(x => x !== c.toUpperCase())).slice(0, 3)); }
  ] },
  { t: "Huruf Awal Perkataan", q: [
    ["🐱|\"kucing\" bermula dengan huruf…", "k", "c", "g", "u"],
    ["🐟|\"ikan\" bermula dengan huruf…", "i", "a", "k", "e"],
    ["🐘|\"gajah\" bermula dengan huruf…", "g", "j", "h", "a"],
    ["🍌|\"pisang\" bermula dengan huruf…", "p", "b", "s", "n"]
  ], g: [
    () => { const [e, w] = pick(KATA); const a = w[0]; return from(`${e}|Nama gambar ini bermula dengan huruf…`, a, "abdegiklmprstu".split("").filter(c => c !== a)); }
  ] },
  { t: "Suku Kata", q: [
    ["\"ba\" + \"ju\" menjadi…", "baju", "jaba", "buku", "bayu"],
    ["\"bu\" + \"ku\" menjadi…", "buku", "kubu", "baku", "bika"],
    ["\"ma\" + \"ta\" menjadi…", "mata", "tama", "meta", "mati"],
    ["\"ka\" + \"ki\" menjadi…", "kaki", "kiki", "kaka", "kika"],
    ["\"bo\" + \"la\" menjadi…", "bola", "labo", "bela", "bila"],
    ["Berapa suku kata dalam \"bola\"?", "2", "1", "3", "4"],
    ["Berapa suku kata dalam \"kereta\"?", "3", "2", "4", "1"]
  ], g: [
    () => { const [e, w, s] = pick(KATA.filter(k => !k[1].includes("-"))); return from(`${e}|${w} — suku kata pertama ialah…`, s, [...new Set(KATA.map(k => k[2]))].filter(x => x !== s)); }
  ] },
  { t: "Kenal Perkataan", q: [
    ["🏠|Ini ialah…", "rumah", "sekolah", "kedai", "masjid"],
    ["🌳|Ini ialah…", "pokok", "bunga", "rumput", "daun"],
    ["🚲|Ini ialah…", "basikal", "kereta", "bas", "kapal"],
    ["☀️|Ini ialah…", "matahari", "bulan", "bintang", "awan"],
    ["🐄|Ini ialah…", "lembu", "kambing", "kuda", "kerbau"],
    ["Yang manakah gambar \"bola\"?", "⚽", "🎈", "🧸", "🪁"],
    ["Yang manakah gambar \"bunga\"?", "🌸", "🌳", "🍄", "🌵"],
    ["Yang manakah gambar \"ikan\"?", "🐟", "🐦", "🐢", "🐸"]
  ], g: [
    () => { const [e, w] = pick(KATA); return from(`${e}|Ini ialah…`, w, KATA.map(k => k[1]).filter(x => x !== w)); },
    () => { const [e, w] = pick(KATA); return from(`Yang manakah gambar "${w}"?`, e, KATA.map(k => k[0]).filter(x => x !== e)); }
  ] },
  { t: "Ucapan dan Bertutur Sopan", q: [
    ["Bila menerima hadiah, kita berkata…", "Terima kasih", "Selamat tinggal", "Maaf", "Selamat malam"],
    ["Bila berjumpa cikgu pada waktu pagi, kita berkata…", "Selamat pagi", "Selamat malam", "Selamat jalan", "Tahniah"],
    ["Bila terlanggar kawan, kita berkata…", "Maaf", "Terima kasih", "Tahniah", "Selamat pagi"],
    ["Bila mahu meminjam barang kawan, kita berkata…", "Boleh saya pinjam?", "Bagi saya!", "Saya ambil!", "Pergi!"],
    ["Bila kawan menang pertandingan, kita berkata…", "Tahniah", "Maaf", "Selamat malam", "Jangan"],
    ["😴|Sebelum tidur, kita berkata kepada ibu…", "Selamat malam", "Selamat pagi", "Tahniah", "Selamat datang"]
  ] }
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Alphabet", q: [
    ["Which letter comes after \"a\"?", "b", "c", "d", "z"],
    ["Which letter comes before \"c\"?", "b", "d", "a", "e"],
    ["The capital letter for \"m\" is…", "M", "N", "W", "H"],
    ["The small letter for \"B\" is…", "b", "d", "p", "q"]
  ], g: [
    () => { const L = "abcdefghijklmnopqrstuvwxyz"; const i = r(0, 24); const ans = L[i + 1]; return from(`Which letter comes after "${L[i]}"?`, ans, L.split("").filter(c => c !== ans && c !== L[i]).slice(Math.max(0, i - 3), i + 4)); },
    () => { const L = "abcdefghijkmnopqrstuvwxyz"; const c = pick(L.split("")); return from(`The capital letter for "${c}" is…`, c.toUpperCase(), shuffle(L.toUpperCase().split("").filter(x => x !== c.toUpperCase())).slice(0, 3)); }
  ] },
  { t: "Phonics (First Letter)", q: [
    ["🍎|\"apple\" begins with…", "a", "e", "p", "o"],
    ["🐝|\"bee\" begins with…", "b", "d", "p", "e"],
    ["🐶|\"dog\" begins with…", "d", "b", "g", "o"]
  ], g: [
    () => { const [e, w] = pick(WORD); const a = w[0]; return from(`${e}|"${w}" begins with the letter…`, a, "abcdfghklmprstwz".split("").filter(c => c !== a)); },
    () => { const [e, w] = pick(WORD); return from(`${e}|This is a…`, w, WORD.map(x => x[1]).filter(x => x !== w)); }
  ] },
  { t: "Colours", q: [
    ["🔴|What colour is this?", "red", "blue", "green", "yellow"],
    ["🔵|What colour is this?", "blue", "red", "pink", "brown"],
    ["🟢|What colour is this?", "green", "yellow", "purple", "black"],
    ["🟡|What colour is this?", "yellow", "orange", "white", "green"],
    ["🟣|What colour is this?", "purple", "pink", "blue", "red"],
    ["🟠|What colour is this?", "orange", "yellow", "red", "brown"],
    ["⚫|What colour is this?", "black", "white", "grey", "blue"],
    ["🍌|A ripe banana is…", "yellow", "blue", "purple", "black"],
    ["🐸|The frog is…", "green", "red", "pink", "white"]
  ] },
  { t: "Numbers", q: [
    ["⭐⭐⭐|How many stars?", "three", "two", "four", "five"],
    ["🎈🎈|How many balloons?", "two", "one", "three", "six"],
    ["✋|How many fingers?", "five", "four", "six", "ten"],
    ["Which number is \"seven\"?", "7", "1", "4", "9"],
    ["Which number is \"ten\"?", "10", "1", "100", "0"]
  ], g: [
    () => { const W = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]; const n = r(1, 10), b = pick(BENDA); return from(`${b.repeat(n)}|How many?`, W[n], W.filter((x, i) => i && i !== n)); }
  ] },
  { t: "Animals and Sounds", q: [
    ["🐄|Which animal says \"moo\"?", "cow", "cat", "duck", "dog"],
    ["Which animal says \"meow\"?", "cat", "cow", "duck", "goat"],
    ["Which animal says \"quack\"?", "duck", "dog", "cow", "lion"],
    ["Which animal says \"woof\"?", "dog", "cat", "bird", "fish"],
    ["Which animal can fly?", "bird", "fish", "cow", "snake"],
    ["Which animal lives in water?", "fish", "goat", "cat", "chicken"],
    ["🐘|This is an…", "elephant", "tiger", "horse", "rabbit"]
  ] },
  { t: "Greetings and Family", q: [
    ["You meet your teacher in the morning. You say…", "Good morning", "Good night", "Goodbye", "Sorry"],
    ["Someone gives you a gift. You say…", "Thank you", "Sorry", "Good night", "Hello"],
    ["You go to bed. You say…", "Good night", "Good morning", "Hello", "Thank you"],
    ["👩|My mother is also called…", "mum", "dad", "brother", "uncle"],
    ["👨|My father is also called…", "dad", "mum", "sister", "aunt"],
    ["\"What is your name?\" — \"My name is ___.\"", "Adam", "five", "happy", "red"]
  ] }
],

/* ======================= MATEMATIK AWAL ======================= */
math: [
  { t: "Nombor 1 hingga 10", q: [
    ["Nombor selepas 3 ialah…", "4", "2", "5", "6"],
    ["Nombor sebelum 5 ialah…", "4", "6", "3", "7"],
    ["\"lima\" ialah nombor…", "5", "4", "6", "7"],
    ["\"sepuluh\" ialah nombor…", "10", "1", "100", "0"],
    ["Nombor yang paling kecil ialah…", "1", "5", "8", "10"],
    ["Nombor yang paling besar ialah…", "9", "2", "5", "7"]
  ], g: [
    () => { const n = r(1, 9); return q(`Nombor selepas ${n} ialah…`, n + 1, [1, 2]); },
    () => { const n = r(1, 10); return from(`Nombor "${SEBUT[n]}" ialah…`, String(n), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(x => x !== n).map(String)); }
  ] },
  { t: "Mengira Objek", q: [
    ["🍎🍎🍎|Berapa biji epal?", "3", "2", "4", "5"],
    ["✋|Berapa jari pada satu tangan?", "5", "4", "6", "10"],
    ["🐔|Ayam ada berapa kaki?", "2", "4", "6", "3"],
    ["🐄|Lembu ada berapa kaki?", "4", "2", "6", "3"]
  ], g: [
    () => { const n = r(1, 10), b = pick(BENDA); return q(`${b.repeat(n)}|Berapa ${NAMA[b]}?`, n, [1, 2]); },
    () => { const b = pick(BENDA), most = Math.random() < .5; return from(`Kumpulan manakah yang paling ${most ? "banyak" : "sedikit"}?`, most ? b.repeat(3) : b, [b.repeat(2), most ? b : b.repeat(3), "Semua sama"]); }
  ] },
  { t: "Tambah dan Tolak Mudah", q: [
    ["🍎 + 🍎|1 + 1 = ?", "2", "1", "3", "11"],
    ["2 + 3 = ?", "5", "4", "6", "23"],
    ["5 − 1 = ?", "4", "6", "5", "3"]
  ], g: [
    () => { const b = pick(BENDA), a = r(1, 4), c = r(1, 4); return q(`${b.repeat(a)} + ${b.repeat(c)}|Berapa semuanya?`, a + c, [1, 2]); },
    () => { const b = pick(BENDA), a = r(3, 7), c = r(1, a - 1); return q(`${b.repeat(a)}|Ada ${a}. Diambil ${c}. Tinggal berapa?`, a - c, [1, 2]); }
  ] },
  { t: "Bentuk", q: [
    ["🔺|Bentuk ini ialah…", "segi tiga", "bulatan", "segi empat sama", "bintang"],
    ["⚪|Bentuk ini ialah…", "bulatan", "segi tiga", "segi empat sama", "hati"],
    ["🟦|Bentuk ini ialah…", "segi empat sama", "bulatan", "segi tiga", "bintang"],
    ["⭐|Bentuk ini ialah…", "bintang", "bulatan", "segi tiga", "hati"],
    ["❤️|Bentuk ini ialah…", "hati", "bintang", "bulatan", "segi empat"],
    ["Segi tiga ada berapa sisi?", "3", "4", "5", "0"],
    ["Yang manakah berbentuk bulatan?", "🕐", "📐", "📦", "🔺"],
    ["⚽|Bola berbentuk…", "bulat", "segi tiga", "segi empat", "bintang"]
  ] },
  { t: "Banding dan Susun", q: [
    ["Yang manakah paling besar?", "🐘", "🐭", "🐱", "🐔"],
    ["Yang manakah paling kecil?", "🐜", "🐘", "🐄", "🐴"],
    ["Yang manakah paling tinggi?", "🦒", "🐶", "🐰", "🐱"],
    ["Yang manakah paling panjang?", "🐍", "🐜", "🐞", "🐌"],
    ["Yang manakah paling ringan?", "🪶", "🧱", "🍉", "📚"],
    ["Gajah lebih ___ daripada semut.", "besar", "kecil", "ringan", "pendek"]
  ] },
  { t: "Pola", q: [
    ["🔴🔵🔴🔵🔴 …|Apa seterusnya?", "🔵", "🔴", "🟢", "🟡"],
    ["⭐🌙⭐🌙⭐ …|Apa seterusnya?", "🌙", "⭐", "☀️", "☁️"],
    ["🍎🍎🍌🍎🍎 …|Apa seterusnya?", "🍌", "🍎", "🍇", "🍓"],
    ["1, 2, 3, 4, …|Nombor seterusnya?", "5", "6", "3", "1"],
    ["2, 4, 6, …|Nombor seterusnya?", "8", "7", "10", "5"]
  ] },
  { t: "Masa dan Wang", q: [
    ["🌅|Matahari terbit pada waktu…", "pagi", "malam", "petang", "tengah malam"],
    ["🌙|Bulan dan bintang kelihatan pada waktu…", "malam", "pagi", "tengah hari", "petang"],
    ["Hari selepas Isnin ialah…", "Selasa", "Ahad", "Rabu", "Jumaat"],
    ["Berapa hari dalam seminggu?", "7", "5", "10", "12"],
    ["Kita bersarapan pada waktu…", "pagi", "malam", "tengah malam", "petang"],
    ["💰|Kita menyimpan duit di dalam…", "tabung", "tong sampah", "kasut", "peti sejuk"],
    ["Duit syiling yang paling besar nilainya ialah…", "50 sen", "5 sen", "10 sen", "20 sen"]
  ] }
],

/* ======================= SAINS AWAL ======================= */
sains: [
  { t: "Deria Saya", q: [
    ["👀|Kita melihat dengan…", "mata", "telinga", "hidung", "lidah"],
    ["👂|Kita mendengar dengan…", "telinga", "mata", "mulut", "tangan"],
    ["👃|Kita menghidu bau dengan…", "hidung", "telinga", "mata", "kaki"],
    ["👅|Kita merasa makanan dengan…", "lidah", "hidung", "telinga", "mata"],
    ["✋|Kita menyentuh dengan…", "kulit / tangan", "telinga", "hidung", "mata"],
    ["🍬|Gula-gula rasanya…", "manis", "masin", "pahit", "masam"],
    ["🍋|Limau rasanya…", "masam", "manis", "masin", "pedas"],
    ["🧊|Ais terasa…", "sejuk", "panas", "pedas", "manis"]
  ] },
  { t: "Haiwan", q: [
    ["🐄|Lembu makan…", "rumput", "ikan", "daging", "roti"],
    ["🐦|Burung bergerak dengan…", "terbang", "berenang", "menjalar", "merangkak"],
    ["🐟|Ikan hidup di dalam…", "air", "pokok", "tanah", "awan"],
    ["🐍|Ular bergerak dengan…", "menjalar", "terbang", "melompat", "berlari"],
    ["🐸|Katak bergerak dengan…", "melompat", "terbang", "menjalar", "berenang sahaja"],
    ["🐔|Ayam membiak dengan…", "bertelur", "melahirkan anak", "tumbuh dari biji", "bertunas"],
    ["Yang manakah haiwan peliharaan?", "🐱", "🦁", "🐊", "🐍"],
    ["Yang manakah haiwan liar?", "🐯", "🐱", "🐔", "🐟"],
    ["🐘|Bahagian panjang pada gajah dipanggil…", "belalai", "ekor", "sayap", "sirip"]
  ] },
  { t: "Tumbuhan", q: [
    ["🌱|Biji benih akan tumbuh menjadi…", "anak pokok", "batu", "haiwan", "pasir"],
    ["Tumbuhan memerlukan ___ untuk hidup.", "air dan cahaya matahari", "gula-gula", "minyak", "plastik"],
    ["Bahagian pokok yang berada di dalam tanah ialah…", "akar", "daun", "bunga", "buah"],
    ["Daun biasanya berwarna…", "hijau", "biru", "ungu", "hitam"],
    ["🥕|Lobak merah yang kita makan ialah bahagian…", "akar", "daun", "bunga", "batang"],
    ["🍎|Epal ialah…", "buah", "daun", "akar", "batu"]
  ] },
  { t: "Cuaca", q: [
    ["☀️|Cuaca ini ialah…", "panas", "hujan", "berangin", "bersalji"],
    ["🌧️|Cuaca ini ialah…", "hujan", "panas", "bersalji", "berkabus"],
    ["⛈️|Apabila ada kilat, kita perlu…", "masuk ke dalam rumah", "bermain di padang", "berdiri bawah pokok", "berenang"],
    ["☂️|Ketika hujan, kita menggunakan…", "payung", "cermin mata hitam", "kipas", "topi keledar"],
    ["🌬️|Udara yang bergerak dipanggil…", "angin", "hujan", "awan", "salji"]
  ] },
  { t: "Benda di Sekeliling", q: [
    ["🧲|Magnet menarik benda yang diperbuat daripada…", "besi", "kayu", "kertas", "kain"],
    ["Yang manakah akan terapung di atas air?", "🦆 itik getah", "🪨 batu", "🔩 skru besi", "🪙 syiling"],
    ["🧽|Span boleh… air.", "menyerap", "menolak", "memanaskan", "membakar"],
    ["🧊|Ais yang dibiarkan di bawah matahari akan…", "cair", "membesar", "menjadi batu", "terbang"],
    ["🔦|Lampu suluh mengeluarkan…", "cahaya", "air", "angin", "bunyi sahaja"],
    ["🔔|Loceng menghasilkan…", "bunyi", "cahaya", "air", "bau"]
  ] },
  { t: "Siang dan Malam", q: [
    ["☀️|Matahari kelihatan pada waktu…", "siang", "malam", "tengah malam", "tidak pernah"],
    ["🌙|Bulan kelihatan pada waktu…", "malam", "tengah hari", "pagi sahaja", "tidak pernah"],
    ["⭐|Bintang kelihatan pada waktu…", "malam", "tengah hari", "pagi", "petang sahaja"],
    ["Kita tidak boleh memandang terus ke arah matahari kerana…", "boleh merosakkan mata", "matahari sejuk", "matahari kecil", "tiada sebab"]
  ] }
],

/* ======================= PENDIDIKAN ISLAM ======================= */
pi: [
  { t: "Akidah", q: [
    ["Tuhan kita ialah…", "Allah", "matahari", "bulan", "patung"],
    ["Allah itu…", "Esa (satu)", "dua", "tiga", "ramai"],
    ["Siapakah yang mencipta kita?", "Allah", "ibu", "doktor", "malaikat"],
    ["Nabi kita ialah…", "Nabi Muhammad SAW", "Nabi Adam a.s.", "Nabi Nuh a.s.", "Nabi Musa a.s."],
    ["Kitab suci umat Islam ialah…", "al-Quran", "buku cerita", "kamus", "majalah"],
    ["Rukun Islam ada…", "5", "6", "3", "10"],
    ["Rukun Iman ada…", "6", "5", "4", "3"]
  ] },
  { t: "Ibadah", q: [
    ["Sebelum solat, kita mesti mengambil…", "wuduk", "makan", "tidur", "mandi sungai"],
    ["Solat fardu sehari semalam ada ___ waktu.", "5", "3", "4", "7"],
    ["🕌|Tempat umat Islam bersolat ialah…", "masjid", "pasar", "sekolah", "padang"],
    ["Bulan umat Islam berpuasa ialah…", "Ramadan", "Syawal", "Muharam", "Rejab"],
    ["Ketika solat, kita menghadap ke arah…", "kiblat", "pintu", "tingkap", "matahari"],
    ["Hari Raya selepas berpuasa ialah Hari Raya…", "Aidilfitri", "Aidiladha", "Maulidur Rasul", "Awal Muharam"]
  ] },
  { t: "Doa dan Zikir Harian", q: [
    ["Sebelum makan, kita membaca…", "Bismillah", "Alhamdulillah", "Astaghfirullah", "Subhanallah"],
    ["Selepas makan, kita membaca…", "Alhamdulillah", "Bismillah", "Assalamualaikum", "Allahu Akbar"],
    ["Apabila bersin, kita mengucapkan…", "Alhamdulillah", "Bismillah", "Astaghfirullah", "Allahu Akbar"],
    ["Apabila melihat sesuatu yang cantik, kita mengucapkan…", "Subhanallah", "Astaghfirullah", "Innalillah", "Bismillah"],
    ["Apabila berjanji, kita mengucapkan…", "Insya-Allah", "Alhamdulillah", "Astaghfirullah", "Masya-Allah"],
    ["😴|Sebelum tidur, kita membaca…", "doa tidur", "doa makan", "doa naik kenderaan", "azan"]
  ] },
  { t: "Adab", q: [
    ["Apabila berjumpa kawan, kita memberi…", "salam", "jelingan", "ejekan", "tolakan"],
    ["Jawapan bagi \"Assalamualaikum\" ialah…", "Waalaikumussalam", "Alhamdulillah", "Bismillah", "Terima kasih"],
    ["🍽️|Kita makan menggunakan tangan…", "kanan", "kiri", "kedua-dua", "mana-mana"],
    ["Apabila ibu bapa bercakap, kita…", "mendengar dengan sopan", "menyampuk", "lari", "bermain"],
    ["Ketika masuk ke masjid, kita mendahulukan kaki…", "kanan", "kiri", "mana-mana", "kedua-dua serentak"],
    ["Kita minum sambil…", "duduk", "berlari", "melompat", "berbaring"]
  ] },
  { t: "Huruf Hijaiyah", q: [
    ["Huruf hijaiyah dibaca dari…", "kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"],
    ["Huruf hijaiyah yang pertama ialah…", "alif", "ba", "ta", "ya"]
  ], g: [
    () => { const [h, n] = pick(HIJAIYAH); return from(`${h}|Huruf ini ialah…`, n, HIJAIYAH.map(x => x[1]).filter(x => x !== n)); },
    () => { const [h, n] = pick(HIJAIYAH); return from(`Yang manakah huruf "${n}"?`, h, HIJAIYAH.map(x => x[0]).filter(x => x !== h)); }
  ] },
  { t: "Kisah Nabi", q: [
    ["Nabi yang pertama ialah Nabi…", "Adam a.s.", "Muhammad SAW", "Nuh a.s.", "Ibrahim a.s."],
    ["Nabi yang terakhir ialah Nabi…", "Muhammad SAW", "Adam a.s.", "Isa a.s.", "Musa a.s."],
    ["Nabi Muhammad SAW dilahirkan di…", "Makkah", "Madinah", "Mesir", "Malaysia"],
    ["Ibu Nabi Muhammad SAW bernama…", "Aminah", "Khadijah", "Fatimah", "Aisyah"],
    ["🚢|Nabi yang membina kapal besar ialah Nabi…", "Nuh a.s.", "Musa a.s.", "Adam a.s.", "Yunus a.s."],
    ["🐋|Nabi yang ditelan ikan besar ialah Nabi…", "Yunus a.s.", "Nuh a.s.", "Ibrahim a.s.", "Isa a.s."]
  ] }
],

/* ======================= DIRI DAN MASYARAKAT ======================= */
diri: [
  { t: "Diri Saya", q: [
    ["🦶|Kita berjalan menggunakan…", "kaki", "tangan", "kepala", "telinga"],
    ["✍️|Kita menulis menggunakan…", "tangan", "kaki", "hidung", "telinga"],
    ["🦷|Kita menggosok gigi sekurang-kurangnya…", "2 kali sehari", "sekali seminggu", "sebulan sekali", "tidak perlu"],
    ["Nama penuh kita ditulis pada…", "sijil kelahiran", "kotak kasut", "botol air", "pinggan"],
    ["😊|Wajah ini menunjukkan perasaan…", "gembira", "sedih", "marah", "takut"],
    ["😢|Wajah ini menunjukkan perasaan…", "sedih", "gembira", "marah", "mengantuk"],
    ["😠|Wajah ini menunjukkan perasaan…", "marah", "gembira", "mengantuk", "lapar"]
  ] },
  { t: "Keluarga Saya", q: [
    ["Ibu kepada ayah kita dipanggil…", "nenek", "kakak", "ibu saudara", "sepupu"],
    ["Ayah kepada ibu kita dipanggil…", "datuk", "abang", "bapa saudara", "adik"],
    ["Adik-beradik lelaki ayah dipanggil…", "bapa saudara (pak cik)", "datuk", "sepupu", "abang"],
    ["Anak lelaki yang lebih tua daripada kita dipanggil…", "abang", "adik", "datuk", "pak cik"],
    ["Kita perlu ___ ibu bapa.", "menyayangi dan mentaati", "melawan", "mengabaikan", "memarahi"],
    ["Membantu ibu mengemas rumah ialah sikap yang…", "baik", "buruk", "malas", "nakal"]
  ] },
  { t: "Kebersihan dan Kesihatan", q: [
    ["🧼|Sebelum makan, kita perlu…", "membasuh tangan", "bermain", "tidur", "menonton TV"],
    ["Makanan yang sihat ialah…", "🥦", "🍭", "🍟", "🥤"],
    ["Buah-buahan baik untuk…", "kesihatan", "membuang", "dimain", "dibaling"],
    ["🛁|Kita perlu mandi supaya badan…", "bersih", "kotor", "sakit", "berbau"],
    ["🤧|Ketika bersin, kita perlu…", "menutup mulut dan hidung", "bersin ke arah kawan", "menjerit", "berlari"],
    ["😴|Tidur awal membantu badan kita…", "cergas dan sihat", "lemah", "sakit", "malas"],
    ["Sampah perlu dibuang ke dalam…", "tong sampah", "longkang", "sungai", "laci meja"]
  ] },
  { t: "Keselamatan", q: [
    ["🚦|Lampu isyarat merah bermaksud…", "berhenti", "jalan", "berlari", "bersedia"],
    ["🚦|Lampu isyarat hijau bermaksud…", "boleh jalan", "berhenti", "berpatah balik", "duduk"],
    ["Kita melintas jalan di…", "lintasan belang (zebra)", "selekoh tajam", "tengah jalan raya", "belakang bas"],
    ["Jika orang asing mengajak ikut, kita perlu…", "menolak dan beritahu ibu bapa atau guru", "terus ikut", "ambil gula-gulanya", "pergi bersendirian"],
    ["🔥|Kita tidak boleh bermain dengan…", "mancis dan api", "buku", "bola", "pensel warna"],
    ["🔌|Kita tidak boleh menyentuh soket elektrik kerana…", "berbahaya", "kotor", "berat", "mahal"],
    ["Nombor telefon kecemasan di Malaysia ialah…", "999", "123", "555", "000"]
  ] },
  { t: "Pekerjaan", q: [
    ["👩‍🏫|Orang yang mengajar di sekolah ialah…", "guru", "doktor", "polis", "petani"],
    ["👨‍⚕️|Orang yang merawat orang sakit ialah…", "doktor", "guru", "bomba", "nelayan"],
    ["👮|Orang yang menjaga keselamatan dan menangkap pencuri ialah…", "polis", "posmen", "tukang masak", "petani"],
    ["🚒|Orang yang memadam kebakaran ialah…", "ahli bomba", "guru", "doktor", "nelayan"],
    ["👨‍🌾|Orang yang menanam padi dan sayur ialah…", "petani", "nelayan", "pilot", "doktor gigi"],
    ["🎣|Orang yang menangkap ikan di laut ialah…", "nelayan", "petani", "posmen", "jururawat"],
    ["👨‍🍳|Orang yang memasak di restoran ialah…", "tukang masak", "pilot", "guru", "bomba"]
  ] },
  { t: "Negaraku dan Perayaan", q: [
    ["Nama negara kita ialah…", "Malaysia", "Jepun", "Mesir", "Australia"],
    ["Bendera Malaysia dipanggil…", "Jalur Gemilang", "Sang Saka", "Merah Putih", "Bintang Kejora"],
    ["Lagu kebangsaan Malaysia ialah…", "Negaraku", "Jalur Gemilang", "Tanggal 31", "Rasa Sayang"],
    ["🌺|Bunga kebangsaan Malaysia ialah…", "bunga raya", "bunga mawar", "bunga orkid", "bunga matahari"],
    ["Hari Kebangsaan Malaysia disambut pada…", "31 Ogos", "1 Januari", "25 Disember", "1 Mei"],
    ["🧧|Angpau sinonim dengan perayaan…", "Tahun Baharu Cina", "Deepavali", "Hari Gawai", "Krismas"],
    ["🪔|Perayaan yang dikenali sebagai Pesta Cahaya ialah…", "Deepavali", "Tahun Baharu Cina", "Krismas", "Hari Raya"]
  ] },
  { t: "Sayangi Alam", q: [
    ["Kita boleh menjaga alam dengan…", "menanam pokok", "membuang sampah merata", "menebang semua pokok", "membakar sampah"],
    ["🚰|Selepas menggunakan air, kita perlu…", "menutup paip", "biarkan paip terbuka", "bermain air", "membazir"],
    ["💡|Apabila keluar dari bilik, kita perlu…", "menutup lampu", "biarkan lampu menyala", "membuka semua lampu", "memecahkan lampu"],
    ["Botol plastik terpakai boleh…", "dikitar semula", "dibuang ke sungai", "dibakar", "ditanam di taman"],
    ["Kita perlu ___ haiwan.", "menyayangi", "menyeksa", "membaling", "menakutkan"]
  ] }
]
};
})();
