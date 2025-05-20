import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import SpaceJet from "../../models/jetModel/BgJet.model"
import { Canvas } from "@react-three/fiber"
import { memo } from "react"
function BgJet() {

    return (
        <>
            <div className="w-full h-[100vh]  fixed top-0 z-[-1] ">
                <Canvas className="w-full h-[100vh]  " gl={{antialias:true}}>
                    <PerspectiveCamera makeDefault position={[85, 200, 40]} />

                        <SpaceJet
                            scale={0.17}
                            position={[10, 20, -20]}
                        />
             {/* Dont write ACTUAL jsx when present in a 3d environment  */}
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={1.5} color={0x5699FF} />
                    <OrbitControls enabled={false} />
                    <Environment preset="sunset" />
                </Canvas>
            </div>
        </>
    )
    
}

export default memo(BgJet)