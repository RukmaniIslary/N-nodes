"use client";

import SceneCanvas from "../3d/SceneCanvas";
import NodeNetwork from "../3d/NodeNetwork";
import Particles from "../3d/Particles";
import MouseRig from "../3d/MouseRig";

export default function Logo3D() {
  return (
    <div className="hidden md:block h-[500px] w-full">
      <SceneCanvas>

        <MouseRig>

          <NodeNetwork />

          <Particles />

        </MouseRig>

      </SceneCanvas>
    </div>
  );
}