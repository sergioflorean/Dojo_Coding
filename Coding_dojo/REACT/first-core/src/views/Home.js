import React, {Component} from "react";
import Form from "../components/Form";
import ProfileView from "../components/ProfileView";

class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            userName: '',
            email: '',
            addres: '',
        };
    }
    render(){
        const {userName, addres, email} = this.state;
        return(

            <div>
                <h1>Registro</h1>
                <Form 
                userName={userName}
                email={email}
                addres={addres}            
                />
                <ProfileView
                userName={userName}
                email={email}
                addres={addres}   
                />
            </div>
        )
    }


}


export default Home;