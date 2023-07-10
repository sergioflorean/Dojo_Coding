import React, {Component} from "react";

class MyNewComponent extends Component{
    render(){
        return(           
            <div>
                <h1> {this.props.title}</h1>
            </div>   
        )
    }
} 



export default MyNewComponent;
