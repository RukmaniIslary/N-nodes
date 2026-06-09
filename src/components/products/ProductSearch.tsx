"use client";

interface Props {
  value:string;
  setValue:(v:string)=>void;
}

export default function ProductSearch({
  value,
  setValue
}:Props){

  return (
    <input
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      placeholder="Search sneakers..."
      className="
      glass
      w-full
      p-4
      rounded-xl
      outline-none
      "
    />
  );
}