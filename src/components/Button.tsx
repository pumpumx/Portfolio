import React from "react";

interface ButtonProps {
  name: string;
  logo?: string;
  width?: string;
  height?: string;
  handler? : ()=> void;
}

const Button: React.FC<ButtonProps> = ({ name, logo, width = "8rem", height = "2.5rem", handler }) => {
  return (
    <div
      className="rounded-full flex items-center justify-center p-0.5 
                 bg-gradient-to-r from-purple-500 via-red-500 to-green-600
                 hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
      style={{ width, height }}
    >
      <div  
        className="bg-black rounded-full flex justify-around items-center px-3 py-2 gap-2"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="logo w-[1rem] h-[1rem] ">
          <img src={logo} alt="Button Logo" className="w-full h-full object-contain" />
        </div>
        <div className="buttonText  text-white  text-sm font-bold  w-[70%] p-1">
          <button onClick={handler} className="w-[8rem] text-left"><p>{name}</p></button>
        </div>
      </div>
    </div>
  );
};

export default Button;
