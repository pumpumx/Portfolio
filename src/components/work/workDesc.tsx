interface point {
  content: string
}
interface buttonStack{
  id:number,
  name:string,
  imgLink:string,
  
}
interface workDesc {
  title: string,
  desc: string,
  points?: point[],
  buttonList?:buttonStack

  
}

import { firstProject, techStack } from "./work.constants.ts"
import Badge from "./Badge.tsx"

export const WorkDesc = ({
  title = "This is my title",
  desc = "This is the desc of the task which I am trying to obtain — yes yes, this is what I want.",
  points,buttonList
}: workDesc) => {
  return (
    <div className="w-full bg-transparent  text-white p-4 rounded-md flex flex-col gap-4">
      {/* Title and Description */}
      <div className="">
        <h3 className="text-4xl font-bold lg:text-4xl poetsen-one-regular pb-5">{title}</h3>
        <p className="text-sm text-center text-white/70 mt-2  ">{desc}</p>
      </div>

      {/* Points List */}
      <ul className="list-disc list-inside space-y-1 hidden md:block">
        {firstProject.map(({ id, text }) => (
          <li key={id} className="text-sm">{text}</li>
        ))}
      </ul>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 h-[2rem] sm:h-[2rem] md:h-[4rem]">
        {techStack.map(({ id, imgLink, text }) => (
          <Badge key={id} id={id} text={text} imgLink={imgLink} />
        ))}
      </div>
    </div>
  )
}
