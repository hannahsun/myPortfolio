import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Still to Life"
      year="2020"
      tools="Cinema4D / After Effects"
      description="A short animation that brings El Lissitzky's suprematism drawing to life. This artwork is one of the pieces from Lissitzky's PROUN series in which he sought to combine architecture and 3-dimensional space with the traditional and abstract 2-dimensional imagery."
    />
    <ResponsivePlayer url="https://vimeo.com/395111851" />
    </React.Fragment>
  );
}
