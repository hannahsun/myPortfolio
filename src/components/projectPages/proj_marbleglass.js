import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Insert from '../elements/projectInsert';


// image import
import marbleglass1 from '../../assets/img/motion/content-marbleglass/marbleglass-1.png';
import marbleglass2 from '../../assets/img/motion/content-marbleglass/marbleglass-2.png';
import marbleglass3 from '../../assets/img/motion/content-marbleglass/marbleglass-3.png';
import marbleglass4 from '../../assets/img/motion/content-marbleglass/marbleglass-4.png';
import marbleglass5 from '../../assets/img/motion/content-marbleglass/marbleglass-5.png';

//define image pools
let ImagePool_1 = [
  {url: marbleglass2,size: 2},
  {url: marbleglass3,size: 2},
  {url: marbleglass4,size: 1},
  {url: marbleglass5,size: 1},
  {url: marbleglass1,size: 2},
]

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Marble Glass"
      A2="Cinema4D / Octane / After Effects"
      description=""
      
    />

    <ResponsivePlayer url="https://vimeo.com/491288204" />

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
