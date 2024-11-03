import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import PageSlice from "./PageSlice";
import UserSlice from './UserSlice'
import SeachProductSlice from './SearchProductSlice'
import SearchBoxStateSlice from "./SearchBoxStateSlice"
export const store = configureStore(
    {
        reducer:{
            products: ProductSlice,
            pages: PageSlice,
            user: UserSlice,
            searchProducts:SeachProductSlice,
            searchBoxState:SearchBoxStateSlice
        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch