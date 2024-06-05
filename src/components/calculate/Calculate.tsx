import '../../assets/scss/components/calculate.scss';

const Calculate = () => {
  return (
    <div className="calculate">
      <div className="calculate__infos">
        <h3 className="calculate__price">
          $2657
        </h3>

        <p className="calculate__description">
          Total for 3 items
        </p>
      </div>

      <div className="calculate__line"></div>

      <button type="button" className="calculate__button-checkout">
        Checkout
      </button>
    </div>
  );
}

export default Calculate;