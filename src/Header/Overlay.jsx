import React from 'react';
import './Overlay.scss'; // Create a separate CSS file for styles

const Overlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="overlay" onClick={onClose}>
      {/* Clicking on the overlay will close the cart */}
    </div>
  );
};

export default Overlay;