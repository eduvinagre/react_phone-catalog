import './BreadCrumbs.scss';

const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs">
        <a href="#" className="breadcrumbs__item">
          <img
            src="img/icons/Home.png"
            alt=""
            className="breadcrumbs__icon--home"
          />
        </a>

        <img
          src="img/icons/crumbs_arrow.svg"
          alt="home icon"
          className="breadcrumbs__icon"
        />

        <a href="#" className="breadcrumbs__title">
          Phones
        </a>

    </div>
  );
}

export default BreadCrumbs;