import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Product } from '../../types/Product';
import './Buttons.scss';

type Props = {
  product: Product;
};

export const ActionButtons: React.FC<Props> = ({ product }) => {
  const { addToFavorites, removeFromFavorites, favorites, cart, addToCart, removeFromCart } =
    useAppContext();

  const isFavorite = favorites.some(favProduct => favProduct.id === product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const isProductInCart = cart.some(cartItem => cartItem.product.id === product.id);

  const handleCartClick = () => {
    if (isProductInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };
//precisa colocar as classes corretamente e colocar a origem da imagem do botão favorito
  return (
    <div className={buttons}>
      <button className={buttonCard} onClick={handleCartClick}>
        <p className={buttonText}>{isProductInCart ? 'Remove' : 'Add to cart'}</p>
      </button>
      <button className={buttonFavorite} onClick={handleFavoriteClick}>
        <img className={?????} src={??????} alt="favorite" />
      </button>
    </div>
  );
};
