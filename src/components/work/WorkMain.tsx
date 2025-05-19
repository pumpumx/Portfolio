import { useRef } from "react"
import { WorkBox } from "./WorkBox"
import { WorkDesc } from "./workDesc"
import {MouseParallax} from 'react-just-parallax'
const WorkMain = () => {

    const parentMouseRef = useRef<HTMLDivElement>(null)
    const parentMouse2Ref = useRef<HTMLDivElement>(null)

    return (
        <>
            <div className="w-full min-h-screen bg-black/90 overflow-x-hidden">
                {/* Top Spacer */}
                <div className="bg-black w-full h-[10vh]" />
                {/* Title Section */}
                <div className="w-full lg:w-full min-h-[30vh] flex flex-col justify-center items-center bg-[url(/workBg.jpg)] bg-cover bg-center text-white text-center">
                    <span className="text-xs lg:text-2xl">Featured Case Studies</span>
                    <h2 className="text-3xl lg:text-6xl font-semibold">
                        Curated{" "}
                       
                        <span className="poetsen-one-regular  bg-gradient-to-r  from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%_200%] glow-text bg-clip-text text-transparent animate-gradient">
                            Work
                        </span>
                      
                    </h2>
                </div>
                {/* Case Study 1 */}
                <div className="w-[70%] mx-auto mt-10 overflow-y-hidden">
                    <div className="w-full flex flex-col lg:flex-row gap-6 p-6  ">
                    
                        <div className="w-full h-[20vh] lg:w-1/2 sm:h-[30vh] lg:h-[50vh] " ref={parentMouseRef} >
                        <MouseParallax  parallaxContainerRef={parentMouseRef} shouldResetPosition={true}>
                            <WorkBox imgLink={"firstProj.png"} />
                            </MouseParallax>
                        </div>
                        
                        <div className="w-full lg:w-1/2">

                            <WorkDesc />
                        </div>
                    </div>

                    {/* Case Study 2 */}
                    <div className="w-full flex flex-col lg:flex-row gap-6 p-6">
                        <div className="w-full h-[20vh] lg:w-1/2 sm:h-[50vh]" ref={parentMouse2Ref}>
                        <MouseParallax  parallaxContainerRef={parentMouse2Ref} shouldResetPosition={true}>

                            <WorkBox imgLink="secondProj.png" title="" style={"bg-gradient-to-b from-blue-950 to-blue-500 "} />
                        </MouseParallax>

                        </div>

                        <div className="w-full lg:w-1/2">
                            <WorkDesc title="My Portfolio Website" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkMain
