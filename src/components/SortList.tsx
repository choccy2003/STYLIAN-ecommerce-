"use client"
import { setSearchArray } from "@/SearchProductSlice";
import { RootState } from "@/store";
import { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const SortList = ()=>{
    const DropDownRef = useRef<HTMLDivElement>(null)    
    const [dropDownOpen,setDropDownOpen] = useState(false)
    const sortOptions= ["Popularity","Price (low)","Price (high)","Reviews"]
    const [selectedSortOption,setSelectedSortOption]=useState<string>
    ("Popularity")
    const products = useSelector((state:RootState)=>state.products)
    const searchArray = useSelector((state:RootState)=>state.searchProducts)
    const dispatch = useDispatch()
    const handleSort=(sortOption:string)=>{
        const productList = searchArray.length>0?[...searchArray]:[...products]
        if(sortOption=="Price (low)"){
          const sortedArray=productList.sort((a,b)=> a.productPrice - b.productPrice)  
          dispatch(setSearchArray(sortedArray))
        }
        else if(sortOption=="Price (high)"){
            const sortedArray=productList.sort((a,b)=> b.productPrice - a.productPrice)  
            dispatch(setSearchArray(sortedArray))
        }
        else{
            dispatch(setSearchArray(productList))
        }        
        
    }
    const handleAnimation = ()=>{
            if(DropDownRef.current && !dropDownOpen){
                 DropDownRef.current.style.borderLeft="2px solid rgb(255,255,255,0.4)"
                 DropDownRef.current.style.borderRight="2px solid rgb(255,255,255,0.4)"
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
    <div  className="flex mt-8 gap-4 items-center font-medium mr-7 "><div className="ml-auto cursor-default">Sort By</div><div style={{borderRadius:"5px",border:"2px solid rgb(255,255,255,0.4)",width:"127px"}} className=" flex gap-1 items-center py-1 px-2 cursor-pointer relative">
    <div style={{position:"relative",zIndex:"50"}} onClick={()=>{dropDownOpen?setDropDownOpen(false):setDropDownOpen(true);if(DropDownRef.current){const contentHeight = DropDownRef.current.scrollHeight;
                DropDownRef.current.style.setProperty('--dynamic-height-sort',`${contentHeight}px`)}; handleAnimation()}} className="relative flex items-center"><div style={{width:"83px"}}>{selectedSortOption}</div><div className="relative left-1.5" style={{fontSize:"24px"}}><MdKeyboardArrowDown/></div></div><div ref={DropDownRef}  style={{width:"127px",borderRadius:"5px",borderTop:"0px",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",marginLeft:"-10px",top:"32px",backgroundColor:"#1e2028",position:"absolute",zIndex:"-10",borderBottom:"0px"}} className="h-0 overflow-hidden">
                    
                    {sortOptions.map((option)=>{
                        if(option!=selectedSortOption){
                     return (<div key={option}><div onClick={()=>{setSelectedSortOption(option);handleSort(option)}} className="py-2 px-2 text-sm">{option}</div><hr className="opacity-50"/><hr className="opacity-40"/></div>)       
                        }
                        else{
                            return <div key={option}></div>
                        }
                        
                    })}

                    </div></div></div></>)
}

export default SortList