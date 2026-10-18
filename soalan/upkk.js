/* =========================================================
   UPKK — Cerdik Ceria
   Ujian Penilaian Kelas KAFA (murid Tahun 5). Tujuh subjek bertulis:
   Al-Quran, Akidah, Ibadah, Sirah, Adab, Jawi & Khat, Bahasa Arab.
   Topik ikut sukatan KAFA. Soalan asli dalam gaya UPKK —
   BUKAN disalin daripada kertas soalan sebenar (hak cipta JAKIM).

   Format: ["Soalan", "BETUL", "Salah 1", "Salah 2", "Salah 3", "Penerangan (pilihan)"]
   Gambar/teks besar: "قُلْ هُوَ اللَّهُ أَحَدٌ|Soalan…" → bahagian sebelum | dipaparkan BESAR.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from } = MK;

/* ---------- data Al-Quran: [potongan ayat, nama surah, bil. ayat, nombor surah] ---------- */
const SURAH = [
  ["الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", "Al-Fatihah", 7, 1],
  ["أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", "Al-Insyirah", 8, 94],
  ["وَالضُّحَىٰ", "Ad-Dhuha", 11, 93],
  ["وَالتِّينِ وَالزَّيْتُونِ", "At-Tin", 8, 95],
  ["إِنَّا أَنْزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ", "Al-Qadr", 5, 97],
  ["إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا", "Az-Zalzalah", 8, 99],
  ["وَالْعَادِيَاتِ ضَبْحًا", "Al-'Adiyat", 11, 100],
  ["الْقَارِعَةُ", "Al-Qari'ah", 11, 101],
  ["أَلْهَاكُمُ التَّكَاثُرُ", "At-Takathur", 8, 102],
  ["وَالْعَصْرِ", "Al-'Asr", 3, 103],
  ["وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ", "Al-Humazah", 9, 104],
  ["أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ", "Al-Fil", 5, 105],
  ["لِإِيلَافِ قُرَيْشٍ", "Quraisy", 4, 106],
  ["أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ", "Al-Ma'un", 7, 107],
  ["إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", "Al-Kauthar", 3, 108],
  ["قُلْ يَا أَيُّهَا الْكَافِرُونَ", "Al-Kafirun", 6, 109],
  ["إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", "An-Nasr", 3, 110],
  ["تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ", "Al-Masad", 5, 111],
  ["قُلْ هُوَ اللَّهُ أَحَدٌ", "Al-Ikhlas", 4, 112],
  ["قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", "Al-Falaq", 5, 113],
  ["قُلْ أَعُوذُ بِرَبِّ النَّاسِ", "An-Nas", 6, 114]
];
const SNAMES = SURAH.map(s => s[1]);
const near = n => [n - 2, n - 1, n + 1, n + 2, n + 3].filter(x => x > 0 && x !== n).map(String);

/* ---------- data Akidah ---------- */
// [sifat wajib, maksud, sifat mustahil (lawan), maksud mustahil]
const SIFAT = [
  ["Wujud", "ada", "'Adam", "tiada"],
  ["Qidam", "sedia (tiada permulaan)", "Huduth", "baharu"],
  ["Baqa'", "kekal", "Fana'", "binasa"],
  ["Mukhalafatuhu lil-hawadith", "bersalahan dengan sekalian makhluk", "Mumathalatuhu lil-hawadith", "menyerupai makhluk"],
  ["Qiyamuhu binafsihi", "berdiri dengan sendiri", "Ihtiyajuhu li-ghairihi", "berhajat kepada yang lain"],
  ["Wahdaniyah", "esa", "Ta'addud", "berbilang-bilang"],
  ["Qudrat", "berkuasa", "'Ajz", "lemah"],
  ["Iradat", "berkehendak", "Karahah", "terpaksa"],
  ["'Ilmu", "mengetahui", "Jahl", "jahil (tidak mengetahui)"],
  ["Hayat", "hidup", "Maut", "mati"],
  ["Sama'", "mendengar", "Summun", "tuli"],
  ["Basar", "melihat", "'Umyun", "buta"],
  ["Kalam", "berkata-kata", "Bukmun", "bisu"]
];
// [malaikat, tugas]
const MALAIKAT = [
  ["Jibril", "menyampaikan wahyu kepada para rasul"],
  ["Mikail", "menurunkan hujan dan mengagihkan rezeki"],
  ["Israfil", "meniup sangkakala pada hari kiamat"],
  ["Izrail", "mencabut nyawa"],
  ["Munkar dan Nakir", "menyoal manusia di dalam kubur"],
  ["Raqib", "mencatat amalan baik"],
  ["Atid", "mencatat amalan jahat"],
  ["Malik", "menjaga pintu neraka"],
  ["Ridwan", "menjaga pintu syurga"]
];
// [kitab, rasul]
const KITAB = [["Taurat", "Nabi Musa a.s."], ["Zabur", "Nabi Daud a.s."], ["Injil", "Nabi Isa a.s."], ["Al-Quran", "Nabi Muhammad s.a.w."]];

/* ---------- data Jawi: [rumi, jawi] ---------- */
const JAWI = [
  ["sekolah", "سکوله"], ["buku", "بوکو"], ["rumah", "رومه"], ["emak", "امق"], ["ayah", "ايه"], ["ibu", "ايبو"],
  ["guru", "ݢورو"], ["kucing", "کوچيڠ"], ["makan", "ماکن"], ["minum", "مينوم"], ["bola", "بولا"], ["kereta", "کريتا"],
  ["pensel", "ڤنسيل"], ["buah", "بواه"], ["ikan", "ايکن"], ["mata", "مات"], ["kaki", "کاکي"], ["tangan", "تاڠن"],
  ["negara", "نݢارا"], ["Malaysia", "مليسيا"], ["masjid", "مسجد"], ["adik", "اديق"], ["kakak", "کاکق"], ["abang", "ابڠ"],
  ["air", "اءير"], ["hujan", "هوجن"], ["bulan", "بولن"], ["bintang", "بينتڠ"], ["pokok", "ڤوکوق"], ["bunga", "بوڠا"],
  ["burung", "بوروڠ"], ["duit", "دوءيت"], ["baju", "باجو"], ["kasut", "کاسوت"], ["hari", "هاري"], ["pagi", "ڤاݢي"],
  ["petang", "ڤتڠ"], ["malam", "مالم"], ["jalan", "جالن"], ["sayur", "سايور"], ["nasi", "ناسي"], ["roti", "روتي"],
  ["susu", "سوسو"], ["gajah", "ݢاجه"], ["ayam", "ايم"], ["lembu", "لمبو"], ["kambing", "کمبيڠ"], ["Melaka", "ملاک"],
  ["Johor", "جوهر"], ["Kedah", "قدح"], ["Kelantan", "کلنتن"], ["ilmu", "علمو"]
];

/* ---------- data Bahasa Arab: [arab, maksud] ikut tema ---------- */
const AR_DIRI = [["أَبٌ", "bapa"], ["أُمٌّ", "ibu"], ["أَخٌ", "saudara lelaki"], ["أُخْتٌ", "saudara perempuan"], ["جَدٌّ", "datuk"], ["جَدَّةٌ", "nenek"],
  ["رَأْسٌ", "kepala"], ["عَيْنٌ", "mata"], ["أُذُنٌ", "telinga"], ["فَمٌ", "mulut"], ["يَدٌ", "tangan"], ["رِجْلٌ", "kaki"], ["أَنْفٌ", "hidung"]];
const AR_SEKOLAH = [["كِتَابٌ", "buku"], ["قَلَمٌ", "pen"], ["مَدْرَسَةٌ", "sekolah"], ["فَصْلٌ", "kelas"], ["مُعَلِّمٌ", "guru"], ["طَالِبٌ", "pelajar"],
  ["كُرْسِيٌّ", "kerusi"], ["مَكْتَبٌ", "meja"], ["بَابٌ", "pintu"], ["سَبُّورَةٌ", "papan hitam"], ["حَقِيبَةٌ", "beg"], ["مِسْطَرَةٌ", "pembaris"]];
const AR_ALAM = [["شَمْسٌ", "matahari"], ["قَمَرٌ", "bulan"], ["سَمَاءٌ", "langit"], ["أَرْضٌ", "bumi"], ["مَاءٌ", "air"], ["نَارٌ", "api"],
  ["شَجَرَةٌ", "pokok"], ["جَبَلٌ", "gunung"], ["بَحْرٌ", "laut"], ["نَجْمٌ", "bintang"], ["مَطَرٌ", "hujan"], ["زَهْرَةٌ", "bunga"]];
const AR_IBADAH = [["مَسْجِدٌ", "masjid"], ["صَلَاةٌ", "solat"], ["صَوْمٌ", "puasa"], ["زَكَاةٌ", "zakat"], ["حَجٌّ", "haji"], ["وُضُوءٌ", "wuduk"],
  ["دُعَاءٌ", "doa"], ["رَبٌّ", "Tuhan"], ["عِلْمٌ", "ilmu"], ["جَنَّةٌ", "syurga"], ["رَحْمَةٌ", "rahmat"], ["قُرْآنٌ", "Al-Quran"]];
const AR_WARNA = [["أَبْيَضُ", "putih"], ["أَسْوَدُ", "hitam"], ["أَحْمَرُ", "merah"], ["أَخْضَرُ", "hijau"], ["أَزْرَقُ", "biru"], ["أَصْفَرُ", "kuning"]];
const AR_NOMBOR = [["وَاحِدٌ", "1"], ["اِثْنَانِ", "2"], ["ثَلَاثَةٌ", "3"], ["أَرْبَعَةٌ", "4"], ["خَمْسَةٌ", "5"], ["سِتَّةٌ", "6"], ["سَبْعَةٌ", "7"], ["ثَمَانِيَةٌ", "8"], ["تِسْعَةٌ", "9"], ["عَشَرَةٌ", "10"]];
const AR_HARI = [["الْأَحَدُ", "Ahad"], ["الْاِثْنَيْنِ", "Isnin"], ["الثُّلَاثَاءُ", "Selasa"], ["الْأَرْبِعَاءُ", "Rabu"], ["الْخَمِيسُ", "Khamis"], ["الْجُمُعَةُ", "Jumaat"], ["السَّبْتُ", "Sabtu"]];
// generator perbendaharaan kata: Arab → maksud dan maksud → Arab
const vocab = list => [
  () => { const [a, m] = pick(list); return from(`${a}|Maksud perkataan ini ialah…`, m, list.filter(x => x[1] !== m).map(x => x[1])); },
  () => { const [a, m] = pick(list); return from(`Perkataan Arab bagi "${m}" ialah…`, a, list.filter(x => x[0] !== a).map(x => x[0])); }
];

SOALAN["k1"] = {

/* ======================= AL-QURAN (Tilawah & Tajwid) ======================= */
quran: [
  { t: "Pengenalan Al-Quran", q: [
    ["Al-Quran diturunkan kepada Nabi Muhammad s.a.w. melalui perantaraan malaikat…", "Jibril", "Mikail", "Israfil", "Izrail"],
    ["Bilangan surah dalam Al-Quran ialah…", "114", "30", "113", "120"],
    ["Bilangan juz dalam Al-Quran ialah…", "30", "114", "60", "20"],
    ["Wahyu pertama yang diturunkan ialah Surah Al-'Alaq ayat…", "1 hingga 5", "1 hingga 3", "1 hingga 10", "6 hingga 10"],
    ["Wahyu pertama diturunkan di…", "Gua Hira'", "Gua Thur", "Masjidil Haram", "Madinah"],
    ["Surah pertama dalam susunan mushaf Al-Quran ialah…", "Al-Fatihah", "Al-Baqarah", "Al-'Alaq", "An-Nas"],
    ["Surah terakhir dalam Al-Quran ialah…", "An-Nas", "Al-Falaq", "Al-Ikhlas", "Al-Fatihah"],
    ["Surah yang paling panjang dalam Al-Quran ialah…", "Al-Baqarah", "Ali 'Imran", "Yasin", "Al-Fatihah"],
    ["Surah yang paling pendek dalam Al-Quran ialah…", "Al-Kauthar", "Al-Ikhlas", "An-Nas", "Al-Falaq"],
    ["Juz yang ke-30 dikenali sebagai…", "Juz 'Amma", "Juz Tabarak", "Juz Yasin", "Juz Alif Lam Mim"],
    ["Al-Quran mula diturunkan pada bulan…", "Ramadan", "Syawal", "Muharram", "Rejab"],
    ["Malam yang lebih baik daripada seribu bulan ialah…", "Lailatul Qadr", "malam Nisfu Syaaban", "malam Hari Raya", "malam Jumaat"],
    ["Adab sebelum membaca Al-Quran ialah…", "berwuduk dan membaca ta'awwuz", "makan dahulu", "membaca sambil berbaring", "bercakap-cakap"],
    ["Bacaan \"أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ\" dipanggil…", "ta'awwuz", "basmalah", "tahmid", "tasbih"],
    ["Al-Fatihah juga dikenali sebagai…", "Ummul Kitab", "Qalbul Quran", "Surah Nabi", "Surah Makkah"]
  ]},
  { t: "Hukum Nun Sakinah dan Tanwin",
    q: [
      ["Huruf Izhar Halqi ialah…", "ء ه ع ح غ خ", "ي ن م و", "ل ر", "ب"],
      ["Huruf Idgham Ma'al Ghunnah ialah…", "ي ن م و", "ل ر", "ء ه ع ح غ خ", "ق ط ب ج د"],
      ["Huruf Idgham Bila Ghunnah ialah…", "ل ر", "ي ن م و", "ب", "ء ه"],
      ["Huruf Iqlab ialah…", "ب", "م", "ل", "ن"],
      ["Bilangan huruf Ikhfa' Haqiqi ialah…", "15", "6", "4", "2"],
      ["Iqlab bermaksud menukar bunyi nun sakinah atau tanwin kepada bunyi huruf…", "mim", "lam", "ra", "ya"],
      ["Izhar bermaksud membaca dengan…", "jelas tanpa dengung", "dengung", "menukar huruf", "memanjangkan"],
      ["مَنْ آمَنَ|Hukum nun sakinah pada kalimah ini ialah…", "Izhar Halqi", "Ikhfa' Haqiqi", "Iqlab", "Idgham Bila Ghunnah"],
      ["أَنْعَمْتَ|Hukum nun sakinah pada kalimah ini ialah…", "Izhar Halqi", "Ikhfa' Haqiqi", "Idgham Ma'al Ghunnah", "Iqlab"],
      ["مِنْ شَرِّ|Hukum nun sakinah pada kalimah ini ialah…", "Ikhfa' Haqiqi", "Izhar Halqi", "Iqlab", "Idgham Bila Ghunnah"],
      ["لَيُنْبَذَنَّ|Hukum nun sakinah (sebelum ب) pada kalimah ini ialah…", "Iqlab", "Ikhfa' Haqiqi", "Izhar Halqi", "Idgham Ma'al Ghunnah"],
      ["خَيْرًا يَرَهُ|Hukum tanwin pada kalimah ini ialah…", "Idgham Ma'al Ghunnah", "Idgham Bila Ghunnah", "Izhar Halqi", "Iqlab"],
      ["هُدًى لِلْمُتَّقِينَ|Hukum tanwin pada kalimah ini ialah…", "Idgham Bila Ghunnah", "Idgham Ma'al Ghunnah", "Ikhfa' Haqiqi", "Izhar Halqi"],
      ["مِنْ رَبِّهِمْ|Hukum nun sakinah pada kalimah ini ialah…", "Idgham Bila Ghunnah", "Iqlab", "Izhar Halqi", "Ikhfa' Haqiqi"],
      ["عَذَابٌ أَلِيمٌ|Hukum tanwin pada kalimah ini ialah…", "Izhar Halqi", "Ikhfa' Haqiqi", "Iqlab", "Idgham Ma'al Ghunnah"]
    ] },
  { t: "Hukum Mim Sakinah", q: [
    ["Hukum mim sakinah terbahagi kepada…", "3", "4", "2", "5"],
    ["Mim sakinah bertemu huruf ب dinamakan…", "Ikhfa' Syafawi", "Izhar Syafawi", "Idgham Mithlain", "Iqlab"],
    ["Mim sakinah bertemu huruf م dinamakan…", "Idgham Mithlain", "Ikhfa' Syafawi", "Izhar Syafawi", "Idgham Bila Ghunnah"],
    ["Mim sakinah bertemu huruf selain م dan ب dinamakan…", "Izhar Syafawi", "Ikhfa' Syafawi", "Idgham Mithlain", "Izhar Halqi"],
    ["\"Syafawi\" bermaksud bunyi yang keluar dari…", "dua bibir", "kerongkong", "hidung", "lidah"],
    ["تَرْمِيهِمْ بِحِجَارَةٍ|Hukum mim sakinah pada potongan ayat ini ialah…", "Ikhfa' Syafawi", "Izhar Syafawi", "Idgham Mithlain", "Iqlab"],
    ["عَلَيْهِمْ مُؤْصَدَةٌ|Hukum mim sakinah pada potongan ayat ini ialah…", "Idgham Mithlain", "Ikhfa' Syafawi", "Izhar Syafawi", "Idgham Ma'al Ghunnah"],
    ["عَلَيْهِمْ غَيْرِ|Hukum mim sakinah pada potongan ayat ini ialah…", "Izhar Syafawi", "Ikhfa' Syafawi", "Idgham Mithlain", "Izhar Halqi"],
    ["Hukum mim sakinah yang dibaca dengan dengung ialah Ikhfa' Syafawi dan…", "Idgham Mithlain", "Izhar Syafawi", "Izhar Halqi", "Idgham Bila Ghunnah"]
  ]},
  { t: "Hukum Mad", q: [
    ["Mad Asli dibaca sepanjang…", "2 harakat", "4 harakat", "6 harakat", "1 harakat"],
    ["Huruf mad ialah…", "ا و ي", "ب ت ث", "ل ر", "ق ط ب ج د"],
    ["Mad bertemu hamzah dalam satu kalimah dinamakan…", "Mad Wajib Muttasil", "Mad Jaiz Munfasil", "Mad Asli", "Mad 'Iwad"],
    ["Mad bertemu hamzah pada kalimah yang berlainan dinamakan…", "Mad Jaiz Munfasil", "Mad Wajib Muttasil", "Mad Lazim", "Mad Silah"],
    ["جَاءَ|Hukum mad pada kalimah ini ialah…", "Mad Wajib Muttasil", "Mad Jaiz Munfasil", "Mad 'Iwad", "Mad Asli"],
    ["إِنَّا أَعْطَيْنَاكَ|Hukum mad pada \"إِنَّا\" dalam potongan ayat ini ialah…", "Mad Jaiz Munfasil", "Mad Wajib Muttasil", "Mad 'Iwad", "Mad Lazim"],
    ["Mad Wajib Muttasil dibaca sepanjang…", "4 atau 5 harakat", "2 harakat sahaja", "6 harakat sahaja", "1 harakat"],
    ["Mad 'Arid Lissukun berlaku apabila…", "berhenti (wakaf) pada hujung ayat selepas huruf mad", "bertemu hamzah", "bertemu tanwin", "bertemu huruf qalqalah"],
    ["Mad 'Arid Lissukun boleh dibaca sepanjang…", "2, 4 atau 6 harakat", "1 harakat", "3 harakat sahaja", "8 harakat"],
    ["أَفْوَاجًا|Apabila berhenti pada kalimah ini, hukumnya ialah…", "Mad 'Iwad", "Mad Asli", "Mad Lazim", "Mad Wajib Muttasil"],
    ["Mad 'Iwad dibaca sepanjang…", "2 harakat", "4 harakat", "6 harakat", "5 harakat"],
    ["الضَّالِّينَ|Hukum mad pada kalimah ini ialah…", "Mad Lazim Kalimi Muthaqqal", "Mad Asli", "Mad 'Iwad", "Mad Jaiz Munfasil"],
    ["Mad Lazim dibaca sepanjang…", "6 harakat", "2 harakat", "4 harakat", "1 harakat"],
    ["Ha dhamir yang terletak di antara dua huruf berbaris dan dipanjangkan 2 harakat dinamakan…", "Mad Silah Sughra", "Mad Silah Kubra", "Mad 'Iwad", "Mad Badal"]
  ]},
  { t: "Qalqalah, Ghunnah, Alif Lam dan Lam Jalalah", q: [
    ["Huruf qalqalah ialah…", "ق ط ب ج د", "ي ن م و", "ء ه ع ح غ خ", "ل ر"],
    ["Qalqalah bermaksud bunyi yang…", "memantul", "berdengung", "panjang", "tebal sahaja"],
    ["Qalqalah Kubra berlaku apabila huruf qalqalah…", "dimatikan kerana berhenti (wakaf)", "berbaris fathah", "bertanwin", "bersabdu di awal kalimah"],
    ["الْفَلَقِ|Apabila berhenti pada kalimah ini, hukumnya ialah…", "Qalqalah Kubra", "Qalqalah Sughra", "Ghunnah", "Izhar"],
    ["Huruf nun dan mim yang bersabdu dibaca dengan…", "ghunnah (dengung)", "qalqalah", "izhar", "mad"],
    ["إِنَّ|Hukum pada huruf nun bersabdu dalam kalimah ini ialah…", "Ghunnah Musyaddadah", "Qalqalah", "Izhar Halqi", "Iqlab"],
    ["Alif lam yang dibaca dengan jelas dinamakan…", "Alif Lam Qamariah", "Alif Lam Syamsiah", "Lam Jalalah", "Idgham"],
    ["Alif lam yang tidak dibaca (dimasukkan ke huruf selepasnya) dinamakan…", "Alif Lam Syamsiah", "Alif Lam Qamariah", "Izhar", "Mad"],
    ["الْقَمَرُ|Alif lam dalam kalimah ini ialah…", "Alif Lam Qamariah", "Alif Lam Syamsiah", "Lam Jalalah", "Iqlab"],
    ["الشَّمْسُ|Alif lam dalam kalimah ini ialah…", "Alif Lam Syamsiah", "Alif Lam Qamariah", "Lam Jalalah", "Izhar"],
    ["النَّاسِ|Alif lam dalam kalimah ini ialah…", "Alif Lam Syamsiah", "Alif Lam Qamariah", "Ghunnah", "Mad"],
    ["الْحَمْدُ|Alif lam dalam kalimah ini ialah…", "Alif Lam Qamariah", "Alif Lam Syamsiah", "Lam Jalalah", "Idgham"],
    ["Lam Jalalah dibaca tebal (tafkhim) apabila huruf sebelumnya berbaris…", "fathah atau dhammah", "kasrah", "sukun sahaja", "tanwin kasrah"],
    ["بِسْمِ اللَّهِ|Lam Jalalah dalam potongan ini dibaca…", "nipis (tarqiq)", "tebal (tafkhim)", "dengung", "memantul"],
    ["قَالَ اللَّهُ|Lam Jalalah dalam potongan ini dibaca…", "tebal (tafkhim)", "nipis (tarqiq)", "dengung", "memantul"]
  ]},
  { t: "Surah-surah Pilihan",
    q: [
      ["Surah Al-Ikhlas menerangkan tentang…", "keesaan Allah", "kisah tentera bergajah", "hari kiamat", "nikmat sungai Al-Kauthar"],
      ["Surah Al-Fil menceritakan kisah tentera bergajah yang diketuai oleh…", "Abrahah", "Abu Jahal", "Firaun", "Abu Lahab"],
      ["Surah Al-Masad menceritakan tentang…", "Abu Lahab dan isterinya", "tentera bergajah", "kaum Quraisy", "Nabi Musa"],
      ["Surah Quraisy menyebut perjalanan dagang kaum Quraisy pada musim…", "sejuk dan panas", "hujan dan kemarau", "bunga", "luruh"],
      ["Surah Al-Ma'un mencela orang yang…", "menghalau anak yatim", "bersedekah", "membaca Al-Quran", "berpuasa"],
      ["Surah Al-'Asr menyatakan manusia dalam kerugian kecuali orang yang beriman, beramal soleh dan…", "berpesan dengan kebenaran dan kesabaran", "kaya", "kuat", "pandai berniaga"],
      ["Surah Al-Falaq dan An-Nas dibaca untuk…", "memohon perlindungan Allah", "memohon rezeki sahaja", "berbuka puasa", "memulakan solat"],
      ["Surah Al-Kafirun diakhiri dengan maksud…", "bagi kamu agama kamu, bagiku agamaku", "Allah Maha Esa", "sesungguhnya manusia dalam kerugian", "pertolongan Allah telah datang"]
    ],
    g: [
      () => { const [a, n] = pick(SURAH); return from(`${a}|Potongan ayat ini terdapat dalam surah…`, n, SNAMES.filter(x => x !== n)); },
      () => { const [, n, c] = pick(SURAH); return from(`📖|Bilangan ayat dalam Surah ${n} ialah…`, String(c), near(c)); },
      () => { const [, n, , no] = pick(SURAH); return from(`📖|Surah ke-${no} dalam Al-Quran ialah…`, n, SNAMES.filter(x => x !== n)); }
    ] }
],

/* ======================= AKIDAH ======================= */
akidah: [
  { t: "Rukun Iman dan Rukun Islam", q: [
    ["Bilangan Rukun Iman ialah…", "6", "5", "4", "7"],
    ["Bilangan Rukun Islam ialah…", "5", "6", "4", "13"],
    ["Rukun Iman yang pertama ialah beriman kepada…", "Allah", "malaikat", "rasul", "hari akhirat"],
    ["Rukun Iman yang keenam ialah beriman kepada…", "qada' dan qadar", "kitab", "malaikat", "hari akhirat"],
    ["Rukun Islam yang pertama ialah…", "mengucap dua kalimah syahadah", "solat", "puasa", "zakat"],
    ["Rukun Islam yang kelima ialah…", "menunaikan haji bagi yang mampu", "berpuasa", "berzakat", "solat"],
    ["Beriman kepada malaikat ialah Rukun Iman yang ke-…", "2", "3", "4", "1"],
    ["Iman bermaksud…", "percaya dengan hati, mengaku dengan lidah dan beramal dengan anggota", "percaya dengan hati sahaja", "bercakap sahaja", "beramal tanpa percaya"],
    ["Ilmu yang mempelajari tentang keesaan Allah dipanggil ilmu…", "tauhid", "fiqh", "tajwid", "sirah"],
    ["Kalimah syahadah yang pertama dinamakan syahadah…", "tauhid", "rasul", "iman", "Islam"],
    ["Syahadah rasul ialah pengakuan bahawa…", "Nabi Muhammad pesuruh Allah", "Allah Maha Esa", "malaikat wujud", "Al-Quran kitab Allah"]
  ]},
  { t: "Sifat-sifat Allah",
    q: [
      ["Bilangan sifat wajib bagi Allah yang wajib diketahui ialah…", "20", "13", "99", "25"],
      ["Sifat harus bagi Allah ialah…", "melakukan atau meninggalkan sesuatu yang mungkin", "mati", "lemah", "berbilang-bilang"],
      ["Sifat Nafsiah ialah sifat…", "Wujud", "Qudrat", "Kalam", "Baqa'"],
      ["Sifat Wujud bermaksud Allah…", "ada", "kekal", "esa", "hidup"],
      ["Nama-nama Allah yang indah dikenali sebagai…", "Asma'ul Husna", "Rukun Iman", "Sifat Mustahil", "Ummul Kitab"],
      ["Bilangan Asma'ul Husna ialah…", "99", "20", "25", "114"],
      ["Allah bersifat Wahdaniyah. Maka mustahil Allah itu…", "berbilang-bilang", "esa", "berkuasa", "kekal"]
    ],
    g: [
      () => { const [w, m] = pick(SIFAT); return from(`☝️|Sifat ${w} bermaksud Allah…`, m, SIFAT.filter(x => x[1] !== m).map(x => x[1])); },
      () => { const [w, m] = pick(SIFAT); return from(`☝️|Sifat wajib bagi Allah yang bermaksud "${m}" ialah…`, w, SIFAT.filter(x => x[0] !== w).map(x => x[0])); },
      () => { const [w, , l] = pick(SIFAT); return from(`☝️|Sifat mustahil yang menjadi lawan bagi sifat ${w} ialah…`, l, SIFAT.filter(x => x[2] !== l).map(x => x[2])); }
    ] },
  { t: "Beriman kepada Malaikat",
    q: [
      ["Malaikat dicipta daripada…", "cahaya (nur)", "api", "tanah", "air"],
      ["Jin dicipta daripada…", "api", "cahaya", "tanah", "angin"],
      ["Manusia (Nabi Adam a.s.) dicipta daripada…", "tanah", "api", "cahaya", "air"],
      ["Bilangan malaikat yang wajib diketahui ialah…", "10", "4", "25", "20"],
      ["Sifat malaikat ialah…", "sentiasa taat kepada Allah", "makan dan minum", "berkahwin", "melakukan dosa"],
      ["Malaikat yang mencatat amalan kita ialah…", "Raqib dan 'Atid", "Munkar dan Nakir", "Malik dan Ridwan", "Jibril dan Mikail"]
    ],
    g: [
      () => { const [n, t] = pick(MALAIKAT); return from(`👼|Malaikat yang bertugas ${t} ialah…`, n, MALAIKAT.filter(x => x[0] !== n).map(x => x[0])); },
      () => { const [n, t] = pick(MALAIKAT); return from(`👼|Tugas malaikat ${n} ialah…`, t, MALAIKAT.filter(x => x[1] !== t).map(x => x[1])); }
    ] },
  { t: "Beriman kepada Kitab dan Rasul",
    q: [
      ["Bilangan kitab yang wajib diketahui ialah…", "4", "5", "3", "10"],
      ["Suhuf ialah…", "lembaran wahyu yang diturunkan kepada beberapa nabi", "nama malaikat", "nama masjid", "jenis solat"],
      ["Bilangan rasul yang wajib diketahui ialah…", "25", "20", "10", "313"],
      ["Rasul yang pertama ialah…", "Nabi Adam a.s.", "Nabi Nuh a.s.", "Nabi Ibrahim a.s.", "Nabi Musa a.s."],
      ["Rasul yang terakhir ialah…", "Nabi Muhammad s.a.w.", "Nabi Isa a.s.", "Nabi Musa a.s.", "Nabi Yahya a.s."],
      ["Rasul Ulul Azmi ialah rasul yang…", "sangat tabah dan sabar menghadapi ujian", "paling kaya", "paling muda", "tidak pernah berdakwah"],
      ["Yang manakah BUKAN rasul Ulul Azmi?", "Nabi Yusuf a.s.", "Nabi Nuh a.s.", "Nabi Ibrahim a.s.", "Nabi Isa a.s."],
      ["Sifat Siddiq bagi rasul bermaksud…", "benar", "amanah", "menyampaikan", "bijaksana"],
      ["Sifat Tabligh bagi rasul bermaksud…", "menyampaikan", "benar", "bijaksana", "dipercayai"],
      ["Sifat Fatanah bagi rasul bermaksud…", "bijaksana", "benar", "amanah", "menyampaikan"],
      ["Sifat mustahil bagi rasul yang menjadi lawan Amanah ialah…", "khianat", "bohong", "bodoh", "menyembunyikan"],
      ["Sifat harus bagi rasul ialah…", "bersifat seperti manusia biasa seperti makan dan minum", "berdusta", "khianat", "menyembunyikan wahyu"],
      ["Nabi yang dapat bercakap dengan haiwan dan menguasai jin ialah…", "Nabi Sulaiman a.s.", "Nabi Nuh a.s.", "Nabi Yunus a.s.", "Nabi Adam a.s."],
      ["Nabi yang ditelan ikan nun ialah…", "Nabi Yunus a.s.", "Nabi Yusuf a.s.", "Nabi Musa a.s.", "Nabi Ayub a.s."],
      ["Nabi yang membina bahtera ialah…", "Nabi Nuh a.s.", "Nabi Ibrahim a.s.", "Nabi Hud a.s.", "Nabi Saleh a.s."]
    ],
    g: [
      () => { const [k, n] = pick(KITAB); return from(`📚|Kitab ${k} diturunkan kepada…`, n, KITAB.filter(x => x[1] !== n).map(x => x[1])); },
      () => { const [k, n] = pick(KITAB); return from(`📚|Kitab yang diturunkan kepada ${n} ialah…`, k, KITAB.filter(x => x[0] !== k).map(x => x[0])); }
    ] },
  { t: "Hari Akhirat dan Qada' Qadar", q: [
    ["Alam selepas mati sebelum hari kiamat dinamakan alam…", "Barzakh", "Mahsyar", "roh", "dunia"],
    ["Tempat semua manusia dihimpunkan selepas dibangkitkan ialah Padang…", "Mahsyar", "Arafah", "Barzakh", "Sirat"],
    ["Titian yang merentasi neraka dinamakan Titian…", "Sirat", "Mizan", "Barzakh", "Kauthar"],
    ["Alat menimbang amalan pada hari akhirat dinamakan…", "Mizan", "Sirat", "Hisab", "Barzakh"],
    ["Hari amalan manusia dihitung dinamakan Yaumul…", "Hisab", "Qiamah", "Ba'ath", "Jumu'ah"],
    ["Tanda kiamat besar ialah…", "matahari terbit dari barat", "banyak bangunan tinggi", "ramai orang lupa solat", "hujan lebat"],
    ["Malaikat yang meniup sangkakala ialah…", "Israfil", "Jibril", "Izrail", "Mikail"],
    ["Qada' bermaksud…", "ketetapan Allah sejak azali", "usaha manusia", "doa", "tawakal"],
    ["Qadar bermaksud…", "pelaksanaan ketetapan Allah", "ketetapan manusia", "nasib baik sahaja", "rezeki sahaja"],
    ["Sikap yang betul apabila ditimpa musibah ialah…", "bersabar dan reda", "menyalahkan takdir", "marah", "putus asa"],
    ["Tawakal bermaksud…", "berserah kepada Allah selepas berusaha", "tidak berusaha langsung", "menunggu nasib", "meminta tolong bomoh"]
  ]},
  { t: "Perkara yang Merosakkan Akidah", q: [
    ["Menyekutukan Allah dengan sesuatu dinamakan…", "syirik", "tauhid", "ikhlas", "tawakal"],
    ["Dosa yang tidak diampunkan jika mati tanpa bertaubat ialah dosa…", "syirik", "lupa", "tertidur", "tersalah"],
    ["Mempercayai tangkal boleh menolak bala adalah perbuatan…", "khurafat", "ibadah", "sunat", "tawakal"],
    ["Percaya bahawa burung gagak berbunyi membawa sial ialah contoh…", "tahyul", "ilmu sains", "tauhid", "adab"],
    ["Pergi berjumpa tukang tilik untuk mengetahui nasib adalah…", "dilarang dalam Islam", "digalakkan", "sunat", "harus"],
    ["Cara memelihara akidah ialah…", "menuntut ilmu agama dan beramal", "mempercayai ramalan bintang", "memakai tangkal", "meninggalkan solat"],
    ["Orang yang keluar daripada agama Islam dinamakan…", "murtad", "mukmin", "muslim", "muttaqin"],
    ["Orang yang zahirnya Islam tetapi hatinya kufur dinamakan…", "munafik", "mukmin", "soleh", "syahid"]
  ]}
],

/* ======================= IBADAH (Fiqh) ======================= */
ibadah: [
  { t: "Bersuci (Taharah)", q: [
    ["Air mutlak ialah air yang…", "suci dan boleh menyucikan", "suci tetapi tidak menyucikan", "bernajis", "makruh digunakan"],
    ["Contoh air mutlak ialah…", "air hujan", "air teh", "air kopi", "air kencing"],
    ["Air yang sedikit dan telah digunakan untuk mengangkat hadas dinamakan air…", "musta'mal", "mutlak", "mutanajjis", "musyammas"],
    ["Air yang terkena najis dinamakan air…", "mutanajjis", "musta'mal", "mutlak", "musyammas"],
    ["Air yang dipanaskan oleh cahaya matahari dalam bekas logam (selain emas dan perak) dinamakan air…", "musyammas", "mutlak", "musta'mal", "mutanajjis"],
    ["Hukum menggunakan air musyammas ialah…", "makruh", "haram", "wajib", "sunat"],
    ["Najis anjing dan babi tergolong dalam najis…", "mughallazah", "mukhaffafah", "mutawassitah", "ma'fu"],
    ["Air kencing bayi lelaki di bawah 2 tahun yang hanya minum susu ibu ialah najis…", "mukhaffafah", "mughallazah", "mutawassitah", "berat"],
    ["Darah dan air kencing orang dewasa ialah najis…", "mutawassitah", "mukhaffafah", "mughallazah", "ringan"],
    ["Cara menyucikan najis mughallazah ialah membasuh sebanyak…", "7 kali, sekali dengan air bercampur tanah", "3 kali", "sekali sahaja", "2 kali dengan sabun"],
    ["Cara menyucikan najis mukhaffafah ialah…", "merenjis air ke tempat itu", "membasuh 7 kali", "mengelap dengan kain kering", "membiarkannya kering"],
    ["Menyucikan diri selepas buang air dinamakan…", "istinjak", "tayammum", "wuduk", "mandi wajib"],
    ["Jika istinjak menggunakan batu, bilangan batu yang digunakan sekurang-kurangnya…", "3 biji", "1 biji", "2 biji", "7 biji"]
  ]},
  { t: "Wuduk dan Tayammum", q: [
    ["Bilangan rukun wuduk ialah…", "6", "4", "13", "5"],
    ["Rukun wuduk yang pertama ialah…", "niat", "membasuh muka", "membasuh tangan", "berkumur"],
    ["Rukun wuduk yang terakhir ialah…", "tertib", "membasuh kaki", "niat", "menyapu kepala"],
    ["Ketika berwuduk, kedua-dua tangan wajib dibasuh hingga…", "siku", "pergelangan tangan", "bahu", "jari"],
    ["Ketika berwuduk, kaki wajib dibasuh hingga…", "buku lali", "lutut", "jari kaki", "betis"],
    ["Ketika berwuduk, bahagian kepala yang wajib disapu ialah…", "sebahagian kepala", "seluruh kepala sahaja", "telinga", "tengkuk"],
    ["Contoh perkara sunat ketika berwuduk ialah…", "berkumur-kumur", "membasuh muka", "niat", "tertib"],
    ["Perkara yang membatalkan wuduk ialah…", "keluar sesuatu dari qubul atau dubur", "makan nasi", "minum air", "bercakap"],
    ["Tidur yang membatalkan wuduk ialah tidur yang…", "tidak tetap punggung", "duduk tetap punggung", "sekejap sambil duduk rapat", "mengantuk sahaja"],
    ["Tayammum dilakukan menggunakan…", "debu tanah yang suci", "pasir basah", "air hujan", "abu kayu"],
    ["Tayammum boleh dilakukan apabila…", "tiada air atau sakit yang tidak boleh terkena air", "malas berwuduk", "air terlalu sejuk sedikit", "mahu cepat"],
    ["Anggota yang disapu ketika tayammum ialah…", "muka dan kedua-dua tangan", "kepala dan kaki", "seluruh badan", "telinga"]
  ]},
  { t: "Solat Fardu", q: [
    ["Bilangan solat fardu sehari semalam ialah…", "5", "3", "17", "6"],
    ["Jumlah rakaat solat fardu sehari semalam ialah…", "17", "15", "20", "11"],
    ["Bilangan rakaat solat Subuh ialah…", "2", "3", "4", "1"],
    ["Bilangan rakaat solat Maghrib ialah…", "3", "2", "4", "5"],
    ["Bilangan rakaat solat Zohor ialah…", "4", "2", "3", "5"],
    ["Syarat sah solat ialah…", "menghadap kiblat", "memakai baju baharu", "solat di masjid", "membawa sejadah"],
    ["Syarat wajib solat ialah…", "Islam, baligh dan berakal", "kaya", "dewasa sahaja", "pandai membaca"],
    ["Bilangan rukun solat ialah…", "13", "6", "4", "17"],
    ["Rukun solat yang pertama ialah…", "niat", "takbiratul ihram", "membaca Al-Fatihah", "rukuk"],
    ["Rukun solat yang terakhir ialah…", "tertib", "salam", "tahiyat akhir", "sujud"],
    ["Bacaan ketika rukuk ialah…", "سُبْحَانَ رَبِّيَ الْعَظِيمِ", "سُبْحَانَ رَبِّيَ الْأَعْلَى", "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ", "اللَّهُ أَكْبَرُ"],
    ["Bacaan ketika sujud ialah…", "سُبْحَانَ رَبِّيَ الْأَعْلَى", "سُبْحَانَ رَبِّيَ الْعَظِيمِ", "رَبِّ اغْفِرْ لِي", "اللَّهُ أَكْبَرُ"],
    ["Bacaan ketika bangun dari rukuk (iktidal) ialah…", "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ", "سُبْحَانَ رَبِّيَ الْأَعْلَى", "السَّلَامُ عَلَيْكُمْ", "بِسْمِ اللَّهِ"],
    ["Tahiyat awal dan qunut Subuh ialah sunat…", "ab'adh", "hai'ah", "muakkad sahaja", "wajib"],
    ["Jika tertinggal sunat ab'adh, kita disunatkan melakukan…", "sujud sahwi", "sujud tilawah", "sujud syukur", "solat semula"],
    ["Perkara yang membatalkan solat ialah…", "bercakap dengan sengaja", "membaca Al-Fatihah", "rukuk", "memandang tempat sujud"],
    ["Seruan untuk memberitahu masuk waktu solat dinamakan…", "azan", "iqamah", "khutbah", "zikir"],
    ["Seruan sebelum solat fardu didirikan dinamakan…", "iqamah", "azan", "takbir", "doa"]
  ]},
  { t: "Solat Jemaah, Jumaat, Jamak dan Qasar", q: [
    ["Pahala solat berjemaah berbanding solat bersendirian ialah…", "27 kali ganda", "2 kali ganda", "10 kali ganda", "sama sahaja"],
    ["Orang yang mengetuai solat berjemaah dinamakan…", "imam", "makmum", "bilal", "khatib"],
    ["Orang yang mengikut imam dinamakan…", "makmum", "imam", "muazzin", "siak"],
    ["Makmum yang terlewat dan tidak sempat bersama imam dari awal dinamakan makmum…", "masbuq", "muwafiq", "musafir", "mukim"],
    ["Solat Jumaat wajib ke atas…", "lelaki Islam, baligh dan bermukim", "semua kanak-kanak", "wanita sahaja", "musafir sahaja"],
    ["Bilangan rakaat solat Jumaat ialah…", "2", "4", "3", "1"],
    ["Solat Jumaat didahului dengan…", "dua khutbah", "satu khutbah", "solat Zohor", "tiada khutbah"],
    ["Qasar bermaksud…", "memendekkan solat 4 rakaat menjadi 2 rakaat", "menghimpunkan dua solat", "melewatkan solat", "menambah rakaat"],
    ["Jamak bermaksud…", "menghimpunkan dua solat dalam satu waktu", "memendekkan solat", "meninggalkan solat", "solat sunat"],
    ["Solat yang TIDAK boleh diqasar ialah…", "Maghrib", "Zohor", "Asar", "Isyak"],
    ["Solat Maghrib boleh dijamakkan bersama solat…", "Isyak", "Asar", "Zohor", "Subuh"],
    ["Solat Subuh boleh dijamakkan dengan…", "tiada solat (tidak boleh dijamak)", "Zohor", "Isyak", "Asar"],
    ["Jamak dan qasar ialah keringanan (rukhsah) bagi orang yang…", "bermusafir", "malas", "sibuk bekerja", "tidak sakit"]
  ]},
  { t: "Solat Sunat", q: [
    ["Solat sunat yang dilakukan pada waktu pagi selepas matahari naik ialah solat…", "Dhuha", "Tahajjud", "Witir", "Tarawih"],
    ["Solat sunat pada malam bulan Ramadan ialah solat…", "Tarawih", "Dhuha", "Istikharah", "Hajat"],
    ["Solat sunat yang rakaatnya ganjil dan menjadi penutup solat malam ialah solat…", "Witir", "Dhuha", "Tarawih", "Rawatib"],
    ["Solat sunat ketika masuk masjid sebelum duduk ialah solat…", "Tahiyatul Masjid", "Dhuha", "Hajat", "Taubat"],
    ["Solat sunat sebelum atau selepas solat fardu dinamakan solat sunat…", "Rawatib", "Witir", "Dhuha", "Hari Raya"],
    ["Solat sunat untuk memohon petunjuk dalam membuat pilihan ialah solat…", "Istikharah", "Hajat", "Dhuha", "Taubat"],
    ["Bilangan rakaat solat sunat Hari Raya ialah…", "2", "4", "3", "1"],
    ["Solat sunat yang dilakukan ketika gerhana matahari ialah solat…", "Kusuf", "Khusuf", "Istisqa'", "Dhuha"],
    ["Solat sunat untuk memohon hujan ialah solat…", "Istisqa'", "Kusuf", "Hajat", "Witir"],
    ["Solat jenazah mengandungi ___ kali takbir.", "4", "3", "5", "2"],
    ["Hukum solat jenazah ialah…", "fardu kifayah", "fardu ain", "sunat", "harus"],
    ["Solat jenazah dilakukan tanpa…", "rukuk dan sujud", "niat", "takbir", "salam"]
  ]},
  { t: "Puasa", q: [
    ["Puasa Ramadan ialah Rukun Islam yang ke-…", "4", "3", "5", "2"],
    ["Puasa bermula dari terbit fajar hingga…", "terbenam matahari", "tengah hari", "waktu Isyak", "tengah malam"],
    ["Rukun puasa ialah niat dan…", "menahan diri daripada perkara yang membatalkan puasa", "bersahur", "berbuka", "solat Tarawih"],
    ["Makan pada waktu malam sebelum terbit fajar untuk berpuasa dinamakan…", "bersahur", "berbuka", "moreh", "iftar"],
    ["Perkara yang membatalkan puasa ialah…", "makan dan minum dengan sengaja", "mandi", "tidur", "terlupa lalu makan"],
    ["Jika terlupa lalu makan ketika berpuasa, puasanya…", "tidak batal", "batal", "wajib diganti", "makruh"],
    ["Perkara sunat ketika berpuasa ialah…", "menyegerakan berbuka", "melewatkan berbuka", "tidur sepanjang hari", "tidak bersahur"],
    ["Puasa sunat enam hari dilakukan pada bulan…", "Syawal", "Ramadan", "Muharram", "Rejab"],
    ["Puasa sunat Hari Arafah ialah pada…", "9 Zulhijjah", "10 Zulhijjah", "1 Syawal", "10 Muharram"],
    ["Puasa sunat Asyura ialah pada…", "10 Muharram", "9 Zulhijjah", "1 Muharram", "27 Rejab"],
    ["Puasa sunat mingguan ialah pada hari…", "Isnin dan Khamis", "Sabtu dan Ahad", "Jumaat sahaja", "Selasa dan Rabu"],
    ["Hari yang diharamkan berpuasa ialah…", "Hari Raya Aidilfitri", "hari Isnin", "hari Arafah", "hari Khamis"],
    ["Hari Tasyrik ialah pada…", "11, 12 dan 13 Zulhijjah", "1, 2 dan 3 Syawal", "9 dan 10 Muharram", "27 Ramadan"]
  ]},
  { t: "Zakat dan Haji", q: [
    ["Zakat yang wajib dikeluarkan oleh setiap individu Muslim pada bulan Ramadan ialah zakat…", "fitrah", "harta", "emas", "perniagaan"],
    ["Zakat fitrah sebaik-baiknya dibayar sebelum…", "solat sunat Aidilfitri", "puasa bermula", "solat Jumaat", "bulan Rejab"],
    ["Golongan yang layak menerima zakat dinamakan…", "asnaf", "amil", "muzakki", "musafir"],
    ["Bilangan asnaf zakat ialah…", "8", "5", "6", "10"],
    ["Orang yang dilantik untuk memungut zakat dinamakan…", "amil", "fakir", "muallaf", "gharimin"],
    ["Orang yang baru memeluk Islam termasuk dalam asnaf…", "muallaf", "riqab", "gharimin", "amil"],
    ["Contoh zakat harta ialah zakat…", "wang simpanan", "fitrah", "solat", "puasa"],
    ["Tempoh cukup setahun bagi harta yang dizakatkan dinamakan…", "haul", "nisab", "asnaf", "fidyah"],
    ["Ibadah haji ditunaikan di…", "Makkah", "Madinah", "Baitulmaqdis", "Taif"],
    ["Wukuf di Arafah dilakukan pada…", "9 Zulhijjah", "10 Zulhijjah", "1 Syawal", "27 Ramadan"],
    ["Mengelilingi Kaabah sebanyak 7 pusingan dinamakan…", "tawaf", "saie", "wukuf", "ihram"],
    ["Berjalan antara Bukit Safa dan Marwah sebanyak 7 kali dinamakan…", "saie", "tawaf", "wukuf", "tahallul"],
    ["Haji wajib dilakukan…", "sekali seumur hidup bagi yang mampu", "setiap tahun", "dua kali seumur hidup", "bila-bila sahaja tanpa syarat"],
    ["Ibadah korban dilakukan pada Hari Raya Aidiladha dan…", "hari-hari Tasyrik", "bulan Ramadan", "1 Syawal", "hari Jumaat sahaja"]
  ]}
],

/* ======================= SIRAH ======================= */
sirah: [
  { t: "Kelahiran dan Zaman Kanak-kanak Nabi Muhammad s.a.w.", q: [
    ["Nabi Muhammad s.a.w. dilahirkan di…", "Makkah", "Madinah", "Taif", "Syam"],
    ["Nabi Muhammad s.a.w. dilahirkan pada Tahun…", "Gajah", "Dukacita", "Hijrah", "Kesedihan"],
    ["Nabi Muhammad s.a.w. dilahirkan pada 12…", "Rabiulawal", "Ramadan", "Syawal", "Muharram"],
    ["Bapa Nabi Muhammad s.a.w. bernama…", "Abdullah", "Abdul Muttalib", "Abu Talib", "Abbas"],
    ["Ibu Nabi Muhammad s.a.w. bernama…", "Aminah binti Wahab", "Khadijah", "Halimatus Sa'diah", "Fatimah"],
    ["Ibu susuan Nabi Muhammad s.a.w. ialah…", "Halimatus Sa'diah", "Aminah", "Khadijah", "Ummu Aiman"],
    ["Peristiwa pembedahan dada Nabi s.a.w. berlaku ketika baginda tinggal bersama…", "Halimatus Sa'diah", "Abu Talib", "Khadijah", "Abu Bakar"],
    ["Ibu Nabi s.a.w. wafat di Abwa' ketika baginda berumur…", "6 tahun", "8 tahun", "12 tahun", "2 tahun"],
    ["Selepas ibunya wafat, Nabi s.a.w. dipelihara oleh datuknya…", "Abdul Muttalib", "Abu Talib", "Abu Lahab", "Hamzah"],
    ["Selepas datuknya wafat, Nabi s.a.w. dipelihara oleh bapa saudaranya…", "Abu Talib", "Abu Lahab", "Abbas", "Abu Jahal"],
    ["Ketika kecil, Nabi s.a.w. pernah bekerja sebagai…", "pengembala kambing", "nelayan", "petani padi", "tukang besi"],
    ["Tentera bergajah yang ingin meruntuhkan Kaabah diketuai oleh…", "Abrahah", "Abu Sufyan", "Abu Jahal", "Firaun"]
  ]},
  { t: "Zaman Remaja dan Dewasa", q: [
    ["Nabi s.a.w. digelar Al-Amin yang bermaksud…", "yang dipercayai", "yang berani", "yang kaya", "yang pandai"],
    ["Nabi s.a.w. pernah membawa barang dagangan Siti Khadijah ke negeri…", "Syam", "Yaman", "Mesir", "Parsi"],
    ["Pembantu Siti Khadijah yang menemani Nabi s.a.w. berniaga ialah…", "Maisarah", "Bilal", "Zaid", "Anas"],
    ["Nabi s.a.w. berkahwin dengan Siti Khadijah ketika baginda berumur…", "25 tahun", "40 tahun", "30 tahun", "20 tahun"],
    ["Pertikaian kabilah Quraisy tentang siapa yang akan meletakkan semula ___ diselesaikan oleh Nabi s.a.w.", "Hajarul Aswad", "Kiswah Kaabah", "Telaga Zamzam", "Maqam Ibrahim"],
    ["Nabi s.a.w. menyelesaikan pertikaian Hajarul Aswad dengan cara…", "meletakkannya di atas kain dan semua ketua kabilah mengangkatnya", "berperang", "mengundi", "meletakkannya sendiri tanpa bertanya"],
    ["Sebelum menerima wahyu, Nabi s.a.w. selalu beruzlah (menyendiri) di…", "Gua Hira'", "Gua Thur", "Bukit Uhud", "Taif"],
    ["Nabi s.a.w. menerima wahyu pertama ketika berumur…", "40 tahun", "25 tahun", "63 tahun", "35 tahun"]
  ]},
  { t: "Dakwah di Makkah", q: [
    ["Dakwah secara sembunyi-sembunyi berlangsung selama lebih kurang…", "3 tahun", "10 tahun", "13 tahun", "1 tahun"],
    ["Wanita pertama memeluk Islam ialah…", "Siti Khadijah", "Siti Aisyah", "Siti Fatimah", "Sumayyah"],
    ["Lelaki dewasa pertama memeluk Islam ialah…", "Abu Bakar As-Siddiq", "Umar Al-Khattab", "Uthman bin Affan", "Hamzah"],
    ["Kanak-kanak pertama memeluk Islam ialah…", "Ali bin Abi Talib", "Zaid bin Harithah", "Anas bin Malik", "Usamah"],
    ["Hamba pertama memeluk Islam ialah…", "Zaid bin Harithah", "Bilal bin Rabah", "Ammar bin Yasir", "Salman Al-Farisi"],
    ["Bilal bin Rabah diseksa dengan batu besar di atas dadanya oleh tuannya…", "Umayyah bin Khalaf", "Abu Jahal", "Abu Lahab", "Abu Talib"],
    ["Ketika diseksa, Bilal bin Rabah terus menyebut…", "Ahad, Ahad", "Allahu Akbar", "Subhanallah", "Alhamdulillah"],
    ["Wanita pertama yang syahid dalam Islam ialah…", "Sumayyah", "Khadijah", "Aisyah", "Fatimah"],
    ["Umat Islam berhijrah buat kali pertama ke…", "Habsyah", "Madinah", "Taif", "Syam"],
    ["Raja Habsyah yang melindungi umat Islam ialah…", "Raja Najasyi", "Raja Kisra", "Raja Heraklius", "Raja Abrahah"],
    ["Tahun Siti Khadijah dan Abu Talib wafat dikenali sebagai…", "Tahun Dukacita ('Amul Huzni)", "Tahun Gajah", "Tahun Hijrah", "Tahun Kemenangan"],
    ["Penduduk Taif menyambut dakwah Nabi s.a.w. dengan…", "membaling batu", "memeluk Islam beramai-ramai", "memberi hadiah", "menjemput ke rumah"]
  ]},
  { t: "Israk Mikraj dan Hijrah", q: [
    ["Israk ialah perjalanan Nabi s.a.w. dari Masjidil Haram ke…", "Masjidil Aqsa", "Masjid Nabawi", "Masjid Quba'", "Sidratul Muntaha"],
    ["Mikraj ialah perjalanan Nabi s.a.w. dari Masjidil Aqsa ke…", "Sidratul Muntaha", "Makkah", "Madinah", "Taif"],
    ["Kenderaan Nabi s.a.w. dalam peristiwa Israk Mikraj dinamakan…", "Buraq", "unta", "kuda", "Al-Qaswa'"],
    ["Perintah yang diterima dalam peristiwa Israk Mikraj ialah…", "solat fardu lima waktu", "puasa Ramadan", "zakat", "haji"],
    ["Sahabat yang terus membenarkan peristiwa Israk Mikraj ialah…", "Abu Bakar", "Abu Jahal", "Abu Lahab", "Abu Sufyan"],
    ["Abu Bakar digelar As-Siddiq yang bermaksud…", "yang membenarkan", "yang berani", "yang pemurah", "yang kuat"],
    ["Nabi s.a.w. berhijrah ke Madinah bersama…", "Abu Bakar", "Umar", "Ali", "Uthman"],
    ["Semasa hijrah, Nabi s.a.w. dan Abu Bakar bersembunyi di Gua…", "Thur", "Hira'", "Uhud", "Kahfi"],
    ["Pemuda yang tidur di tempat tidur Nabi s.a.w. pada malam hijrah ialah…", "Ali bin Abi Talib", "Abu Bakar", "Bilal", "Zaid"],
    ["Nama asal kota Madinah ialah…", "Yathrib", "Taif", "Syam", "Habsyah"],
    ["Masjid pertama yang dibina oleh Nabi s.a.w. ialah Masjid…", "Quba'", "Nabawi", "Al-Aqsa", "Haram"],
    ["Penduduk Madinah yang menolong umat Islam dari Makkah dinamakan…", "Ansar", "Muhajirin", "Quraisy", "Badwi"],
    ["Umat Islam yang berhijrah dari Makkah ke Madinah dinamakan…", "Muhajirin", "Ansar", "Aus", "Khazraj"],
    ["Takwim Hijrah dimulakan pada zaman Khalifah…", "Umar Al-Khattab", "Abu Bakar", "Uthman", "Ali"]
  ]},
  { t: "Peperangan dan Pembukaan Kota Makkah", q: [
    ["Perang pertama dalam Islam ialah Perang…", "Badar", "Uhud", "Khandaq", "Hunain"],
    ["Perang Badar berlaku pada bulan…", "Ramadan", "Syawal", "Muharram", "Zulhijjah"],
    ["Bilangan tentera Islam dalam Perang Badar lebih kurang…", "313 orang", "1000 orang", "3000 orang", "10 000 orang"],
    ["Dalam Perang Uhud, tentera Islam tewas kerana pasukan ___ turun dari bukit.", "pemanah", "berkuda", "unta", "perubatan"],
    ["Bapa saudara Nabi s.a.w. yang syahid dalam Perang Uhud ialah…", "Hamzah", "Abbas", "Abu Talib", "Abu Lahab"],
    ["Strategi menggali parit dalam Perang Khandaq dicadangkan oleh…", "Salman Al-Farisi", "Khalid Al-Walid", "Umar Al-Khattab", "Ali"],
    ["Perang Khandaq juga dikenali sebagai Perang…", "Ahzab", "Badar", "Tabuk", "Hunain"],
    ["Perjanjian damai antara umat Islam dan Quraisy ialah Perjanjian…", "Hudaibiyah", "Aqabah", "Madinah", "Taif"],
    ["Pembukaan Kota Makkah (Fathul Makkah) berlaku pada tahun…", "8 Hijrah", "2 Hijrah", "11 Hijrah", "5 Hijrah"],
    ["Ketika Fathul Makkah, Nabi s.a.w. bersikap…", "memaafkan penduduk Makkah", "membalas dendam", "membakar rumah", "menghalau semua orang"],
    ["Khalid Al-Walid digelar…", "Saifullah (pedang Allah)", "As-Siddiq", "Al-Faruq", "Zun Nurain"],
    ["Haji terakhir Nabi s.a.w. dinamakan…", "Haji Wida'", "Haji Akbar", "Haji Ifrad", "Haji Badal"],
    ["Nabi Muhammad s.a.w. wafat ketika berumur…", "63 tahun", "40 tahun", "53 tahun", "70 tahun"],
    ["Nabi s.a.w. wafat dan dimakamkan di…", "Madinah", "Makkah", "Taif", "Syam"]
  ]},
  { t: "Khulafa' Ar-Rasyidin dan Sahabat", q: [
    ["Khalifah Islam yang pertama ialah…", "Abu Bakar As-Siddiq", "Umar Al-Khattab", "Uthman bin Affan", "Ali bin Abi Talib"],
    ["Khalifah yang digelar Al-Faruq ialah…", "Umar Al-Khattab", "Abu Bakar", "Uthman", "Ali"],
    ["Khalifah yang digelar Zun Nurain ialah…", "Uthman bin Affan", "Umar", "Ali", "Abu Bakar"],
    ["Uthman digelar Zun Nurain kerana…", "berkahwin dengan dua orang puteri Nabi s.a.w.", "sangat kaya", "berani berperang", "pandai berpidato"],
    ["Khalifah Ar-Rasyidin yang keempat ialah…", "Ali bin Abi Talib", "Uthman", "Umar", "Muawiyah"],
    ["Al-Quran dikumpulkan dalam satu mushaf buat pertama kali pada zaman Khalifah…", "Abu Bakar", "Umar", "Uthman", "Ali"],
    ["Mushaf Al-Quran disalin dan diseragamkan (Mushaf Uthmani) pada zaman Khalifah…", "Uthman", "Abu Bakar", "Umar", "Ali"],
    ["Muazzin pertama dalam Islam ialah…", "Bilal bin Rabah", "Abu Bakar", "Ali", "Zaid"],
    ["Isteri Nabi s.a.w. yang banyak meriwayatkan hadis ialah…", "Siti Aisyah", "Siti Khadijah", "Siti Hafsah", "Siti Saudah"],
    ["Puteri Nabi s.a.w. yang berkahwin dengan Ali bin Abi Talib ialah…", "Fatimah Az-Zahra", "Zainab", "Ruqayyah", "Ummu Kalthum"]
  ]}
],

/* ======================= ADAB (Akhlak Islamiah) ======================= */
adab: [
  { t: "Adab Harian", q: [
    ["Kita mula makan dengan membaca…", "basmalah", "tahmid", "takbir", "istighfar"],
    ["Adab makan ialah menggunakan tangan…", "kanan", "kiri", "kedua-dua", "mana-mana"],
    ["Selepas makan, kita membaca…", "doa selepas makan", "doa tidur", "doa masuk tandas", "doa naik kenderaan"],
    ["Ketika makan, kita digalakkan…", "makan makanan yang dekat dengan kita", "mencela makanan", "makan sambil berjalan", "bercakap dengan mulut penuh"],
    ["Adab sebelum tidur ialah…", "berwuduk dan membaca doa", "makan banyak", "bermain telefon", "tidur meniarap"],
    ["Rasulullah s.a.w. tidur mengiring ke sebelah…", "kanan", "kiri", "meniarap", "terlentang"],
    ["Ketika masuk ke tandas, kita mendahulukan kaki…", "kiri", "kanan", "kedua-dua", "mana-mana"],
    ["Ketika keluar dari tandas, kita mendahulukan kaki…", "kanan", "kiri", "kedua-dua", "mana-mana"],
    ["Ketika masuk ke masjid, kita mendahulukan kaki…", "kanan", "kiri", "kedua-dua", "mana-mana"],
    ["Ketika memakai pakaian, kita mendahulukan anggota sebelah…", "kanan", "kiri", "belakang", "atas"],
    ["Apabila bersin, kita mengucapkan…", "Alhamdulillah", "Subhanallah", "Astaghfirullah", "Allahu Akbar"],
    ["Apabila mendengar orang bersin mengucapkan Alhamdulillah, kita membalas…", "Yarhamukallah", "Alhamdulillah", "Bismillah", "Insya-Allah"],
    ["Apabila menguap, kita hendaklah…", "menutup mulut", "membuka mulut luas", "bersuara kuat", "ketawa"],
    ["Adab bermusafir ialah…", "membaca doa menaiki kenderaan", "keluar tanpa memberitahu ibu bapa", "membuang sampah merata-rata", "bergaduh"]
  ]},
  { t: "Doa-doa Harian", q: [
    ["بِاسْمِكَ اللَّهُمَّ أَحْيَا وَأَمُوتُ|Doa ini dibaca ketika…", "hendak tidur", "bangun tidur", "hendak makan", "masuk tandas"],
    ["الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ|Doa ini dibaca ketika…", "bangun tidur", "hendak tidur", "selepas makan", "keluar rumah"],
    ["اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ|Doa ini dibaca ketika…", "hendak masuk tandas", "keluar tandas", "hendak tidur", "selepas solat"],
    ["غُفْرَانَكَ|Doa ini dibaca ketika…", "keluar dari tandas", "masuk tandas", "hendak makan", "bersin"],
    ["الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ|Doa ini dibaca…", "selepas makan", "sebelum makan", "sebelum tidur", "ketika hujan"],
    ["سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ|Doa ini dibaca ketika…", "menaiki kenderaan", "masuk masjid", "hendak tidur", "selepas makan"],
    ["رَبِّ زِدْنِي عِلْمًا|Maksud doa ini ialah…", "Ya Tuhanku, tambahkanlah ilmuku", "Ya Allah, ampunkan dosaku", "Ya Allah, berkatilah rezeki kami", "Ya Allah, lindungilah aku"],
    ["رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ|Doa ini memohon keampunan untuk diri sendiri dan…", "ibu bapa", "guru", "jiran", "kawan"],
    ["Ucapan \"السَّلَامُ عَلَيْكُمْ\" bermaksud…", "sejahtera ke atas kamu", "selamat pagi", "terima kasih", "selamat tinggal"],
    ["Ucapan \"جَزَاكَ اللَّهُ خَيْرًا\" diucapkan untuk…", "berterima kasih", "meminta maaf", "memberi salam", "bersin"]
  ]},
  { t: "Adab Memberi Salam dan Bergaul", q: [
    ["Hukum memberi salam ialah…", "sunat", "wajib", "makruh", "haram"],
    ["Hukum menjawab salam ialah…", "wajib", "sunat", "harus", "makruh"],
    ["Yang muda hendaklah memberi salam kepada…", "yang tua", "yang lebih muda", "yang berkenderaan", "yang berjalan"],
    ["Orang yang berjalan hendaklah memberi salam kepada…", "orang yang duduk", "orang yang berkenderaan", "orang yang berlari", "orang yang ramai sahaja"],
    ["Orang yang berkenderaan hendaklah memberi salam kepada…", "orang yang berjalan", "orang yang menaiki kapal terbang", "orang yang tidur", "tiada sesiapa"],
    ["Kumpulan yang sedikit hendaklah memberi salam kepada…", "kumpulan yang ramai", "kumpulan yang lebih sedikit", "orang yang lalu", "tiada sesiapa"],
    ["Ketika bertamu ke rumah orang, kita hendaklah…", "memberi salam dan meminta izin masuk", "terus masuk", "mengetuk pintu dengan kuat berkali-kali", "menjenguk ke tingkap"],
    ["Kita diminta memberi salam paling banyak ___ kali ketika bertamu sebelum pulang jika tiada jawapan.", "3", "1", "5", "10"],
    ["Adab bersahabat ialah…", "saling menolong dalam kebaikan", "mengejek kawan", "mengumpat", "bergaduh"],
    ["Adab terhadap jiran ialah…", "tidak menyakiti jiran", "membuat bising waktu malam", "membuang sampah di hadapan rumah jiran", "tidak bertegur sapa"]
  ]},
  { t: "Adab terhadap Ibu Bapa, Guru dan Al-Quran", q: [
    ["Adab terhadap ibu bapa ialah…", "taat dan bercakap dengan lembut", "meninggikan suara", "membantah", "mengabaikan"],
    ["Perkataan \"ah\" kepada ibu bapa adalah…", "dilarang", "digalakkan", "sunat", "wajib"],
    ["Cara mendoakan ibu bapa ialah dengan membaca…", "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ", "بِسْمِ اللَّهِ", "غُفْرَانَكَ", "اللَّهُ أَكْبَرُ"],
    ["Derhaka kepada ibu bapa termasuk dalam dosa…", "besar", "kecil", "biasa", "tiada dosa"],
    ["Adab terhadap guru ialah…", "menghormati dan mendengar nasihat", "tidur di dalam kelas", "bercakap ketika guru mengajar", "mengejek guru"],
    ["Adab menuntut ilmu ialah…", "ikhlas dan bersungguh-sungguh", "malas", "menipu dalam ujian", "ponteng kelas"],
    ["Adab membaca Al-Quran ialah…", "dalam keadaan suci dan menghadap kiblat", "sambil berbaring dan makan", "dengan suara menjerit", "sambil bergurau"],
    ["Al-Quran hendaklah diletakkan di tempat yang…", "tinggi dan bersih", "lantai", "bawah kerusi", "dalam tandas"],
    ["Adab ketika mendengar azan ialah…", "berhenti bercakap dan menjawab azan", "terus bermain", "membuka televisyen dengan kuat", "ketawa"],
    ["Adab di dalam masjid ialah…", "tidak membuat bising", "berlari-lari", "makan di ruang solat", "bermain bola"]
  ]},
  { t: "Akhlak Terpuji dan Tercela", q: [
    ["Contoh akhlak terpuji ialah…", "jujur", "berbohong", "dengki", "sombong"],
    ["Sifat menunaikan janji dan menjaga amanah dinamakan…", "amanah", "khianat", "riak", "takabbur"],
    ["Menceritakan keburukan orang lain di belakangnya dinamakan…", "mengumpat", "menasihati", "memuji", "berdoa"],
    ["Sifat sombong dan memandang rendah orang lain dinamakan…", "takabbur", "tawaduk", "ikhlas", "qanaah"],
    ["Beramal kerana ingin dipuji orang dinamakan…", "riak", "ikhlas", "sabar", "syukur"],
    ["Iri hati dan mahu nikmat orang lain hilang dinamakan…", "hasad dengki", "syukur", "pemurah", "pemaaf"],
    ["Sifat merendah diri dinamakan…", "tawaduk", "takabbur", "riak", "kedekut"],
    ["Mengucapkan Alhamdulillah apabila mendapat nikmat ialah tanda…", "bersyukur", "sombong", "kufur nikmat", "malas"],
    ["Membuat sesuatu semata-mata kerana Allah dinamakan…", "ikhlas", "riak", "sum'ah", "ujub"],
    ["Jika kawan melakukan kesilapan dan meminta maaf, kita hendaklah…", "memaafkannya", "berdendam", "memukulnya", "mengejeknya"],
    ["Menahan marah ketika diejek ialah contoh sifat…", "sabar", "pemarah", "pendendam", "sombong"],
    ["Sifat berpada dengan apa yang ada dinamakan…", "qanaah", "tamak", "riak", "ujub"]
  ]}
],

/* ======================= JAWI DAN KHAT ======================= */
jawi: [
  { t: "Huruf Jawi", q: [
    ["Huruf Jawi bagi bunyi \"ca\" ialah…", "چ", "ج", "ح", "خ"],
    ["Huruf Jawi bagi bunyi \"nga\" ialah…", "ڠ", "ڽ", "ن", "غ"],
    ["Huruf Jawi bagi bunyi \"pa\" ialah…", "ڤ", "ف", "ب", "ق"],
    ["Huruf Jawi bagi bunyi \"ga\" ialah…", "ݢ", "ک", "غ", "ق"],
    ["Huruf Jawi bagi bunyi \"nya\" ialah…", "ڽ", "ڠ", "ن", "ي"],
    ["Huruf Jawi bagi bunyi \"va\" ialah…", "ۏ", "و", "ف", "ڤ"],
    ["Huruf Jawi yang TIDAK terdapat dalam huruf Arab ialah…", "چ", "ب", "ت", "س"],
    ["چ|Huruf ini dinamakan…", "ca", "jim", "ha", "kha"],
    ["ڠ|Huruf ini dinamakan…", "nga", "nya", "nun", "ghain"],
    ["Tulisan Jawi ditulis dari…", "kanan ke kiri", "kiri ke kanan", "atas ke bawah", "bawah ke atas"],
    ["Tulisan Jawi berasal daripada huruf…", "Arab", "Rumi", "Cina", "Tamil"],
    ["Huruf vokal dalam ejaan Jawi ialah…", "ا و ي", "ب ت ث", "چ ڠ ڤ", "ق ط ب"]
  ]},
  { t: "Membaca Perkataan Jawi",
    q: [
      ["سکوله|Perkataan ini dibaca…", "sekolah", "sekala", "selalu", "sukuan"],
      ["ݢورو|Perkataan ini dibaca…", "guru", "garu", "gera", "gori"]
    ],
    g: [
      () => { const [rm, jw] = pick(JAWI); return from(`${jw}|Perkataan Jawi ini dibaca…`, rm, JAWI.filter(x => x[0] !== rm).map(x => x[0])); },
      () => { const [rm, jw] = pick(JAWI); return from(`Ejaan Jawi bagi perkataan "${rm}" ialah…`, jw, JAWI.filter(x => x[1] !== jw).map(x => x[1])); }
    ] },
  { t: "Ejaan Jawi", q: [
    ["Ejaan Jawi yang betul bagi \"sekolah\" ialah…", "سکوله", "سيکوله", "سکولا", "سکولة"],
    ["Ejaan Jawi yang betul bagi \"kucing\" ialah…", "کوچيڠ", "کوچين", "کچيڠ", "کوجيڠ"],
    ["Ejaan Jawi yang betul bagi \"buku\" ialah…", "بوکو", "بکو", "بوکوه", "بوقو"],
    ["Ejaan Jawi yang betul bagi \"rumah\" ialah…", "رومه", "روما", "رومة", "رمه"],
    ["Ejaan Jawi yang betul bagi \"pokok\" ialah…", "ڤوکوق", "ڤوکوک", "فوکوق", "ڤوقوق"],
    ["Ejaan Jawi yang betul bagi \"guru\" ialah…", "ݢورو", "غورو", "گرو", "کورو"],
    ["Ejaan Jawi yang betul bagi \"negara\" ialah…", "نݢارا", "نݢرا", "نکارا", "ناݢارا"],
    ["Ejaan Jawi yang betul bagi \"bunga\" ialah…", "بوڠا", "بوڠ", "بونݢا", "بوغا"],
    ["Ejaan Jawi yang betul bagi \"emak\" ialah…", "امق", "ايماق", "امک", "ايمق"],
    ["Ejaan Jawi yang betul bagi \"ilmu\" ialah…", "علمو", "ايلمو", "علم", "إلمو"],
    ["Ejaan Jawi yang betul bagi \"masjid\" ialah…", "مسجد", "مسجيد", "ماسجد", "مسجت"],
    ["Ejaan Jawi yang betul bagi \"Jumaat\" ialah…", "جمعة", "جوماعت", "جومعه", "جماعة"]
  ]},
  { t: "Khat", q: [
    ["Khat bermaksud…", "seni tulisan yang indah", "tulisan rumi", "bahasa Arab", "lukisan pemandangan"],
    ["Khat yang paling mudah dibaca dan banyak digunakan dalam mushaf Al-Quran ialah khat…", "Nasakh", "Kufi", "Diwani", "Thuluth"],
    ["Khat yang biasa digunakan untuk tulisan tangan harian kerana mudah dan cepat ditulis ialah khat…", "Riq'ah", "Thuluth", "Kufi", "Diwani"],
    ["Khat yang tertua dan bentuknya bersegi ialah khat…", "Kufi", "Nasakh", "Riq'ah", "Farisi"],
    ["Khat yang sering digunakan pada kepala surat diraja dan dokumen rasmi ialah khat…", "Diwani", "Riq'ah", "Nasakh", "Kufi"],
    ["Khat yang banyak digunakan untuk hiasan masjid dan tajuk ialah khat…", "Thuluth", "Riq'ah", "Nasakh", "Kufi"],
    ["Alat menulis khat secara tradisional dinamakan…", "qalam", "pensel warna", "berus cat", "pembaris"],
    ["Ukuran huruf dalam khat menggunakan unit…", "titik (nuqtah)", "sentimeter sahaja", "inci", "garisan"],
    ["Adab menulis khat ayat Al-Quran ialah…", "menulis dengan kemas dan menghormati ayat", "menulis di lantai", "menulis sambil bergurau", "membuang kertas merata-rata"]
  ]}
],

/* ======================= BAHASA ARAB (Lughah Al-Quran) ======================= */
ba: [
  { t: "Diri dan Keluarga", q: [
    ["أَنَا|Maksud perkataan ini ialah…", "saya", "kamu", "dia", "kami"],
    ["أَنْتَ|Maksud perkataan ini (untuk lelaki) ialah…", "kamu", "saya", "dia", "mereka"],
    ["هُوَ|Maksud perkataan ini ialah…", "dia (lelaki)", "dia (perempuan)", "saya", "kami"],
    ["هِيَ|Maksud perkataan ini ialah…", "dia (perempuan)", "dia (lelaki)", "kamu", "saya"],
    ["نَحْنُ|Maksud perkataan ini ialah…", "kami / kita", "saya", "mereka", "kamu"],
    ["اِسْمِي أَحْمَدُ|Maksud ayat ini ialah…", "Nama saya Ahmad", "Ini Ahmad", "Ahmad di rumah", "Ahmad seorang guru"]
  ], g: vocab(AR_DIRI) },
  { t: "Sekolah dan Rumah", q: [
    ["مَا هٰذَا؟|Maksud soalan ini ialah…", "Apakah ini?", "Siapakah ini?", "Di manakah ini?", "Berapakah ini?"],
    ["مَنْ هٰذَا؟|Maksud soalan ini ialah…", "Siapakah ini?", "Apakah ini?", "Di mana?", "Bila?"],
    ["أَيْنَ الْكِتَابُ؟|Maksud soalan ini ialah…", "Di manakah buku?", "Apakah buku?", "Siapa buku?", "Berapa buku?"],
    ["هٰذَا قَلَمٌ|Maksud ayat ini ialah…", "Ini pen", "Itu pen", "Pen saya", "Pen di atas meja"],
    ["Perkataan \"هٰذَا\" digunakan untuk benda yang…", "dekat (lelaki/muzakkar)", "jauh", "perempuan sahaja", "ramai"]
  ], g: vocab(AR_SEKOLAH) },
  { t: "Alam Sekitar", q: [
    ["Perkataan bagi \"matahari\" dalam bahasa Arab ialah…", "شَمْسٌ", "قَمَرٌ", "نَجْمٌ", "سَمَاءٌ"]
  ], g: vocab(AR_ALAM) },
  { t: "Ibadah dan Kalimah Al-Quran", q: [
    ["رَبِّ|Maksud perkataan ini dalam \"رَبِّ زِدْنِي عِلْمًا\" ialah…", "wahai Tuhanku", "ilmu", "tambahkan", "aku"],
    ["Perkataan \"عِلْمًا\" dalam doa \"رَبِّ زِدْنِي عِلْمًا\" bermaksud…", "ilmu", "rezeki", "kesihatan", "rahmat"]
  ], g: vocab(AR_IBADAH) },
  { t: "Warna, Nombor dan Hari", q: [
    ["Hari yang paling mulia dalam seminggu ialah يَوْمُ…", "الْجُمُعَةِ", "السَّبْتِ", "الْأَحَدِ", "الثُّلَاثَاءِ"],
    ["شُكْرًا|Maksud perkataan ini ialah…", "terima kasih", "sama-sama", "maaf", "selamat pagi"],
    ["عَفْوًا|Jawapan kepada \"شُكْرًا\" ialah…", "sama-sama", "terima kasih", "selamat jalan", "apa khabar"],
    ["صَبَاحَ الْخَيْرِ|Maksud ucapan ini ialah…", "selamat pagi", "selamat malam", "selamat jalan", "terima kasih"],
    ["مَعَ السَّلَامَةِ|Maksud ucapan ini ialah…", "selamat jalan", "selamat pagi", "terima kasih", "apa khabar"],
    ["كَيْفَ حَالُكَ؟|Maksud soalan ini ialah…", "Apa khabar?", "Siapa nama kamu?", "Di mana kamu?", "Berapa umur kamu?"]
  ], g: [...vocab(AR_WARNA), ...vocab(AR_NOMBOR), ...vocab(AR_HARI)] }
]
};
})();
