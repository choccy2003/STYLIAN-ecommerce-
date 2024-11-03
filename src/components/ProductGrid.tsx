"use client"

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setProduct } from "@/ProductSlice";
const ProductGrid: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);
  const dispatch=useDispatch()
  useEffect(()=>{
    (async()=>{
    const response = await fetch("https://outfitzen-backend.onrender.com/users/fetch-products");
    const productCatalog = await response.json();
    dispatch(setProduct(productCatalog))
    })()


  },[])
  useEffect(() => {
    // Ensure component only renders on client
    setHydrated(true);
  }, []);

  const products = useSelector((state:RootState)=>state.products)

  const items = products.map(product => (
    <div key={product._id} style={{ width: "340px", margin: "auto" }} className="item">
      <ProductCard product={product} />
    </div>
  ));

  // Only render the carousel once the component is hydrated
  if (!hydrated) {
    return (<div style={{marginLeft:"48%",marginTop:"100px"}} className="loader"></div>)
  }
  else{
      return (
    <AliceCarousel
      items={items}
      mouseTracking
      infinite={true}
      responsive={{
        0: { items: 1 },
        720: { items: 2 },
        1077: { items: 3 },
        1372: { items: 4 },
        1700: { items: 5 }
      }}
      controlsStrategy="responsive"
      disableDotsControls
      disableButtonsControls
    />
  );
  }

};

export default ProductGrid;
