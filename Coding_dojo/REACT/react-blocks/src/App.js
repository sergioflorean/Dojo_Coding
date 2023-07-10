import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Subcontents from './Components/Subcontents';
import Advertisment from './Components/Advertisement';

function App() {
  return (
    <div className="App"> 
        <Header/>
        
        <div className='bottom-container'>
        <Navigation/>
        <Main>
          
            <Subcontents/>
            <Subcontents/>
            <Subcontents/>
          
            <Advertisment/>
            
            
        </Main>
        
          
        </div>
        
      
    </div>
  );
}

export default App;
