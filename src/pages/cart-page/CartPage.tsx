import { BackButton } from '../../components/back-button/BackButton';
import './CartPage.scss';

export const CartPage = () => {
  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-page__content">
          <BackButton />

          <h1 className="cart-page__title title">Cart</h1>

          <div className="cart-page__wrapper-elements">
            <ul className="cart-page__list list">
              <li className="cart-page__list-item list-item"></li>
              <li className="cart-page__list-item list-item"></li>
              <li className="cart-page__list-item list-item"></li>
            </ul>

            <div className="cart-page__checkout"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
