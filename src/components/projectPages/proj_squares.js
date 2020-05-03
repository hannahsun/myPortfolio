import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Squares"
      year="2019"
      tools="After Effects / Cinema4D"
      description="A short assignment exploring one of the fundamental shapes, the square, and the infinite combinations and possibilities it brings."
    />
    <ResponsivePlayer url="https://vimeo.com/360154140" />
    </React.Fragment>
  );
}
