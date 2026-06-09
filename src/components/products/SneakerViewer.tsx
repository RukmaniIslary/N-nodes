"use client";

import { Canvas } from "@react-three/fiber";

import {
 Environment,
 OrbitControls
}
from "@react-three/drei";

import SneakerModel
from "../3d/SneakerModel";

import PremiumLights
from "../3d/PremiumLights";

import GlassPlatform
from "../3d/GlassPlatform";

export default function SneakerViewer({
 model
}:{
 model:string
}){

 return(

  <div className="h-[500px]">

   <Canvas
    camera={{
     position:[0,0,5]
    }}
   >

    <PremiumLights />

    <Environment preset="city" />

    <SneakerModel model={model} />

    <GlassPlatform />

    <OrbitControls
     enableZoom={false}
     autoRotate
     autoRotateSpeed={2}
    />

   </Canvas>

  </div>

 );

}