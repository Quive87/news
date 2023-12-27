import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  const getPageName = () => {
    switch (path) {
      case '/docx':
        return 'Docx';
      case '/legal':
        return 'LegalAI';
      case '/modin1':
        return 'News';
      default:
        return 'Home';
    }
  };
  return (
<nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-transparent shadow-md bg-opacity-30 text-gray-300 border-b border-gray-700 z-10">
  <div className="flex items-center">
    <img src="https://quive87.github.io/gg/pro/adawhite.png" alt="Logo" className="w-auto h-10 md:w-25 md:h-14 mr-4" />
    <span className="font-bold text-lg md:text-xl">{getPageName()}</span>
  </div>
  <ul className="hidden lg:flex space-x-4">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/docx">Docx</Link></li>
    <li><Link to="/legal">LegalAI</Link></li>
  </ul>
  <button
    className="bg-gray-800 text-gray-100 hover:bg-gray-700 px-3 py-1 rounded-full md:px-4 md:py-2"
  >
    Search
  </button>
</nav>

  );
};

export default Navigation;
