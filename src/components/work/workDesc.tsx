interface point {
    content: string
  }
  interface workDesc {
    title: string,
    desc: string,
    points: point[],
  }
  
  import { firstProject, techStack } from "./work.constants.ts"
  import Badge from "./Badge.tsx"
  export const WorkDesc = ({ title = "This is my title", desc = "This is the desc of the task which i am trying to obtian yes yes this is what i want", points }: workDesc) => {
    return (
      <>
      <div className="w-full subpixel-antialiased antialised h-[20vh] bg-black  flex p-3 flex-col justify-center items-center ">
        <div className="w-full h-[30%]  flex flex-col">
          <span className="w-[90%] top-5 absolute h-[40%] flex mb-1">
            <p className="text-white font-bold text-2xl ">{title}</p>
          </span>
          <span className="w-full h-[60%]  flex">
            <p className=" text-white/80 font-semibold text-sm">
              {desc}
            </p>
          </span>
        </div>
        <div className="w-full h-[40%] hidden flex-col gap-2  ">
          {firstProject.map(({ id, text }) => (
            <li key={id} className="text-white list-style w-full text-sm">
              {text}
            </li>
          ))}
        </div>
  
      </div>
      <div className="w-full p-1 h-[20vh] bg-black left-0 flex flex-wrap gap-1  ">
          {techStack.map(({ id, imgLink, text }) => (
            <Badge key={id} id={id} text={text} imgLink={imgLink} />
          ))}
        </div>
      </>
    )
  }
  