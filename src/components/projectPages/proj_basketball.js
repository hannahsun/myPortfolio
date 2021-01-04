import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
//import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';


// image import
import basketball1 from '../../assets/img/motion/basketball-1.png';


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Halftime"
      A2="Cinema4D / Octane / Nuke"
      description=""
      
    />

    <ResponsivePlayer url="https://vimeo.com/482189076" />

    </React.Fragment>
  );
}
