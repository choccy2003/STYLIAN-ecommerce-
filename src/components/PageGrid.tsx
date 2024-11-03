"use client"
import { useEffect, useState } from "react";
import { RootState, store } from "../store";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setPageValues } from "@/PageSlice";

const PageGrid = ( )=>{
    const products = useSelector((state:RootState)=>state.products)
    const {prev,next} = useSelector((state:RootState)=>state.pages)
    const [page,setPages] = useState<number[]>([])
    const dispatch = useDispatch()
    const calculatePages = ()=>{
        const itemsPerPage = 15
        const pages = Math.ceil(products.length / itemsPerPage)
        let pageArray = [] 
        for(let i =1; i<=pages ; i++){
             pageArray.push(i) 
        }
        setPages(pageArray)
        
    }
    useEffect(()=>{
        calculatePages()
            },[products])
        
  

 
    return(<>
    
       <div className="flex justify-center items-center opacity-75" >
        <div onClick={()=>{if(prev>0){dispatch(setPageValues({prev:prev-15,next:next-15}));window.scrollTo(0,0)}}} style={{fontSize:"24px",transform:"rotate(90deg)",cursor:"pointer"}}>
           <MdKeyboardArrowDown/>
        </div>
        <div className="flex">
            {page.map((pageNumber)=>{
                return <div onClick={()=>{dispatch(setPageValues({prev:(pageNumber-1)*15,next:pageNumber*15}));window.scrollTo(0,0)}} className="px-2 cursor-pointer" key={pageNumber}>{pageNumber}</div>
            })}
        </div>
        <div onClick={()=>{if(next<products.length){dispatch(setPageValues({prev:prev+15,next:next+15}));window.scrollTo(0,0)}}} style={{fontSize:"24px",transform:"rotate(-90deg)",cursor:"pointer"}}>
        <MdKeyboardArrowDown/>
        </div>
    </div> 

    
    </>)

}

export default PageGrid