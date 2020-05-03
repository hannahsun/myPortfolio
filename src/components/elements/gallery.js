import React, { useState } from 'react';

//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------


function Gallery(props) {
  
  // console.log(props.imagePool);

  const paddedSection=(e)=>{
      if(e == true){
          return 'padded-wrapper'
      }else{
        return 'nopadding'
      }
  }
  // console.log(props.isPadded)
  const paddingStyle = paddedSection(props.isPadded);

  return (
    <div className={paddingStyle}>
       {
         props.imagePool.map((item,i) => (
            <div className="gallery-item" key={['galleryItem-'+i]}>
            <img
              className="d-block"
              src={item.url}
              alt={["slide no."+i]}
            />
          </div>
         ))
       }
    </div>
  );
}

// ReactDOM.render(<Gallery />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default Gallery;
