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
import blip_sb from '../../assets/img/motion/content-blip/blip-SB.png';

//import blipmotion1 from '../../assets/img/motion/content-blip/blip-sh01.gif';
//import blipmotion2 from '../../assets/img/motion/content-blip/blip-sh02.gif';
//import blipmotion3 from '../../assets/img/motion/content-blip/blip-sh03.gif';

//define image pools
let ImagePool_1 = [
  {url: blip1,size: 2},
  {url: blip9,size: 2},
  {url: blip2,size: 2},
  {url: blip3,size: 2},
  {url: blip4,size: 2},
  {url: blip6,size: 2},
  {url: blip5,size: 2},
  {url: blip7,size: 2},
  {url: blip8,size: 2},
]


// let ImagePool_2 = [
//   {url: blipmotion1,size: 2},
//   {url: blipmotion2,size: 2},
//   {url: blipmotion3,size: 2},
// ]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Blip"
      A2="After Effects / Cinema4D / Illustrator"
      description="
      Blip is a short 2D animation that explores the topic of digital addiction, an issue increasing year by year and especially during the pandemic lockdown. I was inspired to do a piece about today’s lifestyle and the dependency we’ve developed on our digital devices. In an exaggerated style, the animation portrays the experience of isolation and distraction many people share today with frequent use of digital technology.
      <br><br> NOTE: The video below is a trailer. Full film coming soon.
      <br><br>
      <b>Design & animation:</b>&nbsp; Hannah Sun <br>
      <b>Music & sound:</b>&nbsp; Joe Basile"
      
    />

    <ResponsivePlayer url="https://vimeo.com/540849731"/>


    <Spacer height="120px"/>
    <Insert 
      title="Snapshots"
      subtitle=""
      description= ""
      padding='40px'
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {6}
        spacing = {1}
    />

  <Spacer height="60px" />

    <Insert 
      title="Initial Storyboards"
      subtitle=""
      description= ""
      padding='40px'
    />
    <Image image={blip_sb} />

    

    </React.Fragment>
  );
}
