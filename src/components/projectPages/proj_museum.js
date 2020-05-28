import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Musum of The Future"
      A2="After Effects"
      description="Reimagining the MET with hologram signage. A short exercise on 3d camera tracking.
      Footages were shot with iPhone7 and iPhone11 for wide angles."
    />
    <ResponsivePlayer url="https://vimeo.com/372284950"/>
    </React.Fragment>
  );
}
