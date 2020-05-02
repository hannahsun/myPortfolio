import React, { useState } from 'react';
// import ReactDOM from 'react-dom'
//carousel
import Carousel from 'react-bootstrap/Carousel'

//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------


function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log(props.imagePool);

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
       {
         props.imagePool.map((i) => 
            <Carousel.Item>
            <img
              className="d-block"
              src={i.url}
              alt={["slide no."+i]}
            />
          </Carousel.Item>
         )
       }
    </Carousel>
  );
}

// ReactDOM.render(<ControlledCarousel />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default ControlledCarousel;
