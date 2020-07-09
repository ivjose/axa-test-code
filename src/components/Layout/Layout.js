import React from 'react';
import { NavLink } from 'react-router-dom';

import './Layout.styles.css';

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Registration',
      path: '/registration',
    },
    {
      name: 'Enter Token',
      path: '/enter-token',
    },
    {
      name: 'Upload Resume',
      path: '/upload-resume',
    },
    {
      name: 'Request Schedule',
      path: '/request-schedule',
    },
  ];

  return (
    <div className="layout">
      <header className="header">
        <ul className="nav">
          {navLinks.map((item) => (
            <li key={item.name} className="nav-item">
              <NavLink exact activeClassName="selected" to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      {children}
    </div>
  );
};

export default Layout;
