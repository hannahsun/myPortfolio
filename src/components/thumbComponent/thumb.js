import React from 'react';
import {
  Link
} from 'react-router-dom';

function Thumb(props) {
  return (
    <div className={"thumb" + " " + props.size}>
      <Link to={props.link}>
           <div className="project-image" data-title={props.title} style={{backgroundImage: 'url("' + props.image + '")'}}></div>
            {/* <div className="project-title">{props.title}</div> */}
      </Link>
    </div>
  );
}

export default Thumb;
