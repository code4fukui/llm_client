import { llm } from "./llm.js";

const prompt = `ユーザー: 神はいますか？\nシステム: `;
const res = await llm(prompt);
console.log(res);
