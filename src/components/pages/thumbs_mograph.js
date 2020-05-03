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
                category="motion graphics"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/Legion"
                image={tmb_legion}
                title="Legion"
                category="3D Animation"
              />
          </Grid>
        <Grid item xs={6} sm={6} md={3}>
        <Thumb 
                link="/stilltolife"
                image={tmb_stilltolife}
                title="Still To Life"
                category="3D Animation"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/miscellaneous"
                image={tmb_socialposts}
                title="miscellaneous"
                category="2D / Motion Graphics"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/liquidanimation"
                image={tmb_liquidAnimation}
                title="Liquid Animation"
                category="2D / Cell"
              />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Thumb 
                link="/squares"
                image={tmb_squares}
                title="Squares"
                category="Motion Graphics"
              />
        </Grid>

        {/* section break */}


        <Grid item xs={12} sm={12} md={6}>
          <Thumb 
                link="/starving"
                image={tmb_starving}
                title="Starving"
                category="3D Animation"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/12principles"
                image={tmb_12principles}
                title="12 principles of animation"
                category="2D Motion Graphics"
              />
          </Grid>
        <Grid item xs={6} sm={6} md={3}>
        <Thumb 
                link="/adler"
                image={tmb_adler}
                title="Adler Planetarium"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/chicagomemory"
                image={tmb_chicagomemory}
                title="chicago memory"
                category="2D motion graphics"
              />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Thumb 
                link="/form"
                image={tmb_form}
                title="Liquid Animation"
                category="2D / Particle"
              />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Thumb 
                link="/museum"
                image={tmb_museum}
                title="museum of the future"
                category="Motion Graphics"
              />
        </Grid>
        
        
        
      </Grid>
    </div>
  );
}
