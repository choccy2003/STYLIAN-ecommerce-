"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState,useEffect } from 'react'

const LoginPage = () => {

  const [loginFormActive,setLoginFormActive]=useState(true)
  const [mobileView,setMobileView]=useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1295);
     
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Check the initial width
    handleResize();

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <Navbar/>
       

        <div className='flex w-fit mx-auto relative mt-52 mb-72 max-1.5xl:flex-col rounded-md max-1.5xl:mt-16 login-form-background'>
        
        
        <div className='relative'>
          <div className='absolute z-10 transition-all duration-500 max-1.5xl:!w-96' style={{filter:"brightness(85%)",minWidth:"650px",top:`${mobileView?(loginFormActive?"0%":"100%"):("unset")}`,left:`${!mobileView?(loginFormActive?"0%":"100%"):("unset")}`}}>
            <img className='rounded-md max-1.5xl:w-96' width={650} src={"/loginPageCover.png"}/>
            {loginFormActive?(<div key={"login-form"} style={{fontSize:"24px",width:"650px"}} className={`absolute top-0 mt-80 max-1.5xl:mt-40 max-1.5xl:!text-lg text-center login-form-animation max-1.5xl:!w-96`}><div className='mb-2 max-1.5xl:mb-1'>New to OutfitZen?</div><div className="w-fit m-auto bg-black px-7 py-1 text-base cursor-pointer max-1.5xl:text-sm max-1.5xl:px-5" onClick={()=>{loginFormActive?setLoginFormActive(false):setLoginFormActive(true)}}>Join Now</div></div>):(<div key={"register-form"} style={{fontSize:"24px",width:"650px"}} className={`absolute top-0 mt-80 max-1.5xl:mt-40 text-center login-form-animation max-1.5xl:!w-96 max-1.5xl:!text-lg`}><div className='mb-2 max-1.5xl:mb-1'>Already a member?</div><div className="w-fit m-auto bg-black px-7 py-1 text-base cursor-pointer max-1.5xl:text-sm max-1.5xl:px-5" onClick={()=>{loginFormActive?setLoginFormActive(false):setLoginFormActive(true)}}>Log In</div></div>)}
            
        </div>
        <div className='relative form-area max-1.5xl:!w-96 max-1.5xl:!h-0'  style={{width:"650px",minHeight:"256px",height:"417px"}}>
        <div className='text-4xl font-semibold w-fit m-auto pt-7 max-1.5xl:pt-4 max-1.5xl:text-2xl'>Sign Up</div>
        <div className='w-fit m-auto'>
        <div className='mt-10 max-1.5xl:mt-4'><input style={{backgroundColor:"rgb(0 0 0 / 30%)"}} className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="text" placeholder='Name'/></div>
                    <div className='mt-5 max-1.5xl:mt-2'><input style={{backgroundColor:"rgb(0 0 0 / 30%)"}} className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="text" placeholder='Email'/></div>
          <div className='mt-5 max-1.5xl:mt-2'><input style={{backgroundColor:"rgb(0 0 0 / 30%)"}} className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="password" placeholder='Create password'/></div>
          <div className='mt-5 max-1.5xl:mt-2'><input style={{backgroundColor:"rgb(0 0 0 / 30%)"}} className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="password" placeholder='Re-enter password'/></div>
          <div style={{backgroundColor:"rgb(14 14 14)",cursor:"pointer"}} className='mt-10 py-1 max-1.5xl:mt-3.5 max-1.5xl:text-sm'><div className='w-fit m-auto'>Sign up</div></div>
        </div>
        
        </div>
        
        </div>
        <div className='form-area max-1.5xl:!w-96 max-1.5xl:!h-0' style={{width:"650px",minHeight:"246px",height:"417px"}}>
        <div className='text-4xl font-semibold w-fit m-auto pt-20 max-1.5xl:pt-7 max-1.5xl:text-2xl'>Log In</div>
        <div className='w-fit m-auto'>
                    <div className='mt-10 max-1.5xl:mt-5'><input style={{backgroundColor:"rgb(0 0 0 / 30%)"}} className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="text" placeholder='Email'/></div>
          <div className='mt-5 max-1.5xl:mt-2'><input style={{backgroundColor:"rgb(0 0 0 / 30%)"}} className='px-2 py-1 w-80 rounded-sm max-1.5xl:text-sm max-1.5xl:w-64' type="password" placeholder='Password'/></div><div className='text-xs opacity-75 h-0 mt-1'><div className='w-fit ml-auto'>Forgot password?</div></div>
          <div style={{backgroundColor:"rgb(14 14 14)",cursor:"pointer"}} className='mt-10 py-1 max-1.5xl:mt-8 max-1.5xl:text-sm'><div className='w-fit m-auto '>Login</div></div>
        </div>

        </div>
        </div>
       
         <Footer/>
        
       
    </div>
  )
}

export default LoginPage