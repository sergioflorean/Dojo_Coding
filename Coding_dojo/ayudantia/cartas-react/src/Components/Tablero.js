import React, {Component} from "react";
import Card from "./Card";

class Tablero extends Component{
    render(){
        return(
            <div className="tablero">
                <div>
                    <h2>Tablero de Cartas</h2>
                </div>
                <div>
                    <Card name="carol" img="" rating="50" />
                </div>
                <div>
                    <Card name="sergio" img="" rating="24"/>
                </div>
                <div>
                    <Card name="javier" img="" rating="14"/>
                </div>
                
            </div>

        );
    }
}

export default Tablero;