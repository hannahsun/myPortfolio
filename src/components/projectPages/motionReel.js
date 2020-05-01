import React, {useState} from 'react';
import ResponsivePlayer from '../elements/responsivePlayer.js';
//for accordion
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion'
//grid
import Grid from '@material-ui/core/Grid';

import "../../style/projectPage.css"

//custome accorion look for project info section
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );
  const [isActive, setActive] = useState(false);
  const toggleActive = () =>{
    setActive(!isActive)
  }
    return (
      <div
        className={[isActive, "project-accordion-head"].join(" ")}
        style={{ textAlign: "left"}}
        onClick={()=>{
          decoratedOnClick();
          toggleActive()
        }}
      >
        {children}
      </div>
    );
}
function CustomBody({ children, eventKey }) {
    return (
      <div
        className="project-accordion-body"
        style={{ backgroundColor: 'none' }}
      >
        {children}
      </div>
    );
}

function motionReel() {
  return (
    <div className="wide-wrapper">
          
           <div className="section-wrapper nopadding">
           <Accordion>
                <Card>
                  <CustomToggle as={Card.Header} eventKey="0"> 
                      <h5>Project Info </h5>
                      <span className="inline-spacer inline-spacer-s"></span>
                      <div className="icon-more">
                          <span className="stroke-1"></span>
                          <span className="stroke-2"></span>
                      </div>
                  </CustomToggle>
                  <Accordion.Collapse eventKey="0">
                  <CustomBody as={Card.Body} eventKey="0" >
                    <div className="project-info-body-wrapper">
                      <Grid container spacing={2}>
                          <Grid item xs={2} sm={2} md={1}>
                              <div className='light no-select'>Year</div>
                              <div className='light no-select'>Tools</div>
                          </Grid>
                          <Grid item xs={10} sm={5} md={5}>
                              <div>2019</div>
                              <div>After Effects / Cinema4D / Illustrator / Photoshop</div>
                          </Grid>
                          <Grid item xs={12} sm={5} md={6}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                          </Grid>
                        </Grid>
                      </div>
                  </CustomBody>
                  </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
           <ResponsivePlayer url="https://vimeo.com/378175023"/>
    </div>
  );
}

export default motionReel;