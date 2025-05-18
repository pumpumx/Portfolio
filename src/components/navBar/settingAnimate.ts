import gsap from "gsap";
import type { RefObject } from "react";

export function createRotationTimeline(ref: React.RefObject<HTMLDivElement | null>) {
  
  return gsap.to(ref.current, {
    rotationZ: 360,
    repeat: -1,
    duration: 2,
    ease: "linear",
    paused:true
  });

}

export function navStartAnimation(ref: RefObject<HTMLDivElement | null>){

  return gsap.fromTo(ref.current,{
    yPercent:-300,
  },{
    yPercent:0,
    duration:2,
    ease:'power2',
    stagger:{
      amount:0.5
    }
  })
}