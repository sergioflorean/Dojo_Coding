import React, { useState } from "react";
import styles from "./Pokemons.module.css"

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const fetchPokemon = async () => {

        const URLPokemon = "https://pokeapi.co/api/v2/pokemon";

        try {
            const response = await fetch(URLPokemon);
            const data = await response.json();
            setPokemons(data.results)
        }
        catch (error) {        
        }
    }


    return (
        <div className={styles.contenedor}>
            <button onClick={fetchPokemon}>send pokemon</button>
            <ul>
                <ul>
                    {pokemons.map((p) => (
                        <li key={p.name}>
                            {p.name}
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    )


}

export default Pokemons;