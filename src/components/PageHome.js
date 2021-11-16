import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { setProducts } from "../redux/actions/productsActions";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function PageHome(props) {
    // const [prods, setProds] = useState([])
    // setProds(props.products)
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async ()=>{
        const response = await axios.post('http://fda.intertoons.com/api/V1/products',{
            "currentpage":1,
              "pagesize":100,
              "sortorder": {
                  "field":"menu_name",
                  "direction":"desc"
              },
              "searchstring":"",
              "filter":{
                  "category":""
              }
          },
          {
            headers: {"Authorization" : "Bearer akhil@intertoons.com"}
          });
          dispatch(setProducts(response.data.data.products));
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    console.log(products.allProducts.products);
    return (
        <div className="container ps-4 pt-4 product-container">
            {
               products.allProducts.products.map((pr)=>{
                   return(
                       <ProductCard  key={pr.id} data={pr}/>
                   )
               })
            }
        </div>
    )
}

export default PageHome
