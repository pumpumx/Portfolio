import ImageGallery from "./ImageGallery"
import Demo from "./HeatMap"
import AboutExperience from "./AboutExperience"

function About() {
    
    return (
        <div className="w-full min-h-screen bg-black/90 relative overflow-x-hidden ">
            <div className="w-full xl:w-[50%] sm:w-[90%]  mx-auto h-full ">
            <div className="w-full h-[100vh]   flex flex-col sm:flex-row justify-center items-center gap-5 ">
                <div className="w-full h-[50%] sm:w-[50%] lg:w-[60%]  text-white flex flex-col items-center">
                    <span className="mt-5 font-bold glow-text sm:text-lg lg:text-3xl">More About me</span>
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
           <AboutExperience />
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