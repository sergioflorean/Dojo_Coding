import React, {Component} from "react";
import PersonCard from "./PersonCard";

class AumentarEdad extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         // edad: 0, 
    //         show: true          
    //     };
        
    // }

    // aumentar = () =>{
    //     this.setState({edad: this.props.edad + 1});
    // }
   

    render(){
        console.log(this.props)
        return (
            <div>
                {/* { this.state.show ? <p>Age:{ this.props.edad }</p> : '' } */}
                <button onClick={this.props.aumentarAños}>aumentar edad</button>
                
            </div>          
        )
    }

}

export default AumentarEdad;