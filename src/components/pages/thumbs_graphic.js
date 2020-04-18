import React from 'react';
import Grid from '@material-ui/core/Grid';
import Thumb from '../thumbComponent/thumb.js';




export default function FullWidthGrid() {
  return (
    <div className="wide-wrapper">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={8} md={6}>
          <Thumb 
                link="/motionReel"
                image="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"
                title="Motion Reel 2019"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Thumb 
                link="/motionReel"
                image="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"
                title="Motion Reel 2019"
                size="x2"
                category="motion"
              />
          </Grid>
        <Grid item xs={12} sm={4} md={3}>
        <Thumb 
                link="/motionReel"
                image="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"
                title="Motion Reel 2019"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Thumb 
                link="/motionReel"
                image="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"
                title="Motion Reel 2019"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Thumb 
                link="/motionReel"
                image="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"
                title="Motion Reel 2019"
                size="x2"
                category="motion"
              />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Thumb 
                link="/motionReel"
                image="https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"
                title="Motion Reel 2019"
                size="x2"
                category="motion"
              />
        </Grid>
        
        
      </Grid>
    </div>
  );
}
