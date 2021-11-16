import React, { useState } from 'react'
import ProductCard from './ProductCard'
function PageHome(props) {
    // const [prods, setProds] = useState([])
    // setProds(props.products)
    return (
        <div className="container ps-4 pt-4 product-container">
            {
               props.products.map((pr)=>{
                   return(
                       <ProductCard  key={pr.id} data={pr}/>
                   )
               })
            }
        </div>
    )
}

export default PageHome
