import React from 'react';
import Grid from '@material-ui/core/Grid';

function Footer() {
  return (
    <footer>
      <div className="section-wrapper">
         <Grid container spacing={2}> 
              <Grid item xs={12} sm={3} md={2} xl={2}>
                  <h5 className="light">Social</h5>
                  <div className="spacer spacer-s"></div>
                  <ul>
                    <li><a className="select" target="_blank" href="https://www.linkedin.com/in/hannah-hanqing-sun-0b3248b4/">Linkedin</a> </li>
                    <li><a className="select" target="_blank"href="https://www.instagram.com/hannah.sun__/">Instagram</a></li>
                  </ul>
              </Grid>
              <Grid item xs={12} sm={5} md={7} xl={7}>
                  <h5 className="light">Contact</h5>
                  <div className="spacer spacer-s"></div>
                  <ul>
                    <li><a className="select" href="mailto:sunhanqing@hotmail.com">sunhanqing@hotmail.com</a></li>
                  </ul>
              </Grid>
              <Grid item xs={12} sm={3} md={3} xl={3}>
                    <h5 className="light">Copyright</h5>
                    <div className="spacer spacer-s"></div>
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
