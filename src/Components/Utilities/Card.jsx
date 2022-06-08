import React from "react";
import "../Styles/Card.css";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";
import "react-toastify/dist/ReactToastify.css";
import { errorPopup, loginToProceed, successPopup } from "./toasts";
import { addToCart, addToWishlist, removeFromWishlist } from "./requests";
import { Link } from "react-router-dom";

const Card = ({ product: { _id, imgSrc, title, price, stars } }) => {
	const {
		authState: { userLoggedIn },
	} = useAuth();
	const {
		productState: { wishlist, cart },
		dispatchState,
	} = useProduct();

	const addItemtoWishlist = (e) => {
		addToWishlist({
			_id,
			imgSrc,
			title,
			price,
			stars,
		}).then((res) => {
			dispatchState({
				type: "ADD_WISH",
				payload: res,
			});
		});
		successPopup("Item added to wishlist!");
	};

	const removeItemFromWishlist = (e) => {
		removeFromWishlist(_id).then((res) => {
			dispatchState({
				type: "REMOVE_WISH",
				payload: res,
			});
		});
		errorPopup("Item removed from wishlist!");
	};

	const addItemToCart = (e) => {
		addToCart({
			_id,
			imgSrc,
			title,
			price,
			stars,
		}).then((res) => {
			dispatchState({
				type: "ADD_CART",
				payload: res,
			});
		});
		successPopup("Item added to Cart!");
	};

	return (
		<div className='card card-vertical'>
			<Link to={`/product/${_id}`} className='card-img'>
				<img src={`/img/${imgSrc}`} alt='product description' />
			</Link>
			<div className='titles'>
				<h3>{title}</h3>
			</div>
			<div className='card-body flex-center justify-between'>
				<div className='star-rating-container flex-center'>
					<i className='fas fa-star starred'></i>{" "}
					<h4 className='stars'>{stars}</h4>
				</div>
				<span className='price'>₹{price}</span>
			</div>
			<div className='card-tools'>
				<div className='buttons'>
					{cart && cart.some((item) => item._id === _id) ? (
						<Link to='/cart' className='btn to-cart' id='to-cart'>
							Go To Cart
						</Link>
					) : (
						<button
							className='btn'
							onClick={userLoggedIn ? addItemToCart : loginToProceed}
						>
							Add To Cart
						</button>
					)}
				</div>
				<div className='icons'>
					<div className='icon-container to-wishlist'>
						{wishlist && wishlist.some((item) => item._id === _id) ? (
							<i className='fas fa-heart' onClick={removeItemFromWishlist}></i>
						) : (
							<i
								className='far fa-heart'
								onClick={userLoggedIn ? addItemtoWishlist : loginToProceed}
							></i>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
