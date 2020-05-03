import React from 'react';
import Project from './projectTemplate';
import GalleryGrid from '../elements/galleryGrid.js';
// import ResponsivePlayer from '../elements/responsivePlayer'

// image import -----------------------------------------
import img_1 from '../../assets/img/motion/graduation.gif';
import img_2 from '../../assets/img/motion/NewYearGif.gif';
import img_3 from '../../assets/img/motion/welcomeBack.gif';
import img_4 from '../../assets/img/motion/Lion_red.gif';
import img_5 from '../../assets/img/motion/saic-logo.gif';

let ImagePool_miscellaneous = [
  {url: img_1,
   size: 1}
  ,
  {url: img_2,
   size: 1}
  ,
  {url: img_3,
  size: 1}
  ,
  {url: img_4,
  size: 1.5}
  ,
  {url: img_5,
  size: 1.5}
]



export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      name="Social Posts Collection"
      year="2018"
      tools="After Effects  /  Cinema 4D  /  Illustrator  /  Clip Studio Paint"
      description="A small collection of social posts created for F Newsmagazine, TDH Creative Co., and School of the Art Institute of Chicago."
    />
    <GalleryGrid 
     col = {3}
     imagePool = {ImagePool_miscellaneous}
    />
    </React.Fragment>
  );
}
