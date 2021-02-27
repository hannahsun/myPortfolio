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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 636.6 50"><defs></defs>
                  <path class="st0" d="M43.4,1.3h16.4v47.3H43.4V31.9h-27v16.8H0V1.3h16.4v16.8h27V1.3z M116,48.7l-3.9-8.3h-26l-3.9,8.3H64.8L87.4,1.3h23.4
	l22.7,47.3H116z M91.7,28.5h15l-7.5-15.9L91.7,28.5z M185.3,1.3h16.4v47.3h-24.3l-22.5-31.3v31.3h-16.4V1.3h24.3l22.5,31.3V1.3z
	 M256.1,1.3h16.4v47.3h-24.3l-22.5-31.3v31.3h-16.4V1.3h24.3l22.5,31.3V1.3z M328.7,48.7l-3.9-8.3h-26l-3.9,8.3h-17.5l22.7-47.3
	h23.4l22.7,47.3H328.7z M304.4,28.5h15l-7.5-15.9L304.4,28.5z M394.6,1.3H411v47.3h-16.4V31.9h-27v16.8h-16.4V1.3h16.4v16.8h27V1.3z
	 M461.3,33.1c0,2.9,3.2,5.1,13,5.1c10.1,0,11.6-1.4,11.6-3.4c0-2.6-1.5-3-13.6-3.9c-18.8-1.4-27.4-5.6-27.4-16.1
	C444.9,5,455.4,0,471.6,0c18.6,0,28.7,5.7,29.4,16.1h-17.1c0-3.1-3.9-4.3-12.3-4.3c-8,0-9.7,1.2-9.7,2.9c0,2,1.6,2.8,13,3.8
	C491.7,20,503,21.4,503,34.1c0,12-10.5,15.9-28.1,15.9c-19,0-30-4.5-30.7-16.9H461.3z M566.4,25.6c0,16-8.7,24.4-28.9,24.4
	c-20.3,0-28.9-8.4-28.9-24.4V1.3H525v23.6c0,5.6,2.4,11.2,12.5,11.2S550,30.4,550,24.9V1.3h16.4V25.6z M620.1,1.3h16.4v47.3h-24.3
	l-22.5-31.3v31.3h-16.4V1.3h24.3l22.5,31.3V1.3z"/></svg>

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
