import React, {useState} from "react";
import Content from "./Content";

const Btn = ({text, id, contenido}) => {
    const [content, setContent] = useState(["content1", "content2", "content3"]);
    const filtro = content.filter((content,index) => index === id )
    

    const onClick = (e) => {
        console.log('funciona');
        
        console.log(filtro);
        
        return<>{filtro}</>
        
    }
    return (

        <button onClick={onClick}>{text}</button>
        
    )
}




export default Btn;