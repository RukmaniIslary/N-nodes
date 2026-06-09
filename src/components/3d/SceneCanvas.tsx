"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function SceneCanvas({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 45,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <pointLight
        position={[-5, 2, 2]}
        intensity={3}
        color="#ff1744"
      />

      <pointLight
        position={[5, 3, 0]}
        intensity={2}
        color="#ff4db8"
      />

      <Environment preset="city" />

      {children}
    </Canvas>
  );
}