import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
      <Footer /> {/* Footer stays at bottom */}
    </div>
  );
};

export default Body;
