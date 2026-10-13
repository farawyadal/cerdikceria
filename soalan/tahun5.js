/* TAHUN 5 — Cerdik Ceria
   Versi awal (belum disusun ikut bab). Akan dikemas kini ikut bab buku teks KSSR.
   Format: ["Soalan", "BETUL", "salah1", "salah2", "salah3", "penerangan (pilihan)"] */
SOALAN[5] = {
bm: [
  { t: "Campuran (asas)", q: [
    ["Simpulan bahasa \"ringan tulang\" bermaksud…","rajin","malas","kurus","lemah"],
    ["Peribahasa \"melentur buluh biarlah dari rebungnya\" bermaksud…","mendidik anak sejak kecil","menanam buluh","membuat kraf buluh","memasak rebung"],
    ["Simpulan bahasa \"besar kepala\" bermaksud…","sombong dan degil","pandai","pemurah","kepala yang besar"],
    ["Yang manakah kata ganda berentak?","sayur-mayur","rumah-rumah","kanak-kanak","buku-buku"],
    ["Kuala Lumpur ___ ibu negara Malaysia.","ialah","adalah","iaitu","yakni","\"ialah\" digunakan di hadapan kata nama."],
    ["Yang manakah kata seru?","Wah","dan","sangat","kerana"],
    ["Peribahasa \"bagai kacang lupakan kulit\" bermaksud…","orang yang lupa asal usul atau jasa orang","orang yang suka makan kacang","orang yang pemurah","orang yang rajin"],
    ["Imbuhan \"memper-\" + \"besar\" menjadi…","memperbesar","membesarkan","pembesaran","terbesar"],
    ["Simpulan bahasa \"tangan terbuka\" bermaksud…","menerima dengan senang hati","suka mencuri","malas bekerja","tangan yang luka"],
    ["Penjodoh bilangan yang sesuai: \"sebuah ___\"","rumah","ikan","kertas","pensel"]
  ]}
],
bi: [
  { t: "Campuran (asas)", q: [
    ["How ___ water is in the bottle?","much","many","long","old"],
    ["The past tense of \"write\" is…","wrote","writed","written","writes"],
    ["If it rains, I ___ stay at home.","will","was","am","did"],
    ["A word that means the same as \"difficult\" is…","hard","easy","soft","simple"],
    ["Which sentence is in the present continuous tense?","She is reading a book.","She read a book.","She reads a book.","She will read a book."],
    ["This book is ___ than that magazine.","thicker","thick","thickest","more thick"],
    ["The opposite of \"ancient\" is…","modern","old","dirty","broken"],
    ["This bag belongs to me. It is ___ bag.","my","me","I","mine"],
    ["I have lived here ___ 2020.","since","for","from","at"],
    ["\"un\" + \"happy\" = ?","unhappy","dishappy","nonhappy","inhappy"]
  ]}
],
math: [
  { t: "Nombor dan Operasi", q: [], g: [() => { const a = MK.r(100, 999), b = MK.r(11, 99); return MK.q(`${a} × ${b} = ?`, a * b, [a, 10, 100, b]); },
      () => { const a = MK.r(100, 9999) / 100, b = MK.r(100, 9999) / 100; return MK.q(`${MK.fmt(a)} + ${MK.fmt(b)} = ?`, +(a + b).toFixed(2), [0.1, 1, 0.01, 10], true); },
      () => { const p = MK.pick([10, 25, 50]), n = MK.r(1, 20) * 100; return MK.q(`${p}% daripada ${MK.fmt(n)} = ?`, n * p / 100, [10, 50, 100, n / 10]); },
      () => { const a = MK.r(100000, 999999), b = MK.r(10000, 99999); return MK.q(`${MK.fmt(a)} − ${MK.fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const n = MK.r(1000, 99999); const ans = Math.round(n / 1000) * 1000; return MK.q(`Bundarkan ${MK.fmt(n)} kepada ribu yang terdekat.`, ans, [1000, 100, 2000]); }] },
  { t: "Ukuran, Masa dan Wang", q: [
    ["1 kilometer = ___ meter","1000","100","10","10000"],
    ["Perimeter segi empat sama bersisi 5 cm ialah…","20 cm","25 cm","10 cm","15 cm"],
    ["Luas segi empat tepat 6 cm × 4 cm ialah…","24 cm²","20 cm²","10 cm²","48 cm²"]
  ]}
],
sains: [
  { t: "Campuran (asas)", q: [
    ["Cahaya bergerak dalam garis…","lurus","bengkang-bengkok","bulat","putus-putus"],
    ["Perubahan cecair kepada gas dipanggil…","penyejatan","pembekuan","kondensasi","peleburan"],
    ["Perubahan wap air kepada titisan air dipanggil…","kondensasi","penyejatan","pembekuan","pendidihan"],
    ["Bumi berputar pada paksinya dalam masa…","24 jam","12 jam","7 hari","365 hari"],
    ["Bumi mengelilingi Matahari dalam masa lebih kurang…","365 hari","30 hari","24 jam","7 hari"],
    ["Pengaratan besi memerlukan…","air dan udara","cahaya sahaja","pasir","minyak"],
    ["Haiwan yang memburu haiwan lain untuk makanan dipanggil…","pemangsa","mangsa","pengurai","pengeluar"],
    ["Mentol dalam litar selari menyala lebih ___ berbanding litar bersiri.","terang","malap","perlahan","kecil"],
    ["Fasa Bulan apabila seluruh permukaannya kelihatan bercahaya ialah…","Bulan purnama","anak bulan","bulan sabit","bulan separa"],
    ["Semut hidup berkumpulan untuk…","mendapatkan makanan dan melindungi diri","tidur","bermain","mengelak hujan sahaja"]
  ]}
],
sejarah: [
  { t: "Campuran (asas)", q: [
    ["Ketua negara Malaysia ialah…","Yang di-Pertuan Agong","Perdana Menteri","Menteri Besar","Ketua Menteri"],
    ["Bendera Malaysia dikenali sebagai…","Jalur Gemilang","Sang Saka","Bintang Kejora","Merah Putih"],
    ["Berapakah jalur merah dan putih pada Jalur Gemilang?","14","13","11","9"],
    ["Lagu kebangsaan Malaysia ialah…","Negaraku","Jalur Gemilang","Tanggal 31","Malaysia Berjaya"],
    ["Agama bagi Persekutuan Malaysia ialah…","Islam","Kristian","Buddha","Hindu"],
    ["Bahasa kebangsaan Malaysia ialah…","Bahasa Melayu","Bahasa Inggeris","Bahasa Cina","Bahasa Tamil"],
    ["Prinsip pertama Rukun Negara ialah…","Kepercayaan kepada Tuhan","Kesetiaan kepada Raja dan Negara","Keluhuran Perlembagaan","Kesopanan dan Kesusilaan"],
    ["Bunga kebangsaan Malaysia ialah…","bunga raya","bunga mawar","bunga orkid","bunga melur"],
    ["Berapakah negeri di Malaysia yang mempunyai Raja atau Sultan?","9","13","7","11"],
    ["Haiwan yang terdapat pada Jata Negara ialah…","harimau","gajah","helang","kancil"]
  ]}
]
};
