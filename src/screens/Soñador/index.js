import React from "react";
import Main from "../../components/Main";
import Hero from "../../components/HeroImage";
import soñadorBackgroundImage from "../../images/HeroSoñadorPNG.png";
import Carousel from "../../components/Carousel";
import soñadorImagesArray from "./soñador-images-array";

function Rincon() {
  const soñadorMainArray = [
    "Ubicado a 7kms del Centro Civico.",
    "Cuenta con dos dormitorios, dos baños, living comedor y cocina.",
    "Pileta climatizada.",
    "Capacidad para 6 o 7 personas.",
    "Reciben con ropa de camas y toallas.",
    "Limpieza de cabaña y muda de toallas.",
    "Dispone de espacio para estacionar.",
    "La cabaña esta dentro del complejo Soñador",
  ];
  return (
    <div>
      <Hero
        backgroundImage={soñadorBackgroundImage}
        title="CABAÑA SOÑADOR DE ARRAYAN"
      />
      <Main mainArray={soñadorMainArray} />
      <Carousel arrayImages={soñadorImagesArray} />
    </div>
  );
}

export default Rincon;
