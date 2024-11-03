"use client"

'use client'
 
import { useRouter } from 'next/navigation'
import { useState,useEffect } from 'react';

type ProductReview = {
  rating: number;
  review: string;
  reviewTitle: string;
  reviewedBy: string;
  verifiedPurchase: boolean;
};

type Product = {
    product:{
         _id:string,
  productName: string;
  productPrice: number;
  productImages: string[];
  productSizes: string[];
  productStockQuantity: number;
  productOriginalPrice: number;
  productBrandName: string;
  productReviews: ProductReview[]; 
    }

};


const CatalogueCard:React.FC<Product> = (props)=>{

    const router = useRouter()
    const [wordLimit,setWordLimit]=useState<number>(25)
    useEffect(() => {
        const handleResize = () => {
        if(window.innerWidth<1920){
            setWordLimit(25)
        }
         if(window.innerWidth<576){
            setWordLimit(21)
         }
         if(window.innerWidth<410){
            setWordLimit(18)
         }
        };
    
    
        window.addEventListener("resize", handleResize);
        handleResize()
        return () => {
         
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return(
        <>
        <div style={{backgroundImage:`url(${props.product.productImages[2]})`,backgroundSize:"cover"}} onClick={()=>{if(props.product._id)router.push(`/Browse-Products/Product/${props.product._id}`)}} className="w-64 h-80 bg-black m-auto rounded-md max-sm:w-48 max-sm:h-64 max-xxs:w-40 max-xxs:h-56">
            
        </div>
        <div className="mt-2 ml-1 text-xl max-sm:text-lg">
                {props.product.productName.split("").length>wordLimit?props.product.productName.slice(0,wordLimit) + "...":props.product.productName}
            </div>
            <div className="mt-2 ml-1  text-lg  font-light mb-6 max-sm:text-base max-sm:mt-0" >
                ${props.product.productPrice}
            </div>
        </>
        
       
    )

}

export default CatalogueCard