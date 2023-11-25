const getEndpoiont = async () => {
  try {
    return (await import("./endpoint.js")).endpoint
  } catch (e) {
    console.log(e);
  }
  return "http://localhost:5050/";
};

const endpoint = await getEndpoiont();
console.log(endpoint);

export const llm = async (prompt) => {
  const url = endpoint + "?p=" + encodeURIComponent(prompt);
  const text = await (await fetch(url)).text();
  return text;
};
