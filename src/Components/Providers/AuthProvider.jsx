import React, { useContext, createContext, useReducer } from 'react';

const authContext = createContext(null);

const initialAuth = {
    userLoggedIn: false,
    userInfo: null
}

const reducer = (state, { type, payload }) => {
    switch(type) {
        default:
            return state;
    }
}

const AuthProvider = ({ children }) => {
    const [ authState, dispatchAuth ] = useReducer(reducer, initialAuth);

    return (
        <authContext.Provider value={{ authState, dispatchAuth }}>
            { children }
        </authContext.Provider>
    )
}

const useAuth = () => useContext(authContext);

export {
    AuthProvider,
    useAuth
}