import React, {useState} from 'react';
import ResponsivePlayer from '../elements/responsivePlayer.js';
//Accordion
import Card from 'react-bootstrap/Card'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Accordion from 'react-bootstrap/Accordion'
//carousel
import Carousel from 'react-bootstrap/Carousel'
//grid
import Grid from '@material-ui/core/Grid';
//custom styling
import "../../style/projectPage.css"

//custom accordion look for project info section
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('toggle accordion!'),
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
//custom accordion body style
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


//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------

function Project(props) {
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
                          <Grid item xs={3} sm={2} md={1} xl={1}>
                              <div className='project-info-item light no-select'>Project</div>
                              <div className='project-info-item light no-select'>Tools</div>
                          </Grid>
                          <Grid item xs={7} sm={5} md={4} xl={3}>
                              {/* input-1 */}
                              <div className="project-info-item">{props.name}</div> 
                              {/* input-2 */}
                              <div className="project-info-item">{props.tools}</div>
                          </Grid>
                          <Grid item xs={12} sm={5} md={7} xl={8}>
                              {/* input-3 */}
                              {props.description}
                          </Grid>
                        </Grid>
                      </div>
                  </CustomBody>
                  </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
           {/* <ResponsivePlayer url={props.videoLink}/> */}
    </div>
  );
}


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------

export default Project;