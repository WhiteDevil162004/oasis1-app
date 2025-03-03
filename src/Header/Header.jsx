import React, { useState } from 'react';
import { ShoppingBag, Search, User, Heart, Menu, ChevronDown, X } from 'lucide-react';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="header">
      <div className="header-announcement">
        <div className="container">
          <p>Free shipping on all orders over $50</p>
        </div>
      </div>
      
      <div className="container">
        <div className="header-main">
          {/* Mobile menu button */}
          <button className="header-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo */}
          <div className="header-logo">
            <a href="/">OASIS</a>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="header-nav">
            <ul>
              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Home
                </a>
              </li>
              <li className="header-nav-item has-dropdown">
                <a href="#" className="header-nav-link">
                  Shop <ChevronDown size={16} />
                </a>
                <div className="dropdown-menu">
                  <ul>
                    <li><a href="#">All Products</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Best Sellers</a></li>
                    <li><a href="#">On Sale</a></li>
                  </ul>
                </div>
              </li>
              <li className="header-nav-item has-dropdown">
                <a href="#" className="header-nav-link">
                  Categories <ChevronDown size={16} />
                </a>
                <div className="dropdown-menu">
                  <ul>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Decor</a></li>
                    <li><a href="#">Lighting</a></li>
                    <li><a href="#">Kitchen</a></li>
                  </ul>
                </div>
              </li>
              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  About
                </a>
              </li>
              <li className="header-nav-item">
                <a href="#" className="header-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Actions */}
          <div className="header-actions">
            <button className="header-action-btn" onClick={toggleSearch}>
              <Search size={20} />
            </button>
            <a href="/account" className="header-action-btn">
              <User size={20} />
            </a>
            <a href="/wishlist" className="header-action-btn">
              <Heart size={20} />
            </a>
            <a href="/cart" className="header-action-btn cart">
              <ShoppingBag size={20} />
              <span className="cart-count">3</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="container">
          <ul className="mobile-nav-menu">
            <li><a href="#">Home</a></li>
            <li className="has-submenu">
              <div className="submenu-toggle">
                <span>Shop</span>
                <ChevronDown size={16} />
              </div>
              <ul className="submenu">
                <li><a href="#">All Products</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">On Sale</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <div className="submenu-toggle">
                <span>Categories</span>
                <ChevronDown size={16} />
              </div>
              <ul className="submenu">
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Decor</a></li>
                <li><a href="#">Lighting</a></li>
                <li><a href="#">Kitchen</a></li>
              </ul>
            </li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      
      {/* Search Overlay */}
      <div className={`search-overlay ${searchOpen ? 'open' : ''}`}>
        <div className="container">
          <div className="search-header">
            <h3>Search</h3>
            <button onClick={toggleSearch}>
              <X size={24} />
            </button>
          </div>
          <div className="search-form">
            <input type="text" placeholder="Search for products..." />
            <button>
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;