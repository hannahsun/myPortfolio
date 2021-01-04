import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';


// image import
import desktop1 from '../../assets/img/motion/content-desktop/desktop-1.png';
import desktop2 from '../../assets/img/motion/content-desktop/desktop-2.png';
import desktop3 from '../../assets/img/motion/content-desktop/desktop-3.png';
import desktop4 from '../../assets/img/motion/content-desktop/desktop-4.png';
import desktop5 from '../../assets/img/motion/content-desktop/desktop-5.png';
import desktop6 from '../../assets/img/motion/content-desktop/desktop-6.png';

//define image pools
let ImagePool_1 = [
  {url: desktop1,size: 2},
  {url: desktop5,size: 2},
  {url: desktop6,size: 2},
  {url: desktop2,size: 2},
]



export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Workstation 2020"
      A2="Cinema4D / After Effects"
      description=""
      
    />


    <ResponsivePlayer url="https://vimeo.com/470426095" />

    <Spacer height="120px"/>
    <Insert 
      title="Snapshots"
      subtitle=""
      description= ""
      padding='40px'
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {4}
    />

    </React.Fragment>
  );
}
