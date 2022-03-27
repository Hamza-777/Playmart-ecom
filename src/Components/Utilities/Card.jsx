import React, { useState, useEffect } from 'react';
import '../Styles/Card.css';
import { useWishList } from '../Providers/WishListProvider';
import { useCart } from '../Providers/CartProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ id, imgSrc, title, price, stars, wish = "far fa-heart" }) => {
    const { wishList, dispatch } = useWishList();
    const { cart, dispatchCart } = useCart();
    const [ wishClass, setWishClass ] = useState('');

    const payload = {
        _id: id,
        title,
        imgSrc,
        price,
        totalPrice: price,
        stars
    }

    const addedToWishList = () => toast.success('Added to wishlist successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const removedFromWishList = () => toast.error('Removed from wishlist successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const addedToCart = () => toast.success('Added to cart successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const updateWishList = e => {
        if(wishClass === "far fa-heart") {
            if(wishList.wishes.length) {
                if(wishList.wishes.filter(item => item._id === id).length === 0) {
                    dispatch({
                        type: "ADD_WISH",
                        payload: payload
                    });
                    setWishClass('fas fa-heart');
                    addedToWishList();
                }
            } else {
                dispatch({
                    type: "ADD_WISH",
                    payload: payload
                });
                setWishClass('fas fa-heart');
                addedToWishList();
            }
        } else {
            removedFromWishList();
            dispatch({
                type: "REMOVE_WISH",
                payload: id
            });
            setWishClass('far fa-heart');
        }
    }

    const addToCart = e => {
        if(cart.cart.length) {
            if(cart.cart.filter(item => item._id === id).length === 0) {
                dispatchCart({
                    type: "ADD_ITEM",
                    payload: payload
                });
                addedToCart();
            }
        } else {
            dispatchCart({
                type: "ADD_ITEM",
                payload: payload
            });
            addedToCart();
        }
    }

    useEffect(() => {
        setWishClass(wish);
    }, [wish])

    return (
        <div className="card card-vertical">
            <div className="card-img">
                <img src={`/img/${imgSrc}`} alt="product description" />
            </div>
            <div className="titles">
                <h3>{title}</h3>
            </div>
            <div className="card-body flex-center justify-between">
                <div className="star-rating-container flex-center">
                <i className="fas fa-star starred"></i> <h4 className='stars'>{stars}</h4>
                </div>
                <span className="price">₹{price}</span>
            </div>
            <div className="card-tools">
                <div className="buttons" onClick={addToCart}>
                    <button className="btn">Add To Cart</button>
                </div>
                <div className="icons" onClick={updateWishList}>
                    <div className="icon-container to-wishlist"><i className={wishClass}></i></div>
                </div>
            </div>
        </div>
    )
}

export default Card