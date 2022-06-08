import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ImgCard.css";

const ImgCard = ({ product: { _id, imgSrc, title, price, stars } }) => {
	return (
		<Link to={`/product/${_id}`} className='img-card'>
			<img src={`/img/${imgSrc}`} alt='product description' />
			<div className='img-card-details flex-center flex-col align-start'>
				<h3>{title}</h3>
			</div>
		</Link>
	);
};

export default ImgCard;
