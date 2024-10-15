"use client"

import { RootState } from '@/store';
import React, {useEffect, useState,useRef} from 'react'
import { FaPlus,FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useSelector, UseSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';
interface Cart {
    productName:string,
    productPrice:number,
    productQuantity:number,
    productSize:string,
    productThumbnail:string
}
interface Props {
  cartMenuCloseBtn:boolean,
  setCartMenuCloseBtn:Dispatch<SetStateAction<boolean>>
}
const CartMenu:React.FC<Props> = (props) => {
  const shippingCost = 10
  const [quantityCounter,setQuantityCounter] = useState<number>(1)
  const user = useSelector((state:RootState)=>state.user.user)
  const [userCart,setUserCart] = useState<Cart[]>([])
  const cartMenuRef = useRef<HTMLDivElement>(null)
  const [initialRender,setInitialRender]=useState<boolean>(true)
  const [cartTotal,setCartTotal]=useState<number>(0)
  useEffect(()=>{
    if(user){
          setUserCart(user.userCart)
          const totalPrice = user.userCart.reduce((acc, cart) => {
            return acc + cart.productPrice * cart.productQuantity; // Assuming each cart item has a quantity
          }, 0);
          setCartTotal(totalPrice)
    }
    

    
  },[user])

  useEffect(()=>{
    if(initialRender==false){
          if(!props.cartMenuCloseBtn && cartMenuRef.current){
      cartMenuRef.current.classList.remove("cart-animation-reverse")
      cartMenuRef.current.classList.add("cart-animation")
      cartMenuRef.current.style.left="0%"
    }
    else if(props.cartMenuCloseBtn && cartMenuRef.current){
      cartMenuRef.current.classList.remove("cart-animation")
      cartMenuRef.current.classList.add("cart-animation-reverse")
      cartMenuRef.current.style.left="20%"
    }
    }

    setInitialRender(false)

  },[props.cartMenuCloseBtn])
  return (
    <div ref={cartMenuRef} className='relative left-full'>
          <div style={{marginLeft:"auto",backgroundColor:"rgb(35 38 49)",fontFamily:"Roboto"}} className='absolute w-96 left-0 right-0 z-50 '>
        <div className='flex items-center'><div className='text-2xl my-4 ml-5'>Your Cart</div><div style={{cursor:"pointer"}} className='ml-auto mr-3'><RxCross2 onClick={()=>{props.setCartMenuCloseBtn(true)}} fontSize={26} /></div></div>
       <div style={{height:"450px"}} className='cart-scroll overflow-y-scroll mr-1 ml-5'>
       
       {
        userCart?userCart.map((cart)=>{
          return(<div key={cart.productName} className='flex mt-5 mr-5 h-28 gap-4 '><div className='w-24 h-24 bg-red-50 rounded-sm'></div><div className='flex flex-col'><div className='text-lg'>{cart.productName}</div><div className='text-sm opacity-60 ml-0.5'>Size: {cart.productSize}</div><div className='mt-auto pb-5 text-lg'>$ {cart.productPrice}</div></div><div className='flex flex-col-reverse h-24 ml-auto text-xl cursor-pointer justify-around opacity-75 items-center'>
            <div style={{border:"2px solid rgb(255,255,255,0.75)",borderRadius:"100%",padding:"5px"}} className='text-xs'><FaMinus/></div><div className='text-base font-semibold mt-0.5'>{cart.productQuantity}</div><div style={{border:"2px solid rgb(255,255,255,0.75)",borderRadius:"100%",padding:"5px"}} className='text-xs '><FaPlus/></div>
        </div></div>)
        }):(<></>)
       }
    {
      userCart && (
        userCart.length>0?(<></>):(<div style={{marginTop:"50%"}} className='w-fit mx-auto text-xl'>No items in cart</div>)
      )
    }
       
       </div> 
       <div className='ml-5 my-4'>
        <div className='flex'><div className='text-lg'>Subtotal: </div><div className='ml-auto mr-5'>${cartTotal}</div></div>
        
        <div className='flex opacity-75 text-sm  '> <div className='ml-0.5'>Shipping: </div><div className='ml-auto mr-6'>${cartTotal>0?shippingCost:0}</div></div>
       
        <div className='flex my-2 text-xl'><div>Estimated Total: </div><div className='ml-auto mr-5'>${cartTotal>0?cartTotal + shippingCost:0}</div></div>
        
       </div>
       <div  style={{border:"1px solid rgb(255,255,255,0.5)"}} className='w-80 py-2 mb-5 mt-2 m-auto cursor-pointer opacity-90 max-1.5xl:w-full max-1.5xl:mx-auto '>
                    <div className='w-fit m-auto text-lg' >Checkout</div>
                </div>

    </div>
    </div>

  )
}

export default CartMenu