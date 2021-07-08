import React, { useState } from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const [isActive, setClass] = useState(false);

  function toggleClass() {
    setClass(!isActive);
  }

  return (
    <nav className="navbar has-background-black-ter is-dark" role="navigation" aria-label="main navigation">
      <NavbarBrand isActive={isActive} toggleClass={toggleClass}/>
      <NavbarMenu isActive={isActive} />
    </nav>
  )
}

export default Navbar;