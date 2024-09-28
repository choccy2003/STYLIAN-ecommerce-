"use client"
import { useSelector } from "react-redux";
import CatalogueCard from "./CatalogueCard";
import Image from "next/image";
import { RootState } from "@/store";

const CatalogueGrid: React.FC = () => {


 

  const products = useSelector((state:RootState)=>state.products)
  const {prev, next} = useSelector((state:RootState)=>state.pages)

  const items = products.slice(prev,next).map(product => (
    <div key={product.id}  className="catalogue-card transition-all cursor-pointer">
      <CatalogueCard product={product} />
    </div>
  ));


 

  return (
    <>
    {items}
    </>
  );
};

export default CatalogueGrid;