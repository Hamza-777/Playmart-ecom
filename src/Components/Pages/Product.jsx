import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";
import { loginToProceed, successPopup } from "../Utilities/toasts";
import { addToCart, addToWishlist } from "../Utilities/requests";
import "../Styles/Product.css";

const Product = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const {
		authState: { userLoggedIn },
	} = useAuth();
	const {
		productState: { wishlist, cart },
		dispatchState,
		products,
	} = useProduct();

	useEffect(() => {
		setProduct(products.filter((item) => item._id === productId)[0]);
	}, [productId, products]);

	const addItemtoWishlist = (e) => {
		addToWishlist({
			...product,
		}).then((res) => {
			dispatchState({
				type: "ADD_WISH",
				payload: res,
			});
		});
		successPopup("Item added to wishlist!");
	};

	const addItemToCart = (e) => {
		addToCart({
			...product,
		}).then((res) => {
			dispatchState({
				type: "ADD_CART",
				payload: res,
			});
		});
		successPopup("Item added to Cart!");
	};

	return (
		product && (
			<main className='main product-page'>
				<img src={product.backImg} alt={product.title} />
				<div className='product-details flex-center'>
					<img src={`/img/${product.imgSrc}`} alt={product.title} />
					<section className='know-more flex flex-col align-start'>
						<p className='h1'>{product.title} &rarr;</p>
						<p className='h5'>{product.description}</p>
						<div className='misc-details flex-center justify-between'>
							<div className='star-rating-container flex-center'>
								<i className='fas fa-star starred flex-center'>
									<h4 className='stars'>{product.stars}</h4>
								</i>
							</div>
							<p className='price'>
								Buy now for <span>₹{product.price}</span> only
							</p>
						</div>
						<div className='card-tools flex-center flex-col align-start'>
							{cart && cart.some((item) => item._id === productId) ? (
								<Link
									to='/cart'
									className='btn btn-product to-cart flex-center'
									id='to-cart'
								>
									<i className='fas fa-shopping-cart icon'></i> Go To Cart
								</Link>
							) : (
								<button
									className='btn btn-product flex-center'
									onClick={userLoggedIn ? addItemToCart : loginToProceed}
								>
									<i className='fas fa-shopping-cart icon'></i> Add To Cart
								</button>
							)}
							{wishlist && wishlist.some((item) => item._id === productId) ? (
								<Link
									to='/wishlist'
									className='btn btn-product to-cart flex-center'
									id='to-wishlist'
								>
									<i className='fas fa-heart icon'></i> Go To Wishlist
								</Link>
							) : (
								<button
									className='btn btn-product flex-center'
									onClick={addItemtoWishlist}
								>
									<i className='fas fa-heart icon'></i> Add To Wishlist
								</button>
							)}
						</div>
					</section>
				</div>
			</main>
		)
	);
};

export default Product;
