import React from 'react';

import Project from './projectTemplate';
// import ResponsivePlayer from '../elements/responsivePlayer'
// import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';


// image import
import planit_1 from '../../assets/img/graphic/content-planit/planit_1.png';
import planit_2 from '../../assets/img/graphic/content-planit/planit_2.png';
import planit_3 from '../../assets/img/graphic/content-planit/planit_3.png';
import planit_4 from '../../assets/img/graphic/content-planit/planit_4.png';
import planit_5 from '../../assets/img/graphic/content-planit/planit_5.png';
import planit_6 from '../../assets/img/graphic/content-planit/planit_6.png';
import planit_7 from '../../assets/img/graphic/content-planit/planit_7.png';

//define image pools
let ImagePool_1= [
  {url: planit_1, size: 2}
  ,
  {url: planit_2,
   size: 2}
  ,
  {url: planit_3,
  size: 2}
  ,
  {url: planit_4,
  size: 2}
  ,
  {url: planit_5,
  size: 2}
  ,
  {url: planit_6,
  size: 2}
  ,
  {url: planit_7,
  size: 2}
  
]






export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Team"
      A1="Plan-it Money App"
      A2="with Yenna Chang / Ann Liu"
      description="A short animation that brings El Lissitzky's suprematism drawing to life. This artwork is one of the pieces from Lissitzky's PROUN series in which he sought to combine architecture and 3-dimensional space with the traditional and abstract 2-dimensional imagery."
    />
    <Gallery 
      imagePool = {ImagePool_1}
    />
    </React.Fragment>
  );
}


