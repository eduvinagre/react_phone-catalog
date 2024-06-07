import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { Product } from '../../types/Product';
import './ActionButtons.scss';

type Props = {
  product: Product;
};

export const ActionButtons: React.FC<Props> = ({ product }) => {
  const { addToFavorites, removeFromFavorites, favorites, cart, addToCart, removeFromCart } =
    useAppContext();
  const [isFavourited, setIsFavourited] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsFavourited(favorites.some(favProduct => favProduct.id === product.id));
    setIsInCart(cart.some(cartItem => cartItem.product.id === product.id));
  }, []);

  const handleFavoriteClick = () => {
    if (isFavourited) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleCartClick = () => {
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="actions-button">
      <button
        className={`actions-button__add-to-cart ${isInCart ? 'actions-button__add-to-cart--active' : ''}`}
        onClick={handleCartClick}
      >
        {isInCart ? 'Remove' : 'Add to cart'}
      </button>

      <div
        className={`actions-button__favourite ${isFavourited ? 'actions-button__favourite--filled' : ''}`}
        onClick={handleFavoriteClick}
      ></div>
    </div>
  );
};
