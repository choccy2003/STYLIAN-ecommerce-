import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import PageSlice from "./PageSlice";
import UserSlice from './UserSlice'

export const store = configureStore(
    {
        reducer:{
            products: ProductSlice,
            pages: PageSlice,
            user: UserSlice
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch