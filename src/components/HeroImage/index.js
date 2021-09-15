import React from "react";
import "./styles.css";

function Hero({ backgroundImage, title }) {
  return (
    <div>
      <div className="rincon-hero-text">
        <h1>{title}</h1>
      </div>
      <img className="rincon-hero-background" src={backgroundImage} alt="" />
    </div>
  );
}

export default Hero;
