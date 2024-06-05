import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="header__logo">
              <img
                src="./img/logo.svg"
                alt="logo"
              />
            </Link>

            <nav className="nav header__nav">
              <ul className="nav__list">
                {['Home', 'Phones', 'Tablets', 'Accessories'].map(page => (
                  <li key={page} className="nav__item">
                    <Link
                      to={`/${page.toLowerCase()}`}
                      className={`nav__link ${selected === page ? 'is-active' : ''}`}
                      onClick={() => handleNavClick(page)}
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__right-part right-part">
            <div className="right-part__item-box">
              <Link to="/" className="right-part__icon right-part__icon--favorite"></Link>
            </div>

            <div className="right-part__item-box">
              <Link to="/" className="right-part__icon right-part__icon--cart"></Link>
            </div>

            <div className="right-part__item-box">
              <Link to="/" className="right-part__icon right-part__icon--menu-burger"></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
