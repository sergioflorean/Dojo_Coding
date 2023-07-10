
import './App.css';
import AddBox from './components/AddBox';
import Box from './components/Box';

function App() {

    const addColor = (color,dimension) => {
        const newBox = <div className={styles.box} style={{backgroundColor: color, height: parseFloat(dimension), width: parseFloat(dimension)}}></div>
    }
  return (
    <div className="App">
        <AddBox addColor={addColor}/>
        <Box newBox={newBox}/>
        
    </div>
  );
}

export default App;
