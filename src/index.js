import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeServer } from "./server";
import { ProductProvider } from './Components/Providers/ProductProvider';
import App from './App';

// Running the mock server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById('root')
);