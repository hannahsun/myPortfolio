import React, {createRef} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );
    return (
      <div
        // type="button"
        className="accordion-head"
        style={{ textAlign: "left"}}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
}
function CustomBody({ children, eventKey }) {
    return (
      <div
        className="accordion-body"
        style={{ backgroundColor: 'none' }}
      >
        {children}
      </div>
    );
}

function About() {
  return (
    <div className="about">
        <div className="section-wrapper">       
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={7}>
              <div className = "aboutme">
                <h5>About</h5>
                <div className="spacer spacer-s"></div>
                <h3 className="m-dynamic">
                Hello There! I’m Hannah, A New York Based Visual Designer Currently Pursuing An MFA On Computer Arts At School Of Visual Arts. I’m Passionate About Learning, Ideating, And Making Beautiful Graphics. If I Don’t Know Something, I Try To Wrap My Head Around It Quickly.
                <br/>
                Below Is A Little Bit More About Me: 
                </h3>

                <Accordion defaultActiveKey="0">
                    <Card>
                      <CustomToggle as={Card.Header} eventKey="0">
                            Education
                      </CustomToggle>
                      <Accordion.Collapse eventKey="0">
                      <CustomBody as={Card.Body} eventKey="0" >
                            <p>
                            School of Visual Arts / New York, U.S.<br/>
                            Master of Fine Arts<br/>
                            2019—2021 | Computer Arts
                            </p>
                      </CustomBody>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <CustomToggle as={Card.Header} eventKey="1">
                            Education
                      </CustomToggle>
                      <Accordion.Collapse eventKey="1">
                      <CustomBody as={Card.Body} eventKey="1">
                            School of Visual Arts / New York, U.S.<br/>
                            Master of Fine Arts<br/>
                            2019—2021 | Computer Arts
                      </CustomBody>
                      </Accordion.Collapse>
                    </Card>

                   
                </Accordion>

              </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
                <h5>Contact</h5>
                <div className="spacer spacer-s"></div>
                <ul>
                    <li><a className="select" target="_blank" href="">sunhanqing@hotmail.com</a> </li>
                    <li><a className="select" target="_blank" href="https://www.linkedin.com/in/hannah-hanqing-sun-0b3248b4/">Linkedin</a> </li>
                    <li><a className="select" target="_blank"href="https://www.instagram.com/hannah.sun__/">Instagram</a></li>
                </ul>
          </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default About;
