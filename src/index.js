import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeServer } from "./server";
import { ProductProvider } from './Components/Providers/ProductProvider';
import { WishListProvider } from './Components/Providers/WishListProvider';
import { CartProvider } from './Components/Providers/CartProvider';
import App from './App';

// Running the mock server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <WishListProvider>
          <App />
        </WishListProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);