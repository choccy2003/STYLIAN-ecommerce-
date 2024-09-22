interface product {
    product:{
        id: number,
    name: string,
    price:number
    }
    
}


const ProductCard:React.FC<product> = (props)=>{


    return(
        <>
        <div className="w-72 h-96 bg-black m-auto">
            
        </div>
        <div className="mt-4 text-xl ml-7">
                {props.product.name}
            </div>
            <div className="mt-2 text-lg ml-7 font-light" >
                ${props.product.price}
            </div>
        </>
        
       
    )

}

export default ProductCard