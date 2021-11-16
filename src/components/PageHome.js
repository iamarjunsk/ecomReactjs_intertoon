import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { setProducts } from "../redux/actions/productsActions";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

function PageHome(props) {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    const [page,setPage] = useState(1)
    // const [prod,setProd] = useState([])
    const fetchProducts = async ()=>{
        const response = await axios.post('http://fda.intertoons.com/api/V1/products',{
            "currentpage":page,
              "pagesize":10,
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
        //   if(prod){
        //       setProd(prod=>[...prod,...response.data.data.products])
        //   }
        //   else{
        //     setProd(response.data.data.products)
        //   }
        //   console.log(prod);
        let allPrd = [...products.allProducts.products,...response.data.data.products]
        console.log(allPrd);
        // dispatch(setProducts(response.data.data.products));
        dispatch(setProducts(allPrd))
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    
    const loadpage = ()=>{
        console.log("scrolled");
        setPage(page+1)
        console.log(page);
        fetchProducts()
    }
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          // you're at the bottom of the page
          loadpage()
        }
      };
    // window.document.addEventListener('scroll',loadScroll)
    return (
        <div className="container ps-4 pt-4 product-container"  >
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
