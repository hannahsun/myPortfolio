import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Liquid Animation"
      year="2020"
      tools="Photoshop / After Effects"
      description="A logo animation for the logo of SVA MFA Computer Arts program."
    />
    <ResponsivePlayer url="https://vimeo.com/376691667" />
    </React.Fragment>
  );
}
