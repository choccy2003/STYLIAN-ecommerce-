"use client"

import { RootState } from '@/store'
import { setUserData } from '@/UserSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const LoginDataFetch = () => {
    const dispatch = useDispatch()
    const userCart = useSelector((state:RootState)=>state.user.user.userCart)
    const loggedIn = useSelector((state:RootState)=>state.user.userLoggedIn)
    useEffect(()=>{
        (async()=>{
            const response = await fetch("https://outfitzen-backend.onrender.com/users/session",{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                credentials: 'include',
              })
            const data = await response.json()
            if(response.status==400){
              console.log("error")
            }
            else{
              dispatch(setUserData({user:data,userLoggedIn:true}))
            }
            
        })()
        
    },[])

    useEffect(()=>{
    if(loggedIn){
      (async()=>{
  const response = await fetch("https://outfitzen-backend.onrender.com/users/cart-update",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body:JSON.stringify({
      userCart:userCart
    })
  })
  const data = await response.json()
})()
    }

    },[userCart,loggedIn])
 


  return (
    <>
    </>
  )
}

export default LoginDataFetch