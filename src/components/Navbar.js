import React, { useState } from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  const [isActive, setClass] = useState(false);

  function toggleClass() {
    setClass(!isActive);
  }

  return (
    <nav className="navbar has-background-black-ter is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <Link to="/" className="navbar-item">Home</Link>

          <a href="/#" role="button" className={`navbar-burger ${isActive ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleClass}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
      </div>
      <div className={`navbar-menu has-background-black-ter ${isActive ? 'is-active': ''}`}>
        <div className="navbar-start">
          <div className="navbar-item has-text-grey-lighter">
            Home
          </div>

          <div className="navbar-item has-text-grey-lighter">
            Documentation
          </div>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar;