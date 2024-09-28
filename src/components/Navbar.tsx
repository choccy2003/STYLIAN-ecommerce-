"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { PiShoppingCartSimple } from "react-icons/pi"
import { IoIosSearch } from "react-icons/io";
import "../app/styles.css"
import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';

const Navbar:React.FC = ()=>{
const searchBox = useRef<HTMLInputElement>(null)
const router = useRouter()
const [searchBoxStatus,setSearchBoxStatus]= useState(false)
    return(
        <div className="top-0 z-50 mt-2">
        <div style={{fontFamily:"Roboto"}} className="flex text-white text-md items-center pt-2 pb-1.5 px-6">
            <div className="text-2xl" >
                <GiHamburgerMenu/>
            </div>
            <div className="ml-8 text-2xl font-medium cursor-pointer  ">
               <span>STYLIAN </span>
            </div>
            <div className="ml-12 cursor-pointer nav-element max-md:hidden">
                Home
            </div>
            <div className="ml-12 cursor-pointer nav-element max-md:hidden">
                Pages
            </div>
            <div onClick={()=>{router.push('/Browse-Products')}} className="ml-12 cursor-pointer nav-element max-md:hidden">
                Shop
            </div>
            <div className="ml-12 cursor-pointer nav-element max-md:hidden">
                Contact
            </div>
            <div  className="ml-auto mr-10">
            <input ref={searchBox} style={{backgroundColor:"#1e2028",width:"400px"}} className=" rounded-md h-8 pl-2 textbox-transition" placeholder="Search.." type="text"/>
            </div>
            <div onClick={()=>{
                if(searchBox.current!=null && searchBoxStatus==false){
                    searchBox.current.style.display="block"
                    setSearchBoxStatus(true)
                    searchBox.current.classList.remove('textbox-reverse-transition')
                    searchBox.current.classList.add('textbox-transition')
                }
                else if(searchBox.current!=null && searchBoxStatus==true && searchBox.current.value.length>1){
                    setSearchBoxStatus(false)
                    console.log("searching!")
                }
                else if(searchBox.current!=null && searchBoxStatus==true && searchBox.current.value.length==0){
                    setSearchBoxStatus(false)
                    searchBox.current.classList.remove('textbox-transition')
                    searchBox.current.classList.add('textbox-reverse-transition')
                    setTimeout(()=>{
                        if(searchBox.current)
                         searchBox.current.style.display="none"
                    },770)
                }
                
            }} className="text-2xl cursor-pointer ">
              
                <IoIosSearch/>
            </div>
            <div style={{fontSize:"21px"}} className="text-xl ml-6 cursor-pointer">
                <LuUser2/>
            </div>
            <div className="text-2xl mr-6 ml-6 cursor-pointer max-md:mr-0">
                <PiShoppingCartSimple/>
            </div>
        </div>
        </div>
    )
}

export default Navbar