import gsap from "gsap";
import type { RefObject } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

const onScrollText = (ref: RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    document.fonts.ready.then(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText)

        const split = new SplitText(ref.current, { type: 'lines',linesClass:'split-line' })

        split.lines.forEach((lines,i)=>{
            gsap.fromTo(lines,{
                xPercent: i%2===0 ?-100:100,
                opacity:0
            },{
                xPercent:0,
                opacity:1,
                ease:'power2.out',
                scrollTrigger:{
                    trigger:ref.current,
                    start:'top bottom',
                    end:'top center',
                    scrub:1
                },
                
            })
        })
    }
    )
}

export default onScrollText