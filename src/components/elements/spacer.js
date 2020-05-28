import React from 'react';

function Spacer(props) {
const spacerStyle={
  width:'100%',
  height:[props.height],
  minHeight:[props.min],
  maxHeight:[props.max]
}
  return (
    <div style={spacerStyle}></div>
  );
}

export default Spacer;
