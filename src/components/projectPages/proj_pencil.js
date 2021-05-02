import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'


// image import
import basketball1 from '../../assets/img/motion/basketball-1.png';


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Pencil"
      A2="After Effects / Cinema4D"
      description=""
      
    />

    <ResponsivePlayer url="https://vimeo.com/544348386" />

    </React.Fragment>
  );
}
