import {  createSlice, PayloadAction } from "@reduxjs/toolkit";


const SearchBoxStateSlice = createSlice({
    name:"searchBoxState",
    initialState:false,
    reducers:{
        setSearchBoxState:(state,action:PayloadAction<boolean>)=>{
            return action.payload
        }
    }
    

})

export const {setSearchBoxState} = SearchBoxStateSlice.actions
export default SearchBoxStateSlice.reducer