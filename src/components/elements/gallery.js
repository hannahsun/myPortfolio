import React, { useState } from 'react';

//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------


function Gallery(props) {
  
  console.log(props.imagePool);

  return (
    <div className="gallery">
       {
         props.imagePool.map((i) => 
            <div className="gallery-item">
            <img
              className="d-block"
              src={i.url}
              alt={["slide no."+i]}
            />
          </div>
         )
       }
    </div>
  );
}

// ReactDOM.render(<Gallery />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default Gallery;
