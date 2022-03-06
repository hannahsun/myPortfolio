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
      paddingTop: props.padding1,
      paddingBottom: props.padding2
    }
  }

  return (
    <div className="section-wrapper constrained" style={myStyle}>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
        </Grid>
        <Grid item xs={12} sm={7} lg={6}>
            {/* <p>{props.description}</p> */}
            <div dangerouslySetInnerHTML={{ __html: props.description}}></div>
        </Grid>
        <Grid item xs={12} sm={1} lg={2}>
        </Grid> 
    </Grid>
    </div>
  );
}

export default Insert;
