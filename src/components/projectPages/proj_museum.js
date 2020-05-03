import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Musum of The Future"
      year="2019"
      tools="After Effects"
      description="Reimagining the MET with hologram signage. A short exercise on 3d camera tracking.
      Footages were shot with iPhone7 and iPhone11 for wide angles."
    />
    <ResponsivePlayer url="https://vimeo.com/372284950"/>
    </React.Fragment>
  );
}
