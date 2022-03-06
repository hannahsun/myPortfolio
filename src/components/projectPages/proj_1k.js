import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';

// image import
import onek1 from '../../assets/img/motion/content-1k/1k-1.png';
import onek2 from '../../assets/img/motion/content-1k/1k-2.png';
import onek3 from '../../assets/img/motion/content-1k/1k-3.png';
import onek4 from '../../assets/img/motion/content-1k/1k-4.png';
import onek5 from '../../assets/img/motion/content-1k/1k-5.png';
import onek6 from '../../assets/img/motion/content-1k/1k-6.png';
import onek_sb from '../../assets/img/motion/content-1k/1k-sb.png';

//define image pools
let ImagePool_1 = [
  {url: onek6,size: 2},
  {url: onek5,size: 2},
  {url: onek4,size: 2},
  {url: onek2,size: 2},
  {url: onek1,size: 2},
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Client"
      Q3="Tools"
      A1="1K"
      A2="Personal"
      A3="After Effects / Illustrator / Cinema4D"
      description="
      <b>Design & animation:</b>&nbsp; Hannah Sun <br>
      <b>Music & sound:</b>&nbsp; Nicolas Maurin"
      
    />

    <ResponsivePlayer url="https://vimeo.com/578892912"/>

    <Insert 
      title="Snapshots"
      subtitle=""
      description= ""
      padding1='100px'
      padding2='0px'
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        trueSize = {true}
        col = {6}
        spacing = {1}
    />
  
        <Insert 
          title="Behind the Scene"
          subtitle=""
          description= ""
          padding1='30px'
          padding2='70px'
        />
    <ResponsivePlayer url="https://vimeo.com/578908233"/>

    </React.Fragment>
  );
}
