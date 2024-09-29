"use client"

import { useRouter } from "next/navigation"

const ShopRedirectButton = () =>{

    const router = useRouter()

    return(
        <div onClick={()=>{router.push('/Browse-Products')}} style={{backgroundColor:"rgb(15 19 33)"}} className=" w-fit px-10 py-3 font-semibold text-lg mt-8 ml-1.5 cursor-pointer max-2xl:px-6 max-2xl:text-sm max-2xl:py-2 max-2xl:mt-4 max-sm:text-xs max-sm:px-4 max-sm:py-1.5 max-sm:mt-1 max-sm:ml-0.5">
                Shop Now</div>
    )
}

export default ShopRedirectButton