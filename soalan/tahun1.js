/* =========================================================
   TAHUN 1 — Cerdik Ceria
   Bab Sains & Matematik ikut susunan buku teks KSSR.
   BM & BI disusun ikut topik kemahiran.
   Pendidikan Islam ikut bidang KSSR; Bahasa Arab ikut tema.

   Format soalan:
   ["Soalan", "Jawapan BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🐱|Soalan…"  → bahagian sebelum | dipaparkan BESAR.
   Jawapan betul SENTIASA di tempat kedua. Pilihan dikocok dalam app.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tahun 1 ---------- */
const SA = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "lapan", "sembilan"];
function sebut(n) {
  if (n === 100) return "seratus";
  if (n === 10) return "sepuluh";
  if (n === 11) return "sebelas";
  if (n < 10) return SA[n];
  if (n < 20) return SA[n - 10] + " belas";
  const p = Math.floor(n / 10), s = n % 10;
  return SA[p] + " puluh" + (s ? " " + SA[s] : "");
}
const BENDA = ["🍎", "🍌", "⭐", "🎈", "🐥", "🌸", "🍓", "🚗", "🐟", "🧁", "⚽", "🦋"];
const NAMA_BENDA = { "🍎": "epal", "🍌": "pisang", "⭐": "bintang", "🎈": "belon", "🐥": "anak ayam", "🌸": "bunga", "🍓": "strawberi", "🚗": "kereta", "🐟": "ikan", "🧁": "kek cawan", "⚽": "bola", "🦋": "rama-rama" };
const ORANG = ["Ali", "Siti", "Aiman", "Mei Ling", "Ravi", "Nurul", "Adam", "Aisyah"];
const HARI = ["Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu", "Ahad"];
const BULAN = ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"];
const JAM = h => String.fromCodePoint(0x1F550 + h - 1);   // 🕐 … 🕛
const sen = n => n + " sen";
const rm = n => "RM" + n;

SOALAN[1] = {

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Huruf dan Bunyi", q: [
    ["Yang manakah huruf vokal?", "e", "b", "k", "m"],
    ["Yang manakah huruf konsonan?", "t", "a", "i", "o"],
    ["Ada berapa huruf vokal?", "5", "3", "7", "26", "a, e, i, o, u"],
    ["Ada berapa huruf dalam abjad?", "26", "20", "24", "30"],
    ["🐟|Nama haiwan ini bermula dengan huruf…", "i", "a", "k", "s", "ikan"],
    ["🐔|Nama haiwan ini bermula dengan huruf…", "a", "b", "s", "k", "ayam"],
    ["🐐|Nama haiwan ini bermula dengan huruf…", "k", "g", "a", "t", "kambing"],
    ["🍌|Nama buah ini bermula dengan huruf…", "p", "b", "n", "s", "pisang"],
    ["🐘|Nama haiwan ini bermula dengan huruf…", "g", "j", "e", "h", "gajah"],
    ["🌙|Nama benda ini bermula dengan huruf…", "b", "m", "d", "l", "bulan"],
    ["Huruf selepas \"b\" ialah…", "c", "a", "d", "e"],
    ["Huruf sebelum \"e\" ialah…", "d", "f", "c", "a"],
    ["Huruf selepas \"m\" ialah…", "n", "l", "o", "w"],
    ["Huruf kecil bagi \"M\" ialah…", "m", "n", "w", "u"],
    ["Huruf besar bagi \"g\" ialah…", "G", "Q", "C", "J"],
    ["Huruf besar bagi \"r\" ialah…", "R", "P", "B", "K"],
    ["Perkataan \"bola\" bermula dengan huruf…", "b", "d", "p", "o"],
    ["Perkataan \"kasut\" berakhir dengan huruf…", "t", "k", "s", "u"]
  ]},
  { t: "Suku Kata dan Perkataan", q: [
    ["\"ba\" + \"ju\" menjadi…", "baju", "jaba", "buku", "bayu"],
    ["\"ka\" + \"ki\" menjadi…", "kaki", "kiki", "kaka", "kika"],
    ["\"ru\" + \"mah\" menjadi…", "rumah", "murah", "ramah", "rumaj"],
    ["\"me\" + \"ja\" menjadi…", "meja", "jame", "maja", "mija"],
    ["\"se\" + \"ko\" + \"lah\" menjadi…", "sekolah", "kolahse", "selaku", "sekola"],
    ["\"ke\" + \"re\" + \"ta\" menjadi…", "kereta", "ketera", "tareke", "kreta"],
    ["Berapakah suku kata dalam perkataan \"bola\"?", "2", "1", "3", "4", "bo-la"],
    ["Berapakah suku kata dalam perkataan \"kereta\"?", "3", "2", "4", "5", "ke-re-ta"],
    ["Berapakah suku kata dalam perkataan \"rama-rama\"?", "4", "2", "3", "5", "ra-ma-ra-ma"],
    ["Berapakah suku kata dalam perkataan \"pen\"?", "1", "2", "3", "0"],
    ["Suku kata pertama bagi \"meja\" ialah…", "me", "ja", "ma", "je"],
    ["Suku kata akhir bagi \"buku\" ialah…", "ku", "bu", "uk", "ka"],
    ["🐱|Susun suku kata \"cing\" dan \"ku\".", "kucing", "cingku", "kuncing", "kucin"],
    ["🦆|Susun suku kata \"tik\" dan \"i\".", "itik", "tiki", "itek", "tiik"],
    ["🐢|Susun suku kata \"nyu\" dan \"pe\".", "penyu", "nyupe", "penyo", "pinyu"],
    ["Ejaan yang betul ialah…", "sekolah", "sekola", "skolah", "sekoloh"],
    ["Ejaan yang betul ialah…", "kerusi", "krusi", "kerosi", "kerussi"],
    ["Ejaan yang betul ialah…", "pensel", "pencil", "pensil", "pnsel"]
  ]},
  { t: "Kosa Kata Bergambar", q: [
    ["🐱|Ini ialah…", "kucing", "anjing", "arnab", "tikus"],
    ["🐘|Ini ialah…", "gajah", "kuda", "lembu", "zirafah"],
    ["🐄|Ini ialah…", "lembu", "kambing", "kuda", "zirafah"],
    ["🍎|Ini ialah…", "epal", "oren", "tembikai", "anggur"],
    ["🍉|Ini ialah…", "tembikai", "betik", "nanas", "durian"],
    ["🍇|Ini ialah…", "anggur", "ceri", "epal", "limau"],
    ["🚗|Ini ialah…", "kereta", "bas", "basikal", "lori"],
    ["🚲|Ini ialah…", "basikal", "motosikal", "kereta", "kapal"],
    ["✈️|Ini ialah…", "kapal terbang", "kereta api", "kapal", "bas"],
    ["✏️|Ini ialah…", "pensel", "pembaris", "pemadam", "buku"],
    ["📚|Ini ialah…", "buku", "beg", "meja", "kerusi"],
    ["🌙|Ini ialah…", "bulan", "matahari", "bintang", "awan"],
    ["🌧️|Cuaca ini ialah…", "hujan", "panas", "berangin", "bersalji"],
    ["👟|Ini ialah…", "kasut", "stoking", "topi", "baju"],
    ["🏠|Ini ialah…", "rumah", "sekolah", "kedai", "masjid"],
    ["🦋|Ini ialah…", "rama-rama", "lebah", "burung", "semut"],
    ["Yang manakah gambar \"ikan\"?", "🐟", "🐦", "🐢", "🐸"],
    ["Yang manakah gambar \"bunga\"?", "🌸", "🌳", "🍄", "🌵"],
    ["Yang manakah gambar \"bola\"?", "⚽", "🎈", "🪁", "🧸"],
    ["Yang manakah gambar \"payung\"?", "☂️", "🎩", "👜", "🧢"]
  ]},
  { t: "Kata Nama", q: [
    ["Yang manakah kata nama?", "meja", "lari", "besar", "cantik"],
    ["Yang manakah kata nama?", "kucing", "makan", "merah", "tidur"],
    ["Yang manakah kata nama khas?", "Ali", "budak", "kucing", "kampung"],
    ["Yang manakah kata nama khas?", "Melaka", "bandar", "sungai", "sekolah"],
    ["Nama orang dan tempat dimulakan dengan huruf…", "besar", "kecil", "nombor", "simbol"],
    ["Tempat kita belajar ialah…", "sekolah", "hospital", "balai polis", "pasar"],
    ["Orang yang mengajar di sekolah ialah…", "guru", "doktor", "jururawat", "polis"],
    ["Orang yang merawat pesakit ialah…", "doktor", "guru", "bomba", "petani"],
    ["🚒|Kenderaan ini digunakan oleh…", "ahli bomba", "guru", "doktor", "nelayan"],
    ["👨‍🌾|Orang yang menanam padi dan sayur ialah…", "petani", "nelayan", "posmen", "tukang masak"],
    ["Ibu kepada ayah kita dipanggil…", "nenek", "ibu saudara", "kakak", "sepupu"],
    ["Ali ialah murid yang rajin. ___ suka membaca.", "Dia", "Mereka", "Kami", "Kita"],
    ["\"Saya\", \"kamu\" dan \"dia\" ialah kata…", "ganti nama diri", "kerja", "adjektif", "tanya"],
    ["Siti dan Mei Ling bermain. ___ kawan baik.", "Mereka", "Dia", "Saya", "Kamu"]
  ]},
  { t: "Kata Kerja dan Kata Adjektif", q: [
    ["Yang manakah kata kerja?", "makan", "meja", "merah", "pandai"],
    ["Yang manakah kata kerja?", "menulis", "pensel", "besar", "rumah"],
    ["🏃|Budak itu sedang…", "berlari", "tidur", "makan", "membaca"],
    ["🏊|Budak itu sedang…", "berenang", "berlari", "menari", "melompat"],
    ["😴|Adik sedang…", "tidur", "makan", "menangis", "bermain"],
    ["📖|Kakak sedang…", "membaca", "memasak", "menyapu", "berenang"],
    ["Yang manakah kata adjektif?", "cantik", "makan", "buku", "lari"],
    ["Lawan bagi \"panas\" ialah…", "sejuk", "besar", "basah", "terang"],
    ["Lawan bagi \"panjang\" ialah…", "pendek", "tinggi", "kecil", "nipis"],
    ["Lawan bagi \"cepat\" ialah…", "lambat", "laju", "kuat", "jauh"],
    ["Lawan bagi \"bersih\" ialah…", "kotor", "kemas", "cantik", "baru"],
    ["Lawan bagi \"gembira\" ialah…", "sedih", "suka", "riang", "seronok"],
    ["Lawan bagi \"buka\" ialah…", "tutup", "tarik", "masuk", "angkat"],
    ["🐘|Gajah ialah haiwan yang…", "besar", "kecil", "ringan", "pendek"],
    ["🍋|Buah limau rasanya…", "masam", "manis", "pahit", "masin"],
    ["🧊|Ais terasa…", "sejuk", "panas", "pedas", "manis"]
  ]},
  { t: "Ayat dan Tanda Baca", q: [
    ["Saya ___ air kerana dahaga.", "minum", "tidur", "tulis", "baca"],
    ["Adik ___ susu setiap pagi.", "minum", "pakai", "sapu", "tendang"],
    ["Ali ___ bola di padang.", "menendang", "menulis", "memasak", "menyapu"],
    ["Ibu ___ nasi di dapur.", "memasak", "menendang", "melukis", "berenang"],
    ["Tanda baca di akhir ayat penyata ialah…", ".", "?", "!", ","],
    ["Tanda baca di akhir ayat tanya ialah…", "?", ".", ",", "!"],
    ["___ nama kamu?", "Siapakah", "Bilakah", "Di manakah", "Berapakah"],
    ["___ kamu tinggal?", "Di manakah", "Siapakah", "Apakah", "Berapakah"],
    ["___ umur kamu?", "Berapakah", "Siapakah", "Di manakah", "Bagaimanakah"],
    ["Ayat yang betul ialah…", "Saya pergi ke sekolah.", "Sekolah saya ke pergi.", "Pergi saya sekolah ke.", "Ke sekolah pergi saya."],
    ["Ayat yang betul ialah…", "Kucing itu comel.", "Itu comel kucing.", "Comel itu kucing.", "Kucing itu itu comel."],
    ["Kami makan ___ meja makan.", "di", "ke", "dari", "kepada"],
    ["Ucapan apabila menerima hadiah ialah…", "Terima kasih", "Selamat tinggal", "Maaf", "Selamat pagi"],
    ["Ucapan apabila berjumpa guru waktu pagi ialah…", "Selamat pagi", "Selamat malam", "Selamat jalan", "Terima kasih"],
    ["Ucapan apabila kita terlanggar kawan ialah…", "Maaf", "Terima kasih", "Tahniah", "Selamat pagi"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Alphabet and Phonics", q: [
    ["Which letter comes after \"a\"?", "b", "c", "d", "z"],
    ["Which letter comes before \"d\"?", "c", "e", "b", "f"],
    ["🐝|\"bee\" begins with the letter…", "b", "d", "p", "e"],
    ["🐍|\"snake\" begins with the letter…", "s", "c", "n", "z"],
    ["🍎|\"apple\" begins with the letter…", "a", "e", "p", "o"],
    ["🦊|\"fox\" begins with the letter…", "f", "v", "x", "o"],
    ["🐶|\"dog\" begins with the letter…", "d", "b", "g", "o"],
    ["The capital letter for \"h\" is…", "H", "N", "K", "A"],
    ["The small letter for \"Q\" is…", "q", "p", "g", "d"],
    ["Which word rhymes with \"cat\"?", "hat", "dog", "cup", "pen"],
    ["Which word rhymes with \"sun\"?", "bun", "sit", "sad", "box"],
    ["Which word rhymes with \"pig\"?", "big", "pen", "top", "cup"],
    ["How many letters are in the word \"dog\"?", "3", "2", "4", "5"],
    ["Which one is a vowel?", "o", "t", "m", "s"]
  ]},
  { t: "Greetings and Me", q: [
    ["You meet your teacher in the morning. You say…", "Good morning", "Good night", "Goodbye", "Thank you"],
    ["Someone gives you a present. You say…", "Thank you", "Sorry", "Good night", "Hello"],
    ["You go to bed. You say…", "Good night", "Good morning", "Hello", "Thank you"],
    ["You leave your friend's house. You say…", "Goodbye", "Good morning", "Thank you", "Sorry"],
    ["\"What is your name?\" — \"___ name is Adam.\"", "My", "I", "Me", "Your"],
    ["\"How old are you?\" — \"I am ___.\"", "seven", "Adam", "fine", "happy"],
    ["\"How are you?\" — \"I am ___, thank you.\"", "fine", "seven", "Adam", "school"],
    ["👀|We see with our…", "eyes", "ears", "nose", "mouth"],
    ["👂|We hear with our…", "ears", "eyes", "hands", "feet"],
    ["👃|We smell with our…", "nose", "ears", "eyes", "legs"],
    ["✋|How many fingers are on one hand?", "five", "four", "six", "ten"],
    ["😊|This face is…", "happy", "sad", "angry", "sleepy"],
    ["😢|This face is…", "sad", "happy", "angry", "hungry"],
    ["😠|This face is…", "angry", "happy", "sleepy", "sad"]
  ]},
  { t: "Colours and Numbers", q: [
    ["🔴|What colour is this?", "red", "blue", "green", "yellow"],
    ["🟢|What colour is this?", "green", "red", "brown", "pink"],
    ["🟡|What colour is this?", "yellow", "orange", "purple", "black"],
    ["🔵|What colour is this?", "blue", "red", "white", "green"],
    ["🟣|What colour is this?", "purple", "pink", "blue", "brown"],
    ["🍊|What colour is an orange?", "orange", "blue", "purple", "black"],
    ["🍌|What colour is a ripe banana?", "yellow", "blue", "red", "pink"],
    ["🐸|What colour is the frog?", "green", "red", "purple", "white"],
    ["⭐⭐⭐|How many stars?", "three", "two", "four", "five"],
    ["🎈🎈🎈🎈🎈|How many balloons?", "five", "four", "six", "three"],
    ["🐥🐥🐥🐥🐥🐥🐥|How many chicks?", "seven", "six", "eight", "five"],
    ["Which number is \"eight\"?", "8", "6", "3", "9"],
    ["Which number is \"ten\"?", "10", "1", "12", "100"],
    ["What comes after \"six\"?", "seven", "five", "eight", "nine"],
    ["What comes before \"four\"?", "three", "five", "two", "six"]
  ]},
  { t: "Animals", q: [
    ["🐘|This is an…", "elephant", "tiger", "horse", "monkey"],
    ["🐒|This is a…", "monkey", "bear", "lion", "goat"],
    ["🐯|This is a…", "tiger", "cat", "lion", "dog"],
    ["🦁|This is a…", "lion", "tiger", "horse", "cow"],
    ["🐄|This is a…", "cow", "goat", "sheep", "horse"],
    ["🐢|This is a…", "turtle", "frog", "fish", "crab"],
    ["🐰|This is a…", "rabbit", "mouse", "cat", "bear"],
    ["🦆|This is a…", "duck", "chicken", "bird", "goose"],
    ["Which animal lives in water?", "fish", "rabbit", "goat", "chicken"],
    ["Which animal says \"moo\"?", "cow", "cat", "dog", "duck"],
    ["Which animal says \"quack\"?", "duck", "cow", "goat", "cat"],
    ["How many legs does a bird have?", "two", "four", "six", "eight"],
    ["Which animal has a long neck?", "giraffe", "pig", "cat", "rabbit"],
    ["Which picture is a \"dog\"?", "🐶", "🐱", "🐭", "🐷"],
    ["Which picture is a \"bird\"?", "🐦", "🐟", "🐌", "🐛"]
  ]},
  { t: "Food and Fruits", q: [
    ["🍞|This is…", "bread", "rice", "cake", "egg"],
    ["🥚|This is an…", "egg", "apple", "orange", "onion"],
    ["🍚|This is…", "rice", "bread", "noodles", "milk"],
    ["🥛|This is…", "milk", "water", "juice", "tea"],
    ["🍇|These are…", "grapes", "cherries", "apples", "bananas"],
    ["🍓|This is a…", "strawberry", "tomato", "cherry", "apple"],
    ["🍍|This is a…", "pineapple", "coconut", "mango", "banana"],
    ["🥕|This is a…", "carrot", "corn", "potato", "chilli"],
    ["Which one is a fruit?", "mango", "bread", "egg", "rice"],
    ["Which one is a drink?", "juice", "rice", "bread", "egg"],
    ["I am hungry. I want to…", "eat", "sleep", "run", "sing"],
    ["I am thirsty. I want some…", "water", "bread", "rice", "cake"],
    ["Which picture is a \"cake\"?", "🎂", "🍕", "🍔", "🍟"],
    ["Which picture is an \"apple\"?", "🍎", "🍊", "🍐", "🍑"]
  ]},
  { t: "Family and Home", q: [
    ["My father's wife is my…", "mother", "sister", "aunt", "grandmother"],
    ["My mother's mother is my…", "grandmother", "sister", "aunt", "cousin"],
    ["My mother's son is my…", "brother", "sister", "father", "uncle"],
    ["🛏️|This is a…", "bed", "table", "chair", "door"],
    ["🪑|This is a…", "chair", "bed", "table", "sofa"],
    ["🚪|This is a…", "door", "window", "wall", "roof"],
    ["Where do we cook?", "kitchen", "bedroom", "bathroom", "garden"],
    ["Where do we take a bath?", "bathroom", "kitchen", "living room", "garden"],
    ["Where do we sleep?", "bedroom", "kitchen", "garage", "garden"],
    ["Where do we park the car?", "garage", "bedroom", "kitchen", "bathroom"],
    ["🧸|This is a…", "teddy bear", "ball", "doll", "kite"],
    ["⚽|This is a…", "ball", "box", "bag", "kite"],
    ["🪁|This is a…", "kite", "ball", "plane", "bird"]
  ]},
  { t: "Grammar Fun", q: [
    ["I ___ happy.", "am", "is", "are", "be"],
    ["She ___ my friend.", "is", "am", "are", "be"],
    ["We ___ in Year 1.", "are", "is", "am", "be"],
    ["It ___ a cat.", "is", "am", "are", "be"],
    ["This is ___ egg.", "an", "a", "two", "many"],
    ["This is ___ ball.", "a", "an", "two", "many"],
    ["This is ___ umbrella.", "an", "a", "two", "many"],
    ["One dog, two ___.", "dogs", "dog", "doges", "dogz"],
    ["One book, three ___.", "books", "book", "bookes", "bookz"],
    ["This ___ my bag.", "is", "are", "am", "be"],
    ["I ___ a red pencil.", "have", "has", "is", "am"],
    ["___ is your name?", "What", "Who", "Where", "How"],
    ["Can you swim? Yes, I ___.", "can", "am", "is", "do"]
  ]}
],

/* ======================= MATEMATIK (bab buku teks) ======================= */
math: [
  { t: "Nombor Bulat hingga 100",
    q: [
      ["Nombor selepas 49 ialah…", "50", "48", "40", "59"],
      ["Nombor sebelum 70 ialah…", "69", "71", "60", "80"],
      ["\"seratus\" ditulis sebagai…", "100", "10", "1000", "110"],
      ["Nombor yang paling kecil ialah…", "0", "1", "10", "100"]
    ],
    g: [
      () => { const n = r(2, 10), b = pick(BENDA); return q(`${b.repeat(n)}|Berapa banyak ${NAMA_BENDA[b]}?`, n, [1, 2]); },
      () => { const n = r(11, 99); return from(`Nombor bagi \"${sebut(n)}\" ialah…`, String(n), [n + 1, n - 1, n + 10, n - 10, Number(String(n).split("").reverse().join(""))].filter(x => x > 0 && x <= 100 && x !== n).map(String)); },
      () => { const n = r(11, 99); const ws = [n + 1, n - 1, n + 10, n - 10, n + 2, n - 2, n - 11].filter(x => x > 0 && x <= 100 && x !== n).map(sebut); return from(`${n} disebut…`, sebut(n), ws); },
      () => { const n = r(1, 98); return q(`Nombor selepas ${n} ialah…`, n + 1, [1, 2, 10]); },
      () => { const n = r(2, 99); return q(`Nombor sebelum ${n} ialah…`, n - 1, [1, 2, 10]); },
      () => { const n = r(11, 99); const p = Math.floor(n / 10); return from(`Dalam nombor ${n}, digit ${p} bernilai…`, `${p} puluh`, [`${p} sa`, `${n % 10 || 1} puluh`, `${p}0 puluh`, `${p} ratus`].filter(x => x !== `${p} puluh`)); },
      () => { const s = new Set(); while (s.size < 4) s.add(r(1, 99)); const ns = [...s].sort((a, b) => b - a); return ["Nombor manakah yang paling besar?", ...ns.map(String), ""]; },
      () => { const s = new Set(); while (s.size < 4) s.add(r(1, 99)); const ns = [...s].sort((a, b) => a - b); return ["Nombor manakah yang paling kecil?", ...ns.map(String), ""]; },
      () => { const st = pick([1, 2, 5, 10]), a = r(1, 100 - st * 4); const seq = [a, a + st, a + 2 * st, a + 3 * st]; const hide = r(1, 2); const ans = seq[hide]; const show = seq.map((x, i) => i === hide ? "___" : x).join(", "); return q(`Lengkapkan pola nombor:\n${show}`, ans, [1, st, 2], false, `Tambah ${st} setiap kali.`); }
    ] },
  { t: "Operasi Asas",
    q: [
      ["Tanda \"+\" bermaksud…", "tambah", "tolak", "sama dengan", "darab"],
      ["Tanda \"−\" bermaksud…", "tolak", "tambah", "sama dengan", "bahagi"],
      ["0 + 7 = ?", "7", "0", "70", "8"],
      ["9 − 9 = ?", "0", "9", "18", "1"]
    ],
    g: [
      () => { const b = pick(BENDA), a = r(1, 5), c = r(1, 5); return q(`${b.repeat(a)} + ${b.repeat(c)}|Berapa semuanya?`, a + c, [1, 2]); },
      () => { const b = pick(BENDA), a = r(4, 9), c = r(1, a - 1); return q(`${b.repeat(a)}|Ada ${a}. Diambil ${c}. Tinggal berapa?`, a - c, [1, 2]); },
      () => { const a = r(1, 9), b = r(1, 9); return q(`${a} + ${b} = ?`, a + b, [1, 2, 10]); },
      () => { const a = r(10, 89), b = r(1, 99 - a); return q(`${a} + ${b} = ?`, a + b, [1, 2, 10]); },
      () => { const a = r(5, 18), b = r(1, a); return q(`${a} − ${b} = ?`, a - b, [1, 2, 10]); },
      () => { const a = r(20, 99), b = r(1, a - 1); return q(`${a} − ${b} = ?`, a - b, [1, 2, 10]); },
      () => { const n = pick(ORANG), b = pick(BENDA), a = r(2, 9), c = r(2, 9); return q(`${b}|${n} ada ${a} ${NAMA_BENDA[b]}. Ibu beri ${c} lagi. Berapakah jumlahnya?`, a + c, [1, 2]); },
      () => { const n = pick(ORANG), b = pick(BENDA), a = r(6, 15), c = r(1, a - 1); return q(`${b}|${n} ada ${a} ${NAMA_BENDA[b]}. ${n} beri ${c} kepada kawan. Berapakah baki?`, a - c, [1, 2]); },
      () => { const a = r(1, 50), b = r(1, 49); const s = a + b; return q(`${a} + ___ = ${s}`, b, [1, 2, 10]); }
    ] },
  { t: "Pecahan", q: [
    ["🟩⬜|Bahagian berwarna ialah…", "1/2", "1/4", "2/1", "1/1"],
    ["🟩⬜⬜⬜|Bahagian berwarna ialah…", "1/4", "1/2", "4/1", "3/4"],
    ["Separuh ditulis sebagai…", "1/2", "1/4", "2/1", "1/1"],
    ["Suku ditulis sebagai…", "1/4", "1/2", "4/1", "1/3"],
    ["1/2 dibaca sebagai…", "satu perdua", "satu perempat", "dua persatu", "satu dua"],
    ["1/4 dibaca sebagai…", "satu perempat", "satu perdua", "empat persatu", "satu empat"],
    ["🍕|Sebiji pizza dibahagi 2 sama besar. Setiap bahagian ialah…", "separuh", "suku", "satu", "dua"],
    ["🍉|Sebiji tembikai dipotong 4 sama besar. Setiap bahagian ialah…", "suku", "separuh", "satu", "empat"],
    ["🍰|Kek dibahagi 2 sama besar. Kamu makan 1 bahagian. Kamu makan…", "1/2", "1/4", "2/2", "2/1"],
    ["Dua bahagian separuh menjadi…", "satu (seluruh)", "suku", "separuh", "tiga"],
    ["Empat bahagian suku menjadi…", "satu (seluruh)", "separuh", "suku", "dua"],
    ["Yang manakah lebih besar?", "1/2", "1/4", "Sama besar", "Tidak dapat dibandingkan", "Separuh lebih besar daripada suku."],
    ["Untuk mendapat separuh, sesuatu benda dibahagi kepada ___ bahagian sama besar.", "2", "4", "3", "1"],
    ["Untuk mendapat suku, sesuatu benda dibahagi kepada ___ bahagian sama besar.", "4", "2", "3", "5"]
  ]},
  { t: "Wang",
    q: [
      ["RM1 = ___ sen", "100", "10", "50", "1000"],
      ["Duit syiling yang paling besar nilainya ialah…", "50 sen", "10 sen", "20 sen", "5 sen"],
      ["50 sen + 50 sen = ?", "RM1", "RM10", "100 RM", "50 sen"],
      ["💵|Wang kertas yang paling kecil nilainya ialah…", "RM1", "RM5", "RM10", "RM50"],
      ["Kita menyimpan duit di dalam…", "tabung", "tong sampah", "kasut", "peti sejuk"]
    ],
    g: [
      () => { const cs = [10, 20, 50]; const a = pick(cs), b = pick(cs); return q(`${sen(a)} + ${sen(b)} = ?`, a + b, [10, 20], false, "", sen); },
      () => { const n = r(2, 5), v = pick([10, 20]); return q(`🪙 ${n} keping duit syiling ${v} sen.\nBerapakah jumlahnya?`, n * v, [10, 20], false, "", sen); },
      () => { const ns = [1, 5, 10, 20, 50]; let a = pick(ns), b = pick(ns); if (a + b > 100) b = 1; return q(`💵|${rm(a)} + ${rm(b)} = ?`, a + b, [1, 5, 10], false, "", rm); },
      () => { const a = r(3, 9) * 10, b = r(1, a / 10 - 1) * 10; return q(`🍭|Sebatang aiskrim berharga ${sen(b)}. Kamu ada ${sen(a)}. Baki duit kamu?`, a - b, [10, 20], false, "", sen); },
      () => { const a = r(10, 50), b = r(1, 40); return q(`📒|Buku RM${b}, beg RM${a}. Berapakah jumlah harga?`, a + b, [1, 2, 10], false, "", rm); }
    ] },
  { t: "Masa dan Waktu",
    q: [
      ["Berapa hari dalam seminggu?", "7", "5", "10", "12"],
      ["Berapa bulan dalam setahun?", "12", "7", "10", "24"],
      ["🌅|Matahari terbit pada waktu…", "pagi", "malam", "petang", "tengah malam"],
      ["🌙|Bulan dan bintang kelihatan pada waktu…", "malam", "pagi", "tengah hari", "petang"],
      ["Kita bersarapan pada waktu…", "pagi", "malam", "petang", "tengah malam"],
      ["Bulan pertama dalam setahun ialah…", "Januari", "Disember", "Mac", "Jun"],
      ["Bulan terakhir dalam setahun ialah…", "Disember", "Januari", "November", "Oktober"],
      ["Hari cuti hujung minggu di kebanyakan negeri ialah…", "Sabtu dan Ahad", "Isnin dan Selasa", "Rabu dan Khamis", "Selasa dan Rabu"]
    ],
    g: [
      () => { const h = r(1, 12); const w = shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(x => x !== h)).slice(0, 3); return [`${JAM(h)}|Jam menunjukkan pukul berapa?`, `pukul ${h}`, ...w.map(x => `pukul ${x}`), ""]; },
      () => { const i = r(0, 6); return from(`Hari selepas ${HARI[i]} ialah…`, HARI[(i + 1) % 7], HARI); },
      () => { const i = r(0, 6); return from(`Hari sebelum ${HARI[i]} ialah…`, HARI[(i + 6) % 7], HARI); },
      () => { const i = r(0, 10); return from(`Bulan selepas ${BULAN[i]} ialah…`, BULAN[i + 1], BULAN); },
      () => { const i = r(0, 11); return [`${BULAN[i]} ialah bulan yang ke-…`, String(i + 1), ...shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(x => x !== i + 1)).slice(0, 3).map(String), ""]; }
    ] },
  { t: "Ukuran dan Sukatan",
    q: [
      ["Yang manakah paling berat?", "🐘", "🐭", "🐱", "🐔"],
      ["Yang manakah paling ringan?", "🪶", "🧱", "🍉", "📚"],
      ["Yang manakah paling tinggi?", "🦒", "🐶", "🐱", "🐰"],
      ["Yang manakah paling panjang?", "🐍", "🐜", "🐞", "🐌"],
      ["Bekas yang boleh mengisi paling banyak air ialah…", "🪣 baldi", "🥄 sudu", "🥛 gelas", "☕ cawan"],
      ["Kita boleh mengukur panjang meja menggunakan…", "jengkal", "jam", "duit syiling", "termometer"],
      ["Batang pensel lebih ___ daripada batang penyapu.", "pendek", "panjang", "tinggi", "berat"],
      ["Bola sepak lebih ___ daripada bola pingpong.", "berat", "ringan", "kecil", "nipis"],
      ["Untuk menimbang berat, kita menggunakan…", "penimbang", "pembaris", "jam", "gelas"]
    ],
    g: [
      () => { const a = r(5, 15), b = r(2, a - 1); return q(`📏|Pita merah panjangnya ${a} klip kertas. Pita biru ${b} klip kertas. Berapakah beza panjangnya?`, a - b, [1, 2], false, "", n => n + " klip"); },
      () => { const a = r(2, 9), b = r(2, 9); return q(`🥛|Bekas A boleh diisi ${a} gelas air. Bekas B boleh diisi ${b} gelas air. Jumlah air?`, a + b, [1, 2], false, "", n => n + " gelas"); },
      () => { const a = r(3, 9); let b = r(3, 9); while (b === a) b = r(3, 9); const big = Math.max(a, b); return [`✏️ Pensel A = ${a} kiub\n✏️ Pensel B = ${b} kiub|Pensel manakah lebih panjang?`, big === a ? "Pensel A" : "Pensel B", big === a ? "Pensel B" : "Pensel A", "Sama panjang", "Tidak dapat diukur", ""]; }
    ] },
  { t: "Ruang", q: [
    ["🔺|Bentuk ini ialah…", "segi tiga", "segi empat sama", "bulatan", "segi empat tepat"],
    ["🟦|Bentuk ini ialah…", "segi empat sama", "segi tiga", "bulatan", "bintang"],
    ["⚪|Bentuk ini ialah…", "bulatan", "segi tiga", "segi empat sama", "kon"],
    ["⚽|Bentuk bola ini ialah…", "sfera", "kubus", "kon", "silinder"],
    ["🎲|Bentuk dadu ini ialah…", "kubus", "sfera", "kon", "silinder"],
    ["🍦|Bentuk kon aiskrim ini ialah…", "kon", "sfera", "kubus", "kuboid"],
    ["🥫|Bentuk tin ini ialah…", "silinder", "kubus", "kon", "sfera"],
    ["📦|Bentuk kotak ini ialah…", "kuboid", "sfera", "kon", "silinder"],
    ["Segi tiga mempunyai ___ sisi.", "3", "4", "5", "0"],
    ["Segi empat sama mempunyai ___ sisi.", "4", "3", "5", "6"],
    ["Bulatan mempunyai ___ bucu.", "0", "1", "2", "4"],
    ["Bentuk yang boleh bergolek ialah…", "sfera", "kubus", "kuboid", "piramid"],
    ["Kubus mempunyai ___ permukaan rata.", "6", "4", "8", "12"],
    ["Yang manakah berbentuk bulatan?", "🕐", "📐", "📦", "🔺"],
    ["Yang manakah berbentuk sfera?", "🏀", "📦", "🎲", "🥫"]
  ]},
  { t: "Pengurusan Data",
    q: [
      ["Piktograf menggunakan ___ untuk menunjukkan maklumat.", "gambar", "huruf", "bunyi", "warna sahaja"],
      ["Data boleh dikumpul dengan cara…", "mengira dan mencatat", "tidur", "berlari", "menyanyi"]
    ],
    g: [
      () => {
        const items = shuffle(["🍎", "🍌", "🍇", "🍊", "🍓"]).slice(0, 4);
        const counts = shuffle([1, 2, 3, 4, 5, 6, 7]).slice(0, 4);
        const chart = items.map((e, i) => e.repeat(counts[i])).join("\n");
        const t = r(0, 2);
        if (t === 0) { const m = counts.indexOf(Math.max(...counts)); return [`${chart}|Buah manakah paling banyak?`, items[m], ...items.filter((_, i) => i !== m), ""]; }
        if (t === 1) { const m = counts.indexOf(Math.min(...counts)); return [`${chart}|Buah manakah paling sedikit?`, items[m], ...items.filter((_, i) => i !== m), ""]; }
        const k = r(0, 3); return q(`${chart}|Berapakah bilangan ${items[k]}?`, counts[k], [1, 2]);
      },
      () => {
        const items = shuffle(["🐱", "🐶", "🐰", "🐟"]).slice(0, 3);
        const counts = shuffle([2, 3, 4, 5, 6]).slice(0, 3);
        const chart = items.map((e, i) => e.repeat(counts[i])).join("\n");
        const total = counts.reduce((a, b) => a + b, 0);
        return Math.random() < 0.5
          ? q(`${chart}|Haiwan peliharaan murid kelas 1 Bestari. Berapakah jumlah semua haiwan?`, total, [1, 2, 3])
          : q(`${chart}|Berapakah beza bilangan ${items[0]} dan ${items[1]}?`, Math.abs(counts[0] - counts[1]), [1, 2]);
      }
    ] }
],

/* ======================= SAINS (bab buku teks) ======================= */
sains: [
  { t: "Kemahiran Saintifik", q: [
    ["Kita memerhati menggunakan…", "deria", "rambut", "kuku", "baju"],
    ["Berapakah deria yang ada pada manusia?", "5", "3", "4", "6"],
    ["🔍|Alat ini dipanggil…", "kanta pembesar", "teropong", "pembaris", "jam"],
    ["Kanta pembesar digunakan untuk…", "melihat benda kecil dengan jelas", "mengukur panjang", "mendengar bunyi", "menimbang berat"],
    ["Mengumpulkan benda mengikut ciri yang sama dipanggil…", "mengelas", "memerhati", "mengukur", "meramal"],
    ["🍎🍌🍇🚗|Benda yang tidak sama kumpulan ialah…", "🚗", "🍎", "🍌", "🍇"],
    ["🐱🐶🐰🌳|Yang manakah bukan haiwan?", "🌳", "🐱", "🐶", "🐰"],
    ["Membuat jangkaan tentang apa yang akan berlaku dipanggil…", "meramal", "mengukur", "mengelas", "melukis"],
    ["Kita menggunakan ___ untuk mengukur panjang meja.", "pembaris", "termometer", "jam", "penimbang"],
    ["Memberitahu orang lain apa yang kita dapati dipanggil…", "berkomunikasi", "mengelas", "meramal", "mengukur"]
  ]},
  { t: "Peraturan Bilik Sains", q: [
    ["Sebelum masuk ke bilik sains, kita perlu…", "menunggu kebenaran guru", "berlari masuk", "makan dahulu", "bermain"],
    ["Di dalam bilik sains kita tidak boleh…", "makan dan minum", "mendengar arahan guru", "duduk dengan tertib", "menjaga kebersihan"],
    ["Jika alat kaca pecah, kita perlu…", "memberitahu guru", "mengutipnya dengan tangan", "menyembunyikannya", "membiarkannya"],
    ["Selepas menjalankan aktiviti, kita perlu…", "membasuh tangan", "terus makan", "berlari keluar", "meninggalkan bahan bersepah"],
    ["Bahan di bilik sains tidak boleh…", "dirasa tanpa kebenaran guru", "diperhati", "disimpan dengan kemas", "dilabel"],
    ["Selepas digunakan, radas perlu…", "dibersihkan dan disimpan semula", "dibuang", "dibawa pulang", "dibiarkan di atas meja"],
    ["Sampah di bilik sains perlu dibuang ke dalam…", "tong sampah", "sinki", "laci meja", "beg sekolah"],
    ["Sikap yang betul di dalam bilik sains ialah…", "mendengar arahan guru", "bermain kejar-kejar", "menjerit", "menolak kawan"]
  ]},
  { t: "Benda Hidup dan Benda Bukan Hidup", q: [
    ["Yang manakah benda hidup?", "🐟", "🪨", "🚗", "⚽"],
    ["Yang manakah benda hidup?", "🌻", "🧸", "✏️", "🪑"],
    ["Yang manakah benda bukan hidup?", "🪑", "🐶", "🌻", "🐦"],
    ["Benda hidup memerlukan…", "makanan, air dan udara", "bateri", "minyak", "cat"],
    ["Benda hidup boleh ___ tetapi batu tidak boleh.", "membesar", "jatuh", "basah", "pecah"],
    ["Ciri benda hidup ialah…", "boleh membiak", "tidak bergerak", "tidak bernafas", "tidak membesar"],
    ["Kucing membiak dengan…", "melahirkan anak", "bertelur", "menghasilkan biji benih", "bertunas"],
    ["Ayam membiak dengan…", "bertelur", "melahirkan anak", "menghasilkan biji benih", "bertunas"],
    ["Pokok mangga membiak melalui…", "biji benih", "telur", "melahirkan anak", "bateri"],
    ["🚗|Kereta mainan bergerak kerana…", "ada bateri", "ia benda hidup", "ia makan", "ia bernafas"],
    ["Manusia, haiwan dan tumbuhan ialah…", "benda hidup", "benda bukan hidup", "mainan", "batu"]
  ]},
  { t: "Manusia", q: [
    ["👀|Organ deria ini digunakan untuk…", "melihat", "mendengar", "menghidu", "merasa"],
    ["👂|Organ deria ini digunakan untuk…", "mendengar", "melihat", "merasa", "menyentuh"],
    ["👃|Organ deria ini digunakan untuk…", "menghidu", "merasa", "melihat", "mendengar"],
    ["👅|Organ deria ini digunakan untuk…", "merasa", "menghidu", "melihat", "mendengar"],
    ["✋|Kulit digunakan untuk…", "menyentuh", "melihat", "merasa", "menghidu"],
    ["Kita dapat merasa gula itu manis menggunakan…", "lidah", "mata", "telinga", "kulit"],
    ["🧊|Kita tahu ais itu sejuk menggunakan…", "kulit", "hidung", "telinga", "mata"],
    ["🌹|Kita dapat menghidu bau bunga menggunakan…", "hidung", "lidah", "telinga", "mata"],
    ["🔔|Bunyi loceng dapat dikesan oleh…", "telinga", "mata", "lidah", "hidung"],
    ["🎨|Kita melihat warna-warni lukisan menggunakan…", "mata", "telinga", "hidung", "kulit"],
    ["Cara menjaga mata ialah…", "tidak menonton TV terlalu dekat", "menggosok mata dengan kuat", "merenung matahari", "membaca dalam gelap"],
    ["Cara menjaga telinga ialah…", "tidak mendengar bunyi yang terlalu kuat", "memasukkan pensel ke dalam telinga", "menjerit di telinga kawan", "tidak membersihkannya"],
    ["Orang yang tidak dapat melihat membaca menggunakan…", "tulisan Braille", "cermin mata hitam", "radio", "teropong"]
  ]},
  { t: "Haiwan", q: [
    ["🐄|Lembu memakan…", "rumput", "daging", "ikan", "serangga"],
    ["🐯|Harimau memakan…", "daging", "rumput", "daun", "buah"],
    ["Haiwan yang mempunyai bulu pelepah ialah…", "🐦", "🐟", "🐱", "🐸"],
    ["Haiwan yang badannya bersisik ialah…", "🐟", "🐦", "🐱", "🐒"],
    ["Haiwan yang mempunyai cangkerang ialah…", "🐌", "🐶", "🐦", "🐒"],
    ["Haiwan yang mempunyai sayap ialah…", "🦋", "🐟", "🐍", "🐢"],
    ["🐍|Ular bergerak dengan cara…", "menjalar", "terbang", "melompat", "berjalan"],
    ["🐸|Katak bergerak di darat dengan cara…", "melompat", "terbang", "menjalar", "merangkak"],
    ["🐟|Ikan bergerak dengan cara…", "berenang", "melompat", "terbang", "menjalar"],
    ["🐦|Burung bergerak di udara dengan cara…", "terbang", "menjalar", "berenang", "merangkak"],
    ["Haiwan yang mempunyai 8 kaki ialah…", "🕷️", "🐜", "🐔", "🐄"],
    ["Haiwan yang mempunyai 2 kaki ialah…", "🐔", "🐄", "🐱", "🕷️"],
    ["Haiwan yang hidup di dalam air ialah…", "🐟", "🐐", "🐔", "🐱"],
    ["🐰|Bahagian badan arnab yang panjang ialah…", "telinga", "ekor", "sayap", "sirip"],
    ["🐘|Bahagian badan gajah yang panjang ialah…", "belalai", "ekor", "sayap", "sirip"]
  ]},
  { t: "Tumbuhan", q: [
    ["Bahagian tumbuhan yang menyerap air ialah…", "akar", "daun", "bunga", "buah"],
    ["Bahagian tumbuhan yang biasanya berwarna hijau ialah…", "daun", "akar", "bunga", "biji"],
    ["🌻|Bahagian tumbuhan yang berwarna kuning ini ialah…", "bunga", "akar", "batang", "daun"],
    ["Bahagian tumbuhan yang memegang daun dan bunga ialah…", "batang", "akar", "biji", "buah"],
    ["🌱|Biji benih boleh tumbuh menjadi…", "anak pokok", "batu", "haiwan", "pasir"],
    ["Tumbuhan yang berbunga ialah…", "pokok mangga", "paku pakis", "lumut", "pokok pain"],
    ["Yang manakah tumbuhan tidak berbunga?", "paku pakis", "pokok mangga", "pokok bunga raya", "pokok padi"],
    ["Tumbuhan memerlukan ___ untuk hidup.", "air, udara dan cahaya matahari", "garam", "gula", "minyak"],
    ["🥕|Bahagian lobak merah yang kita makan ialah…", "akar", "daun", "bunga", "buah"],
    ["🌴|Pokok kelapa mempunyai batang yang…", "tinggi dan tidak bercabang", "pendek dan berduri", "lembut dan menjalar", "berwarna merah"],
    ["🪷|Tumbuhan yang hidup di dalam air ialah…", "teratai", "rambutan", "kelapa", "mangga"],
    ["🌵|Kaktus mempunyai…", "duri", "bulu", "sisik", "sayap"]
  ]},
  { t: "Magnet", q: [
    ["🧲|Magnet menarik objek yang diperbuat daripada…", "besi", "kayu", "plastik", "kertas"],
    ["Yang manakah ditarik oleh magnet?", "paku besi", "kertas", "span", "pemadam getah"],
    ["Yang manakah tidak ditarik oleh magnet?", "pemadam getah", "paku besi", "pin besi", "skru besi"],
    ["Bahagian magnet yang paling kuat ialah…", "kedua-dua hujung (kutub)", "bahagian tengah", "semua bahagian sama", "tiada"],
    ["Hujung magnet dipanggil…", "kutub", "sirip", "bucu", "pangkal"],
    ["Kutub utara magnet dilabel dengan huruf…", "U", "S", "M", "K"],
    ["Kutub selatan magnet dilabel dengan huruf…", "S", "U", "M", "T"],
    ["Contoh bentuk magnet ialah…", "magnet ladam", "magnet bintang", "magnet hati", "magnet segi lima"],
    ["Magnet sering digunakan pada…", "pintu peti sejuk", "pinggan kaca", "baju kain", "pensel kayu"]
  ]},
  { t: "Penyerapan", q: [
    ["Bahan yang boleh menyerap air ialah…", "tuala", "plastik", "kaca", "besi"],
    ["Bahan yang tidak menyerap air ialah…", "beg plastik", "tisu", "kain", "span"],
    ["🧽|Span sesuai untuk mengelap kerana ia…", "menyerap air", "keras", "berat", "berkilat"],
    ["🧥|Baju hujan diperbuat daripada bahan yang…", "tidak menyerap air", "menyerap air", "mudah koyak", "berat"],
    ["Tuala mandi diperbuat daripada bahan yang…", "menyerap air", "tidak menyerap air", "keras", "lut sinar"],
    ["Bahan manakah paling banyak menyerap air?", "span", "plastik", "duit syiling", "sudu besi"],
    ["Lampin bayi diperbuat daripada bahan yang…", "menyerap air", "kalis air sahaja", "keras", "licin"],
    ["☂️|Payung diperbuat daripada bahan yang…", "kalis air", "menyerap air", "mudah larut", "berat"],
    ["Tisu digunakan untuk mengelap tumpahan air kerana tisu…", "menyerap air", "kalis air", "berkilat", "keras"]
  ]},
  { t: "Bumi", q: [
    ["🌍|Permukaan Bumi terdiri daripada…", "tanah dan air", "plastik", "kertas", "kaca"],
    ["Bahagian permukaan Bumi yang paling luas ialah…", "air (laut)", "tanah", "gunung", "bandar"],
    ["Contoh sumber air ialah…", "sungai", "jalan raya", "bukit", "padang"],
    ["🌊|Air laut rasanya…", "masin", "manis", "masam", "pahit"],
    ["⛰️|Ini ialah…", "gunung", "sungai", "laut", "tasik"],
    ["Tanah yang sesuai untuk menanam pokok ialah…", "tanah kebun", "pasir pantai", "batu", "simen"],
    ["🏖️|Pasir banyak ditemui di…", "pantai", "awan", "pokok", "bilik tidur"],
    ["🏺|Tanah liat sesuai untuk membuat…", "pasu", "kertas", "kain", "plastik"],
    ["Kita perlu menjaga sungai dengan…", "tidak membuang sampah ke dalamnya", "membuang sampah ke dalamnya", "menebang semua pokok di tebingnya", "membuang minyak ke dalamnya"]
  ]},
  { t: "Asas Binaan", q: [
    ["🧱|Blok binaan boleh disambung untuk membina…", "model", "makanan", "air", "bunyi"],
    ["Sebelum membina model, kita perlu…", "merancang", "merosakkan bahan", "membuang bahan", "tidur"],
    ["Lakaran ialah…", "lukisan ringkas sebelum membina", "bahan binaan", "alat pemotong", "sejenis gam"],
    ["Selepas selesai membina, komponen binaan perlu…", "disimpan semula dengan kemas", "dibuang", "dipijak", "dibiarkan bersepah"],
    ["Model rumah boleh dibina menggunakan…", "blok binaan", "air", "angin", "cahaya"],
    ["Selepas membina, kita boleh ___ hasil binaan kepada kawan.", "menerangkan", "menyorokkan", "memecahkan", "membuang"],
    ["Ketika membina model, kita perlu ___ dengan kawan.", "bekerjasama", "bergaduh", "berebut", "menjerit"]
  ]}
],

sejarah: []
};

/* ======================= PENDIDIKAN ISLAM TAHUN 1 (ikut bidang KSSR) ======================= */
const HIJAIYAH = [["ا","alif"],["ب","ba"],["ت","ta"],["ث","tha"],["ج","jim"],["ح","ha (ح)"],["خ","kha"],["د","dal"],["ذ","zal"],["ر","ra"],["ز","zai"],["س","sin"],["ش","syin"],["ص","sod"],["ض","dhod"],["ط","to"],["ظ","zo"],["ع","ain"],["غ","ghain"],["ف","fa"],["ق","qaf"],["ك","kaf"],["ل","lam"],["م","mim"],["ن","nun"],["و","wau"],["ه","ha (ه)"],["ي","ya"]];
const BUNYI = [["ب","b"],["ت","t"],["ج","j"],["د","d"],["ر","r"],["س","s"],["ف","f"],["ك","k"],["ل","l"],["م","m"],["ن","n"]];
const BARIS = [["َ","a","fathah"],["ِ","i","kasrah"],["ُ","u","dhammah"]];
SOALAN[1].pi = [
  { t: "Al-Quran (Huruf Hijaiyah)",
    q: [
      ["Baris di atas huruf dipanggil…", "fathah", "kasrah", "dhammah", "sukun"],
      ["Baris di bawah huruf dipanggil…", "kasrah", "fathah", "dhammah", "tanwin"],
      ["Baris depan dipanggil…", "dhammah", "fathah", "kasrah", "sabdu"],
      ["Huruf hijaiyah dibaca dari…", "kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"],
      ["Surah al-Fatihah mengandungi ___ ayat.", "7", "5", "4", "6"],
      ["Surah yang wajib dibaca dalam setiap rakaat solat ialah…", "al-Fatihah", "al-Ikhlas", "an-Nas", "al-Kauthar"],
      ["Sebelum membaca al-Quran, kita perlu…", "berwuduk", "makan", "tidur", "bermain"],
      ["Kitab suci umat Islam ialah…", "al-Quran", "buku cerita", "kamus", "majalah"]
    ],
    g: [
      () => { const [h, n] = pick(HIJAIYAH); return from(`${h}|Huruf hijaiyah ini ialah…`, n, HIJAIYAH.map(x => x[1])); },
      () => { const [h, n] = pick(HIJAIYAH); return from(`Yang manakah huruf \"${n}\"?`, h, HIJAIYAH.map(x => x[0])); },
      () => { const [h, b] = pick(BUNYI), [bs, v] = pick(BARIS); const right = b + v; const ws = BARIS.filter(x => x[1] !== v).map(x => b + x[1]).concat(BUNYI.filter(x => x[1] !== b).map(x => x[1] + v)); return from(`${h}${bs}|Huruf berbaris ini dibaca…`, right, ws); }
    ] },
  { t: "Akidah", q: [
    ["Tuhan kita ialah…", "Allah", "matahari", "bulan", "patung"],
    ["Allah itu…", "Esa (satu)", "dua", "tiga", "ramai"],
    ["Siapakah yang mencipta langit dan bumi?", "Allah", "manusia", "malaikat", "haiwan"],
    ["Rukun Iman ada ___ perkara.", "6", "5", "4", "3"],
    ["Rukun Islam ada ___ perkara.", "5", "6", "3", "7"],
    ["Rukun Islam yang pertama ialah…", "mengucap dua kalimah syahadah", "berpuasa", "menunaikan haji", "mengeluarkan zakat"],
    ["Rukun Islam yang kedua ialah…", "mendirikan solat", "berpuasa", "mengeluarkan zakat", "menunaikan haji"],
    ["Nabi kita ialah…", "Nabi Muhammad SAW", "Nabi Adam a.s.", "Nabi Musa a.s.", "Nabi Isa a.s."],
    ["Agama kita ialah…", "Islam", "agama datuk", "agama rakan", "tiada"],
    ["Allah memberi kita mata untuk…", "melihat", "mendengar", "makan", "berjalan"],
    ["Kita wajib bersyukur kepada…", "Allah", "kawan", "kucing", "guru sahaja"],
    ["Ucapan memuji Allah ialah…", "Alhamdulillah", "Astaghfirullah", "Assalamualaikum", "Insya-Allah"]
  ]},
  { t: "Ibadah", q: [
    ["Sebelum solat, kita perlu mengambil…", "wuduk", "makan", "mandi sungai", "tidur"],
    ["Wuduk dimulakan dengan…", "niat", "membasuh kaki", "menyapu kepala", "berkumur"],
    ["Antara anggota wuduk yang wajib dibasuh ialah…", "muka", "perut", "belakang", "rambut keseluruhan"],
    ["Solat fardu sehari semalam ada ___ waktu.", "5", "3", "4", "7"],
    ["Solat fardu yang dilakukan pada waktu pagi ialah…", "Subuh", "Zohor", "Asar", "Isyak"],
    ["Solat fardu selepas matahari terbenam ialah…", "Maghrib", "Subuh", "Zohor", "Asar"],
    ["Solat fardu yang terakhir pada waktu malam ialah…", "Isyak", "Maghrib", "Asar", "Subuh"],
    ["Ketika solat, kita menghadap ke arah…", "kiblat", "pintu", "tingkap", "matahari"],
    ["🕌|Tempat umat Islam bersolat beramai-ramai ialah…", "masjid", "pasar", "sekolah", "padang"],
    ["Selepas membuang air, kita perlu…", "beristinjak (membersihkan diri)", "terus keluar", "bermain", "makan"],
    ["Air yang boleh digunakan untuk berwuduk ialah air…", "bersih (mutlak)", "kotor", "teh", "sirap"],
    ["Bulan umat Islam berpuasa ialah…", "Ramadan", "Syawal", "Muharam", "Zulhijah"]
  ]},
  { t: "Sirah", q: [
    ["Nabi yang pertama ialah Nabi…", "Adam a.s.", "Muhammad SAW", "Nuh a.s.", "Ibrahim a.s."],
    ["Nabi yang terakhir ialah Nabi…", "Muhammad SAW", "Adam a.s.", "Isa a.s.", "Musa a.s."],
    ["Nabi Muhammad SAW dilahirkan di…", "Makkah", "Madinah", "Mesir", "Malaysia"],
    ["Ibu Nabi Muhammad SAW bernama…", "Aminah", "Khadijah", "Fatimah", "Aisyah"],
    ["Bapa Nabi Muhammad SAW bernama…", "Abdullah", "Abu Talib", "Abu Bakar", "Umar"],
    ["Nabi Muhammad SAW digelar al-Amin kerana baginda sangat…", "jujur dan amanah", "kaya", "tinggi", "garang"],
    ["Apabila menyebut nama Nabi Muhammad, kita ucapkan…", "Sallallahu 'alaihi wasallam", "Alhamdulillah", "Bismillah", "Assalamualaikum"]
  ]},
  { t: "Adab", q: [
    ["Sebelum makan, kita membaca…", "Bismillah", "Alhamdulillah", "Astaghfirullah", "Subhanallah"],
    ["Selepas makan, kita membaca…", "Alhamdulillah", "Bismillah", "Assalamualaikum", "Allahu Akbar"],
    ["🍽️|Kita makan menggunakan tangan…", "kanan", "kiri", "kedua-dua", "mana-mana"],
    ["Apabila berjumpa kawan, kita memberi…", "salam", "tumbukan", "jelingan", "ejekan"],
    ["Jawapan kepada \"Assalamualaikum\" ialah…", "Waalaikumussalam", "Alhamdulillah", "Bismillah", "Terima kasih"],
    ["Sebelum masuk rumah, kita…", "memberi salam", "menjerit", "mengetuk dengan kuat", "terus berlari masuk"],
    ["Apabila ibu bapa bercakap, kita…", "mendengar dengan sopan", "menyampuk", "bermain telefon", "lari"],
    ["😴|Sebelum tidur, kita disunatkan…", "membaca doa tidur", "makan banyak", "bermain", "menonton TV"],
    ["Apabila bersin, kita mengucapkan…", "Alhamdulillah", "Bismillah", "Astaghfirullah", "Allahu Akbar"],
    ["Selepas bermain, kita perlu…", "mengemas mainan", "membiarkan bersepah", "membuang mainan", "menyorok mainan"]
  ]},
  { t: "Jawi (Huruf Tunggal)",
    q: [
      ["Tulisan Jawi ditulis dari…", "kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"],
      ["چ|Huruf Jawi ini ialah…", "ca", "ja", "nga", "pa"],
      ["ڠ|Huruf Jawi ini ialah…", "nga", "nya", "ca", "ga"],
      ["ڤ|Huruf Jawi ini ialah…", "pa", "fa", "qaf", "wau"],
      ["ڽ|Huruf Jawi ini ialah…", "nya", "nga", "nun", "ya"],
      ["ايبو|Perkataan Jawi ini dibaca…", "ibu", "abu", "ubi", "ibi"],
      ["باڤ|Perkataan Jawi ini dibaca…", "bapa", "baba", "papa", "baja"],
      ["بوکو|Perkataan Jawi ini dibaca…", "buku", "baku", "bukit", "bubu"]
    ],
    g: [
      () => { const L = [["ا","alif"],["ب","ba"],["ت","ta"],["ج","jim"],["د","dal"],["ر","ra"],["س","sin"],["ك","kaf"],["ل","lam"],["م","mim"],["ن","nun"],["و","wau"],["ي","ya"],["چ","ca"],["ڠ","nga"],["ڤ","pa"],["ڽ","nya"]]; const [h, n] = pick(L); return from(`${h}|Huruf Jawi ini ialah…`, n, L.map(x => x[1])); }
    ] }
];

/* ======================= BAHASA ARAB TAHUN 1 (ikut tema) ======================= */
SOALAN[1].ba = [
  { t: "Salam", q: [
    ["السَّلَامُ عَلَيْكُمْ|Ucapan ini ialah…", "Assalamualaikum", "Terima kasih", "Selamat tinggal", "Apa khabar"],
    ["صَبَاحُ الْخَيْرِ|Ucapan ini bermaksud…", "Selamat pagi", "Selamat malam", "Terima kasih", "Sama-sama"],
    ["شُكْرًا|Perkataan ini bermaksud…", "Terima kasih", "Maaf", "Ya", "Tidak"],
    ["نَعَمْ|Perkataan ini bermaksud…", "Ya", "Tidak", "Terima kasih", "Saya"],
    ["لَا|Perkataan ini bermaksud…", "Tidak", "Ya", "Saya", "Ini"],
    ["\"Terima kasih\" dalam bahasa Arab ialah…", "شُكْرًا", "نَعَمْ", "لَا", "أَنَا"],
    ["أَنَا|Perkataan ini bermaksud…", "saya", "kamu", "dia", "ini"]
  ]},
  { t: "Nombor", q: [
    ["وَاحِدٌ|Nombor ini ialah…", "1", "2", "3", "4"],
    ["اِثْنَانِ|Nombor ini ialah…", "2", "1", "3", "5"],
    ["ثَلَاثَةٌ|Nombor ini ialah…", "3", "2", "4", "5"],
    ["أَرْبَعَةٌ|Nombor ini ialah…", "4", "3", "5", "1"],
    ["خَمْسَةٌ|Nombor ini ialah…", "5", "4", "3", "2"],
    ["⭐⭐⭐|Berapa bintang? (dalam bahasa Arab)", "ثَلَاثَةٌ", "وَاحِدٌ", "خَمْسَةٌ", "اِثْنَانِ"],
    ["🍎|Satu epal. \"Satu\" dalam bahasa Arab ialah…", "وَاحِدٌ", "اِثْنَانِ", "أَرْبَعَةٌ", "ثَلَاثَةٌ"],
    ["✋|Berapa jari? (dalam bahasa Arab)", "خَمْسَةٌ", "أَرْبَعَةٌ", "ثَلَاثَةٌ", "وَاحِدٌ"]
  ]},
  { t: "Warna", q: [
    ["🔴|Warna ini dalam bahasa Arab ialah…", "أَحْمَرُ", "أَزْرَقُ", "أَخْضَرُ", "أَصْفَرُ"],
    ["🔵|Warna ini dalam bahasa Arab ialah…", "أَزْرَقُ", "أَحْمَرُ", "أَبْيَضُ", "أَسْوَدُ"],
    ["🟢|Warna ini dalam bahasa Arab ialah…", "أَخْضَرُ", "أَصْفَرُ", "أَحْمَرُ", "أَزْرَقُ"],
    ["🟡|Warna ini dalam bahasa Arab ialah…", "أَصْفَرُ", "أَخْضَرُ", "أَسْوَدُ", "أَبْيَضُ"],
    ["أَبْيَضُ|Warna ini ialah…", "putih", "hitam", "merah", "biru"],
    ["أَسْوَدُ|Warna ini ialah…", "hitam", "putih", "kuning", "hijau"]
  ]},
  { t: "Diri dan Keluarga", q: [
    ["أَبٌ|Perkataan ini bermaksud…", "bapa", "ibu", "adik", "datuk"],
    ["أُمٌّ|Perkataan ini bermaksud…", "ibu", "bapa", "kakak", "nenek"],
    ["👁️|Mata dalam bahasa Arab ialah…", "عَيْنٌ", "يَدٌ", "أَنْفٌ", "فَمٌ"],
    ["👃|Hidung dalam bahasa Arab ialah…", "أَنْفٌ", "عَيْنٌ", "أُذُنٌ", "رَأْسٌ"],
    ["👄|Mulut dalam bahasa Arab ialah…", "فَمٌ", "أَنْفٌ", "يَدٌ", "عَيْنٌ"],
    ["✋|Tangan dalam bahasa Arab ialah…", "يَدٌ", "فَمٌ", "رَأْسٌ", "أُذُنٌ"],
    ["رَأْسٌ|Perkataan ini bermaksud…", "kepala", "tangan", "kaki", "mata"]
  ]},
  { t: "Di Kelas", q: [
    ["📖|Buku dalam bahasa Arab ialah…", "كِتَابٌ", "قَلَمٌ", "بَابٌ", "كُرْسِيٌّ"],
    ["🖊️|Pen dalam bahasa Arab ialah…", "قَلَمٌ", "كِتَابٌ", "مَكْتَبٌ", "بَابٌ"],
    ["🚪|Pintu dalam bahasa Arab ialah…", "بَابٌ", "قَلَمٌ", "كِتَابٌ", "بَيْتٌ"],
    ["🪑|Kerusi dalam bahasa Arab ialah…", "كُرْسِيٌّ", "بَابٌ", "قَلَمٌ", "كِتَابٌ"],
    ["مَدْرَسَةٌ|Perkataan ini bermaksud…", "sekolah", "rumah", "masjid", "kedai"],
    ["مُدَرِّسٌ|Perkataan ini bermaksud…", "guru (lelaki)", "murid", "bapa", "doktor"],
    ["هَذَا قَلَمٌ|Ayat ini bermaksud…", "Ini pen", "Ini buku", "Itu pen", "Saya pen"]
  ]},
  { t: "Haiwan dan Buah", q: [
    ["🐈|Kucing dalam bahasa Arab ialah…", "قِطٌّ", "أَسَدٌ", "فِيلٌ", "سَمَكٌ"],
    ["🐟|Ikan dalam bahasa Arab ialah…", "سَمَكٌ", "قِطٌّ", "طَائِرٌ", "فِيلٌ"],
    ["🐘|Gajah dalam bahasa Arab ialah…", "فِيلٌ", "جَمَلٌ", "قِطٌّ", "أَسَدٌ"],
    ["🐦|Burung dalam bahasa Arab ialah…", "طَائِرٌ", "سَمَكٌ", "أَسَدٌ", "جَمَلٌ"],
    ["🍎|Epal dalam bahasa Arab ialah…", "تُفَّاحٌ", "مَوْزٌ", "عِنَبٌ", "بُرْتُقَالٌ"],
    ["🍌|Pisang dalam bahasa Arab ialah…", "مَوْزٌ", "تُفَّاحٌ", "عِنَبٌ", "مَاءٌ"],
    ["🍇|Anggur dalam bahasa Arab ialah…", "عِنَبٌ", "مَوْزٌ", "تُفَّاحٌ", "خُبْزٌ"],
    ["أَسَدٌ|Haiwan ini ialah…", "singa", "kucing", "gajah", "unta"]
  ]}
];

})();
