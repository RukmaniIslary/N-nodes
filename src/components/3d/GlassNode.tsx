"use client";

import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GlassNode({
  position,
}: {
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.004;

    ref.current.position.y =
      position[1] +
      Math.sin(state.clock.elapsedTime * 2) * 0.08;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.22, 64, 64]} />

      <MeshTransmissionMaterial
        thickness={1}
        roughness={0}
        transmission={1}
        ior={1.5}
        chromaticAberration={0.2}
        backside
      />
    </mesh>
  );
}