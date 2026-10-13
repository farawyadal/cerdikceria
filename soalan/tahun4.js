/* TAHUN 4 — Cerdik Ceria
   Versi awal (belum disusun ikut bab). Akan dikemas kini ikut bab buku teks KSSR.
   Format: ["Soalan", "BETUL", "salah1", "salah2", "salah3", "penerangan (pilihan)"] */
SOALAN[4] = {
bm: [
  { t: "Campuran (asas)", q: [
    ["Peribahasa \"berat sama dipikul, ringan sama dijinjing\" bermaksud…","bekerjasama dalam susah dan senang","membawa barang berat","malas membantu orang","suka membeli-belah"],
    ["Baju itu diperbuat ___ kain sutera.","daripada","dari","kepada","dengan"],
    ["Penjodoh bilangan yang sesuai: \"sebilah ___\"","pisau","buku","rumah","telur"],
    ["Imbuhan apitan \"ke-…-an\" + \"bersih\" menjadi…","kebersihan","pembersihan","membersihkan","bersihan"],
    ["Yang manakah kata majmuk?","kapal terbang","berlari-lari","cantik","membaca"],
    ["Simpulan bahasa \"kaki bangku\" bermaksud…","tidak pandai bermain bola","kaki yang panjang","suka duduk","kaki kerusi"],
    ["Yang manakah ayat pasif?","Buku itu dibaca oleh Ali.","Ali membaca buku itu.","Ali suka membaca.","Ali sedang membaca."],
    ["Perkataan seerti dengan \"pintar\" ialah…","cerdik","bodoh","lambat","malas"],
    ["Ahmad sedang ___ bola di padang.","menendang","membaca","menulis","memasak"],
    ["Penjodoh bilangan yang sesuai: \"sebentuk ___\"","cincin","kereta","lembu","surat"]
  ]}
],
bi: [
  { t: "Campuran (asas)", q: [
    ["The past tense of \"eat\" is…","ate","eated","eaten","eating"],
    ["Good, better, ___.","best","goodest","more good","bestest"],
    ["Ali and Abu ___ good friends.","are","is","am","was"],
    ["Siti is kind. ___ helps her mother.","She","He","It","They"],
    ["I like tea, ___ I don't like coffee.","but","and","or","so"],
    ["The past tense of \"buy\" is…","bought","buyed","brought","buys"],
    ["One mouse, two ___.","mice","mouses","mousies","mices"],
    ["Yesterday, we ___ to the zoo.","went","go","goes","going"],
    ["Which word is an adjective?","beautiful","run","quickly","table"],
    ["How ___ apples do you have?","many","much","long","old"]
  ]}
],
math: [
  { t: "Nombor dan Operasi", q: [], g: [() => MK.add(50000), () => MK.sub(99999),
      () => { const a = MK.r(11, 99), b = MK.r(2, 9); return MK.q(`${a} × ${b} = ?`, a * b, [b, 10, 1, a]); },
      () => { const a = MK.r(2, 9), b = MK.r(11, 99); return MK.q(`${MK.fmt(a * b)} ÷ ${a} = ?`, b, [1, 2, 10]); },
      () => { const d = MK.pick([2, 4, 5, 10]), n = d * MK.r(2, 10); return MK.q(`1/${d} daripada ${n} = ?`, n / d, [1, 2, d]); }] },
  { t: "Ukuran, Masa dan Wang", q: [
    ["1 liter = ___ mililiter","1000","100","10","500"],
    ["Segi empat sama mempunyai ___ sudut tegak.","4","3","2","0"],
    ["1 tahun = ___ bulan","12","10","52","365"]
  ]}
],
sains: [
  { t: "Campuran (asas)", q: [
    ["Unit SI bagi panjang ialah…","meter","kilogram","saat","liter"],
    ["Proses tumbuhan membuat makanan dipanggil…","fotosintesis","respirasi","pencernaan","penyejatan"],
    ["Gas yang diperlukan untuk bernafas ialah…","oksigen","karbon dioksida","nitrogen","asap"],
    ["Kura-kura melindungi diri dengan…","cengkerang yang keras","duri tajam","warna terang","lari laju"],
    ["Planet yang paling hampir dengan Matahari ialah…","Utarid","Bumi","Marikh","Neptun"],
    ["Berapakah bilangan planet dalam Sistem Suria?","8","9","7","10"],
    ["Alat untuk mengukur isi padu cecair ialah…","silinder penyukat","pembaris","jam randik","termometer"],
    ["Air membeku pada suhu…","0°C","100°C","50°C","37°C"],
    ["Air mendidih pada suhu…","100°C","0°C","37°C","200°C"],
    ["Yang manakah boleh dikitar semula?","tin aluminium","sisa makanan","tisu kotor","lampin pakai buang"]
  ]}
],
sejarah: [
  { t: "Campuran (asas)", q: [
    ["Sejarah ialah kajian tentang peristiwa…","masa lalu","masa hadapan","dalam mimpi","cerita rekaan"],
    ["Pengasas Kesultanan Melayu Melaka ialah…","Parameswara","Hang Tuah","Tun Perak","Sultan Mahmud"],
    ["Melaka diasaskan sekitar tahun…","1400","1511","1957","1824"],
    ["Nama Melaka dikatakan berasal daripada nama…","sebatang pokok","seekor kancil","sebuah sungai","seorang raja"],
    ["Rangka manusia \"Perak Man\" ditemui di…","Gua Gunung Runtuh","Gua Niah","Gua Tempurung","Batu Caves"],
    ["Manusia zaman prasejarah menggunakan alatan yang diperbuat daripada…","batu","plastik","besi keluli","kaca"],
    ["Bendahara Melaka yang terkenal kerana kebijaksanaannya ialah…","Tun Perak","Hang Jebat","Parameswara","Tun Teja"],
    ["Laksamana Melaka yang terkenal ialah…","Hang Tuah","Tun Perak","Mat Kilau","Rentap"],
    ["Melaka jatuh ke tangan Portugis pada tahun…","1511","1400","1957","1641"],
    ["Contoh sumber sejarah bertulis ialah…","dokumen dan buku lama","cerita dongeng","mimpi","lukisan kartun"]
  ]}
]
};
