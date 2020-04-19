import React from 'react';
import {
  Link
} from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <div className="section-wrapper">
          {/* <div className="siteName"><Link to="/">Hannah Hanqing Sun</Link></div> */}
          <div className="siteLogo"><Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 260"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="150 70 150 110 110 110 110 70 70 70 70 190 110 190 110 150 150 150 150 190 190 190 190 70 150 70"/><path d="M260,260H0V0H260ZM8.83,251.17H251.17V8.83H8.83Z"/></g></g></svg>
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
