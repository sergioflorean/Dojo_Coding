
import './App.css';
import MyNewComponent from './componets/My NewComponent';
import PersonCard from './componets/PersonCard';
import AumentarEdad from './componets/AumentarEdad';

const App = () => {
  return (
    <div className="App">
      <MyNewComponent title = {"Los Componentes Definidos Como Clases"}/>   
      <PersonCard name = {"Sergio"} lastName={"Florean"} age={132} hair={"black"}/> 
      <PersonCard name = {"Graciela"} lastName={"Chavez"} age={32} hair={"brown"}/>   
      <PersonCard name = {"Alejandra"} lastName={"Florean"} age={23} hair={"black"}/>  
      <PersonCard name = {"Gracie"} lastName={"florean"} age={25} hair={"blonde"}/>
      
    </div>
  );
}

export default App;
