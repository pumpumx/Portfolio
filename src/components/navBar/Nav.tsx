import { Cog } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createRotationTimeline , navStartAnimation } from './settingAnimate';
import { navData } from '../../constants/constants';
import {  useNavigate } from 'react-router-dom';
function Nav() {

  // const navigate = useNavigate() After implementing react router dom
  // const navigateHandler = (href:string)=>{
  //   navigate(`${href}`)
  // }
  const settingRef = useRef<HTMLDivElement | null>(null)  
  const tweenRef = useRef<GSAPTween | null>(null)
  const mainNavRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const navHandler = (href:string)=>{
    navigate(`${href}`)
  }
  useEffect(()=>{
    navStartAnimation(mainNavRef)
    if(settingRef.current){
      tweenRef.current = createRotationTimeline(settingRef)
    }

  },[])

  const mouseEnter = ()=>{
    if(settingRef.current){
      tweenRef.current?.play()
    }
  }

  const mouseLeave = ()=>{
    if(settingRef.current){
      tweenRef.current?.pause()
    }
  }


  return (
    <div ref={mainNavRef} className="w-full h-24 absolute  p-3 bg-transparent flex items-center justify-around">
      <div className="logo   w-[4rem] ">
        <img src="src/assets/logo.png" className="w-[4rem]" alt="Hey this is logo" />
      </div>
      <div className=" sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[30%] w-[70%] h-[65%] rounded-full sm:flex items-center justify-center p-0.5 
        bg-gradient-to-r from-white via-blue-500 to-black/50 hidden 
      bg-red-800 ">
      <div className="main antialiased-border hidden sm:flex h-full w-full flex-wrap text-nowrap
      rounded-full text-sm  items-center antialiased-border  antialiased justify-evenly text-gray-200 bg-gray-950">
          {navData.map(({id,name,gradient,href})=>(
            <div key={id} className={`cursor-pointer   w-[15%] ${gradient}
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center`} onClick={()=>navHandler(href)}>
            {name}
          </div>
          ))}
      </div>
    </div>  
      <div className="navigate cursor-pointer " ref={settingRef}
       onMouseEnter={mouseEnter}
       onMouseLeave={mouseLeave}
        >  
          <Cog color='#ffffff' size='2rem' />
      </div>

    </div>
  )
}

export default Nav