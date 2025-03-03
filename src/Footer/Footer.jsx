import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>OASIS</h2>
            <p>Modern & Contemporary Home Decor</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Shop</h3>
              <ul>
                <li><a href="#">All Products</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">On Sale</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Categories</h3>
              <ul>
                <li><a href="#">Furniture</a></li>
                <li><a href="#">Decor</a></li>
                <li><a href="#">Lighting</a></li>
                <li><a href="#">Kitchen</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>About</h3>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Oasis. All rights reserved.</p>
          <div className="payment-methods">
            <span>Payment Methods:</span>
            <div className="payment-icons">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;