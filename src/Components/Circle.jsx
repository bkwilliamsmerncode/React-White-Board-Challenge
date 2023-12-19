import React from 'react' 

const Circle = ( {item} ) => {
  return (
    <>
   <div id='cir-whiteboard' style={{left: item.X -40, top: item.Y -40 }}></div>
      
    </>
  )
};

export default Circle
