import React from 'react';
import { Link } from 'gatsby';

const NavbarBrand = (props) => {
    return (
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">Home</Link>

            <button className={`navbar-burger ${props.isActive ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={props.toggleClass}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default NavbarBrand;