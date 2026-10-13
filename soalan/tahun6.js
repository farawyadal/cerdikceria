/* TAHUN 6 — Cerdik Ceria
   Versi awal (belum disusun ikut bab). Akan dikemas kini ikut bab buku teks KSSR.
   Format: ["Soalan", "BETUL", "salah1", "salah2", "salah3", "penerangan (pilihan)"] */
SOALAN[6] = {
bm: [
  { t: "Campuran (asas)", q: [
    ["Peribahasa \"air dicincang tidak akan putus\" bermaksud…","persaudaraan tidak putus walaupun bergaduh","air sukar dipotong","sungai yang panjang","air yang jernih"],
    ["Peribahasa \"ada udang di sebalik batu\" bermaksud…","ada maksud tersembunyi","banyak udang di sungai","suka bersembunyi","orang yang jujur"],
    ["Simpulan bahasa \"panjang tangan\" bermaksud…","suka mencuri","suka menolong","tinggi lampai","suka bersalam"],
    ["Ejaan kata majmuk yang betul ialah…","tanggungjawab","tanggung jawab","tangung jawab","tanggong jawab","\"tanggungjawab\" ialah kata majmuk yang telah mantap dan dieja bercantum."],
    ["Imbuhan \"per-…-an\" + \"satu\" menjadi…","persatuan","penyatuan","bersatu","kesatuan"],
    ["Penjodoh bilangan yang sesuai: \"sebutir ___\"","mutiara","kereta","rumah","lembu"],
    ["Simpulan bahasa \"buah hati\" bermaksud…","orang yang sangat disayangi","buah yang manis","jantung","hadiah"],
    ["Saya ingin pergi ke kedai, ___ hujan turun dengan lebat.","tetapi","dan","atau","supaya"],
    ["Peribahasa \"hujan emas di negeri orang, hujan batu di negeri sendiri, lebih baik di negeri sendiri\" bermaksud…","tanah air sendiri lebih baik","negeri orang lebih kaya","hujan batu itu bahaya","suka melancong"],
    ["Simpulan bahasa \"kaki ayam\" bermaksud…","tidak memakai kasut","kaki yang kurus","suka berjalan","berlari laju"]
  ]}
],
bi: [
  { t: "Campuran (asas)", q: [
    ["Which sentence is in the passive voice?","The cake was baked by my mother.","My mother baked the cake.","My mother bakes cakes.","My mother is baking."],
    ["Neither Ali ___ Abu came to the party.","nor","or","and","but"],
    ["see — saw — ___","seen","seed","sawn","seeing"],
    ["The idiom \"a piece of cake\" means…","very easy","very sweet","very small","very hungry"],
    ["He runs quickly. The adverb is…","quickly","runs","He","run"],
    ["She has been waiting ___ two hours.","for","since","at","on"],
    ["Which word is spelled correctly?","necessary","neccessary","necesary","neccesary"],
    ["A word that means the same as \"enormous\" is…","huge","tiny","weak","quiet"],
    ["You are a student, ___?","aren't you","isn't it","don't you","are you"],
    ["The plural of \"knife\" is…","knives","knifes","knifs","knive"]
  ]}
],
math: [
  { t: "Nombor dan Operasi", q: [], g: [() => { const a = MK.r(2, 50), b = MK.r(2, 12), c = MK.r(2, 12); return MK.q(`${a} + ${b} × ${c} = ?`, a + b * c, [a, b, c, 10], false, "Darab dahulu, kemudian tambah."); },
      () => { const p = MK.pick([20, 30, 40, 75]), n = MK.r(1, 20) * 20; return MK.q(`${p}% daripada ${MK.fmt(n)} = ?`, n * p / 100, [5, 10, 20]); },
      () => { const n = MK.r(2, 15) * 4; return MK.q(`3/4 daripada ${n} = ?`, n * 3 / 4, [1, 3, n / 4]); },
      () => { const avg = MK.r(10, 90), x = MK.r(1, 9); return MK.q(`Purata bagi ${avg - x}, ${avg} dan ${avg + x} ialah…`, avg, [1, 2, x]); },
      () => { const a = MK.r(100, 9999) / 100, b = MK.r(2, 9); return MK.q(`${MK.fmt(a)} × ${b} = ?`, +(a * b).toFixed(2), [0.1, 1, 0.5, 10], true); }] },
  { t: "Ukuran, Masa dan Wang", q: [
    ["1 dekad = ___ tahun","10","100","5","1000"],
    ["1 abad = ___ tahun","100","10","1000","50"],
    ["Isi padu kubus bersisi 3 cm ialah…","27 cm³","9 cm³","18 cm³","12 cm³"]
  ]}
],
sains: [
  { t: "Campuran (asas)", q: [
    ["Gerhana Bulan berlaku apabila ___ berada di antara Matahari dan Bulan.","Bumi","Marikh","Utarid","Zuhrah"],
    ["Daya geseran bertindak…","menentang arah gerakan","mempercepat gerakan","menarik objek ke atas","tidak memberi kesan"],
    ["Laju = ?","jarak ÷ masa","masa ÷ jarak","jarak × masa","jarak + masa"],
    ["Unit bagi laju ialah…","km/j","kg","°C","liter"],
    ["Mengawet ikan menggunakan garam dipanggil…","pengasinan","pengetinan","penyejukbekuan","pempasteuran"],
    ["Pengaratan pagar besi boleh dicegah dengan…","mengecatnya","menyiramnya dengan air","membiarkannya","menggosok dengan pasir"],
    ["Buruj yang menunjukkan arah selatan ialah…","Buruj Pari","Buruj Belantik","Buruj Biduk","Buruj Kala"],
    ["Contoh sumber tenaga yang boleh diperbaharui ialah…","angin","petroleum","arang batu","gas asli"],
    ["Membuang sampah ke dalam sungai menyebabkan…","pencemaran air","udara bersih","ikan bertambah","air lebih jernih"],
    ["Lebah dan bunga mempunyai hubungan yang…","saling memberi manfaat","saling merugikan","tiada kaitan","lebah memusnahkan bunga"]
  ]}
],
sejarah: [
  { t: "Campuran (asas)", q: [
    ["Tanah Melayu mencapai kemerdekaan pada…","31 Ogos 1957","16 September 1963","31 Ogos 1963","1 Januari 1957"],
    ["Perdana Menteri Malaysia yang pertama ialah…","Tunku Abdul Rahman","Tun Abdul Razak","Tun Hussein Onn","Tun Dr. Mahathir"],
    ["Malaysia dibentuk pada…","16 September 1963","31 Ogos 1957","9 Ogos 1965","1 Februari 1974"],
    ["Laungan \"Merdeka!\" pada 31 Ogos 1957 diadakan di…","Stadium Merdeka","Dataran Merdeka","Bukit Jalil","Putrajaya"],
    ["Negeri yang keluar daripada Malaysia pada tahun 1965 ialah…","Singapura","Brunei","Sabah","Sarawak"],
    ["Tokoh yang menentang British di Pasir Salak, Perak ialah…","Datuk Maharaja Lela","Mat Kilau","Rentap","Mat Salleh"],
    ["Mat Kilau berjuang menentang British di negeri…","Pahang","Perak","Sabah","Kelantan"],
    ["Rentap berjuang menentang penjajah di…","Sarawak","Sabah","Johor","Terengganu"],
    ["Mat Salleh berjuang menentang British di…","Sabah","Sarawak","Perak","Pahang"],
    ["Perdana Menteri Malaysia yang kedua ialah…","Tun Abdul Razak","Tunku Abdul Rahman","Tun Hussein Onn","Tun Abdullah Badawi"]
  ]}
]
};
