import React, { useState } from 'react';
import './Header.scss';
import img from '../assets/Name=Logo, On-Dark=False, State=Desktop.png';
import { useNavigate } from "react-router-dom";
import ScrollToTop from 'react-scroll-to-top';
import CartDrawer from './CartDrawer'; // Import the CartDrawer component
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon
import Overlay from './Overlay';

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const Navigate = useNavigate();

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <>
      <ScrollToTop smooth />
      <header className="header">
        <div className="header__logo"><img src={img} alt="Oasis Logo" /></div>
        <nav className="header__nav">
          <div onClick={() => Navigate("/")} className="header__nav-item">Home</div>
          <div onClick={() => Navigate("/shop")} className="header__nav-item">Shop</div>
          <div onClick={() => Navigate("/categories")} className="header__nav-item">Categories</div>
          <div onClick={() => Navigate("/blog")} className="header__nav-item">Blog</div>
        </nav>
        <div className="header__cart">
          <div className="header__cart-icon" onClick={toggleCart}>
            <span className="header__cart-count"></span>
            <FaShoppingCart size={25} color="black" /> 
          </div>
          <button className="get-started">Get Started</button>
        </div>
      </header>
      <Overlay isOpen={isCartOpen} onClose={toggleCart} />
      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} /> 
    </>
  );
};

export default Header;