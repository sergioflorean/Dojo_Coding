import React, {Component} from "react";

class PersonCard extends Component{
    render (){
        return(
        <div className="person">
            <h2> {this.props.name} {this.props.lastName}</h2>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hair}</p>
            <input type="text" placeholder="Quieres crear una cuenta..."/>
            <button>sign up</button>
            
        </div>
        )
    }
}

export default PersonCard;