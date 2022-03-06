import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';


// image import
import hanukkah1 from '../../assets/img/motion/content-hanukkah/hanukkah_1.png';
import hanukkah2 from '../../assets/img/motion/content-hanukkah/hanukkah_2.png';
import hanukkah3 from '../../assets/img/motion/content-hanukkah/hanukkah_3.png';
import hanukkah4 from '../../assets/img/motion/content-hanukkah/hanukkah_4.png';
import hanukkah5 from '../../assets/img/motion/content-hanukkah/hanukkah_5.png';
import hanukkah6 from '../../assets/img/motion/content-hanukkah/hanukkah_6.png';
import hanukkah7 from '../../assets/img/motion/content-hanukkah/hanukkah_7.png';
import hanukkah8 from '../../assets/img/motion/content-hanukkah/hanukkah_8.png';
import hanukkah9 from '../../assets/img/motion/content-hanukkah/hanukkah_9.png';

import hanukkahmotion1 from '../../assets/img/motion/content-hanukkah/hanukkah-sh01.gif';
import hanukkahmotion2 from '../../assets/img/motion/content-hanukkah/hanukkah-sh02.gif';
import hanukkahmotion3 from '../../assets/img/motion/content-hanukkah/hanukkah-sh03.gif';

//define image pools
let ImagePool_1 = [
  {url: hanukkah3,size: 2},
  {url: hanukkah2,size: 2},
  {url: hanukkah4,size: 2},
  {url: hanukkah5,size: 2},
  {url: hanukkah6,size: 2},
  {url: hanukkah7,size: 2},
  {url: hanukkah8,size: 2},
  {url: hanukkah9,size: 2},
  {url: hanukkah1,size: 2},
]

let ImagePool_2 = [
  {url: hanukkahmotion1,size: 2},
  {url: hanukkahmotion2,size: 2},
  {url: hanukkahmotion3,size: 2},
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Client"
      A1="The Festival of Lights"
      A2="Hornet"
      description="
      Hanukkah is known as 'The Festival of Lights'. It's a festival all about sharing the light to illuminate the darkness. About shining a light that can unite us in the fight against evil. Now, more than ever, this message is particularly timely. May your life shrine bright with the light of the Menorah candles this holiday season. Happy Hanukkah!
      <br><br>
      <b>Directed and produced by:</b> Itay Tevel <br>
      <b>Design:</b> Hannah Sun <br>
      <b>Animation Lead:</b> Itay Tevel <br>
      <b>Animation:</b> Itay Tevel / Hannah Sun / Tyler West / Lin Youting / Kaycee Nwakudu <br>
      <b>Original Music and Sound:</b> Tomer Rabinowitz"
      
    />

    <ResponsivePlayer url="https://vimeo.com/496721635"/>



    <Insert 
      title="Shots I animated"
      subtitle=""
      description= ""
      padding1='100px'
      padding2='0px'
    />

    <GalleryGrid 
        imagePool = {ImagePool_2}
        col = {6}
        spacing = {1}
    />
  <Insert 
      title="Design"
      subtitle=""
      description= ""
      padding1='50px'
      padding2='0px'
    />
   
   <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {6}
        spacing = {1}
    />

    

    </React.Fragment>
  );
}
