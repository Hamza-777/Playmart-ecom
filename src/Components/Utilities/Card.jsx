import React, { useState, useEffect } from "react";
import "../Styles/Card.css";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";
import "react-toastify/dist/ReactToastify.css";
import { loginToProceed } from "./toasts";

const Card = ({ wish: { _id, imgSrc, title, price, stars } }) => {
	const {
		authState: { userLoggedIn },
	} = useAuth();

	return (
		<div className='card card-vertical'>
			<div className='card-img'>
				<img src={`/img/${imgSrc}`} alt='product description' />
			</div>
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
					<button
						className='btn'
						// id={inCartStatus === true ? 'to-cart' : inCart ? 'to-cart' : ''}
						// onClick={userLoggedIn ? addToCart : loginToProceed}
					>
						Add To Cart
					</button>
				</div>
				<div className='icons'>
					<div className='icon-container to-wishlist'>
						{/* <i
              className='fas fa-heart'
              onClick={userLoggedIn ? updateWishList : loginToProceed}
            ></i>
            <i
              className='far fa-heart'
              onClick={userLoggedIn ? updateWishList : loginToProceed}
            ></i> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
