"use client"
import { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const SortList = ()=>{
    const DropDownRef = useRef<HTMLDivElement>(null)    
    const [dropDownOpen,setDropDownOpen] = useState(false)
    const handleAnimation = ()=>{
            if(DropDownRef.current && !dropDownOpen){
                 DropDownRef.current.style.border="2px solid rgb(255,255,255,0.4)"
                DropDownRef.current.classList.remove("sortAnimationReverse")
                DropDownRef.current.classList.add("sortAnimation")
                 DropDownRef.current.style.height="fit-content"
            }
            else if(DropDownRef.current && dropDownOpen){
                DropDownRef.current.classList.remove("sortAnimation")
                DropDownRef.current.classList.add("sortAnimationReverse")
                DropDownRef.current.style.height="0px"
                setTimeout(()=>{
                   if(DropDownRef.current)
                    DropDownRef.current.style.border="0px solid rgb(255,255,255,0.4)"
                },400)
                
            }
    }

    return (<>
    <div  className="flex mt-8 gap-4 items-center font-medium mr-7 opacity-90 "><div className="ml-auto cursor-default">Sort By</div><div style={{borderRadius:"5px",border:"2px solid rgb(255,255,255,0.4)",}} className=" flex gap-1 items-center py-1 px-2 cursor-pointer relative">
    <div style={{backgroundColor:"#1e2028",position:"relative",zIndex:"50"}} onClick={()=>{dropDownOpen?setDropDownOpen(false):setDropDownOpen(true);if(DropDownRef.current){const contentHeight = DropDownRef.current.scrollHeight;
                DropDownRef.current.style.setProperty('--dynamic-height-sort',`${contentHeight}px`)}; handleAnimation()}} className="relative flex items-center"><div>Popularity</div><div className="relative left-1.5" style={{fontSize:"24px"}}><MdKeyboardArrowDown/></div></div><div ref={DropDownRef}  style={{width:"118px",borderRadius:"5px",borderTop:"0px",borderTopLeftRadius:"0px",marginLeft:"-10px",top:"181px",backgroundColor:"#1e2028",position:"fixed",zIndex:"0"}} className="h-0 overflow-hidden"><div className="py-2 px-2 text-sm">Popularity</div><hr className="opacity-50"/><hr className="opacity-40"/><div className="py-2 px-2 text-sm">{`Price (low)`}</div><hr className="opacity-50"/><hr className="opacity-40"/><div className="py-2 px-2 text-sm">{`Price (high)`}</div><hr className="opacity-50"/><hr className="opacity-40"/><div className="py-2 px-2 text-sm">Reviews</div><hr className="opacity-50"/><hr className="opacity-40"/><div className="py-2 px-2 text-sm">Relevance</div></div></div></div></>)
}

export default SortList