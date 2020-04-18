import React from 'react';
import {
  Link
} from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <div className="section-wrapper">
          <div className="siteName"><Link to="/">Hannah Hanqing Sun</Link></div>
          <nav>
          <ul className="menu">
              <li className="menu-item"><Link to="/">Motion Graphics</Link></li>
              <li className="menu-item"><Link to="/graphic">Graphic Design</Link></li>
              <li className="menu-item">
                  <Link to="/Linkbout">About</Link>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
