import React from 'react';
import '../Styles/Card.css';

const Card = ({ id, imgSrc, title, price, stars }) => {

    return (
        <div className="card card-vertical">
            <div className="card-img">
                <img src={`/img/${imgSrc}`} alt="product description" />
            </div>
            <div className="titles">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <div className="star-rating-container flex-center">
                    <h4 className='stars'>{stars}</h4> <i className="fas fa-star starred"></i>
                </div>
                <span className="price">₹{price}</span>
            </div>
            <div className="card-tools">
                <div className="buttons">
                    <button className="btn">Add To Cart</button>
                </div>
                <div className="icons">
                    <div className="icon-container to-wishlist"><i className="far fa-heart"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Card