/* =========================================================
   BANK SOALAN — Cerdik Ceria
   Format setiap soalan:
   ["Soalan", "Jawapan BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Jawapan betul SENTIASA di tempat kedua. Pilihan akan dikocok secara rawak dalam app.
   Nak tambah soalan? Salin satu baris, tukar isinya, simpan.
   Matematik dijana automatik (lihat bahagian bawah) + soalan tetap.
   ========================================================= */

const BANK = {
  bm: {
    1: [
      ["Yang manakah huruf vokal?", "a, e, i, o, u", "b, c, d, f, g", "k, l, m, n, p", "r, s, t, w, y"],
      ["\"bu\" + \"ku\" menjadi perkataan…", "buku", "kuku", "baku", "bubu"],
      ["🐱 Haiwan ini dipanggil…", "kucing", "kambing", "kancil", "katak"],
      ["Lawan bagi perkataan \"besar\" ialah…", "kecil", "tinggi", "panjang", "gemuk"],
      ["Ali ___ nasi di dapur.", "makan", "tidur", "mandi", "menulis"],
      ["Berapakah suku kata dalam perkataan \"sekolah\"?", "3", "2", "4", "5", "se-ko-lah = 3 suku kata"],
      ["🍎 Buah ini dipanggil…", "epal", "oren", "pisang", "anggur"],
      ["Ibu memasak di ___.", "dapur", "bilik air", "garaj", "taman"],
      ["Lawan bagi perkataan \"tinggi\" ialah…", "rendah", "besar", "jauh", "lambat"],
      ["Huruf pertama perkataan \"rumah\" ialah…", "r", "u", "m", "h"],
      ["\"ma\" + \"ta\" menjadi perkataan…", "mata", "tama", "mama", "tata"],
      ["☀️ Benda ini dipanggil…", "matahari", "bulan", "bintang", "awan"]
    ],
    2: [
      ["Yang manakah kata nama khas?", "Kuala Lumpur", "bandar", "sekolah", "kereta", "Kata nama khas ialah nama khusus dan dieja dengan huruf besar."],
      ["Penjodoh bilangan yang sesuai: \"satu ___ kereta\"", "buah", "ekor", "orang", "helai"],
      ["Penjodoh bilangan yang sesuai: \"dua ___ kucing\"", "ekor", "buah", "biji", "batang"],
      ["Perkataan yang sama erti dengan \"cantik\" ialah…", "indah", "hodoh", "kotor", "buruk"],
      ["Yang manakah kata kerja?", "berlari", "merah", "meja", "cantik"],
      ["Lawan bagi \"rajin\" ialah…", "malas", "pandai", "cepat", "kuat"],
      ["Ayah ___ surat khabar di ruang tamu.", "membaca", "memasak", "menyapu", "menyiram"],
      ["Tanda baca di akhir ayat tanya ialah…", "?", ".", ",", "!"],
      ["\"rumah-rumah\" ialah contoh…", "kata ganda", "kata kerja", "kata sendi", "kata seru"],
      ["Pensel itu ada ___ meja.", "di atas", "ke atas", "dari atas", "kepada"],
      ["Penjodoh bilangan yang sesuai: \"tiga ___ pensel\"", "batang", "ekor", "helai", "keping"]
    ],
    3: [
      ["Peribahasa \"seperti aur dengan tebing\" bermaksud…", "saling tolong-menolong", "selalu bergaduh", "malas bekerja", "suka bercakap besar"],
      ["Yang manakah kata adjektif?", "merdu", "menyanyi", "penyanyi", "lagu"],
      ["Penjodoh bilangan yang sesuai: \"sepucuk ___\"", "surat", "pisang", "kerusi", "kucing"],
      ["Imbuhan \"pe-\" + \"lukis\" menjadi…", "pelukis", "pemlukis", "pelukisan", "melukis"],
      ["Kata ganti nama diri pertama ialah…", "saya", "kamu", "dia", "mereka"],
      ["Perkataan seerti dengan \"gembira\" ialah…", "riang", "sedih", "marah", "takut"],
      ["Kami pergi ___ sekolah dengan menaiki bas.", "ke", "di", "dari", "pada"],
      ["Yang manakah kata hubung?", "dan", "di", "ke", "wah"],
      ["Lawan bagi \"terang\" ialah…", "gelap", "panas", "cerah", "jelas"],
      ["Penjodoh bilangan yang sesuai: \"sehelai ___\"", "kain", "buku", "kereta", "bola"],
      ["Ejaan yang betul ialah…", "sekolah", "sekola", "skolah", "sekolahh"]
    ],
    4: [
      ["Peribahasa \"berat sama dipikul, ringan sama dijinjing\" bermaksud…", "bekerjasama dalam susah dan senang", "membawa barang berat", "malas membantu orang", "suka membeli-belah"],
      ["Baju itu diperbuat ___ kain sutera.", "daripada", "dari", "kepada", "dengan"],
      ["Penjodoh bilangan yang sesuai: \"sebilah ___\"", "pisau", "buku", "rumah", "telur"],
      ["Imbuhan apitan \"ke-…-an\" + \"bersih\" menjadi…", "kebersihan", "pembersihan", "membersihkan", "bersihan"],
      ["Yang manakah kata majmuk?", "kapal terbang", "berlari-lari", "cantik", "membaca"],
      ["Simpulan bahasa \"kaki bangku\" bermaksud…", "tidak pandai bermain bola", "kaki yang panjang", "suka duduk", "kaki kerusi"],
      ["Yang manakah ayat pasif?", "Buku itu dibaca oleh Ali.", "Ali membaca buku itu.", "Ali suka membaca.", "Ali sedang membaca."],
      ["Perkataan seerti dengan \"pintar\" ialah…", "cerdik", "bodoh", "lambat", "malas"],
      ["Ahmad sedang ___ bola di padang.", "menendang", "membaca", "menulis", "memasak"],
      ["Penjodoh bilangan yang sesuai: \"sebentuk ___\"", "cincin", "kereta", "lembu", "surat"]
    ],
    5: [
      ["Simpulan bahasa \"ringan tulang\" bermaksud…", "rajin", "malas", "kurus", "lemah"],
      ["Peribahasa \"melentur buluh biarlah dari rebungnya\" bermaksud…", "mendidik anak sejak kecil", "menanam buluh", "membuat kraf buluh", "memasak rebung"],
      ["Simpulan bahasa \"besar kepala\" bermaksud…", "sombong dan degil", "pandai", "pemurah", "kepala yang besar"],
      ["Yang manakah kata ganda berentak?", "sayur-mayur", "rumah-rumah", "kanak-kanak", "buku-buku"],
      ["Kuala Lumpur ___ ibu negara Malaysia.", "ialah", "adalah", "iaitu", "yakni", "\"ialah\" digunakan di hadapan kata nama."],
      ["Yang manakah kata seru?", "Wah", "dan", "sangat", "kerana"],
      ["Peribahasa \"bagai kacang lupakan kulit\" bermaksud…", "orang yang lupa asal usul atau jasa orang", "orang yang suka makan kacang", "orang yang pemurah", "orang yang rajin"],
      ["Imbuhan \"memper-\" + \"besar\" menjadi…", "memperbesar", "membesarkan", "pembesaran", "terbesar"],
      ["Simpulan bahasa \"tangan terbuka\" bermaksud…", "menerima dengan senang hati", "suka mencuri", "malas bekerja", "tangan yang luka"],
      ["Penjodoh bilangan yang sesuai: \"sebuah ___\"", "rumah", "ikan", "kertas", "pensel"]
    ],
    6: [
      ["Peribahasa \"air dicincang tidak akan putus\" bermaksud…", "persaudaraan tidak putus walaupun bergaduh", "air sukar dipotong", "sungai yang panjang", "air yang jernih"],
      ["Peribahasa \"ada udang di sebalik batu\" bermaksud…", "ada maksud tersembunyi", "banyak udang di sungai", "suka bersembunyi", "orang yang jujur"],
      ["Simpulan bahasa \"panjang tangan\" bermaksud…", "suka mencuri", "suka menolong", "tinggi lampai", "suka bersalam"],
      ["Ejaan kata majmuk yang betul ialah…", "tanggungjawab", "tanggung jawab", "tangung jawab", "tanggong jawab", "\"tanggungjawab\" ialah kata majmuk yang telah mantap dan dieja bercantum."],
      ["Imbuhan \"per-…-an\" + \"satu\" menjadi…", "persatuan", "penyatuan", "bersatu", "kesatuan"],
      ["Penjodoh bilangan yang sesuai: \"sebutir ___\"", "mutiara", "kereta", "rumah", "lembu"],
      ["Simpulan bahasa \"buah hati\" bermaksud…", "orang yang sangat disayangi", "buah yang manis", "jantung", "hadiah"],
      ["Saya ingin pergi ke kedai, ___ hujan turun dengan lebat.", "tetapi", "dan", "atau", "supaya"],
      ["Peribahasa \"hujan emas di negeri orang, hujan batu di negeri sendiri, lebih baik di negeri sendiri\" bermaksud…", "tanah air sendiri lebih baik", "negeri orang lebih kaya", "hujan batu itu bahaya", "suka melancong"],
      ["Simpulan bahasa \"kaki ayam\" bermaksud…", "tidak memakai kasut", "kaki yang kurus", "suka berjalan", "berlari laju"]
    ]
  },

  bi: {
    1: [
      ["🐶 This animal is a…", "dog", "cat", "cow", "duck"],
      ["What colour is the sky on a sunny day?", "blue", "red", "green", "black"],
      ["I ___ a boy.", "am", "is", "are", "be"],
      ["The opposite of \"big\" is…", "small", "tall", "long", "fat"],
      ["How many legs does a cat have?", "four", "two", "six", "eight"],
      ["Which one is a fruit?", "banana", "chair", "pencil", "shoe"],
      ["One cat, two ___.", "cats", "cat", "cates", "catz"],
      ["We say \"Good ___\" when we meet someone early in the day.", "morning", "night", "bye", "sleep"],
      ["🔴 This colour is…", "red", "yellow", "blue", "white"],
      ["This is ___ apple.", "an", "a", "the", "two"],
      ["🐟 This animal is a…", "fish", "bird", "frog", "goat"]
    ],
    2: [
      ["She ___ my sister.", "is", "am", "are", "be"],
      ["Which day comes after Monday?", "Tuesday", "Sunday", "Friday", "Thursday"],
      ["One box, two ___.", "boxes", "boxs", "box", "boxies"],
      ["We see with our…", "eyes", "ears", "nose", "hands"],
      ["Where do you sleep?", "bedroom", "kitchen", "garage", "bathroom"],
      ["The opposite of \"happy\" is…", "sad", "glad", "funny", "kind"],
      ["They ___ playing football.", "are", "is", "am", "was"],
      ["How many months are there in a year?", "twelve", "ten", "seven", "thirty"],
      ["📦 The ball is ___ the box (we cannot see it).", "in", "on", "under", "behind"],
      ["Which animal can fly?", "bird", "cow", "fish", "goat"]
    ],
    3: [
      ["The past tense of \"go\" is…", "went", "goed", "gone", "going"],
      ["He ___ to school every day.", "goes", "go", "going", "gone"],
      ["One child, two ___.", "children", "childs", "childes", "child"],
      ["A word that means the same as \"big\" is…", "large", "tiny", "short", "thin"],
      ["The first month of the year is…", "January", "March", "December", "June"],
      ["There ___ three books on the table.", "are", "is", "am", "be"],
      ["Which word asks about a place?", "Where", "When", "Who", "Why"],
      ["The opposite of \"early\" is…", "late", "fast", "soon", "first"],
      ["Ali is tall. Abu is ___ than Ali.", "taller", "tall", "tallest", "more tall"],
      ["A person who treats sick people is a…", "doctor", "farmer", "pilot", "baker"]
    ],
    4: [
      ["The past tense of \"eat\" is…", "ate", "eated", "eaten", "eating"],
      ["Good, better, ___.", "best", "goodest", "more good", "bestest"],
      ["Ali and Abu ___ good friends.", "are", "is", "am", "was"],
      ["Siti is kind. ___ helps her mother.", "She", "He", "It", "They"],
      ["I like tea, ___ I don't like coffee.", "but", "and", "or", "so"],
      ["The past tense of \"buy\" is…", "bought", "buyed", "brought", "buys"],
      ["One mouse, two ___.", "mice", "mouses", "mousies", "mices"],
      ["Yesterday, we ___ to the zoo.", "went", "go", "goes", "going"],
      ["Which word is an adjective?", "beautiful", "run", "quickly", "table"],
      ["How ___ apples do you have?", "many", "much", "long", "old"]
    ],
    5: [
      ["How ___ water is in the bottle?", "much", "many", "long", "old"],
      ["The past tense of \"write\" is…", "wrote", "writed", "written", "writes"],
      ["If it rains, I ___ stay at home.", "will", "was", "am", "did"],
      ["A word that means the same as \"difficult\" is…", "hard", "easy", "soft", "simple"],
      ["Which sentence is in the present continuous tense?", "She is reading a book.", "She read a book.", "She reads a book.", "She will read a book."],
      ["This book is ___ than that magazine.", "thicker", "thick", "thickest", "more thick"],
      ["The opposite of \"ancient\" is…", "modern", "old", "dirty", "broken"],
      ["This bag belongs to me. It is ___ bag.", "my", "me", "I", "mine"],
      ["I have lived here ___ 2020.", "since", "for", "from", "at"],
      ["\"un\" + \"happy\" = ?", "unhappy", "dishappy", "nonhappy", "inhappy"]
    ],
    6: [
      ["Which sentence is in the passive voice?", "The cake was baked by my mother.", "My mother baked the cake.", "My mother bakes cakes.", "My mother is baking."],
      ["Neither Ali ___ Abu came to the party.", "nor", "or", "and", "but"],
      ["see — saw — ___", "seen", "seed", "sawn", "seeing"],
      ["The idiom \"a piece of cake\" means…", "very easy", "very sweet", "very small", "very hungry"],
      ["He runs quickly. The adverb is…", "quickly", "runs", "He", "run"],
      ["She has been waiting ___ two hours.", "for", "since", "at", "on"],
      ["Which word is spelled correctly?", "necessary", "neccessary", "necesary", "neccesary"],
      ["A word that means the same as \"enormous\" is…", "huge", "tiny", "weak", "quiet"],
      ["You are a student, ___?", "aren't you", "isn't it", "don't you", "are you"],
      ["The plural of \"knife\" is…", "knives", "knifes", "knifs", "knive"]
    ]
  },

  sains: {
    1: [
      ["Kita melihat menggunakan…", "mata", "telinga", "hidung", "lidah"],
      ["Yang manakah benda hidup?", "kucing", "batu", "kerusi", "bola"],
      ["Haiwan yang bertelur ialah…", "ayam", "kucing", "lembu", "kambing"],
      ["Tumbuhan memerlukan ___ untuk hidup.", "air dan cahaya", "pasir sahaja", "plastik", "batu"],
      ["Magnet boleh menarik…", "paku besi", "kertas", "kayu", "getah"],
      ["Kita merasa makanan menggunakan…", "lidah", "mata", "kulit", "telinga"],
      ["Haiwan yang makan tumbuhan sahaja ialah…", "lembu", "harimau", "helang", "buaya"],
      ["Bahagian tumbuhan yang menyerap air dari tanah ialah…", "akar", "daun", "bunga", "buah"],
      ["Sumber cahaya semula jadi yang utama ialah…", "Matahari", "lampu", "lilin", "televisyen"],
      ["Kita mendengar menggunakan…", "telinga", "mata", "hidung", "tangan"]
    ],
    2: [
      ["Kitar hidup rama-rama bermula dengan…", "telur", "beluncas", "pupa", "rama-rama dewasa"],
      ["Haiwan yang beranak ialah…", "kucing", "ayam", "penyu", "itik"],
      ["Air akan menjadi ais apabila…", "disejukkan", "dipanaskan", "dikacau", "ditiup"],
      ["Bayang-bayang terbentuk apabila cahaya…", "dihalang oleh objek", "sangat terang", "berwarna", "dipantulkan oleh cermin"],
      ["Bahagian tumbuhan yang membuat makanan ialah…", "daun", "akar", "batang", "biji"],
      ["Ikan bernafas melalui…", "insang", "paru-paru", "kulit kering", "hidung"],
      ["Bahan yang boleh menyerap air ialah…", "span", "plastik", "kaca", "besi"],
      ["Planet tempat kita tinggal ialah…", "Bumi", "Marikh", "Musytari", "Zuhal"],
      ["Bahan yang lut sinar (cahaya boleh melaluinya) ialah…", "kaca jernih", "kayu", "batu", "kadbod"],
      ["Apabila kita membesar, badan kita menjadi…", "lebih tinggi dan berat", "lebih kecil", "lebih ringan", "tidak berubah"]
    ],
    3: [
      ["Organ pernafasan manusia ialah…", "paru-paru", "jantung", "perut", "otak"],
      ["Belalang bernafas melalui…", "spirakel", "insang", "paru-paru", "hidung"],
      ["Cacing tanah bernafas melalui…", "kulit yang lembap", "insang", "spirakel", "paru-paru"],
      ["Bahan yang boleh mengalirkan elektrik ialah…", "dawai kuprum", "getah", "plastik", "kayu"],
      ["Bahan berasid seperti cuka mempunyai rasa…", "masam", "manis", "masin", "tawar"],
      ["Kutub magnet yang sama apabila didekatkan akan…", "menolak", "menarik", "melekat", "bercahaya"],
      ["Tumbuhan akan tumbuh ke arah…", "cahaya", "kegelapan", "angin", "bunyi"],
      ["Bahan beralkali mempunyai rasa…", "pahit", "masam", "manis", "masin"],
      ["Pokok pisang membiak melalui…", "sulur", "biji", "daun", "spora"],
      ["Jantung berfungsi untuk…", "mengepam darah", "mencerna makanan", "bernafas", "berfikir"]
    ],
    4: [
      ["Unit SI bagi panjang ialah…", "meter", "kilogram", "saat", "liter"],
      ["Proses tumbuhan membuat makanan dipanggil…", "fotosintesis", "respirasi", "pencernaan", "penyejatan"],
      ["Gas yang diperlukan untuk bernafas ialah…", "oksigen", "karbon dioksida", "nitrogen", "asap"],
      ["Kura-kura melindungi diri dengan…", "cengkerang yang keras", "duri tajam", "warna terang", "lari laju"],
      ["Planet yang paling hampir dengan Matahari ialah…", "Utarid", "Bumi", "Marikh", "Neptun"],
      ["Berapakah bilangan planet dalam Sistem Suria?", "8", "9", "7", "10"],
      ["Alat untuk mengukur isi padu cecair ialah…", "silinder penyukat", "pembaris", "jam randik", "termometer"],
      ["Air membeku pada suhu…", "0°C", "100°C", "50°C", "37°C"],
      ["Air mendidih pada suhu…", "100°C", "0°C", "37°C", "200°C"],
      ["Yang manakah boleh dikitar semula?", "tin aluminium", "sisa makanan", "tisu kotor", "lampin pakai buang"]
    ],
    5: [
      ["Cahaya bergerak dalam garis…", "lurus", "bengkang-bengkok", "bulat", "putus-putus"],
      ["Perubahan cecair kepada gas dipanggil…", "penyejatan", "pembekuan", "kondensasi", "peleburan"],
      ["Perubahan wap air kepada titisan air dipanggil…", "kondensasi", "penyejatan", "pembekuan", "pendidihan"],
      ["Bumi berputar pada paksinya dalam masa…", "24 jam", "12 jam", "7 hari", "365 hari"],
      ["Bumi mengelilingi Matahari dalam masa lebih kurang…", "365 hari", "30 hari", "24 jam", "7 hari"],
      ["Pengaratan besi memerlukan…", "air dan udara", "cahaya sahaja", "pasir", "minyak"],
      ["Haiwan yang memburu haiwan lain untuk makanan dipanggil…", "pemangsa", "mangsa", "pengurai", "pengeluar"],
      ["Mentol dalam litar selari menyala lebih ___ berbanding litar bersiri.", "terang", "malap", "perlahan", "kecil"],
      ["Fasa Bulan apabila seluruh permukaannya kelihatan bercahaya ialah…", "Bulan purnama", "anak bulan", "bulan sabit", "bulan separa"],
      ["Semut hidup berkumpulan untuk…", "mendapatkan makanan dan melindungi diri", "tidur", "bermain", "mengelak hujan sahaja"]
    ],
    6: [
      ["Gerhana Bulan berlaku apabila ___ berada di antara Matahari dan Bulan.", "Bumi", "Marikh", "Utarid", "Zuhrah"],
      ["Daya geseran bertindak…", "menentang arah gerakan", "mempercepat gerakan", "menarik objek ke atas", "tidak memberi kesan"],
      ["Laju = ?", "jarak ÷ masa", "masa ÷ jarak", "jarak × masa", "jarak + masa"],
      ["Unit bagi laju ialah…", "km/j", "kg", "°C", "liter"],
      ["Mengawet ikan menggunakan garam dipanggil…", "pengasinan", "pengetinan", "penyejukbekuan", "pempasteuran"],
      ["Pengaratan pagar besi boleh dicegah dengan…", "mengecatnya", "menyiramnya dengan air", "membiarkannya", "menggosok dengan pasir"],
      ["Buruj yang menunjukkan arah selatan ialah…", "Buruj Pari", "Buruj Belantik", "Buruj Biduk", "Buruj Kala"],
      ["Contoh sumber tenaga yang boleh diperbaharui ialah…", "angin", "petroleum", "arang batu", "gas asli"],
      ["Membuang sampah ke dalam sungai menyebabkan…", "pencemaran air", "udara bersih", "ikan bertambah", "air lebih jernih"],
      ["Lebah dan bunga mempunyai hubungan yang…", "saling memberi manfaat", "saling merugikan", "tiada kaitan", "lebah memusnahkan bunga"]
    ]
  },

  /* Sejarah bermula Tahun 4 dalam KSSR */
  sejarah: {
    4: [
      ["Sejarah ialah kajian tentang peristiwa…", "masa lalu", "masa hadapan", "dalam mimpi", "cerita rekaan"],
      ["Pengasas Kesultanan Melayu Melaka ialah…", "Parameswara", "Hang Tuah", "Tun Perak", "Sultan Mahmud"],
      ["Melaka diasaskan sekitar tahun…", "1400", "1511", "1957", "1824"],
      ["Nama Melaka dikatakan berasal daripada nama…", "sebatang pokok", "seekor kancil", "sebuah sungai", "seorang raja"],
      ["Rangka manusia \"Perak Man\" ditemui di…", "Gua Gunung Runtuh", "Gua Niah", "Gua Tempurung", "Batu Caves"],
      ["Manusia zaman prasejarah menggunakan alatan yang diperbuat daripada…", "batu", "plastik", "besi keluli", "kaca"],
      ["Bendahara Melaka yang terkenal kerana kebijaksanaannya ialah…", "Tun Perak", "Hang Jebat", "Parameswara", "Tun Teja"],
      ["Laksamana Melaka yang terkenal ialah…", "Hang Tuah", "Tun Perak", "Mat Kilau", "Rentap"],
      ["Melaka jatuh ke tangan Portugis pada tahun…", "1511", "1400", "1957", "1641"],
      ["Contoh sumber sejarah bertulis ialah…", "dokumen dan buku lama", "cerita dongeng", "mimpi", "lukisan kartun"]
    ],
    5: [
      ["Ketua negara Malaysia ialah…", "Yang di-Pertuan Agong", "Perdana Menteri", "Menteri Besar", "Ketua Menteri"],
      ["Bendera Malaysia dikenali sebagai…", "Jalur Gemilang", "Sang Saka", "Bintang Kejora", "Merah Putih"],
      ["Berapakah jalur merah dan putih pada Jalur Gemilang?", "14", "13", "11", "9"],
      ["Lagu kebangsaan Malaysia ialah…", "Negaraku", "Jalur Gemilang", "Tanggal 31", "Malaysia Berjaya"],
      ["Agama bagi Persekutuan Malaysia ialah…", "Islam", "Kristian", "Buddha", "Hindu"],
      ["Bahasa kebangsaan Malaysia ialah…", "Bahasa Melayu", "Bahasa Inggeris", "Bahasa Cina", "Bahasa Tamil"],
      ["Prinsip pertama Rukun Negara ialah…", "Kepercayaan kepada Tuhan", "Kesetiaan kepada Raja dan Negara", "Keluhuran Perlembagaan", "Kesopanan dan Kesusilaan"],
      ["Bunga kebangsaan Malaysia ialah…", "bunga raya", "bunga mawar", "bunga orkid", "bunga melur"],
      ["Berapakah negeri di Malaysia yang mempunyai Raja atau Sultan?", "9", "13", "7", "11"],
      ["Haiwan yang terdapat pada Jata Negara ialah…", "harimau", "gajah", "helang", "kancil"]
    ],
    6: [
      ["Tanah Melayu mencapai kemerdekaan pada…", "31 Ogos 1957", "16 September 1963", "31 Ogos 1963", "1 Januari 1957"],
      ["Perdana Menteri Malaysia yang pertama ialah…", "Tunku Abdul Rahman", "Tun Abdul Razak", "Tun Hussein Onn", "Tun Dr. Mahathir"],
      ["Malaysia dibentuk pada…", "16 September 1963", "31 Ogos 1957", "9 Ogos 1965", "1 Februari 1974"],
      ["Laungan \"Merdeka!\" pada 31 Ogos 1957 diadakan di…", "Stadium Merdeka", "Dataran Merdeka", "Bukit Jalil", "Putrajaya"],
      ["Negeri yang keluar daripada Malaysia pada tahun 1965 ialah…", "Singapura", "Brunei", "Sabah", "Sarawak"],
      ["Tokoh yang menentang British di Pasir Salak, Perak ialah…", "Datuk Maharaja Lela", "Mat Kilau", "Rentap", "Mat Salleh"],
      ["Mat Kilau berjuang menentang British di negeri…", "Pahang", "Perak", "Sabah", "Kelantan"],
      ["Rentap berjuang menentang penjajah di…", "Sarawak", "Sabah", "Johor", "Terengganu"],
      ["Mat Salleh berjuang menentang British di…", "Sabah", "Sarawak", "Perak", "Pahang"],
      ["Perdana Menteri Malaysia yang kedua ialah…", "Tun Abdul Razak", "Tunku Abdul Rahman", "Tun Hussein Onn", "Tun Abdullah Badawi"]
    ]
  },

  /* Soalan Matematik tetap (bercampur dengan soalan yang dijana) */
  math: {
    1: [
      ["Bentuk yang mempunyai 3 sisi ialah…", "segi tiga", "segi empat", "bulatan", "bintang"],
      ["Selepas hari Isnin ialah hari…", "Selasa", "Rabu", "Ahad", "Jumaat"],
      ["Nombor selepas 49 ialah…", "50", "48", "40", "59"]
    ],
    2: [
      ["RM1 = ___ sen", "100", "10", "50", "1000"],
      ["1 jam = ___ minit", "60", "100", "30", "24"],
      ["Bentuk bola ialah…", "sfera", "kubus", "kon", "silinder"]
    ],
    3: [
      ["1 kilogram = ___ gram", "1000", "100", "10", "500"],
      ["1 meter = ___ sentimeter", "100", "10", "1000", "60"],
      ["1 hari = ___ jam", "24", "12", "60", "7"]
    ],
    4: [
      ["1 liter = ___ mililiter", "1000", "100", "10", "500"],
      ["Segi empat sama mempunyai ___ sudut tegak.", "4", "3", "2", "0"],
      ["1 tahun = ___ bulan", "12", "10", "52", "365"]
    ],
    5: [
      ["1 kilometer = ___ meter", "1000", "100", "10", "10000"],
      ["Perimeter segi empat sama bersisi 5 cm ialah…", "20 cm", "25 cm", "10 cm", "15 cm"],
      ["Luas segi empat tepat 6 cm × 4 cm ialah…", "24 cm²", "20 cm²", "10 cm²", "48 cm²"]
    ],
    6: [
      ["1 dekad = ___ tahun", "10", "100", "5", "1000"],
      ["1 abad = ___ tahun", "100", "10", "1000", "50"],
      ["Isi padu kubus bersisi 3 cm ialah…", "27 cm³", "9 cm³", "18 cm³", "12 cm³"]
    ]
  }
};

/* ---------- PENJANA SOALAN MATEMATIK ---------- */
const MATH = (() => {
  const r = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const pick = arr => arr[r(0, arr.length - 1)];
  const fmt = n => Number.isInteger(n) ? n.toLocaleString("en-MY") : n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // buat 3 jawapan salah yang munasabah
  function wrong(ans, offsets, dec) {
    const set = new Set();
    let tries = 0;
    while (set.size < 3 && tries < 60) {
      tries++;
      let o = pick(offsets) * (Math.random() < 0.5 ? -1 : 1);
      let v = dec ? +(ans + o).toFixed(2) : ans + o;
      if (v >= 0 && v !== ans) set.add(v);
    }
    let k = 1;
    while (set.size < 3) { set.add(ans + k * 3); k++; }
    return [...set];
  }
  function q(text, ans, offsets, dec, exp) {
    return [text, fmt(ans), ...wrong(ans, offsets, dec).map(fmt), exp || ""];
  }

  const add = (max) => { const a = r(1, max), b = r(1, max); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 2, 10, 11]); };
  const sub = (max) => { const a = r(10, max), b = r(1, a); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 2, 10, 9]); };
  const mul = (ts, m) => { const a = pick(ts), b = r(1, m); return q(`${a} × ${b} = ?`, a * b, [a, 1, 2, b]); };
  const div = (ts, m) => { const a = pick(ts), b = r(1, m); return q(`${a * b} ÷ ${a} = ?`, b, [1, 2, 3]); };
  const fruits = ["🍎", "🍌", "🍓", "⭐", "🎈", "🐥", "🌸"];

  const gens = {
    1: [
      () => add(30), () => add(50), () => sub(50), () => sub(99),
      () => { const n = r(3, 12), f = pick(fruits); return q(`Berapa banyak ${f}?\n${f.repeat(n)}`, n, [1, 2]); },
      () => { const s = new Set(); while (s.size < 4) s.add(r(10, 99)); const ns = [...s].sort((x, y) => y - x); return ["Nombor manakah yang paling besar?", ...ns.map(String), ""]; }
    ],
    2: [() => add(500), () => sub(999), () => mul([2, 5, 10], 10), () => mul([3, 4], 10), () => add(999)],
    3: [() => add(5000), () => sub(9999), () => mul([2, 3, 4, 5, 6, 7, 8, 9], 10), () => div([2, 3, 4, 5, 6, 7, 8, 9], 10)],
    4: [
      () => add(50000), () => sub(99999),
      () => { const a = r(11, 99), b = r(2, 9); return q(`${a} × ${b} = ?`, a * b, [b, 10, 1, a]); },
      () => { const a = r(2, 9), b = r(11, 99); return q(`${fmt(a * b)} ÷ ${a} = ?`, b, [1, 2, 10]); },
      () => { const d = pick([2, 4, 5, 10]), n = d * r(2, 10); return q(`1/${d} daripada ${n} = ?`, n / d, [1, 2, d]); }
    ],
    5: [
      () => { const a = r(100, 999), b = r(11, 99); return q(`${a} × ${b} = ?`, a * b, [a, 10, 100, b]); },
      () => { const a = r(100, 9999) / 100, b = r(100, 9999) / 100; return q(`${fmt(a)} + ${fmt(b)} = ?`, +(a + b).toFixed(2), [0.1, 1, 0.01, 10], true); },
      () => { const p = pick([10, 25, 50]), n = r(1, 20) * 100; return q(`${p}% daripada ${fmt(n)} = ?`, n * p / 100, [10, 50, 100, n / 10]); },
      () => { const a = r(100000, 999999), b = r(10000, 99999); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const n = r(1000, 99999); const ans = Math.round(n / 1000) * 1000; return q(`Bundarkan ${fmt(n)} kepada ribu yang terdekat.`, ans, [1000, 100, 2000]); }
    ],
    6: [
      () => { const a = r(2, 50), b = r(2, 12), c = r(2, 12); return q(`${a} + ${b} × ${c} = ?`, a + b * c, [a, b, c, 10], false, "Darab dahulu, kemudian tambah."); },
      () => { const p = pick([20, 30, 40, 75]), n = r(1, 20) * 20; return q(`${p}% daripada ${fmt(n)} = ?`, n * p / 100, [5, 10, 20]); },
      () => { const n = r(2, 15) * 4; return q(`3/4 daripada ${n} = ?`, n * 3 / 4, [1, 3, n / 4]); },
      () => { const avg = r(10, 90), x = r(1, 9); return q(`Purata bagi ${avg - x}, ${avg} dan ${avg + x} ialah…`, avg, [1, 2, x]); },
      () => { const a = r(100, 9999) / 100, b = r(2, 9); return q(`${fmt(a)} × ${b} = ?`, +(a * b).toFixed(2), [0.1, 1, 0.5, 10], true); }
    ]
  };
  function generate(year, n) {
    const fixed = (BANK.math[year] || []).slice().sort(() => Math.random() - 0.5);
    const out = [];
    const nFixed = Math.min(fixed.length, Math.round(n * 0.2));
    for (let i = 0; i < nFixed; i++) out.push(fixed[i]);
    const seen = new Set();
    let guard = 0;
    while (out.length < n && guard < 500) {
      guard++;
      const item = pick(gens[year])();
      if (seen.has(item[0])) continue;
      seen.add(item[0]); out.push(item);
    }
    return out.sort(() => Math.random() - 0.5);
  }
  return { generate };
})();
