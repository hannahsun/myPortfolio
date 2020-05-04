import React from 'react';
import {
  Link
} from 'react-router-dom';

// import mylogo from '../../assets/icon/icon-logo-outline-white.svg';

function Navigation() {
  return (
    <header>
      <div className="section-wrapper">
          {/* <div className="siteName"><Link to="/">Hannah Hanqing Sun</Link></div> */}
          <div className="siteLogo"><Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.92 218.92"><defs></defs><path class="st0" d="M174,174h-49v-40H94v40H45V45h49v40h31V45h49V174z M134,165h31V54h-31v40H85V54H54v111h31v-40h49V165zM218.9,218.9H0V0h218.9V218.9z M7.4,211.5h204.1V7.4H7.4V211.5z"/>
            </svg>
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
