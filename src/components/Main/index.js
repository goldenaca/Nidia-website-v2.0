import React from "react";
import "./styles.css";

function Main({ mainArray }) {
  return (
    <div className="rincon-main-container">
      <div className="rincon-info-container">
        <ul className="rincon-info-column">
          <li>
            <i className="fas fa-map-marked-alt"></i>
            {mainArray[0]}
          </li>
          <li>
            <i className="fas fa-home"></i>
            {mainArray[1]}
          </li>
          <li>
            <i className="fas fa-swimming-pool"></i>
            {mainArray[2]}
          </li>
          <li>
            <i className="fas fa-bed"></i>
            {mainArray[3]}
          </li>
        </ul>
        <ul className="rincon-info-column">
          <li>
            <i className="fas fa-tshirt"></i>
            {mainArray[4]}
          </li>
          <li>
            <i className="fas fa-broom"></i>
            {mainArray[5]}
          </li>
          <li>
            <i className="fas fa-car-alt"></i>
            {mainArray[6]}
          </li>
          <li>
            <i className="fas fa-home"></i>
            {mainArray[7]}
          </li>
        </ul>
      </div>
      <iframe
        className="rincon-map"
        title="soñador-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d751.3966794843176!2d-71.38597394794446!3d-41.12171619531259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a709f1d98afc9%3A0xa215f648c6b1368c!2zQ2FiYcOxYXMgU2_DsWFkb3I!5e0!3m2!1sen!2sar!4v1619727036639!5m2!1sen!2sar"
        width="90%"
        height="600vh"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Main;
