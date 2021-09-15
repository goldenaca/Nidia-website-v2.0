import React from "react";
import "./styles.css";

function Carousel({ arrayImages }) {
  const [imageR, setImageR] = React.useState(0);

  function leftButtonGalleryHandler() {
    if (imageR > 0 && imageR <= arrayImages.length - 1) setImageR(imageR - 1);
    if (imageR === 0) setImageR(arrayImages.length - 1);
  }
  function rightButtonGalleryHandler() {
    if (imageR >= 0 && imageR < arrayImages.length - 1) setImageR(imageR + 1);
    if (imageR === arrayImages.length - 1) setImageR(0);
  }

  return (
    <div className="carousel-container">
      <div onClick={leftButtonGalleryHandler} className="carousel-button">
        <i className="fas fa-angle-left" />
      </div>
      <img className="carousel-image" src={arrayImages[imageR]} alt="" />
      <div onClick={rightButtonGalleryHandler} className="carousel-button">
        <i className="fas fa-angle-right" />
      </div>
    </div>
  );
}

export default Carousel;
