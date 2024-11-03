"use client"
import { CiFilter } from "react-icons/ci";
import FilterAccordian from "./FilterAccordian";
import { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
const SortButton = ()=>{
const [filterBtnActivated,setFilterBtnActivated]=useState<boolean>(false)
const filterGridRef = useRef<HTMLDivElement>(null)
useEffect(()=>{

    if(filterGridRef.current && filterBtnActivated){
        filterGridRef.current.classList.remove("hidden")
        filterGridRef.current.classList.add("block")
        filterGridRef.current.classList.add("filter-list-animation")
        filterGridRef.current.style.left="0px"
    }
    else if(filterGridRef.current && !filterBtnActivated){
        filterGridRef.current.classList.remove("filter-list-animation")
        filterGridRef.current.style.left="100%"
        filterGridRef.current.classList.add("hidden")
 
        
       
    }

},[filterBtnActivated])
useEffect(() => {
    const handleResize = () => {
     
      if (filterBtnActivated && filterGridRef.current) {
        setFilterBtnActivated(false);
        filterGridRef.current.classList.add("hidden")

      }
    };


    window.addEventListener("resize", handleResize);

    return () => {
     
      window.removeEventListener("resize", handleResize);
    };
  }, [filterBtnActivated]);
    return (
        <>
        <div onClick={()=>{filterBtnActivated?setFilterBtnActivated(false):setFilterBtnActivated(true)}} style={{borderRadius:"5px",border:"2px solid rgb(255,255,255,0.4)",}} className="hidden gap-1 items-center mr-6 font-medium py-1 px-2 cursor-pointer max-lg:flex  overflow-x-hidden ">
<div style={{fontSize:"22px"}}><CiFilter/></div>
<div>Filter</div>
</div>
<div ref={filterGridRef} style={{left:"100%"}} className="w-full hidden relative z-50 max-lg:absolute max-lg:top-48 max-lg:px-3 filter-list">
  <Provider store={store}>
             <FilterAccordian/> 
  </Provider>

          
          
        </div>
        </>
        
    )
}

export default SortButton

