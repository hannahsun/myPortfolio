import React from 'react';
import Project from './projectTemplate';
import ControlledCarousel from '../elements/carousel';
import Footer from '../elements/footer';

let thisImagePool = [
  {url:"https://www.petsworld.in/blog/wp-content/uploads/2014/10/Corgi.jpg"}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800"}
  ,
  {url:"https://www.rover.com/blog/wp-content/uploads/2018/11/running-corgi-puppy.jpg"}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800"}
  
]

export default function proj_motionReel() {
  return (
    <React.Fragment>
    <Project 
      year="2010"
      tools="hehehehehe"
      description="hello world"
      videoLink="https://vimeo.com/378175023"
    />
    <ControlledCarousel 
      imagePool = {thisImagePool}
    />
    </React.Fragment>
  );
}
