"use client"
import { store } from '@/store'
import React from 'react'
import { Provider } from 'react-redux'
import CartMenu from './CartMenu'
import { Dispatch, SetStateAction } from 'react';
interface Props {
  cartMenuCloseBtn:boolean,
  setCartMenuCloseBtn:Dispatch<SetStateAction<boolean>>
}

const CartMenuProvider:React.FC<Props> = (props) => {
  return (
   <Provider store={store}>
    <CartMenu   cartMenuCloseBtn={props.cartMenuCloseBtn}
  setCartMenuCloseBtn={props.setCartMenuCloseBtn} />
   </Provider>
  )
}

export default CartMenuProvider