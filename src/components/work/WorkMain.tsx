import { useRef } from "react"
import { WorkBox } from "./WorkBox"
import { WorkDesc } from "./workDesc"

const WorkMain = () => {

   

    return (
        <>
            <div className="w-full min-h-screen bg-black/90 overflow-x-hidden">
                {/* Top Spacer */}
                {/* Title Section */}
                <div className="w-full lg:w-full min-h-[40vh] flex flex-col justify-center items-center bg-[url(/workBg.jpg)] bg-cover bg-center text-white text-center">
                    <span className="text-xs lg:text-2xl">Featured Case Studies</span>
                    <h2 className="text-3xl lg:text-6xl font-semibold">
                        Curated{" "}

                        <span className="poetsen-one-regular  bg-gradient-to-r  from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%_200%] glow-text bg-clip-text text-transparent animate-gradient">
                            Work
                        </span>

                    </h2>
                </div>
                {/* Case Study 1 */}


                <div className="w-[70%] min-h-screen bg-orange-400 mx-auto mt-10  overflow-y-hidden">
                    <div className="w-full flex relative flex-col  lg:flex-row gap-6 p-6  ">
                        <div className="w-[70%] lg:w-[60%] bg-red-500 flex-col justify-around">
                            <div className="w-full h-[20%] lg:w-[70%] sm:h-[20%] lg:h-[50vh] self-center " >
                                    <WorkBox imgLink={"firstProj.png"} />
                            </div>
                            <div className="w-full h-[20%] lg:w-[70%] sm:h-[30vh] lg:h-[50vh] "  >
                        
                                    <WorkBox imgLink={"firstProj.png"} />
                            </div>
                            <div className="w-full h-[20%] lg:w-[70%]  sm:h-[30vh] lg:h-[50vh] "  >
                                    <WorkBox imgLink={"firstProj.png"} />
                            </div>
                        </div>
                        <div className="w-[40%] bg-amber-300 flex justify-center items-center">
                            <div className="w-full h-[50%] bg-green-500">
                                <WorkDesc />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkMain
