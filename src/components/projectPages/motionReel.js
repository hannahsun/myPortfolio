import React from 'react';
import Project from './projectTemplate';
import ControlledCarousel from '../elements/carousel';
import Footer from '../elements/footer';

export default function proj_motionReel() {
  return (
    <React.Fragment>
    <Project 
      year="2010"
      tools="hehehehehe"
      description="hello world"
      videoLink="https://vimeo.com/378175023"
    />
    <ControlledCarousel />
    </React.Fragment>
  );
}
