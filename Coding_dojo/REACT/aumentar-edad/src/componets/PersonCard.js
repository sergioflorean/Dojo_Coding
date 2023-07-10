import React, {Component} from "react";
import AumentarEdad from "./AumentarEdad";

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.aumentarAños=this.aumentarAños.bind(this)
        this.state={
            age: this.props.age
        };
    }

    aumentarAños = () =>{
        this.setState({age: this.state.age + 1});
    }

    render (){
        return(
        <div >
            <h2> {this.props.name} {this.props.lastName}</h2>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hair}</p>
            <button onClick={this.aumentarAños}>birthday button for {this.props.name} {this.props.lastName} </button>
            <AumentarEdad edad={this.props.age} aumentarAños={this.aumentarAños.bind(this)}/>
        </div>
        )
    }
}

export default PersonCard;