import React from 'react';
import Grid from '@material-ui/core/Grid';
import Thumb from '../elements/thumb.js';

//import thumbnail files
import tmb_planit from '../../assets/img/graphic/planit.jpg';
import tmb_blackout from '../../assets/img/graphic/blackout.png';
import tmb_bookfes from '../../assets/img/graphic/bookfes.png';
import tmb_salmongold from '../../assets/img/graphic/salmongold.png';
import tmb_mrmuscle from '../../assets/img/graphic/mrmuscle.png';


export default function FullWidthGrid() {
  return (
    <div className="wide-wrapper">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8} md={6}>
          <Thumb 
                link="/planit"
                image= {tmb_planit}
                title="Plan-it Money App"
                category="UI/UX"
              />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Thumb 
                link="/blackout"
                image= {tmb_blackout}
                title="Blackout"
                category="Information Design"
              />
          </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Thumb 
                link="/bookfes"
                image= {tmb_bookfes}
                title="Brooklyn Book Festival"
                category="Visual Identity"
              />
        </Grid>
        
        <Grid item xs={12} sm={4} md={3}>
          <Thumb 
                link="/mrmuscle"
                image= {tmb_mrmuscle}
                title="Mr Muscle"
                category="Visual Identity"
              />
        </Grid>
        
        <Grid item xs={12} sm={8} md={6}>
        <Thumb 
                link="/salmongold"
                image= {tmb_salmongold}
                title="Salmon Gold"
                category="Visual identity"
              />
        </Grid>
        
      </Grid>
    </div>
  );
}
