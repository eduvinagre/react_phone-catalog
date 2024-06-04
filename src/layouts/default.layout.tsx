import { Outlet } from 'react-router-dom';

import '../App.css';
import { Header } from '../components/header';
// import { Navbar } from '../components/Navbar'; COMPONENT SUGGESTION

export const DefaultLayout = () => {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Header />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
