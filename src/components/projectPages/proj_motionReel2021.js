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
      A1="Motion Reel 2021"
      description=""
    />
    <ResponsivePlayer 
      url="https://vimeo.com/685229810"
    />
    </React.Fragment>
  );
}
