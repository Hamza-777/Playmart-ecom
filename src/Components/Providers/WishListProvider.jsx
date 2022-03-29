import React, { useContext, createContext, useReducer } from 'react';

const wishListContext = createContext(null);

const initialWishlist = {
    wishes: []
};

const reducer = (state, action) => {
    const  { type, payload } = action;

    switch(type) {
        case 'ADD_WISH':
            return {
                ...state,
                wishes: [payload, ...state.wishes]
            }
        case 'REMOVE_WISH':
            return {
                ...state,
                wishes: state.wishes.filter(wish => wish._id !== payload)
            }
        case 'UPDATE_STATUS':
            const index = state.wishes.map((product, idx) => [product._id === payload[0], idx]).filter(item => item[0] === true)[0][1];
            state.wishes[index].inCart = payload[1];
            return state;
        default:
            return state;
    }
}

const WishListProvider = ({ children }) => {
    const [ wishList, dispatch ] = useReducer(reducer, initialWishlist);

    return (
        <wishListContext.Provider value={{ wishList, dispatch }}>
            { children }
        </wishListContext.Provider>
    )
}

const useWishList = () => useContext(wishListContext);

export {
    WishListProvider,
    useWishList
}