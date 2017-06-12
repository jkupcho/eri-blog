import React from 'react'
import { Link } from 'react-router'
import Header from '../images/header.jpg'
import '../css/nav.scss'

export default () => {
  return (
    <nav className="nav has-shadow">
      <div className="container">
        <div className="nav-left nav-img">
          <Link to="/" className="nav-item">
            <img src={Header} alt="Enhanced Interiors Remodeling" />
          </Link>
        </div>
        <div className="nav-right nav-menu">
          <Link to="/" className="nav-item is-tab">Home</Link>
        </div>
        <span className="nav-toggle">
          <span></span>
        </span>
      </div>
    </nav>
  );
}