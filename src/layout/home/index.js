import Items from "../item";
import { getAllPokemom, convertHtml } from "../../../pages/api/index";

function Home() {
  const a = getAllPokemom();

  return (
    <main className="px-10 my-14">
      <h1 className="text-center text-4xl font-bold mb-10">Pokedex</h1>
      <p className="text-2xl mb-6">Pokémom</p>
      <Items />
      <div className="flex flex-col items-center mt-16">
        <button
          onClick={() => {
            console.log("click me");
          }}
          className="bg-slate-600 w-[18vw] h-[6vh] rounded-xl font-semibold"
        >
          click me
        </button>

      </div>
    </main>
  );
}

export default Home;
