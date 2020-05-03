import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Adler Planetarium"
      A2="Cinema4D / After Effects"
      description="A logo animation dedicated to one of my favorite spots, the ADLER Planetarium, which sits at the shore of Lake Michigan in Chicago. The design highlighted a few significant technological advancements mankind has made to exploit the world and the outer space. The sundail is not only a great invention of tools but also an iconic sculpture standing in front of the Planetarium."
    />
    <ResponsivePlayer url="https://vimeo.com/245261365" />
    </React.Fragment>
  );
}
