import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';

// image import
import ibmthink1 from '../../assets/img/motion/content-ibmthink/ibmthink_0.png';
import ibmthink2 from '../../assets/img/motion/content-ibmthink/ibmthink_1.png';
import ibmthink3 from '../../assets/img/motion/content-ibmthink/ibmthink_2.png';
import ibmthink4 from '../../assets/img/motion/content-ibmthink/ibmthink_3.png';
import ibmthink5 from '../../assets/img/motion/content-ibmthink/ibmthink_4.png';
import ibmthink6 from '../../assets/img/motion/content-ibmthink/ibmthink_5.png';
import ibmthink7 from '../../assets/img/motion/content-ibmthink/ibmthink_6.png';
import ibmthink8 from '../../assets/img/motion/content-ibmthink/ibmthink_a1.png';
import ibmthink9 from '../../assets/img/motion/content-ibmthink/ibmthink_previs.gif';



//define image pools
let ImagePool_1 = [
  {url: ibmthink2,size: 2},
  {url: ibmthink3,size: 2},
  {url: ibmthink6,size: 1},
  {url: ibmthink7,size: 1},
  {url: ibmthink5,size: 1},
  {url: ibmthink4,size: 1},
  {url: ibmthink9,size: 2},
  {url: ibmthink8,size: 2},
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Client"
      Q2="Production"
      A1="IBM"
      A2="BUCK"
      description="
      "
      
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
