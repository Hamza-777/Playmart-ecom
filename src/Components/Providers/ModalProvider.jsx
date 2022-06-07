import React, { createContext, useContext, useState, useReducer } from "react";

const modalContext = createContext(null);

const initialState = {
	address: {
		name: "",
		street: "",
		city: "",
		state: "",
		pincode: "",
	},
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case "UPDATE_ADDRESS":
			return {
				...state,
				address: payload,
			};
		default:
			return state;
	}
};

const ModalProvider = ({ children }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalState, dispatchModal] = useReducer(reducer, initialState);

	return (
		<modalContext.Provider
			value={{ modalOpen, setModalOpen, modalState, dispatchModal }}
		>
			{children}
		</modalContext.Provider>
	);
};

const useModal = () => useContext(modalContext);

export { ModalProvider, useModal };
