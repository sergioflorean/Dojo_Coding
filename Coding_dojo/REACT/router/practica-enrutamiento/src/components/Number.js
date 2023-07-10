import React from "react";
import { Route, Routes, Link, useParams} from "react-router-dom";

const Number = (prop) => {
    const{word}= useParams();

    return (
        <div>
            <p>number is: {word}</p>
        </div>

    );

}

export default Number;