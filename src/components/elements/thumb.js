import React from 'react';
import {
  Link
} from 'react-router-dom';

import viewmore from '../../assets/icon/icon-more-white.svg';

function Thumb(props) {
  return (
    <div className={"thumb" + " " + props.size}>
      <Link to={props.link}>
           <div className="project-image" data-title={props.title} style={{backgroundImage: 'url("' + props.image + '")'}}>
                {/* <img className="viewmore" src={viewmore}></img> */}
                
                <div className="project-overlay"></div>
                <div className="thumb-info">
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
