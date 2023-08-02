import React from 'react';
import { checkout } from '../checkout.js';

const Button = ({ children }) => {
  const buttonStyles = {
    padding: '50px 1px 40px',
    fontSize: '40px',
    border: 'none',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #8B5CF6, #8B5CF6)',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  };

  const handleButtonClick = async () => {
    try {
      await checkout({
        lineItems: [
          {
            price: 'price_1NZDu9SDYOJV6IKy4Hyw05x6',
            quantity: 1,
          },
        ],
      });
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <button type="button" style={buttonStyles} onClick={handleButtonClick}>
      {children}
    </button>
  );
};

export default Button;
