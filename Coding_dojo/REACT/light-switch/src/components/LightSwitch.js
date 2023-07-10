import React, {Component} from "react";

class LightSwitch extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: "On"
        };
    }
    flipSwitch = () => {
            if( this.state.position === "On" ) {
                this.setState({ position: "Off" });
            } else {
                this.setState({ position: "On" });
            }
    }
    render(){
        return(
            <fieldset>
                <p>{this.state.position}</p>
                <button onClick={ this.flipSwitch }>Flip Switch</button>
            </fieldset>
        );
    }
    // este método va dentro del componente LightSwitch
    
    
}

export default LightSwitch;
