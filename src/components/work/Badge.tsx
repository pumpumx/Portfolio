export interface buttonProp{
    id:number,
    text:string,
    imgLink:string,
}
const  Badge = ({imgLink , text="React"}:buttonProp)=>{
    return(
        <button className="w-[30%] h-[10%] relative outline-1 overflow-hidden flex  border-white border-2 justify-around items-center  rounded-full">
            <div className="image w-[1rem] rounded-full ">
                <img src={imgLink} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="text w-[60%] text-white font-bold text-[10px]">
                {text}
            </div>
        </button>
    )
}

export default Badge
