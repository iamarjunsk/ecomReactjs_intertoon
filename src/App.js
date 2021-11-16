import Header from './components/Header';
import PageHome from './components/PageHome';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageProduct from './components/PageProduct';
import { useState } from 'react';
import PageCart from './components/PageCart';
import PageSearch from './components/PageSearch';


function App() {
  return (
    <div className="ps-3">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PageHome/>} />
          <Route path="/product/:pid" element={<PageProduct/>} />
          <Route path="/cart" element={<PageCart/>}/>
          <Route path="/search/:s" element={<PageSearch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


