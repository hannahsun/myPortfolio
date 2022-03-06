import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Image from '../elements/imageContainer';

// image import
import chaseuso1 from '../../assets/img/motion/content-chaseuso/chase-1.png';
import chaseuso2 from '../../assets/img/motion/content-chaseuso/chase-2.png';
import chaseuso3 from '../../assets/img/motion/content-chaseuso/chase-cutdown.gif';
import chaseuso4 from '../../assets/img/motion/content-chaseuso/chase-sh020.gif';
import chaseuso5 from '../../assets/img/motion/content-chaseuso/chase-sh060.gif';
import chaseuso6 from '../../assets/img/motion/content-chaseuso/chase-sh100.gif';
import bts1 from '../../assets/img/motion/content-chaseuso/chase-bts-sh105.gif';
import bts2 from '../../assets/img/motion/content-chaseuso/chase-bts-sh060_1.gif';
import bts3 from '../../assets/img/motion/content-chaseuso/chase-bts-sh060_2.gif';
import bts4 from '../../assets/img/motion/content-chaseuso/chase-bts-sh020.gif';


//define image pools
let ImagePool_1 = [
  {url: chaseuso5,size: 2},
  {url: bts3,size: 2},

  {url: chaseuso6,size: 2},
  {url: bts1,size: 2},

  {url: chaseuso4,size: 2},
  {url: bts4,size: 2},
]

export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Role"
      A1="Chase US Open"
      A2="Animator"
      description=""
    
      
    />

{/* Blip explores the topic of screen addiction, the new norm of our life today with digital technology, and the feeling of isolation and distraction a lot of us share but often neglect.
      <br><br>
      <b>Direction, Design & animation:</b>&nbsp; Hannah Sun <br>
      <b>Music & sound:</b>&nbsp; Joe Basile */}


    <Image image={chaseuso3} />


    {/* <Spacer height="90px"/> */}
    <Insert 
      title="Shots I worked on"
      subtitle="& behind the Scenes"
      description= ""
      padding1='90px'
      padding2="0"
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {4}
        spacing = {1}
        trueSize = {true}
    />

<Insert 
      title="The Full Video "
      subtitle=""
      description= ""
      padding1='0px'
      padding2='70px'
    />

  <ResponsivePlayer url="https://vimeo.com/632333351"/>


    </React.Fragment>
  );
}
