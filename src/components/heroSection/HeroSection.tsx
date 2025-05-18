
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Copy, Check } from "lucide-react";

export function ConnectButton() {
    const [toggle, setToggle] = useState(true);
    const [innerData, setInnerData] = useState("helloNaaz@gmail.com");

    const toggleHandler = async () => {
        if (toggle) {
            await navigator.clipboard.writeText("helloNaaz@gmail.com");
            setToggle(false);
            setInnerData("Copied to clipboard");

            // Reset after 2 seconds
            setTimeout(() => {
                setToggle(true);
                setInnerData("helloNaaz@gmail.com");
            }, 2000);
        }
    };

    return (
        <div className="w-full py-6 px-4  z-10 flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-5">
            {/* Let's Connect Button */}
            <button className="w-[80%] sm:w-[70%] md:w-[12rem] lg:w-[12rem] h-[3rem]  text-white rounded-full relative flex items-center justify-center group transition-shadow duration-300 ease-in-out group-hover:shadow-[0px_0px_50px_1px_white]">
                <p className="font-bold absolute left-4 text-sm sm:text-base">Let's Connect</p>
                <div className="w-[25%] h-[90%] bg-white rounded-full absolute right-2 flex items-center justify-center transition-all ease-in-out group-hover:w-[95%]">
                    <ArrowRight color="black" size={20} />
                </div>
            </button>

            {/* Email Copy Button */}
            <div
                className="flex items-center justify-center gap-2 w-[80%] sm:w-[70%] md:w-[40%] lg:w-[30%] h-[3rem]  text-white/85 hover:text-white font-bold rounded-full px-4 cursor-pointer transition-colors text-center"
                onClick={toggleHandler}
            >
                <div>{toggle ? <Copy size={18} /> : <Check size={18} />}</div>
                <p className="text-sm sm:text-base text-nowrap">{innerData}</p>
            </div>
        </div>
    );
}

import startAnimation from "./heroAnimate";
function HeroSection() {
    const textRef = useRef<HTMLDivElement>(null)
    
    useEffect(()=>{
        startAnimation(textRef)
    },[])
    
    return (
        <>
            {/* Hero Title Section */}
            <div className="w-full font-bold text-3xl z-20 sm:text-3xl lg:text-5xl  md:text-3xl text-center h-[15vh] lg:h-[25vh] md:h-[20vh]  flex items-end text-white" >
                <div className="mx-auto textMain " ref={textRef}> 
                    <p>
                        I help founders turn ideas <br />
                        into seamless{' '} digital experiences
                    </p>
                </div>
            </div>

            {/* Subheading Introduction Section */}
            <div className="w-full h-[10vh] text-sm md:text-xl sm:text-lg lg:text-2xl  bg-gradient-to-l bg-clip-text from-white to-gray-400  text-transparent oswald-best
            text-center flex justify-center  mt-10 ">
                <p className="mr-2">Hello, I'm Naaz Manhas</p>

                <div className="inline-flex w-[6rem] h-[2rem] rounded-full justify-center items-center overflow-hidden  mx-2">
                    <img
                        src="src/assets/guts.jpg"
                        className="object-cover"
                        alt="Guts from Berserk"
                    />
                </div>

                <p className="ml-2 ">a full stack Web Developer</p>
            </div>

            <ConnectButton />

        </>
    );
}

export default HeroSection;

