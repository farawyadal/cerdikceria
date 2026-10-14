/* =========================================================
   YEAR 4 — Cerdik Ceria · DLP (English translation)
   Same chapters, order and generator logic as soalan/tahun4.js
   (generators run with the same seed so numbers match).
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d === 1) return String(n); if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`; return `${n}/${d}`; }
const dec = (x, p = 3) => String(+x.toFixed(p));
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
const PLACE = ["ones", "tens", "hundreds", "thousands", "ten thousands"];
function grid(x, y, mark, n = 6) {
  const K = v => v + "️⃣", rows = [];
  for (let j = n; j >= 1; j--) { let s = K(j); for (let i = 1; i <= n; i++) s += (i === x && j === y) ? mark : "⬜"; rows.push(s); }
  rows.push(K(0) + Array.from({ length: n }, (_, i) => K(i + 1)).join(""));
  return rows.join("\n");
}
const AP = { pagi: "in the morning", petang: "in the afternoon", malam: "at night" };
const hm = (h, m) => `${h} hour${h === 1 ? "" : "s"} ${m} minutes`;
const u = n => `${n} unit${n === 1 ? "" : "s"}`;

SOALAN["dlp4"] = {
math: [
  { t: "Whole Numbers and Basic Operations",
    q: [
      ["The biggest five-digit number is…", "99 999", "10 000", "90 000", "100 000"],
      ["Which one is an odd number?", "357", "246", "1 000", "88"],
      ["Which one is an even number?", "4 528", "4 527", "1 111", "999"],
      ["Even numbers end with the digit…", "0, 2, 4, 6 or 8", "1, 3, 5, 7 or 9", "5 only", "9 only"]
    ],
    g: [
      () => { let n, s, p, d; do { n = r(10001, 99999); s = String(n); p = r(0, 4); d = +s[4 - p]; } while (!d || s.split("").filter(x => +x === d).length > 1); const v = d * 10 ** p; return from(`The value of digit ${d} in ${fmt(n)} is…`, fmt(v), [d, d * 10, d * 100, d * 1000, d * 10000].filter(x => x !== v).map(fmt), `Digit ${d} is in the ${PLACE[p]} place.`); },
      () => { const n = r(10001, 94999); const ans = Math.round(n / 10000) * 10000; return q(`Round off ${fmt(n)} to the nearest ten thousand.`, ans, [10000, 1000]); },
      () => { const n = r(1001, 99499); const ans = Math.round(n / 1000) * 1000; return q(`Round off ${fmt(n)} to the nearest thousand.`, ans, [1000, 100, 10000]); },
      () => { const a = r(10000, 70000), b = r(1000, 99999 - a); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const a = r(20000, 99999), b = r(1000, a - 1); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const b = r(11, 99), a = r(100, Math.floor(99999 / b)); return q(`${fmt(a)} × ${b} = ?`, a * b, [a, b, 10, 100]); },
      () => { const b = r(2, 99), c = r(100, Math.floor(99999 / b)); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 10, b]); },
      () => { const a = r(1000, 50000), b = r(100, 40000); return q(`${fmt(a)} + ___ = ${fmt(a + b)}`, b, [1, 10, 100, 1000], false, "Subtract to find the unknown number."); },
      () => { const a = r(1000, 9000), b = r(2, 9), c = r(100, 900); return q(`${fmt(a)} + ${b} × ${c} = ?`, a + b * c, [c, b, 10], false, "Multiply first, then add."); },
      () => { const k = r(12, 60), n = r(120, 900); return q(`🥚|A farm produces ${n} eggs a day. How many eggs are produced in ${k} days?`, n * k, [n, k, 100]); }
    ] },
  { t: "Fractions, Decimals and Percentages",
    q: [
      ["Which one is a mixed number?", "2 1/3", "7/3", "1/3", "3/3"],
      ["0.25 as a fraction in its simplest form is…", "1/4", "25/10", "2/5", "1/25"],
      ["1/2 as a percentage is…", "50%", "12%", "20%", "2%"]
    ],
    g: [
      () => { const d = pick([2, 3, 4, 5, 6, 8]), w = r(1, 4), n = r(1, d - 1); const im = w * d + n; return from(`${im}/${d} as a mixed number is…`, frac(im, d), [frac(im + d, d), `${n} ${w}/${d}`, frac(im - 1, d), `${w} ${d}/${im}`].filter(x => !/ 0\//.test(x))); },
      () => { const d = pick([2, 3, 4, 5, 6, 8]), w = r(1, 4), n = r(1, d - 1); const right = `${w * d + n}/${d}`; return from(`${w} ${n}/${d} as an improper fraction is…`, right, [`${w * n + d}/${d}`, `${w + n}/${d}`, `${w * d}/${d}`, `${w * d + n}/${d + 1}`, `${w * d + n + 1}/${d}`, `${w * d - n}/${d}`]); },
      () => { const [d1, d2] = pick([[2, 4], [3, 6], [4, 8], [2, 6], [5, 10], [3, 9]]); const a = r(1, d1 - 1), b = r(1, d2 - 1); const right = frac(a * d2 / d1 + b, d2); return from(`${a}/${d1} + ${b}/${d2} = ?`, right, [frac(a + b, d1 + d2), frac(a + b, d2), frac(a * d2 / d1 + b + 1, d2), frac(a + b, d1)]); },
      () => { const d = pick([3, 4, 5, 6, 8, 10]), a = r(1, d - 1), n = d * r(3, 25); return q(`${a}/${d} of ${fmt(n)} = ?`, n / d * a, [1, n / d, a, 2]); },
      () => { const a = r(1001, 9999) / 1000, b = r(1001, 9999) / 1000; return q(`${dec(a)} + ${dec(b)} = ?`, +(a + b).toFixed(3), [0.1, 1, 0.01, 0.001], true, "", x => dec(x)); },
      () => { const a = r(5001, 9999) / 1000, b = r(1001, 4999) / 1000; return q(`${dec(a)} − ${dec(b)} = ?`, +(a - b).toFixed(3), [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const a = r(101, 999) / 100, b = r(2, 9); return q(`${dec(a, 2)} × ${b} = ?`, +(a * b).toFixed(2), [0.1, 1, 0.5], true, "", x => dec(x, 2)); },
      () => { const b = r(2, 9), c = r(101, 999) / 100; return q(`${dec(b * c, 2)} ÷ ${b} = ?`, c, [0.1, 1, 0.01], true, "", x => dec(x, 2)); },
      () => { const p = pick([10, 20, 25, 50, 75]), n = r(2, 40) * 20; return q(`${p}% of ${fmt(n)} = ?`, n * p / 100, [5, 10, 20, n / 10]); },
      () => { const pr = pick([[1, 4], [3, 4], [1, 5], [2, 5], [3, 10], [7, 10], [9, 20], [3, 25], [1, 2]]); return q(`${pr[0]}/${pr[1]} as a percentage is…`, pr[0] / pr[1] * 100, [5, 10, 15], false, "", x => x + "%"); }
    ] },
  { t: "Money",
    q: [
      ["An example of a payment instrument is a…", "debit card", "identity card", "driving licence", "report card"],
      ["Cashless payment using a phone is called an…", "e-wallet", "paper cheque", "coin", "account book"],
      ["Making a budget means…", "planning spending based on income", "spending without limits", "borrowing money", "throwing money away"],
      ["The currency of Singapore is the…", "Singapore Dollar", "Ringgit", "Rupiah", "Baht"],
      ["The currency of Japan is the…", "Yen", "Won", "Yuan", "Rupee"],
      ["The currency of Saudi Arabia is the…", "Riyal", "Dinar", "Dirham", "Lira"]
    ],
    g: [
      () => { const a = r(1000, 60000), b = r(500, 99999 - a); return q(`💵|RM${fmt(a)} + RM${fmt(b)} = ?`, a + b, [1, 10, 100], false, "", rm); },
      () => { const a = r(10000, 99999), b = r(1000, a - 1); return q(`🏦|Mr Lim has savings of RM${fmt(a)}. He withdraws RM${fmt(b)}. How much is left?`, a - b, [10, 100, 1000], false, "", rm); },
      () => { const h = r(120, 2500), n = r(3, 30); return q(`💻|A tablet costs RM${fmt(h)}. The school buys ${n} tablets. What is the total price?`, h * n, [h, 100, 10], false, "", rm); },
      () => { const n = r(3, 12), e = r(150, 5000); return q(`🎁|RM${fmt(n * e)} is shared equally among ${n} people. How much does each person get?`, e, [1, 10, 100], false, "", rm); },
      () => { const g = r(800, 3000), b = r(200, g - 100); return q(`📒|Aiman's monthly income is RM${fmt(g)}. His expenses are RM${fmt(b)}. How much money can he save?`, g - b, [10, 100, 50], false, "", rm); }
    ] },
  { t: "Time",
    q: [
      ["1 millennium = ___ centuries", "10", "100", "1000", "12"],
      ["1 century = ___ decades", "10", "100", "12", "5"],
      ["1 year = ___ months", "12", "10", "52", "365"],
      ["1 week = ___ days", "7", "5", "10", "12"],
      ["0000 hours in the 24-hour system is…", "12:00 midnight", "12:00 noon", "10:00 in the morning", "1:00 in the morning"],
      ["1200 hours in the 24-hour system is…", "12:00 noon", "12:00 midnight", "2:00 in the afternoon", "10:00 in the morning"]
    ],
    g: [
      () => { const H = r(1, 11), M = pick([0, 5, 15, 20, 30, 40, 45, 55]); const s = String(H).padStart(2, "0") + String(M).padStart(2, "0"); const right = `${H}:${String(M).padStart(2, "0")} ${AP.pagi}`; return from(`🕰️|${s} hours in the 12-hour system is…`, right, [`${H}:${String(M).padStart(2, "0")} ${AP.petang}`, `${H + 1}:${String(M).padStart(2, "0")} ${AP.pagi}`, `${H}:${String((M + 30) % 60).padStart(2, "0")} ${AP.pagi}`, `${H}:${String(M).padStart(2, "0")} ${AP.malam}`]); },
      () => { const H = r(13, 23), M = pick([0, 10, 15, 30, 45, 50]); const ap = H < 19 ? AP.petang : AP.malam; const right = `${H - 12}:${String(M).padStart(2, "0")} ${ap}`; return from(`🕰️|${H}${String(M).padStart(2, "0")} hours in the 12-hour system is…`, right, [`${H - 12}:${String(M).padStart(2, "0")} ${AP.pagi}`, `${H - 11}:${String(M).padStart(2, "0")} ${ap}`, `${(H - 13) || 12}:${String(M).padStart(2, "0")} ${ap}`, `${H - 12}:${String((M + 30) % 60).padStart(2, "0")} ${ap}`]); },
      () => { const s = r(6, 14), sm = pick([0, 15, 30, 45]), d = r(1, 5), dm = pick([15, 30, 45]); let em = sm + dm, eh = s + d + Math.floor(em / 60); em %= 60; const f = (h, m) => String(h).padStart(2, "0") + String(m).padStart(2, "0"); const right = hm(d, dm); return from(`🚌|A bus leaves at ${f(s, sm)} hours and arrives at ${f(eh, em)} hours. How long is the journey?`, right, [hm(d + 1, dm), hm(d, (dm + 15) % 60), hm(d - 1 || d + 2, dm), `${d} hour${d === 1 ? "" : "s"}`]); },
      () => { const a = r(2, 9), b = r(1, 9); return q(`${a} centuries ${b} decade${b === 1 ? "" : "s"} = ___ years`, a * 100 + b * 10, [10, 100, 90]); },
      () => { const w = r(2, 9), d = r(1, 6); return q(`${w} weeks ${d} day${d === 1 ? "" : "s"} = ___ days`, w * 7 + d, [7, 1, 10]); },
      () => { const y = r(2, 9), m = r(1, 11); return q(`${y} years ${m} month${m === 1 ? "" : "s"} = ___ months`, y * 12 + m, [12, 1, 10]); }
    ] },
  { t: "Length, Mass and Volume of Liquid",
    q: [
      ["1 cm = ___ mm", "10", "100", "1000", "1"],
      ["1 km = ___ m", "1000", "100", "10", "10 000"],
      ["The distance between two towns is best measured in…", "kilometres (km)", "millimetres (mm)", "grams (g)", "millilitres (ml)"],
      ["The thickness of a book is best measured in…", "millimetres (mm)", "kilometres (km)", "kilograms (kg)", "litres (l)"]
    ],
    g: [
      () => { const c = r(2, 99); return q(`${c} cm = ___ mm`, c * 10, [10, 100, 1]); },
      () => { const k = r(1, 9), m = r(1, 999); return q(`${k} km ${m} m = ___ m`, k * 1000 + m, [1000, 100, 10]); },
      () => { const m = r(1001, 9999); return q(`${fmt(m)} m = ___ km`, m / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const g = r(1001, 9999); return q(`${fmt(g)} g = ___ kg`, g / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const l = r(11, 99) / 10; return q(`${dec(l, 1)} l = ___ ml`, Math.round(l * 1000), [100, 1000, 10], false, "", fmt); },
      () => { const a = r(1, 5) * 1000 + r(1, 999), b = r(100, 900); return q(`🛣️|Ali walks ${fmt(a)} m in the morning and ${b} m in the evening. What is the total distance in metres?`, a + b, [10, 100, 1000], false, "", x => fmt(x) + " m"); },
      () => { const l = r(2, 9), c = r(3, 8); return q(`🥤|${l} litres of water are poured equally into ${c * 2} bottles. What is the volume of water in each bottle (ml)?`, Math.round(l * 1000 / (c * 2)), [10, 50, 100], false, "", x => fmt(x) + " ml"); }
    ] },
  { t: "Space",
    q: [
      ["An angle less than 90° is called an ___ angle.", "acute", "right", "obtuse", "straight"],
      ["An angle more than 90° but less than 180° is called an ___ angle.", "obtuse", "acute", "right", "reflex"],
      ["An angle of 90° is called a ___ angle.", "right", "acute", "obtuse", "straight"],
      ["Two lines that never meet even when extended are ___ lines.", "parallel", "perpendicular", "intersecting", "curved"],
      ["Two lines that cross to form a right angle are ___ lines.", "perpendicular", "parallel", "curved", "dotted"],
      ["A square has ___ right angles.", "4", "2", "3", "0"],
      ["Railway tracks are an example of ___ lines.", "parallel", "perpendicular", "curved", "intersecting"]
    ],
    g: [
      () => { const s = pick([5, 6, 8]), l = r(3, 15); const nm = { 5: "pentagon", 6: "hexagon", 8: "octagon" }[s]; return q(`The perimeter of a regular ${nm} with ${l} cm sides is…`, s * l, [l, s, 2], false, "Perimeter = number of sides × length of side", x => x + " cm"); },
      () => { const p = r(4, 30), l = r(2, 20); return q(`The area of a ${p} cm × ${l} cm rectangle is…`, p * l, [p, l, 10], false, "Area = length × width", x => x + " cm²"); },
      () => { const s = r(3, 15); return q(`The area of a square with ${s} cm sides is…`, s * s, [s, 2 * s, 4], false, "", x => x + " cm²"); },
      () => { const t = r(2, 15) * 2, h = r(3, 20); return q(`The area of a triangle with a base of ${t} cm and a height of ${h} cm is…`, t * h / 2, [t * h / 2, t, h], false, "Area = ½ × base × height", x => x + " cm²"); },
      () => { const s = r(2, 9); return q(`🧊|The volume of a cube with ${s} cm sides is…`, s ** 3, [s * s, s, 3 * s], false, "Volume = side × side × side", x => x + " cm³"); },
      () => { const a = r(2, 12), b = r(2, 10), c = r(2, 10); return q(`📦|The volume of a ${a} cm × ${b} cm × ${c} cm cuboid is…`, a * b * c, [a * b, b * c, 10], false, "Volume = length × width × height", x => x + " cm³"); },
      () => { const a = pick([20, 35, 45, 60, 80, 100, 120, 150, 170, 90]); const right = a < 90 ? "acute" : a === 90 ? "right" : "obtuse"; return from(`What type of angle is ${a}°?`, right, ["acute", "right", "obtuse", "straight"]); }
    ] },
  { t: "Coordinates, Ratio and Proportion",
    q: [
      ["The ratio 1 : 100 means…", "1 part compared to 100 parts", "100 parts compared to 1", "1 plus 100", "1 times 100"],
      ["The unitary method means finding the value of…", "one unit first", "all units at once", "two units", "no units"]
    ],
    g: [
      () => { const x = r(1, 6), y = r(1, 6), m = pick(["🏠", "🌳", "⭐", "🚩"]); const right = `(${x}, ${y})`; return from(`${grid(x, y, m)}|What are the coordinates of ${m}?`, right, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${x - 1 || 3}, ${y})`, `(${x}, ${y - 1 || 4})`]); },
      () => { const x1 = r(1, 3), y1 = r(1, 3), dx = r(1, 3), dy = r(1, 3); const right = `${u(dx)} right, ${u(dy)} up`; return from(`🗺️|From (${x1}, ${y1}) to (${x1 + dx}, ${y1 + dy}), how do we move?`, right, [`${u(dy)} right, ${u(dx)} up`, `${u(dx)} left, ${u(dy)} up`, `${u(dx)} right, ${u(dy)} down`, `${u(dx + 1)} right, ${u(dy)} up`]); },
      () => { const n = r(2, 8), h = r(2, 12), m = r(n + 1, 15); return q(`📗|${n} books cost RM${n * h}. What is the price of ${m} books?`, m * h, [h, n, 2], false, "Find the price of one book first.", rm); },
      () => { const k = pick([10, 100, 1000]), n = r(2, 9); return from(`1 cm on a map represents ${fmt(k)} cm in real life. What is the ratio?`, `1 : ${fmt(k)}`, [`${fmt(k)} : 1`, `1 : ${fmt(k * 10)}`, `1 : ${fmt(k / 10 || 1)}`, `${n} : ${fmt(k)}`]); },
      () => { const per = r(3, 12), n = r(4, 15); return q(`🧁|A recipe needs ${per} eggs for 1 tray of cake. How many eggs are needed for ${n} trays?`, per * n, [per, n, 2]); }
    ] },
  { t: "Data Handling",
    q: [
      ["Data shown using pictures is called a…", "pictograph", "bar chart", "pie chart", "table"],
      ["The vertical axis of a bar chart usually shows the…", "frequency or number", "names only", "colours", "birth dates"]
    ],
    g: [
      () => {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].slice(0, 4); const c = shuffle([3, 4, 5, 6, 7, 8]).slice(0, 4), per = pick([5, 10, 20]);
        const chart = days.map((d, i) => d.slice(0, 3) + " " + "📗".repeat(c[i])).join("\n");
        const t = r(0, 2), k = r(0, 3);
        if (t === 0) return q(`${chart}|Number of books borrowed from the library. Each 📗 represents ${per} books. How many books were borrowed on ${days[k]}?`, c[k] * per, [per, 5, 10]);
        if (t === 1) { const tot = c.reduce((a, b) => a + b, 0) * per; return q(`${chart}|Each 📗 represents ${per} books. How many books were borrowed altogether?`, tot, [per, 10, 20]); }
        const m = c.indexOf(Math.max(...c)); return [`${chart}|On which day were the most books borrowed?`, days[m], ...days.filter((_, i) => i !== m), ""];
      }
    ] }
],

sains: [
  { t: "Scientific Skills", q: [
    ["The variable that is changed in an experiment is the ___ variable.", "manipulated", "responding", "constant", "fixed"],
    ["The variable that is observed and measured is the ___ variable.", "responding", "manipulated", "constant", "free"],
    ["The variable that is kept the same is the ___ variable.", "constant", "manipulated", "responding", "random"],
    ["The skill of making an early conclusion from observation is…", "making inferences", "predicting", "measuring", "classifying"],
    ["Defining something based on what is done and observed is called…", "defining operationally", "classifying", "predicting", "communicating"],
    ["Data in a table can be presented as a…", "graph", "poem", "song", "free drawing"],
    ["Chemicals in the lab must be handled…", "carefully, following the teacher's instructions", "with bare hands", "in a hurry", "playfully"]
  ]},
  { t: "Humans", q: [
    ["The main organ for breathing in humans is the…", "lungs", "heart", "kidneys", "stomach"],
    ["The path of air when we breathe in: nose → trachea → …", "lungs", "stomach", "heart", "kidneys"],
    ["When we breathe in, the chest will…", "rise and expand", "fall and contract", "not move", "become hot"],
    ["Exhaled air contains more…", "carbon dioxide", "oxygen", "nitrogen only", "smoke"],
    ["Excretion is the process of removing…", "waste products from the body", "food", "blood", "bones"],
    ["Sweat is removed through the…", "skin", "lungs", "kidneys", "mouth"],
    ["Urine is produced by the…", "kidneys", "lungs", "skin", "heart"],
    ["Carbon dioxide is removed through the…", "lungs", "skin", "kidneys", "intestines"],
    ["Pulling your hand away when touching something hot is an example of…", "a response to a stimulus", "excretion", "breathing", "reproduction"],
    ["The organ that controls the body's responses is the…", "brain", "stomach", "lungs", "kidneys"],
    ["Smoking can damage the…", "lungs", "nails", "hair", "milk teeth only"],
    ["Breathing rate increases after…", "exercising", "sleeping", "sitting still", "reading"]
  ]},
  { t: "Animals", q: [
    ["🐟|Fish breathe using…", "gills", "lungs", "spiracles", "dry skin"],
    ["🦗|Grasshoppers breathe through…", "spiracles", "gills", "lungs", "the nose"],
    ["🪱|Earthworms breathe through their…", "moist skin", "gills", "spiracles", "lungs"],
    ["🐋|Whales breathe using…", "lungs", "gills", "spiracles", "skin"],
    ["🐸|Adult frogs breathe through…", "lungs and moist skin", "gills only", "spiracles", "fins"],
    ["Tadpoles breathe using…", "gills", "lungs", "spiracles", "dry skin"],
    ["Animals remove waste products through the process of…", "excretion", "breathing", "reproduction", "photosynthesis"],
    ["An example of an animal that gives birth is…", "🐄", "🐔", "🐢", "🐍"],
    ["An example of an animal that lays eggs is…", "🐊", "🐐", "🐱", "🐋"],
    ["🐢|Turtles breathe using…", "lungs", "gills", "spiracles", "skin only"]
  ]},
  { t: "Plants", q: [
    ["Plants make food through the process of…", "photosynthesis", "respiration", "excretion", "digestion"],
    ["Photosynthesis needs sunlight, water and…", "carbon dioxide", "oxygen", "nitrogen", "smoke"],
    ["Photosynthesis mainly takes place in the…", "leaves", "roots", "flowers", "seeds"],
    ["The products of photosynthesis are food (starch) and…", "oxygen", "carbon dioxide", "salt water", "smoke"],
    ["Plants grow towards light. This is a response to…", "light", "gravity", "touch", "sound"],
    ["Roots grow downwards. This is a response to…", "gravity", "light", "touch", "wind"],
    ["Roots grow towards a water source. This is a response to…", "water", "light", "sound", "wind"],
    ["The leaves of the touch-me-not (semalu) plant close when they are…", "touched", "watered", "in the light", "fertilised"],
    ["A long bean plant climbs a support. This is a response to…", "touch", "sound", "gravity only", "wind"],
    ["Plants remove water vapour through the process of…", "transpiration", "photosynthesis", "reproduction", "pollination"],
    ["Shedding leaves is also a way for plants to…", "remove waste products", "make food", "breathe", "reproduce"]
  ]},
  { t: "Properties of Light", q: [
    ["Light travels in a ___ line.", "straight", "bent", "round", "zig-zag"],
    ["🪞|A mirror reflects light. This process is called…", "reflection of light", "refraction of light", "absorption", "evaporation"],
    ["A straw in a glass of water looks bent because of…", "refraction of light", "reflection of light", "shadows", "an eclipse"],
    ["A periscope uses the principle of…", "reflection of light", "refraction of light", "magnets", "electricity"],
    ["Light bends when it travels from air into…", "water", "air", "a vacuum", "a mirror"],
    ["Shadows form because light…", "travels straight and is blocked", "bends", "is reflected", "is coloured"],
    ["The surface that reflects light best is a…", "mirror", "black cloth", "rough wood", "sandpaper"],
    ["🔍|A magnifying glass makes images bigger through…", "refraction of light", "reflection of sound", "magnets", "electricity"],
    ["A car's side mirror helps the driver see behind through…", "reflection of light", "refraction", "sound", "magnets"]
  ]},
  { t: "Sound", q: [
    ["Sound is produced by objects that…", "vibrate", "are still", "are cold", "are coloured"],
    ["🥁|When a drum is hit, the drum skin will…", "vibrate", "break", "melt", "glow"],
    ["Sound cannot travel through a…", "vacuum (empty space)", "air", "water", "wood"],
    ["Sound that is reflected back is called an…", "echo", "whisper", "vibration", "rhythm"],
    ["Sound travels fastest through…", "solids", "air", "a vacuum", "gases"],
    ["Very loud noise can cause…", "hearing damage", "better health", "deep sleep", "long hair"],
    ["Sound becomes louder when the vibrations are…", "stronger", "weaker", "stopped", "none"],
    ["Soundproofing in a music room is made of materials that are…", "soft and absorb sound", "hard and smooth", "shiny", "thin glass"],
    ["🦇|Bats use ___ to detect objects in the dark.", "sound echoes", "light", "smell only", "magnets"]
  ]},
  { t: "Energy", q: [
    ["The main source of energy on Earth is the…", "Sun", "Moon", "battery", "lamp"],
    ["The energy of a moving object is ___ energy.", "kinetic", "potential", "chemical", "sound"],
    ["The energy stored in food is ___ energy.", "chemical", "kinetic", "sound", "light"],
    ["The energy stored in a compressed spring is ___ energy.", "potential", "kinetic", "heat", "sound"],
    ["🔦|In a torchlight, chemical energy changes into electrical energy, then into ___ energy.", "light", "sound", "kinetic", "potential"],
    ["📻|A radio changes electrical energy into ___ energy.", "sound", "chemical", "potential", "light only"],
    ["An example of a renewable energy source is…", "the Sun and wind", "petroleum", "coal", "natural gas"],
    ["An example of a non-renewable energy source is…", "petroleum", "wind", "water", "the Sun"],
    ["We need to save energy because…", "some energy sources will run out", "energy is useless", "energy is cheap", "energy is dangerous"],
    ["A solar panel changes light energy into ___ energy.", "electrical", "sound", "chemical", "kinetic"]
  ]},
  { t: "Materials", q: [
    ["An example of a natural material is…", "wood", "plastic", "glass", "nylon"],
    ["An example of a man-made material is…", "plastic", "wood", "stone", "cotton"],
    ["A material that lets all light pass through is…", "transparent", "opaque", "translucent", "shiny"],
    ["A material that does not let light pass through is…", "opaque", "transparent", "translucent", "elastic"],
    ["Greaseproof paper lets some light pass through. It is…", "translucent", "transparent", "opaque", "a conductor"],
    ["Pots are made of metal because metal is a…", "good conductor of heat", "heat insulator", "transparent material", "elastic material"],
    ["Pot handles are made of plastic because plastic is a…", "heat insulator", "heat conductor", "shiny material", "heavy material"],
    ["Rubber is suitable for making balls because rubber is…", "elastic", "transparent", "hard", "easy to break"],
    ["The 3R practice is reduce, reuse and…", "recycle", "throw away", "burn", "bury"],
    ["Used plastic bottles can be…", "recycled", "burned by the roadside", "thrown into rivers", "left everywhere"]
  ]},
  { t: "The Earth", q: [
    ["The Earth rotates on its axis from…", "west to east", "east to west", "north to south", "south to north"],
    ["The rotation of the Earth on its axis causes…", "day and night", "the rainy season", "earthquakes", "eclipses"],
    ["The Earth takes ___ to rotate once on its axis.", "24 hours", "12 hours", "7 days", "365 days"],
    ["The Earth revolves around the Sun in about…", "365¼ days", "24 hours", "30 days", "12 hours"],
    ["🌅|The Sun appears to rise in the…", "east", "west", "north", "south"],
    ["The Sun appears to set in the…", "west", "east", "north", "south"],
    ["🍎|A released object falls down because of…", "the Earth's gravitational pull", "wind", "magnets", "light"],
    ["The part of the Earth facing the Sun has…", "day", "night", "an eclipse", "winter"],
    ["The movement of the Earth around the Sun is called…", "revolution", "rotation", "an eclipse", "a phase"]
  ]},
  { t: "Machines (Levers)", q: [
    ["A lever has three parts: the fulcrum, the load and the…", "force (effort)", "wheel", "gear", "screw"],
    ["The point on which a lever turns is called the…", "fulcrum", "load", "force", "Earth's axis"],
    ["A see-saw is an example of a…", "lever", "pulley", "screw", "wedge"],
    ["✂️|A pair of scissors is an example of a…", "lever", "pulley", "gear", "inclined plane"],
    ["A wheelbarrow is an example of a…", "lever", "pulley", "screw", "wedge"],
    ["The farther the force is from the fulcrum, the load becomes…", "easier to lift", "harder to lift", "heavier", "unchanged"],
    ["A bottle opener is an example of a…", "lever", "pulley", "gear", "wedge"],
    ["A broom is used as a…", "lever", "pulley", "screw", "gear"]
  ]}
]
};
})();
