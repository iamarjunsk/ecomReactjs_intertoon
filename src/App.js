import Header from './components/Header';
import PageHome from './components/PageHome';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PageProduct from './components/PageProduct';


function App() {

  return (
    <div className="ps-3">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome/>} />
        <Route path="/product/:pid" element={<PageProduct/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
