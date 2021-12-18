import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';


// image import
import star1 from '../../assets/img/motion/content-star/star-1.png';
import star2 from '../../assets/img/motion/content-star/star-2.png';

//define image pools
let ImagePool_1 = [
  {url: star1, size: 2},
  {url: star2,size: 2},
]





export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="WFH"
      A2="Cinema4D / After Effects / Illustrator"
      description=""
      
    />

    <ResponsivePlayer url="https://vimeo.com/646920028" />


    <Spacer height="120px"/>
    <Insert 
      title="Stills"
      subtitle=""
      description= ""
      padding='40px'
    />

<GalleryGrid 
        imagePool = {ImagePool_1}
        col = {4}
        spacing = {1}
        trueSize = {true}
    />

    </React.Fragment>
  );
}
