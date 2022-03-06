import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------


function GalleryGrid(props) {
  const matches = useMediaQuery('(min-width:600px)');
  const gridSize = [12/props.col];
  let myHeight;
  if(props.trueSize == true){
    myHeight = '100%'
  }else{
    myHeight = [100/props.col + 'vw']
  }


  const useStyles = makeStyles(()=>({
    item:{
    objectFit: 'cover',
    width:'100%',
    height: myHeight,
      '@media (max-width: 600px)' : {
      height: '100%'}
    }
  }));

  const classes = useStyles();
  return (
    <div className="section-wrapper constrained">

    <Grid container spacing={props.spacing}>
       {  
        props.imagePool.map((item,i) => 
          <Grid item xs={12} sm={gridSize * item.size} key={i}>
            <div className="gallery-grid-item">
            <img
              className={classes.item}
              src={item.url}
              alt={["slide no."+i]}
            />
          </div>
          </Grid>
        )
       }
    </Grid>
    </div>
  );
}

// ReactDOM.render(<Gallery />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default GalleryGrid;
