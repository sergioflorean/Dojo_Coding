import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListApi from './components/ListApi';

function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:selected/:chooseId" element={<ListApi />} />
        </Routes>
     
    </div>
  );
}

export default App;
