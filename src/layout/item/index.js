import Card from "../../components/item/card";

function Items() {
  var pokemom = [
    {
      id: "#0001",
      name: "pikachu",
      tags: ["electric"],
      image: "pikachu.png",
    },
    {
      id: "#0002",
      name: "bulbasaur",
      tags: ["grass", "poison"],
      image: "bulbasaur.png",
    },
    {
      id: "#0003",
      name: "venusaur",
      tags: ["grass", "poison"],
      image: "venusaur.png",
    },
    {
      id: "#0004",
      name: "charmander",
      tags: ["fire"],
      image: "charmander.png",
    },
    {
      id: "#0005",
      name: "charizard",
      tags: ["fire", "flying"],
      image: "charizard.png",
    },
  ];

  return (
    <section className="flex justify-center">
      <div className="grid grid-cols-1 w-full gap-10 place-content-between md:grid-cols-2">
        {pokemom.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            tags={item.tags}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Items;
