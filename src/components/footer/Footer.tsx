import './footer.scss';
import logo from '../../../public/img/svg/logo.svg';
import chevronUp from '../../../public/img/svg/chevron-up.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo footer__logo">
        <img className="logo__img" src={logo} alt="logo" />
      </div>

      <div className="actions footer__actions">
        <a className="actions__github" href="#">
          github
        </a>

        <a className="actions__contacts" href="#">
          contacts
        </a>

        <a className="actions__rigths" href="#">
          rigths
        </a>
      </div>

      <div className="top-button footer__top-button">
        <p className="top-button__text">Back to top</p>

        <div className="top-button__button">
          <img className="top-button__icon" src={chevronUp} alt="Back to top" />
        </div>
      </div>
    </footer>
  );
};
