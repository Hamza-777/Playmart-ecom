import React from 'react';
import '../Styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation().pathname;

    return (
        <nav className="navbar flex flex-row align-center justify-between">
            <div className="navbar-left">
                <Link to="/" className="logo flex-center">
                    <h1>⚾ PlayMart</h1>
                </Link>
            </div>
            {
                location && location === '/product-listing' && (
                    <div className="navbar-mid">
                        <div className="search-bar flex-center">
                            <button className="btn search"><i className="fas fa-search icon"></i></button>
                            <input id="search-bar" type="search" name="searchbar" placeholder="Search for products..." />
                        </div>
                    </div>
                )
            }
            <div className="navbar-right flex-center">
                <Link to="/login" className="btn btn-login">LogIn / SignUp</Link>
                <Link to="/wishlist" className="btn btn-link">
                    <i className="fas fa-heart icon"></i>
                    <span className="small">WishList</span>
                </Link>
                <Link to="/cart" className="btn btn-link">
                    <i className="fas fa-shopping-cart icon"></i>
                    <span className="small">Your Cart</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;