import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Squares"
      A2="After Effects / Cinema4D"
      description=""
    />
    <ResponsivePlayer url="https://vimeo.com/360154140" />
    </React.Fragment>
  );
}
