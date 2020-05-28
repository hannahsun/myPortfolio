import React, {useState} from 'react';
import '../../style/navToggleBtn.css'
import NavItem from './navItem.js'


function NavToggle() {
  
    const [isActive, setActive] = useState(false);
    const toggleActive = () =>{setActive(!isActive)}

    let MobileNav; 

    if(isActive){
        MobileNav = 
        <div className="nav-mobile active"> <NavItem /> </div>;
    }
    else{
        MobileNav = <div className="nav-mobile"> <NavItem /> </div>;
    }
  
    return (
    <React.Fragment>
        <div 
        className={[isActive, "navToggleBtn"].join(" ")} 
        onClick={()=>{toggleActive()}}>
            <div className="navToggleBtn_e"></div>
            <div className="navToggleBtn_e"></div>
        </div>

        {MobileNav}
    
    </React.Fragment>

);
}

export default NavToggle;