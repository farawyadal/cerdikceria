/* =========================================================
   FORM 2 — Cerdik Ceria · DLP (English translation)
   Same chapters, order and generator logic as soalan/tingkatan2.js
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
const gcd = (a, b) => b ? gcd(Math.abs(b), Math.abs(a) % Math.abs(b)) : Math.abs(a);
function frac(n, d) { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; n /= g; d /= g; return d === 1 ? N(n) : `${N(n)}/${d}`; }
const sgn = (k, v) => (k < 0 ? " − " : " + ") + Math.abs(k) + v;
const lin = (a, b, v = "x") => (a === 1 ? "" : a === -1 ? "−" : N(a)) + v + (b ? sgn(b, "") : "");
const TRIPLE = [[3, 4, 5], [5, 12, 13], [6, 8, 10], [8, 15, 17], [9, 12, 15]];
function fromF(text, right, pool, more, exp) {
  const set = new Set(pool.map(String).filter(x => x !== String(right)));
  let t = 0; while (set.size < 3 && t < 100) { t++; const v = String(more()); if (v !== String(right)) set.add(v); }
  return from(text, right, [...set], exp);
}
const nz = (a, b) => { let v = 0; while (!v) v = r(a, b); return v; };
const pt = (x, y) => `(${N(x)}, ${N(y)})`;
const rndPt = () => pt(r(-8, 8), r(-8, 8));

SOALAN["dlpm2"] = {
math: [
  { t: "Patterns and Sequences",
    q: [
      ["The sequence 1, 1, 2, 3, 5, 8, … is known as the ___ sequence.", "Fibonacci", "Pascal", "prime number", "square number"],
      ["A triangular arrangement of numbers where each number is the sum of the two numbers above it is ___ Triangle.", "Pascal's", "Fibonacci's", "Pythagoras'", "an equilateral"]
    ],
    g: [
      () => { const a = r(-10, 20), d = pick([-5, -4, -3, -2, 2, 3, 4, 5, 6, 7]); const s = [0, 1, 2, 3].map(i => a + i * d); return qi(`The next term of the sequence:\n${s.map(N).join(", ")}, …`, a + 4 * d, [1, d, 2 * d], `The common difference is ${N(d)}.`); },
      () => { const a = pick([1, 2, 3, 5]), m = pick([2, 3]); const s = [0, 1, 2, 3].map(i => a * m ** i); return q(`The next term of the sequence:\n${s.join(", ")}, …`, a * m ** 4, [a * m ** 3, m, a], false, `Multiply by ${m} each time.`); },
      () => { const a = r(1, 10), d = r(2, 7), n = r(5, 20); return q(`Sequence ${a}, ${a + d}, ${a + 2 * d}, … Find term number ${n}.`, a + (n - 1) * d, [d, 1, a], false, "Tₙ = a + (n − 1)d"); },
      () => { const d = r(2, 9), c = r(-5, 10); const s = [1, 2, 3, 4].map(i => d * i + c); const right = lin(d, c, "n"); return from(`The expression for the nth term of the sequence ${s.join(", ")}, … is…`, right, [lin(d + 1, c, "n"), lin(d, c + d, "n"), lin(c || 1, d, "n"), lin(d, -c || 2, "n")].filter(z => z !== right)); }
    ] },
  { t: "Factorisation and Algebraic Fractions",
    q: [
      ["Expand: 3(x + 4)", "3x + 12", "3x + 4", "x + 12", "3x + 7"],
      ["Factorise: x² − 9", "(x + 3)(x − 3)", "(x − 3)²", "(x + 9)(x − 1)", "x(x − 9)"],
      ["Factorisation is the opposite process of…", "expansion", "division", "addition", "subtraction"]
    ],
    g: [
      () => { const a = r(-7, 7) || 2, b = r(-7, 7) || -3; const right = "x²" + (a + b ? sgn(a + b, "x") : "") + sgn(a * b, ""); const w = ["x²" + sgn(a * b, "x") + sgn(a + b || 1, ""), "x²" + sgn(a + b + 1, "x") + sgn(a * b, ""), "x²" + (a + b ? sgn(a + b, "x") : "") + sgn(a * b + (a * b > 0 ? 1 : -1) * 2, ""), "2x" + sgn(a + b || 1, "") ]; return from(`Expand: (x${sgn(a, "")})(x${sgn(b, "")})`, right, w.filter(z => z !== right)); },
      () => { const p = r(1, 8), q2 = r(1, 8); const right = `(x + ${p})(x + ${q2})`; return from(`Factorise: x² + ${p + q2}x + ${p * q2}`, right, [`(x − ${p})(x − ${q2})`, `(x + ${p * q2})(x + 1)`, `(x + ${p + q2})(x + 1)`, `(x + ${p})(x − ${q2})`, `(x − ${p})(x + ${q2})`, `(x + ${p + 1})(x + ${q2})`].filter(z => z !== right)); },
      () => { const k = r(2, 9), a = r(2, 9), b = r(1, 9); const g = gcd(a, b); const right = `${k * g}(${a / g}x + ${b / g})`; return from(`Factorise completely: ${k * a}x + ${k * b}`, right, [`${k}(${a}x + ${b + 1})`, `${k * a}(x + ${b})`, `x(${k * a} + ${k * b})`, `${k * g + 1}(${a / g}x + ${b / g})`]); },
      () => { const a = r(2, 9); const right = `(x + ${a})(x − ${a})`; return from(`Factorise: x² − ${a * a}`, right, [`(x − ${a})²`, `(x + ${a})²`, `(x + ${a * a})(x − 1)`, `x(x − ${a * a})`]); }
    ] },
  { t: "Algebraic Formulae",
    q: [
      ["In the formula A = pl, A is the…", "subject of the formula", "constant", "coefficient", "like term"],
      ["Make x the subject of the formula: y = x + 5", "x = y − 5", "x = y + 5", "x = 5y", "x = y ÷ 5"],
      ["Make r the subject of the formula: d = 2r", "r = d ÷ 2", "r = 2d", "r = d − 2", "r = d + 2"]
    ],
    g: [
      () => { const p = r(2, 20), l = r(2, 20); return q(`Given P = 2(p + l). Find P when p = ${p} and l = ${l}.`, 2 * (p + l), [p, l, 2]); },
      () => { const b = r(2, 12) * 2, h = r(2, 15); return q(`Given A = ½ × b × h. Find h when A = ${b * h / 2} and b = ${b}.`, h, [1, 2, b / 2]); },
      () => { const u = r(0, 20), a = r(1, 6), t = r(2, 10); return q(`Given v = u + at. Find v when u = ${u}, a = ${a} and t = ${t}.`, u + a * t, [a, t, u || 3]); },
      () => { const a = r(2, 9), right = `x = (y − ${a}) ÷ 2`; return from(`Make x the subject of the formula: y = 2x + ${a}`, right, [`x = (y + ${a}) ÷ 2`, `x = 2y − ${a}`, `x = y − ${a}`, `x = y ÷ 2 + ${a}`]); }
    ] },
  { t: "Polygons",
    q: [
      ["The sum of the exterior angles of any polygon is…", "360°", "180°", "540°", "720°"],
      ["Interior angle + exterior angle at one vertex of a polygon = ?", "180°", "90°", "360°", "270°"],
      ["A regular polygon has sides and angles that are…", "equal", "different", "curved", "missing"]
    ],
    g: [
      () => { const n = pick([5, 6, 8, 9, 10, 12, 15, 18, 20]); return q(`The exterior angle of a regular ${n}-sided polygon is…`, 360 / n, [10, 20, 360 / n], false, "360° ÷ n", x => x + "°"); },
      () => { const n = pick([5, 6, 8, 9, 10, 12, 15, 18, 20]); return q(`The exterior angle of a regular polygon is ${360 / n}°. How many sides does it have?`, n, [1, 2, 3], false, "n = 360° ÷ exterior angle"); },
      () => { const n = pick([5, 6, 8, 10, 12]); return q(`The interior angle of a regular ${n}-sided polygon is…`, 180 - 360 / n, [10, 20, 360 / n], false, "180° − exterior angle", x => x + "°"); },
      () => { const n = pick([4, 5, 6, 7, 8]); return q(`The number of diagonals of a ${n}-sided polygon is…`, n * (n - 3) / 2, [1, 2, n], false, "n(n − 3) ÷ 2"); }
    ] },
  { t: "Circles",
    q: [
      ["A straight line joining two points on the circumference of a circle is a…", "chord", "radius", "tangent", "arc"],
      ["A part of the circumference of a circle is called an…", "arc", "chord", "sector", "segment"],
      ["The region bounded by two radii and an arc is called a…", "sector", "segment", "chord", "diameter"],
      ["The commonly used value of π is 22/7 or…", "3.142", "3.0", "2.718", "1.414"]
    ],
    g: [
      () => { const r7 = 7 * r(1, 6); return q(`The circumference of a circle with a radius of ${r7} cm is… (π = 22/7)`, 2 * 22 * r7 / 7, [22, 44, r7], false, "Circumference = 2πr", x => x + " cm"); },
      () => { const r7 = 7 * r(1, 4); return q(`The area of a circle with a radius of ${r7} cm is… (π = 22/7)`, 22 * r7 * r7 / 7, [22, 44, 2 * 22 * r7 / 7], false, "Area = πr²", x => x + " cm²"); },
      () => { const d = 14 * r(1, 5); return q(`The diameter of a circle is ${d} cm. Its circumference is… (π = 22/7)`, 22 * d / 7, [22, 11, d], false, "Circumference = πd", x => x + " cm"); },
      () => { const L = 44 * r(1, 5); return q(`The circumference of a circle is ${L} cm. Its radius is… (π = 22/7)`, L * 7 / 44, [7, 14, 1], false, "r = circumference ÷ 2π", x => x + " cm"); }
    ] },
  { t: "Three-Dimensional Geometrical Shapes",
    q: [
      ["The number of flat faces of a cube is…", "6", "4", "8", "12"],
      ["The number of edges of a cuboid is…", "12", "8", "6", "10"],
      ["A triangular prism has ___ flat faces.", "5", "6", "4", "3"],
      ["A square-based pyramid has ___ vertices.", "5", "4", "6", "8"],
      ["A 3D shape with one vertex and one circular base is a…", "cone", "cylinder", "sphere", "pyramid"]
    ],
    g: [
      () => { const s = r(2, 12); return q(`The surface area of a cube with ${s} cm sides is…`, 6 * s * s, [s * s, 4 * s * s, s ** 3], false, "6 × side²", x => x + " cm²"); },
      () => { const j = 7 * r(1, 3), h = r(2, 15); return q(`The volume of a cylinder with a radius of ${j} cm and a height of ${h} cm is… (π = 22/7)`, 22 * j * j * h / 7, [22 * j * h / 7, 22 * j * j / 7, 1], false, "πr²h", x => fmt(x) + " cm³"); },
      () => { const t = r(2, 10) * 2, h = r(2, 10), L = r(3, 15); return q(`Triangular prism: triangle base ${t} cm, triangle height ${h} cm, prism length ${L} cm. Its volume is…`, t * h / 2 * L, [t * h * L, t * h / 2, L], false, "Cross-sectional area × length", x => fmt(x) + " cm³"); },
      () => { const s = r(3, 12) , h = r(3, 12); return q(`The volume of a pyramid with a square base of side ${s * 1} cm and a height of ${h * 3} cm is…`, s * s * h, [s * s * h * 3, s * s, 3], false, "⅓ × base area × height", x => fmt(x) + " cm³"); }
    ] },
  { t: "Coordinates",
    q: [
      ["The midpoint between (0, 0) and (4, 6) is…", "(2, 3)", "(4, 6)", "(8, 12)", "(3, 2)"],
      ["The distance between (0, 0) and (3, 4) is…", "5 units", "7 units", "1 unit", "12 units"]
    ],
    g: [
      () => { const x1 = r(-6, 6), y1 = r(-6, 6), dx = r(1, 4) * 2, dy = r(1, 4) * 2; const x2 = x1 + dx, y2 = y1 + dy; const right = `(${N((x1 + x2) / 2)}, ${N((y1 + y2) / 2)})`; return fromF(`The midpoint between (${N(x1)}, ${N(y1)}) and (${N(x2)}, ${N(y2)}) is…`, right, [`(${N(x2 - x1)}, ${N(y2 - y1)})`, `(${N(x1 + x2)}, ${N(y1 + y2)})`, `(${N((y1 + y2) / 2)}, ${N((x1 + x2) / 2)})`, `(${N((x1 + x2) / 2 + 1)}, ${N((y1 + y2) / 2)})`], rndPt); },
      () => { const [a, b, c] = pick(TRIPLE), x1 = r(-5, 5), y1 = r(-5, 5); return q(`The distance between (${N(x1)}, ${N(y1)}) and (${N(x1 + a)}, ${N(y1 + b)}) is…`, c, [1, 2, a], false, "√[(x₂ − x₁)² + (y₂ − y₁)²]", x => x + " units"); },
      () => { const x1 = r(-8, 8), y = r(-8, 8), d = r(2, 12); return q(`The distance between (${N(x1)}, ${N(y)}) and (${N(x1 + d)}, ${N(y)}) is…`, d, [1, 2, Math.abs(x1) || 3], false, "", x => x + " units"); }
    ] },
  { t: "Graphs of Functions",
    q: [
      ["A function is a relation where each object has ___ image.", "one", "two", "no", "many"],
      ["The graph of the function y = 2x + 1 is a…", "straight line", "curve", "circle", "parabola"],
      ["The graph of the function y = x² is a…", "curve (parabola)", "straight line", "circle", "zig-zag"]
    ],
    g: [
      () => { const a = r(-5, 5) || 2, b = r(-9, 9), x = r(-5, 5); return qi(`Given f(x) = ${lin(a, b)}. Find f(${N(x)}).`, a * x + b, [1, a, 2]); },
      () => { const x = r(-6, 6), c = r(-5, 5); return qi(`Given y = x²${c ? sgn(c, "") : ""}. Find y when x = ${N(x)}.`, x * x + c, [1, 2, 2 * Math.abs(x) || 3]); },
      () => { const a = r(2, 5), b = r(-6, 6); const y = r(-10, 15); if ((y - b) % a) return null; return qi(`Given y = ${lin(a, b)}. Find x when y = ${N(y)}.`, (y - b) / a, [1, 2, a]); }
    ] },
  { t: "Speed and Acceleration",
    q: [
      ["Speed = ?", "distance ÷ time", "time ÷ distance", "distance × time", "distance + time"],
      ["Acceleration is the rate of change of…", "speed", "distance", "time", "direction only"],
      ["Deceleration means the speed of an object…", "decreases", "increases", "is constant", "is zero"],
      ["The correct unit of acceleration is…", "m/s²", "m/s", "km", "s"]
    ],
    g: [
      () => { const v = r(40, 110), t = r(2, 5); return q(`🚌|A bus travels ${v * t} km in ${t} hours. Its average speed is…`, v, [5, 10, t], false, "", x => x + " km/h"); },
      () => { const v = r(4, 30), t = r(5, 60); return q(`🏃|An object moves at a speed of ${v} m/s for ${t} s. The distance travelled is…`, v * t, [v, t, 10], false, "Distance = speed × time", x => x + " m"); },
      () => { const u = r(0, 10), a = r(1, 6), t = r(2, 10); return q(`🚗|A car accelerates from ${u} m/s to ${u + a * t} m/s in ${t} s. Its acceleration is…`, a, [1, 2, t], false, "(v − u) ÷ t", x => x + " m/s²"); },
      () => { const t1 = r(2, 5), t2 = r(2, 5), v = r(30, 90); const d1 = r(1, v * t1 - 1) , d2 = v * (t1 + t2) - d1; if (d2 <= 0) return null; return q(`🚗|A car travels ${d1} km in ${t1} hours, then ${d2} km in ${t2} hours. Its average speed is…`, v, [5, 10, 2], false, "Total distance ÷ total time", x => x + " km/h"); }
    ] },
  { t: "Gradient of a Straight Line",
    q: [
      ["The gradient of a horizontal line is…", "0", "1", "undefined", "−1"],
      ["The gradient of a vertical line is…", "undefined", "0", "1", "−1"],
      ["A line that slopes up to the right has a ___ gradient.", "positive", "negative", "zero", "undefined"]
    ],
    g: [
      () => { const m = pick([-4, -3, -2, -1, 1, 2, 3, 4]), x1 = r(-5, 5), y1 = r(-5, 5), dx = r(1, 4); return qi(`The gradient of the line passing through (${N(x1)}, ${N(y1)}) and (${N(x1 + dx)}, ${N(y1 + m * dx)}) is…`, m, [1, 2, 2 * m], "m = (y₂ − y₁) ÷ (x₂ − x₁)"); },
      () => { const m = pick([2, 3, 4, 5]), dx = r(2, 6); return q(`The vertical distance is ${m * dx} units and the horizontal distance is ${dx} units. The gradient is…`, m, [1, 2, dx], false, "vertical distance ÷ horizontal distance"); },
      () => { const m = nz(-5, 5), c = nz(-9, 9); if (Math.abs(m) === Math.abs(c)) return null; const right = `y-intercept = ${N(c)}`; return fromF(`The line y = ${lin(m, c)} has…`, right, [`y-intercept = ${N(m)}`, `gradient = ${N(c)}`, `y-intercept = ${N(-c)}`, `gradient = ${N(-m)}`], () => `y-intercept = ${N(nz(-9, 9))}`); }
    ] },
  { t: "Isometric Transformations",
    q: [
      ["A transformation that keeps the shape and size of an object is called an ___ transformation.", "isometric", "enlargement", "shear", "stretch"],
      ["Translation, reflection and rotation are examples of ___ transformations.", "isometric", "enlargement", "stretch", "non-isometric"],
      ["The image of a reflection is ___ to the object.", "congruent", "bigger", "smaller", "not equal"]
    ],
    g: [
      () => { const x = nz(-6, 6), y = nz(-6, 6), a = nz(-5, 5), b = nz(-5, 5); const right = `(${N(x + a)}, ${N(y + b)})`; return fromF(`The point (${N(x)}, ${N(y)}) is translated by the vector (${N(a)}, ${N(b)}). Its image is…`, right, [`(${N(x - a)}, ${N(y - b)})`, `(${N(x + b)}, ${N(y + a)})`, `(${N(a)}, ${N(b)})`, `(${N(x + a)}, ${N(y - b)})`], rndPt); },
      () => { const x = nz(-6, 6), y = nz(-6, 6); const right = `(${N(x)}, ${N(-y)})`; return fromF(`A reflection of the point (${N(x)}, ${N(y)}) in the x-axis gives the image…`, right, [`(${N(-x)}, ${N(y)})`, `(${N(-x)}, ${N(-y)})`, `(${N(y)}, ${N(x)})`], rndPt); },
      () => { const x = nz(-6, 6), y = nz(-6, 6); const right = `(${N(-x)}, ${N(y)})`; return fromF(`A reflection of the point (${N(x)}, ${N(y)}) in the y-axis gives the image…`, right, [`(${N(x)}, ${N(-y)})`, `(${N(-x)}, ${N(-y)})`, `(${N(y)}, ${N(x)})`], rndPt); },
      () => { const x = nz(-6, 6), y = nz(-6, 6); const right = `(${N(-x)}, ${N(-y)})`; return fromF(`A 180° rotation of the point (${N(x)}, ${N(y)}) about the origin gives the image…`, right, [`(${N(x)}, ${N(-y)})`, `(${N(-x)}, ${N(y)})`, `(${N(y)}, ${N(x)})`], rndPt); }
    ] },
  { t: "Measures of Central Tendencies",
    q: [
      ["The mean is…", "total of values ÷ number of values", "the most frequent value", "the middle value", "biggest value − smallest value"],
      ["The median is the ___ value after the data is arranged.", "middle", "most frequent", "biggest", "smallest"],
      ["The mode is the value that…", "appears most often", "is in the middle", "is the average", "is the biggest"]
    ],
    g: [
      () => { const n = pick([4, 5]), avg = r(10, 80); const xs = []; let s = 0; for (let i = 0; i < n - 1; i++) { const v = avg + r(-9, 9); xs.push(v); s += v; } xs.push(avg * n - s); if (xs[n - 1] < 0) return null; return q(`The mean of the data:\n${xs.join(", ")}`, avg, [1, 2, 5], false, `Total ${avg * n} ÷ ${n}`); },
      () => { const xs = shuffle([...new Set(Array.from({ length: 14 }, () => r(1, 60)))]).slice(0, 6); if (xs.length < 6) return null; const s = xs.slice().sort((a, b) => a - b); if ((s[2] + s[3]) % 2) return null; const med = (s[2] + s[3]) / 2; return q(`The median of the data:\n${xs.join(", ")}`, med, [1, 2, 5], false, `Arrange: ${s.join(", ")}. Average of the two middle values.`); },
      () => { const m = r(1, 9); const xs = shuffle([m, m, m, ...shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9].filter(x => x !== m)).slice(0, 5)]); return from(`The mode of the data:\n${xs.join(", ")}`, String(m), xs.filter(x => x !== m).map(String)); }
    ] },
  { t: "Simple Probability",
    q: [
      ["The probability of an event is between…", "0 and 1", "1 and 10", "−1 and 1", "0 and 100"],
      ["The probability of a certain event is…", "1", "0", "½", "100"],
      ["The probability of an impossible event is…", "0", "1", "½", "−1"],
      ["🪙|The probability of getting \"heads\" when tossing a coin is…", "1/2", "1/4", "1", "0"]
    ],
    g: [
      () => { const k = r(1, 5); return fromF(`🎲|A die is rolled. The probability of getting a number greater than ${k} is…`, frac(6 - k, 6), [frac(k, 6), frac(6 - k + 1, 6), frac(1, 6), frac(6 - k, 5)], () => frac(r(1, 5), 6)); },
      () => { const red = r(2, 8), blue = r(1, 8), grn = r(2, 8); const tot = red + blue + grn; return fromF(`${"🔴".repeat(red)}${"🔵".repeat(blue)}${"🟢".repeat(grn)}|A marble is picked at random. The probability of getting a blue marble is…`, frac(blue, tot), [frac(red, tot), frac(grn, tot), frac(blue, tot - blue || 1), frac(1, tot)], () => frac(r(1, tot - 1), tot)); },
      () => { const n = r(20, 40), k = r(2, 10); return fromF(`A box contains ${n} cards numbered 1 to ${n}. The probability of getting a card that is a multiple of ${k} is…`, frac(Math.floor(n / k), n), [frac(Math.floor(n / k) + 1, n), frac(k, n), frac(1, k + 1), frac(Math.floor(n / k), n - 1)], () => frac(r(1, n - 1), n)); }
    ] }
],

sains: [
  { t: "Biodiversity", q: [
    ["Biodiversity means…", "the variety of living organisms", "one type of animal", "urban areas", "the water cycle"],
    ["Animals with a backbone are called…", "vertebrates", "invertebrates", "mammals only", "insects"],
    ["An example of an invertebrate is a…", "butterfly", "fish", "frog", "bird"],
    ["Mammals are animals that…", "feed their young with milk and have hair", "lay eggs and have scales", "breathe with gills", "have feathers"],
    ["Frogs belong to the group…", "amphibians", "reptiles", "mammals", "fish"],
    ["Snakes belong to the group…", "reptiles", "amphibians", "mammals", "birds"],
    ["Birds belong to the group…", "aves (birds)", "reptiles", "amphibians", "mammals"],
    ["Flowering plants whose seeds have one cotyledon are called…", "monocotyledons", "dicotyledons", "ferns", "mosses"],
    ["An example of a monocotyledon is…", "paddy", "beans", "mango", "rambutan"],
    ["A dichotomous key is used to…", "classify organisms", "count the number of animals", "measure temperature", "draw maps"]
  ]},
  { t: "Ecosystem", q: [
    ["An ecosystem consists of living (biotic) components and ___ components.", "abiotic", "photosynthetic", "population", "habitat"],
    ["Examples of abiotic components are…", "light, water and temperature", "trees", "birds", "fungi"],
    ["Organisms that make their own food are called…", "producers", "consumers", "decomposers", "predators"],
    ["Organisms that break down dead organic matter are…", "decomposers (bacteria and fungi)", "producers", "primary consumers", "herbivores"],
    ["A group of organisms of the same species in one area is called a…", "population", "community", "ecosystem", "habitat"],
    ["All populations living together in one area are called a…", "community", "population", "species", "biosphere"],
    ["The relationship between a remora fish and a shark is an example of…", "commensalism", "parasitism", "mutualism", "predation"],
    ["The relationship between bees and flowers is an example of…", "mutualism", "parasitism", "commensalism", "competition"],
    ["Energy in an ecosystem starts from the…", "Sun", "decomposers", "water", "soil"],
    ["Widespread deforestation can cause…", "an imbalance in the ecosystem", "more biodiversity", "cleaner air", "fewer floods"]
  ]},
  { t: "Nutrition", q: [
    ["The seven classes of food are carbohydrates, proteins, fats, vitamins, minerals, fibre and…", "water", "sugar", "salt", "oil"],
    ["The iodine test is used to detect…", "starch", "protein", "fat", "glucose"],
    ["Iodine solution turns ___ if starch is present.", "dark blue", "brick red", "purple", "yellow"],
    ["Benedict's test is used to detect…", "reducing sugar (glucose)", "starch", "fat", "protein"],
    ["Millon's test is used to detect…", "protein", "fat", "starch", "vitamins"],
    ["A lack of vitamin C can cause…", "scurvy", "night blindness", "rickets", "beriberi"],
    ["A lack of vitamin A can cause…", "night blindness", "scurvy", "anaemia", "goitre"],
    ["A lack of iron can cause…", "anaemia", "goitre", "scurvy", "rickets"],
    ["The digestion of protein starts in the…", "stomach", "mouth", "large intestine", "oesophagus"],
    ["The end product of carbohydrate digestion is…", "glucose", "amino acids", "fatty acids", "glycerol only"],
    ["The absorption of digested food takes place in the…", "small intestine", "stomach", "large intestine", "mouth"]
  ]},
  { t: "Human Health", q: [
    ["A disease that can spread from one person to another is called an ___ disease.", "infectious", "non-infectious", "hereditary", "only chronic"],
    ["An example of a non-infectious disease is…", "diabetes", "the flu", "COVID-19", "dengue"],
    ["Dengue is spread by the ___ mosquito.", "Aedes", "Anopheles", "Culex", "fly"],
    ["Malaria is spread by the ___ mosquito.", "Anopheles", "Aedes", "Culex", "cockroach"],
    ["Immunisation aims to…", "give the body immunity", "cure all diseases", "increase body weight", "reduce appetite"],
    ["Antibodies are produced by…", "white blood cells", "red blood cells", "plasma", "platelets"],
    ["Antibiotics are used to treat ___ infections.", "bacterial", "viral", "fungal only", "allergy"],
    ["A step to prevent dengue is…", "destroying mosquito breeding sites", "keeping stagnant water", "leaving drains blocked", "throwing tyres outside"],
    ["The best way to prevent the spread of germs is…", "washing hands with soap", "sharing cups", "not bathing", "sneezing without covering your mouth"]
  ]},
  { t: "Water and Solutions", q: [
    ["The chemical formula of water is…", "H₂O", "CO₂", "O₂", "NaCl"],
    ["Water is made up of the elements hydrogen and…", "oxygen", "carbon", "nitrogen", "sodium"],
    ["The boiling point of pure water is…", "100°C", "0°C", "50°C", "37°C"],
    ["The substance that dissolves is called the…", "solute", "solvent", "solution", "suspension"],
    ["Water is often called the ___ solvent.", "universal", "organic", "solid", "limited"],
    ["A solution that cannot dissolve any more solute at a certain temperature is a ___ solution.", "saturated", "dilute", "concentrated", "unsaturated"],
    ["The solubility of sugar in water increases when the water temperature…", "increases", "decreases", "does not change", "freezes"],
    ["Treating water by boiling it aims to…", "kill germs", "add salt", "remove colour only", "cool the water"],
    ["Water purification at a treatment plant includes sedimentation, filtration and…", "chlorination", "alcohol distillation", "burning", "freezing"],
    ["Water evaporates fastest when it is…", "hot and windy", "cold", "humid", "not windy"]
  ]},
  { t: "Acids and Alkalis", q: [
    ["Acids turn blue litmus paper…", "red", "blue", "green", "yellow"],
    ["Alkalis turn red litmus paper…", "blue", "red", "white", "black"],
    ["The pH value of a neutral substance is…", "7", "1", "14", "0"],
    ["A substance with a pH less than 7 is an…", "acid", "alkali", "neutral substance", "salt only"],
    ["A substance with a pH more than 7 is an…", "alkali", "acid", "neutral substance", "pure water"],
    ["The reaction between an acid and an alkali is called…", "neutralisation", "rusting", "combustion", "evaporation"],
    ["The products of neutralisation are salt and…", "water", "oxygen", "carbon dioxide only", "hydrogen"],
    ["Gastric medicine contains an ___ substance to neutralise excess acid in the stomach.", "alkaline", "acidic", "sugary", "salty"],
    ["An example of an acid in daily life is…", "vinegar", "soap", "toothpaste", "limewater"],
    ["Acidic soil can be neutralised by adding…", "lime", "vinegar", "table salt", "sugar"]
  ]},
  { t: "Electricity and Magnetism", q: [
    ["The unit of electric current is the…", "ampere (A)", "volt (V)", "ohm (Ω)", "watt (W)"],
    ["The unit of voltage is the…", "volt (V)", "ampere (A)", "ohm (Ω)", "joule (J)"],
    ["The unit of resistance is the…", "ohm (Ω)", "volt (V)", "ampere (A)", "newton (N)"],
    ["Ohm's law: V = ?", "IR", "I ÷ R", "R ÷ I", "I + R"],
    ["The instrument to measure electric current is an…", "ammeter", "voltmeter", "thermometer", "barometer"],
    ["The instrument to measure voltage is a…", "voltmeter", "ammeter", "ohm meter only", "compass"],
    ["In a parallel circuit, the voltage across each resistor is…", "the same", "different", "zero", "doubled"],
    ["In a series circuit, the current flowing is…", "the same at all points", "different", "zero", "increasing"],
    ["Like poles of magnets will…", "repel", "attract", "do nothing", "glow"],
    ["An electromagnet is a magnet produced by…", "an electric current in a coil", "a natural magnetic stone", "rubber", "plastic"]
  ]},
  { t: "Force and Motion", q: [
    ["The SI unit of force is the…", "newton (N)", "joule (J)", "watt (W)", "pascal (Pa)"],
    ["Weight is the ___ force acting on an object.", "gravitational", "frictional", "buoyant", "elastic"],
    ["Mass is measured in…", "kilograms", "newtons", "metres", "seconds"],
    ["Moment of a force = ?", "force × perpendicular distance from the pivot", "force ÷ distance", "mass × acceleration", "force + distance"],
    ["The principle stating that pressure in a liquid is transmitted equally in all directions is ___ principle.", "Pascal's", "Archimedes'", "Bernoulli's", "Newton's"],
    ["Hydraulic car brakes use ___ principle.", "Pascal's", "Archimedes'", "Bernoulli's", "Hooke's"],
    ["Pressure = ?", "force ÷ area", "force × area", "area ÷ force", "mass × area"],
    ["A sharp knife cuts more easily because…", "a small surface area produces high pressure", "the knife is heavy", "there is less friction", "the knife is long"]
  ]},
  { t: "Heat", q: [
    ["Heat flows from a ___ area to a ___ area.", "hot to cold", "cold to hot", "top to bottom", "left to right"],
    ["Heat transfer through solids is called…", "conduction", "convection", "radiation", "evaporation"],
    ["Heat transfer through liquids and gases is called…", "convection", "conduction", "radiation", "reflection"],
    ["Heat from the Sun reaches the Earth through…", "radiation", "conduction", "convection", "reflection"],
    ["Sea breezes happen during the…", "day", "night", "dawn", "midnight only"],
    ["Dull black surfaces are good ___ of heat.", "absorbers and emitters", "reflectors", "insulators", "conductors"],
    ["Shiny white surfaces are good ___ of heat.", "reflectors", "absorbers", "emitters", "conductors"],
    ["A vacuum flask reduces heat transfer by using…", "a vacuum and shiny surfaces", "thick metal", "black surfaces", "air holes"],
    ["When heated, most materials will…", "expand", "contract", "freeze", "sink"]
  ]},
  { t: "Sound Waves", q: [
    ["Sound is produced by objects that…", "vibrate", "are still", "are cold", "are coloured"],
    ["Sound cannot travel through a…", "vacuum", "air", "water", "steel"],
    ["Sound travels fastest through…", "solids", "liquids", "gases", "a vacuum"],
    ["The reflection of sound is called an…", "echo", "refraction", "resonance", "frequency"],
    ["The loudness of sound depends on the…", "amplitude", "frequency", "wavelength only", "colour"],
    ["The pitch of sound depends on the…", "frequency", "amplitude", "mass", "temperature only"],
    ["The unit of frequency is the…", "hertz (Hz)", "decibel (dB)", "metre (m)", "second (s)"],
    ["The unit of loudness of sound is the…", "decibel (dB)", "hertz (Hz)", "watt (W)", "newton (N)"],
    ["The human hearing range is about…", "20 Hz to 20 000 Hz", "1 Hz to 10 Hz", "50 000 Hz and above", "0 Hz"],
    ["Bats and dolphins use ___ sound to detect objects.", "ultrasonic", "infrasonic", "audible only", "electric"]
  ]},
  { t: "Stars and Galaxies in the Universe", q: [
    ["The galaxy where the Solar System is located is the…", "Milky Way", "Andromeda", "Magellan", "Orion"],
    ["The nearest star to the Earth is the…", "Sun", "Sirius", "Polaris", "Proxima Centauri"],
    ["Stars form from clouds of gas and dust called a…", "nebula", "comet", "asteroid", "meteor"],
    ["A very massive star can end up as a…", "black hole", "planet", "asteroid", "comet"],
    ["The colour of a star shows its…", "surface temperature", "distance only", "age only", "shape"],
    ["Blue stars are ___ than red stars.", "hotter", "colder", "smaller", "older"],
    ["The distance between stars is measured in…", "light years", "kilometres only", "metres", "hours"],
    ["A light year is a measure of…", "distance", "time", "mass", "temperature"]
  ]},
  { t: "The Solar System", q: [
    ["The number of planets in the Solar System is…", "8", "9", "7", "10"],
    ["The biggest planet is…", "Jupiter", "Saturn", "Earth", "Neptune"],
    ["The planet nearest to the Sun is…", "Mercury", "Venus", "Earth", "Mars"],
    ["The hottest planet is…", "Venus", "Mercury", "Mars", "Jupiter"],
    ["The gas giant planets include Jupiter, Saturn, Uranus and…", "Neptune", "Mars", "Earth", "Mercury"],
    ["The terrestrial (rocky) planets include Mercury, Venus, Earth and…", "Mars", "Jupiter", "Saturn", "Neptune"],
    ["The Earth takes ___ to revolve around the Sun.", "365¼ days", "24 hours", "30 days", "12 lunar months"],
    ["The Sun's gravity causes the planets to…", "revolve in orbits", "stop", "break apart", "shine on their own"]
  ]},
  { t: "Meteoroids, Asteroids and Comets", q: [
    ["Rocky bodies that orbit the Sun, mostly between Mars and Jupiter, are…", "asteroids", "comets", "meteors", "stars"],
    ["The region between Mars and Jupiter that has many asteroids is called the…", "asteroid belt", "Milky Way", "Ring of Fire", "constellation"],
    ["Comets are made of ice, dust and…", "rock", "seawater", "molten metal", "plants"],
    ["A comet's tail always points ___ the Sun.", "away from", "towards", "above", "below"],
    ["A meteoroid that burns up in the Earth's atmosphere is seen as a…", "meteor (shooting star)", "comet", "asteroid", "moon"],
    ["A meteoroid that falls and reaches the Earth's surface is called a…", "meteorite", "meteor", "comet", "asteroid"],
    ["Halley's Comet can be seen from the Earth about every…", "76 years", "1 year", "10 years", "500 years"]
  ]}
]
};
})();
