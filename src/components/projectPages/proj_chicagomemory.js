import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Well Street Bridge"
      A2="After Effects"
      description="Repainting from memory the view at Well Street Bridge over the Chicago river."
    />
    <ResponsivePlayer url="https://vimeo.com/363142055"/>
    </React.Fragment>
  );
}
