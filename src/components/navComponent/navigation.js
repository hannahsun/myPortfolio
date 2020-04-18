import React from 'react';
// import {
//   Link
// } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <div className="section-wrapper">
          <div className="siteName">Hannah Hanqing Sun</div>
          <nav>
          <ul className="menu">
              <li className="menu-item"><a href="/">Motion Graphics</a></li>
              <li className="menu-item"><a href="/graphicdesign">Graphic Design</a></li>
              <li className="menu-item">
                  <a href="/about">About</a>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
