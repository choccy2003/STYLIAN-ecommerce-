"use client"

import { store } from "@/store"
import { Provider } from "react-redux"
import CatalogueGrid from "./CatalogueGrid"


const CatalogueGridProvider= () =>{


    return(<>
    <Provider store={store}>
    <div style={{display:"grid", gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",placeItems:"center"}} className="catalogue-grid w-5/6 ml-8 max-lg:ml-0 max-lg:w-full max-lg:m-auto z-0">
      <CatalogueGrid/>
        </div>
    </Provider>
    </>)
}

export default CatalogueGridProvider