import {  createSlice, PayloadAction } from "@reduxjs/toolkit";




type ProductReview = {
  rating: number;
  review: string;
  reviewTitle: string;
  reviewedBy: string;
  verifiedPurchase: boolean;
};

type Product = {
  _id:string,
  productName: string;
  productPrice: number;
  productImages: string[];
  productSizes: string[];
  productStockQuantity: number;
  productOriginalPrice: number;
  productBrandName: string;
  productReviews: ProductReview[];
  productCategory:string
};


const initialState: Product[] = [];
const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers: {
        setProduct:(state,action:PayloadAction<Product[]>)=>{
          return action.payload;
        }
    }
}

)
export const {setProduct} = ProductSlice.actions
export default ProductSlice.reducer