import React from 'react';
const DetailDogComponent = props => {
    return(
        <p>You are looking at the dog with id = {props.match.id}</p>
    )
}

export default DetailDogComponent;