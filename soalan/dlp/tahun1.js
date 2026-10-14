/* =========================================================
   YEAR 1 — Cerdik Ceria · DLP (Dual Language Programme)
   Mathematics & Science in English. Same chapters and order as the
   Malay version (soalan/tahun1.js) so chapter selection stays aligned.
   Format: ["Question", "CORRECT", "Wrong 1", "Wrong 2", "Wrong 3", "Explanation (optional)"]
   ========================================================= */
(() => {
const { r, pick, shuffle, q, from } = MK;

const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
function say(n) {
  if (n === 100) return "one hundred";
  if (n < 10) return ONES[n];
  if (n < 20) return TEENS[n - 10];
  const t = Math.floor(n / 10), o = n % 10;
  return TENS[t] + (o ? "-" + ONES[o] : "");
}
const ITEMS = ["🍎", "🍌", "⭐", "🎈", "🐥", "🌸", "🍓", "🚗", "🐟", "🧁", "⚽", "🦋"];
const ITEM_NAME = { "🍎": "apples", "🍌": "bananas", "⭐": "stars", "🎈": "balloons", "🐥": "chicks", "🌸": "flowers", "🍓": "strawberries", "🚗": "cars", "🐟": "fish", "🧁": "cupcakes", "⚽": "balls", "🦋": "butterflies" };
const PEOPLE = ["Ali", "Siti", "Aiman", "Mei Ling", "Ravi", "Nurul", "Adam", "Aisyah"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const CLOCK = h => String.fromCodePoint(0x1F550 + h - 1);
const sen = n => n + " sen";
const rm = n => "RM" + n;
const ORD = n => n + (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");

SOALAN["dlp1"] = {

/* ======================= MATHEMATICS ======================= */
math: [
  { t: "Whole Numbers up to 100",
    q: [
      ["The number after 49 is…", "50", "48", "40", "59"],
      ["The number before 70 is…", "69", "71", "60", "80"],
      ["\"one hundred\" is written as…", "100", "10", "1000", "110"],
      ["The smallest number is…", "0", "1", "10", "100"]
    ],
    g: [
      () => { const n = r(2, 10), b = pick(ITEMS); return q(`${b.repeat(n)}|How many ${ITEM_NAME[b]}?`, n, [1, 2]); },
      () => { const n = r(11, 99); return from(`The number for "${say(n)}" is…`, String(n), [n + 1, n - 1, n + 10, n - 10, Number(String(n).split("").reverse().join(""))].filter(x => x > 0 && x <= 100 && x !== n).map(String)); },
      () => { const n = r(11, 99); const ws = [n + 1, n - 1, n + 10, n - 10, n + 2, n - 2, n - 11].filter(x => x > 0 && x <= 100 && x !== n).map(say); return from(`${n} is read as…`, say(n), ws); },
      () => { const n = r(1, 98); return q(`The number after ${n} is…`, n + 1, [1, 2, 10]); },
      () => { const n = r(2, 99); return q(`The number before ${n} is…`, n - 1, [1, 2, 10]); },
      () => { const n = r(11, 99); const p = Math.floor(n / 10); return from(`In the number ${n}, the digit ${p} has the value…`, `${p} tens`, [`${p} ones`, `${n % 10 || 1} tens`, `${p}0 tens`, `${p} hundreds`].filter(x => x !== `${p} tens`)); },
      () => { const s = new Set(); while (s.size < 4) s.add(r(1, 99)); const ns = [...s].sort((a, b) => b - a); return ["Which number is the biggest?", ...ns.map(String), ""]; },
      () => { const s = new Set(); while (s.size < 4) s.add(r(1, 99)); const ns = [...s].sort((a, b) => a - b); return ["Which number is the smallest?", ...ns.map(String), ""]; },
      () => { const st = pick([1, 2, 5, 10]), a = r(1, 100 - st * 4); const seq = [a, a + st, a + 2 * st, a + 3 * st]; const hide = r(1, 2); const ans = seq[hide]; const show = seq.map((x, i) => i === hide ? "___" : x).join(", "); return q(`Complete the number pattern:\n${show}`, ans, [1, st, 2], false, `Add ${st} each time.`); }
    ] },
  { t: "Basic Operations",
    q: [
      ["The sign \"+\" means…", "add", "subtract", "equals", "multiply"],
      ["The sign \"−\" means…", "subtract", "add", "equals", "divide"],
      ["0 + 7 = ?", "7", "0", "70", "8"],
      ["9 − 9 = ?", "0", "9", "18", "1"]
    ],
    g: [
      () => { const b = pick(ITEMS), a = r(1, 5), c = r(1, 5); return q(`${b.repeat(a)} + ${b.repeat(c)}|How many altogether?`, a + c, [1, 2]); },
      () => { const b = pick(ITEMS), a = r(4, 9), c = r(1, a - 1); return q(`${b.repeat(a)}|There are ${a}. ${c} are taken away. How many are left?`, a - c, [1, 2]); },
      () => { const a = r(1, 9), b = r(1, 9); return q(`${a} + ${b} = ?`, a + b, [1, 2, 10]); },
      () => { const a = r(10, 89), b = r(1, 99 - a); return q(`${a} + ${b} = ?`, a + b, [1, 2, 10]); },
      () => { const a = r(5, 18), b = r(1, a); return q(`${a} − ${b} = ?`, a - b, [1, 2, 10]); },
      () => { const a = r(20, 99), b = r(1, a - 1); return q(`${a} − ${b} = ?`, a - b, [1, 2, 10]); },
      () => { const n = pick(PEOPLE), b = pick(ITEMS), a = r(2, 9), c = r(2, 9); return q(`${b}|${n} has ${a} ${ITEM_NAME[b]}. Mother gives ${c} more. How many altogether?`, a + c, [1, 2]); },
      () => { const n = pick(PEOPLE), b = pick(ITEMS), a = r(6, 15), c = r(1, a - 1); return q(`${b}|${n} has ${a} ${ITEM_NAME[b]}. ${n} gives ${c} to a friend. How many are left?`, a - c, [1, 2]); },
      () => { const a = r(1, 50), b = r(1, 49); const s = a + b; return q(`${a} + ___ = ${s}`, b, [1, 2, 10]); }
    ] },
  { t: "Fractions", q: [
    ["🟩⬜|The coloured part is…", "1/2", "1/4", "2/1", "1/1"],
    ["🟩⬜⬜⬜|The coloured part is…", "1/4", "1/2", "4/1", "3/4"],
    ["Half is written as…", "1/2", "1/4", "2/1", "1/1"],
    ["A quarter is written as…", "1/4", "1/2", "4/1", "1/3"],
    ["1/2 is read as…", "one half", "one quarter", "two over one", "one two"],
    ["1/4 is read as…", "one quarter", "one half", "four over one", "one four"],
    ["🍕|A pizza is cut into 2 equal parts. Each part is…", "a half", "a quarter", "one whole", "two"],
    ["🍉|A watermelon is cut into 4 equal parts. Each part is…", "a quarter", "a half", "one whole", "four"],
    ["🍰|A cake is cut into 2 equal parts. You eat 1 part. You eat…", "1/2", "1/4", "2/2", "2/1"],
    ["Two halves make…", "one whole", "a quarter", "a half", "three"],
    ["Four quarters make…", "one whole", "a half", "a quarter", "two"],
    ["Which is bigger?", "1/2", "1/4", "They are the same", "Cannot be compared", "A half is bigger than a quarter."],
    ["To get a half, a thing is divided into ___ equal parts.", "2", "4", "3", "1"],
    ["To get a quarter, a thing is divided into ___ equal parts.", "4", "2", "3", "5"]
  ]},
  { t: "Money",
    q: [
      ["RM1 = ___ sen", "100", "10", "50", "1000"],
      ["The coin with the biggest value is…", "50 sen", "10 sen", "20 sen", "5 sen"],
      ["50 sen + 50 sen = ?", "RM1", "RM10", "100 RM", "50 sen"],
      ["💵|The note with the smallest value is…", "RM1", "RM5", "RM10", "RM50"],
      ["We keep our money in a…", "money box", "rubbish bin", "shoe", "fridge"]
    ],
    g: [
      () => { const cs = [10, 20, 50]; const a = pick(cs), b = pick(cs); return q(`${sen(a)} + ${sen(b)} = ?`, a + b, [10, 20], false, "", sen); },
      () => { const n = r(2, 5), v = pick([10, 20]); return q(`🪙 ${n} coins of ${v} sen.\nHow much altogether?`, n * v, [10, 20], false, "", sen); },
      () => { const ns = [1, 5, 10, 20, 50]; let a = pick(ns), b = pick(ns); if (a + b > 100) b = 1; return q(`💵|${rm(a)} + ${rm(b)} = ?`, a + b, [1, 5, 10], false, "", rm); },
      () => { const a = r(3, 9) * 10, b = r(1, a / 10 - 1) * 10; return q(`🍭|An ice cream costs ${sen(b)}. You have ${sen(a)}. How much money is left?`, a - b, [10, 20], false, "", sen); },
      () => { const a = r(10, 50), b = r(1, 40); return q(`📒|A book costs RM${b} and a bag costs RM${a}. What is the total price?`, a + b, [1, 2, 10], false, "", rm); }
    ] },
  { t: "Time",
    q: [
      ["How many days are there in a week?", "7", "5", "10", "12"],
      ["How many months are there in a year?", "12", "7", "10", "24"],
      ["🌅|The sun rises in the…", "morning", "night", "evening", "midnight"],
      ["🌙|The moon and stars can be seen at…", "night", "morning", "noon", "evening"],
      ["We have breakfast in the…", "morning", "night", "evening", "midnight"],
      ["The first month of the year is…", "January", "December", "March", "June"],
      ["The last month of the year is…", "December", "January", "November", "October"],
      ["The weekend in most states is…", "Saturday and Sunday", "Monday and Tuesday", "Wednesday and Thursday", "Tuesday and Wednesday"]
    ],
    g: [
      () => { const h = r(1, 12); const w = shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(x => x !== h)).slice(0, 3); return [`${CLOCK(h)}|What time is it?`, `${h} o'clock`, ...w.map(x => `${x} o'clock`), ""]; },
      () => { const i = r(0, 6); return from(`The day after ${DAYS[i]} is…`, DAYS[(i + 1) % 7], DAYS); },
      () => { const i = r(0, 6); return from(`The day before ${DAYS[i]} is…`, DAYS[(i + 6) % 7], DAYS); },
      () => { const i = r(0, 10); return from(`The month after ${MONTHS[i]} is…`, MONTHS[i + 1], MONTHS); },
      () => { const i = r(0, 11); return [`${MONTHS[i]} is the ___ month of the year.`, ORD(i + 1), ...shuffle([1,2,3,4,5,6,7,8,9,10,11,12].filter(x => x !== i + 1)).slice(0, 3).map(ORD), ""]; }
    ] },
  { t: "Measurement",
    q: [
      ["Which is the heaviest?", "🐘", "🐭", "🐱", "🐔"],
      ["Which is the lightest?", "🪶", "🧱", "🍉", "📚"],
      ["Which is the tallest?", "🦒", "🐶", "🐱", "🐰"],
      ["Which is the longest?", "🐍", "🐜", "🐞", "🐌"],
      ["The container that can hold the most water is the…", "🪣 bucket", "🥄 spoon", "🥛 glass", "☕ cup"],
      ["We can measure the length of a table using our…", "hand span", "clock", "coins", "thermometer"],
      ["A pencil is ___ than a broom.", "shorter", "longer", "taller", "heavier"],
      ["A football is ___ than a ping-pong ball.", "heavier", "lighter", "smaller", "thinner"],
      ["To weigh things, we use a…", "weighing scale", "ruler", "clock", "glass"]
    ],
    g: [
      () => { const a = r(5, 15), b = r(2, a - 1); return q(`📏|A red ribbon is ${a} paper clips long. A blue ribbon is ${b} paper clips long. What is the difference in length?`, a - b, [1, 2], false, "", n => n + " clips"); },
      () => { const a = r(2, 9), b = r(2, 9); return q(`🥛|Container A holds ${a} glasses of water. Container B holds ${b} glasses of water. How much water altogether?`, a + b, [1, 2], false, "", n => n + " glasses"); },
      () => { const a = r(3, 9); let b = r(3, 9); while (b === a) b = r(3, 9); const big = Math.max(a, b); return [`✏️ Pencil A = ${a} cubes\n✏️ Pencil B = ${b} cubes|Which pencil is longer?`, big === a ? "Pencil A" : "Pencil B", big === a ? "Pencil B" : "Pencil A", "Same length", "Cannot be measured", ""]; }
    ] },
  { t: "Space", q: [
    ["🔺|This shape is a…", "triangle", "square", "circle", "rectangle"],
    ["🟦|This shape is a…", "square", "triangle", "circle", "star"],
    ["⚪|This shape is a…", "circle", "triangle", "square", "cone"],
    ["⚽|The shape of this ball is a…", "sphere", "cube", "cone", "cylinder"],
    ["🎲|The shape of this dice is a…", "cube", "sphere", "cone", "cylinder"],
    ["🍦|The shape of this ice cream cone is a…", "cone", "sphere", "cube", "cuboid"],
    ["🥫|The shape of this tin is a…", "cylinder", "cube", "cone", "sphere"],
    ["📦|The shape of this box is a…", "cuboid", "sphere", "cone", "cylinder"],
    ["A triangle has ___ sides.", "3", "4", "5", "0"],
    ["A square has ___ sides.", "4", "3", "5", "6"],
    ["A circle has ___ corners.", "0", "1", "2", "4"],
    ["The shape that can roll is a…", "sphere", "cube", "cuboid", "pyramid"],
    ["A cube has ___ flat faces.", "6", "4", "8", "12"],
    ["Which one is a circle?", "🕐", "📐", "📦", "🔺"],
    ["Which one is a sphere?", "🏀", "📦", "🎲", "🥫"]
  ]},
  { t: "Data Handling",
    q: [
      ["A pictograph uses ___ to show information.", "pictures", "letters", "sounds", "colours only"],
      ["Data can be collected by…", "counting and recording", "sleeping", "running", "singing"]
    ],
    g: [
      () => {
        const items = shuffle(["🍎", "🍌", "🍇", "🍊", "🍓"]).slice(0, 4);
        const counts = shuffle([1, 2, 3, 4, 5, 6, 7]).slice(0, 4);
        const chart = items.map((e, i) => e.repeat(counts[i])).join("\n");
        const t = r(0, 2);
        if (t === 0) { const m = counts.indexOf(Math.max(...counts)); return [`${chart}|Which fruit has the most?`, items[m], ...items.filter((_, i) => i !== m), ""]; }
        if (t === 1) { const m = counts.indexOf(Math.min(...counts)); return [`${chart}|Which fruit has the fewest?`, items[m], ...items.filter((_, i) => i !== m), ""]; }
        const k = r(0, 3); return q(`${chart}|How many ${items[k]} are there?`, counts[k], [1, 2]);
      },
      () => {
        const items = shuffle(["🐱", "🐶", "🐰", "🐟"]).slice(0, 3);
        const counts = shuffle([2, 3, 4, 5, 6]).slice(0, 3);
        const chart = items.map((e, i) => e.repeat(counts[i])).join("\n");
        const total = counts.reduce((a, b) => a + b, 0);
        return Math.random() < 0.5
          ? q(`${chart}|Pets of pupils in class 1 Bestari. How many pets altogether?`, total, [1, 2, 3])
          : q(`${chart}|What is the difference between the number of ${items[0]} and ${items[1]}?`, Math.abs(counts[0] - counts[1]), [1, 2]);
      }
    ] }
],

/* ======================= SCIENCE ======================= */
sains: [
  { t: "Scientific Skills", q: [
    ["We observe using our…", "senses", "hair", "nails", "clothes"],
    ["How many senses do humans have?", "5", "3", "4", "6"],
    ["🔍|This tool is called a…", "magnifying glass", "binoculars", "ruler", "clock"],
    ["A magnifying glass is used to…", "see small things clearly", "measure length", "hear sounds", "weigh things"],
    ["Grouping things by the same features is called…", "classifying", "observing", "measuring", "predicting"],
    ["🍎🍌🍇🚗|The one that does not belong to the group is…", "🚗", "🍎", "🍌", "🍇"],
    ["🐱🐶🐰🌳|Which one is not an animal?", "🌳", "🐱", "🐶", "🐰"],
    ["Making a guess about what will happen is called…", "predicting", "measuring", "classifying", "drawing"],
    ["We use a ___ to measure the length of a table.", "ruler", "thermometer", "clock", "weighing scale"],
    ["Telling others what we found out is called…", "communicating", "classifying", "predicting", "measuring"]
  ]},
  { t: "Science Room Rules", q: [
    ["Before entering the science room, we must…", "wait for the teacher's permission", "run in", "eat first", "play"],
    ["In the science room, we must not…", "eat and drink", "listen to the teacher", "sit properly", "keep it clean"],
    ["If a glass item breaks, we must…", "tell the teacher", "pick it up with our hands", "hide it", "leave it"],
    ["After an activity, we must…", "wash our hands", "eat straight away", "run out", "leave things messy"],
    ["Materials in the science room must not be…", "tasted without the teacher's permission", "observed", "kept neatly", "labelled"],
    ["After use, apparatus must be…", "cleaned and put back", "thrown away", "taken home", "left on the table"],
    ["Rubbish in the science room must be thrown into the…", "rubbish bin", "sink", "table drawer", "school bag"],
    ["The correct attitude in the science room is to…", "listen to the teacher's instructions", "play catch", "shout", "push friends"]
  ]},
  { t: "Living and Non-living Things", q: [
    ["Which one is a living thing?", "🐟", "🪨", "🚗", "⚽"],
    ["Which one is a living thing?", "🌻", "🧸", "✏️", "🪑"],
    ["Which one is a non-living thing?", "🪑", "🐶", "🌻", "🐦"],
    ["Living things need…", "food, water and air", "batteries", "oil", "paint"],
    ["Living things can ___ but a stone cannot.", "grow", "fall", "get wet", "break"],
    ["A feature of living things is that they can…", "reproduce", "stay still forever", "not breathe", "not grow"],
    ["Cats reproduce by…", "giving birth", "laying eggs", "producing seeds", "budding"],
    ["Chickens reproduce by…", "laying eggs", "giving birth", "producing seeds", "budding"],
    ["A mango tree reproduces through…", "seeds", "eggs", "giving birth", "batteries"],
    ["🚗|A toy car moves because…", "it has batteries", "it is a living thing", "it eats", "it breathes"],
    ["Humans, animals and plants are…", "living things", "non-living things", "toys", "stones"]
  ]},
  { t: "Humans", q: [
    ["👀|This sense organ is used to…", "see", "hear", "smell", "taste"],
    ["👂|This sense organ is used to…", "hear", "see", "taste", "touch"],
    ["👃|This sense organ is used to…", "smell", "taste", "see", "hear"],
    ["👅|This sense organ is used to…", "taste", "smell", "see", "hear"],
    ["✋|Skin is used to…", "touch", "see", "taste", "smell"],
    ["We can taste that sugar is sweet using our…", "tongue", "eyes", "ears", "skin"],
    ["🧊|We know ice is cold using our…", "skin", "nose", "ears", "eyes"],
    ["🌹|We can smell a flower using our…", "nose", "tongue", "ears", "eyes"],
    ["🔔|The sound of a bell is detected by our…", "ears", "eyes", "tongue", "nose"],
    ["🎨|We see the colours of a painting using our…", "eyes", "ears", "nose", "skin"],
    ["One way to take care of our eyes is to…", "not watch TV too closely", "rub our eyes hard", "stare at the sun", "read in the dark"],
    ["One way to take care of our ears is to…", "not listen to very loud sounds", "put a pencil in our ears", "shout into a friend's ear", "never clean them"],
    ["People who cannot see read using…", "Braille", "sunglasses", "radio", "binoculars"]
  ]},
  { t: "Animals", q: [
    ["🐄|Cows eat…", "grass", "meat", "fish", "insects"],
    ["🐯|Tigers eat…", "meat", "grass", "leaves", "fruits"],
    ["The animal that has feathers is…", "🐦", "🐟", "🐱", "🐸"],
    ["The animal whose body has scales is…", "🐟", "🐦", "🐱", "🐒"],
    ["The animal that has a shell is…", "🐌", "🐶", "🐦", "🐒"],
    ["The animal that has wings is…", "🦋", "🐟", "🐍", "🐢"],
    ["🐍|A snake moves by…", "slithering", "flying", "hopping", "walking"],
    ["🐸|On land, a frog moves by…", "hopping", "flying", "slithering", "crawling"],
    ["🐟|A fish moves by…", "swimming", "hopping", "flying", "slithering"],
    ["🐦|A bird moves in the air by…", "flying", "slithering", "swimming", "crawling"],
    ["The animal that has 8 legs is…", "🕷️", "🐜", "🐔", "🐄"],
    ["The animal that has 2 legs is…", "🐔", "🐄", "🐱", "🕷️"],
    ["The animal that lives in water is…", "🐟", "🐐", "🐔", "🐱"],
    ["🐰|The long body part of a rabbit is its…", "ears", "tail", "wings", "fins"],
    ["🐘|The long body part of an elephant is its…", "trunk", "tail", "wings", "fins"]
  ]},
  { t: "Plants", q: [
    ["The part of a plant that absorbs water is the…", "root", "leaf", "flower", "fruit"],
    ["The part of a plant that is usually green is the…", "leaf", "root", "flower", "seed"],
    ["🌻|This yellow part of the plant is the…", "flower", "root", "stem", "leaf"],
    ["The part of a plant that holds the leaves and flowers is the…", "stem", "root", "seed", "fruit"],
    ["🌱|A seed can grow into a…", "seedling", "stone", "animal", "sand"],
    ["A flowering plant is the…", "mango tree", "fern", "moss", "pine tree"],
    ["Which one is a non-flowering plant?", "fern", "mango tree", "hibiscus", "paddy"],
    ["Plants need ___ to live.", "water, air and sunlight", "salt", "sugar", "oil"],
    ["🥕|The part of a carrot that we eat is the…", "root", "leaf", "flower", "fruit"],
    ["🌴|A coconut tree has a stem that is…", "tall and without branches", "short and thorny", "soft and creeping", "red"],
    ["🪷|A plant that lives in water is the…", "lotus", "rambutan", "coconut", "mango"],
    ["🌵|A cactus has…", "thorns", "fur", "scales", "wings"]
  ]},
  { t: "Magnets", q: [
    ["🧲|A magnet attracts objects made of…", "iron", "wood", "plastic", "paper"],
    ["Which one is attracted by a magnet?", "iron nail", "paper", "sponge", "rubber eraser"],
    ["Which one is not attracted by a magnet?", "rubber eraser", "iron nail", "iron pin", "iron screw"],
    ["The strongest parts of a magnet are…", "both ends (poles)", "the middle", "all parts equally", "none"],
    ["The ends of a magnet are called…", "poles", "fins", "corners", "bases"],
    ["The north pole of a magnet is labelled with the letter…", "N", "S", "M", "K"],
    ["The south pole of a magnet is labelled with the letter…", "S", "N", "M", "T"],
    ["An example of a magnet shape is a…", "horseshoe magnet", "star magnet", "heart magnet", "pentagon magnet"],
    ["Magnets are often used on…", "refrigerator doors", "glass plates", "cloth shirts", "wooden pencils"]
  ]},
  { t: "Absorption", q: [
    ["A material that can absorb water is a…", "towel", "plastic", "glass", "iron"],
    ["A material that does not absorb water is a…", "plastic bag", "tissue", "cloth", "sponge"],
    ["🧽|A sponge is good for wiping because it…", "absorbs water", "is hard", "is heavy", "is shiny"],
    ["🧥|A raincoat is made of a material that…", "does not absorb water", "absorbs water", "tears easily", "is heavy"],
    ["A bath towel is made of a material that…", "absorbs water", "does not absorb water", "is hard", "is see-through"],
    ["Which material absorbs the most water?", "sponge", "plastic", "coin", "iron spoon"],
    ["A baby's diaper is made of a material that…", "absorbs water", "is only waterproof", "is hard", "is slippery"],
    ["☂️|An umbrella is made of a material that is…", "waterproof", "absorbent", "easily dissolved", "heavy"],
    ["We use tissue to wipe up spilled water because tissue…", "absorbs water", "is waterproof", "is shiny", "is hard"]
  ]},
  { t: "The Earth", q: [
    ["🌍|The surface of the Earth is made up of…", "land and water", "plastic", "paper", "glass"],
    ["The biggest part of the Earth's surface is…", "water (sea)", "land", "mountains", "cities"],
    ["An example of a water source is a…", "river", "road", "hill", "field"],
    ["🌊|Sea water tastes…", "salty", "sweet", "sour", "bitter"],
    ["⛰️|This is a…", "mountain", "river", "sea", "lake"],
    ["The soil suitable for planting is…", "garden soil", "beach sand", "stone", "cement"],
    ["🏖️|Sand is found a lot at the…", "beach", "clouds", "trees", "bedroom"],
    ["🏺|Clay is suitable for making…", "pots", "paper", "cloth", "plastic"],
    ["We should take care of rivers by…", "not throwing rubbish into them", "throwing rubbish into them", "cutting down all trees on the banks", "pouring oil into them"]
  ]},
  { t: "Basic Construction", q: [
    ["🧱|Building blocks can be joined to build a…", "model", "food", "water", "sound"],
    ["Before building a model, we must…", "plan", "break the materials", "throw away the materials", "sleep"],
    ["A sketch is…", "a simple drawing before building", "a building material", "a cutting tool", "a type of glue"],
    ["After building, the components must be…", "kept back neatly", "thrown away", "stepped on", "left messy"],
    ["A model house can be built using…", "building blocks", "water", "wind", "light"],
    ["After building, we can ___ our model to friends.", "explain", "hide", "break", "throw away"],
    ["When building a model, we must ___ with friends.", "cooperate", "fight", "grab", "shout"]
  ]}
]
};
})();
