import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Utilities/Navbar";
import Footer from "./Components/Utilities/Footer";
import Home from "./Components/Pages/Home";
import ProductListing from "./Components/Pages/ProductListing";
import SignUp from "./Components/Pages/SignUp";
import Login from "./Components/Pages/Login";
import WishList from "./Components/Pages/WishList";
import Cart from "./Components/Pages/Cart";
import PrivateRoute from "./Components/Utilities/PrivateRoute";
import ErrorPage from "./Components/Pages/ErrorPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Components/Pages/Profile";
import Product from "./Components/Pages/Product";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	const getSearchQuery = (recievedQuery) => {
		setSearchQuery(recievedQuery);
	};
	return (
		<Router>
			<Navbar getSearchQuery={getSearchQuery} />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/product-listing'
					element={<ProductListing searchQuery={searchQuery} />}
				/>
				<Route path='/product/:productId' element={<Product />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
				<Route
					path='/wishlist'
					element={
						<PrivateRoute>
							<WishList />
						</PrivateRoute>
					}
				/>
				<Route
					path='/cart'
					element={
						<PrivateRoute>
							<Cart />
						</PrivateRoute>
					}
				/>
				<Route
					path='/profile'
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
			<Footer />
			<ToastContainer />
		</Router>
	);
}

export default App;
