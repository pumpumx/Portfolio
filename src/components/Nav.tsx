import { Cog } from 'lucide-react';
function Nav() {

  return (
    <div className="w-full  p-3 h-full bg-transparent flex items-center justify-around">
      <div className="logo   w-[4rem] ">
        <img src="src/assets/logo.png" className="w-[4rem]" alt="Hey this is logo" />
      </div>
      <div className="w-[30%] h-[65%] rounded-full flex items-center justify-center p-0.5 
        bg-gradient-to-r from-purple-500 via-red-500 to-green-600
      bg-red-800 ">
      <div className="main antialiased-border h-full w-full 
      rounded-full text-sm  flex items-center antialiased-border antialiased justify-evenly text-gray-200 bg-gray-950">
          <div className=" cursor-pointer  w-[15%] hover:shadow-[0_0_80px_1px_#fa00ff]
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center "><span><p>Home</p></span></div> 
            <div className=" cursor-pointer  w-[15%] hover:shadow-[0_0_80px_1px_yellow]
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center "><span><p>About</p></span></div> 
            <div className=" cursor-point er  w-[15%] hover:shadow-[0_0_80px_1px_red]
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center "><span><p>Work</p></span></div> 
            <div className=" cursor-pointer w-[15%] hover:shadow-[0_0_80px_1px_#28ed1a]
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center "><span><p>Blog</p></span></div> 
            <div className=" cursor-pointer  w-[15%] hover:shadow-[0_0_80px_1px_violet]
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center "><span><p>More</p></span></div> 
            <div className=" cursor-pointer  w-[15%] hover:shadow-[0_0_80px_1px_#00f6ff]
          bg-gradient-to-b hover:from-white/15 hover:to-white/20 hover:text-white
          h-[90%] flex justify-center rounded-full items-center "><span ><p>Book a Call</p></span></div> 
      </div>
    </div>  
      <div className="navigate cursor-pointer   ">
          <Cog color='#ffffff' size='2rem' />
      </div>

    </div>
  )
}

export default Nav