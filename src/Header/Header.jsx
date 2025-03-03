import React from 'react';
import './Header.scss';
import img from '../assets/Name=Logo, On-Dark=False, State=Desktop.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate()

  return (
    <header className="header">
      <div class="header__logo"><img src={img} alt="Oasis Logo"/></div>
      <nav className="header__nav">
        <div onClick={() => Navigate("/")} className="header__nav-item">Home</div>
        <div onClick={() => Navigate("/shop")} className="header__nav-item">Shop</div>
        <div onClick={() => Navigate("/categories")} className="header__nav-item">Categories</div>
        <div onClick={() => Navigate("/blog")} className="header__nav-item">Blog</div>
      </nav>
      <div className="header__cart">
        <div className="header__cart-icon">
          <span className="header__cart-count"></span>
          <i className="shopping-cart"></i>
        </div>
        <button className="get-started">Get Started</button>
      </div>
    </header>
  );
};

export default Header;