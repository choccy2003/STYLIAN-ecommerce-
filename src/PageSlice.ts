import {  createSlice, PayloadAction } from "@reduxjs/toolkit";

interface values {
    prev: number,
    next: number
}

const PageSlice = createSlice({
    name:"pages",
    initialState:{prev:0,next:15},
    reducers: {
        setPageValues: (state,action:PayloadAction<values>)=>{
            state.prev = action.payload.prev;
            state.next = action.payload.next;
        }
    }
}

)
export const {setPageValues} = PageSlice.actions
export default PageSlice.reducer