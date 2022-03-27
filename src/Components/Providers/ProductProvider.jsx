import React, { useContext, createContext, useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const productContext = createContext(null);

const reducer = (state, { type, payload }) => {
    switch(type) {
        case 'FILTER_PRODUCTS':
            return {
                ...state,
                prods: payload.aboveFour ? 
                [ ...payload.products.filter(product => product.stars >= 4).filter(product => parseInt(product.price) <= payload.slider).filter(product => (payload.openWorld && product.category.includes('openWorld')) || (payload.actionAdventure && product.category.includes('actionAdventure')) || (payload.rts && product.category.includes('rts')) || (payload.rolePlaying && product.category.includes('role-playing')) || (payload.survival && product.category.includes('survival')) || (payload.horror && product.category.includes('horror')) || (payload.party && product.category.includes('party'))) ] : 
                payload.aboveThree ? 
                [ ...payload.products.filter(product => product.stars >= 3).filter(product => parseInt(product.price) <= payload.slider).filter(product => (payload.openWorld && product.category.includes('openWorld')) || (payload.actionAdventure && product.category.includes('actionAdventure')) || (payload.rts && product.category.includes('rts')) || (payload.rolePlaying && product.category.includes('role-playing')) || (payload.survival && product.category.includes('survival')) || (payload.horror && product.category.includes('horror')) || (payload.party && product.category.includes('party'))) ] : 
                payload.aboveTwo ? 
                [ ...payload.products.filter(product => product.stars >= 2).filter(product => parseInt(product.price) <= payload.slider).filter(product => (payload.openWorld && product.category.includes('openWorld')) || (payload.actionAdventure && product.category.includes('actionAdventure')) || (payload.rts && product.category.includes('rts')) || (payload.rolePlaying && product.category.includes('role-playing')) || (payload.survival && product.category.includes('survival')) || (payload.horror && product.category.includes('horror')) || (payload.party && product.category.includes('party'))) ] : 
                [ ...payload.products.filter(product => product.stars >= 1).filter(product => parseInt(product.price) <= payload.slider).filter(product => (payload.openWorld && product.category.includes('openWorld')) || (payload.actionAdventure && product.category.includes('actionAdventure')) || (payload.rts && product.category.includes('rts')) || (payload.rolePlaying && product.category.includes('role-playing')) || (payload.survival && product.category.includes('survival')) || (payload.horror && product.category.includes('horror')) || (payload.party && product.category.includes('party'))) ]
            }
        default:
            return state;
    }
}

const ProductProvider = ({ children }) => {
    const [ products, setProducts ] = useState([]);
    const [ productState, dispatchState ] = useReducer(reducer, {
        prods: products
    });

    useEffect(() => {
        (
            async () => {
                const data = await axios.get('/api/products');
                setProducts([ ...data.data.products ]);
            }
        )()
    }, []);

    return (
        <productContext.Provider value={{ products, productState, dispatchState }}>
            { children }
        </productContext.Provider>
    )
}

const useProduct = () => useContext(productContext);

export {
    ProductProvider,
    useProduct
}