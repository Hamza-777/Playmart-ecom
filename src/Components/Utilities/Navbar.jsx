import React from "react";
import "../Styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";

const Navbar = ({ getSearchQuery }) => {
	const location = useLocation().pathname;
	const {
		authState: { userLoggedIn },
	} = useAuth();
	const {
		productState: { cart, wishlist },
	} = useProduct();

	const changeSearchQuery = (e) => {
		getSearchQuery(e.target.value);
	};

	return (
		<nav
			className='navbar flex flex-row align-center justify-between'
			style={{
				backgroundColor:
					(location.includes("/product/") || location.includes("/profile")) &&
					"transparent",
			}}
		>
			<div className='navbar-left'>
				<Link to='/' className='logo flex-center'>
					<h1
						style={{
							color:
								(location.includes("/product/") ||
									location.includes("/profile")) &&
								"#fff",
						}}
					>
						⚾ PlayMart
					</h1>
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
					<Link
						to='/profile'
						className='btn btn-login flex-center flex-col'
						style={{
							color:
								(location.includes("/product/") ||
									location.includes("/profile")) &&
								"#fff",
							backgroundColor:
								(location.includes("/product/") ||
									location.includes("/profile")) &&
								"transparent",
						}}
					>
						<i className='fa-solid fa-user icon'></i>
						<span className='small'>Welcome Back!</span>
					</Link>
				) : (
					<Link to='/login' className='btn btn-login'>
						LogIn / SignUp
					</Link>
				)}

				<Link
					to='/wishlist'
					className='btn btn-link'
					style={{
						color:
							(location.includes("/product/") ||
								location.includes("/profile")) &&
							"#fff",
						backgroundColor:
							(location.includes("/product/") ||
								location.includes("/profile")) &&
							"transparent",
					}}
				>
					<i className='fas fa-heart icon'></i>
					<span className='small'>My WishList</span>
					{userLoggedIn && wishlist && wishlist.length > 0 ? (
						<span className='badge small'>{wishlist.length}</span>
					) : (
						""
					)}
				</Link>
				<Link
					to='/cart'
					className='btn btn-link'
					style={{
						color:
							(location.includes("/product/") ||
								location.includes("/profile")) &&
							"#fff",
						backgroundColor:
							(location.includes("/product/") ||
								location.includes("/profile")) &&
							"transparent",
					}}
				>
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
