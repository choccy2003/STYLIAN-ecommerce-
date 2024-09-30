'use client'
 
import { useParams } from 'next/navigation'
import LinkBuilder from "@/components/LinkBuilder";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer';
import { Rating } from 'react-simple-star-rating'
import { FaPlus,FaMinus } from "react-icons/fa6";
const ProductPage = (  ) =>{
    const {productId} = useParams()
 
    return(<>
   
    <Navbar/>
    <div className="mt-10 ml-6">
<LinkBuilder/>
    </div>
    
    <div className='mt-10 ml-6 '>
        <div className='flex relative max-xl:flex-col max-xl:gap-5'>
            <div  className='w-3/6'>
                <div style={{height:"740px",width:"670px"}} className='bg-black ml-20 max-2xl:ml-0'>

                </div>
            </div>
            <div className='w-3/6 max-2xl:w-2/5 max-2xl:ml-auto max-xl:ml-0 max-xl:w-11/12 max-xl:m-auto'>
               <div style={{lineHeight:"50px"}} className='text-4xl w-4/5 max-xl:w-full'>BLACK GOLDEN Design Mens Half Sleeves Cotton Shirts</div>
                <div className='text-3xl font-light mt-5'>$ 40</div>
                <hr  className="opacity-50 mt-4 w-4/5 max-xl:w-full" />
                <Rating size={24} readonly initialValue={4} fillColor={"rgb(136 125 179 / 82%)"} emptyColor={"rgb(69 73 97)"} className='star-rating mt-4'  />
                <div className='mt-10 text-sm opacity-75'>Sizes</div>
                <div className='flex items-center mt-2 gap-5 opacity-75'>
                    <div style={{border:"1px solid rgb(255,255,255,0.75)"}} className='py-1.5 px-4'>M</div><div style={{border:"1px solid rgb(255,255,255,0.75)"}} className='py-1.5 px-5'>L</div><div style={{border:"1px solid rgb(255,255,255,0.75)"}} className='py-1.5 px-4 '>XL</div>
                </div>
                <div className='mt-10 text-sm opacity-75'>Quantity</div>
                <div style={{border:"1px solid rgb(255,255,255,0.75)"}} className='flex text-xl mt-2 cursor-pointer w-36 py-1.5 justify-around items-center opacity-75'>
                    <div className='text-base'><FaMinus/></div><div>0</div><div className='text-base'><FaPlus/></div>
                </div>
                <div style={{border:"1px solid rgb(255,255,255,0.5)"}} className='w-3/4 py-2 mt-10  cursor-pointer opacity-90'>
                    <div className='w-fit m-auto text-lg' >Add to cart</div>
                </div>
                <div style={{border:"1px solid rgb(7 11 26)",backgroundColor:"rgb(7 11 26)"}} className='w-3/4 py-2 mt-6 cursor-pointer opacity-90'>
                    <div className='w-fit m-auto text-lg' >Buy it now</div>
                </div>
                <div>
                    <div className='mt-10 text-lg font-medium opacity-75'>Product Specifications</div>
                    <div className='opacity-75'>
                      <ul className='mt-5 ml-5' style={{listStyleType:"disc"}}>
                        <li>Short Sleeve</li>
                        <li>Printed Pattern</li>
                        <li>Spread Collar</li>
                        <li>Bottom Curved Hem</li>
                        <li>Light weight Fabric</li>

                    </ul>
                    <div className='mt-3 ml-1'>Fabric : 100% Cotton Viscos</div>
                    <div className='mt-3 ml-1' >Fit : Regular Fit</div>
                    <div className='mt-3 ml-1' >Wash Care : Cold machine wash. For more details see the wash care label attached.</div>  
                    </div>
                    <div className='mt-10 text-lg font-medium opacity-75'>Shipping Information</div>
                    <div className='opacity-75'>
                    <div className='mt-5 ml-1'>Shipping options: We offer Prepaid and COD Shipping. You can choose your preferred option at checkout.</div>
                    <div className='mt-3 ml-1'>Processing time: Orders typically take 1-2 business days to process before they are shipped. However, during busy periods, processing times may be slightly longer.</div>
                    <div className='mt-3 ml-1'>Delivery time: The estimated delivery time will depend on the shipping option you choose and your location. Domestic orders typically take 6-8 business days to arrive</div>
                    <div className='mt-3 ml-1'>Tracking information: Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your package and see the estimated delivery date.</div>
                    <div className='mt-3 ml-1'>Delivery address: Please ensure that the delivery address you provide is correct and complete.</div>






                    </div>
                    


                </div>

            </div>

        </div>
    </div>
   <Footer/>
    </>)
}

export default ProductPage