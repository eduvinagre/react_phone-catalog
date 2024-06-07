import { Outlet } from 'react-router-dom';
import './default.layout.scss';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
// import { Navbar } from '../components/Navbar'; COMPONENT SUGGESTION

export const DefaultLayout = () => {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
