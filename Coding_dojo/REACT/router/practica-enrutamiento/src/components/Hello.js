import React from "react";
import { useParams } from "react-router-dom";

const Hello= (props) =>{

    const{word} = useParams();

    return(
        <div>
            <p>word is: {word}</p>
        </div>
    );

}

export default Hello;