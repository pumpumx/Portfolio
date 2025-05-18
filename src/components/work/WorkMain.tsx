import { WorkBox } from "./WorkBox"
import { WorkDesc } from "./workDesc"

const WorkMain = () => {
    return (
        <div className="w-full h-[200vh] bg-black/90 ">
            <div className="bg-black w-full h-[10vh]"></div>
            <div className="title w-full h-[20vh] mx-auto flex flex-col justify-center items-center bg-[url(/workBg.jpg)] bg-contain">
                <span className="text-xs text-white/80">Featured Case Studies</span>
                <span className="text-3xl text-white text-center">Curated <p className="inline poetsen-one-regular">Work</p></span>
            </div>
            <div className="w-full p-3 h-full">
                <div className="w-full h-[10%] sm:h-[20%] md:h-[30%] lg:h-[70%] transition-all">
                    <WorkBox imgLink="/firstProj.png" />
                </div>
                <div className="w-full h-[5%]">
                    <WorkDesc />
                </div>
                <div className="w-full h-[10%] sm:h-[20%] md:h-[30%] lg:h-[70%] transition-all">
                    <WorkBox imgLink="/secondProj.png" />
                </div>
                <div className="hidden">
                    <WorkDesc />
                </div>

            </div>

        </div>
    )
}

export default WorkMain