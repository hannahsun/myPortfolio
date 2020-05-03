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
  const carouselRatio = {
    width: '100%',
    height: [100 * props.ratio + 'vw']
  }

    const paddedSection=(e)=>{
      if(e == true){
          return 'padded-wrapper'
      }else{
        return 'nopadding'
      }
    }
    const paddingStyle = paddedSection(props.isPadded);


  return (
    <div className={paddingStyle}>
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
       {
         props.imagePool.map((item,i) => (
            <Carousel.Item key={i} style={carouselRatio}>
            <img
              className="d-block"
              src={item.url}
              alt={["slide no."+i]}
            />
          </Carousel.Item>
        ))
       }
    </Carousel>
    </div>
  );
}

// ReactDOM.render(<ControlledCarousel />);


//export component ------------------------------------------------------------
//-----------------------------------------------------------------------------
export default ControlledCarousel;
