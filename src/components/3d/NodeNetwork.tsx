"use client";

import GlassNode from "./GlassNode";

const positions: [number, number, number][] = [
  [0, 0, 0],
  [2, 1, -1],
  [-2, 1, -1],
  [1.5, -1.5, 0],
  [-1.5, -1.2, 0],
  [0, 2, -2],
];

export default function NodeNetwork() {
  return (
    <>
      {positions.map((pos, index) => (
        <GlassNode
          key={index}
          position={pos}
        />
      ))}
    </>
  );
}