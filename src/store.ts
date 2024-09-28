import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import PageSlice from "./PageSlice";


export const store = configureStore(
    {
        reducer:{
            products: ProductSlice,
            pages: PageSlice
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch