
import { ArrowRight } from "lucide-react"
interface workProp {
  title: string,
  imgLink: string,
  style: string
}
const WorkBOX = ({ title = "This is my name and this is the project which i want to give you all.", imgLink, style = " bg-gradient-to-b from-pink-700  to-pink-500" }: workProp) => {
  return (
    <div className={`w-full antialiased h-[50vh] relative p-10 border-5 overflow-hidden
      group ${style}
    border-white/70 flex flex-col justify-between items-center ${style}`}>
      <div className="w-[80%] flex h-[10vh] top-0 absolute ">
        <span className="w-[80%]  bg-clip-text"><p className="text-md font-bold text-white/70  mt-4">{title}</p></span>
        <span className="w-[25%] h-full flex justify-center items-center "><ArrowRight color="#ffffff"/></span>
      </div>
      <div className={`inisideDiv w-[80%] h-[70%] group-hover:-rotate-7 group-hover:scale-105  bottom-0 -mb-6 transition-all ease-in-out duration-300 bg-amber-400 
        shadow-[0px_0px_80px_2px_white] rounded-t-md absolute bg-[url(${imgLink})]
    `}>

      </div>
    </div>
  )
}

interface point{
  content:string
}
interface workDesc {
  title:string,
  desc:string,
  points:point[],
}

const WorkDesc = ({title,desc,})=>{
  return(
    <div className="w-full h-[50vh] bg-black">

    </div>
  )
}

export default WorkDesc