import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Forms"
      A2="After Effects / Red Giant Form & Particular"
      description=""
    />
    <ResponsivePlayer url="https://vimeo.com/367635230" />
    </React.Fragment>
  );
}
