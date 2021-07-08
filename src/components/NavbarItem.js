import React from 'react';
import { Link } from 'gatsby';

const NavbarItem = (props) => {
    return (
        <Link to={props.route} className="navbar-item has-text-grey-lighter">{ props.name }</Link>
    );
}

export default NavbarItem;