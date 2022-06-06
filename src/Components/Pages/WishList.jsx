import React from "react";
import Card from "../Utilities/Card";
import "../Styles/WishList.css";
import EmptyPage from "../Utilities/EmptyPage";
import { useProduct } from "../Providers/ProductProvider";

const WishList = () => {
	const {
		productState: { wishlist },
	} = useProduct();

	return (
		<main className='main wishlist flex flex-col align-center'>
			<h1>My WishList ({wishlist.length})</h1>
			<section className='wishlist-content flex-row-wrap align-center justify-center'>
				{wishlist.length > 0 ? (
					wishlist.map((wish) => <Card key={wish._id} wish={wish} />)
				) : (
					<EmptyPage page='wishlist' />
				)}
			</section>
		</main>
	);
};

export default WishList;
