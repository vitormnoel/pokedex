import Image from "next/image";

function Card(props) {
  return (
    <div className="grid grid-cols-2  bg-slate-700 rounded-2xl h-[30vh] md:w-[40vw]">
      <div className="flex flex-col place-content-around text-start m-6 capitalize">
        <h2 className="text-2xl font-semibold">{props.name}</h2>

        <ul>
          {props.tags.map((tag) => (
            <li className="text-md font-semibold" key={tag}>{tag}</li>
          ))}
        </ul>

        <p className="text-lg font-sans font-bold text-slate-600">{props.id}</p>
      </div>
      <div className="h-[30vh]">
        <Image
          src={"/images/" + props.image}
          alt={props.name}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

export default Card;
