import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Spider"
      A2="Cinema4D / After Effects"
      description=""
    />
    <ResponsivePlayer url="https://vimeo.com/477856753"/>
    </React.Fragment>
  );
}
