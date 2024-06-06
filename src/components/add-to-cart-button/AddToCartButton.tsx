import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

export const AddToCartButton: React.FC = () => {
  const { dispatch } = useCart();
  const [buttonText, setButtonText] = useState('Add to Cart');

  const handleClick = () => {
    dispatch({ type: 'ADD_TO_CART' });
    setButtonText('Added to Cart');
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};
