import React, { useState } from 'react';

function PhotoBox(props) {
  const [isZoomed, setIsZoomed] = useState(false);



  return (
    <div className='photo-booth' onClick={() => setIsZoomed(!isZoomed)}>
      <img src={props.img} className='photobox-image' alt='Photo' title={"IIT DHARWAD"} />


      {isZoomed && (
        <div className='zoomed-image-overlay' onClick={() => setIsZoomed(!isZoomed)}>

          <img src={props.img} className='zoomed-image' alt='Zoomed Photo' onClick={() => setIsZoomed(!isZoomed)} />
        </div>
      )}
    </div>
  );
}

export default PhotoBox;
