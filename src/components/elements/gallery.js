import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

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

  const galleryStyle={
    backgroundColor: props.backgroundColor,
  }

  return (
    <div className={paddingStyle}>
    <Grid container spacing={props.spacing}>
       {
         props.imagePool.map((item,i) => (
          <Grid item xs={12}  key={['galleryItem-'+i]}>
            <div style={galleryStyle} >
            <img
              className="d-block"
              src={item.url}
              alt={["slide no."+i]}
            />
            </div>
          </Grid>
         ))
       }
    </Grid>
    </div>
  );
}

// ReactDOM.render(<Gallery />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default Gallery;
