import React from 'react';
import {
  Link
} from 'react-router-dom';


//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------
function Image(props) {
  return (
      <div className="imageContainer" data-title={props.title} 
        // style={ {backgroundImage: 'url("' + props.image + '")'}} 
        >
          <img src={props.image} />
      </div>
               
  );
}

//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default Image;
