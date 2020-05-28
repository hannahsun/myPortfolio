import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Blend 3015"
      A2="After Effects"
      description="Week 3 assignment for Sander's motion class at SOM. Style frames credit to O'Brien and Lucas Brooking!"
    />
    <ResponsivePlayer url="https://vimeo.com/418468915" />
    </React.Fragment>
  );
}
