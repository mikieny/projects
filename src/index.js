import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Basket from './Pages/Basket';
import Products from './Pages/Products';
import { store } from './store'
import { Provider } from 'react-redux';
import Product from './Pages/Product';
import Authreg from './Pages/AuthReg';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Authreg />} />
            <Route path="/products" element={<Products />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
