import React, { Component } from "react"

const Boton = ({ repartirLasCartas }) => 
    {
        return (
            <div className="divRepartir">
                <button onClick={repartirLasCartas} >Repartir Cartas</button>
            </div>
        )
    };


export default Boton
