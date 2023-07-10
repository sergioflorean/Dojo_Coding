import './App.css';
import MyNewComponent from './components/MyNewComponent';

const App = () => {
  return (
    <div className="App">

        <MyNewComponent header={"header prop"}>
              <p>this is  a child</p>
              <p>this is another children</p>
              <p>and another</p>
        </MyNewComponent>
        
    </div>
  );
}

export default App;
