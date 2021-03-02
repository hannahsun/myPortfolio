import React from 'react';
import Project from './projectTemplate';
import ResponsivePlayer from '../elements/responsivePlayer'
import Insert from '../elements/projectInsert';
import Spacer from '../elements/spacer';
import GalleryGrid from '../elements/galleryGrid';
import Gallery from 'react-photo-gallery';


// image import
import img1 from '../../assets/img/motion/content-sva2021/sva-1.png';
import img2 from '../../assets/img/motion/content-sva2021/sva-2.png';
import img3 from '../../assets/img/motion/content-sva2021/sva-3.png';
import img4 from '../../assets/img/motion/content-sva2021/sva-4.png';
import img5 from '../../assets/img/motion/content-sva2021/sva-5.png';
import img6 from '../../assets/img/motion/content-sva2021/sva-6.png';
import img7 from '../../assets/img/motion/content-sva2021/sva-7.png';

//define image pools
// const photos = [
//   {
//   src: img1,
//   width: 16,
//   height: 9
//    },
//   {
//   src: img2,
//   width: 16,
//   height: 9
//   },
//   {
//   src: img3,
//   width: 16,
//   height: 9
//   },
//   {
//   src:img5,
//   width: 16,
//   height: 9
//   },
//   {
//   src:img6,
//   width: 16,
//   height: 9
//   },
//   {
//   src:img7,
//   width: 16,
//   height: 9
//   },
  
// ];

const photos = [
  {url:img1, size:2},
  {url:img2, size:2},
  {url:img3, size:2},
  {url:img4, size:2},
  {url:img5, size:2},
  {url:img6, size:2},
];



export default function myproject() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="SVA 2021"
      A2="After Effects"
      description=""
      
    />

    <ResponsivePlayer url="https://vimeo.com/518401302" />

    <Spacer height="120px"/>
    <Insert 
      title="Snapshots"
      subtitle=""
      description= ""
      padding='40px'
    />

    <GalleryGrid 
        imagePool = {photos}
        col = {4}
        spacing = {1}
    />
    {/* <Gallery photos={photos} direction={"column"}/> */}

    </React.Fragment>
  );
}
