import React, {useState} from "react";
import "../styles/TareaFormulario.css"
import {v4 as uuidv4} from 'uuid';

const TareaFormulario = (props) => {


    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
        console.log(e.target.value);

    }
    const manejarEnvio = e => {
        e.preventDefault();
        console.log("enviandoformulario");
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }
    return(
        <form 
        className="tarea-formulario"
        onSubmit={manejarEnvio}>
            <input 
                type="text" 
                className="tarea-input"
                placeholder="escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            
            />
            <button className="tarea-boton">agregar tarea </button>
        </form>
    );

}

export default TareaFormulario;