import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';

// image import
import trafficjam1 from '../../assets/img/motion/content-trafficJam/animatic.gif';

//define image pools
let ImagePool_1 = [
  {url: trafficjam1,size: 2},
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Client"
      A1="Back on the Grid"
      A2="BUCK"
      description="
      Hard-style road rave to hard-style road rage. A vignette cooked up by some of our 2D team in NYC — dedicated to everyone that's getting back ON the grid today.
      <br><br>
      <b>Design & Animation:</b>&nbsp; @erikssongraphics / @gillesdesmadrille / Hannah Sun <br>
      "
      
    />

    <ResponsivePlayer url="https://vimeo.com/724995275"/>

    

    </React.Fragment>
  );
}
