"use client";

import FilterAccordianItem from "./FilterAccordianItem";
import FilterOptions from "./small-components/FilterOptions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchArray } from '@/SearchProductSlice';
import { RootState } from '@/store';

const FilterAccordian: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchArray(products));
  }, [products]);

  const menCategories = ["Hoodie", "Jeans", "Tshirts", "Sweaters"];
  const accessoryCategories = ["Watches", "Braclets", "Rings"];
  const brandCategories = ["OutfitZen"];
  const priceCategories = ["$5 - $20", "$20 - $40", "$40 - $60", "$60 +"];
  const sizeCategories = ["Small", "Medium", "Large", "XLarge", "XXLarge"];

  // State to manage active filters for each type
  const [activeMenCategories, setActiveMenCategories] = useState<string[]>([]);
  const [activeAccessoryCategories, setActiveAccessoryCategories] = useState<string[]>([]);
  const [activeBrandCategories, setActiveBrandCategories] = useState<string[]>([]);
  const [activePriceCategories, setActivePriceCategories] = useState<string[]>([]);
  const [activeSizeCategories, setActiveSizeCategories] = useState<string[]>([]);

  // Function to toggle a category in the active array
  const toggleCategory = (category: string, setActiveCategory: React.Dispatch<React.SetStateAction<string[]>>, activeCategory: string[]) => {
    setActiveCategory(
      activeCategory.includes(category)
        ? activeCategory.filter((item) => item !== category)
        : [...activeCategory, category]
    );
  };

  return (
    <div style={{ border: "1px solid rgba(255,255,255,0.4)", backgroundColor: "#1e2028" }} className="cursor-pointer rounded-lg">
      <div className="px-4 py-2 opacity-90">
        <FilterAccordianItem title="Categories">
          <div className="ml-2 mr-2 mt-2">
            <FilterAccordianItem title="Men">
              {menCategories.map((category) => (
                <div key={category}>
                  <FilterOptions
                    category={category}
                    type="Category"
                    activeCategories={activeMenCategories}
                    toggleCategory={() => toggleCategory(category, setActiveMenCategories, activeMenCategories)}
                  />
                </div>
              ))}
            </FilterAccordianItem>
            <FilterAccordianItem title="Accessories">
              {accessoryCategories.map((category) => (
                <div key={category}>
                  <FilterOptions
                    category={category}
                    type="Accessories"
                    activeCategories={activeAccessoryCategories}
                    toggleCategory={() => toggleCategory(category, setActiveAccessoryCategories, activeAccessoryCategories)}
                  />
                </div>
              ))}
            </FilterAccordianItem>
          </div>
        </FilterAccordianItem>
      </div>

      <hr className="w-full opacity-50" />
      <div className="px-4 py-2 opacity-90">
        <FilterAccordianItem title="Brands">
          {brandCategories.map((category) => (
            <div key={category}>
              <FilterOptions
                category={category}
                type="Brands"
                activeCategories={activeBrandCategories}
                toggleCategory={() => toggleCategory(category, setActiveBrandCategories, activeBrandCategories)}
              />
            </div>
          ))}
        </FilterAccordianItem>
      </div>

      <hr className="w-full opacity-50" />
      <div className="px-4 py-2 opacity-90">
        <FilterAccordianItem title="Price">
          {priceCategories.map((category) => (
            <div key={category}>
              <FilterOptions
                category={category}
                type="Price"
                activeCategories={activePriceCategories}
                toggleCategory={() => toggleCategory(category, setActivePriceCategories, activePriceCategories)}
              />
            </div>
          ))}
        </FilterAccordianItem>
      </div>

      <hr className="w-full opacity-50" />
      <div className="px-4 py-2 opacity-90">
        <FilterAccordianItem title="Size">
          {sizeCategories.map((category) => (
            <div key={category}>
              <FilterOptions
                category={category}
                type="Size"
                activeCategories={activeSizeCategories}
                toggleCategory={() => toggleCategory(category, setActiveSizeCategories, activeSizeCategories)}
              />
            </div>
          ))}
        </FilterAccordianItem>
      </div>
    </div>
  );
};

export default FilterAccordian;
