import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useParams
} from "react-router-dom";
import Welcome from './components/Welcome';
import Number from './components/Number';
import Hello from './components/Hello';
import WordColor from './components/WordColor';
import { Component } from 'react';


function App() {
  let { word } = useParams();
  



  return (
    <div className="App">
      {/* <p><Link to="/home/4">4</Link></p>  */}
      <Routes>

        <Route path="/home" element={<Welcome />} />
        {/* <Route path="/:word" element={<Hello />} />
        <Route path="/:word" element={<Number />} /> */}
        <Route path="/home/:word" element={isNaN(word) ? (<Hello />) : (<Number />)} />

        {/* <Route path="/:word2/:color1/:color2" element={<WordColor />} /> */}

      </Routes>
    </div>
  );
}

export default App;
