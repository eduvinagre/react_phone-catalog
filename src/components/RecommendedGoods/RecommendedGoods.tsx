import React, { useEffect, useRef, useState } from 'react';
import './RecommendedGoods.scss';
import { ProductCard } from '../ProductCard';

const products = [
  { id: 1, category: 'Smartphones', itemId: '1', name: 'Apple iPhone 11 Pro Max', price: 849, fullPrice: 1199, screen: '6.5" OLED', capacity: '512 GB', ram: '4 GB', image: '/path/to/image1.png', color: 'Space Gray', year: 2019 },
  { id: 2, category: 'Smartphones', itemId: '2', name: 'Apple iPhone 11 Pro Max', price: 799, fullPrice: 999, screen: '6.5" OLED', capacity: '64 GB', ram: '4 GB', image: '/path/to/image2.png', color: 'Silver', year: 2019 },
  { id: 3, category: 'Smartphones', itemId: '3', name: 'Apple iPhone 11', price: 729, fullPrice: 849, screen: '6.1" IPS', capacity: '64 GB', ram: '4 GB', image: '/path/to/image3.png', color: 'Black', year: 2019 },
  { id: 4, category: 'Smartphones', itemId: '4', name: 'Apple iPhone Xs', price: 799, fullPrice: 899, screen: '5.8" OLED', capacity: '64 GB', ram: '4 GB', image: '/path/to/image4.png', color: 'Gold', year: 2018 },
];

type ProductType = {
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};

export const RecommendedGoods: React.FC = () => {
  const [data, setData] = useState<ProductType[]>(products);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/products.json')
      .then(res => res.json())
      .then(setData)
  }, []);

  if (!data || !data.length) {
    return null;
  }

  const handleLeftClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('left');

    event.preventDefault();
    if (carousel.current) {
      console.log(carousel.current.offsetWidth);
      
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
      console.log(carousel.current.scrollLeft);
    }
  }

  const handleRightClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('right');
    event.preventDefault();
    if (carousel.current) {
      console.log(carousel.current.offsetWidth);
      carousel.current.scrollLeft += carousel.current.offsetWidth;
      console.log(carousel.current.scrollLeft);
    }
  }

  return (
    <div className="product-list">
      <div className="container">
        <div className="recommended-goods__content">
          <div className="carousel__top-part">
            <h1 className="carousel__top-part__title title">You may also like</h1>

            <div className="carousel__top-part-buttons buttons">
              <button
                className='buttons__button-left button-left button'
                onClick={handleLeftClick}
              >
                <img src="../../../public/img/icons/slider-button-default-right.svg" alt="scroll left" />
              </button>
              <button
                className='buttons__button-right button-right button'
                onClick={handleRightClick}
              >
                <img src="../../../public/img/icons/slider-button-default-right.svg" />
              </button>
            </div>
          </div>


          <div ref={carousel} className="carousel">
            {data.map(item => (
              <ProductCard
                carousel={carousel}
                key={item.id}
                name={item.name}
                price={item.price}
                oldPrice={item.fullPrice}
                screen={item.screen}
                capacity={item.capacity}
                ram={item.ram}
                imgSrc={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

