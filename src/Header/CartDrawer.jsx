// CartDrawer.js
import React from 'react';
import './CartDrawer.scss';
import img from '../assets/Product - Cart.png';
import img1 from '../assets/Product - Cart (1).png';

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <button className="cart-drawer__close" onClick={onClose}>Close</button>
      <h2>Your Cart</h2>
      {/* Add cart items here */}
      <div className="cart-drawer__items">
        {/* Example item */}
        <div className="cart-drawer__item"><img src={img} alt="Product 1" /></div>
        <div className="cart-drawer__item"><img src={img1} alt="Product 2" /></div>
      </div>
      <button className="cart-drawer__checkout">Checkout</button>
    </div>
  );
};

export default CartDrawer;