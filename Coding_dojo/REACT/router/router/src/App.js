import React from "react";
import {
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import LocationForm from "./components/LocationForm";
import Survey from "./components/Survey";
import DetailDogComponent from "./components/DetailDogComponent";

function App() {
  return (
    <div>
      <div>
        <h1>Routing Example</h1>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div>
        <h1>URL Parameters</h1>
        <LocationForm />
      </div>
      <div>
        <h1>Use Navigate</h1>
        <Survey />
      </div>
      {/* <div>
        <h1>rout con parametros</h1>
        <BrowserRouter>
          <Route path="/dogs" render={(routeProps) => <ListOfDogsComponent {...props} />} />
          <Route path="/dogs/:id" render={(routeProps) => <DetailDogComponent {...props} />} />
        </BrowserRouter>
      </div> */}




    </div>
  );
}

export default App
