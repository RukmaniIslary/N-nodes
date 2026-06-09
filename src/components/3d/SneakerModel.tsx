"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SneakerModel({
  model,
}:{
  model:string;
}){

  const { scene } = useGLTF(model);

  const ref =
    useRef<THREE.Group>(null);

  useFrame((state)=>{

    if(!ref.current) return;

    ref.current.rotation.y += 0.003;

    ref.current.position.y =
      Math.sin(
        state.clock.elapsedTime * 2
      ) * 0.15;

  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2}
    />
  );
}