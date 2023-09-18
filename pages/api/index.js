var OFFSET = 0;
var LIMIT = 10;
const URL = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`;

export async function getAllPokemom() {
  try {
    const resp = await fetch(URL).then((response) => response.json());
    console.log(resp.results);
    return resp.results;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function convertHtml(data) {
  return {
    __html: `<div class="grid grid-cols-2  bg-slate-700 rounded-2xl h-[30vh] md:w-[40vw]"><p>${data}</p></div>`,
  };
}
