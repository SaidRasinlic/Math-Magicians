import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header id="header">
      <h1 className="title">
        Math Magicians
      </h1>
      <nav className="nav">
        <ul className="nav-items">
          <li><NavLink to="/" className={(navData) => (navData.isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/calculator" className={(navData) => (navData.isActive ? 'active' : '')}>Calculator</NavLink></li>
          <li><NavLink to="/quote" className={(navData) => (navData.isActive ? 'active' : '')}>Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
