"use client";

import { MeshTransmissionMaterial }
from "@react-three/drei";

export default function GlassPlatform(){

  return (
    <mesh
      rotation={[-Math.PI/2,0,0]}
      position={[0,-1.5,0]}
    >
      <cylinderGeometry
        args={[2.2,2.2,0.3,64]}
      />

      <MeshTransmissionMaterial
        transmission={1}
        roughness={0}
        thickness={1}
      />
    </mesh>
  );

}