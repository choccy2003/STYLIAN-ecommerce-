import CatalogueGridProvider from "@/components/CalatogueGridProvider"
import CatalogueGrid from "@/components/CatalogueGrid"
import FilterAccordian from "@/components/FilterAccordian"
import FilterAccordianItem from "@/components/FilterAccordianItem"
import Footer from "@/components/Footer"
import LinkBuilder from "@/components/LinkBuilder"
import Navbar from "@/components/Navbar"
import PageGrid from "@/components/PageGrid"
import PageGridProvider from "@/components/PageGridProvider"
import SortButton from "@/components/SortButton"
import SortList from "@/components/SortList"




const ProductCataloguePage:React.FC = ()=>{
 
    return(<div>
    <Navbar/>
    <div className="mt-10 ml-6">
      <LinkBuilder/>  
    </div>
    <div className="flex items-end">
<div className="relative z-50 ml-auto">
      <SortList/>
    </div>
      <SortButton/>
    </div>
    
    
    <div className="flex mt-8 max-lg:mt-4 z-10">
        <div className="min-w-80 ml-10 -mt-10 relative max-lg:fixed max-lg:-left-96">
          <FilterAccordian />
          
          
        </div>
        
        <CatalogueGridProvider/>
    </div>
    <PageGridProvider/>
    
       <Footer/> 
   
    
    </div>)
}

export default ProductCataloguePage