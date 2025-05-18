
import { ArrowRight } from "lucide-react"
interface workProp {
  title: string,
  imgLink: string,
  style: string
}
export const WorkBox = ({ title = "This is my name and this is the project which i want to give you all.", imgLink, style = " bg-gradient-to-b from-pink-700  to-pink-500" }: workProp) => {
  console.log("this image",imgLink)
  return (
    <div className={`w-full antialiased h-full rounded-md relative p-10 border-5 overflow-hidden
      group ${style}
    border-white/70 flex flex-col justify-between items-center ${style}`}>
      <div className="w-[80%] sm:flex h-[100%] hidden top-0 absolute ">
        <span className="w-[80%]  bg-clip-text"><p className=" font-bold text-white/70  mt-4">{title}</p></span>
        <span className="w-[25%] h-full flex justify-center items-center "><ArrowRight color="#ffffff" /></span>
      </div>
      <div className={`inisideDiv w-[80%] h-[100%] group-hover:-rotate-7 group-hover:scale-105  bottom-0 -mb-6 transition-all ease-in-out duration-300 
        shadow-[0px_0px_80px_2px_white] rounded-t-md absolute bg-[url(${imgLink})]  bg-cover
    `}>

      </div>
    </div>
  )
}

