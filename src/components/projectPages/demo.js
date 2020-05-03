import React from 'react';
//external library
import Grid from '@material-ui/core/Grid';
//my components
import Project from './projectTemplate';
import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';
import Insert from '../elements/projectInsert';

let thisImagePool = [
  {url:"https://www.petsworld.in/blog/wp-content/uploads/2014/10/Corgi.jpg"}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800"}
  ,
  {url:"https://www.rover.com/blog/wp-content/uploads/2018/11/running-corgi-puppy.jpg"}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800"}
  
]

export default function demo() {
  return (
    <React.Fragment>
    <Project 
      year="year of creation"
      tools="program 1  /  program 2  /  program 3"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      videoLink="https://www.youtube.com/watch?v=e9Xwzs0mNqk"
    />

    <Insert 
      title="Section Title"
      subtitle="subtitle goes here"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    />

    <ControlledCarousel 
      imagePool = {thisImagePool}
    />

    <Insert 
      title="Section Title"
      subtitle="subtitle goes here"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    />

    <Gallery 
      imagePool = {thisImagePool}
    />

    </React.Fragment>
  );
}
