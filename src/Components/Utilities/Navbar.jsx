import React from "react";
import "../Styles/Navbar.css";
import { Link, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";
import { removeAuth } from "./localStorage";
import { LogOutSuccess } from "./toasts";

const Navbar = ({ getSearchQuery }) => {
	const location = useLocation().pathname;
	const {
		authState: { userLoggedIn },
		dispatchAuth,
	} = useAuth();
	const {
		productState: { cart, wishlist },
	} = useProduct();

	const changeSearchQuery = (e) => {
		getSearchQuery(e.target.value);
	};

	const logoutUser = (e) => {
		removeAuth();
		dispatchAuth({
			type: "LOGGED_OUT",
		});
		LogOutSuccess();
		return <Navigate to='/login' />;
	};

	return (
		<nav className='navbar flex flex-row align-center justify-between'>
			<div className='navbar-left'>
				<Link to='/' className='logo flex-center'>
					<h1>⚾ PlayMart</h1>
				</Link>
			</div>
			{location && location === "/product-listing" && (
				<div className='navbar-mid'>
					<div className='search-bar flex-center'>
						<button className='btn search'>
							<i className='fas fa-search icon'></i>
						</button>
						<input
							id='search-bar'
							type='search'
							name='searchbar'
							placeholder='Search for products...'
							onChange={changeSearchQuery}
						/>
					</div>
				</div>
			)}
			<div className='navbar-right flex-center'>
				{userLoggedIn ? (
					<Link to='/profile' className='btn btn-login' onClick={logoutUser}>
						<div className='user-avatar flex-center'>
							<i class='fa-solid fa-user icon'></i>
						</div>
					</Link>
				) : (
					<Link to='/login' className='btn btn-login'>
						LogIn / SignUp
					</Link>
				)}

				<Link to='/wishlist' className='btn btn-link'>
					<i className='fas fa-heart icon'></i>
					<span className='small'>My WishList</span>
					{userLoggedIn && wishlist && wishlist.length > 0 ? (
						<span className='badge small'>{wishlist.length}</span>
					) : (
						""
					)}
				</Link>
				<Link to='/cart' className='btn btn-link'>
					<i className='fas fa-shopping-cart icon'></i>
					<span className='small'>My Cart</span>
					{userLoggedIn && cart && cart.length > 0 ? (
						<span className='badge small'>{cart.length}</span>
					) : (
						""
					)}
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
