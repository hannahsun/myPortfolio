import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';

// image import
import blip1 from '../../assets/img/motion/content-blip/blip-1.png';
import blip2 from '../../assets/img/motion/content-blip/blip-2.png';
import blip3 from '../../assets/img/motion/content-blip/blip-3.png';
import blip4 from '../../assets/img/motion/content-blip/blip-4.png';
import blip5 from '../../assets/img/motion/content-blip/blip-5.png';
import blip6 from '../../assets/img/motion/content-blip/blip-6.png';
import blip7 from '../../assets/img/motion/content-blip/blip-7.png';
import blip8 from '../../assets/img/motion/content-blip/blip-8.png';
import blip9 from '../../assets/img/motion/content-blip/blip-9.png';
import blip10 from '../../assets/img/motion/content-blip/blip-10.png';
import blip_sb from '../../assets/img/motion/content-blip/blip-SB.png';


//define image pools
let ImagePool_1 = [
  {url: blip1,size: 2},
  {url: blip9,size: 2},
  {url: blip2,size: 2},
  {url: blip3,size: 2},
  {url: blip4,size: 2},
  {url: blip10,size: 2},
  {url: blip6,size: 2},
  {url: blip5,size: 2},
  {url: blip7,size: 2},
  {url: blip8,size: 2},
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Blip"
      A2="After Effects / Cinema4D / Illustrator"
      description="
      Blip explores the topic of screen addiction, the new norm of our life today with digital technology, and the feeling of isolation and distraction a lot of us share but often neglect.
      <br><br>
      <b>Direction, Design & animation:</b>&nbsp; Hannah Sun <br>
      <b>Music & sound:</b>&nbsp; Joe Basile"
      
    />

    <ResponsivePlayer url="https://vimeo.com/539964022"/>

    <Insert 
      title="Snapshots"
      subtitle=""
      description= ""
      padding1='100px'
      padding2='0px'
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {4}
        spacing = {1}
        trueSize = {true}
    />


    <Insert 
      title="Initial Storyboards"
      subtitle=""
      description= ""
      padding1='30px'
      padding2='70px'
    />
    <Image image={blip_sb} />

    

    </React.Fragment>
  );
}
