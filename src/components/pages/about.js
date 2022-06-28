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
                    <div className="spacer spacer-m"></div>
                    {/* <h3 className="m-dynamic"> */}
                    <h3 >
                    Hello there! I'm Hannah, a multi-disciplinary designer and animator currently based in NYC. I'm passionate about learning, ideating, and making beautiful graphics.
                    <br/>
                    Below is a little more about me ☟  
                    </h3>
                    <div className="spacer spacer-m"></div>
                    {/* <Accordion defaultActiveKey="0"> */}
                    <Accordion>
                        <Card>
                          <CustomToggle as={Card.Header} eventKey="0">
                                Experience
                          </CustomToggle>
                          <Accordion.Collapse eventKey="0">
                          <CustomBody as={Card.Body} eventKey="0" >
                          <ul>
                                <li>
                                <span className="emphasis">BUCK</span><br/>
                                Mar. 2022 - Present  /  Animator <br/>
                                Dec. 2021 — Feb. 2022  /  Junior 2D Animator <br/>
                                Jun. — Nov. 2021  /  2D Apprentice <br/>
                                </li>
                                <li>
                                <span className="emphasis">Hornet</span><br/>
                                Jun. — Dec. 2020  /  Motion Design Intern <br/>
                                </li>
                                <li>
                                <span className="emphasis">Ogilvy</span><br/>
                                Aug. 2018 — May 2019  /  Designer <br/>
                                May — Aug. 2018  /  Design Intern<br/>
                                </li>
                                <li>
                                <span className="emphasis">SAIC Marketing & Graphics</span><br/>
                                Jan. — May 2018  /  Designer
                                </li>
                                <li>
                                <span className="emphasis">F Newsmagazine</span><br/>
                                Sept. 2017 — May 2018  /  Designer & Illustrator
                                </li>
                                <li>
                                <span className="emphasis">Tom, Dick & Harry Co.</span><br/>
                                Jun. — Aug. 2016  /  Graphic Design Intern
                                </li>
                                {/* <li>
                                <span className="emphasis">SAIC IRFM Creative</span><br/>
                                Jun. 2015 — Jun. 2017  /  Graphic Designer
                                </li> */}
                            </ul>
                          </CustomBody>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <CustomToggle as={Card.Header} eventKey="1">
                                Skills
                          </CustomToggle>
                          <Accordion.Collapse eventKey="1">
                          <CustomBody as={Card.Body} eventKey="1">
                            <ul>
                                <li>
                                <span className="emphasis">Software & Programming</span><br/>
                                After Effects / Cinema4D / Illustrator / Photoshop / Indesign /
                                HTML & CSS / Javascript
                                <br/>
                                </li>
                                <li>
                                <span className="emphasis">General</span><br/>
                                Motion Graphics / Graphic Design / Illustration / Branding / Art Direction
                                </li>
                            </ul>
                          </CustomBody>
                          </Accordion.Collapse>
                        </Card>

                        <Card>
                          <CustomToggle as={Card.Header} eventKey="2">
                                Education
                          </CustomToggle>
                          <Accordion.Collapse eventKey="2">
                          <CustomBody as={Card.Body} eventKey="2">
                          <ul>
                                <li>
                                <span className="emphasis">School of Visual Arts</span> / New York, U.S.<br/>
                                Master of Fine Arts<br/>
                                2019—2021 | Computer Arts
                                </li>
                                <li>
                                <span className="emphasis">School of the Art Institute of Chicago</span> / Chicago, U.S.<br/>
                                Bachelor of Fine Arts<br/>
                                2015—2018 | Visual Communication Design
                                </li>
                                <li>
                                <span className="emphasis">Donghua University</span> / Shanghai, China<br/>
                                2013—2014 | Automation Engineering, School of Information Science & Technology
                                </li>
                              </ul>
                          </CustomBody>
                          </Accordion.Collapse>
                        </Card>

                        {/* <Card> 
                          <CustomToggle as={Card.Header} eventKey="3">
                                Recognitions
                          </CustomToggle>
                          <Accordion.Collapse eventKey="3">
                          <CustomBody as={Card.Body} eventKey="3">
                            <ul>
                                <li>
                                <span className="emphasis">Pinnacle awards</span><br/>
                                'The Journey to a Voice '/ Best Magazine Cover<br/>
                                  3rd place / F Newsmagazine March 2018
                                </li>
                                <li>
                                <span className="emphasis">Excellence in Illinois College Newspapers</span> / Illinois College Press Association<br/>
                                'Creative Process' / Full-page Advertisement<br/>
                                1st place / F Newsmagazine October 2017
                                </li>
                                <li>
                                <span className="emphasis">In-House Design Award 2017</span> / Graphic Design USA<br/>
                                IRFM Creative Team Awarded pieces include SAIC ExTV Poster, SAIC ExTV PolyPlay 2016 Poster and SAIC HVAC Infographic
                                </li>
                                <li>
                                <span className="emphasis">Merit Scholarship</span>  / School of the Art Institute of Chicago
                                </li>
                            </ul>
                          </CustomBody>
                          </Accordion.Collapse>
                        </Card>
                        */}
                    

                      
                    </Accordion>
                    <div className="spacer spacer-m"></div>
                  </div>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                    <h5>Contact</h5>
                    <div className="spacer spacer-m"></div>
                    <ul className="contact" >
                        <li><a className="select" target="_blank" href="mailto:sunhanqing@hotmail.com">sunhanqing@hotmail.com</a> </li>
                        <li><a className="select" target="_blank" href="https://www.linkedin.com/in/hannah-hanqing-sun-0b3248b4/">Linkedin</a> </li>
                        <li><a className="select" target="_blank"href="https://www.instagram.com/hannah.sun__/">Instagram</a></li>
                    </ul>
              </Grid>
          </Grid>
            <div className="spacer spacer-l"></div>
        </div>
    </div>
  );
}

export default About;
