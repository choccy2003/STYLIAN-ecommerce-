import FilterAccordianItem from "./FilterAccordianItem"
import { RiCheckboxBlankLine,RiCheckboxLine } from "react-icons/ri";



const FilterAccordian:React.FC = ()=>{

  return (
    <div style={{border:"1px solid rgb(255,255,255,0.4)",backgroundColor:"#1e2028" }} className="cursor-pointer rounded-lg">
      <div className="px-4 py-2 opacity-90">
 <FilterAccordianItem title="Categories">
  <div className="ml-2 mr-2 mt-2" >
    <FilterAccordianItem  title="Men"><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category1</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category2</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category3</div></FilterAccordianItem>
    <FilterAccordianItem  title="Women"><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category1</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category2</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category3</div></FilterAccordianItem>
    <FilterAccordianItem  title="Accessories"><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category1</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category2</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category3</div></FilterAccordianItem>
  </div>
        
    </FilterAccordianItem>

      </div>
   
    <hr className="w-full opacity-50" />
    <div className="px-4 py-2 opacity-90">
    <FilterAccordianItem title="Brands">
    <div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category1</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category2</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Category3</div>
    </FilterAccordianItem>
    </div>
    <hr className="w-full opacity-50" />
    <div className="px-4 py-2 opacity-90">
    <FilterAccordianItem title="Price">
      <div>Price</div>
    </FilterAccordianItem>
    </div>
    <hr className="w-full opacity-50" />
    <div className="px-4 py-2 opacity-90">
    <FilterAccordianItem title="Size">
    <div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Small</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Medium</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> Large</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> XLarge</div><div className="flex items-center gap-2 ml-2 "><div><RiCheckboxBlankLine/></div> XXLarge</div>
    </FilterAccordianItem>
    </div>
    </div>
  )  
}

export default FilterAccordian