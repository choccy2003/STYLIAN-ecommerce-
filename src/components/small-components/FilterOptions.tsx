"use client";

import { setSearchArray} from '@/SearchProductSlice';
import { setSearchBoxState } from '@/SearchBoxStateSlice'
import { RootState } from '@/store';
import React, { useEffect, useState } from 'react';
import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  category: string;
  type: string;
  activeCategories: string[]; // Array of active filters in the category
  toggleCategory: (category: string) => void; // Function to toggle filter
}

const FilterOptions: React.FC<Props> = ({ category, type, activeCategories, toggleCategory }) => {
  const [filterBtnActive, setFilterBtnActive] = useState(false);
  const searchArray = useSelector((state: RootState) => state.searchProducts);
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const isActive = activeCategories.includes(category);

  const applyFilters = () => {
    let filteredProducts = [...searchArray];
    if (type === "Brands" && isActive) {
      filteredProducts = filteredProducts.filter(
        (product) => product.productBrandName === category
      );
    }
    if (type === "Category" && isActive) {
      filteredProducts = filteredProducts.filter(
        (product) => product.productCategory === category
      );
    }
    // Apply Size Filter
    if (type === "Size" && isActive) {
      const reshapeArrayValue = category.replace(/[a-z]/g, "");
      filteredProducts = filteredProducts.filter((product) =>
        product.productSizes.includes(reshapeArrayValue)
      );
    }

    // Apply Price Filter
    if (type === "Price" && isActive) {
      const priceRange = category.replace(/[\s$+]/g, "").split("-");
      filteredProducts = filteredProducts.filter((product) => {
        const price = product.productPrice;
        return priceRange.length === 2
          ? parseInt(priceRange[0]) < price && price < parseInt(priceRange[1])
          : parseInt(priceRange[0]) < price;
      });
    }

    dispatch(setSearchArray(filteredProducts));
    dispatch(setSearchBoxState(true));
  };

  useEffect(() => {
    if (filterBtnActive) {
      applyFilters();
    }

  }, [filterBtnActive, category, type, activeCategories]);

  return (
    <div
      onClick={() => {
        toggleCategory(category);
        filterBtnActive?(setFilterBtnActive(false),dispatch(setSearchArray(products)),dispatch(setSearchBoxState(true))):(setFilterBtnActive(true))
      }}
      key={category}
      className="flex items-center gap-2 ml-2"
    >
      <div>{isActive ? <RiCheckboxLine /> : <RiCheckboxBlankLine />}</div>
      {category}
    </div>
  );
};

export default FilterOptions;
