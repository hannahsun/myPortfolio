import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavItem = props => (
    <ul className="menu">
              <li className="menu-item"><NavLink to="/" exact activeClassName="nav--active" >
                  Motion Design</NavLink></li>
              <li className="menu-item"><NavLink to="/graphic" activeClassName="nav--active">
                  Graphic Design</NavLink></li>
              <li className="menu-item">
                  <NavLink to="/play" activeClassName="nav--active">
                  Play</NavLink></li>
              <li className="menu-item">
                  <NavLink to="/about" activeClassName="nav--active">
                  About</NavLink></li>
     </ul>
);

export default NavItem;