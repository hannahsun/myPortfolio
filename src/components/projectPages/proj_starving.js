import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Starving"
      A2="Cinema4D / Octane"
      description="A short animation portraying a scene and atmosphere inspired by a randomly chosen adjective, 'starving'."
      videoLink="https://vimeo.com/390901899"
    />
    <ResponsivePlayer url="https://vimeo.com/390901899"/>
    </React.Fragment>
  );
}
