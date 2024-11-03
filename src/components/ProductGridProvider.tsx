"use client"

import { store } from "@/store"
import { Provider } from "react-redux"
import ProductGrid from "./ProductGrid"


const ProductGridProvider= () =>{


    return(<>
    <Provider store={store}>
        <ProductGrid/>
    </Provider>
    </>)
}

export default ProductGridProvider