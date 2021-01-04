import React from 'react';

import Project from './projectTemplate';
// import ResponsivePlayer from '../elements/responsivePlayer'
// import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';
import GalleryGrid from '../elements/galleryGrid';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';



// image import
import verizon1 from '../../assets/img/motion/content-whatever/verizon-1.png';
import verizon2 from '../../assets/img/motion/content-whatever/verizon-2.png';
import verizon3 from '../../assets/img/motion/content-whatever/verizon-3.png';
import verizon4 from '../../assets/img/motion/content-whatever/verizon-4.png';
import verizon5 from '../../assets/img/motion/content-whatever/verizon-5.png';
import verizon6 from '../../assets/img/motion/content-whatever/verizon-6.png';
import verizon7 from '../../assets/img/motion/content-whatever/verizon-7.png';

import fbnews1 from '../../assets/img/motion/content-whatever/fbnews-1.png';
import fbnews2 from '../../assets/img/motion/content-whatever/fbnews-2.png';
import fbnews3 from '../../assets/img/motion/content-whatever/fbnews-3.png';
import fbnews4 from '../../assets/img/motion/content-whatever/fbnews-4.png';

import ig1 from '../../assets/img/motion/content-whatever/ig-1.png';
import ig2 from '../../assets/img/motion/content-whatever/ig-2.png';
import ig3 from '../../assets/img/motion/content-whatever/ig-3.png';
import liberty1 from '../../assets/img/motion/content-whatever/liberty.gif';

//define image pools
let ImagePool_scroll_1= [
  {url: ig1, size: 2},
  {url: ig2, size: 2},
  {url: ig3, size: 2},
  {url: verizon2, size: 2},
  {url: verizon7, size: 2},
  // {url: verizon6, size: 2},
  {url: verizon5, size: 2},
]
let ImagePool_grid_1= [
  {url: fbnews1,  size: 1},
  {url: fbnews2, size: 1},
  // {url: fbnews3, size: 1},
  // {url: fbnews4, size: 1},
  {url: liberty1, size: 1},
]






export default function myproject() {
  return (
    <React.Fragment>
    {/* <Project 
      Q1=""
      Q2=""
      A1=""
      A2=""
      description="Explorations & sutff.."
    /> */}
  
    <Insert 
      title="// Explorations And stuff"
      subtitle=""
      description= ""
      padding='40px'
    />



    {/* <Gallery 
      isPadded = {true}
      spacing = {2}
      imagePool = {ImagePool_scroll_1}
    /> */}
    <GalleryGrid 
        imagePool = {ImagePool_scroll_1}
        spacing = {2}
        col = {2}
    />

    <Spacer height="12px"/>

    <GalleryGrid 
        imagePool = {ImagePool_grid_1}
        spacing = {2}
        col = {3}
    />

    </React.Fragment>
  );
}


