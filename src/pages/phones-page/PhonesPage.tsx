import './PhonesPage.scss';
import Card from '../../components/card/Card';
import { BreadCrumbs } from '../../components/bread-crumbs/BreadCrumbs';
import { Modal } from '../../components/modal/Modal';
import { Product } from '../../types/Product';

const product: Product = {
  id: 'string',
  category: 'string',
  phoneId: 'string',
  itemId: 'string',
  name: 'string',
  fullPrice: 1,
  price: 1,
  screen: 'string',
  capacity: 'string',
  color: 'string',
  ram: 'string',
  year: 1,
  image: 'string',
};

const PhonesPage = () => {
  return (
    <>
      <Modal />
      <div className="products__container products container">
        <BreadCrumbs />
        <h1 className="products__title">Mobile phones</h1>
        <p className="products__quantity">
          <span className="products__quantityText">97 models</span>
        </p>

        <div className="products__filter filter">
          <div className="filter_sortBy sortBy">
            <p className="sortBy__legend">Sort by</p>
            <div className="sortBy__select"></div>
          </div>

          <div className="sortBy">
            <p className="sortBy__legend">Items on page</p>

            <div className="perPage__select">
              <div className="perPage__options-wrapper">
                <div className="perPage__option"></div>
              </div>
            </div>
          </div>
        </div>

        <ul className="products__list">
          <Card product={product} />
          <Card product={product} />
          <Card product={product} />
          <Card product={product} />
          <Card product={product} />
          <Card product={product} />
          <Card product={product} />
          <Card product={product} />
        </ul>
      </div>
    </>
  );
};

export default PhonesPage;
