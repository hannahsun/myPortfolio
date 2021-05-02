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
      A1="The Festival of Lights"
      A2="After Effects / Illustrator"
      description="
      blip is known as 'The Festival of Lights'. It's a festival all about sharing the light to illuminate the darkness. About shining a light that can unite us in the fight against evil. Now, more than ever, this message is particularly timely. May your life shrine bright with the light of the Menorah candles this holiday season. Happy blip!
      <br><br>
      <b>Directed and produced by:</b> Itay Tevel <br>
      <b>Design:</b> Hannah Sun <br>
      <b>Animation Lead:</b> Itay Tevel <br>
      <b>Animation:</b> Itay Tevel / Hannah Sun / Tyler West / Lin Youting / Kaycee Nwakudu <br>
      <b>Original Music and Sound:</b> Tomer Rabinowitz"
      
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
