"use client"

import { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md";
interface AnimationFunction {
    state: boolean;
    ref: React.RefObject<HTMLDivElement>;
}

interface Props{
    title:string,
    children: React.ReactNode; 
}

const FilterAccordianItem:React.FC<Props> = ({children,title})=>{

    const [categoryAccordian,setCategoryAccordian]=useState<boolean>(true)
    const [initialClick,setInitialClick]=useState<boolean>(true)
    const categoryRef = useRef<HTMLDivElement>(null)
    const arrowIconRef = useRef<HTMLDivElement>(null)
    const [click,setClick]=useState<string>("false")
    const handleAnimation = ({state , ref}:AnimationFunction)=>{
        if(ref.current && state && arrowIconRef.current){
            ref.current.classList.remove("filterAnimationReverse")
            arrowIconRef.current.style.transform="rotate(0deg)"
            if(initialClick==false){
              
                  ref.current.classList.add("filterAnimation")
         
              
              
            }
             else if(initialClick){
             ref.current.classList.add("filterAnimationReverse")
             }
          
           
            
        }
        else if(ref.current && !state && arrowIconRef.current){
            ref.current.classList.remove("filterAnimation")
            ref.current.classList.add("filterAnimationReverse")
             arrowIconRef.current.style.transform="rotate(-90deg)"
          
        }
      
       setClick("false")
       
    }

    useEffect(()=>{
      if(click=="true")
      handleAnimation({state:categoryAccordian,ref:categoryRef});
    },[click])
    return(
        
          <div ref={categoryRef} style={{fontSize:"16px"}}  className="mt-1 h-fit overflow-hidden">
            <div className="flex items-center"  onClick={()=>{categoryAccordian?setCategoryAccordian(false):setCategoryAccordian(true);if(categoryRef.current){const contentHeight = categoryRef.current.scrollHeight;
            categoryRef.current.style.setProperty('--dynamic-height',`${contentHeight}px`)};setInitialClick(false);setClick("true") }}>{title} <div ref={arrowIconRef} className="text-2xl mt-0.5 ml-auto transition-all duration-300 "><MdKeyboardArrowDown/></div></div>
            <div>{children}</div>
          </div>
          
          
    )
}

export default FilterAccordianItem