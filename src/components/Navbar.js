import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav className="navbar has-background-black-ter is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>

            <a href="/#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
  )
}

export default Navbar;