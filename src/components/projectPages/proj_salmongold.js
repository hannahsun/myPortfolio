import React from 'react';

import Project from './projectTemplate';
// import ResponsivePlayer from '../elements/responsivePlayer'
// import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';


// image import
import salmongold_1 from '../../assets/img/graphic/content-salmongold/salmongold_1.jpg';
import salmongold_2 from '../../assets/img/graphic/content-salmongold/salmongold_2.jpg';
import salmongold_3 from '../../assets/img/graphic/content-salmongold/salmongold_3.jpg';
import salmongold_4 from '../../assets/img/graphic/content-salmongold/salmongold_4.jpg';
import salmongold_5 from '../../assets/img/graphic/content-salmongold/salmongold_5.jpg';
import salmongold_6 from '../../assets/img/graphic/content-salmongold/salmongold_6.jpg';
import salmongold_7 from '../../assets/img/graphic/content-salmongold/salmongold_7.jpg';
import salmongold_8 from '../../assets/img/graphic/content-salmongold/salmongold_8.jpg';

//define image pools
let ImagePool_1= [
  {url: salmongold_1, size: 2}
  ,
  {url: salmongold_2,
   size: 2}
  ,
  {url: salmongold_4,
  size: 2}
  ,
  {url: salmongold_3,
  size: 2}
  ,
  {url: salmongold_5,
  size: 2}
  // ,
  // {url: salmongold_6,
  // size: 2}
  ,
  {url: salmongold_7,
  size: 2}
  ,
  {url: salmongold_8,
    size: 2}
  
]






export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Client"
      A1="Salmon Gold Visual Identity"
      A2="Resolve"
      description="Salmon Gold is a voluntary partnership to re-mine historical placer gold mine sites and restore fish habitat using sustainable techniques with globally significant habitat for salmon and other anadromous fish species.
      The visual identity is created to reflect the mission of Salmon Gold and to tell a positive story in the marketplace to demonstrates the value of restoration."
    />
    <Gallery 
      isPadded = {true}
      spacing = {2}
      imagePool = {ImagePool_1}
    />
    </React.Fragment>
  );
}


