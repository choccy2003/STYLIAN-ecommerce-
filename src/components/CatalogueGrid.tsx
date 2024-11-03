"use client"
import { useDispatch, useSelector } from "react-redux";
import CatalogueCard from "./CatalogueCard";
import Image from "next/image";
import { RootState } from "@/store";
import { useEffect } from "react";
import { setProduct } from "@/ProductSlice";

const CatalogueGrid: React.FC = () => {




  const products = useSelector((state:RootState)=>state.products)
  const searchProducts = useSelector((state:RootState)=>state.searchProducts)
  const {prev, next} = useSelector((state:RootState)=>state.pages)
  const searchBoxState = useSelector((state:RootState)=>state.searchBoxState)
  const dispatch=useDispatch()
  const uniqueArray = searchProducts.filter((obj, index, self) =>
    index === self.findIndex((t) => t._id === obj._id)
  );
  useEffect(()=>{
    (async()=>{
    const response = await fetch("https://outfitzen-backend.onrender.com/users/fetch-products");
    const productCatalog = await response.json();
    dispatch(setProduct(productCatalog))
    })()


  },[])
 
  if(searchBoxState){
    if(searchProducts.length==0){
      return(
        <img style={{width:"400px"}} className="m-auto" src="./product-not-found.png"></img>
      )
    }
    else{
     return (
    <div  style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))"}} className="catalogue-grid place-items-start ml-16 max-lg:ml-0 max-lg:place-items-center z-0">
{uniqueArray.slice(prev,next).map(product => (
    <div key={product._id}  className="catalogue-card transition-all cursor-pointer">
      <CatalogueCard product={product} />
    </div>
  ))}
    </div>
  );
    }

  }
  else if(!searchBoxState){

      return (
      <div  style={{display:"grid", gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))"}} className="catalogue-grid place-items-start ml-16 max-lg:ml-0 max-lg:place-items-center z-0">
  {products.slice(prev,next).map(product => (
      <div key={product._id}  className="catalogue-card transition-all cursor-pointer">
        <CatalogueCard product={product} />
      </div>
    ))}
      </div>
    );

  }
  else{
    return <div>Loading....</div>
  }

};

export default CatalogueGrid;