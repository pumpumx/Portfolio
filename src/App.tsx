import {Nav , HeroSection} from "./index.ts"

function App() {
  return (
    <div className="main relative w-full h-[200vh] bg-black">
      <div className="navBar h-24 sticky font- top-0 ">
        <Nav /> 
      </div>

      <div className="heroSection flex  mx-auto flex-col justify-center  items-center   w-[50%] h-[calc(50vh-50px)] ">
        <HeroSection />
      </div>

      
    </div>
  )
}

export default App