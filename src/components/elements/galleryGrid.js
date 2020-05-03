import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------


function GalleryGrid(props) {
  const matches = useMediaQuery('(min-width:600px)');
  const gridSize = [12/props.col];

  const useStyles = makeStyles(()=>({
    item:{
    objectFit: 'cover',
    width:'100%',
    /*input- number of columns*/
    height: [100/props.col + 'vw'],
    '@media (max-width: 600px)' : {
      height: '100%'
    }
    }
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={1}>
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
  );
}

// ReactDOM.render(<Gallery />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default GalleryGrid;
