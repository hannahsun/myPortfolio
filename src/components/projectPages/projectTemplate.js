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

  //accordion toggle
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('toggle accordion!'),
  );
  const [isActive, setActive] = useState(false); //change plus sign status
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
    <div className="wide-wrapper ">
          
           <div className="section-wrapper nopadding">
           <Accordion >  
             {/* defaultActiveKey="0" to set accordion to be open by default */}

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
                          <CustomBody as={Card.Body} eventKey="1" >
                            <div className="project-info-body-wrapper">
                              <Grid container spacing={2}>
                                  <Grid item xs={4} sm={3} md={2} xl={1}>
                                      <div className='project-info-item lighttext no-select'>{props.Q1}</div>
                                      <div className='project-info-item lighttext no-select'>{props.Q2}</div>
                                      <div className='project-info-item lighttext no-select'>{props.Q3}</div>
                                      <div className='project-info-item lighttext no-select'>{props.Q4}</div>
                                  </Grid>
                                  <Grid item xs={7} sm={5} md={4} xl={3}>
                                      {/* input-1 */}
                                      <div className="project-info-item">{props.A1}</div> 
                                      {/* input-2 */}
                                      <div className="project-info-item">{props.A2}</div>
                                      {/* input-3 */}
                                      <div className="project-info-item">{props.A3}</div>
                                      {/* input-4 */}
                                      <div className="project-info-item">{props.A4}</div>
                                      
                                  </Grid>

                                  <Grid item xs={12} sm={5} md={6} xl={5}>
                                      {/* input-5 */}
                                      {/* {props.description} */}
                                      <div dangerouslySetInnerHTML={{ __html: props.description}}></div>
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