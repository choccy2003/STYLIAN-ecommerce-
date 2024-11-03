"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page:React.FC = () => {
    const [adminLogin,setAdminLogin]=useState(true)
    const [sizes,setSizes]=useState<string[]>([])
    const [files, setFiles] = useState<FileList | null>(null);
    const router = useRouter()
    useEffect(()=>{
        if(adminLogin==false){
            router.push('/Login')
        }
    },[adminLogin])
    const handleSizeInput=(e:any)=>{
     if(e.target.checked){
      let tempSizeArray=[...sizes]
      tempSizeArray.push(e.target.value)
      setSizes(tempSizeArray)
     }
     else{
      let tempSizeArray=[...sizes]
      tempSizeArray=tempSizeArray.filter((arr)=>arr!==e.target.value)
      setSizes(tempSizeArray)
     }
    }
    const handleFileInput = (e:any)=>{
      setFiles(e.target.files)
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
  
      const formData = new FormData();

     
    }
  return (
    <div className='h-screen'>
      <h1 className='text-4xl w-fit mx-auto my-16'>Admin Pannel</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit} method='post' className='flex flex-col gap-5 w-72 m-auto'>
        <input type='text' className='text-black' name='productName' placeholder='Product Name...'/>
        <input type='text' className='text-black' name='productPrice' placeholder='Product Price...'/>
        <input type='text' className='text-black' name='productStockQuantity' placeholder='Product Stock...'/>
        <input type='text' className='text-black' name='productOriginalPrice' placeholder='Product Original Price...'/>
        <input type='text' className='text-black' name='productBrandName' placeholder='Product Brand Name...'/>
        <input type='text' className='text-black' name='productCategory' placeholder='Product Category...'/>
        
          <div>
            <div className='my-2 text-2xl'>Sizes</div>
            <input type='checkbox' id="S" name='Small' onClick={(e)=>{handleSizeInput(e)}} value="S"></input> 
          <label htmlFor='S'> Small</label></div>
          <div><input type='checkbox' id="M" name='Medium' onClick={(e)=>{handleSizeInput(e)}} value="M"></input> 
          <label htmlFor='M'> Medium</label></div>
          <div><input type='checkbox' id="L" name='Large' onClick={(e)=>{handleSizeInput(e)}} value="L"></input> 
          <label htmlFor='L'> Large</label></div>
          <div><input type='checkbox' id="XL" name='XLarge' onClick={(e)=>{handleSizeInput(e)}} value="XL"></input> 
          <label htmlFor='XL'> XLarge</label></div>
          <div><input type='checkbox' id="XXL" name='XXLarge' onClick={(e)=>{handleSizeInput(e)}} value="XXL"></input><label htmlFor='XXL'> XXLarge</label></div>

          <div>
          <div className='my-2 text-2xl'>Images</div>
          <input onChange={(e)=>{handleFileInput(e)}} type='file' multiple></input>
          </div>
          <div>
            <button>Submit</button>
          </div>
          
          
          
         
        
        
        
      </form>
    </div>
    
  )
}

export default page