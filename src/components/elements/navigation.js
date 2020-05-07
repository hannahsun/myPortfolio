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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218.9 218.9" ><defs></defs>
                  <path d="M174,174h-49v-40H94v40H45V45h49v40h31V45h49V174z M134,165h31V54h-31v40H85V54H54v111h31v-40h49V165zM218.9,218.9H0V0h218.9V218.9z M7.4,211.5h204.1V7.4H7.4V211.5z"/>
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
