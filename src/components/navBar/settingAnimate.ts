import gsap from "gsap";

export function createRotationTimeline(ref: React.RefObject<HTMLDivElement | null>) {
  
  return gsap.to(ref.current, {
    rotationZ: 360,
    repeat: -1,
    duration: 2,
    ease: "linear",
    paused:true
  });

}