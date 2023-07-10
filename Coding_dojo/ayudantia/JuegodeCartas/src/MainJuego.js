import React, { useState } from "react"
import "./MainJuego.css"
import Jugador from "./components/Jugador"
import TableroDeJuego from "./components/TableroDeJuego"


function MainJuego() {

    const [cartasJugadas, setcartasJugadas] = useState([]);

    const jugarEnTablero = (unJugadorYCarta) => {

        setcartasJugadas([...cartasJugadas, unJugadorYCarta]);
        //setcartasJugadas([carta]);


    }
    return (
        <div className="MainJuego">
            <Jugador jugador={"jugador1"} jugarEnTablero={jugarEnTablero} />
            <TableroDeJuego cartasJugadas={cartasJugadas} />
            <Jugador jugador={"jugador2"} jugarEnTablero={jugarEnTablero} />
        </div>
    )
}

export default MainJuego

// class CartaPersonaje {

//   constructor(nombre, rating, img) {
//       this.nombre = nombre;
//       this.rating = rating;
//       this.img = img;
//   }

// }

/*misPersonajesDatos.forEach(personajeDeLaLista => {

   cada vez que se crea un objeto se agrega a la lista misPersonajesDatos */

//forma corta
// cartasPersonajesObjetos.push(new CartaPersonaje(personajeDeLaLista.name, personajeDeLaLista.rating, personajeDeLaLista.img))})
