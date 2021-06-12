import * as React from 'react';
import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/about"></Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
}

export default Layout;