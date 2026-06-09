"use client";

interface Props{
  value:string;
  setValue:(v:string)=>void;
}

const categories = [
  "All",
  "Basketball",
  "Running",
  "Lifestyle",
  "Skate"
];

export default function ProductFilter({
  value,
  setValue
}:Props){

  return (
    <div className="flex gap-3 flex-wrap">

      {categories.map((category)=>(
        <button
          key={category}
          onClick={()=>setValue(category)}
          className={`
            px-5 py-2 rounded-full glass
            ${value===category ? "bg-red-500" : ""}
          `}
        >
          {category}
        </button>
      ))}

    </div>
  );
}