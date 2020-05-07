import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Legion Title Resolve"
      A2="Cinema4D / X-Particles"
      description=""
    />
    <ResponsivePlayer url="https://vimeo.com/407457829" />
    </React.Fragment>
  );
}
