import React, { useState } from "react";
import styles from "./ChoosingForm.module.scss"
import { useParams, useNavigate } from 'react-router-dom';
import ListApi from "./ListApi";

const ChoosingForm = () => {
    const [chooseId, setChooseId] = useState("");
    const [selected, setSelected] = useState("people");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setChooseId(e.target.value)
        console.log(e.target.value);

    }

    const handleChangeSelect = (e) => {
        setSelected(e.target.value)
        console.log(e.target.value)

    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log("buscando");
        navigate(`/${selected}/${chooseId}`)

    }

    return (
        <div className={styles["form-container"]}>
            <form onSubmit={handleOnSubmit} >
                <label >Search for: </label>
                <select className={styles["select"]} onChange={handleChangeSelect} >
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="starship">Starships</option>
                    

                </select>
                <label htmlFor="id">id: </label>
                <input type="text" name="id" onChange={handleChange}  />
                <input type="submit" value="submit" />
            </form>
            
            {/* <div>
                <ListApi id={handleChange} selected={handleChangeSelect} />
            </div> */}
        </div>
     
    );
}

export default ChoosingForm;
