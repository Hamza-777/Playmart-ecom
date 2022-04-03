import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeServer } from './server';
import { AuthProvider } from './Components/Providers/AuthProvider';
import { ProductProvider } from './Components/Providers/ProductProvider';
import { CartProvider } from './Components/Providers/CartProvider';
import { WishListProvider } from './Components/Providers/WishListProvider';
import App from './App';

// Running the mock server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
