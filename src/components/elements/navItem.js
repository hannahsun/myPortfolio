import React from 'react';
import {Link} from 'react-router-dom';

const NavItem = props => (
    <ul className="menu">
              <li className="menu-item"><Link to="/">Motion Design</Link></li>
              <li className="menu-item"><Link to="/graphic">Graphic Design</Link></li>
              <li className="menu-item">
                  <Link to="/about">About</Link>
              </li>
     </ul>
);

export default NavItem;