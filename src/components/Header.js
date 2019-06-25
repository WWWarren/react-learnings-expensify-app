import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="isActive">Add</NavLink>
  </header>
)

export default Header;
