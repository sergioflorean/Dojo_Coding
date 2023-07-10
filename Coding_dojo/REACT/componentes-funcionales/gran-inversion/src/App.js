import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';
import CounterBtn from './Components/CounterBtn';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <div className="App">

      {/* person card practica */}
      <PersonCard lastName = "Doe" firstName = "Jane" age = {25} hairColor="Black"/>
      {/* <PersonCard lastName = "Smith" firstName = "John" age = {88} hairColor="Brown"/>
      <PersonCard lastName = "Fillmore" firstName = "Millar" age = {50} hairColor="Brown"/>
      <PersonCard lastName = "Smith" firstName = "Maria" age = {56} hairColor="Brown"/> */}

       {/* boton que incrementa "use state" */}
      <CounterBtn/>

      {/* // estado de elevacion  */}
      <Wrapper items={['something', 'sombrero', 'wholesome', 'ransom', 'apple', 'react', 'javascript']}/>
    </div>
  );
}

export default App;
