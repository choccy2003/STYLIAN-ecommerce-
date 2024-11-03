"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const ProductPageRedirectButton = () => {
    const router = useRouter()
  return (
    <div onClick={()=>{
        router.push("/Browse-Products")
    }} className="w-fit m-auto bg-black px-5 py-3 text-sm cursor-pointer mt-24">See All Products</div>
  )
}

export default ProductPageRedirectButton