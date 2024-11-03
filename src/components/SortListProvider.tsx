"use client"

import { store } from '@/store'
import React from 'react'
import { Provider } from 'react-redux'
import SortList from './SortList'

const SortListProvider = () => {
  return (
    <>
    <Provider store={store}>
        <SortList/>
    </Provider>
    </>
  )
}

export default SortListProvider