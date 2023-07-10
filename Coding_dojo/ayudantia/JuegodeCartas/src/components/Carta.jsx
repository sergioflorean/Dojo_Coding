import React from "react";
import styles from "./Carta.module.css";

const Carta = ({ unaCartaRandom, juegaCarta }) => {
  return (
    <div className={styles.divCarta}>
      <img
        onClick={() => juegaCarta(unaCartaRandom)}
        src={unaCartaRandom.img}
      />
      <h3>{unaCartaRandom.name}</h3>
      <h4>{unaCartaRandom.rating}</h4>
    </div>
  );
};

export default Carta;

/* tablero.innerHTML += 
`<div> 
<img src=${cartaRandom.img} alt=""> 
<p>${cartaRandom.nombre}</p> 
<p>${cartaRandom.rating}</p> 
</div>`*/
