import { WorkDesc } from "../work/workDesc"
import { useRef } from "react"
import { useEffect } from "react"
import sliderAnimation from "./aboutAnimations"

function AboutExperience() {
    const sliderRef = useRef<HTMLDivElement>(null)
    const ParentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        sliderAnimation(sliderRef,ParentRef)
    }, [])

  return (
  <div className="w-full h-[200vh] sm:h-[150vh] sm:flex shadow-[0px_0px_50px_20px_black] sm:flex-col sm:justify-around  overflow-x-hidden overflow-y-hidden "> {/* Center About element  */}
                  <div className="w-full h-[15%] sm:h-[5%] flex text-white flex-col items-center  mt-10  ">
                      <span className="cal-sans-regular font-medium text-white/60 sm:text-xl">
                          The Experience
                      </span>
                      <span className="poetsen-one-regular
                      sm:text-5xl
                      italic text-3xl text-center bg-gradient-to-r  from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%_200%] glow-text bg-clip-text text-transparent animate-gradient">
                          Experience That Brings Ideas to Life
                      </span>
                  </div>
                  <div className="w-full h-[85%] sm:h-[80%] p-1 ">
                      <div className="w-full h-full flex flex-row relative justify-around lg:justify-center lg:mx-auto ">
                          <div className="slider w-[20%] h-[90%] self-center  flex  justify-center  ">
                              <div className="w-[25%] sm:w-[15%] md:w-[10%] lg:w-[10%] h-[95%] sm:h-[95%] bg-white/45 relative self-center rounded-md" ref={ParentRef}>
                                  <div className="w-full h-[2%] rounded-full absolute bg-gradient-to-l from-blue-600 to-purple-700" ref={sliderRef}>
  
                                  </div>
                              </div>
                          </div>
                          <div className="aboutDesc w-[70%] h-[90%] lg:w-[60%]  self-center">
                              <div className="w-full h-[30%] md:h-[60%] lg:w-full">
                                  <WorkDesc title="InfoTech | Frontend Engineer" desc="Developed CMS-driven, reusable pagebuilder blocks with dynamic configurability via Sanity and Contentful, empowering non-developers to manage content independently. Authored custom schemas and optimized GROQ queries for scalable content delivery across 6+ enterprise-level websites.
                                                          Built high-performance, pixel-perfect UIs using Next.js and Tailwind CSS, leveraging Static Site Generation (SSG), Server-Side Rendering (SSR), and SEO optimization, resulting in a 23% increase in user engagement and a 14% improvement in page load times.
                                                          Wrote type-safe, maintainable code in TypeScript, leading to a 15% reduction in bug reports and consistent performance across large-scale applications.
                                                          Integrated AI-Powered features via the Vercel AI SDK, enhancing personalization and driving higher user interaction rates.
                                                          Contributed 40+ hours/week to large-scale web development efforts, improving team velocity through Monorepo and regular code reviews."/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  )
}

export default AboutExperience