import React from 'react';

const NavbarBrandBurger = (props) => {
    return (
        <button className={`navbar-burger ${props.isActive ? 'is-active': ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={props.toggleClass}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    );
}

export default NavbarBrandBurger;