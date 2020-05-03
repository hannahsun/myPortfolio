import React from 'react';
import Project from './projectTemplate';
import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';

let thisImagePool = [
  {url:"https://www.petsworld.in/blog/wp-content/uploads/2014/10/Corgi.jpg"}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800"}
  ,
  {url:"https://www.rover.com/blog/wp-content/uploads/2018/11/running-corgi-puppy.jpg"}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800"}
  
]

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Motion Reel 2019-20"
      year="2019-20"
      tools="After Effects / Cinema4D / Octane / Trapcode / Photoshop / Illustrator"
      description=""
      videoLink="https://vimeo.com/378175023"
    />
    </React.Fragment>
  );
}
