import React from 'react';
import ResponsivePlayer from '../elements/responsivePlayer.js';
import "../../style/projectPage.css"

function motionReel() {
  return (
    <div className="horizontal-carousel">
           <div className="project-details-wrapper">
                <h5>project info</h5>
                <div className="project-details">
                  <div className="description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </div>
                  <div>2019</div>
                  <div>After Effects Cinema4D Illustrator Photoshop</div>
                </div>
            </div>
           <ResponsivePlayer url="https://vimeo.com/378175023"/>
    </div>
  );
}

export default motionReel;