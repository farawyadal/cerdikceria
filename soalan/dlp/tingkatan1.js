/* =========================================================
   FORM 1 — Cerdik Ceria · DLP (English translation)
   Same chapters, order and generator logic as soalan/tingkatan1.js
   (generators run with the same seed so numbers match).
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

const N = n => n < 0 ? "−" + (-n) : String(n);
const P = n => n < 0 ? "(" + N(n) + ")" : String(n);
function qi(text, ans, offs, exp) {
  const s = new Set(); let t = 0;
  while (s.size < 3 && t < 80) { t++; const v = ans + pick(offs) * (Math.random() < .5 ? -1 : 1); if (v !== ans) s.add(v); }
  let k = 1; while (s.size < 3) { s.add(ans + k * 7); k++; }
  return [text, N(ans), ...[...s].map(N), exp || ""];
}
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a / gcd(a, b) * b;
const SETS = s => "{" + s.join(", ") + "}";
const TRIPLE = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15], [7, 24, 25], [12, 16, 20], [9, 40, 41]];

SOALAN["dlpm1"] = {
math: [
  { t: "Rational Numbers",
    q: [
      ["Integers are…", "positive and negative whole numbers and zero", "fractions only", "decimals only", "positive numbers only"],
      ["A temperature of 5°C below zero is written as…", "−5°C", "5°C", "+5°C", "0.5°C"],
      ["Which one is the smallest?", "−9", "−2", "0", "3"]
    ],
    g: [
      () => { const a = r(-20, 20), b = r(-20, 20); return qi(`${N(a)} + ${P(b)} = ?`, a + b, [1, 2, 2 * Math.abs(b) || 4]); },
      () => { const a = r(-20, 20), b = r(-20, 20); return qi(`${N(a)} − ${P(b)} = ?`, a - b, [1, 2, 2 * Math.abs(b) || 4]); },
      () => { const a = r(-12, 12) || 3, b = r(-9, 9) || -2; return qi(`${N(a)} × ${P(b)} = ?`, a * b, [1, 2 * Math.abs(a * b) || 6, Math.abs(a)], "Same signs → positive; different signs → negative."); },
      () => { const b = pick([-9, -6, -5, -4, -3, -2, 2, 3, 4, 5]), c = r(-12, 12) || 4; return qi(`${N(b * c)} ÷ ${P(b)} = ?`, c, [1, 2 * Math.abs(c) || 6, 2]); },
      () => { const xs = shuffle([r(-15, -1), r(-15, -1), r(1, 15), r(0, 15)]); if (new Set(xs).size < 4) return null; const asc = xs.slice().sort((a, b) => a - b); const by = a => a.map(N).join(", "); const negLast = asc.filter(x => x >= 0).concat(asc.filter(x => x < 0).sort((a, b) => b - a)); return from(`Arrange in ascending order:\n${by(xs)}`, by(asc), [by(asc.slice().reverse()), by(xs), by(negLast), by([asc[1], asc[0], asc[2], asc[3]]), by([asc[0], asc[2], asc[1], asc[3]]), by([asc[0], asc[1], asc[3], asc[2]])], "A negative number with a bigger value is smaller."); },
      () => { const t = r(-8, 5), d = r(3, 15); return qi(`🌡️|The temperature at night is ${N(t)}°C. During the day the temperature rises by ${d}°C. What is the daytime temperature (°C)?`, t + d, [1, 2, 2 * Math.abs(t) || 4]); }
    ] },
  { t: "Factors and Multiples",
    q: [
      ["The prime factors of 12 are…", "2 and 3", "1, 2, 3, 4, 6, 12", "4 and 3", "2 only"],
      ["The even prime number is…", "2", "4", "0", "1"]
    ],
    g: [
      () => { const g = r(2, 12), a = g * r(2, 9), b = g * r(2, 9); const h = gcd(a, b); return q(`The HCF (highest common factor) of ${a} and ${b} is…`, h, [h, 1, 2]); },
      () => { const a = r(2, 15), b = r(2, 15); return q(`The LCM (lowest common multiple) of ${a} and ${b} is…`, lcm(a, b), [a, b, lcm(a, b) / 2 || 2]); },
      () => { const n = r(12, 99); const fs = []; for (let i = 2; i < n; i++) if (n % i === 0) fs.push(i); if (!fs.length) return null; const f = pick(fs); const non = []; for (let i = 2; i < n; i++) if (n % i) non.push(i); return from(`Which one is a factor of ${n}?`, String(f), shuffle(non).slice(0, 6).map(String)); },
      () => { const a = r(3, 12), k = r(2, 12); const nonm = [a * k + 1, a * k - 1, a * k + 2, a * k + Math.ceil(a / 2)].filter(x => x % a); return from(`Which one is a multiple of ${a}?`, String(a * k), nonm.map(String)); },
      () => { const a = pick([4, 5, 6, 8]), b = pick([6, 9, 10, 12]); return q(`🚌|Bus A leaves every ${a} minutes and bus B every ${b} minutes. Both leave together at 7:00 a.m. After how many minutes will they leave together again?`, lcm(a, b), [a, b, a * b === lcm(a, b) ? a + b : a * b], false, "Find the LCM.", x => x + " minutes"); }
    ] },
  { t: "Squares, Square Roots, Cubes and Cube Roots",
    q: [
      ["A perfect square is…", "a number that is the result of n × n", "an even number", "a prime number", "an odd number"],
      ["√0 = ?", "0", "1", "none", "10"]
    ],
    g: [
      () => { const n = r(2, 20); return q(`${n}² = ?`, n * n, [n, 2 * n, 1, 10]); },
      () => { const n = r(2, 20); return q(`√${n * n} = ?`, n, [1, 2, n]); },
      () => { const n = r(2, 10); return q(`${n}³ = ?`, n ** 3, [n * n, 3 * n, n]); },
      () => { const n = r(2, 10); return q(`∛${n ** 3} = ?`, n, [1, 2, 3]); },
      () => { const a = r(2, 9), b = r(2, 6); return q(`${a}² + ${b}³ = ?`, a * a + b ** 3, [a, b, 2 * a, 3 * b]); },
      () => { const n = r(3, 15); return q(`🟩|The area of a square is ${n * n} cm². What is the length of its side?`, n, [1, 2, n], false, "Side = √area", x => x + " cm"); }
    ] },
  { t: "Ratios, Rates and Proportions",
    q: [
      ["A rate is a comparison of two quantities with…", "different units", "the same units", "no units", "the same numbers"],
      ["The ratio 15 : 25 in its simplest form is…", "3 : 5", "5 : 3", "15 : 5", "1 : 5"]
    ],
    g: [
      () => { const a = r(1, 9), b = r(1, 9), k = r(2, 15); if (a === b) return null; const g = gcd(a, b); const right = `${a / g} : ${b / g}`; return from(`The ratio ${a * k} : ${b * k} in its simplest form is…`, right, [`${b / g} : ${a / g}`, `${a * k / g} : ${b / g}`, `${a / g + 1} : ${b / g}`, `${a / g} : ${(a + b) / g}`, `${a / g} : ${b / g + 1}`, `${a / g * 2} : ${b / g}`]); },
      () => { const a = r(1, 5), b = r(1, 5), k = r(10, 60) * 2; return q(`💰|RM${(a + b) * k} is shared between Ali and Bala in the ratio ${a} : ${b}. How much is Bala's share?`, b * k, [k, a * k, 10], false, "", x => "RM" + x); },
      () => { const v = r(40, 110), t = r(2, 5); return q(`🚗|A car travels ${v * t} km in ${t} hours. What is its speed?`, v, [5, 10, t], false, "Speed = distance ÷ time", x => x + " km/h"); },
      () => { const n = r(3, 8), h = r(2, 9), m = r(n + 2, 20); return q(`📒|${n} notebooks cost RM${n * h}. What is the price of ${m} notebooks?`, m * h, [h, n, 2], false, "Unitary method.", x => "RM" + x); },
      () => { let a = r(2, 6), b = r(2, 6), c = r(2, 6); const k = r(2, 9); if (a === b && b === c) c = c === 6 ? 5 : c + 1; { const gd = (x, y) => y ? gd(y, x % y) : x, g = gd(gd(a, b), c); a /= g; b /= g; c /= g; } return q(`The ratio p : q : r = ${a} : ${b} : ${c}. If q = ${b * k}, find r.`, c * k, [k, b * k, c]); }
    ] },
  { t: "Algebraic Expressions",
    q: [
      ["In the term 5xy, the coefficient is…", "5", "x", "y", "xy"],
      ["A like term of 3ab is…", "−7ab", "3a", "3b", "3a²b"],
      ["The number of terms in 2x + 3y − 4 is…", "3", "2", "4", "1"]
    ],
    g: [
      () => { const a = r(2, 9), b = r(-9, 9) || 4, x = r(-5, 6); return qi(`The value of ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)} when x = ${N(x)} is…`, a * x + b, [1, a, 2 * Math.abs(b) || 3]); },
      () => { const a = r(2, 9), b = r(2, 9), c = r(2, a + b - 2); const k = a + b - c; const right = (k === 1 ? "" : k) + "x"; return from(`Simplify: ${a}x + ${b}x − ${c}x`, right, [`${a + b + c}x`, `${a + b}x`, `${k}x²`, `${Math.abs(a - b + c)}x`].filter(z => z !== right)); },
      () => { const a = r(2, 7), b = r(2, 7), c = r(2, 7), d = r(2, 7); const right = `${a + c}x + ${b + d}y`; return from(`Simplify: ${a}x + ${b}y + ${c}x + ${d}y`, right, [`${a + b}x + ${c + d}y`, `${a + b + c + d}xy`, `${a + c}x − ${b + d}y`, `${a * c}x + ${b * d}y`, `${a + c + 1}x + ${b + d}y`, `${a + c}x + ${b + d + 1}y`]); },
      () => { const a = r(2, 6), x = r(2, 6), y = r(2, 6); return q(`The value of ${a}xy when x = ${x} and y = ${y} is…`, a * x * y, [a, x * y, a + x + y]); }
    ] },
  { t: "Linear Equations",
    q: [
      ["A linear equation in one variable has a highest power of…", "1", "2", "3", "0"],
      ["Which one is a linear equation?", "2x + 5 = 11", "x² = 9", "x³ + 1 = 0", "xy = 4"]
    ],
    g: [
      () => { const x = r(-9, 12), a = r(2, 9), b = r(-15, 15); const c = a * x + b; return qi(`Solve: ${a}x${b ? ` ${b < 0 ? "−" : "+"} ${Math.abs(b)}` : ""} = ${N(c)}\nx = ?`, x, [1, 2, a]); },
      () => { const x = r(1, 15), b = r(1, 20); return qi(`Solve: x + ${b} = ${x + b}\nx = ?`, x, [1, b, 2]); },
      () => { const x = r(2, 12), d = r(2, 6); return qi(`Solve: x ÷ ${d} = ${x}\nx = ?`, x * d, [d, x, 1]); },
      () => { const x = r(5, 30); return q(`🧮|The sum of two consecutive numbers is ${2 * x + 1}. What is the smaller number?`, x, [1, 2, 3], false, "x + (x + 1) = sum"); },
      () => { const h = r(2, 9), n = r(3, 9), s = r(1, 20); return q(`🖊️|Ahmad buys ${n} pens and a file that costs RM${s}. The total payment is RM${n * h + s}. What is the price of one pen?`, h, [1, 2, n], false, `${n}x + ${s} = ${n * h + s}`, x => "RM" + x); }
    ] },
  { t: "Linear Inequalities",
    q: [
      ["The symbol \">\" means…", "greater than", "less than", "equal to", "not equal to"],
      ["The symbol \"≤\" means…", "less than or equal to", "greater than", "less than only", "not equal to"],
      ["If both sides of an inequality are multiplied by a negative number, the inequality symbol is…", "reversed", "unchanged", "removed", "changed to ="]
    ],
    g: [
      () => { const a = r(1, 15), c = r(a + 1, 30); const sym = pick([">", "<", "≥", "≤"]); const right = `x ${sym} ${c - a}`; const flip = { ">": "<", "<": ">", "≥": "≤", "≤": "≥" }[sym]; return from(`Solve: x + ${a} ${sym} ${c}`, right, [`x ${flip} ${c - a}`, `x ${sym} ${c + a}`, `x ${sym} ${a}`, `x = ${c - a}`]); },
      () => { const k = r(2, 6), v = r(2, 9); const sym = pick([">", "<"]); const right = `x ${sym} ${v}`; const flip = sym === ">" ? "<" : ">"; return from(`Solve: ${k}x ${sym} ${k * v}`, right, [`x ${flip} ${v}`, `x ${sym} ${k * v}`, `x ${sym} ${v + k}`, `x = ${v}`]); },
      () => { const k = r(2, 6), v = r(2, 9); const right = `x < ${N(-v)}`; return from(`Solve: −${k}x > ${k * v}`, right, [`x > ${N(-v)}`, `x > ${v}`, `x < ${v}`, `x = ${N(-v)}`], "Dividing by a negative number → reverse the symbol."); },
      () => { const v = r(2, 15); return from(`Which integer satisfies x > ${v}?`, String(v + 1 + r(0, 3)), [String(v), String(v - 1), String(v - 2), String(v - 3)]); }
    ] },
  { t: "Lines and Angles",
    q: [
      ["Two angles that add up to 90° are called ___ angles.", "complementary", "supplementary", "vertically opposite", "reflex"],
      ["Two angles that add up to 180° are called ___ angles.", "supplementary", "complementary", "right", "acute"],
      ["Vertically opposite angles are…", "equal", "added up to 90°", "added up to 360°", "always 90°"],
      ["A reflex angle is an angle between…", "180° and 360°", "90° and 180°", "0° and 90°", "exactly 180°"]
    ],
    g: [
      () => { const a = r(5, 85); return q(`The complement of ${a}° is…`, 90 - a, [10, 90, 180 - a - (90 - a) || 5], false, "", x => x + "°"); },
      () => { const a = r(5, 175); return q(`The supplement of ${a}° is…`, 180 - a, [10, 90, 20], false, "", x => x + "°"); },
      () => { const a = r(20, 160); return from(`Two straight lines intersect. One angle is ${a}°. Its vertically opposite angle is…`, `${a}°`, [`${180 - a}°`, `${360 - a}°`, `${a + 10}°`, `${a + 20}°`, `${Math.abs(90 - a) || 30}°`]); },
      () => { const a = r(60, 150), b = r(40, 300 - a - 20); const c = 360 - a - b; if (c <= 0) return null; return q(`Three angles around a point are ${a}°, ${b}° and x. Find x.`, c, [10, 20, 30], false, "Sum of angles around a point = 360°", z => z + "°"); },
      () => { const a = r(30, 150); return from(`Two parallel lines are cut by a transversal. One alternate angle is ${a}°. The other alternate angle is…`, `${a}°`, [`${180 - a}°`, `${360 - a}°`, `${a / 2}°`, `${a + 10}°`, `${a + 20}°`]); }
    ] },
  { t: "Basic Polygons",
    q: [
      ["Each interior angle of an equilateral triangle is…", "60°", "90°", "45°", "120°"],
      ["An isosceles triangle has ___ sides of equal length.", "2", "3", "0", "4"],
      ["A quadrilateral with only one pair of parallel sides is a…", "trapezium", "parallelogram", "rhombus", "square"],
      ["The diagonals of a square intersect at an angle of…", "90°", "45°", "60°", "180°"]
    ],
    g: [
      () => { const a = r(20, 100), b = r(20, 160 - a); return q(`Two angles in a triangle are ${a}° and ${b}°. Find the third angle.`, 180 - a - b, [10, 20, 5], false, "Sum of angles in a triangle = 180°", x => x + "°"); },
      () => { const n = pick([5, 6, 7, 8, 9, 10]); return q(`The sum of the interior angles of a ${n}-sided polygon is…`, (n - 2) * 180, [180, 90, 360], false, "(n − 2) × 180°", x => x + "°"); },
      () => { const n = pick([5, 6, 8, 9, 10, 12]); return q(`Each interior angle of a regular ${n}-sided polygon is…`, (n - 2) * 180 / n, [10, 20, 30], false, "(n − 2) × 180° ÷ n", x => x + "°"); },
      () => { const a = r(50, 130), b = r(50, 130), c = r(50, 330 - a - b > 50 ? 330 - a - b : 60); const d = 360 - a - b - c; if (d <= 10 || d >= 180) return null; return q(`Three angles in a quadrilateral are ${a}°, ${b}° and ${c}°. Find the fourth angle.`, d, [10, 20, 30], false, "Sum of angles in a quadrilateral = 360°", x => x + "°"); }
    ] },
  { t: "Perimeter and Area",
    q: [
      ["Area of a parallelogram = ?", "base × height", "½ × base × height", "length + width", "2 × (base + height)"],
      ["Area of a trapezium = ?", "½ × (sum of parallel sides) × height", "base × height", "length × width", "½ × base × height"],
      ["Area of a kite = ?", "½ × product of diagonals", "diagonal × diagonal", "side × side", "½ × base"]
    ],
    g: [
      () => { const b = r(3, 20), h = r(2, 15); return q(`The area of a parallelogram with a base of ${b} cm and a height of ${h} cm is…`, b * h, [b, h, b * h / 2 || 2], false, "", x => x + " cm²"); },
      () => { const a = r(2, 12), b = r(a + 1, 20), h = r(2, 12) * 2; return q(`The area of a trapezium with parallel sides of ${a} cm and ${b} cm and a height of ${h} cm is…`, (a + b) * h / 2, [h, a * h, 10], false, "½ × (a + b) × h", x => x + " cm²"); },
      () => { const b = r(2, 15) * 2, h = r(3, 20); return q(`The area of a triangle with a base of ${b} cm and a height of ${h} cm is…`, b * h / 2, [b * h / 2, b, h], false, "", x => x + " cm²"); },
      () => { const p = r(2, 12) * 2, q2 = r(3, 15); return q(`The area of a kite with diagonals of ${p} cm and ${q2} cm is…`, p * q2 / 2, [p * q2 / 2, p, q2], false, "", x => x + " cm²"); },
      () => { const a = r(3, 12), b = r(3, 12), c = r(3, 12), d = r(3, 12), e = r(3, 12); return q(`The perimeter of a pentagon with sides of ${a}, ${b}, ${c}, ${d} and ${e} cm is…`, a + b + c + d + e, [1, 2, a], false, "", x => x + " cm"); }
    ] },
  { t: "Introduction to Sets",
    q: [
      ["A set with no elements is called an…", "empty set", "universal set", "subset", "complement"],
      ["The symbol ∅ represents an…", "empty set", "universal set", "element", "subset"],
      ["The symbol ξ represents the…", "universal set", "empty set", "element", "complement"],
      ["The symbol \"∈\" means…", "is an element of", "is not an element of", "is a subset of", "is equal to"],
      ["Set A = {vowels}. n(A) = ?", "5", "26", "21", "4"]
    ],
    g: [
      () => { const A = [...new Set(Array.from({ length: r(4, 8) }, () => r(1, 30)))]; return q(`A = ${SETS(A)}\nn(A) = ?`, A.length, [1, 2]); },
      () => { const m = pick([2, 3, 4, 5]); const lim = r(15, 30); const A = []; for (let i = m; i <= lim; i += m) A.push(i); return q(`A = {multiples of ${m} less than or equal to ${lim}}\nn(A) = ?`, A.length, [1, 2]); },
      () => { const A = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 5).sort((a, b) => a - b); const notIn = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => !A.includes(x)); return from(`A = ${SETS(A)}\nWhich one is NOT an element of set A?`, String(pick(notIn)), A.map(String)); },
      () => { const A = shuffle([1, 2, 3, 4, 5, 6, 7, 8]).slice(0, r(1, 3)).sort((a, b) => a - b); return q(`The number of subsets of the set ${SETS(A)} is…`, 2 ** A.length, [1, 2, A.length], false, "Number of subsets = 2ⁿ"); }
    ] },
  { t: "Data Handling",
    q: [
      ["Data obtained by counting is ___ data.", "discrete", "continuous", "qualitative", "random"],
      ["Data such as height and mass is ___ data.", "continuous", "discrete", "categorical", "nominal"],
      ["Favourite colour is an example of ___ data.", "categorical (qualitative)", "discrete numerical", "continuous numerical", "quantitative"],
      ["A suitable chart to show changes in data over time is a…", "line graph", "pie chart", "pictograph", "Venn diagram"],
      ["A suitable chart to show parts of a whole is a…", "pie chart", "line graph", "histogram", "dot plot"]
    ],
    g: [
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 5)]); return from(`The mode of the data:\n${xs.join(", ")}`, String(m), xs.filter(x => x !== m).map(String)); },
      () => { const xs = Array.from({ length: 6 }, () => r(10, 90)); return q(`The range of the data:\n${xs.join(", ")}`, Math.max(...xs) - Math.min(...xs), [1, 10, 5]); },
      () => { const c = shuffle([3, 5, 6, 8, 10, 12]).slice(0, 4); const tot = c.reduce((a, b) => a + b, 0); const items = ["Football", "Badminton", "Netball", "Athletics"]; const k = r(0, 3); return q(`📊 Pupils' favourite sports:\n${items.map((x, i) => `${x}: ${c[i]}`).join("\n")}|How many pupils are there altogether?`, tot, [1, 2, 5]); }
    ] },
  { t: "The Pythagoras' Theorem",
    q: [
      ["The longest side of a right-angled triangle is called the…", "hypotenuse", "base", "height", "diagonal"],
      ["Pythagoras' theorem: c² = ?", "a² + b²", "a + b", "a² − b²", "2ab"],
      ["The set of numbers that forms a right-angled triangle is…", "3, 4, 5", "2, 3, 4", "4, 5, 6", "1, 2, 3"]
    ],
    g: [
      () => { const [a, b, c] = pick(TRIPLE), k = r(1, 3); return q(`📐|A right-angled triangle has sides of ${a * k} cm and ${b * k} cm. The length of the hypotenuse is…`, c * k, [1, 2, k], false, "c = √(a² + b²)", x => x + " cm"); },
      () => { const [a, b, c] = pick(TRIPLE), k = r(1, 3); return q(`📐|The hypotenuse is ${c * k} cm and one side is ${a * k} cm. The length of the other side is…`, b * k, [1, 2, k], false, "b = √(c² − a²)", x => x + " cm"); },
      () => { const [a, b, c] = pick(TRIPLE); const bad = [a, b, c + 1]; return from(`Which set forms a right-angled triangle?`, `${a}, ${b}, ${c}`, [`${bad.join(", ")}`, `${a + 1}, ${b}, ${c}`, `${a}, ${b + 2}, ${c}`, `${a}, ${b}, ${a + b}`]); },
      () => { const [a, b, c] = pick(TRIPLE); return q(`🪜|A ${c} m ladder leans against a wall. The foot of the ladder is ${a} m from the wall. How high up the wall does the ladder reach?`, b, [1, 2, a], false, "", x => x + " m"); }
    ] }
],

sains: [
  { t: "Introduction to Scientific Investigation", q: [
    ["The field of science that studies living things is…", "biology", "physics", "chemistry", "geology"],
    ["The field of science that studies substances and their reactions is…", "chemistry", "biology", "astronomy", "botany"],
    ["The field of science that studies stars and planets is…", "astronomy", "zoology", "chemistry", "meteorology"],
    ["The SI unit of mass is the…", "kilogram (kg)", "gram (g)", "newton (N)", "litre (l)"],
    ["The SI unit of temperature is the…", "kelvin (K)", "degree Celsius (°C)", "joule (J)", "watt (W)"],
    ["The SI unit of electric current is the…", "ampere (A)", "volt (V)", "ohm (Ω)", "watt (W)"],
    ["The prefix \"kilo\" means…", "1000", "100", "0.01", "0.001"],
    ["The prefix \"milli\" means…", "0.001", "0.01", "1000", "100"],
    ["A more accurate tool than a ruler to measure the outer diameter of a tube is a…", "vernier calliper", "measuring tape", "thermometer", "spring balance"],
    ["A hazard symbol with a flame means the substance is…", "flammable", "toxic", "corrosive", "radioactive"],
    ["A hazard symbol with a skull means the substance is…", "toxic (poisonous)", "flammable", "explosive", "irritant"],
    ["Density = ?", "mass ÷ volume", "volume ÷ mass", "mass × volume", "mass + volume"],
    ["The first step of the scientific method is…", "identifying the problem", "making a conclusion", "collecting data", "writing a report"],
    ["The apparatus used to heat substances in the lab is a…", "Bunsen burner", "measuring cylinder", "conical flask", "filter funnel"]
  ]},
  { t: "Cell as the Basic Unit of Life", q: [
    ["The basic unit of all living things is the…", "cell", "tissue", "organ", "atom"],
    ["An organism made of only one cell is called a ___ organism.", "unicellular", "multicellular", "vertebrate", "invertebrate"],
    ["An example of a unicellular organism is…", "Amoeba", "a cat", "a mango tree", "an oyster mushroom"],
    ["The part of the cell that controls all cell activities is the…", "nucleus", "cytoplasm", "vacuole", "cell wall"],
    ["Structures found in plant cells but NOT in animal cells are the…", "cell wall and chloroplasts", "nucleus", "cell membrane", "cytoplasm"],
    ["Chloroplasts contain chlorophyll for…", "photosynthesis", "respiration", "excretion", "reproduction"],
    ["The organelle that carries out cellular respiration is the…", "mitochondrion", "chloroplast", "nucleus", "vacuole"],
    ["The cell wall gives a plant cell…", "a fixed shape and support", "a green colour", "food", "energy"],
    ["The correct cell organisation is…", "cell → tissue → organ → system → organism", "tissue → cell → organ → system", "organ → cell → tissue → system", "system → organ → tissue → cell"],
    ["The tool used to see cells is a…", "microscope", "telescope", "periscope", "eyepiece only"],
    ["The products of photosynthesis are glucose and…", "oxygen", "carbon dioxide", "nitrogen", "salt water"],
    ["Cellular respiration produces energy, carbon dioxide and…", "water", "oxygen", "glucose", "chlorophyll"]
  ]},
  { t: "Coordination and Response", q: [
    ["Homeostasis is the process of maintaining…", "a stable internal environment in the body", "body weight only", "body height", "skin colour"],
    ["The normal human body temperature is about…", "37°C", "30°C", "40°C", "25°C"],
    ["When the body is hot, we will…", "sweat", "shiver", "get goosebumps", "have hair standing up"],
    ["When the body is too cold, we will…", "shiver", "sweat a lot", "drink cold water", "take off our clothes"],
    ["The organ that controls the water content in the body by producing urine is the…", "kidney", "heart", "lung", "liver"],
    ["On a hot day, the volume of urine is usually…", "less", "more", "the same", "none"],
    ["Plants control water loss by opening and closing their…", "stomata", "roots", "flowers", "seeds"],
    ["On a hot day, the stomata will ___ to reduce water loss.", "close", "open wide", "burst", "enlarge"],
    ["The system that receives stimuli and produces responses is the ___ system.", "nervous", "digestive", "excretory", "reproductive"],
    ["The central nervous system consists of the brain and the…", "spinal cord", "heart", "skin", "lungs"]
  ]},
  { t: "Reproduction", q: [
    ["Reproduction involving the fusion of male and female gametes is ___ reproduction.", "sexual", "asexual", "vegetative", "budding"],
    ["Amoeba reproduces by…", "binary fission", "budding", "spores", "seeds"],
    ["Yeast reproduces by…", "budding", "binary fission", "spores only", "regeneration"],
    ["Bread mould reproduces through…", "spores", "seeds", "budding", "binary fission"],
    ["A Planaria that is cut can grow into new individuals through…", "regeneration", "spores", "budding", "fertilisation"],
    ["The male part of a flower is the…", "stamen", "pistil", "petal", "sepal"],
    ["The female part of a flower is the…", "pistil", "stamen", "filament", "anther"],
    ["Pollen is produced by the…", "anther", "stigma", "ovary", "style"],
    ["The transfer of pollen from the anther to the stigma is called…", "pollination", "fertilisation", "germination", "dispersal"],
    ["After fertilisation, the ovary develops into a…", "fruit", "leaf", "root", "stem"],
    ["The male reproductive cell is called the…", "sperm", "ovum", "zygote", "embryo"],
    ["Fertilisation in humans usually takes place in the…", "Fallopian tube", "uterus", "vagina", "ovary"]
  ]},
  { t: "Matter", q: [
    ["Matter is something that has mass and…", "occupies space", "has colour", "has a smell", "moves"],
    ["Particles in a solid are arranged…", "closely and orderly", "far apart and freely", "loosely and disorderly", "without moving at all and without attraction"],
    ["Particles in a gas move…", "freely and quickly", "by vibrating in fixed places", "slowly and closely", "not at all"],
    ["Diffusion happens fastest in a…", "gas", "liquid", "solid", "vacuum"],
    ["The change from a solid directly into a gas is called…", "sublimation", "melting", "boiling", "condensation"],
    ["An example of a substance that undergoes sublimation is…", "dry ice", "salt", "sugar", "sand"],
    ["The melting point of ice is…", "0°C", "100°C", "−10°C", "37°C"],
    ["The boiling point of pure water at sea level is…", "100°C", "0°C", "50°C", "212°C"],
    ["When matter is heated, its particles will…", "move faster", "move slower", "stop", "become smaller"],
    ["The smell of perfume spreads throughout a room because of…", "diffusion", "condensation", "freezing", "melting"]
  ]},
  { t: "The Periodic Table", q: [
    ["A substance made of only one type of atom is called an…", "element", "compound", "mixture", "solution"],
    ["Water (H₂O) is an example of a…", "compound", "element", "mixture", "metal"],
    ["The symbol for oxygen is…", "O", "Ox", "Og", "Os"],
    ["The symbol for sodium is…", "Na", "N", "So", "Nt"],
    ["The symbol for iron is…", "Fe", "Fi", "Be", "Ir"],
    ["The symbol for copper is…", "Cu", "Co", "Kp", "C"],
    ["The symbol for gold is…", "Au", "Em", "Ag", "Go"],
    ["A vertical column in the Periodic Table is called a…", "group", "period", "row", "block"],
    ["A horizontal row in the Periodic Table is called a…", "period", "group", "column", "series"],
    ["A property of metals is that they are…", "shiny and conduct electricity", "brittle and dull", "electrical insulators", "non-conductors of heat"],
    ["The method to separate sand from water is…", "filtration", "distillation", "chromatography", "crystallisation"],
    ["The method to separate the dyes in ink is…", "chromatography", "filtration", "sieving", "using a magnet"],
    ["Air is an example of a…", "mixture", "element", "compound", "metal"]
  ]},
  { t: "Air", q: [
    ["The most abundant gas in air is…", "nitrogen", "oxygen", "carbon dioxide", "argon"],
    ["The percentage of oxygen in air is about…", "21%", "78%", "1%", "50%"],
    ["The percentage of nitrogen in air is about…", "78%", "21%", "0.03%", "50%"],
    ["The gas needed for combustion is…", "oxygen", "nitrogen", "argon", "helium"],
    ["The three requirements for combustion are fuel, heat and…", "oxygen", "water", "nitrogen", "light"],
    ["The gas that turns limewater cloudy is…", "carbon dioxide", "oxygen", "nitrogen", "hydrogen"],
    ["Plants take in carbon dioxide and release oxygen through…", "photosynthesis", "respiration", "combustion", "decay"],
    ["A poisonous gas produced by vehicle exhaust is…", "carbon monoxide", "oxygen", "nitrogen", "argon"],
    ["A substance that thins the ozone layer is…", "CFC (chlorofluorocarbon)", "oxygen", "water vapour", "nitrogen"],
    ["An increase in greenhouse gases causes…", "global warming", "an ice age", "cleaner air", "less rain only"],
    ["One way to reduce air pollution is…", "using public transport", "open burning of rubbish", "cutting down forests", "opening all factories"]
  ]},
  { t: "Light and Optics", q: [
    ["The image in a plane mirror is…", "upright, virtual and the same size", "inverted and real", "bigger", "smaller and real"],
    ["The image in a plane mirror is laterally inverted…", "(left-right)", "(top-bottom)", "(front-back)", "(not at all)"],
    ["In the reflection of light, the angle of incidence is ___ the angle of reflection.", "equal to", "bigger than", "smaller than", "twice"],
    ["The bending of light when it passes through different media is called…", "refraction", "reflection", "dispersion", "absorption"],
    ["A lens that converges light is a ___ lens.", "convex", "concave", "plane", "flat transparent"],
    ["A lens that diverges light is a ___ lens.", "concave", "convex", "magnifying", "camera"],
    ["A magnifying glass is a type of ___ lens.", "convex", "concave", "flat", "mirror"],
    ["A glass prism can disperse white light into…", "seven colours of the spectrum", "one colour", "black", "two colours"],
    ["An object looks red because it ___ red light.", "reflects", "absorbs", "produces", "refracts"],
    ["A periscope uses two plane mirrors to…", "see from a hidden place", "magnify objects", "converge light", "disperse light"],
    ["The human eye has a ___ lens.", "convex", "concave", "plane", "prism"]
  ]},
  { t: "The Earth", q: [
    ["The outermost layer of the Earth is the…", "crust", "mantle", "outer core", "inner core"],
    ["The hottest layer of the Earth is the…", "inner core", "crust", "mantle", "atmosphere"],
    ["Rock formed from cooled magma is ___ rock.", "igneous", "sedimentary", "metamorphic", "limestone"],
    ["Granite is an example of ___ rock.", "igneous", "sedimentary", "metamorphic", "fossil"],
    ["Limestone is an example of ___ rock.", "sedimentary", "igneous", "metamorphic", "magma"],
    ["Marble forms from limestone that undergoes heat and pressure. It is ___ rock.", "metamorphic", "igneous", "sedimentary", "lava"],
    ["Fossils are usually found in ___ rock.", "sedimentary", "igneous", "metamorphic", "magma"],
    ["An earthquake on the seabed can cause a…", "tsunami", "haze", "drought", "snow"],
    ["The part of the Earth made up of all its water is the…", "hydrosphere", "atmosphere", "lithosphere", "biosphere"],
    ["The layer of air surrounding the Earth is called the…", "atmosphere", "hydrosphere", "lithosphere", "mantle"],
    ["Water stored in the ground is called ___ water.", "underground", "surface", "sea", "acid rain"]
  ]}
]
};
})();
