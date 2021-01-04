import React , {useState} from 'react';
import {
  Link
} from 'react-router-dom';
import NavToggle from './navToggle.js'
import NavItem from './navItem.js'

function Navigation() {
  
  return (
    <header>
      <div className="section-wrapper">

          <nav>
          {/* site logo */}
          <div className="siteLogo"><Link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 45" ><defs></defs>
                  <path class="st0" d="M10.7,37.7H4.3l9.4-25.9h6.4L10.7,37.7z M45.6,11.8h-6.4l-9.4,25.9h6.4L45.6,11.8z M29.2,21.9l3.7-10.1h-6.4
	l-3.7,10.1H29.2z M27.2,27.3h-6.4l-3.8,10.4h6.4L27.2,27.3z"/>
                  </svg>
            </Link></div>

          {/* menu list */}
          <div className="nav-web"><NavItem/></div>

          <div className="spacer" style={{flex:1}}/>

          
           <NavToggle />
  

        </nav>
      </div>
    </header>
  );
}

export default Navigation;
