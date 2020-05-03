import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Forms"
      A2="After Effects / Trapcode Suite"
      description="A short exercise exploring the relation between image and sound."
    />
    <ResponsivePlayer url="https://vimeo.com/367635230" />
    </React.Fragment>
  );
}
