import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
        productName:string,
        productPrice:number,
        productQuantity:number,
        productSize:string,
        productThumbnail:string
}

interface User {
    user:{
           userName:string,
    userEmail:string,
    userPhoneNumber:number,
    userPassword:string,
    userCart:Cart[],
    userWishlist:string[], 
    },
    userLoggedIn:boolean


}
const initialState:User = {
    user:{
        userName: "",
        userEmail: "",
        userPhoneNumber: 0,
        userPassword: "",
        userCart:[],
        userWishlist:[]
    },
    userLoggedIn:false
}

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserCart : (state,action:PayloadAction<Cart[]>)=>{
            if(state.user)
            state.user.userCart = action.payload
        },
        setUserData : (state,action:PayloadAction<User>)=>{
            return action.payload
        }

    }

})

export default UserSlice.reducer

export const {setUserCart,setUserData} = UserSlice.actions

