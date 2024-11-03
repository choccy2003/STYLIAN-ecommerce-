"use client"

import { store } from "@/store"
import { Provider } from "react-redux"
import CatalogueGrid from "./CatalogueGrid"


const CatalogueGridProvider= () =>{


    return(<>
    <Provider store={store}>
    <div>
      <CatalogueGrid/>
        </div>
    </Provider>
    </>)
}

export default CatalogueGridProvider