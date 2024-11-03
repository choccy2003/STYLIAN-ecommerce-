"use client"

import { useRouter } from 'next/navigation'

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


const ProductCard:React.FC<Product> = (props)=>{
    const router = useRouter()
    
    return(
        <>
        <div onClick={()=>{if(props.product._id)router.push(`/Browse-Products/Product/${props.product._id}`)}}  style={{backgroundImage:`url(${props.product.productImages[1]})`,backgroundSize:"cover"}} className="w-72 h-96 bg-black m-auto">
            
        </div>
        <div className="mt-4 text-xl ml-7">
        {props.product.productName.split("").length>30?props.product.productName.slice(0,30) + "...":props.product.productName}
            </div>
            <div className="mt-2 text-lg ml-7 font-light" >
                ${props.product.productPrice}
            </div>
        </>
        
       
    )

}

export default ProductCard