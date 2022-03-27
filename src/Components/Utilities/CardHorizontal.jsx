import React, { useState, useEffect, useRef } from 'react';
import { useWishList } from '../Providers/WishListProvider';
import { useCart } from '../Providers/CartProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardHorizontal = ({ id, imgSrc, title, price }) => {
    const [ quantity, setQuantity ] = useState(1);
    const [ prevQuantity, setPrevQuantity ] = useState(quantity);
    const { wishList, dispatch } = useWishList();
    const { dispatchCart } = useCart();
    const notInitialRender = useRef(false);

    const payload = {
        _id: id,
        imgSrc,
        title,
        price
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

    const removedFromCart = () => toast.error('Removed from cart successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const removeFromCart = e => {
        dispatchCart({
            type: 'REMOVE_ITEM',
            payload: id
        });
        removedFromCart();
    }

    const addToWishList = e => {
        if(wishList.wishes.length) {
            if(wishList.wishes.filter(item => item._id === id).length === 0) {
                dispatch({
                    type: "ADD_WISH",
                    payload: payload
                });
                addedToWishList();
            }
        } else {
            dispatch({
                type: "ADD_WISH",
                payload: payload
            });
            addedToWishList();
        }
    }

    const changeQuantity = e => {
        setPrevQuantity(quantity);
        setQuantity(e.target.value);
    }

    useEffect(() => {
        if(notInitialRender.current && prevQuantity < quantity) {
            dispatchCart({
                type: 'INCREASE_COUNT',
                payload: id
            });
        } else if(notInitialRender.current && prevQuantity > quantity) {
            dispatchCart({
                type: 'DECREASE_COUNT',
                payload: id
            });
        } else {
            notInitialRender.current = true;
        }
    }, [quantity])

    return (
        <div className="card card-horizontal">
            <div className="card-header">
                <div className="card-img">
                    <img src={`/img/${imgSrc}`} alt="product desc" />
                </div>
                <div className="card-body">
                    <div className="titles">
                        <h3>{title}</h3>
                        <h5>₹{price}</h5>
                    </div>
                    <div className="quantity flex-center">
                        <label for="password">Quantity: </label>
                        <input type="number" className="number" min="0" value={quantity} onChange={changeQuantity} />
                    </div>
                    <div className="card-tools">
                        <div className="buttons">
                            <button className="btn" onClick={addToWishList}>Add To Wishlist</button>
                        </div>
                        <div className="icons">
                            <div className="icon-container" onClick={removeFromCart}>
                                <i className="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHorizontal;