import React from 'react';
//external library
import Grid from '@material-ui/core/Grid';
//my components
import Project from './projectTemplate';
import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';
import GalleryGrid from '../elements/galleryGrid';
import Insert from '../elements/projectInsert';
import ResponsivePlayer from '../elements/responsivePlayer'

// image import
import img_dogA from '../../assets/img/motion/NewYearGif.gif';

//define image pools
let ImagePool_1 = [
  {url: img_dogA,
   size: 1}
  ,
  {url: 'https://images-na.ssl-images-amazon.com/images/I/718vecXok%2BL.jpg',
   size: 2}
  ,
  {url:"https://www.rover.com/blog/wp-content/uploads/2018/11/running-corgi-puppy.jpg",
  size: 2}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800",
  size: 1}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800",
  size: 1}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800",
  size: 1}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800",
  size: 1}
  
]

export default function demo() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Project Title"
      A2="program 1  /  program 2  /  program 3"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    />
    
    <ResponsivePlayer 
      url="https://www.youtube.com/watch?v=e9Xwzs0mNqk"
    />
    <Insert 
      title="Carousel Gallery"
      subtitle="see below"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    />

    <ControlledCarousel 
      imagePool = {ImagePool_1}
    />

    <Insert 
      title="Vertical Gallery"
      subtitle="see below"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    />

    <Gallery 
      imagePool = {ImagePool_1}
    />

    <Insert 
      title="Gridded Gallery"
      subtitle="see below"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {3}
    />

    </React.Fragment>
  );
}
