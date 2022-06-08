import React, { useState, useEffect } from "react";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";
import "react-toastify/dist/ReactToastify.css";
import { addToWishlist, removeFromCart, updateItemQuantity } from "./requests";
import { errorPopup, loginToProceed, successPopup } from "./toasts";
import { Link } from "react-router-dom";

const CardHorizontal = ({
	product: { _id, imgSrc, title, price, stars, qty },
}) => {
	const [quantity, setQuantity] = useState(+qty);
	const {
		authState: { userLoggedIn },
	} = useAuth();
	const {
		productState: { wishlist },
		dispatchState,
	} = useProduct();

	useEffect(() => {
		if (qty === 1) {
			if (qty < quantity) {
				updateItemQuantity(
					{
						type: "increment",
					},
					_id
				).then((res) => {
					dispatchState({
						type: "UPDATE_COUNT",
						payload: res,
					});
				});
			}
		} else {
			if (qty < quantity) {
				updateItemQuantity(
					{
						type: "increment",
					},
					_id
				).then((res) => {
					dispatchState({
						type: "UPDATE_COUNT",
						payload: res,
					});
				});
			} else if (qty > quantity) {
				updateItemQuantity(
					{
						type: "decrement",
					},
					_id
				).then((res) => {
					dispatchState({
						type: "UPDATE_COUNT",
						payload: res,
					});
				});
			}
		}
	}, [quantity, _id, dispatchState, qty]);

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

	const removeItemFromCart = (e) => {
		removeFromCart(_id).then((res) => {
			dispatchState({
				type: "REMOVE_CART",
				payload: res,
			});
		});
		errorPopup("Item removed from Cart!");
	};

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
						<label htmlFor='password' className='h4'>
							Quantity:{" "}
						</label>
						<input
							type='number'
							className='number'
							min='0'
							value={qty}
							onChange={(e) => setQuantity(+e.target.value)}
						/>
					</div>
					<div className='card-tools'>
						<div className='buttons'>
							{wishlist && wishlist.some((item) => item._id === _id) ? (
								<Link to='/wishlist' className='btn to-cart' id='to-cart'>
									Go To Wishlist
								</Link>
							) : (
								<button
									className='btn'
									onClick={userLoggedIn ? addItemtoWishlist : loginToProceed}
								>
									Add To Wishlist
								</button>
							)}
						</div>
						<div className='icons'>
							<div className='icon-container' onClick={removeItemFromCart}>
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
