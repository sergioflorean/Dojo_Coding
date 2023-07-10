import React from "react";
import { useParams } from "react-router-dom";

const Location = (props) => {
    const{city}= useParams();

    return (
        <div>
            <h1>Location Loaded! your ciy is: {city}</h1>
        </div>
    );

}

export default Location;