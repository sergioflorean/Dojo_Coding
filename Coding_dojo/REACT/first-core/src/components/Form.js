import React,{Component} from "react";

class Form extends Component{
    render (){
        const{userName,email,addres}=this.props;
        return(
            <form action="">
                <label htmlFor="userName"  >usuario</label>
                <input type="text" placeholder="Ej. Sergio Florean" name="userName" value={userName}/>
                <label htmlFor="email" >correo</label>
                <input type="email" placeholder="Ej. sergio_florean@hotmail.com" name="email" value={email}/>
                <label htmlFor="addres"  >direccion</label>
                <textarea id="" placeholder="manuel aguirre num 115" cols="30" rows="10" name="addres" value={addres}></textarea>
                <button type="submit">submit</button>
            </form>
        )
    }


}

export default Form;