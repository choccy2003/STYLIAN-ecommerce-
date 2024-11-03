"use client"

import { store } from '@/store'
import React from 'react'
import { Provider } from 'react-redux'
import LoginDataFetch from './LoginDataFetch'

const LoginDataFetchProvider = () => {
  return (
    <>
    <Provider store={store}>
    <LoginDataFetch/>
    </Provider>
    </>
  )
}

export default LoginDataFetchProvider