import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../styles/Tarea.css'

const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {

    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div 
            className="tarea-texto"
            /* onClick={() => completarTarea(id)} */>
                {texto}
            </div>
            <input type="checkbox" onChange={() => completarTarea(id)} />
            <div 
            className="tarea-icono-iconos"
            onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className="tarea-icono"/>
            </div>

        </div>

    );

}

export default Tarea;