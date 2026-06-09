"use client";

import gsap from "gsap";

import {
 useEffect,
 RefObject
}
from "react";

export function useReveal(
 ref:RefObject<any>
){

 useEffect(()=>{

  if(!ref.current) return;

  gsap.fromTo(
   ref.current,
   {
    opacity:0,
    y:100
   },
   {
    opacity:1,
    y:0,
    duration:1
   }
  );

 },[ref]);

}