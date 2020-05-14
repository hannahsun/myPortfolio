import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';


// image import
import passage1 from '../../assets/img/motion/content-passage/passage-01.jpg';
import passage2 from '../../assets/img/motion/content-passage/passage-02.1.jpg';
import passage3 from '../../assets/img/motion/content-passage/passage-03.jpg';
import passage4 from '../../assets/img/motion/content-passage/passage-04.jpg';
import passage5 from '../../assets/img/motion/content-passage/passage-05.jpg';
import passage6 from '../../assets/img/motion/content-passage/passage-06.jpg';
import passage7 from '../../assets/img/motion/content-passage/passage-07.jpg';
import passage8 from '../../assets/img/motion/content-passage/passage-08.jpg';
import passage9 from '../../assets/img/motion/content-passage/passage-09.jpg';
import passage10 from '../../assets/img/motion/content-passage/passage-10.jpg';
import passage11 from '../../assets/img/motion/content-passage/passage-11.jpg';
import passage12 from '../../assets/img/motion/content-passage/passage-12.jpg';
import passage13 from '../../assets/img/motion/content-passage/passage-13.jpg';
import passage14 from '../../assets/img/motion/content-passage/passage-14.jpg';

//define image pools
let ImagePool_1 = [
  {url: passage1,size: 2},
  {url: passage2,size: 1},
  {url: passage3,size: 1},
  {url: passage4,size: 2},
  {url: passage5,size: 2},
  {url: passage6,size: 2},
  {url: passage7,size: 2},
  {url: passage8,size: 2},
  {url: passage9,size: 2},
  {url: passage10,size: 2},
  {url: passage11,size: 2},
  {url: passage12,size: 2},
  {url: passage13,size: 2},
  {url: passage14,size: 2},
  
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Team"
      Q3="Tools"
      Q4="Role"
      A1="PASSAGE"
      A2="Hannah Sun & I Ting Kao"
      A3="Cinema4D / After Effects / Illustrator"
      A4="partial 3D animation (texturing, keying & model touchups) / 2D Animation / Graphic Design"
      description=""
      
    />

    <ControlledCarousel 
          ratio = {9/16}
          imagePool = {ImagePool_1}
        />

    <Insert 
      title="PASSAGE"
      subtitle="concept"
      description= "Those treasure boxes from childhood will eventaully turn into our time capsules. The silly toys, outdated game machines, dusted vinyl records are triggers to the everyday moments we share and bond over universally. This animation imagines a magical space inside a time capsule where the objects from the past continue to live and thrive."
      padding='100px'
      />

    <ResponsivePlayer url="https://vimeo.com/417726722" />

    </React.Fragment>
  );
}
