import React from 'react';
import '../Styles/Navbar.css';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useWishList } from '../Providers/WishListProvider';
import { useCart } from '../Providers/CartProvider';
import { useAuth } from '../Providers/AuthProvider';
import { removeAuth } from './localStorage';
import { LogOutSuccess } from './toasts';

const Navbar = ({ getSearchQuery }) => {
  const location = useLocation().pathname;
  const { wishList } = useWishList();
  const { cart } = useCart();
  const {
    authState: { userLoggedIn },
    dispatchAuth,
  } = useAuth();

  const changeSearchQuery = (e) => {
    getSearchQuery(e.target.value);
  };

  const logoutUser = (e) => {
    if (e.target.name === 'Logout') {
      removeAuth();
      dispatchAuth({
        type: 'LOGGED_OUT',
      });
      LogOutSuccess();
      return <Navigate to='/login' />;
    }
  };

  return (
    <nav className='navbar flex flex-row align-center justify-between'>
      <div className='navbar-left'>
        <Link to='/' className='logo flex-center'>
          <h1>⚾ PlayMart</h1>
        </Link>
      </div>
      {location && location === '/product-listing' && (
        <div className='navbar-mid'>
          <div className='search-bar flex-center'>
            <button className='btn search'>
              <i className='fas fa-search icon'></i>
            </button>
            <input
              id='search-bar'
              type='search'
              name='searchbar'
              placeholder='Search for products...'
              onChange={changeSearchQuery}
            />
          </div>
        </div>
      )}
      <div className='navbar-right flex-center'>
        <Link
          to='/login'
          className='btn btn-login'
          name={userLoggedIn ? 'Logout' : 'LogIn / SignUp'}
          onClick={logoutUser}
        >
          {userLoggedIn ? 'Logout' : 'LogIn / SignUp'}
        </Link>
        <Link to='/wishlist' className='btn btn-link'>
          <i className='fas fa-heart icon'></i>
          <span className='small'>My WishList</span>
          {wishList.wishes.length > 0 ? (
            <span className='badge small'>{wishList.wishes.length}</span>
          ) : (
            ''
          )}
        </Link>
        <Link to='/cart' className='btn btn-link'>
          <i className='fas fa-shopping-cart icon'></i>
          <span className='small'>My Cart</span>
          {cart.cart.length > 0 ? (
            <span className='badge small'>{cart.cart.length}</span>
          ) : (
            ''
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
