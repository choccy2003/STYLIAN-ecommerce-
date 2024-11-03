import { setProduct } from '@/ProductSlice';
import { setSearchBoxState } from '@/SearchBoxStateSlice';
import { setSearchArray } from '@/SearchProductSlice';
import { RootState } from '@/store';
import React from 'react'
import { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
const SearchBox = () => {
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
    <input ref={searchBox} onChange={(e)=>{handleSearch(e)}} style={{backgroundColor:"#1e2028",width:"400px"}} className=" rounded-md h-8 pl-2 textbox-transition" placeholder="Search.." type="text"/>
    </div>
    <div onClick={(e)=>{
        if(searchBox.current!=null && searchBoxStatus==false){
            searchBox.current.style.display="block"
            setSearchBoxStatus(true)
            searchBox.current.classList.remove('textbox-reverse-transition')
            searchBox.current.classList.add('textbox-transition')
        }
        else if(searchBox.current!=null && searchBoxStatus==true && searchBox.current.value.length>1){
            setSearchBoxStatus(false)
            dispatch(setSearchBoxState(true))
            
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
    </div></>
  )
}

export default SearchBox