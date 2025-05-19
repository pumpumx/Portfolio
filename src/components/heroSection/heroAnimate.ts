import gsap  from "gsap";
import SplitText from "gsap/SplitText";
import type { RefObject } from "react";



const startAnimation = (ref: RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;

    document.fonts.ready.then(() => {
        gsap.registerPlugin(SplitText)

        const split = new SplitText(ref.current, { type: 'words' })

         gsap.from(split.words, {
            yPercent: "random([-100,100])",
            rotate: "random([-30,30])",
            autoAlpha:0,
            yoyo:false,
            duration:1,
            stagger:{
                amount:0.1  ,
                from:"random"
            }
        }, 
        )

    })

}

export default startAnimation