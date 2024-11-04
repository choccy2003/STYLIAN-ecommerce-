"use client"

import CatalogueGridProvider from "@/components/CalatogueGridProvider"
import CatalogueGrid from "@/components/CatalogueGrid"
import FilterAccordian from "@/components/FilterAccordian"
import FilterAccordianItem from "@/components/FilterAccordianItem"
import Footer from "@/components/Footer"
import LinkBuilder from "@/components/LinkBuilder"
import Navbar from "@/components/Navbar"
import PageGrid from "@/components/PageGrid"
import PageGridProvider from "@/components/PageGridProvider"
import SortButton from "@/components/SortButton"
import SortList from "@/components/SortList"
import SortListProvider from "@/components/SortListProvider"
import { store } from "@/store"
import { Provider } from "react-redux"
import { useEffect, useState } from 'react';


const ProductCataloguePage:React.FC = ()=>{
  const [mobileWidth,setMobileWidth]=useState<boolean>(false)
useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 500) {
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
    return(<div>
    <Navbar/>
    {!mobileWidth && (
          <div>
<LinkBuilder productName={''} />
    </div>
    )}
    <div className="flex items-end">
<div className="relative z-30 ml-auto">
      <SortListProvider/>
    </div>
      <SortButton/>
    </div>
    
    
    <div className="flex mt-8 max-lg:mt-4 z-10">
  <div className="min-w-80 ml-10 -mt-5 relative max-lg:!fixed max-lg:!-left-96">
    <Provider store={store}>
            <FilterAccordian />    
    </Provider>

          
          
        </div>

        <div className="flex flex-col w-full max-lg:w-screen max-lg:mr-0 mr-10">
        <CatalogueGridProvider/>
        <div className="mt-auto">
        <PageGridProvider/>
        </div>

        </div>

    </div>
    
    
       <Footer/> 
   
    
    </div>)
}

export default ProductCataloguePage