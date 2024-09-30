"use client"

'use client'
 
import { useRouter } from 'next/navigation'

interface product {
    product:{
        id: number,
    name: string,
    price:number
    }
    
}


const CatalogueCard:React.FC<product> = (props)=>{

    const router = useRouter()

    return(
        <>
        <div onClick={()=>{if(props.product.id)router.push(`/Browse-Products/Product/${props.product.name}`)}} className="w-64 h-80 bg-black m-auto rounded-md max-sm:w-48 max-sm:h-64 max-xxs:w-40 max-xxs:h-56">
            
        </div>
        <div className="mt-2 ml-1 text-xl max-sm:text-lg">
                {props.product.name.replace("-"," ")}
            </div>
            <div className="mt-2 ml-1  text-lg  font-light mb-6 max-sm:text-base max-sm:mt-0" >
                ${props.product.price}
            </div>
        </>
        
       
    )

}

export default CatalogueCard