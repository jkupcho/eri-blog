import React from 'react'
import { Link } from 'react-router'
import Header from '../images/header.jpg'
import '../css/nav.scss'

export default () => {
  return (
    <nav className="navbar shadow">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img className="navbar-img" src={Header} alt="Enhanced Interiors Remodeling" />
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/work/" className="navbar-item">Work</Link>
        </div>
      </div>
      <div className="navbar-burger">
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
