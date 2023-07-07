// ImageViewer.js
import React from 'react';

function ImageViewer({ imgUrl, onClose }) {
  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-content">
        <img src={imgUrl} alt="Zoomed Image" />
      </div>
    </div>
  );
}

export default ImageViewer;
