"use client";

import { PointMaterial, Points } from "@react-three/drei";

export default function Particles() {
  const particles = Array.from(
    { length: 500 },
    () => [
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 25,
    ]
  );

  return (
    <Points
      positions={particles.flat()}
      stride={3}
    >
      <PointMaterial
        transparent
        size={0.05}
        color="#ff4db8"
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}