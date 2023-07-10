import Tarea from './component/Tarea';
import TareaFormulario from './component/TareaFormulario';
import './App.css';
import ListaDeTareas from './component/ListaDeTareas';


function App() {
  return (
    <div className="App">
      <h1>Mis Tareas</h1>
      <ListaDeTareas/>
    </div>
  );
}

export default App;
