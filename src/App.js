import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Utilities/Navbar';
import Footer from './Components/Utilities/Footer';
import Home from './Components/Pages/Home';
import ProductListing from './Components/Pages/ProductListing';
import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import WishList from './Components/Pages/WishList';
import Cart from './Components/Pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [ searchQuery, setSearchQuery ] = useState('');

  const getSearchQuery = (recievedQuery) => {
    setSearchQuery(recievedQuery);
  }
  return (
    <Router>
      <Navbar getSearchQuery={getSearchQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;