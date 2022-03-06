import React from 'react';
import { makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import { MuiThemeProvider as V0MuiThemeProvider} from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Thumb from '../elements/thumb.js';
import mytheme from '../../style/mytheme.js'
import GoTop from '../elements/goTop.js';
//import thumbnail files
import tmb_motionReel from '../../assets/img/motion/motionreel-2020-cover.png';
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
import tmb_blend from '../../assets/img/motion/blend3015.jpg';
import tmb_passage from '../../assets/img/motion/passage.jpg';
import tmb_coffee from '../../assets/img/motion/content-coffee/coffee_still_01.png';
import tmb_2020opening from '../../assets/img/motion/content-2020opening/2020opening_1.png';
import tmb_basketball from '../../assets/img/motion/basketball-1.png';
import tmb_marbleglass from '../../assets/img/motion/content-marbleglass/marbleglass-1.png';
import tmb_spider from '../../assets/img/motion/spider-c.png';
import tmb_desktop from '../../assets/img/motion/content-desktop/desktop-1.png';
import tmb_machine from '../../assets/img/motion/machine-1.png';
import tmb_notification from '../../assets/img/motion/notification-1.png';
import tmb_hanukkah from '../../assets/img/motion/content-hanukkah/hanukkah_1.png';
import tmb_whatever from '../../assets/img/motion/content-whatever/ig-3.png';
import tmb_sva2021 from '../../assets/img/motion/content-sva2021/sva-5.png';
import tmb_organism from '../../assets/img/motion/content-organism/growth-2.png';
import tmb_pencil from '../../assets/img/motion/content-pencil/pencil-1.png';
import tmb_blip from '../../assets/img/motion/content-blip/blip-2.png';
import tmb_1k from '../../assets/img/motion/content-1k/1k-2.png';
import tmb_star from '../../assets/img/motion/content-star/star-2.png';
import tmb_chaseuso from '../../assets/img/motion/content-chaseuso/chase-2.png';

//import thumbnail files
import tmb_planit from '../../assets/img/graphic/planit.png';
import tmb_blackout from '../../assets/img/graphic/content-blackout/blackout_5.jpg';
import tmb_bookfes from '../../assets/img/graphic/bookfes.png';
import tmb_salmongold from '../../assets/img/graphic/salmongold.png';


// const mytheme = createMuiTheme({
//   spacing: 10
// });



const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'red',
    flexGrow: 1,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    
    <MuiThemeProvider theme={mytheme}>
    <V0MuiThemeProvider theme={mytheme}>
          <div className={'wide-wrapper' + " " + classes.root}>
            <GoTop />
            <Grid container spacing={1} >
            <Grid item xs={12} sm={12} md={3}>
                <Thumb 
                      link="/star" //project path
                      image={tmb_star}
                      title="WFH"
                      category="2021"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <Thumb 
                      link="/1k" //project path
                      image={tmb_1k}
                      title="1K"
                      category="2021"
                    />
              </Grid>
              
              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/blip" //project path
                      image={tmb_blip}
                      title="Blip"
                      category="2021"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/chaseuso" //project path
                      image={tmb_chaseuso}
                      title="Chase US Open"
                      category="2021"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/motionReel" //project path
                      image={tmb_motionReel}
                      title="Motion Reel 2020"
                      category="2020"
                    />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Thumb 
                      link="/pencil" //project path
                      image={tmb_pencil}
                      title="Pencil"
                      category="2021"
                    />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Thumb 
                      link="/organism" //project path
                      image={tmb_organism}
                      title="Organism"
                      category="2021"
                    />
              </Grid>


              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/hanukkah" //project path
                      image={tmb_hanukkah}
                      title="The Festival of Lights"
                      category="2020"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/marbleglass" //project path
                      image={tmb_marbleglass}
                      title="Marbleglass"
                      category="2020"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <Thumb 
                      link="/desktop" //project path
                      image={tmb_desktop}
                      title="Workstation"
                      category="2020"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <Thumb 
                      link="/basketball" //project path
                      image={tmb_basketball}
                      title="Halftime"
                      category="2020"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/coffee" //project path
                      image={tmb_coffee}
                      title="Coffee Time"
                      category="2020"
                    />
              </Grid>


              {/* <Grid item xs={12} sm={12} md={3}>
                <Thumb 
                      link="/notification" //project path
                      image={tmb_notification}
                      title="New Message"
                      category="2020"
                    />
              </Grid> */}


              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/sva2021" //project path
                      image={tmb_sva2021}
                      title="SVA Showreel Intro"
                      category="2021"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/whatever" //project path
                      image={tmb_whatever}
                      title="Dumpster"
                      category="stuff that never saw the light :')"
                    />
              </Grid>
              
              <Grid item xs={12} sm={12} md={3}>
                <Thumb 
                      link="/spider" //project path
                      image={tmb_spider}
                      title="Spider"
                      category="2020"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={3}>
                <Thumb 
                      link="/machine" //project path
                      image={tmb_machine}
                      title="Rube Goldburg Machine"
                      category="2020"
                    />
              </Grid>
             

                <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/2020opening" //project path
                      image={tmb_2020opening}
                      title="demoreel opening"
                      category="2020"
                    />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/passage" //project path
                      image={tmb_passage}
                      title="Passage"
                      category="2020"
                    />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/museum"
                      image={tmb_museum}
                      title="museum of the future"
                      category="2019"
                    />
              </Grid>

              <Grid item xs={6} sm={6} md={3}>
              <Thumb 
                      link="/stilltolife"
                      image={tmb_stilltolife}
                      title="Still To Life"
                      category="2020"
                    />
              </Grid>


                <Grid item xs={6} sm={6} md={3}>
                <Thumb 
                      link="/blend"
                      image={tmb_blend}
                      title="Blend 3015"
                      category="2020"
                    />
                </Grid>


                <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/squares"
                      image={tmb_squares}
                      title="Squares"
                      category="2019"
                    />
              </Grid>

                <Grid item xs={12} sm={12} md={6}>
                <Thumb 
                      link="/chicagomemory"
                      image={tmb_chicagomemory}
                      title="chicago memory"
                      category="2019"
                    />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
              <Thumb 
                    link="/blackout"
                    image= {tmb_blackout}
                    title="Blackout"
                    category="2018 / Information Design"
                  />
              </Grid>        
          
            {/* <Grid item xs={12} sm={12} md={6}>
            <Thumb 
                    link="/salmongold"
                    image= {tmb_salmongold}
                    title="Salmon Gold"
                    category="2018 / Visual identity"
                  />
            </Grid> */}
              

            </Grid>
          </div>
          </V0MuiThemeProvider>
    </MuiThemeProvider>
  );
}
