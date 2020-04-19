import React from 'react';
import Grid from '@material-ui/core/Grid';
import Thumb from '../thumbComponent/thumb.js';

function About() {
  return (
    <div className="about">
        <div className="section-wrapper">
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
              <div className = "aboutme">
                <h5>About</h5>
                <h3>
                Hello There! I’m Hannah, A New York Based Visual Designer Currently Pursuing An MFA On Computer Arts At School Of Visual Arts. I’m Passionate About Learning, Ideating, And Making Beautiful Graphics. If I Don’t Know Something, I Try To Wrap My Head Around It Quickly.
                Below Is A Little Bit More About Me: 
                </h3>
              </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
                <h5>Contact</h5>
                <p>
                 <a href="">sunhanqing@hotmail.com</a> <br/>
                 <a href="">Linkedin</a>
                 <br/>
                 <br/>
                 <br/>
                 <span id="copyright">© 2020 Hanqing Sun</span>
                </p>

          </Grid>
          
        
        
      </Grid>
      </div>
    </div>
  );
}

export default About;
