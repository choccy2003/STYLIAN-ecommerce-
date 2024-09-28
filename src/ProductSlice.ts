import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number,
    name:string,
    price:number
}
interface Products {
    products: [Product]
}
const products = [
    { id: 1, name: 'Product 1',price:56.99 },
    { id: 2, name: 'Product 2',price:40.99 },
    { id: 3, name: 'Product 3',price:117.99 },
    { id: 4, name: 'Product 4',price:35.99 },
    { id: 5, name: 'Product 5',price:59.99 },
    { id: 6, name: 'Product 6',price:72.99 },
    { id: 7, name: 'Product 1',price:56.99 },
    { id: 8, name: 'Product 2',price:40.99 },
    { id: 9, name: 'Product 3',price:117.99 },
    { id: 10, name: 'Product 4',price:35.99 },
    { id: 11, name: 'Product 5',price:59.99 },
    { id: 12, name: 'Product 6',price:72.99 },
    { id: 55, name: 'Product 1',price:56.99 },
    { id: 14, name: 'Product 2',price:40.99 },
    { id: 15, name: 'Product 3',price:117.99 },
    { id: 16, name: 'Product 4',price:35.99 },
    { id: 17, name: 'Product 5',price:59.99 },
    { id: 18, name: 'Product 6',price:72.99 },
    { id: 19, name: 'Product 1',price:56.99 },
    { id: 20, name: 'Product 2',price:40.99 },
    { id: 21, name: 'Product 3',price:117.99 },
    { id: 22, name: 'Product 4',price:35.99 },
    { id: 23, name: 'Product 5',price:59.99 },
    { id: 24, name: 'Product 6',price:72.99 },
    { id: 25, name: 'Product 2',price:40.99 },
    { id: 26, name: 'Product 3',price:117.99 },
    { id: 27, name: 'Product 4',price:35.99 },
    { id: 28, name: 'Product 5',price:59.99 },
    { id: 29, name: 'Product 6',price:72.99 },
    { id: 30, name: 'Product 2',price:40.99 },
    { id: 31, name: 'Product 3',price:117.99 },
    { id: 32, name: 'Product 4',price:35.99 },
    { id: 33, name: 'Product 5',price:59.99 },
    { id: 34, name: 'Product 6',price:72.99 }
  ];

const ProductSlice = createSlice({
    name:"products",
    initialState:products,
    reducers: {
        
    }
}

)

export default ProductSlice.reducer