import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="12 Principles of Animation"
      year="2019"
      tools="Cinema4D / After Effects"
      description="A short assignment illustrating the 12 basic principles of animation."
    />
    <ResponsivePlayer url="https://vimeo.com/358668754" />
    </React.Fragment>
  );
}
