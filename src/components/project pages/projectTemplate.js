import React from 'react';
import Grid from '@material-ui/core/Grid';
import ResponsivePlayer from '../responsivePlayer.js';


function projectTemplate() {
  return (
    <div className="projectPage">
        <div className="section-wrapper">
           <ResponsivePlayer url="https://vimeo.com/378175023"/>
      </div>
    </div>
  );
}

export default projectTemplate;