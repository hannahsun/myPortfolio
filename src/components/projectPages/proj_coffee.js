import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import ControlledCarousel from '../elements/carousel';
//import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';


// image import
import coffee1 from '../../assets/img/motion/content-coffee/coffee_still_01.png';
import coffee2 from '../../assets/img/motion/content-coffee/coffee_still_02.png';
import coffee3 from '../../assets/img/motion/content-coffee/coffee_still_03.png';
import coffee4 from '../../assets/img/motion/content-coffee/coffee_still_04.png';
import coffee5 from '../../assets/img/motion/content-coffee/coffee_still_05.png';
import coffee6 from '../../assets/img/motion/content-coffee/coffee_still_06.png';
import coffee7 from '../../assets/img/motion/content-coffee/coffee_still_07.png';
import coffee8 from '../../assets/img/motion/content-coffee/coffee_still_08.png';

//define image pools
let ImagePool_1 = [
  {url: coffee1,size: 2},
  {url: coffee2,size: 1},
  {url: coffee3,size: 1},
  {url: coffee4,size: 2},
  {url: coffee5,size: 2},
  {url: coffee6,size: 2},
  {url: coffee7,size: 2},
  {url: coffee8,size: 2}
]


export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Coffee Time"
      A2="Cinema4D / Octane / After Effects"
      description=""
      
    />

    <ControlledCarousel 
          ratio = {9/16}
          imagePool = {ImagePool_1}
        />

    <ResponsivePlayer url="https://vimeo.com/457577751" />

    </React.Fragment>
  );
}
