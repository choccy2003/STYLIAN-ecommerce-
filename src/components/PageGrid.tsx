"use client"
import { useEffect } from "react";
import { RootState, store } from "../store";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setPageValues } from "@/PageSlice";

const PageGrid = ( )=>{
    const products = useSelector((state:RootState)=>state.products)
    const dispatch = useDispatch()
    
    const calculatePages = ()=>{
        const itemsPerPage = 15
        const pages = Math.ceil(products.length / itemsPerPage)
        console.log(pages)
    }
    useEffect(()=>{
        calculatePages()
            },[products])
        
  

    console.log(products)
    return(<>
    
       <div className="flex justify-center items-center opacity-75" >
        <div style={{fontSize:"24px",transform:"rotate(90deg)",cursor:"pointer"}}>
           <MdKeyboardArrowDown/>
        </div>
        <div>
            Pages here
        </div>
        <div onClick={()=>{dispatch(setPageValues({prev:16,next:30}))}} style={{fontSize:"24px",transform:"rotate(-90deg)",cursor:"pointer"}}>
        <MdKeyboardArrowDown/>
        </div>
    </div> 

    
    </>)

}

export default PageGrid