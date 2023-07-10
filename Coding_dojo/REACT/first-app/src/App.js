
import './App.css';
import MyNewComponent from './componets/My NewComponent';
import PersonCard from './componets/PersonCard';

const App = () => {
  return (
    <div className="App">
      <MyNewComponent title = {"Los Componentes Definidos Como Clases"}/>   
      <PersonCard name = {"Sergio"} lastName={"Florean"} age={"32"} hair={"black"}/>
      <PersonCard name = {"Graciela"} lastName={"Chavez"} age={"60"} hair={"brown"}/>
      <PersonCard name = {"Alejandra"} lastName={"Florean"} age={"35"} hair={"black"}/>
      <PersonCard name = {"Gracie"} lastName={"florean"} age={"38"} hair={"blonde"}/>
    </div>
  );
}

export default App;
