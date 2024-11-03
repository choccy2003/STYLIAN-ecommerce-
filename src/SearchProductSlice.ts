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
const SearchProductSlice = createSlice({
    name:"searchProducts",
    initialState,
    reducers: {
        
        setSearchArray: (state,action:PayloadAction<Product[]>)=>{
          return action.payload
        }
    }
}

)
export const {setSearchArray} = SearchProductSlice.actions
export default SearchProductSlice.reducer