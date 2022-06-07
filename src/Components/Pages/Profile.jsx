import React, { useState, useEffect } from "react";
import { removeAuth, removeUser, getUser } from "../Utilities/localStorage";
import { LogOutSuccess } from "../Utilities/toasts";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { useProduct } from "../Providers/ProductProvider";
import "../Styles/Profile.css";
import ImgCard from "../Utilities/ImgCard";

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
		<main className='main'>
			<section className='profile flex-center flex-col'>
				<div className='user-avatar profile-avatar flex-center'>
					<i class='fa-solid fa-user icon'></i>
				</div>
				<hr className='rule' />
				<div className='user-options flex-center'>
					<p className='h5'>{user && user.name}</p>
					<p className='h5'>{user && user.email}</p>
					<button className='btn btn-logout' onClick={logoutUser}>
						Logout
					</button>
				</div>
				<hr className='rule' />
				<div className='user-options flex-center'>
					<button
						className='btn btn-logout flex-center'
						style={{ backgroundColor: show === "cart" ? "black" : "#3a3845" }}
						onClick={(e) => setShow("cart")}
					>
						Cart Status{" "}
						<div className='flex-center bag-count'>{cart && cart.length}</div>
					</button>
					<button
						className='btn btn-logout flex-center'
						style={{
							backgroundColor: show === "wishlist" ? "black" : "#3a3845",
						}}
						onClick={(e) => setShow("wishlist")}
					>
						WishList Status{" "}
						<div className='flex-center bag-count'>
							{wishlist && wishlist.length}
						</div>
					</button>
				</div>
				<hr className='rule' />
				<div className='flex-row-wrap justify-center cards-display'>
					{cart && wishlist && cart.length === 0 && wishlist.length === 0 ? (
						<p>Add to your cart & wishlist</p>
					) : show === "cart" ? (
						cart &&
						cart.map((item) => <ImgCard key={item._id} product={item} />)
					) : (
						wishlist &&
						wishlist.map((item) => <ImgCard key={item._id} product={item} />)
					)}
				</div>
			</section>
		</main>
	);
};

export default Profile;
