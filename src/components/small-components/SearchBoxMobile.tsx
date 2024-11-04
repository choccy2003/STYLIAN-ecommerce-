import { setProduct } from '@/ProductSlice';
import { setSearchBoxState } from '@/SearchBoxStateSlice';
import { setSearchArray } from '@/SearchProductSlice';
import { RootState } from '@/store';
import React from 'react'
import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
const SearchBoxMobile = () => {
    const [searchBoxStatus,setSearchBoxStatus]= useState(false)
    const searchBox = useRef<HTMLInputElement>(null)
    const products = useSelector((state:RootState)=>state.products)
    const dispatch = useDispatch()
    const handleSearch = (e:any)=>{
    dispatch(setSearchBoxState(false))
    const searchString = e.target.value.toLowerCase();
    const catalogArray = products.filter((product) => 
        product.productName.toLowerCase().includes(searchString)
    );
    dispatch(setSearchArray(catalogArray))
    
    }

  return (
    <>            <div  className="ml-auto mr-10">
    <input ref={searchBox} onChange={(e)=>{handleSearch(e)}} style={{backgroundColor:"rgb(27, 29, 37)",width:"90%",marginLeft:"5%"}} className="absolute left-0 top-12 hidden rounded-md h-8 pl-2" placeholder="Search.." type="text"/>
    </div>
    <div onClick={(e)=>{
        if(searchBox.current!=null && searchBoxStatus==false){
            searchBox.current.style.display="block"
            setSearchBoxStatus(true)
        }
        else if(searchBox.current!=null && searchBoxStatus==true && searchBox.current.value.length>1){
            setSearchBoxStatus(false)
            dispatch(setSearchBoxState(true))
            
        }
        else if(searchBox.current!=null && searchBoxStatus==true && searchBox.current.value.length==0){
            setSearchBoxStatus(false)
            searchBox.current.style.display="none"
        }
        
    }} className="text-2xl relative left-4 cursor-pointer ">
      
        <IoIosSearch/>
    </div></>
  )
}

export default SearchBoxMobile