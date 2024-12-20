"use client"
import { useEffect, useRef, useState } from "react"
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
interface Props {
    productName:string
}
const LinkBuilder:React.FC<Props> =(props)=>{
const path = usePathname()
const [pathArray,setPathArray]=useState<string[]>()

useEffect(()=>{
const pathArray = path.split('/').filter((path)=>path!=="Product")
if(props.productName){
    pathArray[pathArray.length-1] = props.productName 
}
setPathArray(pathArray)
},[path])
const router = useRouter()
const LinkRef = useRef<HTMLDivElement>(null)
const indexes = [1,2,3,4,5,6,7,8,9,10]
if(pathArray){
     return(
        <>
        <div style={{fontSize:"14px"}} className="flex mt-10 ml-6 gap-1.5 tracking-wide cursor-pointer opacity-70 w-fit" ref={LinkRef}>
       {pathArray.map((pathArray,i)=>{
        if(pathArray==""){
            return(<div key={0} onClick={()=>{router.push('/')}} className="flex items-center gap-1.5">Home</div>)
        }
        else if(pathArray!=""){
         return <div onClick={()=>{if(pathArray=="Home" || pathArray=="Browse-Products")router.push(`/${pathArray}`)}} className="flex items-center gap-1.5" key={indexes[i]}>{pathArray==pathArray[pathArray.length]?<></>:<div style={{fontSize:"16px"}}><IoIosArrowForward/></div>}{pathArray.replace('-',' ')} </div>    
        }
        
       })}
        </div>
        </>
    )
}
else{
    return(<></>)
}
   

}

export default LinkBuilder