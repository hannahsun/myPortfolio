import React from 'react';
import Grid from '@material-ui/core/Grid';

function Insert(props) {
  let myStyle;
  if (props.padding == ''){
      myStyle={
        // backgroundColor:'red',
        paddingTop: "120px",
        paddingBottom: "120px"
      }
  }else{
    myStyle={
      // backgroundColor:'red',
      paddingTop: props.padding,
      paddingBottom: props.padding
    }
  }

  return (
    <div className="section-wrapper" style={myStyle}>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </Grid>
        <Grid item xs={12} sm={8}>
            {props.description} 
        </Grid>
    </Grid>
    </div>
  );
}

export default Insert;
