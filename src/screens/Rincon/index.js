import React from "react";
import Main from "../../components/Main";
import rinconBackgroundImage from "../../images/HeroRinconJPG.jpg";
import Hero from "../../components/HeroImage";
import Carousel from "../../components/Carousel";
import rinconImagesArray from "./rincon-images-array.js";

function Rincon() {
  const rinconMainArray = [
    "Ubicado a 7kms del Centro Civico.",
    "Cuenta con dos dormitorios, dos baños, living comedor y cocina.",
    "Pileta climatizada.",
    "Capacidad para 4 personas.",
    "Reciben con ropa de camas y toallas.",
    "Limpieza de cabaña y muda de toallas.",
    "Dispone de espacio para estacionar.",
    "La cabaña esta dentro del complejo Soñador",
  ];

  return (
    <div>
      <Hero
        backgroundImage={rinconBackgroundImage}
        title="CABAÑA RINCON DEL SOÑADOR"
      />
      <Main mainArray={rinconMainArray} />
      <Carousel arrayImages={rinconImagesArray} />
    </div>
  );
}

export default Rincon;
