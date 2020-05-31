import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL_HOME, URL_DIAGRAMA } from './types';


const NavBarLayout = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" id="bpm-navbar-layout">
    <NavLink className="navbar-brand" to={URL_HOME}>BPMApp</NavLink>
    <button className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to={URL_HOME}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={URL_DIAGRAMA}>New Diagram</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBarLayout;