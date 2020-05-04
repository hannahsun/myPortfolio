import React from 'react';
import {
  Link
} from 'react-router-dom';

import mylogo from '../../assets/icon/icon-logo-outline-white.svg';

function Navigation() {
  return (
    <header>
      <div className="section-wrapper">
          {/* <div className="siteName"><Link to="/">Hannah Hanqing Sun</Link></div> */}
          <div className="siteLogo"><Link to="/">
              <img src={mylogo} />
            </Link></div>
          <nav>
          <ul className="menu">
              <li className="menu-item"><Link to="/">Motion Graphics</Link></li>
              <li className="menu-item"><Link to="/graphic">Graphic Design</Link></li>
              <li className="menu-item">
                  <Link to="/about">About</Link>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
