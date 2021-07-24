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

//define image pools
let ImagePool_1 = [
  {url: onek1,size: 2},
  {url: onek2,size: 2},
  {url: onek3,size: 2},
  {url: onek4,size: 2},
  {url: onek5,size: 2},
  {url: onek6,size: 2},
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Blip"
      A2="After Effects / Illustrator / Cinema4D"
      description="
      Blip is a short 2D animation that explores the topic of digital addiction, an issue increasing year by year and especially during the pandemic lockdown. I was inspired to do a piece about today’s lifestyle and the dependency we’ve developed on our digital devices. In an exaggerated style, the animation portrays the experience of isolation and distraction many people share today with frequent use of digital technology.
      <br><br> NOTE: The video below is a trailer. Full film coming soon.
      <br><br>
      <b>Design and animation:</b>&nbsp; Hannah Sun <br>
      <b>Music and sound:</b>&nbsp; Joe Basile"
      
    />

    <ResponsivePlayer url="https://vimeo.com/578892912"/>


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
