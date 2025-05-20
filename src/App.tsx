import { lazy, memo} from "react"
import { HeroSection} from "./index.ts"

const LazyBgJet  = lazy(()=>import('./components/backgroundJet/BgJet.tsx'))
function App() {
 
return (
      <div className="main relative w-full min-h-screen overflow-x-hidden">
         <LazyBgJet />
      <div className="heroSection mx-auto mt-40 w-[50%] h-[calc(50vh)] ">
        <HeroSection/>
      </div>
    </div>
    
  )
}

export default memo(App )  