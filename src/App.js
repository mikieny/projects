import Products from "./Pages/Products";
import Basket from "./Pages/Basket";
import './index.css';
import { Outlet } from "react-router-dom";
import './../src/Pages/Products'
import Product from "./Pages/Product";
import Authreg from "./Pages/AuthReg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
      <Outlet />
    </div>
  );
}

export default App;
