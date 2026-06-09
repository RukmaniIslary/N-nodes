"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function MouseRig({
  children,
}: {
  children: React.ReactNode;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ mouse }) => {
    if (!group.current) return;

    group.current.rotation.y = mouse.x * 0.3;
    group.current.rotation.x = -mouse.y * 0.2;
  });

  return (
    <group ref={group}>
      {children}
    </group>
  );
}