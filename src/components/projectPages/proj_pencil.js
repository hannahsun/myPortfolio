import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';


// image import
import pencil_sb from '../../assets/img/motion/content-pencil/pencil-sb.png';

//define image pools
let ImagePool_1 = [
  {url: pencil_sb,size: 2},
]





export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Pencil"
      A2="After Effects / Cinema4D"
      description=""
      
    />

    <ResponsivePlayer url="https://vimeo.com/544348386" />


    <Spacer height="120px"/>
    <Insert 
      title="Initial Storyboards"
      subtitle=""
      description= ""
      padding='40px'
    />

    <Image 
        image={pencil_sb}
    />

    </React.Fragment>
  );
}
