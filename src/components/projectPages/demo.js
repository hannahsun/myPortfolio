import React from 'react';
//external library
import Grid from '@material-ui/core/Grid';
//my components
import Project from './projectTemplate';
import ControlledCarousel from '../elements/carousel';
import Gallery from '../elements/gallery';
import GalleryGrid from '../elements/galleryGrid';
import Insert from '../elements/projectInsert';
import ResponsivePlayer from '../elements/responsivePlayer'
import Spacer from '../elements/spacer';
// import HoverVideoPlayer from 'react-hover-video-player';

// image import
import img_dogA from '../../assets/img/motion/NewYearGif.gif';
// import pencilmp4 from '../../assets/img/motion/content-pencil/pencil.mp4';
//define image pools
let ImagePool_1 = [
  {url: 'https://media.makeameme.org/created/disapproving-corgi.jpg',
   size: 2}
  ,
  {url: 'https://images-cdn.9gag.com/photo/a2ZrPBw_460s.jpg',
   size: 1}
  ,
  {url:"https://www.rover.com/blog/wp-content/uploads/2018/11/running-corgi-puppy.jpg",
  size: 1}
  ,
  {url:"https://images.radio.com/aiu-media/GettyImages1061822700-eb517cd2-387f-4448-ab1b-759627ede846.jpg?width=800",
  size: 2}
  
]

export default function demo() {
  return (
    <React.Fragment>
    <Project 
      Q1="Project"
      Q2="Tools"
      A1="Project Title"
      A2="program 1  /  program 2  /  program 3"
      description="<Project Q1='' Q2='' A1='' A2='' description='...'/>"
    />


    {/* <HoverVideoPlayer
      videoSrc= {pencilmp4}
      volume={0.4}
      muted = {false}
      loop = {true}
      className = "hover-video-player"
      preload="auto"
      pausedOverlay={
        <img src="thumbnail-image.jpg" alt="" />
      }
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      }
    /> */}


    <ResponsivePlayer 
      url="https://www.youtube.com/watch?v=e9Xwzs0mNqk"
    />

    <Spacer height="70px"/>

    <Insert 
      title="Video Player"
      subtitle="see above"
      description= "<ResponsivePlayer  url='...' />"
      padding='10px'
    />

    <Insert 
      title="Text Component"
      subtitle="this"
      description= "<Insert title='' subtitle='' description='' padding=''/>"
      padding='10px'
    />
    <Insert 
      title="Spacer"
      subtitle=""
      description= "<Spacer height='' />"
      padding='10px'
    />

    <Insert 
      title="Grid"
      subtitle="import Grid from '@material-ui/core/Grid';"
      description= "<Grid container spacing={1}> <Grid item sm={3} md={6}></Grid> </Grid>"
      padding='10px'
    />

    <Insert 
      title="Carousel Gallery"
      subtitle="see below"
      description= "<ControlledCarousel  isPadded = {false} ratio = {9/16}  imagePool = {myImagePool}/>"
      padding='10px'
    />
    <Spacer height="70px"/>

    <ControlledCarousel 
      ratio = {9/16}
      imagePool = {ImagePool_1}
    />

    <Insert 
      title="Vertical Gallery"
      subtitle="see below"
      description="<Gallery  isPadded = {false} spacing = {1} imagePool = {myImagePool} backgroundColor='color' /> "
    />

    <Gallery 
      imagePool = {ImagePool_1}
    />

    <Insert 
      title="Gridded Gallery"
      subtitle="see below"
      description="<GalleryGrid col={3}  imagePool = {myImagePool}/> "
    />

    <GalleryGrid 
        imagePool = {ImagePool_1}
        col = {3}
    />

    </React.Fragment>
  );
}
