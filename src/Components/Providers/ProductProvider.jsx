import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

const productContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        (
            async () => {
                const data = await axios.get('/api/products');
                setProducts([ ...data.data.products ]);
            }
        )()
    }, []);

    return (
        <productContext.Provider value={{ products, setProducts }}>
            { children }
        </productContext.Provider>
    )
}

const useProduct = () => useContext(productContext);

export {
    ProductProvider,
    useProduct
}