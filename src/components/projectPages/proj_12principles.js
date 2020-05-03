import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="12 Principles of Animation"
      A2="Cinema4D / After Effects"
      description="A short assignment illustrating the 12 basic principles of animation."
    />
    <ResponsivePlayer url="https://vimeo.com/358668754" />
    </React.Fragment>
  );
}
