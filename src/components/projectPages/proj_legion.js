import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Legion Title Resolve"
      year="2020"
      tools="Cinema4D / X-Particles"
      description="Logo resolve for the FX show LEGION."
    />
    <ResponsivePlayer url="https://vimeo.com/407457829" />
    </React.Fragment>
  );
}
