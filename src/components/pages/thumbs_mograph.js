import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Thumb from '../elements/thumb.js';

//import thumbnail files
import tmb_motionReel from '../../assets/img/motion/reel-c.jpg';
import tmb_legion from '../../assets/img/motion/legion-sqr-2.png';
import tmb_stilltolife from '../../assets/img/motion/still to life-c.png';
import tmb_socialposts from '../../assets/img/motion/graduation.gif';
import tmb_liquidAnimation from '../../assets/img/motion/liquidAnimation.gif';
import tmb_squares from '../../assets/img/motion/squares-c.png';
import tmb_starving from '../../assets/img/motion/starving-c-a.jpg';
import tmb_12principles from '../../assets/img/motion/12principle-1.gif';
import tmb_adler from '../../assets/img/motion/adlerplanetarium-c.png';
import tmb_form from '../../assets/img/motion/form-c-2.png';
import tmb_museum from '../../assets/img/motion/futuristicMuseum-c.png';
import tmb_chicagomemory from '../../assets/img/motion/chicagomemory-c.png';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    spacing: 20,
  },
}));



export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={'wide-wrapper' + " " + classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
          <Thumb 
                link="/motionReel" //project path
                image={tmb_motionReel}
                title="Motion Reel 2019"
                size="x2"
                category="motion graphics"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/Legion"
                image={tmb_legion}
                title="Legion"
                size="x2"
                category="3D Animation"
              />
          </Grid>
        <Grid item xs={6} sm={6} md={3}>
        <Thumb 
                link="/"
                image={tmb_stilltolife}
                title="Still To Life"
                size="x2"
                category="3D Animation"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/"
                image={tmb_socialposts}
                title="miscellaneous"
                size="x2"
                category="2D / Motion Graphics"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/"
                image={tmb_liquidAnimation}
                title="Liquid Animation"
                size="x2"
                category="2D / Cell"
              />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Thumb 
                link="/squares"
                image={tmb_squares}
                title="Squares"
                size="x2"
                category="Motion Graphics"
              />
        </Grid>

        {/* section break */}


        <Grid item xs={12} sm={12} md={6}>
          <Thumb 
                link="/"
                image={tmb_starving}
                title="Motion Reel 2019"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/"
                image={tmb_12principles}
                title="Legion"
                size="x2"
                category="motion"
              />
          </Grid>
        <Grid item xs={6} sm={6} md={3}>
        <Thumb 
                link="/"
                image={tmb_adler}
                title="Still To Life"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/"
                image={tmb_chicagomemory}
                title="miscellaneous"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/"
                image={tmb_form}
                title="Liquid Animation"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Thumb 
                link="/"
                image={tmb_museum}
                title="Squares"
                size="x2"
                category="motion"
              />
        </Grid>
        
        
        
      </Grid>
    </div>
  );
}
