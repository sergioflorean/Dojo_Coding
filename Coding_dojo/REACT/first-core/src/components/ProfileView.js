import React, {Component} from "react";

class ProfileView extends Component{
    render(){
        const {userName, addres, email} = this.props;
        return(
            <h1>{userName}</h1>

        )
    }
}

export default ProfileView;