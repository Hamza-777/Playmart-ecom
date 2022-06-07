import React, {
	useContext,
	createContext,
	useState,
	useEffect,
	useReducer,
} from "react";
import { getAllProducts } from "../Utilities/requests";

const productContext = createContext(null);

const reducer = (state, { type, payload }) => {
	const categoryCondition = (product) => {
		return (
			(payload.openWorld && product.category.includes("openWorld")) ||
			(payload.actionAdventure &&
				product.category.includes("actionAdventure")) ||
			(payload.rts && product.category.includes("rts")) ||
			(payload.rolePlaying && product.category.includes("role-playing")) ||
			(payload.survival && product.category.includes("survival")) ||
			(payload.horror && product.category.includes("horror")) ||
			(payload.party && product.category.includes("party"))
		);
	};

	const sliderCondition = (product) => {
		return parseInt(product.price) <= payload.slider;
	};

	const sortProducts = (products) => {
		if (payload.lowToHigh) {
			return products.sort((a, b) => +a.price - +b.price);
		} else if (payload.highToLow) {
			return products.sort((a, b) => +b.price - +a.price);
		} else {
			return products;
		}
	};

	switch (type) {
		case "FILTER_PRODUCTS":
			return {
				...state,
				prods: sortProducts([
					...payload.products
						.filter((product) => product.stars >= payload.starValue)
						.filter((product) => sliderCondition(product))
						.filter((product) => categoryCondition(product)),
				]),
			};
		case "GET_WISHES":
		case "ADD_WISH":
		case "REMOVE_WISH":
			return {
				...state,
				wishlist: payload,
			};
		case "GET_CARTS":
		case "ADD_CART":
		case "REMOVE_CART":
		case "UPDATE_COUNT":
			return {
				...state,
				cart: payload,
			};
		default:
			return state;
	}
};

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [productState, dispatchState] = useReducer(reducer, {
		prods: products,
		wishlist: [],
		cart: [],
	});

	useEffect(() => {
		(async () => {
			const data = await getAllProducts();
			setProducts([...data]);
		})();
	}, []);

	return (
		<productContext.Provider
			value={{ products, setProducts, productState, dispatchState }}
		>
			{children}
		</productContext.Provider>
	);
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
