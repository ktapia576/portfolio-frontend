import React from 'react';
import NavbarBrandBurger from './NavbarBrandBurger';
import NavbarItem from './NavbarItem';

const NavbarBrand = (props) => {
    return (
        <div className="navbar-brand">
            <NavbarItem route="/" name="Home"/>
            <NavbarBrandBurger isActive={props.isActive} toggleClass={props.toggleClass}/>
        </div>
    );
}

export default NavbarBrand;