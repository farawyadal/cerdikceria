/* =========================================================
   YEAR 5 — Cerdik Ceria · DLP (English translation)
   Same chapters, order and generator logic as soalan/tahun5.js
   (generators run with the same seed so numbers match).
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) {
  const g = gcd(n, d); n /= g; d /= g;
  if (d === 1) return String(n);
  if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`;
  return `${n}/${d}`;
}
const dec = (x, p = 3) => String(+x.toFixed(p));
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
const PRIMA = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const BUKAN_PRIMA = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 22, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, 69, 77, 81, 87, 91, 93, 95];
const PLACE = ["ones", "tens", "hundreds", "thousands", "ten thousands", "hundred thousands"];
const AP = { pagi: "in the morning", "tengah hari": "in the afternoon", petang: "in the afternoon", malam: "at night" };
const pl = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;

function digitValue() {
  let n, p, d, s;
  for (let t = 0; t < 50; t++) {
    n = r(100000, 999999); s = String(n);
    p = r(0, 5); d = +s[5 - p];
    if (d && s.split("").filter(x => +x === d).length === 1) break;
  }
  const v = d * 10 ** p;
  const w = [d * 10 ** ((p + 1) % 6), d * 10 ** ((p + 5) % 6), d * 10 ** ((p + 2) % 6), d].filter(x => x !== v);
  return [`The value of digit ${d} in the number ${fmt(n)} is…`, fmt(v), ...[...new Set(w)].slice(0, 3).map(fmt), `Digit ${d} is in the ${PLACE[p]} place.`];
}

SOALAN["dlp5"] = {
math: [
  { t: "Whole Numbers and Operations",
    q: [
      ["A prime number can only be divided exactly by…", "1 and itself", "2 only", "all numbers", "10"],
      ["\"Five hundred and six thousand and twenty\" is written as…", "506 020", "560 020", "506 200", "500 620"],
      ["One million is written as…", "1 000 000", "100 000", "10 000 000", "1 000"]
    ],
    g: [
      digitValue,
      () => from("Which one is a prime number?", String(pick(PRIMA.filter(x => x > 10))), shuffle(BUKAN_PRIMA).slice(0, 6).map(String)),
      () => { const s = new Set(); while (s.size < 3) s.add(pick(PRIMA)); const np = pick(BUKAN_PRIMA.filter(x => x > 3)); return ["Which one is NOT a prime number?", String(np), ...[...s].map(String), `${np} can be divided exactly by numbers other than 1 and itself.`]; },
      () => { const n = r(100000, 999999), u = pick([1000, 10000, 100000]); const ans = Math.round(n / u) * u; const nm = { 1000: "thousand", 10000: "ten thousand", 100000: "hundred thousand" }[u]; return q(`Round off ${fmt(n)} to the nearest ${nm}.`, ans, [u, u * 2, u / 10]); },
      () => { const a = r(100, 999), b = r(11, 99); return q(`${a} × ${b} = ?`, a * b, [a, b, 10, 100]); },
      () => { const b = r(11, 99), c = r(11, 99); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 2, 10]); },
      () => { const a = r(100000, 899999), b = r(10000, 99999); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const a = r(100000, 999999), b = r(10000, a - 1); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const a = r(10, 99), b = r(10, 99), c = r(2, 9); return q(`(${a} + ${b}) × ${c} = ?`, (a + b) * c, [c, a, b, 10], false, "Solve the brackets first."); },
      () => { const c = r(2, 9), d = r(2, 20), a = r(c * d + 1, 999); return q(`${a} − ${c * d} ÷ ${c} = ?`, a - d, [c, d, 10], false, "Divide first, then subtract."); },
      () => { const per = r(12, 48), n = r(12, 30); return q(`📦|A box holds ${per} eggs. How many eggs are there in ${n} boxes?`, per * n, [per, n, 10]); }
    ] },
  { t: "Fractions, Decimals and Percentages",
    q: [
      ["0.5 is equal to…", "1/2", "1/5", "5/100", "5/1"],
      ["1/4 as a percentage is…", "25%", "14%", "40%", "4%"],
      ["0.07 as a fraction is…", "7/100", "7/10", "7/1000", "70/100"],
      ["50% is equal to…", "a half", "a quarter", "one fifth", "one tenth"],
      ["The biggest decimal number is…", "0.9", "0.89", "0.099", "0.8"]
    ],
    g: [
      () => { const d = pick([5, 6, 7, 8, 9, 10, 12]), a = r(1, d - 1), b = r(1, d - 1); const right = frac(a + b, d); const w = [frac(a + b, d * 2), frac(a + b + 1, d), frac(Math.abs(a - b) || 1, d), `${a + b}/${d * 2}`, frac(a + b - 1 || 1, d)]; return from(`${a}/${d} + ${b}/${d} = ?`, right, [...new Set(w)].filter(x => x !== right)); },
      () => { const d = pick([5, 6, 8, 9, 10, 12]), a = r(2, d - 1), b = r(1, a - 1); const right = frac(a - b, d); const w = [frac(a + b, d), frac(a - b, d * 2), frac(a - b + 1, d), `${a - b}/${d * 2}`]; return from(`${a}/${d} − ${b}/${d} = ?`, right, [...new Set(w)].filter(x => x !== right)); },
      () => { const d = pick([3, 4, 5, 6, 8]), a = r(1, d - 1), n = d * r(2, 12); return q(`${a}/${d} of ${n} = ?`, n / d * a, [1, n / d, a, 2]); },
      () => { const a = r(1000, 9999) / 1000, b = r(1000, 9999) / 1000; return q(`${dec(a)} + ${dec(b)} = ?`, +(a + b).toFixed(3), [0.1, 1, 0.01, 0.001], true, "", x => dec(x)); },
      () => { const a = r(5000, 9999) / 1000, b = r(1000, 4999) / 1000; return q(`${dec(a)} − ${dec(b)} = ?`, +(a - b).toFixed(3), [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const a = r(101, 9999) / 100, m = pick([10, 100, 1000]); return q(`${dec(a, 2)} × ${m} = ?`, +(a * m).toFixed(2), [a * m / 10, a * m * 9, 1], true, "Move the decimal point to the right.", x => dec(x, 2)); },
      () => { const a = r(1, 999), m = pick([10, 100]); return q(`${a} ÷ ${m} = ?`, +(a / m).toFixed(3), [a / m * 9, a / m / 10 * 9, 1], true, "Move the decimal point to the left.", x => dec(x)); },
      () => { const p = pick([10, 20, 25, 30, 40, 50, 60, 75]), n = r(1, 20) * 20; return q(`${p}% of ${fmt(n)} = ?`, n * p / 100, [5, 10, 20, n / 10]); },
      () => { const pr = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [4, 5], [1, 10], [3, 10], [7, 10], [9, 10], [1, 20], [7, 20]]); const v = pr[0] / pr[1] * 100; return q(`${pr[0]}/${pr[1]} as a percentage is…`, v, [5, 10, 15], false, "", x => x + "%"); },
      () => { const pr = pick([[1, 2], [1, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 8], [3, 8], [7, 10], [13, 20], [9, 25]]); return q(`${pr[0]}/${pr[1]} as a decimal is…`, pr[0] / pr[1], [0.1, 0.05, 0.01, 0.2], true, "", x => dec(x)); }
    ] },
  { t: "Money",
    q: [
      ["Profit means…", "the selling price is higher than the cost price", "the selling price is lower than the cost price", "the selling price equals the cost price", "no sales"],
      ["Money saved in a bank can earn…", "interest or dividends", "tax", "a summons", "a fine"],
      ["A discount is…", "a price cut", "a price increase", "sales tax", "the cost price"],
      ["The document we get after making a payment is a…", "receipt", "invoice", "price list", "discount voucher"]
    ],
    g: [
      () => { const k = r(20, 400), u = r(5, 80); return q(`🏷️|The cost price of a bag is RM${k}. The seller makes a profit of RM${u}. What is its selling price?`, k + u, [1, 5, 10, u], false, "Selling price = cost price + profit", rm); },
      () => { const j = r(50, 400), k = j + r(5, 60); return q(`📉|Cost price RM${k}, selling price RM${j}. What is the loss?`, k - j, [1, 5, 10], false, "Loss = cost price − selling price", rm); },
      () => { const h = r(4, 40) * 10, p = pick([10, 20, 25, 50]); return q(`🛍️|The original price of a pair of shoes is RM${h}. There is a ${p}% discount. What is the price after the discount?`, h - h * p / 100, [h * p / 100, 10, 5], false, "", rm); },
      () => { const a = r(1, 30) + r(0, 9) / 10, b = r(1, 30) + r(0, 9) / 10, c = r(1, 20); const t = +(a + b + c).toFixed(2); return q(`🧾|Shop bill: RM${a.toFixed(2)}, RM${b.toFixed(2)} and RM${c.toFixed(2)}. What is the total?`, t, [1, 0.1, 10, 0.5], true, "", rm); },
      () => { const s = r(2, 20) * 10, n = r(3, 12); return q(`🐷|Aiman saves RM${s} a month. How much has he saved after ${n} months?`, s * n, [s, 10, n * 10], false, "", rm); },
      () => { const bayar = pick([50, 100]), h = +(r(10, bayar * 10 - 10) / 10).toFixed(2); return q(`💵|Siti pays RM${bayar} for an item that costs RM${h.toFixed(2)}. How much change does she get?`, +(bayar - h).toFixed(2), [1, 0.1, 10], true, "", rm); }
    ] },
  { t: "Time",
    q: [
      ["1 century = ___ years", "100", "10", "1000", "50"],
      ["1 decade = ___ years", "10", "100", "5", "12"],
      ["1 millennium = ___ years", "1000", "100", "10", "10 000"],
      ["A leap year has ___ days.", "366", "365", "364", "360"],
      ["1500 hours in the 12-hour system is…", "3:00 in the afternoon", "3:00 in the morning", "5:00 in the afternoon", "1:00 in the afternoon"],
      ["9:45 at night in the 24-hour system is…", "2145", "0945", "1945", "2045"]
    ],
    g: [
      () => { const h = r(2, 9), m = r(1, 59); return q(`${h} hours ${pl(m, "minute")} = ___ minutes`, h * 60 + m, [60, 1, 10, 40]); },
      () => { const d = r(2, 9), h = r(1, 23); return q(`${d} days ${pl(h, "hour")} = ___ hours`, d * 24 + h, [24, 1, 10]); },
      () => { const y = r(2, 9), m = r(1, 11); return q(`${y} years ${pl(m, "month")} = ___ months`, y * 12 + m, [12, 1, 10]); },
      () => { const c = r(2, 9), y = r(1, 9) * 10; return q(`${c} centuries ${y} years = ___ years`, c * 100 + y, [10, 100, 90]); },
      () => { const h = r(6, 11), m = pick([0, 15, 30, 45]), dh = r(1, 3), dm = pick([15, 30, 45]); let em = m + dm, eh = h + dh + Math.floor(em / 60); em %= 60; const t = (H, M) => `${H > 12 ? H - 12 : H}:${String(M).padStart(2, "0")} ${H < 12 ? AP.pagi : H === 12 ? AP["tengah hari"] : AP.petang}`; const right = t(eh, em); const ws = [t(eh, (em + 30) % 60), t(eh + 1, em), t(eh - 1 < 1 ? eh + 2 : eh - 1, em), t(eh, (em + 15) % 60)].filter(x => x !== right); return from(`⏰|A class starts at ${t(h, m)} and takes ${pl(dh, "hour")} ${dm} minutes. When does the class end?`, right, [...new Set(ws)]); },
      () => { const H = r(13, 23), M = pick([0, 10, 15, 20, 30, 40, 45, 50]); const s = String(H) + String(M).padStart(2, "0"); const t = (h, mm, ap) => `${h}:${String(mm).padStart(2, "0")} ${AP[ap]}`; const right = t(H - 12, M, H < 19 ? "petang" : "malam"); const ap = H < 19 ? "petang" : "malam", h12 = H - 12; const ws = [t(h12, M, "pagi"), t(h12 + 1, M, ap), t(h12 - 1 || 12, M, ap), t(h12, (M + 30) % 60, ap)].filter(x => x !== right); return from(`🕰️|${s} hours in the 12-hour system is…`, right, [...new Set(ws)]); }
    ] },
  { t: "Length, Mass and Volume of Liquid",
    q: [
      ["1 km = ___ m", "1000", "100", "10", "10 000"],
      ["1 m = ___ cm", "100", "10", "1000", "60"],
      ["1 cm = ___ mm", "10", "100", "1000", "1"],
      ["1 kg = ___ g", "1000", "100", "10", "500"],
      ["1 litre = ___ ml", "1000", "100", "10", "500"],
      ["A suitable tool to measure mass is a…", "weighing scale", "ruler", "measuring cylinder", "stopwatch"]
    ],
    g: [
      () => { const x = r(11, 99) / 10; return q(`${dec(x, 1)} km = ___ m`, Math.round(x * 1000), [100, 10, 900], false, "", fmt); },
      () => { const x = r(101, 999) / 100; return q(`${dec(x, 2)} m = ___ cm`, Math.round(x * 100), [10, 90, 1], false, "", fmt); },
      () => { const k = r(1, 9), g = r(1, 999); return q(`${k} kg ${g} g = ___ g`, k * 1000 + g, [1000, 100, 10, 900], false, "", fmt); },
      () => { const g = r(1001, 9999); return q(`${fmt(g)} g = ___ kg`, g / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const l = r(1, 9), m = r(1, 999); return q(`${pl(l, "litre")} ${m} ml = ___ ml`, l * 1000 + m, [1000, 100, 10, 900], false, "", fmt); },
      () => { const ml = r(1001, 9999); return q(`${fmt(ml)} ml = ___ litres`, ml / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const a = r(120, 900), b = r(50, 400); return q(`🧃|${fmt(a)} ml of orange juice and ${fmt(b)} ml of apple juice are mixed. What is the total volume?`, a + b, [10, 100, 50], false, "", x => fmt(x) + " ml"); },
      () => { const t = r(21, 60) / 10, n = r(3, 8); return q(`🎀|A ${dec(t, 1)} m ribbon is cut into ${n} equal parts. What is the length of each part (cm)?`, Math.round(t * 100 / n * 100) / 100, [1, 10, 5], true, "", x => dec(x, 2) + " cm"); }
    ] },
  { t: "Space",
    q: [
      ["A polygon with 5 sides is a…", "pentagon", "hexagon", "octagon", "quadrilateral"],
      ["A polygon with 6 sides is a…", "hexagon", "pentagon", "octagon", "heptagon"],
      ["A polygon with 8 sides is an…", "octagon", "hexagon", "pentagon", "nonagon"],
      ["A right angle is equal to…", "90°", "45°", "180°", "360°"],
      ["The sum of the angles in a triangle is…", "180°", "90°", "360°", "270°"],
      ["The volume of a cube with 3 cm sides is…", "27 cm³", "9 cm³", "18 cm³", "12 cm³"],
      ["🔷|A shape with 4 equal sides but no right angles is a…", "rhombus", "square", "rectangle", "trapezium"]
    ],
    g: [
      () => { const p = r(4, 25), l = r(2, p - 1); return q(`The perimeter of a ${p} cm × ${l} cm rectangle is…`, 2 * (p + l), [p + l, 2, 4], false, "Perimeter = 2 × (length + width)", x => x + " cm"); },
      () => { const p = r(4, 25), l = r(2, 20); return q(`The area of a ${p} cm × ${l} cm rectangle is…`, p * l, [p, l, 2 * (p + l) - p * l || 3], false, "Area = length × width", x => x + " cm²"); },
      () => { const t = r(2, 12) * 2, h = r(3, 15); return q(`The area of a triangle with a base of ${t} cm and a height of ${h} cm is…`, t * h / 2, [t * h / 2, t, h], false, "Area = ½ × base × height", x => x + " cm²"); },
      () => { const a = r(2, 12), b = r(2, 10), c = r(2, 10); return q(`📦|The volume of a ${a} cm × ${b} cm × ${c} cm cuboid is…`, a * b * c, [a * b, b * c, 10], false, "Volume = length × width × height", x => x + " cm³"); },
      () => { const a = r(30, 90), b = r(20, 150 - a); const c = 180 - a - b; return q(`Two angles in a triangle are ${a}° and ${b}°. What is the third angle?`, c, [10, 20, 5], false, "Sum of angles in a triangle = 180°", x => x + "°"); },
      () => { const s = r(3, 20); return q(`The perimeter of a square with ${s} cm sides is…`, 4 * s, [s, 2 * s, s * s], false, "", x => x + " cm"); }
    ] },
  { t: "Coordinates, Ratio and Proportion",
    q: [
      ["The coordinates of the origin are…", "(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"],
      ["In the coordinates (4, 7), the number 4 is the distance…", "horizontally (to the right)", "vertically (upwards)", "to the left", "downwards"],
      ["The ratio 2 : 4 in its simplest form is…", "1 : 2", "2 : 1", "1 : 4", "4 : 2"]
    ],
    g: [
      () => { const x = r(1, 9), y = r(1, 9); const right = `(${x}, ${y})`; const ws = [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${x - 1}, ${y})`].filter(z => z !== right); return from(`📍|Point A is ${pl(x, "unit")} to the right and ${pl(y, "unit")} up from the origin. What are the coordinates of point A?`, right, [...new Set(ws)]); },
      () => { const a = r(2, 12), b = r(2, 12); const g = gcd(a, b); const right = `${a / g} : ${b / g}`; const ws = [`${b / g} : ${a / g}`, `${a} : ${a + b}`, `${a / g} : ${(a + b) / g}`, `${a / g + 1} : ${b / g}`].filter(z => z !== right); return from(`🍎 ${a} apples, 🍊 ${b} oranges.\nWhat is the ratio of apples to oranges (simplest form)?`, right, [...new Set(ws)]); },
      () => { const n = r(2, 6), h = r(2, 9), m = r(n + 1, 12); return q(`📒|${n} books cost RM${n * h}. What is the price of ${m} books?`, m * h, [h, n, 2], false, "Find the price of one book first, then multiply.", rm); },
      () => { const k = r(40, 90), j = r(2, 5); return q(`🚗|A car travels ${k} km in 1 hour. How far does it travel in ${j} hours at the same speed?`, k * j, [k, 10, 5], false, "", x => x + " km"); },
      () => { const a = r(1, 5), b = r(1, 5), k = r(2, 8); return q(`The ratio of boys to girls is ${a} : ${b}. If there are ${a * k} boys, how many girls are there?`, b * k, [k, a, b, 1]); }
    ] },
  { t: "Data Handling",
    q: [
      ["The mode is the value that…", "appears most often", "is the biggest", "is in the middle", "is the smallest"],
      ["The range is the difference between…", "the biggest and the smallest value", "the first two values", "the mode and the median", "the total and the average"],
      ["The total of all parts in a pie chart is…", "100%", "50%", "360%", "10%"],
      ["The average is calculated by…", "total of values ÷ number of values", "biggest value − smallest value", "the most frequent value", "total of values × number of values"]
    ],
    g: [
      () => { const n = pick([3, 4, 5]), avg = r(10, 80); const xs = []; let s = 0; for (let i = 0; i < n - 1; i++) { const v = avg + r(-9, 9); xs.push(v); s += v; } xs.push(avg * n - s); if (xs[n - 1] < 0) xs[n - 1] = avg; const sum = xs.reduce((a, b) => a + b, 0); if (sum % n) return null; return q(`Find the average of:\n${xs.join(", ")}`, sum / n, [1, 2, 5], false, `Total ${sum} ÷ ${n}`); },
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 4)]); return from(`Find the mode of the data:\n${xs.join(", ")}`, String(m), [...new Set(xs.filter(x => x !== m))].map(String)); },
      () => { const xs = shuffle(Array.from({ length: 6 }, () => r(10, 99))); const hi = Math.max(...xs), lo = Math.min(...xs); return q(`Find the range of the data:\n${xs.join(", ")}`, hi - lo, [1, 10, 5]); },
      () => { const xs = shuffle([...new Set(Array.from({ length: 12 }, () => r(1, 50)))]).slice(0, 5); if (xs.length < 5) return null; const s = xs.slice().sort((a, b) => a - b); const med = s[2]; return from(`Find the median of the data:\n${xs.join(", ")}`, String(med), [...new Set([s[1], s[3], xs[2], s[0], s[4]].filter(x => x !== med))].map(String), `Arrange first: ${s.join(", ")}`); },
      () => { const items = shuffle(["🍎", "🍌", "🍇", "🍊"]); const c = shuffle([2, 3, 4, 5, 6, 7]).slice(0, 4); const chart = items.map((e, i) => e + " " + "⬛".repeat(c[i])).join("\n"); return q(`${chart}|Each ⬛ represents 10 pupils. How many pupils like ${items[0]}?`, c[0] * 10, [10, 5, 20]); }
    ] }
],

sains: [
  { t: "Scientific Skills", q: [
    ["The skill of using the senses to collect information is…", "observing", "predicting", "classifying", "interpreting data"],
    ["Making a forecast based on observation or experience is…", "predicting", "measuring", "observing", "communicating"],
    ["Giving an early explanation of an observation is…", "making inferences", "classifying", "measuring", "using numbers"],
    ["The variable changed by the investigator is the ___ variable.", "manipulated", "responding", "constant", "fixed"],
    ["The variable that changes because another variable changes is the ___ variable.", "responding", "manipulated", "constant", "random"],
    ["The variable kept the same so that the test is fair is the ___ variable.", "constant", "manipulated", "responding", "free"],
    ["A general statement about the relationship between variables that can be tested is a…", "hypothesis", "conclusion", "inference", "observation"],
    ["Presenting information as a table or graph is…", "communicating", "predicting", "classifying", "measuring"],
    ["A suitable tool to measure temperature is a…", "thermometer", "ruler", "balance", "stopwatch"],
    ["A suitable tool to measure time is a…", "stopwatch", "thermometer", "measuring cylinder", "ruler"]
  ]},
  { t: "Humans", q: [
    ["One function of the human skeleton is to…", "protect internal organs", "digest food", "pump blood", "produce sound"],
    ["🧠|The skull protects the…", "brain", "heart", "lungs", "stomach"],
    ["The rib cage protects the…", "heart and lungs", "brain", "intestines", "hands"],
    ["The longest bone in the human body is the…", "thigh bone (femur)", "rib", "skull", "finger bone"],
    ["The number of bones in an adult human body is about…", "206", "100", "300", "56"],
    ["The part that connects two bones and allows movement is a…", "joint", "skin", "hair", "nail"],
    ["Without a skeleton, our body cannot…", "stand upright", "breathe", "think", "see"],
    ["❤️|The organ that pumps blood around the body is the…", "heart", "lungs", "brain", "liver"],
    ["Blood carries oxygen and ___ around the body.", "digested food", "bones", "hair", "dirty air only"],
    ["Oxygen-rich blood flows from the ___ to the heart.", "lungs", "brain", "legs", "stomach"],
    ["Carbon dioxide is carried by the blood to the ___ to be removed.", "lungs", "heart", "brain", "bones"],
    ["The blood vessel that carries blood from the heart to the whole body is an…", "artery", "vein", "capillary", "nerve"],
    ["After exercising, the pulse rate will…", "increase", "decrease", "stop", "not change"],
    ["The skeletal system and the muscular system work together to…", "produce movement", "digest food", "breathe", "see"]
  ]},
  { t: "Animals", q: [
    ["🐔|A hen sits on its eggs to…", "make sure the eggs hatch", "hide the eggs", "eat the eggs", "cool the eggs"],
    ["🦘|A kangaroo takes care of its young by…", "keeping it in its pouch", "burying it in sand", "leaving it", "carrying it on its head"],
    ["A male seahorse takes care of its eggs by…", "keeping the eggs in its pouch", "burying them in sand", "swallowing the eggs", "leaving them"],
    ["🐢|Turtles lay many eggs because…", "most eggs and young are eaten by predators", "turtles like eggs", "turtle eggs are small", "turtles cannot swim"],
    ["🐸|Frogs lay many eggs to…", "ensure the survival of their species", "feed their young", "decorate the pond", "build a nest"],
    ["🐘|Elephants live in herds to…", "protect their young from predators", "play", "sleep", "bathe"],
    ["A male arowana fish takes care of its eggs by…", "keeping the eggs in its mouth", "burying the eggs", "leaving the eggs", "hanging the eggs"],
    ["Green plants in a food chain are called…", "producers", "consumers", "predators", "prey"],
    ["Animals that eat only plants are called…", "herbivores", "carnivores", "omnivores", "producers"],
    ["Animals that eat only meat are called…", "carnivores", "herbivores", "omnivores", "producers"],
    ["Animals that eat both plants and meat are called…", "omnivores", "herbivores", "carnivores", "producers"],
    ["🌾 → 🐛 → 🐔 → 🦅|In this food chain, the producer is…", "🌾", "🐛", "🐔", "🦅"],
    ["🌾 → 🐭 → 🐍 → 🦅|Which is the predator of the snake?", "🦅", "🐭", "🌾", "🐍"],
    ["A combination of several food chains is called a…", "food web", "water cycle", "energy pyramid", "skeleton network"]
  ]},
  { t: "Plants", q: [
    ["🌵|A cactus has spine-shaped leaves to…", "reduce water loss", "attract insects", "absorb light", "look pretty"],
    ["Mangrove trees have prop roots that help them…", "stand firmly in muddy soil", "attract birds", "store food", "chase away monkeys"],
    ["🪷|A lotus has broad, flat leaves to…", "float on water", "collect rain", "scare fish", "catch insects"],
    ["Rubber trees shed their leaves in the dry season to…", "reduce water loss", "grow quickly", "attract bees", "cool the soil"],
    ["The touch-me-not (semalu) plant closes its leaves when touched to…", "protect itself", "attract insects", "breathe", "reproduce"],
    ["Durian fruits have thorny skin to…", "protect themselves from animals", "attract birds", "absorb water", "make food"],
    ["🥥|Coconuts are dispersed by…", "water", "wind", "explosion", "animals"],
    ["Light, hairy kapok seeds are dispersed by…", "wind", "water", "animals", "explosion"],
    ["A dry rubber fruit bursts and throws out its seeds. This is dispersal by…", "explosion", "wind", "water", "animals"],
    ["Love grass (kemuncup) seeds that stick to animal fur are dispersed by…", "animals", "wind", "water", "explosion"],
    ["Sweet rambutan fruits are usually dispersed by…", "animals", "wind", "explosion", "water"],
    ["Seed dispersal is important so that young plants…", "do not compete with the parent plant for light and water", "are smaller", "die quickly", "grow crowded together"]
  ]},
  { t: "Electricity", q: [
    ["🔋|A battery is an example of a…", "source of electrical energy", "conductor", "insulator", "switch"],
    ["Electricity from a dam is produced by…", "water power", "wind power", "nuclear power", "coal"],
    ["A solar panel changes light energy into ___ energy.", "electrical", "sound", "chemical", "potential"],
    ["In a series circuit, if one bulb is broken, the other bulbs will…", "go out", "become brighter", "stay lit", "blink"],
    ["In a parallel circuit, if one bulb is broken, the other bulbs will…", "stay lit", "go out", "break", "give off smoke"],
    ["Bulbs in a parallel circuit light up ___ than in a series circuit (same number of bulbs and cells).", "brighter", "dimmer", "slower", "smaller"],
    ["The device used to connect and break a circuit is a…", "switch", "bulb", "wire", "battery"],
    ["A material that can conduct electricity is called a…", "conductor", "insulator", "magnet", "solvent"],
    ["Which one is an electrical insulator?", "rubber", "copper", "aluminium", "iron"],
    ["We must not touch a switch with ___ hands.", "wet", "dry", "clean", "dry-gloved"],
    ["A way to save electricity is to…", "switch off when not in use", "turn on lights during the day", "keep the fridge door open for long", "leave the TV on"],
    ["The device that breaks the circuit when the current is too high is a…", "fuse", "bulb", "light switch", "plug"]
  ]},
  { t: "Heat", q: [
    ["🌡️|The tool used to measure temperature is a…", "thermometer", "barometer", "balance", "ruler"],
    ["The unit of temperature commonly used in school is…", "degrees Celsius (°C)", "metres", "kilograms", "litres"],
    ["Heat flows from a ___ area to a ___ area.", "hot to cold", "cold to hot", "top to bottom", "left to right"],
    ["When an object is heated, its temperature will…", "increase", "decrease", "stay the same", "disappear"],
    ["When cooled, most materials will…", "contract", "expand", "burn", "light up"],
    ["When heated, most materials will…", "expand", "contract", "freeze", "disappear"],
    ["Small gaps between railway tracks are made so the tracks can…", "expand on hot days", "be locked", "be painted", "be bent"],
    ["Electric cables are installed loosely so they do not snap when they…", "contract in cold weather", "expand in hot weather", "get rained on", "get windy"],
    ["The normal human body temperature is about…", "37°C", "100°C", "0°C", "57°C"],
    ["Heat is a form of…", "energy", "solid", "gas", "liquid"],
    ["An iron spoon in hot water becomes hot because heat is…", "conducted through the spoon", "lost", "produced by the spoon", "cooled"],
    ["Closing the lid of a vacuum flask helps to ___ heat.", "keep", "add", "remove", "cool"]
  ]},
  { t: "Rusting", q: [
    ["Rusting happens when iron is exposed to…", "water and air", "light only", "sand", "plastic"],
    ["Rust is usually…", "reddish-brown", "blue", "white", "bright green"],
    ["Which one can rust?", "iron nail", "plastic spoon", "glass cup", "gold bracelet"],
    ["Which one does not rust?", "aluminium can", "iron nail", "iron fence", "iron bicycle chain"],
    ["Iron fences are painted to…", "prevent rusting", "make them heavy", "attract electricity", "cool them"],
    ["A bicycle chain is coated with oil or grease to…", "prevent rusting", "add weight", "change colour", "attract dust"],
    ["A nail in salt water will rust…", "faster", "slower", "not at all", "the same"],
    ["A nail kept in a dry, closed container will…", "rust slowly", "rust quickly", "melt", "break"],
    ["Coating iron with zinc is called…", "galvanising", "rusting", "painting", "burning"],
    ["Rust makes iron become…", "brittle and weak", "stronger", "shiny", "heavier and sturdier"]
  ]},
  { t: "Matter", q: [
    ["Matter is anything that has…", "mass and takes up space", "colour only", "smell only", "sound"],
    ["The three states of matter are…", "solid, liquid and gas", "hot, cold and warm", "hard, soft and tough", "big, small and medium"],
    ["A solid has…", "a fixed shape and volume", "a changing shape", "no volume", "no mass"],
    ["A liquid takes the shape of…", "its container", "a circle only", "a square only", "a fixed shape"],
    ["A gas will…", "fill the whole space of its container", "stay at the bottom of the container", "have a fixed shape", "not move"],
    ["🧊|The change from ice to water is called…", "melting", "freezing", "evaporation", "condensation"],
    ["The change from water to ice is called…", "freezing", "melting", "boiling", "evaporation"],
    ["The change from water to water vapour is called…", "evaporation", "condensation", "freezing", "melting"],
    ["Water droplets on the outside of a glass of cold water form through…", "condensation", "evaporation", "melting", "boiling"],
    ["Wet clothes become dry because of…", "evaporation", "condensation", "freezing", "melting"],
    ["🎈|The air inside a balloon is an example of a…", "gas", "solid", "liquid", "plasma"],
    ["Clouds form when water vapour undergoes…", "condensation", "melting", "freezing", "rusting"]
  ]},
  { t: "Phases of the Moon and Constellations", q: [
    ["🌕|The Moon appears to shine because it…", "reflects sunlight", "gives out its own light", "has lamps", "is burning"],
    ["The phase of the Moon when its whole surface looks bright is the…", "full moon", "new moon", "crescent moon", "half moon"],
    ["The phase of the Moon when the Moon cannot be seen is the…", "new moon", "full moon", "half moon", "gibbous moon"],
    ["🌓|This phase of the Moon is the…", "half moon", "full moon", "new moon", "crescent moon"],
    ["🌒|This phase of the Moon is the…", "crescent moon", "full moon", "half moon", "new moon"],
    ["One cycle of the Moon's phases takes about…", "29.5 days", "7 days", "365 days", "24 hours"],
    ["The shape of the Moon seems to change because…", "the positions of the Moon, Earth and Sun change", "the Moon shrinks", "clouds cover it", "the Moon breaks"],
    ["A group of stars that forms a certain pattern is called a…", "constellation", "galaxy", "planet", "comet"],
    ["The constellation that helps to show the south direction is the…", "Southern Cross", "Orion", "Big Dipper", "Scorpius"],
    ["The constellation that helps to show the north direction is the…", "Big Dipper", "Southern Cross", "Scorpius", "Orion"],
    ["The Belantik constellation is also known as…", "Orion", "Scorpius", "the Southern Cross", "the Great Bear"],
    ["In the past, farmers used constellations to…", "decide the planting season", "count money", "build houses", "cook"]
  ]},
  { t: "Machines", q: [
    ["✂️|A pair of scissors is a simple machine of the type…", "lever", "pulley", "screw", "wedge"],
    ["The device on a flagpole used to raise the flag is a…", "pulley", "wedge", "gear", "screw"],
    ["A ramp for wheelchairs is an example of an…", "inclined plane", "pulley", "lever", "gear"],
    ["🪓|The blade of an axe is an example of a…", "wedge", "screw", "pulley", "gear"],
    ["A doorknob is an example of a…", "wheel and axle", "wedge", "pulley", "inclined plane"],
    ["A twist-off bottle cap is an example of a…", "screw", "wedge", "pulley", "lever"],
    ["A machine made of a combination of several simple machines is called a…", "complex machine", "simple machine", "single machine", "electric machine"],
    ["🚲|A bicycle is an example of a…", "complex machine", "simple machine", "lever only", "wedge only"],
    ["The chain and gears on a bicycle are used to…", "transfer force from the pedals to the wheel", "decorate the bicycle", "add weight", "make noise"],
    ["Machines help humans to…", "make work easier and faster", "make work harder", "add problems", "slow down work"],
    ["A see-saw is an example of a…", "lever", "pulley", "wedge", "screw"],
    ["Food tongs are an example of a…", "lever", "gear", "screw", "inclined plane"]
  ]}
]
};
})();
