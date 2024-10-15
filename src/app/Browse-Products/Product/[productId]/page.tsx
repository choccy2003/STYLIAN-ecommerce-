"use client"

import React from 'react'
import ProductPage from './ProductPage'
import { Provider } from 'react-redux'
import { store } from '@/store'

const page = () => {
  return (
    <>
    <Provider store={store}>
        <ProductPage/> 
    </Provider>
   
    </>
  )
}

export default page