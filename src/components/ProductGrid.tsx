"use client"

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";

const ProductGrid: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Ensure component only renders on client
    setHydrated(true);
  }, []);

  const products = [
    { id: 1, name: 'Product 1',price:56.99 },
    { id: 2, name: 'Product 2',price:40.99 },
    { id: 3, name: 'Product 3',price:117.99 },
    { id: 4, name: 'Product 4',price:35.99 },
    { id: 5, name: 'Product 5',price:59.99 },
    { id: 6, name: 'Product 6',price:72.99 }
  ];

  const items = products.map(product => (
    <div key={product.id} style={{ width: "340px", margin: "auto" }} className="item">
      <ProductCard product={product} />
    </div>
  ));

  // Only render the carousel once the component is hydrated
  if (!hydrated) {
    return (<div style={{marginLeft:"48%",marginTop:"100px"}} className="loader"></div>)
  }

  return (
    <AliceCarousel
      items={items}
      mouseTracking
      infinite={true}
      responsive={{
        0: { items: 1 },
        720: { items: 2 },
        1077: { items: 3 },
        1372: { items: 4 }
      }}
      controlsStrategy="responsive"
      disableDotsControls
      disableButtonsControls
    />
  );
};

export default ProductGrid;
