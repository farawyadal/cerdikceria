/* =========================================================
   YEAR 6 — Cerdik Ceria · DLP (English translation)
   Same chapters, order and generator logic as soalan/tahun6.js
   (generators run with the same seed so numbers match).
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

const gcd = (a, b) => b ? gcd(b, a % b) : a;
function frac(n, d) { const g = gcd(n, d); n /= g; d /= g; if (d === 1) return String(n); if (n > d) return `${Math.floor(n / d)} ${n % d}/${d}`; return `${n}/${d}`; }
const dec = (x, p = 3) => String(+x.toFixed(p));
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
const pl = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
const hm = (h, m) => `${pl(h, "hour")} ${pl(m, "minute")}`;

SOALAN["dlp6"] = {
math: [
  { t: "Whole Numbers and Basic Operations",
    q: [
      ["In mixed operations without brackets, we do ___ first.", "multiplication and division", "addition and subtraction", "right to left", "any of them"],
      ["In mixed operations, the operation in the ___ is solved first.", "brackets", "biggest number", "smallest number", "end of the sentence"]
    ],
    g: [
      () => { const a = r(2, 50), b = r(2, 12), c = r(2, 12); return q(`${a} + ${b} × ${c} = ?`, a + b * c, [a, b, c, 10], false, "Multiply first, then add."); },
      () => { const b = r(2, 9), c = r(2, 30), a = r(b * c + 1, 900); return q(`${a} − ${b * c} ÷ ${b} = ?`, a - c, [b, c, 10], false, "Divide first, then subtract."); },
      () => { const a = r(10, 99), b = r(10, 99), c = r(2, 9); return q(`(${a} + ${b}) × ${c} = ?`, (a + b) * c, [c, a, b, 10], false, "Solve the brackets first."); },
      () => { const c = r(2, 9), d = r(5, 60), e = r(2, 9); const a = r(c * d + 1, c * d + 300); return q(`(${a} − ${a - c * d}) ÷ ${c} × ${e} = ?`, d * e, [e, d, 10], false, "Brackets first, then divide and multiply from left to right."); },
      () => { const a = r(100000, 899999), b = r(10000, 999999 - a); return q(`${fmt(a)} + ${fmt(b)} = ?`, a + b, [1, 10, 100, 1000]); },
      () => { const b = r(11, 99), a = r(1000, Math.floor(999999 / b)); return q(`${fmt(a)} × ${b} = ?`, a * b, [a, b, 100, 1000]); },
      () => { const b = r(11, 99), c = r(100, 9999); return q(`${fmt(b * c)} ÷ ${b} = ?`, c, [1, 10, 100]); },
      () => { const n = r(100000, 999999), u = pick([10000, 100000]); const ans = Math.round(n / u) * u; return q(`Round off ${fmt(n)} to the nearest ${u === 10000 ? "ten thousand" : "hundred thousand"}.`, ans, [u, u * 2, u / 10]); },
      () => { const h = r(12, 80), n = r(15, 60), s = r(100, 900); return q(`🎫|${n} pupils buy tickets at RM${h} each. The school contributes RM${s}. What is the total amount of money collected?`, n * h + s, [h, 100, 10], false, "Multiply first, then add.", rm); }
    ] },
  { t: "Fractions, Decimals and Percentages",
    q: [
      ["The mixed number 2 1/4 as a decimal is…", "2.25", "2.14", "2.4", "21.4"],
      ["0.125 is equal to the fraction…", "1/8", "1/4", "1/5", "12/5"],
      ["The percentage that represents the whole is…", "100%", "50%", "10%", "1%"]
    ],
    g: [
      () => { const d = pick([2, 3, 4, 5, 6, 8]), a = r(1, d - 1), n = r(2, 9); return from(`${a}/${d} ÷ ${n} = ?`, frac(a, d * n), [frac(a * n, d), frac(a, d + n), frac(a + n, d * n), frac(a, d * n + 1)]); },
      () => { const d1 = pick([2, 3, 4, 5]), d2 = pick([2, 3, 4, 5]), a = r(1, d1 - 1), b = r(1, d2 - 1); return from(`${a}/${d1} × ${b}/${d2} = ?`, frac(a * b, d1 * d2), [frac(a + b, d1 + d2), frac(a * d2, b * d1), frac(a * b, d1 + d2), frac(a * b + 1, d1 * d2), frac(a + b, d1 * d2), frac(a * b, d1 * d2 + 1), `${a * b}/${d1 + d2}`]); },
      () => { const d = pick([3, 4, 5, 6, 8]), w = r(1, 3), n = r(1, d - 1), k = r(2, 4); return from(`${w} ${n}/${d} × ${k} = ?`, frac((w * d + n) * k, d), [frac(w * k * d + n, d), frac((w * d + n) * k + 1, d), frac(w * d + n * k, d), frac((w * d + n), d * k)]); },
      () => { const a = r(1001, 9999) / 1000, b = r(2, 9); return q(`${dec(a)} × ${b} = ?`, +(a * b).toFixed(3), [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const b = r(2, 9), c = r(1001, 9999) / 1000; return q(`${dec(b * c)} ÷ ${b} = ?`, c, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const p = pick([5, 12, 15, 20, 30, 35, 40, 60, 75, 80]), n = r(1, 30) * 20; return q(`${p}% of ${fmt(n)} = ?`, n * p / 100, [5, 10, 20, n / 10]); },
      () => { const n = r(2, 20) * 10, part = r(1, n / 10) * 5; return q(`${part} out of ${n} as a percentage is…`, +(part / n * 100).toFixed(1), [5, 10, 2.5], true, "", x => dec(x, 1) + "%"); },
      () => { const h = r(2, 30) * 10, p = pick([10, 20, 25, 50]); return q(`📈|The original price is RM${h}. The price goes up by ${p}%. What is the new price?`, h + h * p / 100, [h * p / 100, 10, 5], false, "", rm); }
    ] },
  { t: "Money",
    q: [
      ["Interest is…", "an extra payment on money saved or borrowed", "a price cut", "road tax", "the cost price"],
      ["A rebate is…", "money returned to the buyer", "tax", "the original price", "debt"],
      ["An invoice is a document that…", "lists the items and the amount to be paid", "proves that payment has been made", "is an identity card", "is a licence"],
      ["An example of an asset is…", "a house and savings", "credit card debt", "a car loan", "an unpaid electricity bill"],
      ["An example of a liability is…", "a loan that has not been paid", "bank savings", "your own house", "gold"]
    ],
    g: [
      () => { const k = r(50, 900), u = r(10, 300); return q(`🏷️|Cost price RM${k}, profit RM${u}. What is the selling price?`, k + u, [1, 10, u], false, "Selling price = cost price + profit", rm); },
      () => { const k = r(100, 900), p = pick([10, 20, 25, 50]); return q(`📈|The cost price is RM${k * 4}. The seller wants a ${p}% profit. What is the profit?`, k * 4 * p / 100, [10, 50, k], false, "", rm); },
      () => { const h = r(4, 60) * 10, p = pick([10, 15, 20, 25, 30, 40]); return q(`🛍️|The original price is RM${h}. There is a ${p}% discount. What is the price after the discount?`, h - h * p / 100, [h * p / 100, 10, 5], false, "", rm); },
      () => { const pk = r(2, 20) * 1000, p = pick([2, 3, 4, 5]), t = r(1, 3); return q(`🏦|RM${fmt(pk)} is saved at a simple interest rate of ${p}% per year. What is the interest after ${pl(t, "year")}?`, pk * p / 100 * t, [pk * p / 100, 100, 10], false, "Interest = savings × rate × years", rm); },
      () => { const items = [r(5, 40), r(5, 40), r(5, 40)], qty = [r(1, 5), r(1, 5), r(1, 5)]; const tot = items.reduce((s, x, i) => s + x * qty[i], 0); return q(`🧾 Invoice:\n${items.map((x, i) => `${qty[i]} × RM${x}`).join("\n")}|What is the total amount to be paid?`, tot, [1, 10, 5], false, "", rm); }
    ] },
  { t: "Time",
    q: [
      ["Malaysia is in the time zone…", "UTC+8", "UTC+7", "UTC+9", "UTC+5"],
      ["When it is 10:00 a.m. in Malaysia, the time in Thailand (UTC+7) is…", "9:00 a.m.", "11:00 a.m.", "10:00 a.m.", "8:00 a.m."],
      ["When it is 10:00 a.m. in Malaysia, the time in Japan (UTC+9) is…", "11:00 a.m.", "9:00 a.m.", "10:00 a.m.", "12:00 noon"],
      ["1 leap year = ___ days", "366", "365", "364", "360"]
    ],
    g: [
      () => { const h1 = r(6, 11), m1 = pick([0, 15, 30, 45]), d = r(2, 9), dm = pick([10, 20, 35, 50]); let m2 = m1 + dm, h2 = h1 + d + Math.floor(m2 / 60); m2 %= 60; const f = (h, m) => String(h).padStart(2, "0") + String(m).padStart(2, "0"); const right = `${f(h2, m2)}`; return from(`✈️|A plane takes off at ${f(h1, m1)} hours and the flight takes ${d} hours ${dm} minutes. At what time does the plane land?`, right + " hours", [f(h2 + 1, m2), f(h2, (m2 + 10) % 60), f(h2 - 1, m2), f(h1 + d, m1)].map(x => x + " hours")); },
      () => { const d = r(2, 5), h = r(1, 23); return q(`${d} days ${pl(h, "hour")} = ___ hours`, d * 24 + h, [24, 1, 10]); },
      () => { const m = r(2, 9), s = r(1, 59); return q(`${m} minutes ${pl(s, "second")} = ___ seconds`, m * 60 + s, [60, 10, 40]); },
      () => { const n = r(2, 6), h = r(1, 5), m = pick([10, 15, 20, 30, 40]); const tm = (h * 60 + m) * n; const right = hm(Math.floor(tm / 60), tm % 60); return from(`📚|Aina studies for ${hm(h, m)} every day. What is her total study time in ${n} days?`, right, [hm(h * n, m), hm(Math.floor(tm / 60) + 1, tm % 60), hm(h * n, m * n), hm(Math.floor(tm / 60), (tm % 60 + 10) % 60)]); }
    ] },
  { t: "Length, Mass and Volume of Liquid",
    q: [
      ["1/2 km = ___ m", "500", "50", "250", "5000"],
      ["3/4 kg = ___ g", "750", "75", "340", "7500"],
      ["1/4 litre = ___ ml", "250", "25", "400", "2500"]
    ],
    g: [
      () => { const x = r(101, 999) / 100; return q(`${dec(x, 2)} km = ___ m`, Math.round(x * 1000), [10, 100, 1000], false, "", fmt); },
      () => { const x = r(11, 99) / 10; return q(`${dec(x, 1)} kg = ___ g`, Math.round(x * 1000), [100, 1000, 10], false, "", fmt); },
      () => { const ml = r(1001, 9999); return q(`${fmt(ml)} ml = ___ l`, ml / 1000, [0.1, 1, 0.01], true, "", x => dec(x)); },
      () => { const n = pick([2, 4, 5, 8]), tot = n * r(120, 900); return q(`🧴|${fmt(tot)} ml of liquid soap is poured equally into ${n} bottles. What is the volume in each bottle?`, tot / n, [10, 100, 50], false, "", x => fmt(x) + " ml"); },
      () => { const a = r(11, 49) / 10, b = r(11, 39) / 10; return q(`🍚|Mother buys ${dec(a, 1)} kg of rice and ${dec(b, 1)} kg of sugar. What is the total mass in grams?`, Math.round((a + b) * 1000), [100, 1000, 10], false, "", x => fmt(x) + " g"); }
    ] },
  { t: "Space",
    q: [
      ["The distance from the centre of a circle to its circumference is called the…", "radius", "diameter", "circumference", "perimeter"],
      ["A straight line through the centre that touches two points on the circumference is called the…", "diameter", "radius", "tangent", "arc"],
      ["The diameter of a circle is ___ times the radius.", "2", "3", "4", "½"],
      ["The sum of angles on a straight line is…", "180°", "90°", "360°", "270°"],
      ["The sum of angles around a point is…", "360°", "180°", "90°", "270°"]
    ],
    g: [
      () => { const j = r(2, 30); return q(`The radius of a circle is ${j} cm. What is its diameter?`, 2 * j, [j, 1, 2], false, "Diameter = 2 × radius", x => x + " cm"); },
      () => { const d = r(2, 30) * 2; return q(`The diameter of a circle is ${d} cm. What is its radius?`, d / 2, [d / 2, 1, 2], false, "Radius = diameter ÷ 2", x => x + " cm"); },
      () => { const a = r(20, 160); return q(`Two angles are on a straight line. One angle is ${a}°. What is the other angle?`, 180 - a, [10, 20, 90], false, "Sum of angles on a straight line = 180°", x => x + "°"); },
      () => { const p = r(4, 20), l = r(2, 15), s = r(2, Math.min(p, l)); return q(`🟫|A rectangular plot of land is ${p} m × ${l} m. A ${s} m × ${s} m square is cut out. What is the remaining area?`, p * l - s * s, [s, p, 10], false, "", x => x + " m²"); },
      () => { const a = r(3, 12), b = r(3, 10), c = r(2, 10), s = r(2, 5); return q(`📦|A ${a} cm × ${b} cm × ${c} cm box and a ${s} cm × ${s} cm × ${s} cm cube. What is their total volume?`, a * b * c + s ** 3, [s ** 3, 10, a * b], false, "", x => x + " cm³"); }
    ] },
  { t: "Coordinates, Ratio and Proportion",
    q: [
      ["The ratio 6 : 9 in its simplest form is…", "2 : 3", "3 : 2", "6 : 3", "1 : 3"],
      ["If A : B = 1 : 2, then B is ___ times A.", "2", "½", "3", "1"]
    ],
    g: [
      () => { const a = r(2, 9), b = r(2, 9), k = r(2, 12); const g = gcd(a, b); const A = a * k, B = b * k; const right = `${a / g} : ${b / g}`; return from(`The ratio ${A} : ${B} in its simplest form is…`, right, [`${b / g} : ${a / g}`, `${A / k} : ${B}`, `${a / g + 1} : ${b / g}`, `${a / g} : ${(a + b) / g}`]); },
      () => { const a = r(1, 5), b = r(1, 5), k = r(3, 20); return q(`👫|The ratio of boys to girls is ${a} : ${b}. There are ${(a + b) * k} pupils altogether. How many girls are there?`, b * k, [k, a * k, b], false, "Divide the total into parts, then multiply."); },
      () => { const n = r(3, 9), h = r(3, 25), m = r(n + 2, 30); return q(`🧃|${n} boxes of juice cost RM${n * h}. What is the price of ${m} boxes?`, m * h, [h, n, 2], false, "Unitary method: find the price of 1 box first.", rm); },
      () => { const per = r(40, 110), t = r(2, 6); return q(`🚗|A car travels ${per * t} km in ${t} hours. How far does it travel in 1 hour at the same speed?`, per, [5, 10, t], false, "", x => x + " km"); },
      () => { const a = r(2, 4), b = r(2, 5), c = r(1, 3), k = r(3, 10); return q(`🍪|Biscuits, cakes and bread are sold in the ratio ${a} : ${b} : ${c}. If ${b * k} cakes are sold, how many biscuits are sold?`, a * k, [k, b * k, c * k]); }
    ] },
  { t: "Data Handling and Probability",
    q: [
      ["An event that will surely happen is said to be…", "certain", "impossible", "less likely", "equally likely"],
      ["The Sun rises in the west. This event is…", "impossible", "certain", "likely", "equally likely"],
      ["Tossing a coin and getting \"heads\" is…", "equally likely", "certain", "impossible", "more likely"],
      ["In a pie chart, the angle of the whole circle is…", "360°", "180°", "100°", "90°"],
      ["If half of a pie chart is red, the percentage of red is…", "50%", "25%", "100%", "75%"]
    ],
    g: [
      () => { const n = pick([4, 5]), avg = r(10, 80); const xs = []; let s = 0; for (let i = 0; i < n - 1; i++) { const v = avg + r(-9, 9); xs.push(v); s += v; } xs.push(avg * n - s); if (xs[n - 1] < 0) return null; return q(`Find the mean (average) of:\n${xs.join(", ")}`, avg, [1, 2, 5], false, `Total ${avg * n} ÷ ${n}`); },
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 4)]); return from(`Find the mode of:\n${xs.join(", ")}`, String(m), xs.filter(x => x !== m).map(String)); },
      () => { const xs = shuffle([...new Set(Array.from({ length: 12 }, () => r(1, 60)))]).slice(0, 5); if (xs.length < 5) return null; const s = xs.slice().sort((a, b) => a - b); return from(`Find the median of:\n${xs.join(", ")}`, String(s[2]), [s[1], s[3], xs[2], s[0], s[4]].map(String), `Arrange: ${s.join(", ")}`); },
      () => { const xs = Array.from({ length: 6 }, () => r(10, 99)); return q(`Find the range of:\n${xs.join(", ")}`, Math.max(...xs) - Math.min(...xs), [1, 10, 5]); },
      () => { const red = r(0, 6), blue = r(1, 6); const tot = red + blue; const right = red === 0 ? "impossible" : red === tot ? "certain" : red > blue ? "more likely" : red < blue ? "less likely" : "equally likely"; return from(`${"🔴".repeat(red)}${"🔵".repeat(blue)}|A marble is picked at random from this container. The chance of getting a red marble is…`, right, ["impossible", "certain", "more likely", "less likely", "equally likely"]); }
    ] }
],

sains: [
  { t: "Scientific Skills", q: [
    ["A testable statement about the relationship between variables is called a…", "hypothesis", "inference", "conclusion", "observation"],
    ["The correct steps of an experiment start with…", "identifying the problem", "making a conclusion", "drawing a graph", "writing a report"],
    ["The constant variable must be…", "kept the same", "changed", "ignored", "measured only"],
    ["Interpreting data means…", "explaining the pattern in the data", "collecting data", "throwing away data", "copying data"],
    ["Using space-time relationships includes describing…", "changes in an object's position over time", "an object's colour", "an object's smell", "an object's sound only"]
  ]},
  { t: "Humans", q: [
    ["Reproduction is important so that…", "humans can continue their generations", "humans grow faster", "humans do not get sick", "humans do not need to eat"],
    ["The male reproductive cell is called the…", "sperm", "ovum", "zygote", "embryo"],
    ["The female reproductive cell is called the…", "ovum", "sperm", "zygote", "nerve"],
    ["Fertilisation is the joining of…", "a sperm and an ovum", "two ova", "two sperms", "blood and bone"],
    ["A foetus develops in the…", "uterus (womb)", "stomach", "lungs", "heart"],
    ["A baby is usually born after about ___ months in the womb.", "9", "3", "6", "12"],
    ["The central nervous system consists of the brain and the…", "spinal cord", "heart", "lungs", "muscles"],
    ["The organ that controls all the body's activities is the…", "brain", "heart", "stomach", "kidneys"],
    ["Nerves that connect the central nervous system to other parts of the body are ___ nerves.", "peripheral", "spinal", "skull", "muscle"],
    ["A way to take care of the nervous system is…", "wearing a helmet when cycling", "taking drugs", "sleeping late every day", "drinking alcohol"],
    ["The backbone protects the…", "spinal cord", "heart", "lungs", "stomach"]
  ]},
  { t: "Microorganisms", q: [
    ["Microorganisms are organisms that are…", "very small and must be seen with a microscope", "very big", "not living", "only found in the sea"],
    ["The tool to see microorganisms is a…", "microscope", "telescope", "periscope", "thermometer"],
    ["Examples of microorganisms are bacteria, fungi, viruses, protozoa and…", "algae", "worms", "ants", "cockroaches"],
    ["🍞|Yeast is used to…", "make bread dough rise", "preserve fish", "clean water", "make plastic"],
    ["Useful bacteria are used to make…", "yoghurt", "plastic", "glass", "cement"],
    ["The flu is caused by a…", "virus", "yeast", "alga", "bread mould"],
    ["Malaria is spread by…", "mosquitoes", "flies", "cockroaches", "rats"],
    ["Microorganisms need water, food, air and a suitable ___ to live.", "temperature", "sound", "colour", "magnet"],
    ["Bread left for a long time will grow…", "mould (fungi)", "grass", "big moss", "oyster mushrooms"],
    ["Microorganisms help to decompose…", "dead plants and animals", "stones", "hard plastic", "iron"],
    ["A way to avoid infection by microorganisms is…", "washing hands with soap", "sharing toothbrushes", "eating stale food", "not bathing"]
  ]},
  { t: "Interactions Among Living Things", q: [
    ["Animals compete for food, mates and…", "territory", "television", "money", "cars"],
    ["Plants compete for light, water and…", "nutrients", "meat", "sound", "play areas"],
    ["Bees get nectar and flowers get pollinated. This is an example of…", "mutualism", "parasitism", "commensalism", "competition"],
    ["A remora fish gets the shark's leftover food without harming the shark. This is an example of…", "commensalism", "parasitism", "mutualism", "predation"],
    ["Fleas suck a dog's blood. This is an example of…", "parasitism", "mutualism", "commensalism", "competition"],
    ["A mistletoe plant absorbs food from its host tree. This is an example of…", "parasitism", "mutualism", "commensalism", "photosynthesis"],
    ["An orchid growing on another tree's branch without harming it is an example of…", "commensalism", "parasitism", "predation", "competition"],
    ["An animal that hunts other animals is called a…", "predator", "prey", "host", "parasite"],
    ["Seedlings planted too close together will…", "compete and grow less healthily", "grow more healthily", "not need water", "flower faster"]
  ]},
  { t: "Preservation and Conservation", q: [
    ["Animals whose numbers are decreasing and may become extinct are called ___ animals.", "endangered", "pet", "farm", "common wild"],
    ["An example of an endangered animal in Malaysia is the…", "Malayan tiger", "chicken", "cat", "cow"],
    ["🦧|Orang utans are mostly found in…", "Sabah and Sarawak", "Perlis", "Melaka", "Penang"],
    ["The Sepilok Orang Utan Rehabilitation Centre is in…", "Sabah", "Pahang", "Johor", "Kedah"],
    ["Among the causes of extinction are…", "habitat destruction and illegal hunting", "rain", "wind", "sunlight"],
    ["One way to conserve forests is…", "replanting trees", "burning forests", "cutting down all the trees", "throwing rubbish in the forest"],
    ["A protected area to take care of wildlife is a…", "national park", "supermarket", "factory", "highway"],
    ["Leatherback turtles are decreasing because…", "their eggs are taken and beaches are polluted", "there is too much food", "the sea is too clean", "the weather is cold"],
    ["The balance of nature must be maintained so that…", "all living things can continue to live", "forests run out quickly", "animals become extinct", "the air is polluted"]
  ]},
  { t: "Force", q: [
    ["A force is a push or a…", "pull", "blow", "light", "sound"],
    ["The SI unit of force is the…", "newton (N)", "metre (m)", "kilogram (kg)", "second (s)"],
    ["A force can change an object's…", "shape, direction and speed", "colour", "smell", "taste"],
    ["The force that opposes movement between two surfaces is called…", "friction", "gravity", "magnetism", "pressure"],
    ["Friction produces…", "heat", "blue light", "water", "magnets"],
    ["Car tyre treads ___ friction.", "increase", "reduce", "remove", "do not change"],
    ["Lubricating oil on a bicycle chain ___ friction.", "reduces", "increases", "produces", "blocks"],
    ["Ball bearings are used to…", "reduce friction", "increase friction", "produce light", "cool the engine"],
    ["🥤|We can suck a drink through a straw because of…", "air pressure", "friction", "magnets", "light"],
    ["A rubber suction cup can stick to a smooth wall because…", "the air pressure outside is higher", "there is glue", "there is a magnet", "the wall is hot"]
  ]},
  { t: "Speed", q: [
    ["Speed = ?", "distance ÷ time", "time ÷ distance", "distance × time", "distance + time"],
    ["The common unit of speed for vehicles is…", "km/h", "kg", "°C", "ml"],
    ["An object that moves farther in the same time is…", "faster", "slower", "heavier", "smaller"],
    ["A car travels 120 km in 2 hours. Its speed is…", "60 km/h", "120 km/h", "240 km/h", "30 km/h"],
    ["A runner runs 100 m in 20 seconds. His speed is…", "5 m/s", "20 m/s", "2 m/s", "10 m/s"],
    ["If the speed is 50 km/h and the time is 3 hours, the distance travelled is…", "150 km", "53 km", "17 km", "100 km"],
    ["🐆|The fastest land animal is the…", "cheetah", "tortoise", "snail", "elephant"]
  ]},
  { t: "Food Preservation Technology", q: [
    ["Food goes bad because of the action of…", "microorganisms", "moonlight", "sound", "magnets"],
    ["A sign of spoiled food is…", "a bad smell and sliminess", "a nice smell", "a bright colour", "a good taste"],
    ["Dried fish is preserved by…", "drying", "freezing", "pasteurisation", "canning"],
    ["🥚|Salted eggs are preserved by…", "salting", "sweetening", "smoking", "canning"],
    ["Pickled mangoes are preserved by…", "pickling (using vinegar)", "drying only", "pasteurisation", "irradiation"],
    ["Jam is made through…", "sweetening", "salting", "smoking", "drying"],
    ["🥛|Milk is heated to a certain temperature and then cooled quickly. This is called…", "pasteurisation", "salting", "canning", "pickling"],
    ["Smoked fish is preserved by…", "smoking", "sweetening", "canning", "freezing"],
    ["Sardines in a tin are preserved by…", "canning", "salting", "drying", "sweetening"],
    ["Food preservation aims to…", "keep food longer", "spoil food", "waste food", "add germs"]
  ]},
  { t: "Waste Materials", q: [
    ["Waste that can be broken down by microorganisms is called ___ material.", "biodegradable", "non-biodegradable", "toxic", "radioactive"],
    ["An example of a biodegradable material is…", "food waste", "a glass bottle", "a plastic bag", "an aluminium can"],
    ["An example of a non-biodegradable material is a…", "plastic bag", "banana peel", "dry leaf", "vegetable scrap"],
    ["Food waste and leaves can be made into…", "compost", "plastic", "glass", "iron"],
    ["The blue recycling bin is for…", "paper", "glass", "plastic", "food waste"],
    ["The brown recycling bin is for…", "glass", "paper", "plastic", "tins"],
    ["The orange recycling bin is for…", "plastic and aluminium cans", "paper", "glass", "food waste"],
    ["Throwing away rubbish wrongly can cause…", "pollution and flash floods", "clean air", "clear rivers", "fertile soil"],
    ["The 3R practice is reduce, reuse and…", "recycle", "burn", "throw away", "bury"]
  ]},
  { t: "Eclipses", q: [
    ["A lunar eclipse happens when the ___ is between the Sun and the Moon.", "Earth", "Mars", "Venus", "star"],
    ["A solar eclipse happens when the ___ is between the Sun and the Earth.", "Moon", "Mars", "Mercury", "cloud"],
    ["A lunar eclipse can only happen during the…", "full moon", "new moon", "crescent moon", "half moon"],
    ["A solar eclipse can only happen during the…", "new moon", "full moon", "half moon", "gibbous moon"],
    ["We must not look at a solar eclipse with our naked eyes because…", "it can damage our eyes", "the eclipse is cold", "the eclipse is too small", "eclipses do not exist"],
    ["During a total lunar eclipse, the Moon looks…", "reddish or dark", "brighter", "blue", "gone forever"],
    ["Muslims are encouraged to perform a special prayer during an eclipse. For a solar eclipse, the prayer is called…", "Kusuf", "Khusuf", "Duha", "Witir"]
  ]},
  { t: "Galaxies", q: [
    ["The galaxy where our Solar System is located is the…", "Milky Way", "Andromeda", "Orion", "Big Dipper"],
    ["A galaxy is made up of billions of…", "stars, gas and dust", "trees", "buildings", "cars"],
    ["The Sun is a…", "star", "planet", "moon", "comet"],
    ["The shape of the Milky Way galaxy is…", "spiral", "square", "triangular", "a flat oval"],
    ["The nearest large spiral galaxy to the Milky Way is…", "Andromeda", "the Southern Cross", "Scorpius", "Orion"],
    ["The tool that helps astronomers see galaxies is a…", "telescope", "microscope", "periscope", "small magnifying glass"]
  ]},
  { t: "Stability and Strength", q: [
    ["An object is more stable if its base is…", "wide", "narrow", "round", "tall"],
    ["An object is more stable if its centre of gravity is…", "low", "high", "on top", "missing"],
    ["🚧|A traffic cone is stable because it has a…", "wide, heavy base", "heavy top", "small base", "wheel"],
    ["The shape commonly used to strengthen bridge structures is the…", "triangle", "circle", "star", "heart"],
    ["The strength of a structure depends on the type of material and its…", "shape", "paint colour", "builder's name", "day it was built"],
    ["Tall buildings are built with deep foundations so that they are…", "stable and do not topple easily", "beautiful", "cheap", "finished quickly"],
    ["A four-legged chair is more stable than a one-legged chair because…", "its base of support is wider", "it is prettier", "it is lighter", "it is taller"]
  ]},
  { t: "Technology", q: [
    ["One advantage of technology is that it…", "makes communication easier", "increases pollution", "wastes time", "damages nature"],
    ["One disadvantage of technology if not used wisely is…", "gadget addiction", "easier work", "faster communication", "better treatment"],
    ["Technology in medicine helps to…", "treat patients more effectively", "spread diseases", "slow down treatment", "only add costs"],
    ["Using too many vehicles can cause…", "air pollution", "cleaner air", "more forests", "clearer water"],
    ["A way to use technology wisely is…", "limiting time on gadgets", "playing with gadgets all night", "sharing passwords", "visiting unsafe websites"],
    ["The development of communication technology: letters → telephones → …", "smartphones and the internet", "carrier pigeons", "smoke signals", "drums"]
  ]}
]
};
})();
