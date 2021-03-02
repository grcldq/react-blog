import React from 'react';

import { NavLink } from 'react-router-dom';

import './Header.css';

const header = () => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact>Home</NavLink>
          <NavLink to='/posts'>All Posts</NavLink>
          <NavLink to='/authors'>Authors</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default header;
