import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Insert from '../elements/projectInsert';


// image import
import growth1 from '../../assets/img/motion/content-growth/growth-1.png';
import growth2 from '../../assets/img/motion/content-growth/growth-2.png';
import growth3 from '../../assets/img/motion/content-growth/growth-3.png';
import growth4 from '../../assets/img/motion/content-growth/growth-4.png';

//define image pools
let ImagePool_1 = [
  {url: growth1,size: 2},
  {url: growth2,size: 2},
  {url: growth3,size: 2},
  {url: growth4,size: 2},
]

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Growth"
      A2="X-particles / Cinema4D / Octane / After Effects"
      description=""
      
    />

    <ResponsivePlayer url="https://vimeo.com/544343019" />

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
        spacing = {1}
    />

    </React.Fragment>
  );
}
