import gsap from "gsap";
import type { RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sliderAnimation = (sliderRef:RefObject<HTMLDivElement | null>)=>{
    if(!sliderRef.current) return;

    gsap.registerPlugin(ScrollTrigger)

    const parent = sliderRef.current.parentElement
    if(!parent) return

    const parentHeight = parent.offsetHeight
    const sliderHeight = sliderRef.current.offsetHeight

    const moveY = parentHeight - sliderHeight

    let colorTween: GSAPTween | null = null;

    gsap.fromTo(sliderRef.current,{
        y:0
    },{
        y: moveY,
        ease:'none',
        scrollTrigger:{
            trigger: parent,
            start:'top center',
            end:'bottom center',
            scrub:0.7,
        }
    })
}

export default sliderAnimation