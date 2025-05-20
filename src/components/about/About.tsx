import { useEffect, useRef } from "react"
import { WorkDesc } from "../work/workDesc"
import ImageGallery from "./ImageGallery"
import sliderAnimation from "./aboutAnimations"
import Demo from "./HeatMap"

function About() {
    const sliderRef = useRef<HTMLDivElement>(null)
    const ParentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        sliderAnimation(sliderRef,ParentRef)
    }, [])
    return (
        <div className="w-full min-h-screen bg-black/90 relative overflow-x-hidden">
            <div className="w-full xl:w-[50%] sm:w-[90%]  mx-auto h-full ">
            <div className="w-full h-[100vh] flex flex-col sm:flex-row justify-center items-center gap-5 ">
                <div className="w-full h-[50%] sm:w-[50%]  text-white flex flex-col items-center">
                    <span className="mt-5 font-bold glow-text sm:text-lg">More About me</span>
                    <span className="h-[25%]  ">
                        <h2 className="text-3xl sm:text-5xl mt-5 lg:text-6xl font-semibold text-center">
                            Hi there! I'm {" "}
                            <span className="poetsen-one-regular italic bg-gradient-to-l  from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%_200%] glow-text bg-clip-text text-transparent animate-gradient">
                                Naaz
                            </span>
                        </h2>
                    </span>
                    <span className="text-center mt-5  text-white/50 font-medium cal-sans-regular w-full flex flex-col items-center h-[75%] sm:text-lg">
                        <span>
                            I'm Naaz Manhas, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex
                            problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more. <br />
                        </span>
                        <span className="">
                            When I'm not immersed in work,
                            I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it. <br /><br />
                        </span>
                        <span className="w-full">
                            I believe in waking up each day eager to make a difference!
                        </span>

                    </span>

                </div>
                <div className="imageGallery w-full mt-10  h-[30%] relative  sm:w-[50%] sm:h-[20%]">
                    <ImageGallery />
                </div>
            </div> 
            <div className="w-full h-[200vh] sm:h-[150vh] sm:flex sm:flex-col sm:justify-around  overflow-x-hidden overflow-y-hidden "> {/* Center About element  */}
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
                            <div className="w-[30%] sm:w-[15%] md:w-[10%] lg:w-[10%] h-[95%] sm:h-[95%]  bg-white/45 relative self-center rounded-md" ref={ParentRef}>
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
            <div className="w-full h-[40vh] ">
                <div className="w-full h-[30%] flex justify-center items-center text-white font-bold text-3xl sm:text-5xl">
                <span className="flex text-center lg:text-7xl bg-gradient-to-l poetsen-one-regular from-pink-500 via-yellow-500 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient ">
                         GitHub Contributions
                </span>
                </div>
                <div className="githubHeatMap flex w-full h-[70%] items-center justify-center overflow-y-hidden">
                    <Demo/>
                </div>
               
            </div>
            </div>
        </div>
    )
}

export default About    