/* =========================================================
   TAHUN 5 — Cerdik Ceria
   Matematik & Sains: bab ikut buku teks / DSKP KSSR Tahun 5.
   Sejarah: unit ikut DSKP Tahun 5 (Unit 2–12; Unit 1 belum disahkan).
   BM & BI: disusun ikut topik kemahiran.
   Pendidikan Islam: ikut bidang KSSR. Bahasa Arab: ikut tema perbendaharaan kata.

   Format soalan:
   ["Soalan", "Jawapan BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar: "🧲|Soalan…"  → bahagian sebelum | dipaparkan BESAR.
   Soalan asli — bukan disalin daripada buku teks.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

/* ---------- pembantu Matematik Tahun 5 ---------- */
const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) {                       // pecahan teringkas, nombor bercampur jika perlu
  const g = gcd(n, d); n /= g; d /= g;
  if (d === 1) return String(n);
  if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`;
  return `${n}/${d}`;
}
const dec = (x, p = 3) => String(+x.toFixed(p));
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
const PRIMA = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const BUKAN_PRIMA = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 77, 81, 87, 91, 93, 95];
const TEMPAT = ["sa", "puluh", "ratus", "ribu", "puluh ribu", "ratus ribu"];

function nilaiDigit() {
  let n, p, d, s;
  for (let t = 0; t < 50; t++) {
    n = r(100000, 999999); s = String(n);
    p = r(0, 5); d = +s[5 - p];
    if (d && s.split("").filter(x => +x === d).length === 1) break;
  }
  const v = d * 10 ** p;
  const w = [d * 10 ** ((p + 1) % 6), d * 10 ** ((p + 5) % 6), d * 10 ** ((p + 2) % 6), d].filter(x => x !== v);
  return [`Nilai digit ${d} dalam nombor ${fmt(n)} ialah…`, fmt(v), ...[...new Set(w)].slice(0, 3).map(fmt), `Digit ${d} berada di tempat ${TEMPAT[p]}.`];
}

SOALAN[5] = {

/* ======================= BAHASA MELAYU ======================= */
bm: [
  { t: "Kata Nama dan Penjodoh Bilangan", q: [
    ["Penjodoh bilangan yang sesuai: \"sebuah ___\"", "rumah", "ikan", "kertas", "pensel"],
    ["Penjodoh bilangan yang sesuai: \"dua ___ surat\"", "pucuk", "helai", "keping", "batang"],
    ["Penjodoh bilangan yang sesuai: \"sekuntum ___\"", "bunga", "buku", "ikan", "kereta"],
    ["Penjodoh bilangan yang sesuai: \"tiga ___ kain\"", "helai", "buah", "ekor", "biji"],
    ["Penjodoh bilangan yang sesuai: \"sebatang ___\"", "pen", "kucing", "kek", "bunga"],
    ["Penjodoh bilangan yang sesuai: \"seutas ___\"", "rantai", "pinggan", "kasut", "kertas"],
    ["Penjodoh bilangan yang sesuai: \"sepasang ___\"", "kasut", "pensel", "rumah", "bola"],
    ["Penjodoh bilangan yang sesuai: \"seulas ___\"", "durian", "rambutan", "kelapa", "tembikai"],
    ["Yang manakah kata nama khas?", "Gunung Kinabalu", "gunung", "bukit", "hutan"],
    ["Yang manakah kata nama am?", "guru", "Cikgu Rahman", "Sekolah Kebangsaan Seri Murni", "Sungai Pahang"],
    ["Yang manakah kata nama terbitan?", "pelajaran", "ajar", "belajar", "mengajar", "pe-…-an + ajar = pelajaran"],
    ["\"Kami\" ialah kata ganti nama diri…", "pertama", "kedua", "ketiga", "tanya"],
    ["\"Beliau\" digunakan untuk merujuk kepada…", "orang yang dihormati", "haiwan", "benda", "diri sendiri"],
    ["Kata nama \"kanak-kanak\" ialah kata ganda…", "penuh", "separa", "berentak", "berirama"]
  ]},
  { t: "Kata Kerja dan Imbuhan", q: [
    ["Imbuhan \"me-\" + \"tulis\" menjadi…", "menulis", "metulis", "mentulis", "menyulis", "Huruf t gugur apabila menerima me-."],
    ["Imbuhan \"me-\" + \"sapu\" menjadi…", "menyapu", "mesapu", "mensapu", "mengsapu"],
    ["Imbuhan \"me-\" + \"pukul\" menjadi…", "memukul", "mempukul", "mepukul", "menpukul"],
    ["Imbuhan \"me-\" + \"kira\" menjadi…", "mengira", "mekira", "mengkira", "menkira"],
    ["Imbuhan \"ber-\" + \"ajar\" menjadi…", "belajar", "berajar", "bajar", "melajar", "Ini pengecualian: ber- + ajar = belajar."],
    ["Imbuhan \"di-…-kan\" + \"hantar\" menjadi…", "dihantarkan", "dihantaran", "dikanhantar", "hantarkan"],
    ["Imbuhan \"ter-\" dalam \"tertidur\" bermaksud…", "tidak sengaja", "sedang", "akan", "sudah lama"],
    ["Yang manakah kata kerja transitif (perlu objek)?", "membaca", "tidur", "menangis", "berlari"],
    ["Yang manakah kata kerja tak transitif?", "tidur", "membeli", "menendang", "memotong"],
    ["Ibu sedang ___ kuih untuk jamuan.", "membuat", "dibuat", "pembuat", "buatan"],
    ["Surat itu telah ___ oleh posmen.", "dihantar", "menghantar", "penghantar", "hantaran"],
    ["Imbuhan \"memper-…-kan\" + \"dengar\" menjadi…", "memperdengarkan", "mendengarkan", "pendengaran", "terdengar"]
  ]},
  { t: "Kata Adjektif dan Kata Tugas", q: [
    ["Yang manakah kata adjektif sifat?", "rajin", "rumah", "dan", "berlari"],
    ["Yang manakah kata adjektif warna?", "kelabu", "comel", "jauh", "laju"],
    ["Yang manakah kata adjektif ukuran?", "tebal", "merah", "sedih", "pagi"],
    ["Rumah Pak Ali ___ besar.", "sangat", "dan", "kerana", "oleh"],
    ["Kata penguat dalam \"paling tinggi\" ialah…", "paling", "tinggi", "tiada", "dalam"],
    ["Saya suka nasi lemak ___ roti canai.", "dan", "kerana", "tetapi", "supaya"],
    ["Dia tidak hadir ___ demam.", "kerana", "dan", "atau", "tetapi"],
    ["Belajarlah bersungguh-sungguh ___ berjaya.", "supaya", "tetapi", "atau", "kerana"],
    ["Kamu mahu air teh ___ air kopi?", "atau", "dan", "kerana", "supaya"],
    ["Buku itu ___ meja.", "di atas", "ke atas", "dari atas", "pada atas"],
    ["Ali memberikan hadiah ___ Cikgu Lim.", "kepada", "ke", "di", "dari", "Gunakan \"kepada\" untuk manusia."],
    ["Kami bertolak ___ Ipoh pada pukul 8 pagi.", "dari", "daripada", "kepada", "dengan", "\"dari\" untuk tempat dan masa."],
    ["Yang manakah kata tanya?", "bagaimana", "dan", "sangat", "wah"]
  ]},
  { t: "Peribahasa dan Simpulan Bahasa", q: [
    ["Simpulan bahasa \"ringan tulang\" bermaksud…", "rajin", "malas", "kurus", "lemah"],
    ["Simpulan bahasa \"berat tulang\" bermaksud…", "malas", "rajin", "gemuk", "kuat"],
    ["Simpulan bahasa \"besar kepala\" bermaksud…", "sombong dan degil", "pandai", "pemurah", "berani"],
    ["Simpulan bahasa \"tangan terbuka\" bermaksud…", "menerima dengan senang hati", "suka mencuri", "malas bekerja", "kedekut"],
    ["Simpulan bahasa \"makan angin\" bermaksud…", "melancong atau bersiar-siar", "makan terlalu banyak", "masuk angin", "kelaparan"],
    ["Simpulan bahasa \"bermuka-muka\" bermaksud…", "berpura-pura", "jujur", "cantik", "malu"],
    ["Simpulan bahasa \"cakar ayam\" bermaksud…", "tulisan yang buruk", "sejenis kuih", "suka bergaduh", "jalan yang rosak"],
    ["Peribahasa \"melentur buluh biarlah dari rebungnya\" bermaksud…", "mendidik anak sejak kecil", "menanam buluh", "membuat kraf buluh", "memasak rebung"],
    ["Peribahasa \"bagai kacang lupakan kulit\" bermaksud…", "orang yang lupa asal usul atau jasa orang", "orang yang suka makan kacang", "orang yang pemurah", "orang yang rajin"],
    ["Peribahasa \"sediakan payung sebelum hujan\" bermaksud…", "bersedia sebelum sesuatu berlaku", "membeli payung", "suka hujan", "takut panas"],
    ["Peribahasa \"bagai aur dengan tebing\" bermaksud…", "saling membantu", "selalu bergaduh", "tinggal di tepi sungai", "suka berkebun"],
    ["Peribahasa \"seperti katak di bawah tempurung\" bermaksud…", "berpengetahuan sempit", "suka bersembunyi", "katak yang takut", "sangat pandai"],
    ["Bidalan \"bersatu teguh, bercerai roboh\" bermaksud…", "perpaduan membawa kekuatan", "rumah yang roboh", "suka berpisah", "bina rumah bersama"],
    ["Peribahasa \"hendak seribu daya, tak hendak seribu dalih\" bermaksud…", "jika mahu, pasti ada jalan", "orang yang banyak wang", "suka memberi alasan sahaja", "seribu orang bekerja"]
  ]},
  { t: "Sinonim dan Antonim", q: [
    ["Sinonim bagi \"gembira\" ialah…", "riang", "sedih", "marah", "takut"],
    ["Sinonim bagi \"pintar\" ialah…", "cerdik", "bodoh", "lambat", "malas"],
    ["Sinonim bagi \"indah\" ialah…", "cantik", "hodoh", "kotor", "buruk"],
    ["Sinonim bagi \"segera\" ialah…", "cepat", "lambat", "perlahan", "lewat"],
    ["Sinonim bagi \"sunyi\" ialah…", "sepi", "bising", "riuh", "ramai"],
    ["Sinonim bagi \"berani\" ialah…", "gagah", "penakut", "lemah", "malu"],
    ["Antonim bagi \"rajin\" ialah…", "malas", "pandai", "kuat", "cepat"],
    ["Antonim bagi \"jujur\" ialah…", "curang", "ikhlas", "baik", "amanah"],
    ["Antonim bagi \"kedekut\" ialah…", "pemurah", "kikir", "lokek", "bakhil"],
    ["Antonim bagi \"maju\" ialah…", "mundur", "pesat", "moden", "terkini"],
    ["Antonim bagi \"terapung\" ialah…", "tenggelam", "melayang", "berenang", "timbul"],
    ["Antonim bagi \"kusut\" ialah…", "kemas", "serabut", "kotor", "berselerak"]
  ]},
  { t: "Ayat dan Tanda Baca", q: [
    ["Yang manakah ayat pasif?", "Kek itu dibuat oleh ibu.", "Ibu membuat kek itu.", "Ibu suka membuat kek.", "Ibu sedang membuat kek."],
    ["Yang manakah ayat aktif?", "Ali menendang bola.", "Bola ditendang oleh Ali.", "Bola itu sudah ditendang.", "Bola itu ditendang olehnya."],
    ["Yang manakah ayat majmuk?", "Adik menangis kerana lapar.", "Adik menangis.", "Adik lapar.", "Adik itu comel."],
    ["Yang manakah ayat tanya?", "Bilakah kamu tiba?", "Saya tiba semalam.", "Wah, cantiknya!", "Sila duduk."],
    ["Yang manakah ayat perintah?", "Sila tutup pintu itu.", "Pintu itu tertutup.", "Siapakah menutup pintu?", "Pintu itu besar."],
    ["Tanda seru (!) digunakan untuk…", "menunjukkan perasaan atau seruan", "menamatkan ayat tanya", "memisahkan senarai", "menunjukkan petikan"],
    ["Tanda koma (,) digunakan untuk…", "memisahkan senarai perkataan", "menamatkan ayat", "menunjukkan soalan", "menunjukkan perasaan terkejut"],
    ["Tanda petik (\"…\") digunakan untuk…", "menunjukkan cakap ajuk", "menamatkan ayat", "memisahkan senarai", "menunjukkan soalan"],
    ["Ayat yang menggunakan tanda baca dengan betul ialah…", "Ibu membeli ikan, sayur dan buah.", "Ibu membeli ikan sayur, dan buah", "Ibu, membeli ikan sayur dan buah.", "ibu membeli ikan, sayur dan buah?"],
    ["Ayat \"Kamal berkata, 'Saya lapar.'\" ialah contoh…", "cakap ajuk", "cakap pindah", "ayat pasif", "ayat perintah"],
    ["Cakap pindah bagi \"Saya penat,\" kata Ani. ialah…", "Ani berkata bahawa dia penat.", "Ani berkata saya penat.", "\"Ani penat,\" kata saya.", "Saya berkata Ani penat."],
    ["Ayat yang betul ialah…", "Mereka sedang bermain bola di padang.", "Mereka bola bermain di padang sedang.", "Sedang mereka padang di bermain bola.", "Bola mereka sedang padang di bermain."]
  ]},
  { t: "Ejaan dan Kata Majmuk", q: [
    ["Ejaan yang betul ialah…", "tanggungjawab", "tanggung jawab", "tangungjawab", "tanggong jawab", "Kata majmuk yang mantap dieja bercantum."],
    ["Ejaan yang betul ialah…", "kerjasama", "kerja sama", "kerjesama", "kerje sama"],
    ["Ejaan yang betul ialah…", "beritahu", "beri tahu", "bertahu", "beritau"],
    ["Ejaan yang betul ialah…", "kapal terbang", "kapalterbang", "kapal-terbang", "kapel terbang"],
    ["Ejaan yang betul ialah…", "jalan raya", "jalanraya", "jalan-raya", "jalanan raya"],
    ["Ejaan yang betul ialah…", "matahari", "mata hari", "mata-hari", "matehari"],
    ["Ejaan yang betul ialah…", "setiausaha", "setia usaha", "setia-usaha", "setiausahe"],
    ["Ejaan yang betul ialah…", "Isnin", "Isnen", "Isnain", "Senin"],
    ["Ejaan yang betul ialah…", "sukan", "sokan", "sukkan", "sukaan"],
    ["Ejaan yang betul ialah…", "kokurikulum", "ko-kurikulum", "ko kurikulum", "kokurikulam"],
    ["Yang manakah kata majmuk?", "rumah sakit", "rumah-rumah", "berumah", "perumahan"],
    ["Yang manakah kata majmuk?", "bandar raya", "bandar-bandar", "membandar", "perbandaran"]
  ]}
],

/* ======================= ENGLISH ======================= */
bi: [
  { t: "Vocabulary", q: [
    ["A person who flies an aeroplane is a…", "pilot", "driver", "sailor", "farmer"],
    ["A person who repairs pipes is a…", "plumber", "baker", "tailor", "dentist"],
    ["A person who makes clothes is a…", "tailor", "plumber", "chef", "pilot"],
    ["A place where we borrow books is a…", "library", "bakery", "pharmacy", "stadium"],
    ["A place where we buy medicine is a…", "pharmacy", "library", "bakery", "garage"],
    ["A baby cat is called a…", "kitten", "puppy", "calf", "cub"],
    ["A baby dog is called a…", "puppy", "kitten", "lamb", "chick"],
    ["🌋|This is a…", "volcano", "waterfall", "river", "valley"],
    ["🧭|This is a…", "compass", "clock", "ruler", "mirror"],
    ["🔭|This is a…", "telescope", "microscope", "camera", "torch"],
    ["Which word means \"very big\"?", "huge", "tiny", "thin", "weak"],
    ["Which word means \"very tired\"?", "exhausted", "excited", "hungry", "curious"],
    ["Which word means \"to look at something carefully\"?", "observe", "ignore", "forget", "shout"],
    ["The opposite of \"ancient\" is…", "modern", "old", "dirty", "broken"]
  ]},
  { t: "Tenses", q: [
    ["The past tense of \"write\" is…", "wrote", "writed", "written", "writes"],
    ["The past tense of \"catch\" is…", "caught", "catched", "catch", "caughted"],
    ["The past tense of \"swim\" is…", "swam", "swimmed", "swum", "swims"],
    ["The past tense of \"bring\" is…", "brought", "bringed", "brang", "bought"],
    ["Yesterday, Amir ___ his grandmother.", "visited", "visits", "visit", "visiting"],
    ["Look! The baby ___ .", "is sleeping", "sleeps", "slept", "sleep"],
    ["My father ___ to work every day.", "drives", "drive", "driving", "is drive"],
    ["Tomorrow, we ___ the museum.", "will visit", "visited", "visits", "visiting"],
    ["If it rains, I ___ stay at home.", "will", "was", "am", "did"],
    ["She ___ her homework already.", "has finished", "have finished", "finishing", "finish"],
    ["They ___ football when it started to rain.", "were playing", "are playing", "play", "plays"],
    ["Which sentence is in the present continuous tense?", "She is reading a book.", "She read a book.", "She reads a book.", "She will read a book."],
    ["I have lived here ___ 2020.", "since", "for", "from", "at"],
    ["We have studied English ___ five years.", "for", "since", "at", "on"]
  ]},
  { t: "Nouns and Pronouns", q: [
    ["The plural of \"child\" is…", "children", "childs", "childrens", "childes"],
    ["The plural of \"tooth\" is…", "teeth", "tooths", "teeths", "toothes"],
    ["The plural of \"leaf\" is…", "leaves", "leafs", "leafes", "leavs"],
    ["The plural of \"box\" is…", "boxes", "boxs", "boxies", "box"],
    ["The plural of \"sheep\" is…", "sheep", "sheeps", "sheepes", "shoop"],
    ["A ___ of birds flew over the lake.", "flock", "herd", "school", "pack"],
    ["A ___ of fish swam near the boat.", "school", "flock", "herd", "bunch"],
    ["Which one is a proper noun?", "Penang", "city", "island", "bridge"],
    ["Aisyah lost ___ pencil.", "her", "his", "their", "its"],
    ["This bag belongs to me. It is ___.", "mine", "my", "me", "I"],
    ["Ali and I are friends. ___ go to the same school.", "We", "They", "Us", "Our"],
    ["The dog wagged ___ tail.", "its", "it's", "his", "their"],
    ["The teacher praised ___ for our good work.", "us", "we", "our", "ours"]
  ]},
  { t: "Adjectives and Adverbs", q: [
    ["This book is ___ than that magazine.", "thicker", "thick", "thickest", "more thick"],
    ["Mount Kinabalu is the ___ mountain in Malaysia.", "highest", "higher", "high", "most high"],
    ["Good, better, ___.", "best", "goodest", "most good", "bestest"],
    ["Bad, worse, ___.", "worst", "baddest", "worse", "most bad"],
    ["This puzzle is ___ than the last one.", "more difficult", "difficulter", "most difficult", "difficult"],
    ["She is the ___ girl in the class.", "most careful", "carefulest", "more careful", "carefuller"],
    ["He runs ___.", "quickly", "quick", "quicker", "quickness"],
    ["The children sang ___ at the concert.", "beautifully", "beautiful", "beauty", "beautify"],
    ["Which word is an adverb?", "slowly", "slow", "slowness", "slower"],
    ["Which word is an adjective?", "brave", "bravely", "bravery", "courageously"],
    ["\"un\" + \"happy\" = ?", "unhappy", "dishappy", "nonhappy", "inhappy"],
    ["\"care\" + \"ful\" = ?", "careful", "carefull", "carful", "carefool"]
  ]},
  { t: "Prepositions and Conjunctions", q: [
    ["The cat is hiding ___ the table.", "under", "on", "at", "of"],
    ["We have a test ___ Monday.", "on", "in", "at", "by"],
    ["School starts ___ 7.30 a.m.", "at", "on", "in", "by"],
    ["My birthday is ___ June.", "in", "on", "at", "by"],
    ["She walked ___ the bridge to the other side.", "across", "under", "into", "between"],
    ["The ball is ___ the two boxes.", "between", "among", "across", "over"],
    ["I like tea, ___ I don't like coffee.", "but", "and", "or", "so"],
    ["It was raining, ___ we stayed indoors.", "so", "but", "or", "because"],
    ["He was late ___ he missed the bus.", "because", "but", "so", "or"],
    ["Do you want rice ___ noodles?", "or", "and", "but", "so"],
    ["Neither Ali ___ Abu came to the party.", "nor", "or", "and", "but"],
    ["___ it was hot, we played outside.", "Although", "Because", "So", "Or"]
  ]},
  { t: "Questions and Sentences", q: [
    ["___ do you go to school? — By bus.", "How", "What", "Where", "Who"],
    ["___ is your birthday? — On 5 May.", "When", "Where", "Who", "Why"],
    ["___ are you crying? — Because I fell down.", "Why", "When", "Where", "Which"],
    ["___ book is this? — It's Siti's.", "Whose", "Who", "Which", "What"],
    ["How ___ water is in the bottle?", "much", "many", "long", "old"],
    ["How ___ students are in your class?", "many", "much", "long", "far"],
    ["You are a student, ___?", "aren't you", "isn't it", "don't you", "are you"],
    ["She can swim, ___?", "can't she", "can she", "doesn't she", "isn't she"],
    ["Which sentence is correct?", "There are many books on the shelf.", "There is many books on the shelf.", "There many books on the shelf.", "There are much books on the shelf."],
    ["Which sentence is correct?", "My brother doesn't like durian.", "My brother don't like durian.", "My brother not like durian.", "My brother doesn't likes durian."],
    ["Which sentence uses a capital letter correctly?", "We went to Langkawi in December.", "we went to langkawi in december.", "We went to langkawi in December.", "We Went To Langkawi In December."],
    ["Which sentence is in the passive voice?", "The window was broken by the ball.", "The ball broke the window.", "The ball breaks windows.", "The ball is breaking the window."]
  ]},
  { t: "Idioms and Phrasal Verbs", q: [
    ["The idiom \"a piece of cake\" means…", "very easy", "very sweet", "very small", "very hungry"],
    ["The idiom \"break the ice\" means…", "start a friendly conversation", "break something cold", "make a drink", "go skating"],
    ["The idiom \"under the weather\" means…", "feeling unwell", "standing outside", "very happy", "very rainy"],
    ["The idiom \"raining cats and dogs\" means…", "raining very heavily", "animals falling", "a little rain", "a sunny day"],
    ["The idiom \"hit the books\" means…", "study hard", "throw books", "buy books", "tidy the shelf"],
    ["The idiom \"once in a blue moon\" means…", "very rarely", "every night", "every month", "never"],
    ["\"Look after\" your little brother means…", "take care of him", "look behind him", "search for him", "ignore him"],
    ["Please \"turn off\" the lights means…", "switch them off", "turn them around", "make them brighter", "change them"],
    ["\"Give up\" means…", "stop trying", "give a present", "stand up", "go upstairs"],
    ["I am \"looking for\" my keys means…", "searching for them", "looking at them", "throwing them", "holding them"],
    ["The fire fighters \"put out\" the fire means…", "stopped it from burning", "started it", "carried it", "watched it"],
    ["\"Find out\" the answer means…", "discover it", "lose it", "hide it", "copy it"]
  ]}
],

/* ======================= MATEMATIK (bab buku teks) ======================= */
math: [
  { t: "Nombor Bulat dan Operasi",
    q: [
      ["Nombor perdana ialah nombor yang boleh dibahagi tepat dengan…", "1 dan nombor itu sendiri sahaja", "2 sahaja", "semua nombor", "10"],
      ["\"Lima ratus enam ribu dua puluh\" ditulis sebagai…", "506 020", "560 020", "506 200", "500 620"],
      ["Satu juta ditulis sebagai…", "1 000 000", "100 000", "10 000 000", "1 000"]
    ],
    g: [
      nilaiDigit,
      () => from("Yang manakah nombor perdana?", String(pick(PRIMA.filter(x => x > 10))), shuffle(BUKAN_PRIMA).slice(0, 6).map(String)),
      () => { const s = new Set(); while (s.size < 3) s.add(pick(PRIMA)); const np = pick(BUKAN_PRIMA.filter(x => x > 3)); return ["Yang manakah BUKAN nombor perdana?", String(np), ...[...s].map(String), `${np} boleh dibahagi tepat dengan nombor lain selain 1 dan dirinya.`]; },
      () => { const n = r(100000, 999999), u = pick([1000, 10000, 100000]); const ans = Math.round(n / u) * u; const nm = { 1000: "ribu", 10000: "puluh ribu", 100000: "ratus ribu" }[u]; return q(`Bundarkan ${fmt(n)} kepada ${nm} yang terdekat.`, ans, [u, u * 2, u / 10]); },
      () => { const a = r(100, 999), b = r(11, 99); return q(`${a} × ${b} = ?`, a * b, [a, b, 10, 100]); },
      () => { const b = r(11, 99), c = r(11, 99); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 2, 10]); },
      () => { const a = r(100000, 899999), b = r(10000, 99999); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const a = r(100000, 999999), b = r(10000, a - 1); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const a = r(10, 99), b = r(10, 99), c = r(2, 9); return q(`(${a} + ${b}) × ${c} = ?`, (a + b) * c, [c, a, b, 10], false, "Selesaikan dalam kurungan dahulu."); },
      () => { const c = r(2, 9), d = r(2, 20), a = r(c * d + 1, 999); return q(`${a} − ${c * d} ÷ ${c} = ?`, a - d, [c, d, 10], false, "Bahagi dahulu, kemudian tolak."); },
      () => { const per = r(12, 48), n = r(12, 30); return q(`📦|Sebuah kotak berisi ${per} biji telur. Berapakah jumlah telur dalam ${n} kotak?`, per * n, [per, n, 10]); }
    ] },
  { t: "Pecahan, Perpuluhan dan Peratus",
    q: [
      ["0.5 bersamaan dengan…", "1/2", "1/5", "5/100", "5/1"],
      ["1/4 dalam bentuk peratus ialah…", "25%", "14%", "40%", "4%"],
      ["0.07 dalam bentuk pecahan ialah…", "7/100", "7/10", "7/1000", "70/100"],
      ["50% bersamaan dengan…", "separuh", "suku", "satu perlima", "sepersepuluh"],
      ["Nombor perpuluhan yang paling besar ialah…", "0.9", "0.89", "0.099", "0.8"]
    ],
    g: [
      () => { const d = pick([5, 6, 7, 8, 9, 10, 12]), a = r(1, d - 1), b = r(1, d - 1); const right = frac(a + b, d); const w = [frac(a + b, d * 2), frac(a + b + 1, d), frac(Math.abs(a - b) || 1, d), `${a + b}/${d * 2}`, frac(a + b - 1 || 1, d)]; return from(`${a}/${d} + ${b}/${d} = ?`, right, [...new Set(w)].filter(x => x !== right)); },
      () => { const d = pick([5, 6, 8, 9, 10, 12]), a = r(2, d - 1), b = r(1, a - 1); const right = frac(a - b, d); const w = [frac(a + b, d), frac(a - b, d * 2), frac(a - b + 1, d), `${a - b}/${d * 2}`]; return from(`${a}/${d} − ${b}/${d} = ?`, right, [...new Set(w)].filter(x => x !== right)); },
      () => { const d = pick([3, 4, 5, 6, 8]), a = r(1, d - 1), n = d * r(2, 12); return q(`${a}/${d} daripada ${n} = ?`, n / d * a, [1, n / d, a, 2]); },
      () => { const a = r(1000, 9999) / 1000, b = r(1000, 9999) / 1000; return q(`${dec(a)} + ${dec(b)} = ?`, +(a + b).toFixed(3), [0.1, 1, 0.01, 0.001], true, "", x => dec(x)); },
      () => { const a = r(5000, 9999) / 1000, b = r(1000, 4999) / 1000; return q(`${dec(a)} − ${dec(b)} = ?`, +(a - b).toFixed(3), [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const a = r(101, 9999) / 100, m = pick([10, 100, 1000]); return q(`${dec(a, 2)} × ${m} = ?`, +(a * m).toFixed(2), [a * m / 10, a * m * 9, 1], true, "Alihkan titik perpuluhan ke kanan.", x => dec(x, 2)); },
      () => { const a = r(1, 999), m = pick([10, 100]); return q(`${a} ÷ ${m} = ?`, +(a / m).toFixed(3), [a / m * 9, a / m / 10 * 9, 1], true, "Alihkan titik perpuluhan ke kiri.", x => dec(x)); },
      () => { const p = pick([10, 20, 25, 30, 40, 50, 60, 75]), n = r(1, 20) * 20; return q(`${p}% daripada ${fmt(n)} = ?`, n * p / 100, [5, 10, 20, n / 10]); },
      () => { const pr = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 10], [3, 10], [7, 10], [9, 10], [1, 20], [7, 20]]); const v = pr[0] / pr[1] * 100; return q(`${pr[0]}/${pr[1]} dalam bentuk peratus ialah…`, v, [5, 10, 15], false, "", x => x + "%"); },
      () => { const pr = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 8], [3, 8], [7, 10], [13, 20], [9, 25]]); return q(`${pr[0]}/${pr[1]} dalam bentuk perpuluhan ialah…`, pr[0] / pr[1], [0.1, 0.05, 0.01, 0.2], true, "", x => dec(x)); }
    ] },
  { t: "Wang",
    q: [
      ["Untung bermaksud…", "harga jual lebih tinggi daripada harga kos", "harga jual lebih rendah daripada harga kos", "harga jual sama dengan harga kos", "tiada jualan"],
      ["Wang yang disimpan di bank boleh memperoleh…", "faedah atau dividen", "cukai", "saman", "denda"],
      ["Diskaun ialah…", "potongan harga", "tambahan harga", "cukai jualan", "harga kos"],
      ["Dokumen yang diterima selepas membuat bayaran ialah…", "resit", "invois", "senarai harga", "baucar diskaun"]
    ],
    g: [
      () => { const k = r(20, 400), u = r(5, 80); return q(`🏷️|Harga kos sebuah beg ialah RM${k}. Peniaga mendapat untung RM${u}. Berapakah harga jualnya?`, k + u, [1, 5, 10, u], false, "Harga jual = harga kos + untung", rm); },
      () => { const j = r(50, 400), k = j + r(5, 60); return q(`📉|Harga kos RM${k}, harga jual RM${j}. Berapakah kerugian?`, k - j, [1, 5, 10], false, "Rugi = harga kos − harga jual", rm); },
      () => { const h = r(4, 40) * 10, p = pick([10, 20, 25, 50]); return q(`🛍️|Harga asal sepasang kasut RM${h}. Diskaun ${p}%. Berapakah harga selepas diskaun?`, h - h * p / 100, [h * p / 100, 10, 5], false, "", rm); },
      () => { const a = r(1, 30) + r(0, 9) / 10, b = r(1, 30) + r(0, 9) / 10, c = r(1, 20); const t = +(a + b + c).toFixed(2); return q(`🧾|Bil kedai: RM${a.toFixed(2)}, RM${b.toFixed(2)} dan RM${c.toFixed(2)}. Jumlahnya?`, t, [1, 0.1, 10, 0.5], true, "", rm); },
      () => { const s = r(2, 20) * 10, n = r(3, 12); return q(`🐷|Aiman menyimpan RM${s} sebulan. Berapakah simpanannya selepas ${n} bulan?`, s * n, [s, 10, n * 10], false, "", rm); },
      () => { const bayar = pick([50, 100]), h = +(r(10, bayar * 10 - 10) / 10).toFixed(2); return q(`💵|Siti membayar RM${bayar} untuk barang berharga RM${h.toFixed(2)}. Berapakah bakinya?`, +(bayar - h).toFixed(2), [1, 0.1, 10], true, "", rm); }
    ] },
  { t: "Masa dan Waktu",
    q: [
      ["1 abad = ___ tahun", "100", "10", "1000", "50"],
      ["1 dekad = ___ tahun", "10", "100", "5", "12"],
      ["1 milenium = ___ tahun", "1000", "100", "10", "10 000"],
      ["Tahun lompat mempunyai ___ hari.", "366", "365", "364", "360"],
      ["Jam 1500 dalam sistem 12 jam ialah…", "3:00 petang", "3:00 pagi", "5:00 petang", "1:00 petang"],
      ["9:45 malam dalam sistem 24 jam ialah…", "2145", "0945", "1945", "2045"]
    ],
    g: [
      () => { const h = r(2, 9), m = r(1, 59); return q(`${h} jam ${m} minit = ___ minit`, h * 60 + m, [60, 1, 10, 40]); },
      () => { const d = r(2, 9), h = r(1, 23); return q(`${d} hari ${h} jam = ___ jam`, d * 24 + h, [24, 1, 10]); },
      () => { const y = r(2, 9), m = r(1, 11); return q(`${y} tahun ${m} bulan = ___ bulan`, y * 12 + m, [12, 1, 10]); },
      () => { const c = r(2, 9), y = r(1, 9) * 10; return q(`${c} abad ${y} tahun = ___ tahun`, c * 100 + y, [10, 100, 90]); },
      () => { const h = r(6, 11), m = pick([0, 15, 30, 45]), dh = r(1, 3), dm = pick([15, 30, 45]); let em = m + dm, eh = h + dh + Math.floor(em / 60); em %= 60; const t = (H, M) => `${H > 12 ? H - 12 : H}:${String(M).padStart(2, "0")} ${H < 12 ? "pagi" : H === 12 ? "tengah hari" : "petang"}`; const right = t(eh, em); const ws = [t(eh, (em + 30) % 60), t(eh + 1, em), t(eh - 1 < 1 ? eh + 2 : eh - 1, em), t(eh, (em + 15) % 60)].filter(x => x !== right); return from(`⏰|Kelas bermula pada ${t(h, m)} dan mengambil masa ${dh} jam ${dm} minit. Bilakah kelas tamat?`, right, [...new Set(ws)]); },
      () => { const H = r(13, 23), M = pick([0, 10, 15, 20, 30, 40, 45, 50]); const s = String(H) + String(M).padStart(2, "0"); const t = (h, mm, ap) => `${h}:${String(mm).padStart(2, "0")} ${ap}`; const right = t(H - 12, M, H < 19 ? "petang" : "malam"); const ap = H < 19 ? "petang" : "malam", h12 = H - 12; const ws = [t(h12, M, "pagi"), t(h12 + 1, M, ap), t(h12 - 1 || 12, M, ap), t(h12, (M + 30) % 60, ap)].filter(x => x !== right); return from(`🕰️|Jam ${s} dalam sistem 12 jam ialah…`, right, [...new Set(ws)]); }
    ] },
  { t: "Ukuran dan Sukatan",
    q: [
      ["1 km = ___ m", "1000", "100", "10", "10 000"],
      ["1 m = ___ cm", "100", "10", "1000", "60"],
      ["1 cm = ___ mm", "10", "100", "1000", "1"],
      ["1 kg = ___ g", "1000", "100", "10", "500"],
      ["1 liter = ___ ml", "1000", "100", "10", "500"],
      ["Alat yang sesuai untuk mengukur jisim ialah…", "penimbang", "pembaris", "silinder penyukat", "jam randik"]
    ],
    g: [
      () => { const x = r(11, 99) / 10; return q(`${dec(x, 1)} km = ___ m`, Math.round(x * 1000), [100, 10, 900], false, "", fmt); },
      () => { const x = r(101, 999) / 100; return q(`${dec(x, 2)} m = ___ cm`, Math.round(x * 100), [10, 90, 1], false, "", fmt); },
      () => { const k = r(1, 9), g = r(1, 999); return q(`${k} kg ${g} g = ___ g`, k * 1000 + g, [1000, 100, 10, 900], false, "", fmt); },
      () => { const g = r(1001, 9999); return q(`${fmt(g)} g = ___ kg`, g / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const l = r(1, 9), m = r(1, 999); return q(`${l} liter ${m} ml = ___ ml`, l * 1000 + m, [1000, 100, 10, 900], false, "", fmt); },
      () => { const ml = r(1001, 9999); return q(`${fmt(ml)} ml = ___ liter`, ml / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const a = r(120, 900), b = r(50, 400); return q(`🧃|Jus oren ${fmt(a)} ml dan jus epal ${fmt(b)} ml dicampur. Berapakah jumlah isi padu?`, a + b, [10, 100, 50], false, "", x => fmt(x) + " ml"); },
      () => { const t = r(21, 60) / 10, n = r(3, 8); return q(`🎀|Sehelai reben ${dec(t, 1)} m dipotong kepada ${n} bahagian sama panjang. Berapakah panjang setiap bahagian (cm)?`, Math.round(t * 100 / n * 100) / 100, [1, 10, 5], true, "", x => dec(x, 2) + " cm"); }
    ] },
  { t: "Ruang",
    q: [
      ["Poligon yang mempunyai 5 sisi ialah…", "pentagon", "heksagon", "oktagon", "segi empat"],
      ["Poligon yang mempunyai 6 sisi ialah…", "heksagon", "pentagon", "oktagon", "heptagon"],
      ["Poligon yang mempunyai 8 sisi ialah…", "oktagon", "heksagon", "pentagon", "nonagon"],
      ["Sudut tegak bersamaan dengan…", "90°", "45°", "180°", "360°"],
      ["Jumlah sudut dalam sebuah segi tiga ialah…", "180°", "90°", "360°", "270°"],
      ["Isi padu kubus bersisi 3 cm ialah…", "27 cm³", "9 cm³", "18 cm³", "12 cm³"],
      ["🔷|Bentuk yang mempunyai 4 sisi sama panjang tetapi tiada sudut tegak ialah…", "rombus", "segi empat sama", "segi empat tepat", "trapezium"]
    ],
    g: [
      () => { const p = r(4, 25), l = r(2, p - 1); return q(`Perimeter segi empat tepat ${p} cm × ${l} cm ialah…`, 2 * (p + l), [p + l, 2, 4], false, "Perimeter = 2 × (panjang + lebar)", x => x + " cm"); },
      () => { const p = r(4, 25), l = r(2, 20); return q(`Luas segi empat tepat ${p} cm × ${l} cm ialah…`, p * l, [p, l, 2 * (p + l) - p * l || 3], false, "Luas = panjang × lebar", x => x + " cm²"); },
      () => { const t = r(2, 12) * 2, h = r(3, 15); return q(`Luas segi tiga dengan tapak ${t} cm dan tinggi ${h} cm ialah…`, t * h / 2, [t * h / 2, t, h], false, "Luas = ½ × tapak × tinggi", x => x + " cm²"); },
      () => { const a = r(2, 12), b = r(2, 10), c = r(2, 10); return q(`📦|Isi padu kuboid ${a} cm × ${b} cm × ${c} cm ialah…`, a * b * c, [a * b, b * c, 10], false, "Isi padu = panjang × lebar × tinggi", x => x + " cm³"); },
      () => { const a = r(30, 90), b = r(20, 150 - a); const c = 180 - a - b; return q(`Dua sudut dalam sebuah segi tiga ialah ${a}° dan ${b}°. Berapakah sudut ketiga?`, c, [10, 20, 5], false, "Jumlah sudut segi tiga = 180°", x => x + "°"); },
      () => { const s = r(3, 20); return q(`Perimeter segi empat sama bersisi ${s} cm ialah…`, 4 * s, [s, 2 * s, s * s], false, "", x => x + " cm"); }
    ] },
  { t: "Koordinat, Nisbah dan Kadaran",
    q: [
      ["Koordinat titik asalan ialah…", "(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"],
      ["Dalam koordinat (4, 7), nombor 4 ialah jarak…", "mengufuk (ke kanan)", "mencancang (ke atas)", "ke kiri", "ke bawah"],
      ["Nisbah 2 : 4 dalam bentuk termudah ialah…", "1 : 2", "2 : 1", "1 : 4", "4 : 2"]
    ],
    g: [
      () => { const x = r(1, 9), y = r(1, 9); const right = `(${x}, ${y})`; const ws = [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${x - 1}, ${y})`].filter(z => z !== right); return from(`📍|Titik A berada ${x} unit ke kanan dan ${y} unit ke atas dari asalan. Apakah koordinat titik A?`, right, [...new Set(ws)]); },
      () => { const a = r(2, 12), b = r(2, 12); const g = gcd(a, b); const right = `${a / g} : ${b / g}`; const ws = [`${b / g} : ${a / g}`, `${a} : ${a + b}`, `${a / g} : ${(a + b) / g}`, `${a / g + 1} : ${b / g}`].filter(z => z !== right); return from(`🍎 ${a} biji epal, 🍊 ${b} biji oren.\nApakah nisbah epal kepada oren (bentuk termudah)?`, right, [...new Set(ws)]); },
      () => { const n = r(2, 6), h = r(2, 9), m = r(n + 1, 12); return q(`📒|${n} buah buku berharga RM${n * h}. Berapakah harga ${m} buah buku?`, m * h, [h, n, 2], false, "Cari harga sebuah dahulu, kemudian darab.", rm); },
      () => { const k = r(40, 90), j = r(2, 5); return q(`🚗|Sebuah kereta bergerak ${k} km dalam 1 jam. Berapa jauh dalam ${j} jam pada kelajuan yang sama?`, k * j, [k, 10, 5], false, "", x => x + " km"); },
      () => { const a = r(1, 5), b = r(1, 5), k = r(2, 8); return q(`Nisbah lelaki kepada perempuan ialah ${a} : ${b}. Jika ada ${a * k} orang lelaki, berapakah bilangan perempuan?`, b * k, [k, a, b, 1]); }
    ] },
  { t: "Pengurusan Data",
    q: [
      ["Mod ialah nilai yang…", "paling kerap muncul", "paling besar", "di tengah-tengah", "paling kecil"],
      ["Julat ialah beza antara…", "nilai terbesar dan nilai terkecil", "dua nilai pertama", "mod dan median", "jumlah dan purata"],
      ["Jumlah semua bahagian dalam carta pai ialah…", "100%", "50%", "360%", "10%"],
      ["Purata dikira dengan…", "jumlah nilai ÷ bilangan nilai", "nilai terbesar − nilai terkecil", "nilai paling kerap", "jumlah nilai × bilangan nilai"]
    ],
    g: [
      () => { const n = pick([3, 4, 5]), avg = r(10, 80); const xs = []; let s = 0; for (let i = 0; i < n - 1; i++) { const v = avg + r(-9, 9); xs.push(v); s += v; } xs.push(avg * n - s); if (xs[n - 1] < 0) xs[n - 1] = avg; const sum = xs.reduce((a, b) => a + b, 0); if (sum % n) return null; return q(`Cari purata bagi:\n${xs.join(", ")}`, sum / n, [1, 2, 5], false, `Jumlah ${sum} ÷ ${n}`); },
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 4)]); return from(`Cari mod bagi data:\n${xs.join(", ")}`, String(m), [...new Set(xs.filter(x => x !== m))].map(String)); },
      () => { const xs = shuffle(Array.from({ length: 6 }, () => r(10, 99))); const hi = Math.max(...xs), lo = Math.min(...xs); return q(`Cari julat bagi data:\n${xs.join(", ")}`, hi - lo, [1, 10, 5]); },
      () => { const xs = shuffle([...new Set(Array.from({ length: 12 }, () => r(1, 50)))]).slice(0, 5); if (xs.length < 5) return null; const s = xs.slice().sort((a, b) => a - b); const med = s[2]; return from(`Cari median bagi data:\n${xs.join(", ")}`, String(med), [...new Set([s[1], s[3], xs[2], s[0], s[4]].filter(x => x !== med))].map(String), `Susun dahulu: ${s.join(", ")}`); },
      () => { const items = shuffle(["🍎", "🍌", "🍇", "🍊"]); const c = shuffle([2, 3, 4, 5, 6, 7]).slice(0, 4); const chart = items.map((e, i) => e + " " + "⬛".repeat(c[i])).join("\n"); return q(`${chart}|Setiap ⬛ mewakili 10 orang murid. Berapakah murid yang suka ${items[0]}?`, c[0] * 10, [10, 5, 20]); }
    ] }
],

/* ======================= SAINS (bab DSKP KSSR Tahun 5) ======================= */
sains: [
  { t: "Kemahiran Saintifik", q: [
    ["Kemahiran menggunakan deria untuk mengumpul maklumat ialah…", "memerhati", "meramal", "mengelas", "mentafsir data"],
    ["Membuat jangkaan berdasarkan pemerhatian atau pengalaman ialah…", "meramal", "mengukur", "memerhati", "berkomunikasi"],
    ["Membuat penerangan awal tentang sesuatu pemerhatian ialah…", "membuat inferens", "mengelas", "mengukur", "menggunakan nombor"],
    ["Pemboleh ubah yang diubah oleh penyiasat ialah pemboleh ubah…", "dimanipulasi", "bergerak balas", "dimalarkan", "tetap"],
    ["Pemboleh ubah yang berubah akibat perubahan pemboleh ubah lain ialah pemboleh ubah…", "bergerak balas", "dimanipulasi", "dimalarkan", "rawak"],
    ["Pemboleh ubah yang dikekalkan supaya ujian adil ialah pemboleh ubah…", "dimalarkan", "dimanipulasi", "bergerak balas", "bebas"],
    ["Pernyataan umum tentang hubungan antara pemboleh ubah yang boleh diuji ialah…", "hipotesis", "kesimpulan", "inferens", "pemerhatian"],
    ["Menyampaikan maklumat dalam bentuk jadual atau graf ialah…", "berkomunikasi", "meramal", "mengelas", "mengukur"],
    ["Alat yang sesuai untuk mengukur suhu ialah…", "termometer", "pembaris", "neraca", "jam randik"],
    ["Alat yang sesuai untuk mengukur masa ialah…", "jam randik", "termometer", "silinder penyukat", "pembaris"]
  ]},
  { t: "Manusia", q: [
    ["Salah satu fungsi rangka manusia ialah…", "melindungi organ dalaman", "mencerna makanan", "mengepam darah", "menghasilkan bunyi"],
    ["🧠|Tengkorak melindungi…", "otak", "jantung", "paru-paru", "perut"],
    ["Sangkar rusuk melindungi…", "jantung dan paru-paru", "otak", "usus", "tangan"],
    ["Tulang yang paling panjang dalam badan manusia ialah…", "tulang paha (femur)", "tulang rusuk", "tulang tengkorak", "tulang jari"],
    ["Bilangan tulang dalam badan manusia dewasa ialah lebih kurang…", "206", "100", "300", "56"],
    ["Bahagian yang menghubungkan dua tulang dan membolehkan pergerakan ialah…", "sendi", "kulit", "rambut", "kuku"],
    ["Tanpa rangka, badan kita tidak dapat…", "berdiri tegak", "bernafas", "berfikir", "melihat"],
    ["❤️|Organ yang mengepam darah ke seluruh badan ialah…", "jantung", "paru-paru", "otak", "hati"],
    ["Darah membawa oksigen dan ___ ke seluruh badan.", "makanan tercerna", "tulang", "rambut", "udara kotor sahaja"],
    ["Darah yang kaya dengan oksigen mengalir dari ___ ke jantung.", "paru-paru", "otak", "kaki", "perut"],
    ["Karbon dioksida dibawa oleh darah ke ___ untuk dikeluarkan.", "paru-paru", "jantung", "otak", "tulang"],
    ["Salur darah yang membawa darah dari jantung ke seluruh badan ialah…", "arteri", "vena", "kapilari", "saraf"],
    ["Selepas bersenam, kadar denyutan nadi akan…", "bertambah", "berkurang", "berhenti", "tidak berubah"],
    ["Sistem rangka dan sistem otot bekerjasama untuk…", "menghasilkan pergerakan", "mencerna makanan", "bernafas", "melihat"]
  ]},
  { t: "Haiwan", q: [
    ["🐔|Ayam mengeram telurnya untuk…", "memastikan telur menetas", "menyembunyikan telur", "memakan telur", "menyejukkan telur"],
    ["🦘|Kanggaru menjaga anaknya dengan…", "menyimpan anak di dalam kantung", "menanam anak dalam pasir", "meninggalkannya", "membawa di atas kepala"],
    ["Kuda laut jantan menjaga telur dengan…", "menyimpan telur dalam kantung", "menanam dalam pasir", "menelan telur", "meninggalkannya"],
    ["🐢|Penyu bertelur dengan banyak kerana…", "kebanyakan telur dan anak dimakan pemangsa", "penyu suka telur", "telur penyu kecil", "penyu tidak boleh berenang"],
    ["🐸|Katak bertelur banyak untuk…", "memastikan kemandirian spesiesnya", "makanan anak", "menghiasi kolam", "membina sarang"],
    ["🐘|Gajah hidup berkumpulan untuk…", "melindungi anak daripada pemangsa", "bermain", "tidur", "mandi"],
    ["Ikan arowana jantan menjaga telurnya dengan…", "menyimpan telur di dalam mulut", "menanam telur", "meninggalkan telur", "menggantung telur"],
    ["Tumbuhan hijau dalam rantai makanan dipanggil…", "pengeluar", "pengguna", "pemangsa", "mangsa"],
    ["Haiwan yang makan tumbuhan sahaja dipanggil…", "herbivor", "karnivor", "omnivor", "pengeluar"],
    ["Haiwan yang makan daging sahaja dipanggil…", "karnivor", "herbivor", "omnivor", "pengeluar"],
    ["Haiwan yang makan tumbuhan dan daging dipanggil…", "omnivor", "herbivor", "karnivor", "pengeluar"],
    ["🌾 → 🐛 → 🐔 → 🦅|Dalam rantai makanan ini, pengeluar ialah…", "🌾", "🐛", "🐔", "🦅"],
    ["🌾 → 🐭 → 🐍 → 🦅|Siapakah pemangsa kepada ular?", "🦅", "🐭", "🌾", "🐍"],
    ["Gabungan beberapa rantai makanan dipanggil…", "siratan makanan", "kitaran air", "piramid tenaga", "jaringan rangka"]
  ]},
  { t: "Tumbuhan", q: [
    ["🌵|Kaktus mempunyai daun berbentuk duri untuk…", "mengurangkan kehilangan air", "menarik serangga", "menyerap cahaya", "menghias"],
    ["Pokok bakau mempunyai akar jangkang yang membantu…", "berdiri teguh di tanah lumpur", "menarik burung", "menyimpan makanan", "menghalau monyet"],
    ["🪷|Teratai mempunyai daun yang lebar dan rata untuk…", "terapung di atas air", "mengumpul hujan", "menakutkan ikan", "menangkap serangga"],
    ["Pokok getah menggugurkan daun pada musim kemarau untuk…", "mengurangkan kehilangan air", "membesar dengan cepat", "menarik lebah", "menyejukkan tanah"],
    ["Pokok semalu menguncupkan daunnya apabila disentuh untuk…", "melindungi diri", "menarik serangga", "bernafas", "membiak"],
    ["Buah durian mempunyai kulit yang berduri untuk…", "melindungi diri daripada haiwan", "menarik burung", "menyerap air", "membuat makanan"],
    ["🥥|Buah kelapa disebarkan oleh…", "air", "angin", "letupan", "haiwan"],
    ["Biji benih kekabu yang ringan dan berbulu disebarkan oleh…", "angin", "air", "haiwan", "letupan"],
    ["Buah getah yang kering pecah dan melontarkan biji. Ini penyebaran secara…", "letupan", "angin", "air", "haiwan"],
    ["Biji kemuncup yang melekat pada bulu haiwan disebarkan oleh…", "haiwan", "angin", "air", "letupan"],
    ["Buah rambutan yang manis biasanya disebarkan oleh…", "haiwan", "angin", "letupan", "air"],
    ["Penyebaran biji benih penting supaya anak pokok…", "tidak bersaing dengan induk untuk cahaya dan air", "lebih kecil", "cepat mati", "tumbuh berhimpit"]
  ]},
  { t: "Elektrik", q: [
    ["🔋|Bateri ialah contoh…", "sumber tenaga elektrik", "konduktor", "penebat", "suis"],
    ["Tenaga elektrik dari empangan dihasilkan oleh…", "kuasa air", "kuasa angin", "kuasa nuklear", "arang batu"],
    ["Panel solar menukar tenaga cahaya kepada tenaga…", "elektrik", "bunyi", "kimia", "keupayaan"],
    ["Dalam litar bersiri, jika satu mentol rosak, mentol lain akan…", "padam", "lebih terang", "terus menyala", "berkelip"],
    ["Dalam litar selari, jika satu mentol rosak, mentol lain akan…", "terus menyala", "padam", "pecah", "berasap"],
    ["Mentol dalam litar selari menyala lebih ___ berbanding litar bersiri (bilangan mentol dan sel sama).", "terang", "malap", "perlahan", "kecil"],
    ["Alat untuk menyambung dan memutuskan litar ialah…", "suis", "mentol", "wayar", "bateri"],
    ["Bahan yang boleh mengalirkan elektrik dipanggil…", "konduktor", "penebat", "magnet", "pelarut"],
    ["Yang manakah penebat elektrik?", "getah", "kuprum", "aluminium", "besi"],
    ["Kita tidak boleh menyentuh suis dengan tangan yang…", "basah", "kering", "bersih", "bersarung kering"],
    ["Cara menjimatkan elektrik ialah…", "tutup suis apabila tidak digunakan", "pasang lampu siang hari", "buka pintu peti sejuk lama-lama", "biarkan TV terpasang"],
    ["Alat yang memutuskan litar apabila arus terlalu tinggi ialah…", "fius", "mentol", "suis lampu", "plag"]
  ]},
  { t: "Haba", q: [
    ["🌡️|Alat yang digunakan untuk mengukur suhu ialah…", "termometer", "barometer", "neraca", "pembaris"],
    ["Unit suhu yang biasa digunakan di sekolah ialah…", "darjah Celsius (°C)", "meter", "kilogram", "liter"],
    ["Haba bergerak dari kawasan ___ ke kawasan ___.", "panas ke sejuk", "sejuk ke panas", "atas ke bawah", "kiri ke kanan"],
    ["Apabila objek dipanaskan, suhunya akan…", "meningkat", "menurun", "kekal", "hilang"],
    ["Apabila disejukkan, kebanyakan bahan akan…", "mengecut", "mengembang", "terbakar", "menyala"],
    ["Apabila dipanaskan, kebanyakan bahan akan…", "mengembang", "mengecut", "membeku", "hilang"],
    ["Ruang kecil antara landasan kereta api disediakan supaya landasan boleh…", "mengembang pada hari panas", "dikunci", "dicat", "dibengkokkan"],
    ["Kabel elektrik dipasang kendur supaya tidak putus apabila…", "mengecut pada waktu sejuk", "mengembang pada waktu panas", "hujan", "berangin"],
    ["Suhu badan manusia yang normal ialah lebih kurang…", "37°C", "100°C", "0°C", "57°C"],
    ["Haba ialah sejenis…", "tenaga", "pepejal", "gas", "cecair"],
    ["Sudu besi dalam air panas akan menjadi panas kerana haba…", "dialirkan melalui sudu", "hilang", "dihasilkan oleh sudu", "disejukkan"],
    ["Menutup penutup termos membantu ___ haba.", "mengekalkan", "menambah", "menghilangkan", "menyejukkan"]
  ]},
  { t: "Pengaratan", q: [
    ["Pengaratan berlaku apabila besi terdedah kepada…", "air dan udara", "cahaya sahaja", "pasir", "plastik"],
    ["Karat biasanya berwarna…", "perang kemerahan", "biru", "putih", "hijau terang"],
    ["Yang manakah boleh berkarat?", "paku besi", "sudu plastik", "cawan kaca", "gelang emas"],
    ["Yang manakah tidak berkarat?", "tin aluminium", "paku besi", "pagar besi", "rantai basikal besi"],
    ["Pagar besi dicat untuk…", "mencegah pengaratan", "menjadikannya berat", "menarik elektrik", "menyejukkannya"],
    ["Rantai basikal disapu minyak atau gris untuk…", "mencegah pengaratan", "menambah berat", "menukar warna", "menarik habuk"],
    ["Paku dalam air garam akan berkarat lebih…", "cepat", "lambat", "tidak berkarat", "sama sahaja"],
    ["Paku yang disimpan dalam bekas kering dan tertutup akan…", "lambat berkarat", "cepat berkarat", "cair", "patah"],
    ["Menyadur besi dengan zink dipanggil…", "penggalvanian", "pengaratan", "pengecatan", "pembakaran"],
    ["Karat menyebabkan besi menjadi…", "rapuh dan lemah", "lebih kuat", "berkilat", "lebih berat dan kukuh"]
  ]},
  { t: "Jirim", q: [
    ["Jirim ialah apa-apa yang mempunyai…", "jisim dan memenuhi ruang", "warna sahaja", "bau sahaja", "bunyi"],
    ["Tiga keadaan jirim ialah…", "pepejal, cecair dan gas", "panas, sejuk dan suam", "keras, lembut dan liat", "besar, kecil dan sederhana"],
    ["Pepejal mempunyai…", "bentuk dan isi padu yang tetap", "bentuk yang berubah", "tiada isi padu", "tiada jisim"],
    ["Cecair mengambil bentuk…", "bekasnya", "bulat sahaja", "segi empat sahaja", "tetap"],
    ["Gas akan…", "memenuhi seluruh ruang bekas", "kekal di dasar bekas", "berbentuk tetap", "tidak bergerak"],
    ["🧊|Perubahan ais kepada air dipanggil…", "peleburan", "pembekuan", "penyejatan", "kondensasi"],
    ["Perubahan air kepada ais dipanggil…", "pembekuan", "peleburan", "pendidihan", "penyejatan"],
    ["Perubahan air kepada wap air dipanggil…", "penyejatan", "kondensasi", "pembekuan", "peleburan"],
    ["Titisan air di luar gelas berisi air sejuk terbentuk melalui…", "kondensasi", "penyejatan", "peleburan", "pendidihan"],
    ["Pakaian basah menjadi kering kerana…", "penyejatan", "kondensasi", "pembekuan", "peleburan"],
    ["🎈|Udara di dalam belon ialah contoh…", "gas", "pepejal", "cecair", "plasma"],
    ["Awan terbentuk apabila wap air mengalami…", "kondensasi", "peleburan", "pembekuan", "pengaratan"]
  ]},
  { t: "Fasa Bulan dan Buruj", q: [
    ["🌕|Bulan kelihatan bercahaya kerana…", "memantulkan cahaya Matahari", "mengeluarkan cahaya sendiri", "ada lampu", "terbakar"],
    ["Fasa Bulan apabila seluruh permukaannya kelihatan bercahaya ialah…", "Bulan purnama", "anak bulan", "bulan sabit", "bulan separa"],
    ["Fasa Bulan apabila Bulan tidak kelihatan ialah…", "anak bulan", "Bulan purnama", "bulan separa", "bulan hampir purnama"],
    ["🌓|Fasa Bulan ini ialah…", "bulan separa", "Bulan purnama", "anak bulan", "bulan sabit"],
    ["🌒|Fasa Bulan ini ialah…", "bulan sabit", "Bulan purnama", "bulan separa", "anak bulan"],
    ["Satu kitaran fasa Bulan mengambil masa lebih kurang…", "29.5 hari", "7 hari", "365 hari", "24 jam"],
    ["Bentuk Bulan kelihatan berubah kerana…", "kedudukan Bulan, Bumi dan Matahari berubah", "Bulan mengecut", "awan menutupnya", "Bulan pecah"],
    ["Kumpulan bintang yang membentuk corak tertentu dipanggil…", "buruj", "galaksi", "planet", "komet"],
    ["Buruj yang membantu menunjukkan arah selatan ialah…", "Buruj Pari", "Buruj Belantik", "Buruj Biduk", "Buruj Kala"],
    ["Buruj yang membantu menunjukkan arah utara ialah…", "Buruj Biduk", "Buruj Pari", "Buruj Kala", "Buruj Belantik"],
    ["Buruj Belantik juga dikenali sebagai…", "Orion", "Skorpio", "Salib Selatan", "Beruang Besar"],
    ["Pada zaman dahulu, buruj digunakan oleh petani untuk…", "menentukan musim menanam", "mengira wang", "membina rumah", "memasak"]
  ]},
  { t: "Mesin", q: [
    ["✂️|Gunting ialah contoh mesin ringkas jenis…", "tuas", "takal", "skru", "baji"],
    ["Alat di tiang bendera untuk menaikkan bendera ialah…", "takal", "baji", "gear", "skru"],
    ["Tanjakan untuk kerusi roda ialah contoh…", "satah condong", "takal", "tuas", "gear"],
    ["🪓|Mata kapak ialah contoh…", "baji", "skru", "takal", "gear"],
    ["Tombol pintu ialah contoh…", "roda dan gandar", "baji", "takal", "satah condong"],
    ["Penutup botol berpusing ialah contoh…", "skru", "baji", "takal", "tuas"],
    ["Mesin yang terdiri daripada gabungan beberapa mesin ringkas dipanggil…", "mesin kompleks", "mesin ringkas", "mesin tunggal", "mesin elektrik"],
    ["🚲|Basikal ialah contoh…", "mesin kompleks", "mesin ringkas", "tuas sahaja", "baji sahaja"],
    ["Rantai dan gear pada basikal digunakan untuk…", "memindahkan daya dari pedal ke roda", "menghias basikal", "menambah berat", "membuat bunyi"],
    ["Mesin membantu manusia…", "memudahkan dan mempercepat kerja", "menyukarkan kerja", "menambah masalah", "melambatkan kerja"],
    ["Jongkang-jongket ialah contoh…", "tuas", "takal", "baji", "skru"],
    ["Penyepit makanan ialah contoh…", "tuas", "gear", "skru", "satah condong"]
  ]}
],

/* ======================= SEJARAH (Unit ikut DSKP Tahun 5) ======================= */
sejarah: [
  { n: 2, t: "Agama Islam di Malaysia", q: [
    ["Agama bagi Persekutuan Malaysia ialah…", "Islam", "Kristian", "Buddha", "Hindu"],
    ["Walaupun Islam agama Persekutuan, agama lain…", "bebas diamalkan dengan aman", "tidak boleh diamalkan", "dilarang sama sekali", "hanya diamalkan di rumah"],
    ["Pada zaman Kesultanan Melayu Melaka, Melaka menjadi pusat…", "penyebaran agama Islam", "perlombongan bijih timah", "perindustrian kereta", "penanaman getah"],
    ["Antara golongan yang membawa Islam ke Alam Melayu ialah…", "pedagang Arab, Parsi dan India", "askar Portugis", "pegawai British", "tentera Jepun"],
    ["Batu Bersurat Terengganu menjadi bukti awal…", "kedatangan Islam di Tanah Melayu", "penjajahan British", "kemerdekaan negara", "pembentukan Malaysia"],
    ["Batu Bersurat Terengganu ditulis dalam tulisan…", "Jawi", "Rumi", "Pallava", "Cina"],
    ["Kitab suci agama Islam ialah…", "al-Quran", "Injil", "Taurat", "Weda"],
    ["Ketua agama Islam di negeri yang beraja ialah…", "Sultan atau Raja negeri itu", "Perdana Menteri", "Menteri Besar", "Ketua Kampung"],
    ["Ketua agama Islam bagi Melaka, Pulau Pinang, Sabah, Sarawak dan Wilayah Persekutuan ialah…", "Yang di-Pertuan Agong", "Yang di-Pertua Negeri", "Perdana Menteri", "Ketua Menteri"],
    ["Hal ehwal agama Islam di setiap negeri diuruskan oleh…", "Majlis Agama Islam Negeri", "Majlis Bandaraya", "Jabatan Kerja Raya", "Pejabat Pos"],
    ["Islam menggalakkan masyarakat untuk…", "hidup bersatu padu dan hormat-menghormati", "bermusuhan", "hidup bersendirian", "mengabaikan jiran"]
  ]},
  { n: 3, t: "Bahasa Melayu Warisan Kita", q: [
    ["Bahasa Melayu tergolong dalam rumpun bahasa…", "Austronesia", "Eropah", "Arab", "Cina"],
    ["Pada zaman Kesultanan Melayu Melaka, bahasa Melayu menjadi…", "lingua franca (bahasa perantaraan)", "bahasa yang dilarang", "bahasa rahsia", "bahasa asing"],
    ["Tulisan Jawi berasaskan huruf…", "Arab", "Rumi", "Cina", "Tamil"],
    ["Batu Bersurat Kedukan Bukit ialah bukti penggunaan bahasa…", "Melayu Kuno", "Inggeris", "Portugis", "Belanda"],
    ["Bahasa Melayu dituturkan di Malaysia, Indonesia, Brunei dan…", "Singapura", "Jepun", "India", "Australia"],
    ["Badan yang ditubuhkan pada tahun 1956 untuk memperkembangkan bahasa Melayu ialah…", "Dewan Bahasa dan Pustaka", "Arkib Negara", "Muzium Negara", "Perpustakaan Negara"],
    ["Bahasa Melayu sebagai bahasa kebangsaan termaktub dalam Perlembagaan Persekutuan Perkara…", "152", "3", "153", "160"],
    ["Pedagang asing pada zaman Melaka menggunakan bahasa Melayu untuk…", "berdagang dan berkomunikasi", "berperang", "bermain", "bersembunyi"],
    ["Contoh karya sastera Melayu tradisional ialah…", "Sejarah Melayu (Sulalatus Salatin)", "Harry Potter", "Romeo dan Juliet", "Hikayat Robin Hood"],
    ["Bahasa Melayu berperanan menyatupadukan…", "rakyat berbilang kaum", "negara asing sahaja", "satu kaum sahaja", "haiwan"]
  ]},
  { n: 4, t: "Kedaulatan Negara Dicabar", q: [
    ["Melaka jatuh ke tangan Portugis pada tahun…", "1511", "1641", "1786", "1957"],
    ["Belanda menakluk Melaka daripada Portugis pada tahun…", "1641", "1511", "1824", "1874"],
    ["Pulau Pinang diduduki oleh Francis Light pada tahun…", "1786", "1511", "1819", "1957"],
    ["Stamford Raffles membuka Singapura pada tahun…", "1819", "1786", "1641", "1874"],
    ["Negeri-negeri Selat terdiri daripada Pulau Pinang, Melaka dan…", "Singapura", "Perak", "Johor", "Kedah"],
    ["Perjanjian Pangkor 1874 membawa campur tangan British di negeri…", "Perak", "Kedah", "Johor", "Kelantan"],
    ["Residen British pertama di Perak ialah…", "J.W.W. Birch", "Francis Light", "Stamford Raffles", "James Brooke"],
    ["Keluarga yang memerintah Sarawak selama lebih 100 tahun ialah keluarga…", "Brooke", "Light", "Raffles", "Birch"],
    ["Sabah pernah ditadbir oleh…", "Syarikat Borneo Utara British", "Belanda", "Portugis", "Siam"],
    ["Jepun menduduki Tanah Melayu dari tahun…", "1941 hingga 1945", "1511 hingga 1641", "1957 hingga 1963", "1874 hingga 1900"],
    ["Antara sebab kuasa asing datang ke Tanah Melayu ialah untuk mendapatkan…", "bahan mentah seperti bijih timah dan getah", "salji", "minyak zaitun", "emas dari bulan"],
    ["Penjajahan British menyebabkan kedatangan ramai buruh dari…", "China dan India", "Jepun dan Korea", "Eropah sahaja", "Amerika"]
  ]},
  { n: 5, t: "Bangkit Menentang Penjajah", q: [
    ["Dol Said menentang British di…", "Naning", "Pasir Salak", "Pasir Puteh", "Tambunan"],
    ["Dato' Maharaja Lela menentang British di Pasir Salak, negeri…", "Perak", "Pahang", "Kelantan", "Sabah"],
    ["Tok Janggut menentang British di Pasir Puteh, negeri…", "Kelantan", "Terengganu", "Perak", "Kedah"],
    ["Mat Salleh menentang Syarikat Borneo Utara British di…", "Sabah", "Sarawak", "Perak", "Pahang"],
    ["Rentap menentang pemerintahan Brooke di…", "Sarawak", "Sabah", "Johor", "Melaka"],
    ["Kubu Rentap yang terkenal terletak di…", "Bukit Sadok", "Bukit Bendera", "Bukit Kepong", "Bukit Fraser"],
    ["Dato' Bahaman dan Mat Kilau menentang British di…", "Pahang", "Perak", "Kelantan", "Negeri Sembilan"],
    ["Haji Abdul Rahman Limbong memimpin penentangan di…", "Terengganu", "Kedah", "Sabah", "Melaka"],
    ["Tok Janggut menentang British kerana tidak puas hati dengan…", "sistem cukai yang baharu", "sukan bola sepak", "pembinaan sekolah", "harga buku"],
    ["J.W.W. Birch dibunuh di Pasir Salak pada tahun…", "1875", "1957", "1511", "1946"],
    ["Pahlawan tempatan menentang penjajah kerana mahu…", "mempertahankan kedaulatan tanah air", "menjadi kaya", "pergi melancong", "belajar bahasa asing"]
  ]},
  { n: 6, t: "Sejarah Kemerdekaan", q: [
    ["Rakyat menentang Malayan Union yang diperkenalkan pada tahun…", "1946", "1957", "1963", "1941"],
    ["UMNO ditubuhkan pada tahun 1946 di bawah pimpinan…", "Dato' Onn Jaafar", "Tunku Abdul Rahman", "Tun Abdul Razak", "Tun Hussein Onn"],
    ["Persekutuan Tanah Melayu dibentuk pada tahun…", "1948", "1946", "1957", "1963"],
    ["Parti Perikatan terdiri daripada UMNO, MCA dan…", "MIC", "PAS", "DAP", "Gerakan"],
    ["Pilihan raya umum pertama Persekutuan Tanah Melayu diadakan pada tahun…", "1955", "1957", "1948", "1963"],
    ["Rombongan ke London untuk menuntut kemerdekaan diketuai oleh…", "Tunku Abdul Rahman", "Dato' Onn Jaafar", "Tun Tan Cheng Lock", "Tun V.T. Sambanthan"],
    ["Tarikh kemerdekaan diumumkan oleh Tunku Abdul Rahman di Bandar Hilir, negeri…", "Melaka", "Pulau Pinang", "Johor", "Selangor"],
    ["Suruhanjaya yang menggubal Perlembagaan Persekutuan Tanah Melayu ialah…", "Suruhanjaya Reid", "Suruhanjaya Cobbold", "Suruhanjaya Brooke", "Suruhanjaya Raffles"],
    ["Persekutuan Tanah Melayu mencapai kemerdekaan pada…", "31 Ogos 1957", "16 September 1963", "31 Ogos 1963", "1 Februari 1957"],
    ["Pemasyhuran kemerdekaan diadakan di…", "Stadium Merdeka", "Dataran Merdeka", "Bukit Jalil", "Putrajaya"],
    ["Laungan \"Merdeka!\" sebanyak ___ kali dilaungkan oleh Tunku Abdul Rahman.", "7", "3", "5", "10"],
    ["Kemerdekaan dicapai melalui cara…", "rundingan dan perpaduan kaum", "peperangan besar", "membeli negara", "undian negara asing"]
  ]},
  { n: 7, t: "Yang di-Pertuan Agong Teras Kedaulatan Negara", q: [
    ["Ketua Utama Negara Malaysia ialah…", "Yang di-Pertuan Agong", "Perdana Menteri", "Ketua Hakim Negara", "Speaker Dewan Rakyat"],
    ["Yang di-Pertuan Agong dipilih oleh…", "Majlis Raja-Raja", "rakyat dalam pilihan raya", "Perdana Menteri", "Parlimen"],
    ["Yang di-Pertuan Agong memegang jawatan selama…", "5 tahun", "4 tahun", "10 tahun", "seumur hidup"],
    ["Yang di-Pertuan Agong yang pertama ialah Tuanku Abdul Rahman dari negeri…", "Negeri Sembilan", "Johor", "Selangor", "Perak"],
    ["Isteri Yang di-Pertuan Agong digelar…", "Raja Permaisuri Agong", "Tengku Ampuan", "Puan Sri", "Datin"],
    ["Yang di-Pertuan Agong ialah Pemerintah Tertinggi…", "Angkatan Tentera Malaysia", "Polis Diraja Malaysia sahaja", "syarikat swasta", "pasukan bola sepak"],
    ["Majlis Raja-Raja dianggotai oleh 9 Raja Melayu dan…", "4 Yang di-Pertua Negeri", "13 Menteri Besar", "Perdana Menteri", "semua menteri"],
    ["Istiadat pertabalan Yang di-Pertuan Agong diadakan di…", "Istana Negara", "Stadium Merdeka", "Parlimen", "Masjid Negara"],
    ["Contoh alat kebesaran diraja ialah…", "cogan alam dan keris panjang diraja", "kereta mewah", "kasut sukan", "telefon pintar"],
    ["Laungan \"Daulat Tuanku\" dilaungkan sebagai tanda…", "taat setia kepada raja", "marah", "bergurau", "menyambut tetamu asing"],
    ["Malaysia mengamalkan sistem…", "Raja Berperlembagaan", "Raja Mutlak", "Republik", "Komunis"]
  ]},
  { n: 8, t: "Jata Negara", q: [
    ["Haiwan pada Jata Negara ialah dua ekor…", "harimau", "gajah", "helang", "kancil"],
    ["Dua ekor harimau pada Jata Negara melambangkan…", "kekuatan dan keberanian", "kelajuan", "kepandaian", "kekayaan"],
    ["Cogan kata pada Jata Negara ialah…", "Bersekutu Bertambah Mutu", "Malaysia Boleh", "Bersatu Teguh", "Negaraku Malaysia"],
    ["Cogan kata Jata Negara ditulis dalam tulisan…", "Rumi dan Jawi", "Rumi sahaja", "Jawi sahaja", "Cina dan Tamil"],
    ["Bulan sabit pada Jata Negara melambangkan…", "Islam sebagai agama Persekutuan", "malam hari", "musim hujan", "pantai"],
    ["Bintang pada Jata Negara mempunyai ___ pucuk.", "14", "13", "11", "9"],
    ["Bunga yang terdapat pada Jata Negara ialah…", "bunga raya", "bunga mawar", "bunga orkid", "bunga tanjung"],
    ["Lima bilah keris pada perisai Jata Negara melambangkan…", "lima Negeri-negeri Melayu Tidak Bersekutu", "lima benua", "lima Rukun Negara", "lima sultan sahaja"],
    ["Warna kuning pada Jata Negara melambangkan…", "Raja-raja Melayu", "keberanian", "perpaduan", "kesucian"],
    ["Jata Negara digunakan pada…", "dokumen dan bangunan rasmi kerajaan", "pakaian sukan sahaja", "iklan makanan", "permainan video"]
  ]},
  { n: 9, t: "Bendera Kebangsaan Malaysia", q: [
    ["Bendera Malaysia dikenali sebagai…", "Jalur Gemilang", "Sang Saka", "Bintang Kejora", "Merah Putih"],
    ["Nama \"Jalur Gemilang\" diumumkan pada 31 Ogos 1997 oleh…", "Tun Dr. Mahathir Mohamad", "Tunku Abdul Rahman", "Tun Abdul Razak", "Tun Hussein Onn"],
    ["Bilangan jalur merah dan putih pada Jalur Gemilang ialah…", "14", "13", "11", "9"],
    ["14 jalur melambangkan 13 negeri dan…", "Kerajaan Persekutuan", "14 sultan", "14 sungai", "14 bandar"],
    ["Warna biru tua pada Jalur Gemilang melambangkan…", "perpaduan rakyat", "laut", "langit", "kesedihan"],
    ["Warna kuning pada bulan dan bintang melambangkan…", "warna diraja", "matahari", "emas", "padi"],
    ["Bulan sabit pada bendera melambangkan…", "Islam sebagai agama Persekutuan", "malam", "bulan Ramadan sahaja", "angkasa"],
    ["Pereka asal bendera Persekutuan Tanah Melayu ialah…", "Mohamed Hamzah", "Tunku Abdul Rahman", "P. Ramlee", "Dato' Onn Jaafar"],
    ["Semasa bendera dinaikkan, kita perlu…", "berdiri tegak sebagai tanda hormat", "duduk bersila", "bercakap", "berlari"],
    ["Jalur Gemilang tidak boleh…", "menyentuh tanah", "dikibarkan", "dihormati", "dinaikkan pada Hari Merdeka"],
    ["Bendera Indonesia berwarna…", "merah dan putih", "biru dan kuning", "hijau dan putih", "merah dan kuning"]
  ]},
  { n: 10, t: "Lagu Kebangsaan Malaysia", q: [
    ["Lagu kebangsaan Malaysia ialah…", "Negaraku", "Jalur Gemilang", "Tanggal 31", "Malaysia Berjaya"],
    ["Lagu Negaraku diisytiharkan sebagai lagu kebangsaan pada tahun…", "1957", "1963", "1946", "1997"],
    ["Melodi lagu Negaraku berasal daripada lagu kebangsaan negeri…", "Perak", "Johor", "Kedah", "Selangor"],
    ["Semasa lagu Negaraku dimainkan, kita mesti…", "berdiri tegak", "duduk", "berjalan", "bercakap"],
    ["Lelaki yang memakai topi semasa lagu Negaraku dimainkan perlu…", "menanggalkan topi", "melambai topi", "memusingkan topi", "membaling topi"],
    ["Lagu Negaraku dinyanyikan dengan penuh…", "semangat dan hormat", "gelak ketawa", "bosan", "tergesa-gesa"],
    ["Lagu kebangsaan berperanan membentuk…", "semangat cinta akan negara", "perasaan benci", "permusuhan", "kemalasan"],
    ["Lagu Negaraku biasanya dinyanyikan semasa…", "perhimpunan sekolah dan majlis rasmi", "di dalam bilik air", "semasa makan", "semasa tidur"]
  ]},
  { n: 11, t: "Bahasa Kebangsaan", q: [
    ["Bahasa kebangsaan Malaysia ialah…", "Bahasa Melayu", "Bahasa Inggeris", "Bahasa Cina", "Bahasa Tamil"],
    ["Kedudukan bahasa kebangsaan dinyatakan dalam Perlembagaan Persekutuan Perkara…", "152", "3", "153", "32"],
    ["Bahasa kebangsaan juga ialah bahasa…", "rasmi negara", "rahsia", "asing", "pasar sahaja"],
    ["Institusi yang bertanggungjawab memperkembangkan bahasa Melayu ialah…", "Dewan Bahasa dan Pustaka", "Bank Negara", "Tenaga Nasional", "Pos Malaysia"],
    ["Slogan yang menunjukkan pentingnya bahasa kepada bangsa ialah…", "Bahasa Jiwa Bangsa", "Malaysia Boleh", "Cintailah Sungai Kita", "Kita Jaga Kita"],
    ["Bahasa kebangsaan menjadi alat ___ rakyat berbilang kaum.", "perpaduan", "perpecahan", "pertandingan", "persaingan"],
    ["Penggunaan bahasa rojak ialah salah satu ___ kepada bahasa kebangsaan.", "cabaran", "kejayaan", "hadiah", "bantuan"],
    ["Bahasa pengantar utama di sekolah kebangsaan ialah…", "Bahasa Melayu", "Bahasa Jepun", "Bahasa Perancis", "Bahasa Arab"],
    ["Bulan Bahasa Kebangsaan bertujuan untuk…", "memartabatkan bahasa kebangsaan", "mengurangkan penggunaan bahasa", "mempromosikan bahasa asing sahaja", "cuti umum"]
  ]},
  { n: 12, t: "Bunga Raya Bunga Kebangsaan", q: [
    ["🌺|Bunga kebangsaan Malaysia ialah…", "bunga raya", "bunga mawar", "bunga orkid", "bunga melur"],
    ["Bunga raya diisytiharkan sebagai bunga kebangsaan pada tahun…", "1960", "1957", "1963", "1946"],
    ["Bunga raya yang dipilih sebagai bunga kebangsaan berwarna…", "merah", "kuning", "putih", "ungu"],
    ["Warna merah bunga raya melambangkan…", "keberanian", "kesedihan", "kemalasan", "ketakutan"],
    ["Lima kelopak bunga raya melambangkan…", "lima prinsip Rukun Negara", "lima negeri", "lima benua", "lima sultan"],
    ["Nama saintifik bunga raya ialah…", "Hibiscus rosa-sinensis", "Rosa indica", "Jasminum sambac", "Orchidaceae"],
    ["Lambang bunga raya boleh dilihat pada…", "duit syiling dan setem", "tayar kereta", "kasut sukan", "pinggan plastik sahaja"],
    ["Bunga raya mudah tumbuh di seluruh negara. Ini melambangkan…", "ketahanan dan semangat rakyat Malaysia", "kemalasan", "kekayaan", "musim sejuk"]
  ]}
]
};

/* ======================= PENDIDIKAN ISLAM (ikut bidang KSSR) =======================
   Fakta asas yang diajar di sekolah rendah Malaysia (mazhab Syafie).
   Ayat al-Quran tidak dipetik — soalan hanya tentang fakta surah dan hukum tajwid. */
SOALAN[5].pi = [
  { t: "Al-Quran dan Tajwid", q: [
    ["📖|Al-Quran mengandungi ___ surah.", "114", "113", "30", "99"],
    ["Al-Quran dibahagikan kepada ___ juzuk.", "30", "114", "20", "40"],
    ["Surah pertama dalam al-Quran ialah…", "al-Fatihah", "al-Baqarah", "an-Nas", "al-Ikhlas"],
    ["Surah terakhir dalam al-Quran ialah…", "an-Nas", "al-Falaq", "al-Fatihah", "al-Ikhlas"],
    ["Surah yang paling panjang dalam al-Quran ialah…", "al-Baqarah", "al-Fatihah", "Yasin", "al-Kahfi"],
    ["Surah al-Fatihah mengandungi ___ ayat.", "7", "6", "5", "4"],
    ["Surah al-Ikhlas mengandungi ___ ayat.", "4", "3", "5", "7"],
    ["Surah al-Qadr mengandungi ___ ayat.", "5", "4", "7", "3"],
    ["Surah al-Qadr menceritakan tentang…", "malam Lailatulqadar", "kisah Nabi Musa", "hari kiamat sahaja", "kisah Ashabul Kahfi"],
    ["Surah al-Ikhlas menerangkan tentang…", "keesaan Allah", "kisah tentera bergajah", "adab makan", "puasa"],
    ["Al-Quran diturunkan dalam bahasa…", "Arab", "Melayu", "Parsi", "Ibrani"],
    ["Al-Quran mula diturunkan pada bulan…", "Ramadan", "Syawal", "Muharam", "Rejab"],
    ["Mad asli (mad tabi'i) dibaca sepanjang…", "2 harakat", "4 harakat", "6 harakat", "1 harakat"],
    ["Mad iwad berlaku apabila kita berhenti pada huruf yang berbaris…", "dua di atas (fathatain)", "satu di bawah", "mati", "sabdu"],
    ["Mad badal berlaku apabila huruf hamzah diikuti oleh…", "huruf mad", "huruf qalqalah", "tanwin", "huruf sabdu"],
    ["Huruf qalqalah ada ___ huruf.", "5", "4", "6", "3", "Huruf qalqalah: ق ط ب ج د"],
    ["Ilmu tentang cara membaca al-Quran dengan betul dipanggil…", "tajwid", "tafsir", "fiqh", "sirah"]
  ]},
  { t: "Hadis", q: [
    ["Contoh pemimpin di sekolah ialah…", "guru besar", "pelawat", "penjual di pasar", "pemandu teksi"],
    ["Ketua negara Malaysia ialah…", "Yang di-Pertuan Agong", "Ketua Kampung", "Guru Besar", "Ketua Kelas"],
    ["Sikap yang betul terhadap pemimpin ialah…", "menghormati dan mendoakan kebaikan untuknya", "mengejek pemimpin", "menghina pemimpin di media sosial", "tidak mempedulikan arahannya"],
    ["Menurut hadis, kita wajib mendengar dan taat kepada pemimpin dalam perkara…", "yang baik", "maksiat", "apa sahaja tanpa had", "yang merosakkan"],
    ["Jika pemimpin menyuruh melakukan maksiat, kita…", "tidak wajib taat", "mesti taat", "perlu menyokongnya", "boleh ikut separuh"],
    ["Ketua kelas meminta semua murid membersihkan kelas. Tindakan kita ialah…", "membantu membersihkan kelas", "pura-pura tidak dengar", "keluar bermain", "menyuruh orang lain sahaja"],
    ["Antara pengajaran hadis tentang taat kepada pemimpin ialah…", "masyarakat menjadi aman dan teratur", "masyarakat bergaduh", "pemimpin tidak perlu dihormati", "undang-undang tidak penting"],
    ["Contoh taat kepada pemimpin sekolah ialah…", "mematuhi peraturan sekolah", "ponteng kelas", "membuang sampah merata", "melawan guru"]
  ]},
  { t: "Akidah", q: [
    ["Rukun Iman ada ___ perkara.", "6", "5", "7", "4"],
    ["Rukun Islam ada ___ perkara.", "5", "6", "4", "7"],
    ["Rukun Iman yang pertama ialah beriman kepada…", "Allah", "malaikat", "kitab", "rasul"],
    ["Rukun Iman yang terakhir ialah beriman kepada…", "qada' dan qadar", "hari akhirat", "rasul", "malaikat"],
    ["Sifat wajib bagi Allah ada ___ sifat.", "20", "13", "99", "25"],
    ["Sifat Wujud bermaksud Allah itu…", "ada", "kekal", "Esa", "berkuasa"],
    ["Sifat Baqa' bermaksud Allah itu…", "kekal", "ada", "mendengar", "melihat"],
    ["Sifat Wahdaniyyah bermaksud Allah itu…", "Esa", "kekal", "hidup", "berkata-kata"],
    ["Sifat Qudrah bermaksud Allah itu…", "berkuasa", "mengetahui", "melihat", "ada"],
    ["Sifat Mukhalafatuhu lil hawadith bermaksud Allah…", "berbeza dengan makhluk", "berdiri sendiri", "kekal", "Esa"],
    ["Al-Malik bermaksud Allah Yang Maha…", "Menguasai (Raja)", "Pemurah", "Mendengar", "Pengampun"],
    ["Al-Hasib bermaksud Allah Yang Maha…", "Menghitung", "Melihat", "Pencipta", "Kaya"],
    ["Al-Akhir bermaksud Allah Yang Maha…", "Akhir", "Awal", "Kuat", "Lembut"],
    ["Ar-Razzaq bermaksud Allah Yang Maha…", "Pemberi Rezeki", "Pencipta", "Mendengar", "Bijaksana"],
    ["Malaikat yang menyampaikan wahyu ialah…", "Jibril", "Mikail", "Israfil", "Izrail"],
    ["Malaikat yang menurunkan hujan dan mengagihkan rezeki ialah…", "Mikail", "Jibril", "Malik", "Ridwan"],
    ["Malaikat yang akan meniup sangkakala ialah…", "Israfil", "Izrail", "Munkar", "Raqib"],
    ["Malaikat yang mencatat amalan baik ialah…", "Raqib", "Atid", "Nakir", "Malik"],
    ["Malaikat yang menjaga syurga ialah…", "Ridwan", "Malik", "Jibril", "Mikail"],
    ["Kitab Taurat diturunkan kepada Nabi…", "Musa a.s.", "Isa a.s.", "Daud a.s.", "Muhammad SAW"],
    ["Kitab Zabur diturunkan kepada Nabi…", "Daud a.s.", "Musa a.s.", "Isa a.s.", "Ibrahim a.s."],
    ["Kitab Injil diturunkan kepada Nabi…", "Isa a.s.", "Musa a.s.", "Daud a.s.", "Nuh a.s."],
    ["Nabi dan rasul yang wajib diketahui ada ___ orang.", "25", "20", "10", "5"],
    ["Rasul Ulul Azmi ialah Nabi Nuh, Ibrahim, Musa, Isa dan…", "Muhammad SAW", "Adam a.s.", "Yusuf a.s.", "Sulaiman a.s."],
    ["Mempercayai tangkal boleh memberi perlindungan boleh menyebabkan…", "syirik (merosakkan akidah)", "pahala", "rezeki bertambah", "pandai"]
  ]},
  { t: "Ibadah", q: [
    ["Solat fardu sehari semalam ada ___ waktu.", "5", "3", "4", "6"],
    ["Jumlah rakaat solat fardu sehari semalam ialah…", "17", "15", "20", "11"],
    ["Solat Subuh ada ___ rakaat.", "2", "3", "4", "1"],
    ["Solat Maghrib ada ___ rakaat.", "3", "2", "4", "5"],
    ["Solat Zohor ada ___ rakaat.", "4", "2", "3", "5"],
    ["Rukun solat ada ___ perkara.", "13", "6", "5", "20"],
    ["Rukun solat yang pertama ialah…", "niat", "takbiratul ihram", "membaca al-Fatihah", "rukuk"],
    ["Rukun wuduk ada ___ perkara.", "6", "13", "5", "4"],
    ["Ketika berwuduk, tangan dibasuh hingga…", "ke siku", "ke pergelangan", "ke bahu", "ke jari sahaja"],
    ["Ketika berwuduk, kaki dibasuh hingga…", "ke buku lali", "ke lutut", "ke jari", "ke betis"],
    ["Tayamum dilakukan menggunakan…", "debu tanah yang suci", "air sabun", "pasir pantai basah", "kertas"],
    ["Solat lima waktu ialah contoh…", "fardu ain", "fardu kifayah", "sunat", "harus"],
    ["Solat jenazah ialah contoh…", "fardu kifayah", "fardu ain", "makruh", "haram"],
    ["Fardu kifayah bermaksud…", "jika sebahagian melakukannya, gugur kewajipan yang lain", "wajib setiap orang", "tidak perlu dilakukan", "hanya untuk orang dewasa"],
    ["Rukun Islam yang ketiga ialah…", "mengeluarkan zakat", "berpuasa", "menunaikan haji", "mendirikan solat"],
    ["Rukun Islam yang keempat ialah…", "berpuasa pada bulan Ramadan", "mengeluarkan zakat", "menunaikan haji", "mengucap dua kalimah syahadah"],
    ["Waktu yang paling afdal membayar zakat fitrah ialah sebelum…", "solat sunat Aidilfitri", "bulan Ramadan bermula", "solat Jumaat", "bulan Zulhijah", "Zakat fitrah boleh dibayar sepanjang Ramadan. Waktu afdal ialah pagi Hari Raya sebelum solat sunat Aidilfitri."],
    ["Makan sahur ketika berpuasa hukumnya…", "sunat", "wajib", "haram", "makruh"],
    ["Arah kiblat menghadap ke…", "Kaabah di Makkah", "Masjid Nabawi", "Baitulmaqdis", "Masjid Negara"],
    ["Orang yang melaungkan azan dipanggil…", "bilal (muazzin)", "imam", "khatib", "makmum"]
  ]},
  { t: "Sirah", q: [
    ["Nabi Muhammad SAW dilahirkan di…", "Makkah", "Madinah", "Taif", "Syam"],
    ["Nabi Muhammad SAW lahir pada Tahun…", "Gajah", "Kuda", "Unta", "Hijrah"],
    ["Bapa Nabi Muhammad SAW bernama…", "Abdullah", "Abu Talib", "Abdul Muttalib", "Abbas"],
    ["Ibu Nabi Muhammad SAW bernama…", "Aminah", "Halimatus Saadiah", "Khadijah", "Fatimah"],
    ["Ibu susuan Nabi Muhammad SAW ialah…", "Halimatus Saadiah", "Aminah", "Aisyah", "Ummu Aiman"],
    ["Bapa saudara yang menjaga Nabi selepas datuknya meninggal dunia ialah…", "Abu Talib", "Abu Lahab", "Abdullah", "Hamzah"],
    ["Nabi Muhammad SAW digelar al-Amin kerana baginda…", "sangat jujur dan amanah", "kaya", "kuat", "pandai berniaga sahaja"],
    ["Isteri pertama Nabi Muhammad SAW ialah…", "Siti Khadijah", "Siti Aisyah", "Siti Hafsah", "Siti Fatimah"],
    ["Wahyu pertama diturunkan di…", "Gua Hira'", "Gua Thur", "Masjidil Haram", "Bukit Uhud"],
    ["Wahyu pertama ialah Surah…", "al-Alaq (ayat 1–5)", "al-Fatihah", "al-Ikhlas", "al-Baqarah"],
    ["Sahabat yang menemani Nabi ketika berhijrah ialah…", "Abu Bakar as-Siddiq", "Umar al-Khattab", "Uthman bin Affan", "Ali bin Abi Talib"],
    ["Ketika berhijrah, Nabi dan sahabat bersembunyi di…", "Gua Thur", "Gua Hira'", "Bukit Safa", "Padang Arafah"],
    ["Nabi Muhammad SAW berhijrah dari Makkah ke…", "Madinah", "Taif", "Syam", "Habsyah"],
    ["Masjid pertama yang dibina oleh Nabi Muhammad SAW ialah…", "Masjid Quba", "Masjid Nabawi", "Masjidil Haram", "Masjidil Aqsa"],
    ["Perintah solat lima waktu diterima ketika peristiwa…", "Israk dan Mikraj", "Hijrah", "Perang Badar", "Fathu Makkah"],
    ["Khalifah Islam yang pertama ialah…", "Abu Bakar as-Siddiq", "Umar al-Khattab", "Uthman bin Affan", "Ali bin Abi Talib"],
    ["Nabi Muhammad SAW wafat pada usia…", "63 tahun", "40 tahun", "53 tahun", "70 tahun"]
  ]},
  { t: "Adab", q: [
    ["Sebelum makan, kita disunatkan membaca…", "Bismillah", "Alhamdulillah", "Subhanallah", "Astaghfirullah"],
    ["Selepas makan, kita disunatkan membaca…", "Alhamdulillah", "Bismillah", "Allahu Akbar", "Astaghfirullah"],
    ["Kita makan dan minum menggunakan tangan…", "kanan", "kiri", "kedua-dua", "mana-mana sahaja"],
    ["Ketika masuk ke masjid, kita mendahulukan kaki…", "kanan", "kiri", "mana-mana", "kedua-dua serentak"],
    ["Ketika masuk ke tandas, kita mendahulukan kaki…", "kiri", "kanan", "mana-mana", "kedua-dua serentak"],
    ["Jawapan kepada \"Assalamualaikum\" ialah…", "Waalaikumussalam", "Alhamdulillah", "Insya-Allah", "Masya-Allah"],
    ["Apabila mendengar nama Nabi Muhammad SAW, kita disunatkan…", "berselawat", "diam sahaja", "ketawa", "bertepuk tangan"],
    ["Contoh adab terhadap Allah ialah…", "bersyukur atas nikmat-Nya", "membazir", "berbohong", "malas beribadah"],
    ["Contoh adab terhadap diri sendiri ialah…", "menjaga kebersihan dan kesihatan", "tidur lewat setiap malam", "makan berlebihan", "tidak mandi"],
    ["Apabila ibu bapa memanggil, kita perlu…", "menyahut dengan segera dan sopan", "buat tidak dengar", "menjerit", "lari"],
    ["Contoh adab bersosial yang baik ialah…", "menghormati jiran dan kawan", "mengejek kawan", "bergaduh", "mengambil barang tanpa izin"],
    ["Apabila bersin, kita mengucapkan…", "Alhamdulillah", "Bismillah", "Assalamualaikum", "Subhanallah"],
    ["Ucapan apabila berjanji untuk melakukan sesuatu pada masa hadapan ialah…", "Insya-Allah", "Alhamdulillah", "Astaghfirullah", "Masya-Allah"]
  ]},
  { t: "Jawi", q: [
    ["سکوله|Perkataan Jawi ini dibaca…", "sekolah", "sekali", "sikalah", "sukalah"],
    ["بوکو|Perkataan Jawi ini dibaca…", "buku", "bakul", "baka", "bukit"],
    ["رومه|Perkataan Jawi ini dibaca…", "rumah", "rumai", "ramah", "remah"],
    ["ماکن|Perkataan Jawi ini dibaca…", "makan", "mekar", "makna", "mukun"],
    ["ايبو|Perkataan Jawi ini dibaca…", "ibu", "ubi", "abu", "ibi"],
    ["کوچيڠ|Perkataan Jawi ini dibaca…", "kucing", "kacang", "kicap", "kuning"],
    ["Ejaan Jawi bagi \"buku\" ialah…", "بوکو", "بکو", "بوکوه", "بوک"],
    ["Ejaan Jawi bagi \"ibu\" ialah…", "ايبو", "ابو", "ايب", "عيبو"],
    ["Ejaan Jawi bagi \"nasi\" ialah…", "ناسي", "نسي", "ناس", "نسا"],
    ["ڠ|Huruf Jawi ini mewakili bunyi…", "ng", "ny", "c", "p"],
    ["ڤ|Huruf Jawi ini mewakili bunyi…", "p", "f", "v", "ng"],
    ["چ|Huruf Jawi ini mewakili bunyi…", "c", "j", "ng", "ny"],
    ["Tulisan Jawi ditulis dari…", "kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"],
    ["Contoh jenis khat yang dipelajari di sekolah rendah ialah…", "khat Nasakh dan Rikaah", "khat Cina", "tulisan Rumi bersambung", "tulisan Braille"]
  ]}
];

/* ======================= BAHASA ARAB (ikut tema perbendaharaan kata) ======================= */
SOALAN[5].ba = [
  { t: "Salam dan Perkenalan", q: [
    ["صَبَاحُ الْخَيْرِ|Ungkapan ini bermaksud…", "Selamat pagi", "Selamat malam", "Terima kasih", "Selamat jalan"],
    ["مَسَاءُ الْخَيْرِ|Ungkapan ini bermaksud…", "Selamat petang", "Selamat pagi", "Apa khabar", "Sama-sama"],
    ["شُكْرًا|Perkataan ini bermaksud…", "Terima kasih", "Maaf", "Tolong", "Selamat datang"],
    ["عَفْوًا|Jawapan kepada \"terima kasih\" ialah perkataan ini. Maksudnya…", "Sama-sama", "Selamat pagi", "Jumpa lagi", "Saya"],
    ["مَعَ السَّلَامَةِ|Ungkapan ini bermaksud…", "Selamat jalan", "Selamat pagi", "Terima kasih", "Apa khabar"],
    ["كَيْفَ حَالُكَ؟|Soalan ini bermaksud…", "Apa khabar?", "Siapa nama kamu?", "Di mana kamu tinggal?", "Berapa umur kamu?"],
    ["مَا اسْمُكَ؟|Soalan ini bermaksud…", "Siapa nama kamu?", "Apa khabar?", "Di mana rumah kamu?", "Bila kamu datang?"],
    ["اِسْمِي أَحْمَدُ|Ayat ini bermaksud…", "Nama saya Ahmad", "Ini Ahmad", "Ahmad pergi", "Kawan saya Ahmad"],
    ["\"Selamat datang\" dalam bahasa Arab ialah…", "أَهْلًا وَسَهْلًا", "شُكْرًا", "عَفْوًا", "مَعَ السَّلَامَةِ"]
  ]},
  { t: "Nombor dan Warna", q: [
    ["وَاحِدٌ|Nombor ini ialah…", "1", "2", "3", "10"],
    ["ثَلَاثَةٌ|Nombor ini ialah…", "3", "4", "5", "8"],
    ["خَمْسَةٌ|Nombor ini ialah…", "5", "6", "7", "4"],
    ["سَبْعَةٌ|Nombor ini ialah…", "7", "9", "6", "8"],
    ["عَشَرَةٌ|Nombor ini ialah…", "10", "2", "8", "6"],
    ["Nombor 4 dalam bahasa Arab ialah…", "أَرْبَعَةٌ", "سِتَّةٌ", "تِسْعَةٌ", "ثَمَانِيَةٌ"],
    ["Nombor 2 dalam bahasa Arab ialah…", "اِثْنَانِ", "ثَلَاثَةٌ", "وَاحِدٌ", "عَشَرَةٌ"],
    ["أَحْمَرُ|Warna ini ialah…", "merah", "biru", "hijau", "kuning"],
    ["أَخْضَرُ|Warna ini ialah…", "hijau", "putih", "hitam", "merah"],
    ["أَزْرَقُ|Warna ini ialah…", "biru", "kuning", "merah", "hijau"],
    ["أَبْيَضُ|Warna ini ialah…", "putih", "hitam", "biru", "merah"],
    ["🟡|Warna ini dalam bahasa Arab ialah…", "أَصْفَرُ", "أَسْوَدُ", "أَحْمَرُ", "أَخْضَرُ"],
    ["⚫|Warna ini dalam bahasa Arab ialah…", "أَسْوَدُ", "أَبْيَضُ", "أَزْرَقُ", "أَصْفَرُ"]
  ]},
  { t: "Keluarga dan Diri", q: [
    ["أَبٌ|Perkataan ini bermaksud…", "bapa", "ibu", "datuk", "abang"],
    ["أُمٌّ|Perkataan ini bermaksud…", "ibu", "bapa", "nenek", "kakak"],
    ["أَخٌ|Perkataan ini bermaksud…", "saudara lelaki", "saudara perempuan", "bapa", "datuk"],
    ["أُخْتٌ|Perkataan ini bermaksud…", "saudara perempuan", "saudara lelaki", "ibu", "nenek"],
    ["جَدٌّ|Perkataan ini bermaksud…", "datuk", "bapa", "abang", "pak cik"],
    ["جَدَّةٌ|Perkataan ini bermaksud…", "nenek", "ibu", "kakak", "mak cik"],
    ["👁️|Mata dalam bahasa Arab ialah…", "عَيْنٌ", "أُذُنٌ", "أَنْفٌ", "فَمٌ"],
    ["👂|Telinga dalam bahasa Arab ialah…", "أُذُنٌ", "عَيْنٌ", "يَدٌ", "رَأْسٌ"],
    ["✋|Tangan dalam bahasa Arab ialah…", "يَدٌ", "رِجْلٌ", "فَمٌ", "أَنْفٌ"],
    ["رَأْسٌ|Perkataan ini bermaksud…", "kepala", "kaki", "hidung", "mulut"],
    ["أَنَا|Perkataan ini bermaksud…", "saya", "kamu", "dia", "kami"],
    ["هُوَ|Perkataan ini bermaksud…", "dia (lelaki)", "dia (perempuan)", "saya", "kamu"],
    ["هِيَ|Perkataan ini bermaksud…", "dia (perempuan)", "dia (lelaki)", "kami", "mereka"],
    ["نَحْنُ|Perkataan ini bermaksud…", "kami / kita", "saya", "kamu", "dia"]
  ]},
  { t: "Sekolah", q: [
    ["مَدْرَسَةٌ|Perkataan ini bermaksud…", "sekolah", "masjid", "rumah", "pasar"],
    ["كِتَابٌ|Perkataan ini bermaksud…", "buku", "pen", "beg", "meja"],
    ["قَلَمٌ|Perkataan ini bermaksud…", "pen", "buku", "pembaris", "kerusi"],
    ["مِسْطَرَةٌ|Perkataan ini bermaksud…", "pembaris", "pemadam", "beg", "papan hitam"],
    ["حَقِيبَةٌ|Perkataan ini bermaksud…", "beg", "buku", "meja", "pintu"],
    ["كُرْسِيٌّ|Perkataan ini bermaksud…", "kerusi", "meja", "tingkap", "pintu"],
    ["مُدَرِّسٌ|Perkataan ini bermaksud…", "guru (lelaki)", "murid", "doktor", "polis"],
    ["طَالِبٌ|Perkataan ini bermaksud…", "murid (lelaki)", "guru", "petani", "bapa"],
    ["مَكْتَبَةٌ|Perkataan ini bermaksud…", "perpustakaan", "kelas", "kantin", "padang"],
    ["فَصْلٌ|Perkataan ini bermaksud…", "kelas", "sekolah", "buku", "guru"],
    ["📚|\"Buku\" dalam bahasa Arab ialah…", "كِتَابٌ", "قَلَمٌ", "بَابٌ", "بَيْتٌ"]
  ]},
  { t: "Hari dan Masa", q: [
    ["الْأَحَدُ|Hari ini ialah…", "Ahad", "Isnin", "Jumaat", "Sabtu"],
    ["الِاثْنَيْنِ|Hari ini ialah…", "Isnin", "Selasa", "Ahad", "Khamis"],
    ["الثُّلَاثَاءُ|Hari ini ialah…", "Selasa", "Rabu", "Isnin", "Sabtu"],
    ["الْأَرْبِعَاءُ|Hari ini ialah…", "Rabu", "Khamis", "Selasa", "Ahad"],
    ["الْخَمِيسُ|Hari ini ialah…", "Khamis", "Jumaat", "Rabu", "Isnin"],
    ["الْجُمُعَةُ|Hari ini ialah…", "Jumaat", "Sabtu", "Khamis", "Ahad"],
    ["السَّبْتُ|Hari ini ialah…", "Sabtu", "Ahad", "Jumaat", "Selasa"],
    ["\"Jumaat\" dalam bahasa Arab ialah…", "الْجُمُعَةُ", "الْخَمِيسُ", "السَّبْتُ", "الْأَحَدُ"],
    ["يَوْمٌ|Perkataan ini bermaksud…", "hari", "minggu", "bulan", "tahun"],
    ["صَبَاحٌ|Perkataan ini bermaksud…", "pagi", "petang", "malam", "tengah hari"],
    ["لَيْلٌ|Perkataan ini bermaksud…", "malam", "pagi", "siang", "petang"]
  ]},
  { t: "Makanan dan Tempat", q: [
    ["مَاءٌ|Perkataan ini bermaksud…", "air", "susu", "nasi", "roti"],
    ["خُبْزٌ|Perkataan ini bermaksud…", "roti", "nasi", "ikan", "telur"],
    ["أَرُزٌّ|Perkataan ini bermaksud…", "nasi / beras", "roti", "air", "buah"],
    ["حَلِيبٌ|Perkataan ini bermaksud…", "susu", "air", "jus", "teh"],
    ["تُفَّاحٌ|Perkataan ini bermaksud…", "epal", "pisang", "anggur", "oren"],
    ["🐟|Ikan dalam bahasa Arab ialah…", "سَمَكٌ", "دَجَاجٌ", "بَيْضٌ", "خُبْزٌ"],
    ["🥚|Telur dalam bahasa Arab ialah…", "بَيْضٌ", "مَاءٌ", "أَرُزٌّ", "مَوْزٌ"],
    ["بَيْتٌ|Perkataan ini bermaksud…", "rumah", "sekolah", "masjid", "pasar"],
    ["مَسْجِدٌ|Perkataan ini bermaksud…", "masjid", "rumah", "hospital", "taman"],
    ["سُوقٌ|Perkataan ini bermaksud…", "pasar", "sekolah", "dapur", "taman"],
    ["مَطْبَخٌ|Perkataan ini bermaksud…", "dapur", "bilik tidur", "pasar", "kelas"],
    ["حَدِيقَةٌ|Perkataan ini bermaksud…", "taman", "rumah", "masjid", "dapur"]
  ]},
  { t: "Haiwan dan Pekerjaan", q: [
    ["🐈|Kucing dalam bahasa Arab ialah…", "قِطٌّ", "كَلْبٌ", "أَسَدٌ", "فِيلٌ"],
    ["🐘|Gajah dalam bahasa Arab ialah…", "فِيلٌ", "جَمَلٌ", "حِصَانٌ", "أَسَدٌ"],
    ["🦁|Singa dalam bahasa Arab ialah…", "أَسَدٌ", "قِطٌّ", "بَقَرَةٌ", "فِيلٌ"],
    ["🐪|Unta dalam bahasa Arab ialah…", "جَمَلٌ", "حِصَانٌ", "فِيلٌ", "أَسَدٌ"],
    ["حِصَانٌ|Haiwan ini ialah…", "kuda", "unta", "lembu", "kambing"],
    ["طَائِرٌ|Haiwan ini ialah…", "burung", "ikan", "kucing", "singa"],
    ["طَبِيبٌ|Pekerjaan ini ialah…", "doktor", "guru", "polis", "petani"],
    ["شُرْطِيٌّ|Pekerjaan ini ialah…", "polis", "doktor", "tukang masak", "jurutera"],
    ["فَلَّاحٌ|Pekerjaan ini ialah…", "petani", "nelayan", "guru", "pemandu"],
    ["طَبَّاخٌ|Pekerjaan ini ialah…", "tukang masak", "doktor", "petani", "polis"],
    ["مُهَنْدِسٌ|Pekerjaan ini ialah…", "jurutera", "doktor", "guru", "juruterbang"]
  ]},
  { t: "Tatabahasa Asas", q: [
    ["هَذَا|Kata tunjuk ini bermaksud…", "ini (lelaki)", "ini (perempuan)", "itu (lelaki)", "itu (perempuan)"],
    ["هَذِهِ|Kata tunjuk ini bermaksud…", "ini (perempuan)", "ini (lelaki)", "itu (lelaki)", "itu (perempuan)"],
    ["ذَلِكَ|Kata tunjuk ini bermaksud…", "itu (lelaki)", "ini (lelaki)", "ini (perempuan)", "itu (perempuan)"],
    ["Kata tunjuk yang sesuai untuk \"مَدْرَسَةٌ\" (ini) ialah…", "هَذِهِ", "هَذَا", "ذَلِكَ", "هُوَ"],
    ["Kata tunjuk yang sesuai untuk \"كِتَابٌ\" (ini) ialah…", "هَذَا", "هَذِهِ", "تِلْكَ", "هِيَ"],
    ["Perkataan yang berakhir dengan ة (ta marbutah) biasanya ialah perkataan…", "muannas (perempuan)", "muzakkar (lelaki)", "kata kerja", "kata tanya"],
    ["مَا|Kata tanya ini bermaksud…", "apa", "siapa", "di mana", "berapa"],
    ["مَنْ|Kata tanya ini bermaksud…", "siapa", "apa", "bila", "bagaimana"],
    ["أَيْنَ|Kata tanya ini bermaksud…", "di mana", "bila", "siapa", "berapa"],
    ["كَمْ|Kata tanya ini bermaksud…", "berapa", "apa", "di mana", "mengapa"],
    ["فِي|Kata sendi ini bermaksud…", "di dalam", "di atas", "di bawah", "di belakang"],
    ["عَلَى|Kata sendi ini bermaksud…", "di atas", "di dalam", "di bawah", "di hadapan"],
    ["تَحْتَ|Kata sendi ini bermaksud…", "di bawah", "di atas", "di dalam", "di sebelah"],
    ["كَتَبَ|Kata kerja ini bermaksud…", "telah menulis", "telah membaca", "telah makan", "telah pergi"],
    ["قَرَأَ|Kata kerja ini bermaksud…", "telah membaca", "telah menulis", "telah duduk", "telah tidur"],
    ["ذَهَبَ|Kata kerja ini bermaksud…", "telah pergi", "telah datang", "telah minum", "telah makan"]
  ]}
];

})();
