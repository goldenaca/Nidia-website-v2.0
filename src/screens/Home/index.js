import React from "react";
import { Link } from "react-router-dom";
import VideoSrc from "../../videos/HeroBackground.mp4";
import "./styles.css";
import imgSource from "../../images/nidia.jpg";

function Hero() {
  "https://www.youtube.com/embed/xGMnFa5cVNQ?controls=0&amp;start=47";

  function comenzarHandler() {
    window.scrollTo(0, 950);
  }
  function fullVideoHandler() {
    window.location.href =
      "https://www.youtube.com/watch?v=xGMnFa5cVNQ&t=46s&ab_channel=Jos%C3%A9LopezRouger";
    return null;
  }

  return (
    <div className="hero">
      <div className="hero-content-container">
        <h1 className="hc-title">¿PREPARADO PARA LA AVENTURA?</h1>
        <p className="hc-text">
          Alojate en nuestras cabañas y disfruta de unas vacaciones soñadas en
          nuestra hermosa ciudad San Carlos de Bariloche.
        </p>
        <div className="hc-buttons-container">
          <Link className="button info">
            <p onClick={comenzarHandler}>Comenzar</p>
          </Link>
          <Link to="/" className="button video">
            <p onClick={fullVideoHandler}>Full Video</p>
          </Link>
        </div>
      </div>
      <video className="background-video" autoPlay muted loop>
        <source src={VideoSrc} type="video/mp4"></source>
      </video>
    </div>
  );
}

function Main() {
  return (
    <div>
      <div className="main-container">
        <img className="main-image" src={imgSource} alt="" />
        <div className="main-text-container">
          <h1>Hola, Bienvenidos...</h1>
          <p>
            Trabajamos en turismo desde hace mas de diez años, Con muy buena
            predisposición para lograr una buena estadía de los visitantes.
            Pueden escribirnos, ademas de en español, en inglés o portugues. Hi,
            you can write us in portuges or english, we will do our best!
          </p>
        </div>
      </div>
      <div className="lines"></div>
    </div>
  );
}

function Cards() {
  function cardButtonHandler() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="cards-container">
      <div className="card-image soñador">
        <div className="card-text-container">
          <h1> SOÑADOR DEL ARRAYAN </h1>
          <ul className="card-list">
            <li>
              <i class="fas fa-map-marked-alt"></i>
              <p>Ubicada a 7kms del Centro civico</p>
            </li>
            <li>
              <i class="fas fa-swimming-pool"></i>
              <p>Pileta climatizada.</p>
            </li>
            <li>
              <i class="fas fa-users"></i>
              <p> Capacidad para 6 - 7 personas.</p>
            </li>
            <li>
              <i class="fas fa-home"></i>
              <p>
                Cuenta con dos dormitorios, dos baños, living comedor y cocina.
              </p>
            </li>
          </ul>
          <Link to="/soñador-del-arrayan" className="card-button">
            <p onClick={cardButtonHandler}>MAS INFORMACION </p>
          </Link>
        </div>
      </div>

      <div className="card-image rincon">
        <div className="card-text-container">
          <h1> RINCON DEL SOÑADOR </h1>
          <ul className="card-list">
            <li>
              <i className="fas fa-map-marked-alt"></i>
              <p>Ubicada a 7kms del Centro civico</p>
            </li>
            <li>
              <i className="fas fa-swimming-pool"></i>
              <p>Pileta climatizada.</p>
            </li>
            <li>
              <i className="fas fa-users"></i>
              <p> Capacidad para 4 personas.</p>
            </li>
            <li>
              <i className="fas fa-home"></i>
              <p>
                Cuenta con dos dormitorios, dos baños, living comedor y cocina.
              </p>
            </li>
          </ul>
          <Link to="/rincon-del-soñador" className="card-button">
            <p onClick={cardButtonHandler}>MAS INFORMACION </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <Main />
      <Cards />
    </div>
  );
}

export default Home;
