import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
        productName:string,
        productPrice:number,
        productQuantity:number,
        productSize:string,
        productThumbnail:string
}

interface User {
    userName:string,
    userEmail:string,
    userPhoneNumber:number,
    userPassword:string,
    userCart:Cart[],
    userWishlist:string[],

}
const initialState: { user: User | null } = {
    user: {userName:"hrst",
    userEmail:"abc",
    userPhoneNumber:123,
    userPassword:"123",
    userCart:[],
    userWishlist:[]}
};
const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserCart : (state,action:PayloadAction<Cart[]>)=>{
            if(state.user)
            state.user.userCart = action.payload
        }
    }

})

export default UserSlice.reducer

export const {setUserCart} = UserSlice.actions

