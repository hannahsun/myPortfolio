import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Starving"
      year="2020"
      tools="Cinema4D / Octane"
      description="A short animation portraying a scene and atmosphere inspired by a randomly chosen adjective 'starving'."
      videoLink="https://vimeo.com/390901899"
    />
    <ResponsivePlayer url="https://vimeo.com/390901899"/>
    </React.Fragment>
  );
}
