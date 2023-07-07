import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Gallery(props) {
  const [images, setImages] = useState("https://img.freepik.com/premium-vector/icon-mans-face-with-light-skin_238404-886.jpg");

  function uploadMypic(){
    setImages("http://localhost:3001/stream/"+props.email)
  }

  return (
    <div className="container">


      <div className="row">
        <img
          src={images}
          className="profile-image-biodata"
        />

      </div>
    </div>
  );
}

export default Gallery;
