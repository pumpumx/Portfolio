
import { ArrowRight } from "lucide-react"
interface workProp {
  title: string,
  imgLink: string,
  style: string
}

import gsap from "gsap"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const WorkBox = ({ title = "This is my name and this is the project which i want to give you all.", imgLink = "", style = " bg-gradient-to-b from-pink-900  to-pink-700" }: workProp) => {

  const boxRef = useRef<HTMLDivElement>(null)
  
   
  useEffect(()=>{

    if(!boxRef) return;
    const element = boxRef.current

    const tween = gsap.fromTo(element,{
      scale:0.7
    },
    {
      scale:1.01,
      ease:'power1.in',
      scrollTrigger:{
        trigger:boxRef.current,
        start:'top bottom',
        end:'top  top',
        scrub:0.7
      }
    })

    return ()=>{
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  },[])


  return (

   
      <div ref={boxRef}
        className={`w-full antialiased h-full sm:h-full rounded-md relative p-10 border-5 lg:w-full lg:h-full  overflow-hidden  border-white/10 shadow-[0px_0px_20px_0px_#f7f7f7]
      group ${style} flex flex-col justify-between items-center bg-clip-padding ${style}`}>
        <div className="w-[80%] sm:flex h-[100%] hidden top-0 absolute ">
          <span className="w-[80%]  bg-clip-text"><p className=" font-bold text-white/70  mt-4">{title}</p></span>
          <span className="w-[25%] flex justify-center items-center "><ArrowRight color="#ffffff" /></span>
        </div>

        <div className={`inisideDiv w-[80%] h-[80%] sm:h-[70%] md:h-[80%]  group-hover:-rotate-7 group-hover:scale-105  bottom-0 -mb-6 transition-all ease-in-out duration-300 
        shadow-[0px_0px_80px_2px_white] rounded-t-md absolute
    `}
          style={{ backgroundImage: `url("${imgLink}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

        </div>
      </div>
      
  )
}

