"use client"
import LinkBuilder from '@/components/LinkBuilder'
import InputBox from '@/components/small-components/InputBox'
import { RootState } from '@/store';
import React, {useEffect, useState,useRef} from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";
import { setUserCart } from "@/UserSlice";
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Cart {
    productName:string,
    productPrice:number,
    productQuantity:number,
    productSize:string,
    productThumbnail:string
}



const CheckoutPage = () => {
    const shippingCost = 10
    const user = useSelector((state:RootState)=>state.user.user)
    const userCart = user?user.userCart:[]
    const dispatch = useDispatch()
    const [cartTotal,setCartTotal]=useState<number>(0)
    useEffect(()=>{
      if(user){
            const totalPrice = user.userCart.reduce((acc, cart) => {
              return acc + cart.productPrice * cart.productQuantity; 
            }, 0);
            setCartTotal(Math.round(totalPrice))
      }
      
    },[user])
    const updateProductQuantity = (cartItem:Cart,quantity:number)=>{
        const tempCartArray = [...userCart];
        const itemIndex = userCart.findIndex((cart)=>cart==cartItem)
        if (tempCartArray[itemIndex].productQuantity < 20 && quantity === 1) {
          tempCartArray[itemIndex] = {
            ...tempCartArray[itemIndex],
            productQuantity: tempCartArray[itemIndex].productQuantity + quantity,
          };
        } else if (tempCartArray[itemIndex].productQuantity > 1 && quantity === -1) {
          tempCartArray[itemIndex] = {
            ...tempCartArray[itemIndex],
            productQuantity: tempCartArray[itemIndex].productQuantity + quantity,
          };
        } else if (tempCartArray[itemIndex].productQuantity === 1 && quantity === -1) {
          tempCartArray.splice(itemIndex, 1);
        }
    
      
        dispatch(setUserCart(tempCartArray));
      };
  return (
    <>
    <Navbar/>
    <ToastContainer position="top-right" theme="dark" autoClose={4000} />
    <div className='px-32 mt-20 mb-10 max-md:px-10 max-xs:px-5 max-xxs:px-2'>
    <div style={{fontFamily:"Roboto"}} className='text-3xl mb-3' >OutfitZen</div>
    <LinkBuilder productName={""} /> 
    </div>

    <div style={{fontFamily:"Roboto"}} className='flex max-xl:flex-col-reverse max-xl:gap-20 max-sm:gap-10'>
           <div  className='w-1/2 px-32 max-xl:w-full max-md:px-10 max-xs:px-5 max-xxs:px-2'>

    <div className='text-lg font-medium mb-3'>Shipping Address</div>
    <div className='flex flex-col gap-3'>
        <div className='flex gap-5'>
        <InputBox inputBoxPlaceholder='First Name' inputBoxType='text'/>
        <InputBox inputBoxPlaceholder='Last Name' inputBoxType='text'/>
        </div>
        <div>
           <InputBox inputBoxPlaceholder='Address' inputBoxType='text'/> 
        </div>
        <div>
           <InputBox inputBoxPlaceholder='Appartment/Flat No. (Optional)' inputBoxType='text'/> 
        </div>
        <div>
           <InputBox inputBoxPlaceholder='City' inputBoxType='text'/> 
        </div>
        <div>
           <InputBox inputBoxPlaceholder='Zip Code' inputBoxType='number'/> 
        </div>
        <div>
           <InputBox inputBoxPlaceholder='Phone Number (Optional)' inputBoxType='number'/> 
        </div>
        <div onClick={()=>{toast.info("Payment Gateway is disabled for demo project!")}} style={{cursor:"pointer"}} className='bg-black px-7 py-2.5 rounded-sm ml-auto'><div className='w-fit m-auto'>Proceed to payment</div></div>
        
    </div>
    </div> 
    <div className='w-1/2 px-32 max-xl:w-full max-md:px-10 max-xs:px-5 max-xxs:px-2'>
    {
        userCart?userCart.map((cart)=>{
          return(<div key={cart.productName} className='flex mt-5 h-28 gap-4 '><div style={{backgroundImage:`url(${cart.productThumbnail})`,backgroundSize:"cover"}} className='min-w-24 h-24 rounded-sm'></div><div className='flex flex-col'><div className='text-lg'>{cart.productName}</div><div className='text-sm opacity-60 ml-0.5'>Size: {cart.productSize}</div><div className='mt-auto pb-5 text-lg'>$ {cart.productPrice}</div></div><div className='flex flex-col-reverse h-24 ml-auto text-xl cursor-pointer justify-around opacity-75 items-center'>
            <div onClick={()=>{updateProductQuantity(cart,-1)}} style={{border:"2px solid rgb(255,255,255,0.75)",borderRadius:"100%",padding:"5px"}} className='text-xs'><FaMinus/></div><div className='text-base font-semibold mt-0.5'>{cart.productQuantity}</div><div onClick={()=>{updateProductQuantity(cart,1)}} style={{border:"2px solid rgb(255,255,255,0.75)",borderRadius:"100%",padding:"5px"}} className='text-xs '><FaPlus/></div>
        </div></div>)
        }):(<></>)
       }
    {
      userCart && (
        userCart.length>0?(<></>):(<div className='w-fit my-28 mx-auto text-xl'>No items in cart</div>)
      )
    }

    <div className='my-4 ml-0.5'>
        <div className='flex'><div className='text-lg'>Subtotal: </div><div className='ml-auto'>${cartTotal}</div></div>
        
        <div className='flex opacity-75 text-sm  '> <div className='ml-0.5'>Shipping: </div><div className='ml-auto'>${cartTotal>0?shippingCost:0}</div></div>
       
        <div className='flex my-2 text-xl'><div>Estimated Total: </div><div className='ml-auto'>${cartTotal>0?cartTotal + shippingCost:0}</div></div>
        
       </div>
       <div className='flex items-center gap-10'>
        <div className='w-full'><InputBox inputBoxPlaceholder='Coupon Code' inputBoxType='text'/> </div>
    
    <div style={{cursor:"pointer"}} className='bg-black px-7 py-3 rounded-sm text-sm'><div className='w-fit m-auto'>Apply</div></div>
    
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default CheckoutPage