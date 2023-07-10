import React from "react";
import Carta from "./Carta";
import { useState } from "react";
import Boton from "./Boton";
import styles from "./Jugador.module.css";

const Tablero = ({ cartasJugadas }) => {
  return (
    <div className={styles.superContenedor}>
      <div className="divTablero">
        <div>
          <h2>Tablero de Juego</h2>
        </div>
        <div className={styles.contenedorDeCartas}>
          {cartasJugadas.map((unaCartaRandom, index) => {
            return (
              <>
                {unaCartaRandom.unJugador}
                <Carta unaCartaRandom={unaCartaRandom} key={index} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tablero;

/*{cartasJugadas.map((unaCartaRandom, index) => (
  {
    return (unaCartaRandom.unJugador
    <Carta
    unaCartaRandom={unaCartaRandom}
    key={index}              
  />)}
)}

{cartasJugadas.map((unaCartaRandom, index) => {
    console.log(`unaCartaRandom.unJugador: ${unaCartaRandom.unJugador}`);
    return ({unaCartaRandom.unJugador}) 
      <Carta
      unaCartaRandom={unaCartaRandom}
      key={index}              
    />
  })}*/
