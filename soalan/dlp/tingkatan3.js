/* =========================================================
   FORM 3 — Cerdik Ceria · DLP (English translation)
   Same chapters, order and generator logic as soalan/tingkatan3.js
   (generators run with the same seed so numbers match).
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from, fmt } = MK;

const N = n => n < 0 ? "−" + (-n) : String(n);
const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const sup = n => String(n).split("").map(c => SUP[c]).join("");
const pw = (b, e) => e === 1 ? b : b + sup(e);
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const frac = (n, d) => { const g = gcd(n, d); return d / g === 1 ? String(n / g) : `${n / g}/${d / g}`; };
function fromF(text, right, pool, more, exp) {
  const set = new Set(pool.map(String).filter(x => x !== String(right)));
  let t = 0; while (set.size < 3 && t < 100) { t++; const v = String(more()); if (v !== String(right)) set.add(v); }
  return from(text, right, [...set], exp);
}
const TRIPLE = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]];
const rm = x => "RM" + (Number.isInteger(x) ? fmt(x) : x.toFixed(2));
const pl = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;

SOALAN["dlpm3"] = {
math: [
  { t: "Indices",
    q: [
      ["a⁰ = ? (a ≠ 0)", "1", "0", "a", "undefined"],
      ["a⁻¹ is equal to…", "1/a", "−a", "a", "0"],
      ["In 5³, the number 5 is called the…", "base", "index", "coefficient", "square"],
      ["(ab)ⁿ = ?", "aⁿbⁿ", "abⁿ", "aⁿb", "(a + b)ⁿ"]
    ],
    g: [
      () => { const m = r(2, 9), n = r(2, 9); return fromF(`Simplify: ${pw("a", m)} × ${pw("a", n)}`, pw("a", m + n), [pw("a", m * n), pw("a", Math.abs(m - n) || 1), pw("2a", m + n)], () => pw("a", r(2, 20))); },
      () => { const n = r(2, 8), m = n + r(1, 8); return fromF(`Simplify: ${pw("x", m)} ÷ ${pw("x", n)}`, pw("x", m - n), [pw("x", m + n), pw("x", Math.floor(m / n) || 2), pw("x", m * n)], () => pw("x", r(1, 20))); },
      () => { const m = r(2, 6), n = r(2, 5); return fromF(`Simplify: (${pw("y", m)})${sup(n)}`, pw("y", m * n), [pw("y", m + n), pw("y", m), pw("y", n)], () => pw("y", r(2, 30))); },
      () => { const b = pick([2, 3, 5, 10]), e = r(2, b === 2 ? 6 : 3); return q(`${b}${sup(e)} = ?`, b ** e, [b, e, b * e], false, "", fmt); },
      () => { const b = pick([2, 3, 4, 5]), e = r(1, 3); const right = `1/${b ** e}`; return fromF(`${b}${sup(-e)} = ?`, right, [`−${b ** e}`, `${b ** e}`, `1/${b * e}`], () => `1/${r(2, 100)}`); }
    ] },
  { t: "Standard Form",
    q: [
      ["Standard form is written as A × 10ⁿ where…", "1 ≤ A < 10", "A > 10", "0 < A < 1", "A = 10"],
      ["The number of significant figures in 0.00305 is…", "3", "5", "6", "2"],
      ["The number of significant figures in 4 050 is…", "3", "4", "2", "1"]
    ],
    g: [
      () => { const a = r(11, 99) / 10, n = r(3, 7); const val = Math.round(a * 10 ** n); const right = `${a} × 10${sup(n)}`; return fromF(`${fmt(val)} in standard form is…`, right, [`${a} × 10${sup(n + 1)}`, `${a} × 10${sup(n - 1)}`, `${a * 10} × 10${sup(n - 1)}`, `${a} × 10${sup(-n)}`], () => `${a} × 10${sup(r(1, 9))}`); },
      () => { const a = r(11, 99) / 10, n = r(2, 5); const val = (a / 10 ** n).toFixed(n + 1).replace(/0+$/, ""); const right = `${a} × 10${sup(-n)}`; return fromF(`${val} in standard form is…`, right, [`${a} × 10${sup(n)}`, `${a} × 10${sup(-n - 1)}`, `${a} × 10${sup(-n + 1)}`], () => `${a} × 10${sup(-r(1, 8))}`); },
      () => { const n = r(10000, 99999); const s = String(n); const right = fmt(Math.round(n / 1000) * 1000); return fromF(`Round off ${fmt(n)} to 2 significant figures.`, right, [fmt(Math.round(n / 100) * 100), fmt(Math.round(n / 10000) * 10000), s.slice(0, 2)], () => fmt(Math.round(n / 1000) * 1000 + pick([-2000, -1000, 1000, 2000]))); },
      () => { const a = r(2, 9), b = r(2, 9), m = r(2, 5), n = r(2, 5); const p = a * b; const right = p >= 10 ? `${p / 10} × 10${sup(m + n + 1)}` : `${p} × 10${sup(m + n)}`; return fromF(`(${a} × 10${sup(m)}) × (${b} × 10${sup(n)}) = ?`, right, [`${p} × 10${sup(m * n)}`, `${a + b} × 10${sup(m + n)}`, p >= 10 ? `${p / 10} × 10${sup(m + n)}` : `${p} × 10${sup(m + n + 1)}`], () => `${p >= 10 ? p / 10 : p} × 10${sup(r(2, 12))}`); }
    ] },
  { t: "Consumer Mathematics: Savings, Investments, Credit and Debt",
    q: [
      ["Simple interest is calculated based on…", "the principal only", "the principal and accumulated interest", "dividends", "inflation"],
      ["Compound interest is calculated based on…", "the principal and accumulated interest", "the principal only", "debt only", "tax"],
      ["An example of a higher-risk investment compared to a fixed deposit is…", "shares", "a savings account", "a fixed deposit", "a piggy bank at home"],
      ["Wise use of a credit card is…", "paying the full balance before the due date", "paying only the minimum every month", "spending over the limit", "lending the card to friends"],
      ["Late credit card payment usually leads to…", "interest charges and late fees", "a discount", "free gifts", "no effect"]
    ],
    g: [
      () => { const P = r(2, 20) * 1000, k = pick([2, 3, 4, 5]), t = r(1, 4); return q(`🏦|RM${fmt(P)} is saved at a simple interest rate of ${k}% per year. What is the interest after ${pl(t, "year")}?`, P * k / 100 * t, [P * k / 100, 100, 10], false, "I = Prt", rm); },
      () => { const P = r(2, 20) * 1000, k = pick([2, 3, 4, 5]), t = r(1, 4); return q(`🏦|RM${fmt(P)} is saved at a simple interest rate of ${k}% per year. What is the total amount after ${pl(t, "year")}?`, P + P * k / 100 * t, [P * k / 100, 100, 1000], false, "Total = P + Prt", rm); },
      () => { const P = r(1, 10) * 1000, k = pick([2, 4, 5, 10]); const A = +(P * (1 + k / 100) ** 2).toFixed(2); return q(`📈|RM${fmt(P)} is saved at ${k}% compound interest per year, compounded once a year. What is the matured value after 2 years?`, A, [P * k / 100, P * k / 50, 10], true, "MV = P(1 + r/n)ⁿᵗ", rm); },
      () => { const P = r(2, 10) * 1000, k = pick([3, 4, 5, 6]), t = r(2, 5); const tot = P + P * k / 100 * t; const m = t * 12; if (tot % m) return null; return q(`🚲|A loan of RM${fmt(P)} at a flat interest rate of ${k}% per year for ${t} years. What is the monthly instalment?`, tot / m, [10, 5, 20], false, `Total payment RM${fmt(tot)} ÷ ${m} months`, rm); }
    ] },
  { t: "Scale Drawings",
    q: [
      ["A scale drawing of 1 : 100 means 1 cm in the drawing represents…", "100 cm in real life", "100 m in real life", "1 m in the drawing", "10 cm in real life"],
      ["A scale of 2 : 1 means the drawing is…", "twice the actual size", "half the actual size", "the same size", "ten times smaller"],
      ["Scale drawings are used by…", "architects and engineers", "cooks", "singers", "athletes"]
    ],
    g: [
      () => { const L = r(2, 15), k = pick([50, 100, 200, 500]); return q(`📐|The length in the drawing is ${L} cm. The scale is 1 : ${k}. The actual length is…`, L * k / 100, [1, 2, L], true, "", x => (Number.isInteger(x) ? x : x.toFixed(1)) + " m"); },
      () => { const real = r(2, 20) * 2, k = pick([100, 200, 400]); return q(`📐|The actual length is ${real} m. The scale is 1 : ${k}. The length in the drawing is…`, real * 100 / k, [1, 2, 0.5], true, "", x => x + " cm"); },
      () => { const a = r(2, 9), b = r(2, 9); return q(`🏠|The plan of a room measures ${a} cm × ${b} cm with a scale of 1 : 100. The actual area of the room is…`, a * b, [a + b, 2 * (a + b), a * b * 100], false, "1 cm represents 1 m", x => x + " m²"); }
    ] },
  { t: "Trigonometric Ratios",
    q: [
      ["sin θ = ?", "opposite side ÷ hypotenuse", "adjacent side ÷ hypotenuse", "opposite side ÷ adjacent side", "hypotenuse ÷ opposite side"],
      ["cos θ = ?", "adjacent side ÷ hypotenuse", "opposite side ÷ hypotenuse", "opposite side ÷ adjacent side", "hypotenuse ÷ adjacent side"],
      ["tan θ = ?", "opposite side ÷ adjacent side", "adjacent side ÷ hypotenuse", "opposite side ÷ hypotenuse", "hypotenuse ÷ adjacent side"],
      ["sin 30° = ?", "0.5", "1", "0.866", "0"],
      ["tan 45° = ?", "1", "0", "0.5", "undefined"],
      ["cos 60° = ?", "0.5", "0.866", "1", "0"]
    ],
    g: [
      () => { const [a, b, c] = pick(TRIPLE); return fromF(`Right-angled triangle: side opposite θ = ${a}, adjacent side = ${b}, hypotenuse = ${c}. sin θ = ?`, frac(a, c), [frac(b, c), frac(a, b), frac(b, a), frac(c, a)], () => frac(r(1, c - 1), c)); },
      () => { const [a, b, c] = pick(TRIPLE); return fromF(`Right-angled triangle: side opposite θ = ${a}, adjacent side = ${b}, hypotenuse = ${c}. cos θ = ?`, frac(b, c), [frac(a, c), frac(a, b), frac(b, a), frac(c, b)], () => frac(r(1, c - 1), c)); },
      () => { const [a, b, c] = pick(TRIPLE); return fromF(`Right-angled triangle: side opposite θ = ${a}, adjacent side = ${b}, hypotenuse = ${c}. tan θ = ?`, frac(a, b), [frac(b, a), frac(a, c), frac(b, c), frac(c, b)], () => frac(r(1, 30), b)); },
      () => { const [a, b, c] = pick(TRIPLE), k = r(1, 3); return q(`🪜|The hypotenuse is ${c * k} m and sin θ = ${frac(a, c)}. The length of the side opposite θ is…`, a * k, [1, b * k - a * k || 2, k], false, "Opposite = sin θ × hypotenuse", x => x + " m"); }
    ] },
  { t: "Angles and Tangents of Circles", q: [
    ["The angle at the centre of a circle is ___ the angle at the circumference subtended by the same arc.", "twice", "half", "equal to", "three times"],
    ["The angle in a semicircle is…", "90°", "180°", "45°", "60°"],
    ["Angles at the circumference subtended by the same arc are…", "equal", "different", "doubled", "complementary"],
    ["The sum of opposite angles in a cyclic quadrilateral is…", "180°", "360°", "90°", "270°"],
    ["A tangent to a circle is perpendicular to the…", "radius at the point of contact", "any diameter", "chord", "arc"],
    ["Two tangents from an external point to a circle are…", "equal in length", "different in length", "parallel", "perpendicular"],
    ["The angle at the centre is 110°. The angle at the circumference subtended by the same arc is…", "55°", "110°", "220°", "70°"],
    ["One angle in a cyclic quadrilateral is 75°. Its opposite angle is…", "105°", "75°", "15°", "285°"],
    ["The angle between a tangent and the radius at the point of contact is…", "90°", "45°", "180°", "60°"]
  ]},
  { t: "Plans and Elevations", q: [
    ["A plan is an orthogonal projection viewed from the…", "top", "front", "side", "bottom"],
    ["The front elevation is viewed from the…", "front", "top", "side", "back only"],
    ["The side elevation is viewed from the…", "side (left or right)", "top", "front", "bottom"],
    ["Dashed lines in a plan drawing show…", "hidden edges", "visible edges", "centre lines", "measurements"],
    ["🥫|The plan of an upright cylinder is a…", "circle", "rectangle", "triangle", "square"],
    ["🥫|The front elevation of an upright cylinder is a…", "rectangle", "circle", "triangle", "trapezium"],
    ["The front elevation of an upright cone is a…", "triangle", "circle", "rectangle", "trapezium"],
    ["The plan of a cube is a…", "square", "triangle", "circle", "trapezium"]
  ]},
  { t: "Loci in Two Dimensions", q: [
    ["A locus is…", "the path of a point moving under certain conditions", "a fixed point", "a polygon", "one parallel line only"],
    ["The locus of a point that is always a fixed distance from a point is a…", "circle", "straight line", "rectangle", "parabola"],
    ["The locus of a point equidistant from two points is the…", "perpendicular bisector", "circle", "parallel lines", "angle bisector"],
    ["The locus of a point equidistant from two intersecting lines is the…", "angle bisector", "perpendicular bisector", "circle", "parallel lines"],
    ["The locus of a point a fixed distance from a straight line is…", "a pair of parallel lines", "a circle", "a point", "an angle bisector"],
    ["The intersection of two loci shows the points that…", "satisfy both conditions", "satisfy no conditions", "satisfy one condition only", "are outside the diagram"],
    ["The locus of the tip of a rotating minute hand is a…", "circle", "straight line", "triangle", "point"]
  ]},
  { t: "Straight Lines",
    q: [
      ["The equation of a straight line is y = mx + c, where m is the…", "gradient", "y-intercept", "x-intercept", "origin"],
      ["In y = mx + c, c is the…", "y-intercept", "gradient", "x-intercept", "distance"],
      ["Two parallel lines have gradients that are…", "the same", "different", "opposite in sign", "zero only"],
      ["The equation of the x-axis is…", "y = 0", "x = 0", "y = x", "y = 1"]
    ],
    g: [
      () => { const m = r(-6, 6) || 2, c = r(-9, 9); return fromF(`The gradient of the line y = ${m === 1 ? "" : m === -1 ? "−" : N(m)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} is…`, N(m), [N(c), N(-m), N(m + 1)], () => N(r(-9, 9))); },
      () => { const m = r(-6, 6) || 3, c = r(-9, 9) || 4; return fromF(`The y-intercept of the line y = ${m === 1 ? "" : m === -1 ? "−" : N(m)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} is…`, N(c), [N(m), N(-c), N(c + 1)], () => N(r(-12, 12))); },
      () => { const m = r(1, 5), c = r(-6, 6), x = r(-4, 5); const y = m * x + c; const right = `y = ${m === 1 ? "" : m}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}`; return fromF(`The equation of the straight line with gradient ${m} passing through (${N(x)}, ${N(y)}) is…`, right, [`y = ${m === 1 ? "" : m}x ${-c < 0 ? "−" : "+"} ${Math.abs(c)}`, `y = ${m + 1}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}`, `y = ${m === 1 ? "" : m}x ${y < 0 ? "−" : "+"} ${Math.abs(y)}`], () => `y = ${m}x + ${r(10, 20)}`, "Substitute the point to find c."); },
      () => { const m = pick([1, 2, 3, 4, 5]), x0 = r(-6, 6) || 2; const c = -m * x0; return fromF(`The x-intercept of the line y = ${m === 1 ? "" : m}x ${c < 0 ? "−" : "+"} ${Math.abs(c)} is…`, N(x0), [N(c), N(-x0), N(x0 + 1)], () => N(r(-10, 10)), "Let y = 0."); }
    ] }
],

sains: [
  { t: "Stimuli and Responses", q: [
    ["The human nervous system consists of the central nervous system and the ___ nervous system.", "peripheral", "spinal", "brain", "blood"],
    ["The basic unit of the nervous system is the…", "neuron", "nephron", "alveolus", "red blood cell"],
    ["Reflex actions are controlled by the…", "spinal cord", "cerebrum", "heart", "liver"],
    ["An example of a reflex action is…", "pulling your hand away from something hot", "reading a book", "writing an essay", "singing"],
    ["A voluntary action is an action that is…", "conscious and controlled by the brain", "automatic", "not involving nerves", "controlled by the spinal cord only"],
    ["The parts of the eye that control the amount of light entering are the…", "iris and pupil", "retina", "cornea", "optic nerve"],
    ["An image is formed on the part of the eye called the…", "retina", "lens", "cornea", "iris"],
    ["Short-sightedness can be corrected with a ___ lens.", "concave", "convex", "cylindrical", "prism"],
    ["Long-sightedness can be corrected with a ___ lens.", "convex", "concave", "flat", "prism"],
    ["The response of plants to light is called…", "phototropism", "geotropism", "hydrotropism", "thigmotropism"],
    ["The response of roots to gravity is called…", "positive geotropism", "phototropism", "thigmotropism", "negative hydrotropism"]
  ]},
  { t: "Respiration", q: [
    ["The main organs of the human respiratory system are the…", "lungs", "heart", "kidneys", "stomach"],
    ["Gas exchange in the lungs happens in the…", "alveoli", "trachea", "bronchus", "nasal cavity"],
    ["When we breathe in, the diaphragm will…", "contract and flatten", "relax and curve upwards", "not move", "burst"],
    ["When we breathe out, the volume of the thoracic cavity…", "decreases", "increases", "does not change", "becomes empty"],
    ["Oxygen is carried by the blood in the form of…", "oxyhaemoglobin", "plasma only", "platelets", "glucose"],
    ["Cellular respiration produces energy, water and…", "carbon dioxide", "oxygen", "glucose", "chlorophyll"],
    ["Smoking can cause diseases such as…", "lung cancer and emphysema", "scurvy", "rickets", "anaemia only"],
    ["The substance in cigarette smoke that causes addiction is…", "nicotine", "carbon dioxide", "oxygen", "nitrogen"],
    ["Gas exchange in plants happens through the…", "stomata", "roots only", "flowers", "seeds"]
  ]},
  { t: "Transportation", q: [
    ["The organ that pumps blood around the body is the…", "heart", "lungs", "liver", "kidneys"],
    ["The blood vessel that carries blood away from the heart is an…", "artery", "vein", "capillary", "lymph"],
    ["The blood vessel that carries blood back to the heart is a…", "vein", "artery", "aorta", "capillary"],
    ["The smallest blood vessel is a…", "capillary", "artery", "vein", "aorta"],
    ["The blood component that helps blood to clot is the…", "platelet", "red blood cell", "white blood cell", "plasma"],
    ["The blood component that fights infection is the…", "white blood cell", "red blood cell", "platelet", "plasma"],
    ["The universal donor blood group is…", "O", "AB", "A", "B"],
    ["The universal recipient blood group is…", "AB", "O", "A", "B"],
    ["Water is transported in plants through the ___ tissue.", "xylem", "phloem", "epidermis", "stoma"],
    ["Food is transported in plants through the ___ tissue.", "phloem", "xylem", "cuticle", "root hair"],
    ["The loss of water from plants through the stomata is called…", "transpiration", "respiration", "photosynthesis", "osmosis"]
  ]},
  { t: "Reactivity of Metals", q: [
    ["The most reactive metal in this list is…", "potassium", "copper", "gold", "iron"],
    ["The least reactive metal is…", "gold", "sodium", "magnesium", "zinc"],
    ["Metals react with oxygen to produce…", "metal oxides", "salt", "hydrogen", "water"],
    ["Iron ore is an example of a ___ mineral.", "metal oxide", "carbonate", "sulphide", "free element"],
    ["Tin ore (cassiterite) is…", "tin oxide", "tin sulphide", "tin carbonate", "pure tin"],
    ["A metal that exists naturally as a free element is…", "gold", "sodium", "potassium", "magnesium"],
    ["The process of extracting iron in a blast furnace uses…", "carbon (coke)", "water", "salt", "oxygen only"],
    ["Metals more reactive than carbon are extracted by…", "electrolysis", "reduction with carbon", "filtration", "distillation"],
    ["Aluminium is extracted from bauxite through…", "electrolysis", "heating with carbon", "filtering", "crystallisation"]
  ]},
  { t: "Thermochemistry", q: [
    ["A reaction that releases heat to the surroundings is an ___ reaction.", "exothermic", "endothermic", "neutral", "photosynthesis"],
    ["A reaction that absorbs heat from the surroundings is an ___ reaction.", "endothermic", "exothermic", "combustion", "neutralisation"],
    ["Burning fuel is an example of an ___ reaction.", "exothermic", "endothermic", "photochemical", "decomposition"],
    ["Dissolving ammonium nitrate in water makes the water…", "cold", "hot", "coloured", "salty"],
    ["Instant cold packs use the principle of an ___ reaction.", "endothermic", "exothermic", "neutralisation", "combustion"],
    ["Instant hot packs use the principle of an ___ reaction.", "exothermic", "endothermic", "photosynthesis", "evaporation"],
    ["Photosynthesis is an ___ reaction.", "endothermic", "exothermic", "neutralisation", "combustion"],
    ["Cellular respiration is an ___ reaction.", "exothermic", "endothermic", "photochemical", "decomposition"]
  ]},
  { t: "Electricity and Magnetism", q: [
    ["An electric generator changes kinetic energy into ___ energy.", "electrical", "chemical", "sound", "light"],
    ["A step-up transformer is used to…", "increase voltage", "decrease voltage", "change DC to AC", "store energy"],
    ["A step-down transformer is used to…", "decrease voltage", "increase voltage", "produce current", "store charge"],
    ["Direct current (DC) is supplied by a…", "battery", "socket at home", "power station", "transformer"],
    ["Alternating current (AC) is supplied by the…", "main electricity supply", "battery", "solar cell only", "dry cell"],
    ["The voltage of the home electricity supply in Malaysia is about…", "240 V", "12 V", "110 V", "1.5 V"],
    ["A fuse works to…", "break the circuit when the current is too high", "increase the current", "store electricity", "decrease voltage"],
    ["The earth wire in a three-pin plug is coloured…", "green and yellow", "blue", "brown", "red"],
    ["The live wire in a three-pin plug is coloured…", "brown", "blue", "green and yellow", "black"],
    ["The neutral wire in a three-pin plug is coloured…", "blue", "brown", "green and yellow", "red"]
  ]},
  { t: "Energy and Power", q: [
    ["Work = ?", "force × displacement", "force ÷ time", "mass × acceleration", "energy ÷ time"],
    ["Power = ?", "work ÷ time", "work × time", "force × distance", "mass × velocity"],
    ["The unit of power is the…", "watt (W)", "joule (J)", "newton (N)", "volt (V)"],
    ["The unit of energy is the…", "joule (J)", "watt (W)", "newton (N)", "pascal (Pa)"],
    ["Gravitational potential energy depends on mass and…", "height", "colour", "temperature", "speed"],
    ["Kinetic energy depends on mass and…", "speed", "height", "colour", "volume"],
    ["The principle of conservation of energy states that energy…", "cannot be created or destroyed", "can be created", "disappears after use", "only exists in food"],
    ["A person lifts a 50 N load to a height of 2 m. The work done is…", "100 J", "25 J", "52 J", "48 J"],
    ["600 J of work is done in 30 s. The power is…", "20 W", "18000 W", "630 W", "570 W"]
  ]},
  { t: "Radioactivity", q: [
    ["Radioactivity was discovered by…", "Henri Becquerel", "Isaac Newton", "Albert Einstein", "Charles Darwin"],
    ["The radioactive radiation with the highest penetrating power is…", "gamma rays", "alpha particles", "beta particles", "visible light"],
    ["Alpha particles can be stopped by…", "a sheet of paper", "a thick lead sheet", "thick concrete", "nothing"],
    ["Gamma rays can be reduced by…", "thick lead or concrete", "a sheet of paper", "cloth", "thin wood"],
    ["Half-life is the time taken for ___ of a radioactive substance to decay.", "half", "all", "one quarter", "ten percent"],
    ["A use of radioisotopes in medicine is to…", "kill cancer cells", "increase body weight", "cure the flu", "strengthen teeth"],
    ["The radioactive warning symbol is shaped like a…", "trefoil (three blades)", "skull", "flame", "water drop"],
    ["Workers who handle radioactive materials wear a…", "film badge to detect radiation doses", "helmet only", "pair of sports shoes", "wristwatch"]
  ]},
  { t: "Space Weather", q: [
    ["Solar wind is a flow of charged particles from the…", "Sun", "Moon", "Earth", "Mars"],
    ["The phenomenon of coloured lights in the sky of polar regions is called an…", "aurora", "eclipse", "meteor", "comet"],
    ["The Earth's magnetic field (magnetosphere) protects the Earth from…", "solar wind", "rain", "monsoon winds", "earthquakes"],
    ["Sunspots are areas on the Sun's surface that are…", "cooler and darker", "hotter and brighter", "wet", "watery"],
    ["Solar flares can disrupt…", "satellite communication and power grids", "plant growth", "tides", "the taste of food"],
    ["The Sun's activity cycle happens about every…", "11 years", "1 year", "100 years", "1 month"]
  ]},
  { t: "Space Exploration", q: [
    ["Malaysia's first astronaut is…", "Dato' Dr. Sheikh Muszaphar Shukor", "Neil Armstrong", "Yuri Gagarin", "Tunku Abdul Rahman"],
    ["The first human in outer space was…", "Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Sheikh Muszaphar"],
    ["The first human to set foot on the Moon was…", "Neil Armstrong", "Yuri Gagarin", "Galileo", "Copernicus"],
    ["The world's first artificial satellite was…", "Sputnik 1", "MEASAT", "Hubble", "Apollo 11"],
    ["A famous space telescope is the ___ telescope.", "Hubble", "Sputnik", "MEASAT", "Apollo"],
    ["The International Space Station is known as the…", "ISS", "NASA", "ESA", "MYSA"],
    ["The Malaysian Space Agency is known as…", "MYSA", "NASA", "ESA", "JAXA"],
    ["Uses of satellites include…", "communication, weather forecasting and GPS", "planting paddy", "cooking", "catching fish"]
  ]}
]
};
})();
