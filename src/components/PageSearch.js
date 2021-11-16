import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import ProductCard from './ProductCard';

function PageSearch() {
    const [products,setProducts] = useState([])
    const pString = useParams()
    const fetchProducts = async ()=>{
        const response = await axios.post('https://fda.intertoons.com/api/V1/products',{
            "currentpage":1,
              "pagesize":100,
              "sortorder": {
                  "field":"menu_name",
                  "direction":"desc"
              },
              "searchstring":pString.s,
              "filter":{
                  "category":""
              }
          },
          {
            headers: {"Authorization" : "Bearer akhil@intertoons.com"}
          });
          setProducts(response.data.data.products);
    }
    useEffect(() => {
        fetchProducts()
    }, [])
        return (
            <div className="search-panel">
                {products.map((pr)=>{
                   return(
                       <ProductCard  key={pr.id} data={pr}/>
                   )
               })}
            </div>
    )
}

export default PageSearch
