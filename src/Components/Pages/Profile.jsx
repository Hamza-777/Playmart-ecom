import React, { useState, useEffect } from "react";
import { removeAuth, removeUser, getUser } from "../Utilities/localStorage";
import { LogOutSuccess } from "../Utilities/toasts";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";
import "../Styles/Profile.css";
import ImgCard from "../Utilities/ImgCard";
import Address from "../Utilities/Address";

const Profile = () => {
	const { dispatchAuth } = useAuth();
	const {
		productState: { cart, wishlist },
	} = useProduct();
	const [user, setUser] = useState();
	const [show, setShow] = useState(cart.length > 0 ? "cart" : "wishlist");

	useEffect(() => {
		setUser(getUser());
	}, []);

	const logoutUser = (e) => {
		removeAuth();
		removeUser();

		dispatchAuth({
			type: "LOGGED_OUT",
		});
		LogOutSuccess();
		return <Navigate to='/login' />;
	};

	return (
		<main className='profile-page main'>
			<img
				src='https://cutewallpaper.org/21/4k-wallpaper-gaming/1920x1080-Gaming-Background-Wallpaper-Spiritedmusepress.com.jpg'
				alt='profile-back'
			/>
			<section className='profile flex-center flex-col'>
				<div className='user-avatar profile-avatar flex-center'>
					<i className='fa-solid fa-user icon'></i>
				</div>
				<p className='h4'>{user && user.name}</p>
				<hr className='rule' />
				<div className='user-options flex-center'>
					<p className='h5 flex-center'>
						<i className='fa-solid fa-envelope icon'></i> {user && user.email}
					</p>
					<button className='btn btn-profile flex-center' onClick={logoutUser}>
						Logout <i className='fa-solid fa-arrow-right-from-bracket icon'></i>
					</button>
				</div>
				<hr className='rule' />
				<div className='user-options flex-center'>
					<button
						className='btn btn-profile flex-center'
						style={{
							borderBottom:
								show === "cart" ? "3px solid #000" : "3px solid transparent",
						}}
						onClick={(e) => setShow("cart")}
					>
						Cart Status{" "}
						<div className='flex-center bag-count'>{cart && cart.length}</div>
					</button>
					<button
						className='btn btn-profile flex-center'
						style={{
							borderBottom:
								show === "wishlist"
									? "3px solid #000"
									: "3px solid transparent",
						}}
						onClick={(e) => setShow("wishlist")}
					>
						WishList Status{" "}
						<div className='flex-center bag-count'>
							{wishlist && wishlist.length}
						</div>
					</button>
				</div>
				<div className='flex-row-wrap justify-center cards-display'>
					{cart && wishlist && cart.length === 0 && wishlist.length === 0 ? (
						<img
							src='img/empty_state.webp'
							className='empty-box'
							alt='emptiness'
						/>
					) : show === "cart" ? (
						cart && cart.length > 0 ? (
							cart.map((item) => <ImgCard key={item._id} product={item} />)
						) : (
							<img
								src='img/empty_state.webp'
								className='empty-box'
								alt='emptiness'
							/>
						)
					) : wishlist && wishlist.length > 0 ? (
						wishlist.map((item) => <ImgCard key={item._id} product={item} />)
					) : (
						<img
							src='img/empty_state.webp'
							className='empty-box'
							alt='emptiness'
						/>
					)}
				</div>
				<hr className='rule' />
				<Address />
			</section>
		</main>
	);
};

export default Profile;
