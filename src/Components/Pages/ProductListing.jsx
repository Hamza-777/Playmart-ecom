import React, { useState } from "react";
import Card from "../Utilities/Card";
import { useProduct } from "../Providers/ProductProvider";
import "../Styles/ProductListing.css";
import FilterForms from "../Utilities/FilterForms";

const ProductListing = ({ searchQuery }) => {
	const {
		products,
		productState: { prods },
		dispatchState,
	} = useProduct();

	const [displayFilter, setDisplayFilter] = useState(true);

	return (
		<main className='main product-display flex-center align-start'>
			<FilterForms
				products={products}
				dispatchState={dispatchState}
				displayFilter={displayFilter}
				setDisplayFilter={setDisplayFilter}
			/>
			{displayFilter && <hr className='rule appear' />}
			<section className='product-list flex-row-wrap align-start justify-center'>
				{prods &&
					prods.map((product) =>
						product.title &&
						product.title.toLowerCase().indexOf(searchQuery) !== -1 ? (
							<Card key={product._id} product={product} />
						) : (
							""
						)
					)}
			</section>
		</main>
	);
};

export default ProductListing;
