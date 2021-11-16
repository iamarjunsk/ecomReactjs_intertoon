import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import PageHome from './components/PageHome';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageProduct from './components/PageProduct';


function App() {
  const [products,setProducts]=useState([])
  const [cart, setCart] = useState([])
  useEffect(()=>{
     axios.post('http://fda.intertoons.com/api/V1/products',{
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
    }).then((response)=>{
      setProducts(response.data.data.products)
      // console.log(products);
    })
  },[])
  return (
    <div className="ps-3">
      <Header/>
      <BrowserRouter>
      <Routes>
        {/* <PageHome products={products}/> */}
        <Route path="/" element={<PageHome products={products}/>} />
        <Route path="/product" element={<PageProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
