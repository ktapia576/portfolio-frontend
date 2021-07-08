import React from 'react';
import NavbarItem from './NavbarItem';

const NavbarMenu = (props) => {
    return (
        <div className={`navbar-menu has-background-black-ter ${props.isActive ? 'is-active': ''}`}>
        <div className="navbar-start">
            <NavbarItem route="/projects" name="Projects"/>
            <NavbarItem route="/contact" name="Contact"/>
        </div>
      </div>  
    );
}

export default NavbarMenu;