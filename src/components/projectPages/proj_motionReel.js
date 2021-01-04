import React from 'react';
import Project from './projectTemplate';
import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';
import ResponsivePlayer from '../elements/responsivePlayer'


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Motion Reel 2020"
      A2="After Effects / Cinema4D / Octane / Photoshop / Illustrator"
      description=""
    />
    <ResponsivePlayer 
      url="https://vimeo.com/493139444"
    />
    </React.Fragment>
  );
}
