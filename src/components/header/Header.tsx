import React, { useState } from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  const [selected, setSelected] = useState('Home');

  const handleNavClick = (page: string) => {
    setSelected(page);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left-part left-part">
            <a href="#" className="header__logo">
              <img src="./img/logo.svg" alt="logo" />
            </a>

            <nav className="nav header__nav">
              <ul className="nav__list">
                {['Home', 'Phones', 'Tablets', 'Accessories'].map(page => (
                  <li key={page} className="nav__item">
                    <a
                      href="#"
                      className={`nav__link ${selected === page ? 'is-active' : ''}`}
                      onClick={() => handleNavClick(page)}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__right-part right-part">
            <div className="right-part__item-box">
              <a href="#" className="right-part__icon right-part__icon--favorite"></a>
            </div>

            <div className="right-part__item-box">
              <a href="#" className="right-part__icon right-part__icon--cart"></a>
            </div>

            <div className="right-part__item-box">
              <a href="#" className="right-part__icon right-part__icon--menu-burger"></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
