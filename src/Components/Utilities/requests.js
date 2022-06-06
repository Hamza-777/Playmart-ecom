import axios from "axios";
import { setAuth, getAuth } from "./localStorage";
import {
	errorPopup,
	logInSuccess,
	notFound,
	SignUpSuccess,
	unauthorized,
	userExists,
} from "./toasts";

const sendLoginReq = async (body) => {
	try {
		const response = await axios.post("/api/auth/login", body);
		console.log(response);
		setAuth(response.data.encodedToken);
		logInSuccess();
		return response.data.encodedToken;
	} catch (err) {
		err.response.status === 401 ? unauthorized() : notFound();
	}
};

const sendSignupReq = async (body) => {
	try {
		const response = await axios.post("/api/auth/signup", body);
		setAuth(response.data.encodedToken);
		SignUpSuccess();
		return response.data.encodedToken;
	} catch (err) {
		if (err.response.status === 422) {
			userExists();
		}
	}
};

const getAllProducts = async () => {
	try {
		const response = await axios.get("/api/products");
		return response.data.products;
	} catch (err) {
		console.log(err);
	}
};

const getAProduct = async (id) => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.get(`/api/user/products/${id}`, config);
		return response.data.product;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

const getAllItemsFromWishlist = async () => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.get(`/api/user/wishlist`, config);
		return response.data.wishlist;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

const addToWishlist = async (body) => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.post(
			`/api/user/wishlist`,
			{ product: body },
			config
		);
		return response.data.wishlist;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

const removeFromWishlist = async (body, id) => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.delete(
			`/api/user/wishlist/${id}`,
			{ product: body },
			config
		);
		return response.data.wishlist;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

const getAllItemsFromCart = async () => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.get(`/api/user/cart`, config);
		return response.data.cart;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

const addToCart = async (body) => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.post(
			`/api/user/cart`,
			{ product: body },
			config
		);
		return response.data.cart;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

const removeFromCart = async (body, id) => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.delete(
			`/api/user/cart/${id}`,
			{ product: body },
			config
		);
		return response.data.cart;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

const updateItemQuantity = async (body, id) => {
	const config = {
		headers: {
			authorization: getAuth(),
		},
	};
	try {
		const response = await axios.post(
			`/api/user/cart/${id}`,
			{ action: body },
			config
		);
		return response.data.cart;
	} catch (err) {
		errorPopup("No such user exists!");
	}
};

export {
	sendLoginReq,
	sendSignupReq,
	getAllProducts,
	getAProduct,
	getAllItemsFromWishlist,
	addToWishlist,
	removeFromWishlist,
	getAllItemsFromCart,
	addToCart,
	removeFromCart,
	updateItemQuantity,
};
