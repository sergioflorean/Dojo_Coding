import React, {Component} from "react";

class Card extends Component{


    render(){
        const {name, img, rating} = this.props;
        return(
            <div className="divCard">
                <img src="URL de la imagen" alt="" />
                <h3>{name}</h3>
                <h4>{rating}</h4>
            </div>

        );
    }
}

export default Card;

/*
tablero.innerHTML += 
`<div> 
<img src=${cartaRandom.img} alt=""> 
<p>${cartaRandom.nombre}</p> 
<p>${cartaRandom.rating}</p> 
</div>`

*/