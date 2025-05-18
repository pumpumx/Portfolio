import { Cog } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createRotationTimeline , navStartAnimation } from './settingAnimate';
import { navData } from '../../constants/constants';
function Nav() {

  // const navigate = useNavigate() After implementing react router dom
  // const navigateHandler = (href:string)=>{
  //   navigate(`${href}`)
  // }
  const settingRef = useRef<HTMLDivElement | null>(null)  
  const tweenRef = useRef<GSAPTween | null>(null)
  const mainNavRef = useRef<HTMLDivElement>(null)
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
    <div ref={mainNavRef} className="w-full p-3 h-full bg-transparent flex items-center justify-around">
      <div className="logo   w-[4rem] ">
        <img src="src/assets/logo.png" className="w-[4rem]" alt="Hey this is logo" />
      </div>
      <div className=" sm:w-[70%] md:w-[60%] lg:w-[40%] w-[70%] h-[65%] rounded-full flex items-center justify-center p-0.5 
        bg-gradient-to-r from-white via-blue-500 to-black/50
      bg-red-800 ">
      <div className="main antialiased-border h-full w-full 
      rounded-full text-sm  flex items-center antialiased-border  antialiased justify-evenly text-gray-200 bg-gray-950">
          {navData.map(({id,name,gradient})=>(
            <div key={id} className={`cursor-pointer  w-[15%] ${gradient}
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center`} >
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