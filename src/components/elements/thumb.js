import React from 'react';
import {
  Link
} from 'react-router-dom';


//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------
function Thumb(props) {
  return (
    <div className={"thumb" + " " + props.size}>
      <Link to={props.link}>
           <div className="thumb-image" data-title={props.title} style={{backgroundImage: 'url("' + props.image + '")'}}>
                {/* <img className="viewmore" src={viewmore}></img> */}
                
                <div className="thumb-overlay"></div>
                <div className="thumb-info-wrapper">
                      <div className="thumb-title">
                          {props.title}
                          <div className="thumb-category">{props.category}</div>
                          <div className="thumb-viewmore">view more →</div>
                      </div>
                  </div>
           </div>
           
           
      </Link>
    </div>
  );
}

//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default Thumb;
