import BgJet from "./components/backgroundJet/BgJet.tsx"
import {Nav , HeroSection} from "./index.ts"
function App() {
 

return (
      <div className="main relative w-full min-h-screen">
      <BgJet/>
      <div className="heroSection mx-auto w-[50%] h-[calc(50vh)] ">
        <HeroSection/>
      </div>
    </div>
    
  )
}

export default App  