import React from 'react';

import Project from './projectTemplate';
// import ResponsivePlayer from '../elements/responsivePlayer'
// import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';
import Carousel from '../elements/carousel';
import Insert from '../elements/projectInsert'
import Spacer from '../elements/spacer'


// image import
import blackout_1 from '../../assets/img/graphic/content-blackout/blackout_1.png';
import blackout_2 from '../../assets/img/graphic/content-blackout/blackout_2.png';
import blackout_3 from '../../assets/img/graphic/content-blackout/blackout_3.png';
import blackout_4 from '../../assets/img/graphic/content-blackout/blackout_4.png';
import blackout_5 from '../../assets/img/graphic/content-blackout/blackout_5.jpg';

//define image pools
let ImagePool_1= [
  {url: blackout_1, size: 2}
]
let ImagePool_2= [
  {url: blackout_3,size: 2}
  ,
  {url: blackout_2, size: 2}
]
let ImagePool_3= [
  {url: blackout_5, size: 2}
]




export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Team"
      A1="Blackout"
      A2="with Yenna Chang / Ann Liu"
      description="Aug 14, 2003, a major outage knocked out power across the eastern United tates and parts of Canada. This was the largest blackout in Northern American History. This infographic poster provides an overview on the blackout cascade sequence and its causes in a way that's concise, understandable, and yet elegant."
    />
    <Gallery 
      isPadded = {true}
      imagePool = {ImagePool_1}
    />
    <Spacer height="6vw" min="40px" max="70px"/>

    <Carousel 
      isPadded = {true}
      ratio = {1/2.2}
      imagePool = {ImagePool_2}
    />

    <Spacer height="10vw" min="50px" max="100px"/>

    <Gallery 
      isPadded = {false}
      imagePool = {ImagePool_3}
    />
    </React.Fragment>
  );
}


