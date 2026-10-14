/* =========================================================
   YEAR 2 — Cerdik Ceria · DLP (Mathematics & Science in English)
   Same chapters and order as soalan/tahun2.js.
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from } = MK;

const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function say(n) {
  if (n === 0) return "zero";
  if (n === 1000) return "one thousand";
  const out = [];
  const h = Math.floor(n / 100), rest = n % 100;
  if (h) out.push(ONES[h] + " hundred");
  if (rest) {
    let w;
    if (rest < 10) w = ONES[rest];
    else if (rest < 20) w = TEENS[rest - 10];
    else { const t = Math.floor(rest / 10), o = rest % 10; w = TENS[t] + (o ? "-" + ONES[o] : ""); }
    out.push(h ? "and " + w : w);
  }
  return out.join(" ");
}
const PLACE = ["ones", "tens", "hundreds"];
const sen = n => n + " sen";
const rm = n => "RM" + n;
const CLOCK = h => String.fromCodePoint(0x1F550 + h - 1);
const CLOCK30 = h => String.fromCodePoint(0x1F55C + h - 1);
const BOX = (n, d) => "🟩".repeat(n) + "⬜".repeat(d - n);
const oc = h => `${h} o'clock`;
const half = h => `half past ${h}`;

SOALAN["dlp2"] = {
math: [
  { t: "Whole Numbers up to 1000",
    q: [
      ["The biggest three-digit number is…", "999", "100", "900", "1000"],
      ["The smallest three-digit number is…", "100", "101", "999", "10"],
      ["\"one thousand\" is written as…", "1000", "100", "10 000", "1100"]
    ],
    g: [
      () => { const n = r(101, 999); const ws = [n + 1, n - 1, n + 10, n - 10, n + 100, n - 100].filter(x => x > 0 && x < 1000).map(say); return from(`${n} is read as…`, say(n), ws); },
      () => { const n = r(101, 999); const s = String(n); const swap = Number(s[0] + s[2] + s[1]); return from(`The number for "${say(n)}" is…`, String(n), [n + 10, n - 10, n + 100, n - 100, swap, n + 1, n - 1].filter(x => x > 0 && x < 1000 && x !== n).map(String)); },
      () => { let n, s, p, d; do { n = r(101, 999); s = String(n); p = r(0, 2); d = +s[2 - p]; } while (!d || s.split("").filter(x => +x === d).length > 1); const v = d * 10 ** p; return from(`The value of the digit ${d} in ${n} is…`, String(v), [d, d * 10, d * 100].filter(x => x !== v).map(String).concat([String(v + 1)]), `The digit ${d} is in the ${PLACE[p]} place.`); },
      () => { const s = new Set(); while (s.size < 4) s.add(r(100, 999)); const ns = [...s].sort((a, b) => b - a); return ["Which number is the biggest?", ...ns.map(String), ""]; },
      () => { const s = new Set(); while (s.size < 4) s.add(r(100, 999)); const ns = [...s].sort((a, b) => a - b); return ["Which number is the smallest?", ...ns.map(String), ""]; },
      () => { const st = pick([2, 5, 10, 100]), a = r(1, 999 - st * 4); const seq = [a, a + st, a + 2 * st, a + 3 * st]; const hide = r(1, 3); const ans = seq[hide]; return q(`Complete the number pattern:\n${seq.map((x, i) => i === hide ? "___" : x).join(", ")}`, ans, [1, st, 10], false, `Add ${st} each time.`); },
      () => { const n = r(11, 994); const u = pick([10, 100]); const ans = Math.round(n / u) * u; return q(`Round off ${n} to the nearest ${u === 10 ? "ten" : "hundred"}.`, ans, [u, u * 2, 1]); }
    ] },
  { t: "Basic Operations",
    q: [
      ["The sign \"×\" means…", "multiply", "divide", "add", "subtract"],
      ["The sign \"÷\" means…", "divide", "multiply", "subtract", "add"],
      ["Any number multiplied by 0 is…", "0", "1", "the number itself", "10"],
      ["Any number multiplied by 1 is…", "the number itself", "0", "1", "10"]
    ],
    g: [
      () => { const a = r(100, 800), b = r(10, 999 - a); return q(`${a} + ${b} = ?`, a + b, [1, 10, 100]); },
      () => { const a = r(200, 999), b = r(10, a - 1); return q(`${a} − ${b} = ?`, a - b, [1, 10, 100]); },
      () => { const a = pick([2, 3, 4, 5, 10]), b = r(1, 10); return q(`${a} × ${b} = ?`, a * b, [a, 1, 2]); },
      () => { const a = pick([2, 3, 4, 5, 10]), b = r(1, 10); return q(`${a * b} ÷ ${a} = ?`, b, [1, 2]); },
      () => { const a = r(11, 99); return q(`${a} × 10 = ?`, a * 10, [10, 100, a], false, "Add one zero at the end."); },
      () => { const a = r(11, 99) * 10; return q(`${a} ÷ 10 = ?`, a / 10, [1, 10, a / 100 || 1], false, "Remove one zero from the end."); },
      () => { const b = pick(["🍬", "🍎", "🧁", "⭐"]), g = r(2, 5), n = r(2, 5); return q(`${(b.repeat(n) + "\n").repeat(g).trim()}|There are ${g} groups with ${n} in each group. How many altogether?`, g * n, [1, g, n]); },
      () => { const n = pick(["Aina", "Kumar", "Lim", "Hafiz"]), k = pick([2, 3, 4, 5]), e = r(2, 9); return q(`🍪|${n} has ${k * e} biscuits. The biscuits are shared equally among ${k} friends. How many does each friend get?`, e, [1, 2, k]); },
      () => { const a = r(120, 600), b = r(50, 300); return q(`📚|The library has ${a} storybooks and ${b} science books. How many books altogether?`, a + b, [1, 10, 100]); }
    ] },
  { t: "Fractions and Decimals",
    q: [
      ["🟩🟩⬜⬜|The coloured part is…", "2/4", "1/4", "3/4", "4/2"],
      ["🟩🟩🟩⬜|The coloured part is…", "3/4", "1/4", "2/4", "4/3"],
      ["Which is a proper fraction?", "2/5", "5/2", "7/3", "4/4"],
      ["0.1 is equal to…", "1/10", "1/100", "10/1", "1/1"],
      ["0.5 is read as…", "zero point five", "fifty", "five point zero", "zero five"],
      ["Which is bigger?", "3/4", "1/4", "2/4", "All the same", "Three quarters is the biggest."]
    ],
    g: [
      () => { const d = r(2, 8), n = r(1, d - 1); const right = `${n}/${d}`; return from(`${BOX(n, d)}|The coloured part is…`, right, [`${d - n}/${d}`, `${d}/${n}`, `${n}/${d + 1}`, `${n + 1}/${d}`].filter(x => x !== right)); },
      () => { const n = r(1, 9); return from(`${BOX(n, 10)}|The coloured part as a decimal is…`, `0.${n}`, [`0.${10 - n}`, `${n}.0`, `0.0${n}`, `${n}.10`].filter(x => x !== `0.${n}`)); },
      () => { const n = r(1, 9); return from(`${n}/10 as a decimal is…`, `0.${n}`, [`${n}.0`, `0.0${n}`, `1.${n}`, `0.${10 - n}`].filter(x => x !== `0.${n}`)); },
      () => { const d = pick([5, 6, 8, 10]); let a = r(1, d - 1), b = r(1, d - 1); while (b === a) b = r(1, d - 1); const big = Math.max(a, b); return from(`Which fraction is bigger: ${a}/${d} or ${b}/${d}?`, `${big}/${d}`, [`${Math.min(a, b)}/${d}`, "Same size", "Cannot be compared"]); }
    ] },
  { t: "Money",
    q: [
      ["RM1 = ___ sen", "100", "10", "50", "1000"],
      ["The note with the biggest value below is…", "RM100", "RM50", "RM20", "RM10"],
      ["The coin with the smallest value below is…", "5 sen", "10 sen", "20 sen", "50 sen"],
      ["Two RM50 notes = ?", "RM100", "RM50", "RM10", "RM500"]
    ],
    g: [
      () => { const cs = [5, 10, 20, 50]; let a = pick(cs), b = pick(cs), c = pick(cs); if (a + b + c > 100) c = 5; return q(`🪙|${sen(a)} + ${sen(b)} + ${sen(c)} = ?`, a + b + c, [5, 10, 20], false, "", sen); },
      () => { const ns = [1, 5, 10, 20, 50]; const a = pick(ns), b = pick(ns), c = pick([1, 5, 10]); return q(`💵|${rm(a)} + ${rm(b)} + ${rm(c)} = ?`, a + b + c, [1, 5, 10], false, "", rm); },
      () => { const a = r(20, 100), b = r(1, a - 1); return q(`💵|${rm(a)} − ${rm(b)} = ?`, a - b, [1, 5, 10], false, "", rm); },
      () => { const h = r(2, 9), n = r(2, 5); return q(`🧃|A box of juice costs RM${h}. What is the price of ${n} boxes of juice?`, h * n, [h, 1, 2], false, "", rm); },
      () => { const h = pick([20, 30, 40, 50, 60, 70, 80]), pay = 100; return q(`🍦|An ice cream costs ${sen(h)}. You pay RM1. How much is the change?`, pay - h, [10, 20], false, "", sen); }
    ] },
  { t: "Time",
    q: [
      ["1 hour = ___ minutes", "60", "100", "30", "24"],
      ["1 day = ___ hours", "24", "12", "60", "7"],
      ["1 week = ___ days", "7", "5", "10", "30"],
      ["Half an hour = ___ minutes", "30", "50", "15", "60"]
    ],
    g: [
      () => { const h = r(1, 12); return from(`${CLOCK(h)}|What time is it?`, oc(h), shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(x => x !== h)).slice(0, 4).map(oc).concat([half(h)])); },
      () => { const h = r(1, 12); const right = half(h); return from(`${CLOCK30(h)}|What time is it?`, right, [oc(h), half(h % 12 + 1), half((h + 10) % 12 + 1), oc(h % 12 + 1)]); },
      () => { const h = r(2, 5); return q(`${h} hours = ___ minutes`, h * 60, [60, 10, 30]); },
      () => { const d = r(2, 4); return q(`${d} days = ___ hours`, d * 24, [24, 12, 10]); },
      () => { const w = r(2, 4); return q(`${w} weeks = ___ days`, w * 7, [7, 1, 2]); },
      () => { const h = r(1, 3), m = pick([10, 15, 20, 30, 45]); return q(`${h} hour${h > 1 ? "s" : ""} ${m} minutes = ___ minutes`, h * 60 + m, [60, 10, 40]); }
    ] },
  { t: "Measurement",
    q: [
      ["1 m = ___ cm", "100", "10", "1000", "60"],
      ["1 kg = ___ g", "1000", "100", "10", "500"],
      ["1 litre = ___ ml", "1000", "100", "10", "500"],
      ["The tool to measure the length of a book is a…", "ruler", "weighing scale", "beaker", "clock"],
      ["A suitable unit to measure the length of a field is…", "metre (m)", "gram (g)", "litre (l)", "square centimetre"],
      ["A suitable unit to measure water in a glass is…", "millilitre (ml)", "kilogram (kg)", "metre (m)", "hour"],
      ["Which is the heaviest?", "🧱 1 kg", "🪶 10 g", "🍬 5 g", "📄 2 g"]
    ],
    g: [
      () => { const m = r(2, 9); return q(`${m} m = ___ cm`, m * 100, [100, 10, 50]); },
      () => { const k = r(2, 9); return q(`${k} kg = ___ g`, k * 1000, [1000, 100, 500]); },
      () => { const l = r(2, 9); return q(`${l} litres = ___ ml`, l * 1000, [1000, 100, 500]); },
      () => { const a = r(12, 60), b = r(5, 40); return q(`📏|A red ribbon is ${a} cm and a blue ribbon is ${b} cm. What is the total length?`, a + b, [1, 10, 5], false, "", x => x + " cm"); },
      () => { const a = r(300, 900), b = r(50, a - 50); return q(`⚖️|Bag A is ${a} g and bag B is ${b} g. What is the difference in mass?`, a - b, [10, 50, 100], false, "", x => x + " g"); }
    ] },
  { t: "Space", q: [
    ["🎲|This shape is a…", "cube", "cuboid", "sphere", "cone"],
    ["📦|This shape is a…", "cuboid", "cube", "cylinder", "pyramid"],
    ["🥫|This shape is a…", "cylinder", "cone", "cube", "sphere"],
    ["🍦|The shape of an ice cream cone is a…", "cone", "cylinder", "pyramid", "cube"],
    ["⚽|The shape of a ball is a…", "sphere", "cylinder", "cone", "cube"],
    ["🔺|This two-dimensional shape is a…", "triangle", "circle", "square", "rectangle"],
    ["A cube has ___ flat faces.", "6", "4", "5", "8"],
    ["A cube has ___ vertices.", "8", "6", "12", "4"],
    ["A cube has ___ edges.", "12", "8", "6", "10"],
    ["A square-based pyramid has ___ vertices.", "5", "4", "6", "8"],
    ["A cylinder has ___ flat faces.", "2", "1", "0", "3"],
    ["A cone has ___ flat face(s).", "1", "0", "2", "3"],
    ["The shape with no flat faces is a…", "sphere", "cube", "cone", "cylinder"],
    ["A rectangle has ___ sides.", "4", "3", "5", "6"],
    ["The net of a cube is made of ___ squares.", "6", "4", "5", "8"]
  ]},
  { t: "Data Handling",
    q: [
      ["A chart that uses bars to show data is a…", "bar chart", "pictograph", "timetable", "map"],
      ["Data can be collected by…", "asking and recording", "guessing only", "sleeping", "free drawing"]
    ],
    g: [
      () => {
        const items = shuffle(["⚽ Football", "🏸 Badminton", "🏊 Swimming", "🏃 Running"]).slice(0, 4);
        const c = shuffle([2, 3, 4, 5, 6, 7, 8]).slice(0, 4);
        const chart = items.map((e, i) => e.split(" ")[0] + " " + "🟦".repeat(c[i]) + " " + c[i]).join("\n");
        const t = r(0, 3), names = items.map(x => x.split(" ")[1]);
        if (t === 0) { const m = c.indexOf(Math.max(...c)); return [`${chart}|Favourite sports of pupils in class 2 Cerdas. Which sport is the most popular?`, names[m], ...names.filter((_, i) => i !== m), ""]; }
        if (t === 1) { const m = c.indexOf(Math.min(...c)); return [`${chart}|Which sport is the least popular?`, names[m], ...names.filter((_, i) => i !== m), ""]; }
        if (t === 2) { const tot = c.reduce((a, b) => a + b, 0); return q(`${chart}|How many pupils are there altogether?`, tot, [1, 2, 3]); }
        return q(`${chart}|What is the difference between the number of pupils who chose ${names[0]} and ${names[1]}?`, Math.abs(c[0] - c[1]), [1, 2]);
      }
    ] }
],

sains: [
  { t: "Scientific Skills", q: [
    ["We collect information using our senses. This skill is called…", "observing", "predicting", "measuring", "classifying"],
    ["Separating objects by the same features is called…", "classifying", "observing", "predicting", "communicating"],
    ["We use a ___ to measure length.", "ruler", "thermometer", "clock", "weighing scale"],
    ["Making a guess about what will happen is called…", "predicting", "classifying", "measuring", "drawing"],
    ["After an activity in the science room, we must…", "wash our hands", "eat", "run", "leave things messy"],
    ["Materials in the science room must not be…", "tasted without the teacher's permission", "observed", "labelled", "kept"],
    ["Reporting the results of an investigation to the class is called…", "communicating", "classifying", "predicting", "measuring"]
  ]},
  { t: "Humans", q: [
    ["Humans reproduce by…", "giving birth", "laying eggs", "budding", "producing seeds"],
    ["A baby will grow and become…", "taller and heavier", "smaller", "lighter", "unchanged"],
    ["👶|A newborn baby gets food from…", "mother's milk", "rice", "bread", "fruits"],
    ["Measurements that show we are growing are…", "height and weight", "clothes colour", "name", "address"],
    ["Features inherited from our parents are…", "skin colour and hair type", "clothes", "school name", "shoes"],
    ["Siblings sometimes look alike because they…", "inherit their parents' features", "eat the same food", "wear the same clothes", "sleep in the same room"],
    ["To grow healthily, we must…", "eat nutritious food and exercise", "eat only sweets", "sleep late", "play on the phone all day"],
    ["Human growth stages: baby → child → teenager → …", "adult", "baby", "egg", "pupa"]
  ]},
  { t: "Animals", q: [
    ["The animal that reproduces by laying eggs is…", "🐢", "🐄", "🐱", "🐒"],
    ["The animal that reproduces by giving birth is…", "🐄", "🐔", "🐟", "🐸"],
    ["Life cycle of a butterfly: egg → caterpillar → ___ → butterfly", "pupa", "tadpole", "chick", "froglet larva"],
    ["Life cycle of a frog: egg → ___ → froglet → frog", "tadpole", "caterpillar", "pupa", "baby fish"],
    ["Life cycle of a mosquito: egg → ___ → pupa → mosquito", "larva (wriggler)", "caterpillar", "tadpole", "chick"],
    ["The animal whose young look like the parent is the…", "cat", "frog", "butterfly", "mosquito"],
    ["The animal whose young do not look like the parent is the…", "butterfly", "cat", "elephant", "chicken"],
    ["🐛|A caterpillar will become a…", "butterfly", "frog", "mosquito", "bee"],
    ["🐸|A tadpole will become a…", "frog", "fish", "butterfly", "mosquito"],
    ["We can stop mosquitoes from breeding by…", "getting rid of stagnant water", "keeping old tyres with water", "leaving drains blocked", "opening water jar lids"]
  ]},
  { t: "Plants", q: [
    ["A seed needs ___ to germinate.", "water, air and a suitable temperature", "light only", "salt", "sugar"],
    ["🌱|A germinating seed first grows a…", "root", "flower", "fruit", "new seed"],
    ["Plants need ___ to grow healthily.", "water, air, sunlight and nutrients", "plastic", "stones", "oil"],
    ["A plant kept in a dark cupboard will…", "become pale and weak", "grow better", "flower more", "bear fruit"],
    ["A plant that is not watered for a long time will…", "wilt", "become fresher", "grow taller", "bear fruit"],
    ["The part of a seedling that grows upwards is the…", "shoot", "root", "seed", "soil"],
    ["After germinating, a seedling will…", "grow into a plant", "become a seed again", "turn into stone", "disappear"],
    ["An example of seeds often used for germination activities is…", "green beans", "pebbles", "plastic beads", "sand"]
  ]},
  { t: "Light and Dark", q: [
    ["An example of a natural light source is…", "the Sun", "a torchlight", "a candle", "a street lamp"],
    ["An example of a man-made light source is…", "a torchlight", "the Sun", "a star", "a firefly"],
    ["🔦|A torchlight is a ___ light source.", "man-made", "natural", "animal", "moon"],
    ["A shadow is formed when light is…", "blocked by an opaque object", "passing through clear glass", "very dim", "coloured"],
    ["A shadow becomes bigger when the object is…", "moved closer to the light source", "moved away from the light source", "made wet", "painted"],
    ["An object that does not let light pass through it is called an ___ object.", "opaque", "transparent", "shiny", "wet"],
    ["Our shadow is shortest at…", "noon", "morning", "evening", "night"],
    ["Shadow play uses…", "hands and lamp light", "water", "sound", "wind"],
    ["We must not look directly at the Sun because…", "it can damage our eyes", "the Sun is too small", "the Sun is cold", "there is no reason"]
  ]},
  { t: "Electricity", q: [
    ["🔋|The component that supplies electrical energy in a circuit is the…", "dry cell (battery)", "bulb", "switch", "wire"],
    ["💡|The component that lights up when the circuit is complete is the…", "bulb", "switch", "battery", "tape"],
    ["The component used to turn a circuit on and off is the…", "switch", "bulb", "battery", "wire"],
    ["A bulb will light up if the circuit is…", "complete", "broken", "without a battery", "without wires"],
    ["A material that allows electricity to flow is called a…", "conductor", "insulator", "magnet", "glass"],
    ["Which one is an electrical conductor?", "iron paper clip", "plastic ruler", "rubber eraser", "wooden stick"],
    ["Which one is an electrical insulator?", "plastic ruler", "coin", "copper wire", "iron nail"],
    ["Electrical wires are covered with plastic because plastic is an…", "insulator", "conductor", "magnet", "light source"],
    ["We must not play with electrical switches because…", "we may get an electric shock", "the switch will disappear", "the lights get brighter", "there is no danger"]
  ]},
  { t: "Mixtures", q: [
    ["A mixture of rice and sand can be separated by…", "sieving", "melting", "burning", "shaking"],
    ["A mixture of iron nails and sand can be separated using a…", "magnet", "water", "cloth", "lamp"],
    ["A mixture of sand and water can be separated by…", "filtering with filter paper", "using a magnet", "shaking", "freezing"],
    ["A substance that dissolves in water is…", "sugar", "sand", "stone", "oil"],
    ["A substance that does not dissolve in water is…", "sand", "salt", "sugar", "drink powder"],
    ["Sugar dissolves faster in water that is…", "hot", "cold", "icy", "dirty"],
    ["One way to dissolve sugar faster is by…", "stirring", "leaving it", "cooling the water", "adding ice"],
    ["Coarse sugar or fine sugar — the one that dissolves faster is…", "fine sugar", "coarse sugar", "both the same", "neither dissolves"],
    ["When oil and water are mixed, they will…", "separate, with oil floating on top", "dissolve completely", "become solid", "change colour"]
  ]},
  { t: "The Earth", q: [
    ["Examples of natural water sources are…", "rivers and lakes", "taps", "bottles", "buckets"],
    ["Water always flows from a ___ place to a ___ place.", "high to low", "low to high", "dry to wet", "cold to hot"],
    ["The water cycle happens because of the ___ of water from the sea into the air.", "evaporation", "freezing", "melting", "rusting"],
    ["Water vapour in the air turns into water droplets and forms…", "clouds", "stones", "sand", "soil"],
    ["Water falls from clouds to the Earth as…", "rain", "wind", "smoke", "sand"],
    ["Moving air is called…", "wind", "water", "sound", "light"],
    ["🎈|A balloon expands when it is filled with…", "air", "ice", "sand", "light"],
    ["🪁|A kite can fly because of the…", "wind", "rain", "sound", "light"],
    ["An example of the effect of moving air is…", "clothes on the line dry faster", "ice melts", "water freezes", "stones sink"],
    ["Very strong wind can cause…", "trees to fall", "clear river water", "fertile soil", "flowers to bloom"]
  ]},
  { t: "Technology (Construction Sets)", q: [
    ["Before assembling a construction set, we must look at the…", "picture manual", "television", "storybook", "calendar"],
    ["A picture manual helps us…", "assemble components step by step", "draw pictures", "read stories", "sing"],
    ["After building, we must…", "take the model apart and keep the components", "throw away the components", "leave them messy", "break it"],
    ["Construction set components must be kept in the…", "correct container", "rubbish bin", "friend's school bag", "kitchen drawer"],
    ["We can create a new model by…", "using our own ideas", "only copying", "damaging components", "not planning"],
    ["When building, we must ___ with friends.", "cooperate", "grab", "fight", "shout"]
  ]}
]
};
})();
