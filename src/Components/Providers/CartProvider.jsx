import React, { useContext, createContext, useReducer } from 'react';

const cartContext = createContext(null);

const initialCart = {
  cart: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [payload, ...state.cart],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload),
      };
    case 'INCREASE_COUNT':
      let neededIdx = state.cart
        .map((item, idx) => [item._id === payload, idx])
        .filter((item) => item[0] === true)[0][1];
      state.cart[neededIdx].totalPrice = JSON.stringify(
        parseInt(state.cart[neededIdx].totalPrice) +
          parseInt(state.cart[neededIdx].price)
      );
      return {
        ...state,
      };
    case 'DECREASE_COUNT':
      let neededIndx = state.cart
        .map((item, idx) => [item._id === payload, idx])
        .filter((item) => item[0] === true)[0][1];
      state.cart[neededIndx].totalPrice = JSON.stringify(
        parseInt(state.cart[neededIndx].totalPrice) -
          parseInt(state.cart[neededIndx].price)
      );
      return {
        ...state,
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialCart);

  return (
    <cartContext.Provider value={{ cart, dispatchCart: dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
