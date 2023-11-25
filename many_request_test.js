import { llm } from "./llm.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "https://code4fukui.github.io/fukui-kanko-survey/area.csv";
const areas = await CSV.fetchJSON(url);
const spots = areas.map(i => {
  const n = i.エリア名;
  return n.substring(0, n.length - 3).trim();
});
console.log(spots.length);

const now = performance.now();
const list = [];
// 3060Ti
// const nreq = 3; // 13sec
//const nreq = 10; // 50sec 平均 5sec
//const nreq = 20; // 133sec 平均 6sec
//const nreq = 1; // 8sec
const nreq = spots.length; // 95 636sec 平均7sec
for (let i = 0; i < nreq; i++) {
  const spot = spots[i];
  const prompt = `ユーザー: ${spot}はどういうところですか？\nシステム: `;
  const p = llm(prompt);
  p.then(async res => {
    const dt = performance.now() - now;
    const s = dt + "\n" + prompt + res;
    console.log(s);
    await Deno.writeTextFile("log/" + i + ".txt", s);
  });
  console.log(p);
  list.push(p);
}
console.log("all started");
await Promise.all(list);
console.log("done");
