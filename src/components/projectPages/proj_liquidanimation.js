import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Liquid Animation"
      A2="Photoshop / After Effects"
      description="A logo animation for the logo of SVA MFA Computer Arts program."
    />
    <ResponsivePlayer url="https://vimeo.com/376691667" />
    </React.Fragment>
  );
}
