"use client";

export default function PremiumLights() {

  return (
    <>

      <ambientLight intensity={1} />

      <directionalLight
        position={[5,5,5]}
        intensity={4}
      />

      <pointLight
        position={[2,2,2]}
        color="#ff1744"
        intensity={30}
      />

      <pointLight
        position={[-2,2,-2]}
        color="#ff4db8"
        intensity={20}
      />

      <spotLight
        position={[0,5,0]}
        angle={0.3}
        intensity={50}
      />

    </>
  );

}