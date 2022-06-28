import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';

// image import
import cash0 from '../../assets/img/motion/content-cashapp/bubble-tex2.png';
import cash1 from '../../assets/img/motion/content-cashapp/cash-bubble.png';
import cash2 from '../../assets/img/motion/content-cashapp/cash-grass.png';
import cash3 from '../../assets/img/motion/content-cashapp/intro-1.png';
import cash4 from '../../assets/img/motion/content-cashapp/intro-2.png';
import cash5 from '../../assets/img/motion/content-cashapp/intro-3.png';
import cash6 from '../../assets/img/motion/content-cashapp/intro-4.png';
import cash7 from '../../assets/img/motion/content-cashapp/intro-5.png';
import cash8 from '../../assets/img/motion/content-cashapp/intro-6.png';


//define image pools
let ImagePool_1 = [
  {url: cash0,size: 2},
  {url: cash1,size: 2},
  {url: cash2,size: 2},
  {url: cash7,size: 2},
  {url: cash3,size: 2},
  {url: cash8,size: 2},
  // {url: cash4,size: 2},
  // {url: cash5,size: 1},
  // {url: cash6,size: 1},
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Client"
      Q2="Production"
      A1="Cash App"
      A2="BUCK"
      description="
      Taxes stink. What if doing your taxes were chill instead? For the launch of Cash App Taxes we manifested our best selves to dream up a low-stress campaign full of calm, gentle, ASMR inspired vignettes to ease viewers through the process."
      
    />

    <Insert 
      title="Previs & Design"
      subtitle=""
      description= ""
      padding1='60px'
      padding2='0px'
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {2}
        spacing = {1}
        trueSize = {true}
    />

    

    </React.Fragment>
  );
}
