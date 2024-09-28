"use client"

import { store } from "@/store"
import { Provider } from "react-redux"
import PageGrid from "./PageGrid"


const PageGridProvider= () =>{


    return(<>
    <Provider store={store}>
        <PageGrid/>
    </Provider>
    </>)
}

export default PageGridProvider