import React from 'react';
import Grid from '@material-ui/core/Grid';

function Footer() {
  return (
    <footer>
      <div className="section-wrapper">
         <Grid container spacing={2}> 
              <Grid item xs={12} sm={12} md={2}>
                  <h5 className="light">Social</h5>
                  <ul>
                    <li><a href="">Linkedin</a> </li>
                    <li><a href="">Instagram</a></li>
                  </ul>
              </Grid>
              <Grid item xs={12} sm={12} md={7}>
                  <h5 className="light">Contact</h5>
                  <ul>
                    <li><a href="">sunhanqing@hotmail.com</a></li>
                  </ul>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                    <h5 className="light">Copyright</h5>
                    <ul>
                    <li>© 2020 Hanqing Sun </li>
                  </ul>
              </Grid>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
