import React, { useState, useEffect } from "react";
import { useProduct } from "../Providers/ProductProvider";
import "react-toastify/dist/ReactToastify.css";

const CardHorizontal = ({
	item: { _id, imgSrc, title, price, stars, qty },
}) => {
	const {
		productState: { wishlist, cart },
	} = useProduct();

	return (
		<div className='card card-horizontal'>
			<div className='card-header'>
				<div className='card-img'>
					<img src={`/img/${imgSrc}`} alt='product desc' />
				</div>
				<div className='card-body'>
					<div className='titles'>
						<h3>{title}</h3>
						<h5>₹{price}</h5>
					</div>
					<div className='quantity flex-center'>
						<label htmlFor='password'>Quantity: </label>
						<input type='number' className='number' min='0' value={qty} />
					</div>
					<div className='card-tools'>
						<div className='buttons'>
							<button className='btn'>Add To Wishlist</button>
						</div>
						<div className='icons'>
							<div className='icon-container'>
								<i className='fa-solid fa-trash-can'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardHorizontal;
