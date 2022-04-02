import React, { useState, useEffect } from 'react';
import '../Styles/Card.css';
import { useAuth } from '../Providers/AuthProvider';
import { useProduct } from '../Providers/ProductProvider';
import { useWishList } from '../Providers/WishListProvider';
import { useCart } from '../Providers/CartProvider';
import { useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { addedToWishList, removedFromWishList, addedToCart, loginToProceed } from './toasts';

const Card = ({ id, imgSrc, title, price, stars, inWishList, inCart }) => {
    const location = useLocation().pathname;
    const { authState: { userLoggedIn } } = useAuth();
    const { products, setProducts } = useProduct();
    const { wishList, dispatch } = useWishList();
    const { cart, dispatchCart } = useCart();
    const [ wishClass, setWishClass ] = useState('');
    const [ inCartStatus, setInCartStatus ] = useState(false);

    const updateWishListStatus = () => {
        const index = products.map((product, idx) => [product._id === id, idx]).filter(item => item[0] === true)[0][1];
        const newList = [...products];
        newList[index].inWishList = !newList[index].inWishList;
        setProducts([...newList]);
        return newList[index].inWishList;
    }

    const updateCartStatus = () => {
        const index = products.map((product, idx) => [product._id === id, idx]).filter(item => item[0] === true)[0][1];
        const newList = [...products];
        newList[index].inCart = !newList[index].inCart;
        setProducts([...newList]);
        return newList[index].inCart;
    }

    const updateWishList = e => {
        if(wishClass === "far fa-heart") {
            if(wishList.wishes.length) {
                if(wishList.wishes.filter(item => item._id === id).length === 0) {
                    updateWishListStatus();
                    dispatch({
                        type: "ADD_WISH",
                        payload: {
                            _id: id,
                            title,
                            imgSrc,
                            price,
                            totalPrice: price,
                            stars,
                            inWishList: updateWishListStatus(),
                            inCart
                        }
                    });
                    addedToWishList();
                }
            } else {
                dispatch({
                    type: "ADD_WISH",
                    payload: {
                        _id: id,
                        title,
                        imgSrc,
                        price,
                        totalPrice: price,
                        stars,
                        inWishList: updateWishListStatus(),
                        inCart
                    }
                });
                addedToWishList();
            }
        } else {
            removedFromWishList();
            updateWishListStatus();
            dispatch({
                type: "REMOVE_WISH",
                payload: id
            });
        }
    }

    const addToCart = e => {
        if(cart.cart.length) {
            if(cart.cart.filter(item => item._id === id).length === 0) {
                if(location === '/wishlist') {
                    dispatch({
                        type: 'UPDATE_STATUS',
                        payload: [id, true]
                    });
                    setInCartStatus(true);
                }
                dispatchCart({
                    type: "ADD_ITEM",
                    payload: {
                        _id: id,
                        title,
                        imgSrc,
                        price,
                        totalPrice: price,
                        stars,
                        inWishList,
                        inCart: updateCartStatus()
                    }
                });
                addedToCart();
            }
        } else {
            if(location === '/wishlist') {
                dispatch({
                    type: 'UPDATE_STATUS',
                    payload: [id, true]
                });
                setInCartStatus(true);
            }
            dispatchCart({
                type: "ADD_ITEM",
                payload: {
                    _id: id,
                    title,
                    imgSrc,
                    price,
                    totalPrice: price,
                    stars,
                    inWishList,
                    inCart: updateCartStatus()
                }
            });
            addedToCart();
        }
    }

    useEffect(() => {
        setWishClass(inWishList ? 'fas fa-heart' : 'far fa-heart');
    }, [inWishList])

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
                <div className="buttons">
                    <button className="btn" id={ inCartStatus === true ? 'to-cart' : inCart ? 'to-cart' : '' }  onClick={userLoggedIn ? addToCart : loginToProceed}>{ inCartStatus === true ? 'Added' : inCart ? 'Added' : 'Add' } To Cart</button>
                </div>
                <div className="icons">
                    <div className="icon-container to-wishlist"><i className={wishClass} onClick={userLoggedIn ? updateWishList : loginToProceed}></i></div>
                </div>
            </div>
        </div>
    )
}

export default Card