import React, { useState, useEffect } from 'react';
import "../Styles/Cart.css";
import CardHorizontal from '../Utilities/CardHorizontal';
import { useCart } from '../Providers/CartProvider';

const Cart = () => {
    const [ totalPrice, setTotalPrice ] = useState(0);
    const { cart } = useCart();

    useEffect(() => {
        setTotalPrice(
            cart.cart.reduce((acc, obj) => acc + parseInt(obj.totalPrice), 0)
        )
    }, [cart])

    return (
        <main className="main wishlist flex flex-col align-center">
            <h1>Cart</h1>
            <section className="cart-content flex-center align-start">
                <div className="cart-left flex-center flex-col align-stretch">
                    <div className="address flex-center justify-between">
                        <div className="address-left flex-center flex-col align-start">
                            <p className="h4">Deliver To: </p>
                            <p className="small">Hamza Rarani, Amravati, 444904</p>
                            <p className="small">Amravati Road, Weekly Bazar, Chandur Rly</p>
                        </div>
                        <div className="address-right">
                            <a href="!#" className="btn btn-link flex-center"><i className="fa-solid fa-pen"></i></a>
                        </div>
                    </div>
                    {
                        cart.cart && cart.cart.map(item => (
                            <CardHorizontal key={item._id} id={item._id} imgSrc={item.imgSrc} title={item.title} price={item.price} />
                        ))
                    }
                </div>
                <div className="cart-right flex-center flex-col align-start">
                    <h3>Coupons / Promo Code</h3>
                    <form className="coupon-form">
                        <div className="form-item flex-center justify-between">
                            <input type="text" placeholder="Enter the code" />
                            <button type="submit" className="flex-center"><i className="fa-solid fa-tag"></i> Apply</button>
                        </div>
                    </form>
                    <h3>Purchase Details: {
                        cart.cart.length > 0 && (
                            <span className="small">( {cart.cart.length} {cart.cart.length === 1 ? 'item' : 'items'} )</span>
                        )
                    }</h3>
                    <div className="bill flex-center flex-col align-stretch">
                        <div className="bill-item flex-center justify-between">
                            <div className="bill-item-left">Total MRP</div>
                            <div className="bill-item-right">₹{totalPrice}</div>
                        </div>
                        <div className="bill-item flex-center justify-between">
                            <div className="bill-item-left">Coupon Discount</div>
                            <div className="bill-item-right">₹0</div>
                        </div>
                        <div className="bill-item flex-center justify-between">
                            <div className="bill-item-left">Delivery Charges</div>
                            <div className="bill-item-right">₹{totalPrice === 0 ? 0 : 50}</div>
                        </div>
                        <hr className='line' />
                        <div className="bill-item flex-center justify-between">
                            <div className="bill-item-left">Grand Total</div>
                            <div className="bill-item-right">₹{totalPrice === 0 ? 0 : totalPrice + 50}</div>
                        </div>
                    </div>
                    <button className="btn btn-link">Place Order</button>
                </div>
            </section>
        </main>
    )
}

export default Cart