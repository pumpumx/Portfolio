import { useRouteError } from "react-router-dom";


const RouteError:React.FC = ()=> {
  const error:unknown = useRouteError();
  console.error(error);
  
  return (
    <div className="w-full h-screen  text-white font-bold bg-black flex justify-center items-center">
        <div className="text-center flex flex-col w-[50%] h-[20%] justify-around ">
        <h1 className="text-center text-3xl ">Oops!</h1>
      <p className="text-6xl">{error.status} {error.statusText}</p>
      <pre className="text-4xl">{error.data || error.message}</pre>
        </div>
     
    </div>
  );
}

export default RouteError