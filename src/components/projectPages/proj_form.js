import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Forms"
      year="2019"
      tools="After Effects / Trapcode Suite"
      description="A short exercise exploring the relation between image and sound."
    />
    <ResponsivePlayer url="https://vimeo.com/367635230" />
    </React.Fragment>
  );
}
