import React from 'react'
import { Link } from 'react-router'
import Header from '../images/header.jpg'
import '../css/nav.scss'
import BBBLogo from '../images/bbb.png'

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navActive: ''
    }
  }

  closeMenu() {
    this.setState({
      navActive: ''
    })
  }

  handleMenuOpen() {
    if (this.state.navActive === '') {
      this.setState({
        navActive: 'is-active'
      });
    } else {
      this.setState({
        navActive: ''
      });
    }
  }

  render() {
    return (
      <nav className="navbar shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img className="navbar-img" src={Header} alt="Enhanced Interiors Remodeling" />
          </Link>
          <button className={`button navbar-burger ${this.state.navActive}`} onClick={this.handleMenuOpen.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-menu ${this.state.navActive}`}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item" onClick={this.closeMenu.bind(this)}>Home</Link>
            <Link to="/work/" className="navbar-item" onClick={this.closeMenu.bind(this)}>Work</Link>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://www.facebook.com/EnhancedInteriors?rf=158452444189685">
              <span className="icon">
                <i className="fa fa-facebook-official"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.bbb.org/minnesota/business-reviews/construction-and-remodeling-services/enhanced-interiors-remodeling-llc-in-shoreview-mn-44002924">
              <img style={{ position: 'relative', top: '12px' }} src={BBBLogo} alt="" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

