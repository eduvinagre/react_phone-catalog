import imgPhone from '../../../public/img/phones/apple-iphone-11-pro-max/gold/00.webp';
import closeIcon from '../../../public/img/svg/close.svg';
import minusIcon from '../../../public/img/svg/minus.svg';
import plusIcon from '../../../public/img/svg/plus.svg';
import './CartItem.scss';

export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="display cart-item__display">
        <div className="display__close">
          <img src={closeIcon} alt="icon-close" />
        </div>

        <div className="display__img">
          <img className="display__img-phone" src={imgPhone} alt="img-phone" />
        </div>

        <p className="display__name">
          Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
        </p>
      </div>

      <div className="details cart-item__details">
        <div className="quantity details__quantity">
          <div className="quantity__button quantity__button--disabled">
            <img src={minusIcon} alt="button-minus-desabled" />
          </div>

          <span className="quantity__number">1</span>

          <div className="quantity__button">
            <img src={plusIcon} alt="button-plus-default" />
          </div>
        </div>

        <h3 className="details__price">799</h3>
      </div>
    </div>
  );
};
