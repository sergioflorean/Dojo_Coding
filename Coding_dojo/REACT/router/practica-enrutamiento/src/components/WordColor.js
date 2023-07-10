import React from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";

const WordColor = () => {
    const { word2,color1,color2 } = useParams();

    return (

        <div>
            <p style={{color:color1, height:20, backgroundColor:color2}}>Colored word is: {word2}</p>
        </div>

    );

}

export default WordColor;