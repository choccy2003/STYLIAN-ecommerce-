"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { PiShoppingCartSimple } from "react-icons/pi"
import "../app/styles.css"
import { useRef, useState,useEffect } from "react";
import { useRouter } from 'next/navigation';
import CartMenuProvider from "./CartMenuProvider";
import SearchBox from "./small-components/SearchBox";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "@/store";
import UserLoginButton from "./small-components/UserLoginButton";
import SearchBoxMobile from "./small-components/SearchBoxMobile";


const Navbar:React.FC = ()=>{
const router = useRouter()
const [mobileWidth,setMobileWidth]=useState<boolean>(false)
useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 1110) {
            setMobileWidth(true);
        } else {
            setMobileWidth(false);
        }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
const scrollToSection = () => {
    const section = document.getElementById("contact-section");
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  const handleNavigation =  () => {
    router.push("/"); 
    setTimeout(scrollToSection, 200); 
  };

const [cartMenuCloseBtn,setCartMenuCloseBtn] = useState<boolean>(true)

    return(
        <div className="top-0 z-50 mt-2 mb-3">
        <div style={{fontFamily:"Roboto"}} className="flex text-white text-md items-center pt-2 pb-1.5 px-6">
            <div className="text-2xl" >
                <GiHamburgerMenu/>
            </div>
            <div onClick={()=>{router.push("/")}} className="ml-8 text-2xl font-medium cursor-pointer  ">
               <span>OutfitZen </span>
            </div>
            <div onClick={()=>{router.push("/")}} className="ml-12 cursor-pointer nav-element max-md:hidden">
                Home
            </div>
            <div onClick={()=>{router.push('/Browse-Products')}} className="ml-12 cursor-pointer nav-element max-md:hidden">
                Shop
            </div>
            <div onClick={()=>{handleNavigation()}} className="ml-12 cursor-pointer nav-element max-md:hidden">
                Contact
            </div>
            
                {
                    mobileWidth?(<Provider store={store}>
                        <div className="ml-auto"><SearchBoxMobile/></div>
                         
                     </Provider>):(<Provider store={store}>
                
                <SearchBox/> 
             </Provider>)
                }

          

            <Provider store={store}>
                <UserLoginButton/>
            </Provider>

            <div onClick={()=>{cartMenuCloseBtn?setCartMenuCloseBtn(false):setCartMenuCloseBtn(true)}} className="text-2xl mr-6 ml-6 cursor-pointer max-md:mr-0">
                <PiShoppingCartSimple/>
            </div>
        </div>
   
            <CartMenuProvider cartMenuCloseBtn={cartMenuCloseBtn} setCartMenuCloseBtn={setCartMenuCloseBtn} /> 
      
            
        </div>
    )
}

export default Navbar