import React from 'react';
import Project from './projectTemplate';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';

// image import
import verizon1 from '../../assets/img/motion/content-whatever/verizon-1.png';
import verizon2 from '../../assets/img/motion/content-whatever/verizon-2.png';
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
import ig5 from '../../assets/img/motion/content-whatever/ig-5.png';
import liberty1 from '../../assets/img/motion/content-whatever/liberty.gif';

import target1 from '../../assets/img/motion/content-whatever/outro-1.png';
import target2 from '../../assets/img/motion/content-whatever/target-1.png';
import target3 from '../../assets/img/motion/content-whatever/target-2.png';
import target4 from '../../assets/img/motion/content-whatever/outro-4.gif';


//define image pools
const photos = [
  {
  url: ig1,size: 2
  },
  {
  url: ig2,size: 2
  },
  {
    url: ig3,size: 2
   },
   {
   url: fbnews1,size: 1
   },
   {
   url: fbnews3,size: 1
   },
   {
    url: ig5,size: 2
  },
  {
  url: verizon7,size: 2
   },
  {
  url: verizon2,size: 2
  },
  {
    url: target2,size: 2
  },
  {
    url: target4,size: 2
  },

];



export default function Whatever() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      A1="Design Trash Can"
      description="Some stuff that didn't make it to the light"
      
    />
    <GalleryGrid 
        imagePool = {photos}
        col = {4}
        spacing = {1}
    />
     </React.Fragment>
  );
}
