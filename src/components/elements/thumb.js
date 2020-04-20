import React from 'react';
import {
  Link
} from 'react-router-dom';

function Thumb(props) {
  return (
    <div className={"thumb" + " " + props.size}>
      <Link to={props.link}>
           <div className="thumb-image" data-title={props.title} style={{backgroundImage: 'url("' + props.image + '")'}}>
                {/* <img className="viewmore" src={viewmore}></img> */}
                
                <div className="thumb-overlay"></div>
                <div className="thumb-info-wrapper">
                      <div className="thumb-title">
                          <span>{props.title}</span>
                      {props.category}</div>
                  </div>
           </div>
           
           
      </Link>
    </div>
  );
}

export default Thumb;
