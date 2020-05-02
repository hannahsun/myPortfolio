import React, { useState } from 'react';
//carousel
import Carousel from 'react-bootstrap/Carousel'

//define component ------------------------------------------------------------
//-----------------------------------------------------------------------------
function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.petsworld.in/blog/wp-content/uploads/2014/10/Corgi.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://www.petsworld.in/blog/wp-content/uploads/2014/10/Corgi.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src="https://www.petsworld.in/blog/wp-content/uploads/2014/10/Corgi.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default ControlledCarousel;
