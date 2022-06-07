import React, { useEffect } from "react";
import Card from "../Utilities/Card";
import "../Styles/WishList.css";
import EmptyPage from "../Utilities/EmptyPage";
import { useProduct } from "../Providers/ProductProvider";
import { getAllItemsFromWishlist } from "../Utilities/requests";

const WishList = () => {
	const {
		productState: { wishlist },
		dispatchState,
	} = useProduct();

	useEffect(() => {
		getAllItemsFromWishlist().then((res) => {
			dispatchState({
				type: "GET_WISHES",
				payload: res,
			});
		});
	}, [dispatchState]);

	return (
		<main className='main wishlist flex flex-col align-center'>
			<h1>My WishList ({wishlist && wishlist.length})</h1>
			<section className='wishlist-content flex-row-wrap align-center justify-center'>
				{wishlist.length > 0 ? (
					wishlist.map((wish) => <Card key={wish._id} product={wish} />)
				) : (
					<EmptyPage page='wishlist' />
				)}
			</section>
		</main>
	);
};

export default WishList;
