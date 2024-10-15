'use client'
 
import LinkBuilder from "@/components/LinkBuilder";
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer';
import { Rating } from 'react-simple-star-rating'
import { FaPlus,FaMinus } from "react-icons/fa6";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from 'react';
import ProductGrid from '@/components/ProductGrid';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setUserCart } from "@/UserSlice";
interface Cart {
    productName:string,
    productPrice:number,
    productQuantity:number,
    productSize:string,
    productThumbnail:string
}

const ProductPage = (  ) =>{
const productImgArray:string[] = ['/cover-image.jpeg',' b',' c','k',' e']
const productSizes = ['M','L','XL',"XXL"]
const [currentProductImage,setCurrentProductImage]=useState<string>(productImgArray[0])
const [quantityCounter,setQuantityCounter] = useState<number>(1)
const [selectedSize,SetSelectedSize]=useState<string>(productSizes[0])
const user = useSelector((state:RootState)=>state.user.user)
const [userCart,setCart]=useState<Cart[]>(user?user.userCart:[])
const productName="name 1"
console.log(user)
const dispatch = useDispatch()

useEffect(()=>{
dispatch(setUserCart(userCart))
},[userCart])

const updateUserCart = ()=>{
        

        setCart((prev)=>{

        const itemIndex = userCart.findIndex((cart)=>cart.productName == productName && cart.productSize == selectedSize)
        
        if(itemIndex !== -1){
            const updatedCart = [...prev];
            updatedCart[itemIndex] = {...updatedCart[itemIndex],productQuantity:updatedCart[itemIndex].productQuantity +quantityCounter}
            return updatedCart;
        }
        else{
           return [ ...prev,
        {productName:productName,
        productPrice:40,
        productQuantity:quantityCounter,
        productSize:selectedSize,
        productThumbnail:'' 
        }] 
        }
           
})  

  
}


    return(<>
   
    <Navbar/>
    <div className="mt-10 ml-6">
<LinkBuilder/>
    </div>
    
    <div className='mt-10'>
        <div className='flex relative max-1.5xl:flex-col max-1.5xl:gap-8 max-xl:gap-12'>
           
            <div className='w-fit mx-auto'>
                <div style={{height:"740px",width:"670px",aspectRatio:"740/670"}} className='bg-black product-image'>
                <img className='h-full w-full' style={{objectFit:"cover",cursor:"pointer"}} src={currentProductImage}/>
                </div>
                <div style={{width:"550px",overflowX:"scroll"}} className='flex gap-7 relative left-16 top-8 image-scroll max-md:left-10 max-md:top-4 max-sm:gap-3 max-sm:left-14 max-xxs:left-9 '>
                    {productImgArray.map((img)=>{
                        return (
                        <div onClick={()=>{setCurrentProductImage(img)}} key={img} className='w-28 min-w-28 h-32 bg-black max-md:min-w-20 max-md:h-24 max-sm:min-w-16 max-sm:h-20 max-xxs:min-w-12 max-xxs:h-14'>
                            <img className='h-full w-full' style={{objectFit:"cover",cursor:"pointer"}} src={img}></img>
                        </div>)
                    })
                    }
                    

                </div>
            </div>
                
               
            
            <div className='w-3/6 max-2xl:w-2/5 max-2xl:ml-auto max-1.5xl:w-11/12 max-1.5xl:m-auto'>
               <div style={{lineHeight:"50px"}} className='text-4xl w-4/5 max-1.5xl:w-full max-1.5xl:text-2xl product-name'>BLACK GOLDEN Design Mens Half Sleeves Cotton Shirts</div>
                <div className='text-3xl font-light mt-5 max-1.5xl:text-2xl max-1.5xl:mt-2'>$ 40</div>
                <hr  className="opacity-50 mt-4 w-4/5 max-1.5xl:w-full" />
                <Rating size={24} readonly initialValue={4} fillColor={"rgb(136 125 179 / 82%)"} emptyColor={"rgb(69 73 97)"} className='star-rating mt-4'  />
                <div className='mt-10 text-sm opacity-75'>Sizes</div>
                <div className='flex items-center mt-2 gap-5 opacity-75'>
                    {productSizes.map((sizes)=>{
                        return(
                            <div key={sizes} onClick={()=>{SetSelectedSize(sizes)}} style={{border:"1px solid rgb(255,255,255,0.75)",cursor:"pointer",backgroundColor:`${selectedSize==sizes?"rgb(7 11 26)":"transparent"}`}} className='py-1.5 px-4 min-w-12 hover:bg-slate-900 transition-all duration-300'>
                                <div className='w-fit m-auto'>{sizes}</div></div>
                        )
                    })}
                    
                </div>
                <div className='mt-10 text-sm opacity-75 max-1.5xl:mt-7'>Quantity</div>
                <div style={{border:"1px solid rgb(255,255,255,0.75)"}} className='flex text-xl mt-2 cursor-pointer w-36 py-1.5 justify-around items-center opacity-75'>
                    <div onClick={()=>{if(quantityCounter>1)setQuantityCounter((prev)=>prev-1)}} className='text-base min-w-5'><FaMinus/></div><div>{quantityCounter}</div><div onClick={()=>{if(quantityCounter<20)setQuantityCounter((prev)=>prev+1)}} className='text-base min-w-5'><FaPlus/></div>
                </div>
                <div onClick={updateUserCart} style={{border:"1px solid rgb(255,255,255,0.5)"}} className='w-3/4 py-2 mt-10  cursor-pointer opacity-90 max-1.5xl:w-full max-1.5xl:mx-auto '>
                    <div className='w-fit m-auto text-lg' >Add to cart</div>
                </div>
                <div style={{border:"1px solid rgb(7 11 26)",backgroundColor:"rgb(7 11 26)"}} className='w-3/4 py-2 mt-6 cursor-pointer opacity-90 max-1.5xl:w-full max-1.5xl:mx-auto'>
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
        <div style={{fontFamily:"Roboto"}} className='text-4xl w-fit m-auto mt-20 mb-10 max-1.5xl:text-2xl'>Recommended Products</div>
        <ProductGrid/>
    </div>
   <Footer/>
    </>)
}

export default ProductPage