"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation';
import React, { useState,useEffect } from 'react'
import { Dispatch, SetStateAction } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface LoginForm {
  userEmail:string,
  userPassword:string
}
interface SignupForm{
  userEmail:string,
  userPassword:string,
  userName:string
}
const LoginPage = () => {
  const router = useRouter()
  const [loginFormActive,setLoginFormActive]=useState(true)
  const [mobileView,setMobileView]=useState(false)
  const [loginFormData,setLoginFormData]=useState<LoginForm>({
    userEmail:"",
    userPassword:""
  })
  const [signupFormData,setSignupFormData]=useState<SignupForm>({
    userName:"",
    userEmail:"",
    userPassword:""
  })
  const [otpFieldShow,setOtpFieldShow]=useState<boolean>(false)
  const [otpFieldData,setOtpFieldData]=useState<number>()
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1295);
     
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChange = <FormDataType extends LoginForm | SignupForm>(e:any,stateSetFunction:Dispatch<SetStateAction<FormDataType>>,formData:FormDataType)=>{
      const {name,value}= e.target
      stateSetFunction({...formData,[name]:value})
  }
  const handleLoginSubmit = async()=>{
    const response = await fetch('https://outfitzen-backend.onrender.com/users/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        userEmail:loginFormData.userEmail,
        userPassword:loginFormData.userPassword
      }),
    })
    const status = response.status
    const data = await response.json()
    if(status==200){
      toast.success(data.message)
      setTimeout(()=>{
        router.push('/')
      },500)
    }
    if(status==400){
      toast.error(data.message)
    }
  }
  const handleSignupSubmit = ()=>{
    (async()=>{
    if(signupFormData.userEmail && signupFormData.userName && signupFormData.userPassword && !otpFieldData){
      const response = await fetch('https://outfitzen-backend.onrender.com/users/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupFormData),
      })
      const status = response.status
      const data = await response.json()
      if(status==200){
        setOtpFieldShow(true)
        toast(await data.message)
      }
      else if (status==400){
        toast.error(data.message)
      }
     
    }
    if(otpFieldData && otpFieldShow){
      const response = await fetch('https://outfitzen-backend.onrender.com/users/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          otp:otpFieldData,
          userName:signupFormData.userName,
          userEmail:signupFormData.userEmail,
          userPassword:signupFormData.userPassword
        }),
      })
      const status = response.status
      const data = await response.json()
      if(status==201){
        toast.success(data.message)
        setTimeout(()=>{
          window.location.reload()
        },1000)
      }
      if(status==200){
        toast.error(data.message)
      }
    }
    if(!signupFormData.userEmail && !signupFormData.userName && !signupFormData.userPassword){
      toast.error("Please fill all the fields!")
    }
    
    })()

  }
  const handleOtpRegenrate=async()=>{
    const response = await fetch('https://outfitzen-backend.onrender.com/users/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        regenrateOtp:true,
        userName:signupFormData.userName,
        userEmail:signupFormData.userEmail,
        userPassword:signupFormData.userPassword
      }),
    })
    const status = response.status
    if(status==200){
      toast.success("OTP regenrated")
    }
  }
  return (
    <div>
      <div className='fixed w-screen z-50'>
        <Navbar/>
      </div>
      <ToastContainer position="top-right" theme="dark" />
       <div style={{placeItems:"center",height:"95vh"}} className='grid '>
<div className='flex w-fit mx-auto relative mt-12 max-1.5xl:mt-0 max-1.5xl:flex-col rounded-md login-form-background'>
        
        
        <div className='relative'>
          <div className='absolute z-10 transition-all duration-500 max-1.5xl:!w-96' style={{filter:"brightness(85%)",minWidth:"650px",top:`${mobileView?(loginFormActive?"0%":"100%"):("unset")}`,left:`${!mobileView?(loginFormActive?"0%":"100%"):("unset")}`}}>
            <img className='rounded-md max-1.5xl:w-96' width={650} src={"/loginPageCover.png"}/>
            {loginFormActive?(<div key={"login-form"} style={{fontSize:"24px",width:"650px"}} className={`absolute top-0 mt-80 max-1.5xl:mt-40 max-1.5xl:!text-lg text-center login-form-animation max-1.5xl:!w-96`}><div className='mb-2 max-1.5xl:mb-1'>New to OutfitZen?</div><div className="w-fit m-auto bg-black px-7 py-1 text-base cursor-pointer max-1.5xl:text-sm max-1.5xl:px-5" onClick={()=>{loginFormActive?setLoginFormActive(false):setLoginFormActive(true)}}>Join Now</div></div>):(<div key={"register-form"} style={{fontSize:"24px",width:"650px"}} className={`absolute top-0 mt-80 max-1.5xl:mt-40 text-center login-form-animation max-1.5xl:!w-96 max-1.5xl:!text-lg`}><div className='mb-2 max-1.5xl:mb-1'>Already a member?</div><div className="w-fit m-auto bg-black px-7 py-1 text-base cursor-pointer max-1.5xl:text-sm max-1.5xl:px-5" onClick={()=>{loginFormActive?setLoginFormActive(false):setLoginFormActive(true)}}>Log In</div></div>)}
            
        </div>
   
        <div className='relative form-area max-1.5xl:!w-96 max-1.5xl:!h-0'  style={{width:"650px",minHeight:"260px",height:"417px"}}>
        <div className='text-4xl font-semibold w-fit m-auto pt-7 max-1.5xl:pt-4 max-1.5xl:text-2xl'>Sign Up</div>
        <div className='w-fit m-auto'>
          {otpFieldShow?(<div className='mt-16'><div className='text-lg'>OTP sent to {signupFormData.userEmail}</div><div className='mt-5 max-1.5xl:mt-4'><input onChange={(e)=>{setOtpFieldData(parseInt(e.target.value))}} style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} name='otp' className='px-2 py-1 w-full rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="text" placeholder='OTP'/></div><div className='text-xs text-right mr-1 -mb-2' onClick={()=>{handleOtpRegenrate()}}>Resend OTP?</div></div>):(<>
          <div className='mt-10 max-1.5xl:mt-4'><input onChange={(e)=>{handleInputChange(e,setSignupFormData,signupFormData)}} style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} name='userName' className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="text" placeholder='Name'/></div>
          <div className='mt-5 max-1.5xl:mt-2'><input onChange={(e)=>{handleInputChange(e,setSignupFormData,signupFormData)}} style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} name='userEmail' className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="text" placeholder='Email'/></div>
          <div className='mt-5 max-1.5xl:mt-2'><input onChange={(e)=>{handleInputChange(e,setSignupFormData,signupFormData)}} style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} name='userPassword' className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="password" placeholder='Create password'/></div>
          <div className='mt-5 max-1.5xl:mt-2'><input style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="password" placeholder='Re-enter password'/></div>
          </>)}

          <div onClick={()=>{handleSignupSubmit()}} style={{backgroundColor:"rgb(14 14 14)",cursor:"pointer"}} className='mt-10 py-1 max-1.5xl:mt-3.5 max-1.5xl:text-sm'><div className='w-fit m-auto'>Sign up</div></div>
        </div>
        
        </div>
        
        
        </div>
        <div className='form-area max-1.5xl:!w-96 max-1.5xl:!h-0' style={{width:"650px",minHeight:"246px",height:"417px"}}>
        <div className='text-4xl font-semibold w-fit m-auto pt-20 max-1.5xl:pt-7 max-1.5xl:text-2xl'>Log In</div>
        <div className='w-fit m-auto'>
                    <div className='mt-10 max-1.5xl:mt-5'><input onChange={(e)=>{handleInputChange(e,setLoginFormData,loginFormData)}} style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} name='userEmail' className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="text" placeholder='Email'/></div>
          <div className='mt-5 max-1.5xl:mt-2'><input onChange={(e)=>{handleInputChange(e,setLoginFormData,loginFormData)}} style={{backgroundColor:"rgb(0 0 0 / 30%)",outline:"none"}} name='userPassword' className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="password" placeholder='Password'/></div><div className='text-xs opacity-75 h-0 mt-1'><div className='w-fit ml-auto'>Forgot password?</div></div>
          <div onClick={()=>{handleLoginSubmit()}} style={{backgroundColor:"rgb(14 14 14)",cursor:"pointer"}} className='mt-10 py-1 max-1.5xl:mt-8 max-1.5xl:text-sm'><div className='w-fit m-auto '>Login</div></div>
        </div>

        </div>
        </div>
       </div>

        
       
         <Footer/>
        
       
    </div>
  )
}

export default LoginPage