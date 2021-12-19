import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Insert from '../elements/projectInsert';


// image import
import organism1 from '../../assets/img/motion/content-organism/growth-1.png';
import organism2 from '../../assets/img/motion/content-organism/growth-2.png';
import organism3 from '../../assets/img/motion/content-organism/growth-3.png';
import organism4 from '../../assets/img/motion/content-organism/growth-4.png';

//define image pools
let ImagePool_1 = [
  {url: organism1,size: 2},
  {url: organism2,size: 2},
  {url: organism3,size: 2},
  {url: organism4,size: 2},
]

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Organism"
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
        col = {2}
        spacing = {1}
        trueSize = {true}
    />

    </React.Fragment>
  );
}
