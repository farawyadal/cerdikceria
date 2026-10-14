/* =========================================================
   YEAR 3 — Cerdik Ceria · DLP (English translation)
   Same chapters, order and generator logic as soalan/tahun3.js
   (generators run with the same seed so numbers match).
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function say3(n, and) {
  const out = [];
  const h = Math.floor(n / 100), rest = n % 100;
  if (h) out.push(ONES[h] + " hundred");
  if (rest) {
    let w;
    if (rest < 10) w = ONES[rest];
    else if (rest < 20) w = TEENS[rest - 10];
    else { const t = Math.floor(rest / 10), o = rest % 10; w = TENS[t] + (o ? "-" + ONES[o] : ""); }
    out.push(h || and ? "and " + w : w);
  }
  return out.join(" ");
}
function say(n) {
  if (n === 10000) return "ten thousand";
  const th = Math.floor(n / 1000), rest = n % 1000;
  const out = [];
  if (th) out.push(ONES[th] + " thousand");
  if (rest) out.push(say3(rest, th && rest < 100));
  return out.join(" ");
}
const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d === 1) return String(n); if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`; return `${n}/${d}`; }
const PLACE = ["ones", "tens", "hundreds", "thousands"];
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
function grid(x, y, mark) {
  const rows = [];
  const K = n => n + "️⃣";
  for (let j = 5; j >= 1; j--) { let s = K(j); for (let i = 1; i <= 5; i++) s += (i === x && j === y) ? mark : "⬜"; rows.push(s); }
  rows.push(K(0) + [1, 2, 3, 4, 5].map(K).join(""));
  return rows.join("\n");
}
const hm = (h, m) => `${h} hours ${m} minutes`;

SOALAN["dlp3"] = {
math: [
  { t: "Whole Numbers up to 10 000",
    q: [
      ["The biggest four-digit number is…", "9999", "1000", "9000", "10 000"],
      ["The smallest four-digit number is…", "1000", "1001", "999", "100"],
      ["\"ten thousand\" is written as…", "10 000", "1000", "100 000", "10 100"]
    ],
    g: [
      () => { const n = r(1001, 9999); const ws = [n + 1, n - 1, n + 10, n + 100, n - 100, n + 1000, n - 1000].filter(x => x > 0 && x < 10000 && x !== n).map(say); return from(`${fmt(n)} is read as…`, say(n), ws); },
      () => { const n = r(1001, 9999); return from(`The number for \"${say(n)}\" is…`, fmt(n), [n + 10, n - 10, n + 100, n - 100, n + 1000, n - 1000, n + 1].filter(x => x > 0 && x < 10000 && x !== n).map(fmt)); },
      () => { let n, s, p, d; do { n = r(1001, 9999); s = String(n); p = r(0, 3); d = +s[3 - p]; } while (!d || s.split("").filter(x => +x === d).length > 1); const v = d * 10 ** p; return from(`The value of digit ${d} in ${fmt(n)} is…`, fmt(v), [d, d * 10, d * 100, d * 1000].filter(x => x !== v).map(fmt), `Digit ${d} is in the ${PLACE[p]} place.`); },
      () => { const s = new Set(); while (s.size < 4) s.add(r(1000, 9999)); const ns = [...s].sort((a, b) => b - a); return ["Which number is the biggest?", ...ns.map(fmt), ""]; },
      () => { const n = r(1001, 9499); const ans = Math.round(n / 1000) * 1000; return q(`Round off ${fmt(n)} to the nearest thousand.`, ans, [1000, 100]); },
      () => { const n = r(101, 9949); const ans = Math.round(n / 100) * 100; return q(`Round off ${fmt(n)} to the nearest hundred.`, ans, [100, 10, 1000]); },
      () => { const st = pick([10, 50, 100, 1000]), a = r(1, 9999 - st * 4); const seq = [a, a + st, a + 2 * st, a + 3 * st]; const hide = r(1, 3); return q(`Complete the number pattern:\n${seq.map((x, i) => i === hide ? "___" : fmt(x)).join(", ")}`, seq[hide], [st, 1, 10], false, `Add ${st} each time.`); }
    ] },
  { t: "Basic Operations",
    q: [
      ["Any number multiplied by 10: add ___ zero at the end.", "one", "two", "three", "no"],
      ["Any number multiplied by 100: add ___ zeros at the end.", "two", "one", "three", "no"]
    ],
    g: [
      () => { const a = r(1000, 7999), b = r(100, 9999 - a); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const a = r(2000, 9999), b = r(100, a - 1); return q(`${fmt(a)} − ${fmt(b)} = ?`, a - b, [1, 10, 100, 1000]); },
      () => { const a = r(2, 9), b = r(1, 10); return q(`${a} × ${b} = ?`, a * b, [a, b, 1]); },
      () => { const b = r(2, 9), a = r(100, Math.floor(9999 / b)); return q(`${fmt(a)} × ${b} = ?`, a * b, [b, 10, a]); },
      () => { const b = r(2, 9), c = r(100, Math.floor(9999 / b)); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 10, b]); },
      () => { const m = pick([10, 100, 1000]); const a = r(2, Math.floor(9999 / m)); return q(`${a} × ${fmt(m)} = ?`, a * m, [m, m * 9, a]); },
      () => { const m = pick([10, 100]); const a = r(2, 99) * m; return q(`${fmt(a)} ÷ ${m} = ?`, a / m, [1, 10, a / m * 9]); },
      () => { const a = r(1000, 4000), b = r(500, 3000), c = r(100, a + b - 1); return q(`🍌|A farm has ${fmt(a)} banana trees. ${fmt(b)} more trees are planted. Then ${fmt(c)} trees are cut down. How many trees are left?`, a + b - c, [10, 100, 1000], false, "Add first, then subtract."); },
      () => { const n = r(3, 9), e = r(12, 99); return q(`📦|Each box has ${e} marbles. How many marbles are there in ${n} boxes?`, n * e, [e, n, 10]); }
    ] },
  { t: "Fractions, Decimals and Percentages",
    q: [
      ["1/2 is equivalent to…", "2/4", "1/4", "2/3", "1/3"],
      ["The simplest form of 4/8 is…", "1/2", "2/4", "4/2", "1/4"],
      ["Which one is an improper fraction?", "7/4", "3/4", "1/2", "2/5"],
      ["50% is the same as the fraction…", "1/2", "1/5", "1/4", "1/50"],
      ["100% means…", "the whole", "half", "a quarter", "nothing"],
      ["0.25 is read as…", "zero point two five", "twenty-five", "two point five", "zero twenty-five"]
    ],
    g: [
      () => { const [a, b] = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5]]), k = r(2, 5); const right = `${a * k}/${b * k}`; return from(`${a}/${b} is equivalent to…`, right, [`${a * k}/${b * k + 1}`, `${a + k}/${b + k}`, `${a * k + 1}/${b * k}`, `${a}/${b * k}`]); },
      () => { const [a, b] = pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5]]), k = r(2, 5); const right = `${a}/${b}`; return from(`The simplest form of ${a * k}/${b * k} is…`, right, [`${b}/${a}`, `${a * k}/${b}`, `${a + 1}/${b}`, `${a}/${b + 1}`]); },
      () => { const d = pick([5, 6, 8, 9, 10]), a = r(1, d - 1), b = r(1, d - 1); const right = frac(a + b, d); return from(`${a}/${d} + ${b}/${d} = ?`, right, [frac(a + b, d * 2), frac(a + b + 1, d), `${a + b}/${d * 2}`, frac(Math.abs(a - b) || 1, d)]); },
      () => { const d = pick([5, 6, 8, 9, 10]), a = r(2, d - 1), b = r(1, a - 1); const right = frac(a - b, d); return from(`${a}/${d} − ${b}/${d} = ?`, right, [frac(a + b, d), `${a - b}/${d * 2}`, frac(a - b + 1, d), frac(a, d)]); },
      () => { const d = pick([2, 3, 4, 5]), w = r(1, 3), n = r(1, d - 1); const im = w * d + n; const right = `${w} ${n}/${d}`; return from(`${im}/${d} as a mixed number is…`, right, [`${w + 1} ${n}/${d}`, `${w} ${d}/${n}`, `${n} ${w}/${d}`, `${w} ${n + 1}/${d}`].filter(x => !/ 0\//.test(x))); },
      () => { const n = r(1, 99); const right = `${n}%`; return from(`${n}/100 as a percentage is…`, right, [`${100 - n}%`, `${n}0%`, `0.${n}%`, `${n + 1}%`].filter(x => x !== right)); },
      () => { const n = r(11, 99); const right = (n / 100).toFixed(2); return from(`${n}/100 as a decimal is…`, right, [(n / 10).toFixed(1), `0.0${n % 10}`, (n / 1000).toFixed(3), ((n + 1) / 100).toFixed(2)].filter(x => x !== right)); },
      () => { const a = r(11, 99) / 10, b = r(11, 99) / 10; return q(`${a.toFixed(1)} + ${b.toFixed(1)} = ?`, +(a + b).toFixed(1), [0.1, 1, 0.2], true, "", x => x.toFixed(1)); }
    ] },
  { t: "Money",
    q: [
      ["The currency of Indonesia is…", "Rupiah", "Baht", "Peso", "Dong"],
      ["The currency of Thailand is…", "Baht", "Rupiah", "Kyat", "Riel"],
      ["The currency of the Philippines is…", "Peso", "Baht", "Dong", "Kip"],
      ["The currency of Vietnam is…", "Dong", "Peso", "Rupiah", "Ringgit"],
      ["The currency of Malaysia is…", "Ringgit", "Dollar", "Baht", "Rupiah"],
      ["An example of a need is…", "food and clothes", "expensive toys", "a new phone every year", "sweets"],
      ["An example of a want is…", "a new toy", "clean water", "food", "medicine when sick"],
      ["A good way to save money is…", "keeping part of your pocket money", "buying everything you want", "borrowing money from friends", "wasting money"]
    ],
    g: [
      () => { const a = r(100, 5000), b = r(100, 9999 - a); return q(`💵|RM${fmt(a)} + RM${fmt(b)} = ?`, a + b, [1, 10, 100], false, "", rm); },
      () => { const a = r(1000, 9999), b = r(100, a - 1); return q(`💵|RM${fmt(a)} − RM${fmt(b)} = ?`, a - b, [1, 10, 100], false, "", rm); },
      () => { const h = r(12, 250), n = r(2, 9); return q(`👟|A pair of shoes costs RM${h}. What is the price of ${n} pairs?`, h * n, [h, 10, n], false, "", rm); },
      () => { const n = r(2, 9), e = r(15, 400); return q(`🎁|RM${fmt(n * e)} is shared equally by ${n} people. How much does each person get?`, e, [1, 10, n], false, "", rm); },
      () => { const a = r(1, 20) + r(1, 9) / 10, b = r(1, 20) + r(1, 9) / 10; return q(`🧾|RM${a.toFixed(2)} + RM${b.toFixed(2)} = ?`, +(a + b).toFixed(2), [1, 0.1, 0.5], true, "", rm); }
    ] },
  { t: "Time",
    q: [
      ["1 minute = ___ seconds", "60", "100", "30", "24"],
      ["1 hour = ___ minutes", "60", "100", "24", "30"],
      ["A quarter of an hour = ___ minutes", "15", "25", "30", "45"],
      ["The short hand on a clock shows the…", "hour", "minute", "second", "day"]
    ],
    g: [
      () => { const m = r(2, 9); return q(`${m} minutes = ___ seconds`, m * 60, [60, 10, 30]); },
      () => { const m = r(2, 5), s = r(5, 55); return q(`${m} minutes ${s} seconds = ___ seconds`, m * 60 + s, [60, 10, 40]); },
      () => { const h = r(2, 5), m = r(5, 55); return q(`${h} hours ${m} minutes = ___ minutes`, h * 60 + m, [60, 10, 40]); },
      () => { const t = r(2, 9) * 60 + r(1, 59); const h = Math.floor(t / 60), m = t % 60; const right = hm(h, m); return from(`${t} minutes = ?`, right, [hm(h - 1, m), hm(h + 1, m), hm(h, (m + 10) % 60), hm(Math.floor(t / 100), t % 100)].filter(x => x !== right)); },
      () => { const h1 = r(1, 5), m1 = r(5, 50), h2 = r(1, 4), m2 = r(5, 50); let m = m1 + m2, h = h1 + h2 + Math.floor(m / 60); m %= 60; const right = hm(h, m); return from(`${hm(h1, m1)} + ${hm(h2, m2)} = ?`, right, [hm(h1 + h2, m1 + m2), hm(h + 1, m), hm(h, (m + 10) % 60), hm(h - 1, m)].filter(x => x !== right), "60 minutes = 1 hour"); }
    ] },
  { t: "Length, Mass and Volume of Liquid",
    q: [
      ["1 m = ___ cm", "100", "10", "1000", "60"],
      ["1 kg = ___ g", "1000", "100", "10", "500"],
      ["1 l = ___ ml", "1000", "100", "10", "500"],
      ["Half a kilogram = ___ g", "500", "50", "250", "1000"],
      ["A quarter litre = ___ ml", "250", "25", "500", "750"]
    ],
    g: [
      () => { const m = r(1, 9), c = r(1, 99); return q(`${m} m ${c} cm = ___ cm`, m * 100 + c, [100, 10, 90]); },
      () => { const c = r(101, 999); const right = `${Math.floor(c / 100)} m ${c % 100} cm`; return from(`${c} cm = ?`, right, [`${Math.floor(c / 10)} m ${c % 10} cm`, `${Math.floor(c / 100) + 1} m ${c % 100} cm`, `${Math.floor(c / 100)} m ${(c % 100 + 10) % 100} cm`, `${c % 100} m ${Math.floor(c / 100)} cm`].filter(x => x !== right)); },
      () => { const k = r(1, 9), g = r(1, 999); return q(`${k} kg ${g} g = ___ g`, k * 1000 + g, [1000, 100, 10]); },
      () => { const l = r(1, 9), m = r(1, 999); return q(`${l} l ${m} ml = ___ ml`, l * 1000 + m, [1000, 100, 10]); },
      () => { const a = r(150, 900), b = r(150, 900); return q(`🧃|Bottle A has ${a} ml of juice. Bottle B has ${b} ml of juice. What is the total amount of juice?`, a + b, [10, 100, 50], false, "", x => fmt(x) + " ml"); },
      () => { const k = r(2, 9), g = r(100, 900); return q(`🍉|A watermelon is ${k} kg. A papaya is ${g} g. What is their total mass in grams?`, k * 1000 + g, [100, 1000, 10], false, "", x => fmt(x) + " g"); }
    ] },
  { t: "Space", q: [
    ["A pentagon has ___ sides.", "5", "6", "7", "8"],
    ["A hexagon has ___ sides.", "6", "5", "7", "8"],
    ["A heptagon has ___ sides.", "7", "6", "8", "5"],
    ["An octagon has ___ sides.", "8", "6", "7", "10"],
    ["🛑|This stop sign has the shape of an…", "octagon", "hexagon", "pentagon", "circle"],
    ["A regular polygon has sides that are…", "equal in length", "not equal in length", "curved", "broken"],
    ["Which one is a prism?", "cuboid", "cone", "sphere", "pyramid"],
    ["Which one is not a prism?", "pyramid", "cube", "cuboid", "triangular prism"],
    ["The number of lines of symmetry of a square is…", "4", "2", "1", "0"],
    ["The number of lines of symmetry of a rectangle is…", "2", "4", "1", "0"],
    ["The number of lines of symmetry of an equilateral triangle is…", "3", "1", "2", "0"],
    ["A line that divides a shape into two equal parts is called a…", "line of symmetry", "perimeter", "vertex", "radius"]
  ]},
  { t: "Coordinates",
    q: [
      ["In the coordinates (3, 5), the first number shows the distance…", "horizontally (to the right)", "vertically (upwards)", "to the left", "downwards"],
      ["The origin is…", "(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"]
    ],
    g: [
      () => { const x = r(1, 5), y = r(1, 5); const m = pick(["🍎", "⭐", "🐱", "🎈"]); const right = `(${x}, ${y})`; return from(`${grid(x, y, m)}|What are the coordinates of ${m}?`, right, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`, `(${x - 1 || 2}, ${y})`, `(${x}, ${y - 1 || 3})`].filter(z => z !== right)); },
      () => { const x = r(1, 3), y = r(1, 5), dx = r(1, 2); const right = `(${x + dx}, ${y})`; return from(`🚶|Ali is at (${x}, ${y}). He moves ${dx} unit${dx > 1 ? "s" : ""} to the right. Where is Ali now?`, right, [`(${x}, ${y + dx})`, `(${x - dx < 0 ? x + dx + 1 : x - dx}, ${y})`, `(${x + dx}, ${y + dx})`, `(${x + dx + 1}, ${y})`].filter(z => z !== right)); },
      () => { const x = r(1, 5), y = r(1, 3), dy = r(1, 2); const right = `(${x}, ${y + dy})`; return from(`🐦|A bird is at (${x}, ${y}). It flies ${dy} unit${dy > 1 ? "s" : ""} up. Where is the bird now?`, right, [`(${x + dy}, ${y})`, `(${x}, ${y + dy + 1})`, `(${x + dy}, ${y + dy})`, `(${y + dy}, ${x})`].filter(z => z !== right)); }
    ] },
  { t: "Data Handling",
    q: [
      ["A circle divided into parts to show data is called a…", "pie chart", "bar chart", "pictograph", "table"],
      ["The whole pie chart represents…", "all of the data (100%)", "half of the data", "only one piece of data", "no data"],
      ["The biggest part of a pie chart shows…", "the most data", "the least data", "no data", "the total data"]
    ],
    g: [
      () => {
        const items = shuffle(["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"]);
        const c = shuffle([2, 3, 4, 5, 6, 7]).slice(0, 4), per = pick([2, 5, 10]);
        const chart = items.map((e, i) => e.split(" ")[0] + " " + "🟨".repeat(c[i])).join("\n");
        const names = items.map(x => x.split(" ")[1]); const k = r(0, 3); const t = r(0, 2);
        if (t === 0) return q(`${chart}|Each 🟨 represents ${per} pupils. How many pupils like ${names[k]}?`, c[k] * per, [per, 1, per * 2]);
        if (t === 1) { const tot = c.reduce((a, b) => a + b, 0) * per; return q(`${chart}|Each 🟨 represents ${per} pupils. How many pupils are there altogether?`, tot, [per, 10, 5]); }
        const m = c.indexOf(Math.max(...c)); return [`${chart}|Which fruit is the most popular?`, names[m], ...names.filter((_, i) => i !== m), ""];
      }
    ] }
],

sains: [
  { t: "Scientific Skills", q: [
    ["The skill of making an early conclusion based on observation is…", "making inferences", "measuring", "classifying", "predicting"],
    ["Measuring with the correct tool and unit is the skill of…", "measuring and using numbers", "classifying", "observing", "communicating"],
    ["The tool to measure the volume of a liquid accurately is a…", "measuring cylinder", "ruler", "thermometer", "balance"],
    ["Guessing what will happen next is…", "predicting", "classifying", "measuring", "observing"],
    ["Presenting data in a table is…", "communicating", "predicting", "observing", "classifying"],
    ["When doing an experiment, we must…", "follow the teacher's instructions", "play around", "taste the chemicals", "run around"]
  ]},
  { t: "Humans", q: [
    ["Children have ___ milk teeth.", "20", "32", "28", "10"],
    ["Adults have ___ permanent teeth.", "32", "20", "28", "40"],
    ["The teeth used to cut food are the…", "incisors", "canines", "molars", "gums"],
    ["The teeth used to tear food are the…", "canines", "incisors", "molars", "milk teeth"],
    ["The teeth used to chew and grind food are the…", "molars", "incisors", "canines", "milk teeth"],
    ["The hardest layer of a tooth is the…", "enamel", "dentine", "pulp", "gum"],
    ["The food class that gives energy is…", "carbohydrates", "vitamins", "fibre", "water"],
    ["The food class for growth and repairing cells is…", "protein", "carbohydrates", "fats", "fibre"],
    ["🍚|Rice is rich in…", "carbohydrates", "protein", "vitamins", "fibre"],
    ["🥚|Eggs and fish are rich in…", "protein", "carbohydrates", "fats", "fibre"],
    ["🥦|Vegetables are rich in fibre, which helps to…", "prevent constipation", "only add energy", "build muscles", "strengthen teeth"],
    ["The food we should eat the least in the food pyramid is…", "fats, sugar and salt", "rice and bread", "vegetables and fruits", "water"],
    ["Digestion of food starts in the…", "mouth", "stomach", "small intestine", "large intestine"],
    ["Digested food is absorbed into the blood in the…", "small intestine", "mouth", "oesophagus", "large intestine"],
    ["The path of food: mouth → oesophagus → stomach → …", "small intestine → large intestine → anus", "large intestine → small intestine → anus", "anus → small intestine", "lungs → heart"]
  ]},
  { t: "Animals", q: [
    ["Animals that eat only plants are called…", "herbivores", "carnivores", "omnivores", "producers"],
    ["Animals that eat only other animals are called…", "carnivores", "herbivores", "omnivores", "decomposers"],
    ["Animals that eat both plants and animals are called…", "omnivores", "herbivores", "carnivores", "producers"],
    ["🐄|A cow is a…", "herbivore", "carnivore", "omnivore", "decomposer"],
    ["🐯|A tiger is a…", "carnivore", "herbivore", "omnivore", "producer"],
    ["🐔|A chicken eats grains and worms. A chicken is an…", "omnivore", "herbivore", "carnivore", "producer"],
    ["Carnivores have canine teeth that are…", "sharp for tearing meat", "flat for grinding grass", "blunt", "missing"],
    ["Herbivores have molar teeth that are…", "broad and flat for grinding", "sharp like knives", "missing", "very long"],
    ["🐰|A rabbit is a…", "herbivore", "carnivore", "omnivore", "predator"],
    ["🦁|A lion is a…", "carnivore", "herbivore", "omnivore", "producer"]
  ]},
  { t: "Plants", q: [
    ["🌾|Paddy reproduces through…", "seeds", "stem cuttings", "spores", "leaves"],
    ["Tapioca can reproduce through…", "stem cuttings", "spores", "leaves", "coconut seeds"],
    ["Ferns reproduce through…", "spores", "seeds", "stem cuttings", "suckers"],
    ["🍄|Mushrooms reproduce through…", "spores", "seeds", "leaves", "stem cuttings"],
    ["🫚|Ginger reproduces through…", "underground stems (rhizomes)", "spores", "leaves", "seeds"],
    ["The life plant (setawar) can reproduce through its…", "leaves", "spores", "seeds only", "roots only"],
    ["🍌|Banana plants reproduce through…", "suckers (young plants)", "spores", "seeds", "leaves"],
    ["Sweet potatoes reproduce through…", "root tubers", "spores", "leaves", "seeds"],
    ["Hibiscus can reproduce through seeds and…", "stem cuttings", "spores", "leaves", "suckers"],
    ["Plants need to reproduce so that…", "their species do not become extinct", "they die quickly", "they become small", "they do not bear fruit"]
  ]},
  { t: "Measurement", q: [
    ["The unit for surface area is…", "square centimetre (cm²)", "centimetre (cm)", "gram (g)", "litre (l)"],
    ["The unit for the volume of a solid is…", "cubic centimetre (cm³)", "centimetre (cm)", "kilogram (kg)", "metre (m)"],
    ["Surface area can be measured by counting the number of…", "unit squares", "lines", "circles", "dots"],
    ["The volume of a stone (irregular shape) can be measured using…", "water in a measuring cylinder", "a ruler", "a thermometer", "a balance"],
    ["When a stone is put into water, the water level will…", "rise", "fall", "not change", "disappear"],
    ["The volume of a box 2 cm × 2 cm × 2 cm is…", "8 cm³", "6 cm³", "4 cm³", "12 cm³"],
    ["The area of a square with 3 cm sides is…", "9 cm²", "6 cm²", "12 cm²", "3 cm²"],
    ["The volume of a liquid is measured in…", "millilitres (ml)", "centimetres (cm)", "grams (g)", "metres (m)"]
  ]},
  { t: "Density", q: [
    ["An object that is less dense than water will…", "float", "sink", "dissolve", "melt"],
    ["An object that is denser than water will…", "sink", "float", "fly", "expand"],
    ["Which one will float on water?", "cork", "stone", "iron nail", "coin"],
    ["Which one will sink in water?", "marble", "ping-pong ball", "dry leaf", "cork"],
    ["Water becomes denser when we add…", "salt", "oil", "ice", "sand"],
    ["🥚|An egg that sinks in fresh water can float if we add…", "salt", "oil", "distilled water", "a little sugar only"],
    ["Oil floats on water because oil is…", "less dense than water", "denser than water", "heavy", "hot"],
    ["Life jackets are made of materials that are…", "less dense", "denser", "heavy", "hard"]
  ]},
  { t: "Acids and Alkalis", q: [
    ["Acidic substances turn blue litmus paper…", "red", "blue", "green", "yellow"],
    ["Alkaline substances turn red litmus paper…", "blue", "red", "white", "black"],
    ["Neutral substances do not change the colour of ___ paper.", "litmus", "drawing", "news", "tissue"],
    ["🍋|Lime juice is…", "acidic", "alkaline", "neutral", "fizzy"],
    ["Vinegar is…", "acidic", "alkaline", "neutral", "a solid"],
    ["🧼|Soapy water is…", "alkaline", "acidic", "neutral", "sour"],
    ["Distilled water is…", "neutral", "acidic", "alkaline", "salty"],
    ["Acidic substances usually taste…", "sour", "bitter", "sweet", "bland"],
    ["Alkaline substances usually taste bitter and feel…", "slippery", "rough", "sandy", "hot"],
    ["We must not taste substances in the lab because…", "it can be dangerous", "they taste good", "they are expensive", "the teacher will only be angry"]
  ]},
  { t: "The Solar System", q: [
    ["The centre of the Solar System is the…", "Sun", "Earth", "Moon", "Jupiter"],
    ["The number of planets in the Solar System is…", "8", "9", "7", "10"],
    ["The planet nearest to the Sun is…", "Mercury", "Venus", "Earth", "Mars"],
    ["The planet farthest from the Sun is…", "Neptune", "Uranus", "Saturn", "Jupiter"],
    ["The biggest planet is…", "Jupiter", "Saturn", "Earth", "Neptune"],
    ["The planet famous for its beautiful rings is…", "Saturn", "Mars", "Mercury", "Earth"],
    ["The Earth is planet number ___ from the Sun.", "3", "1", "2", "4"],
    ["The red planet is…", "Mars", "Venus", "Neptune", "Jupiter"],
    ["The Earth's natural satellite is the…", "Moon", "Sun", "Mars", "star"],
    ["The path of a planet around the Sun is called an…", "orbit", "axis", "constellation", "galaxy"],
    ["The farther a planet is from the Sun, the ___ it takes to go around the Sun.", "longer", "shorter", "same time", "no time"],
    ["Order of planets: Mercury, Venus, Earth, …", "Mars", "Jupiter", "Saturn", "Neptune"]
  ]},
  { t: "Machines (Pulleys)", q: [
    ["A pulley is a wheel that has a…", "groove for a rope", "sharp teeth", "battery", "screw"],
    ["A pulley helps us to…", "lift loads more easily", "cut wood", "measure temperature", "see far"],
    ["A pulley is used on a…", "flagpole", "pencil", "plate", "shoe"],
    ["Another example of a pulley in use is a…", "crane at a construction site", "pair of scissors", "spoon", "ruler"],
    ["The pulley on a flagpole lets us raise the flag by…", "pulling the rope down", "climbing the pole", "throwing the flag", "pushing the pole"],
    ["Old wells use a pulley to…", "lift a pail of water", "heat water", "filter water", "cool water"],
    ["Window blinds can be raised using a…", "pulley", "wedge", "screw", "lever"]
  ]}
]
};
})();
