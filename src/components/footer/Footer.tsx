import { ConnectButton } from "../heroSection/HeroSection"
import { FooterData, FooterExtraData } from "../../constants/constants.ts"
// import { useNavigate } from "react-router-dom"
function Footer() {

    // const navigate = useNavigate()

    // const navigateHandler = (href:string)=>{
    //     navigate(`${href}`)
    // }

    return (
        <div className="w-full h-[100vh] bg-black ">
            <div className="w-full flex flex-col justify-center items-center h-[70vh] bg-contain bg-[url(/FooterBg.jpg)]">
                <div className="Logo w-[50%] flex items-center justify-center">
                    <img src="" alt=""  className="w-full lg:w-[15rem]"/>
                </div>
                <div className="CenterText ">
                    <p className="text-white fontbold text-center poetsen-one-regular">
                        FROM CONCEPT TO CREATION <br />
                        LET's MAKE IT HAPPEN!
                    </p>
                </div>

                <div className="connectButton ">
                    <ConnectButton />
                </div>

                <div className="OtherText">
                    <p className="font-bold text-xs text-white text-center">I'm available for full-time roles & freelance projects.</p>
                    <span>
                        <p className="text-xs text-white text-center">I thrive on crafting dynamic web applications, and <br />
                            delivering seamless user experiences.</p>
                    </span>
                </div>
            </div>

            <div className="w-full h-[30vh] flex">
                <div className="aboutDiv w-[50%] flex flex-col justify-center items-center">
                    <div className="logo  w-[4rem] ">
                        <img src="/src/assets/logo.png" className="w-[4rem]" alt="Hey this is logo" />
                    </div>
                    <div className="text">
                        <p className="text-xs font-normal text-white text-center">I'm Naaz Manhas - a full stack web developer,
                            freelancer & problem solver. Thanks for checking out my site!
                        </p>
                        <br />
                        <p className="text-xs font-normal text-white text-center">	&#169; Naaz Manhas </p>
                    </div>
                </div>
                <div className="otherDiv w-[50%] flex items-center justify-around ">
                    <div className="w-[25%] h-full  flex flex-col justify-center gap-2 cursor-pointer  ml-2 items-center">
                        <div><p className="text-xs text-white font-bold text-center">General</p></div>
                        {FooterData.map(({ id, name, gradient }) => (
                            <div className={`${gradient} text-white text-xs hover:underline`} key={id}>
                                <p className="">{name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-[25%] h-full flex flex-col justify-center gap-2 items-center cursor-pointer hover:underline">
                        <div><p className="text-xs text-white font-bold text-center">Extra</p></div>
                        {FooterExtraData.map(({ id, name, gradient }) => (
                            <div className={`${gradient} text-white text-xs  hover:underline`} key={id}>
                                <p className="text-white">{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer