
import './App.css';
import Btn from './Components/Btn';
import Carnal from './Components/Carnal';
import Tablero from './Components/Tablero';
import Card from './Components/Card';

function App() {
  return (
    <div className='App'>
      <Tablero/>
      <Btn/>
    </div>
  );
}

export default App;

/*
class CartaPersonaje {

    constructor(nombre, rating, img) {
        this.nombre = nombre;
        this.rating = rating;
        this.img = img;
    }

}


misPersonajesDatos.forEach(personajeDeLaLista => {

     cada vez que se crea un objeto se agrega a la lista misPersonajesDatos 

    //forma corta
    // cartasPersonajesObjetos.push(new CartaPersonaje(personajeDeLaLista.name, personajeDeLaLista.rating, personajeDeLaLista.img))})

    var misTresCartasRandomSinRepetir = [] 
    while(misTresCartasRandomSinRepetir.length <3 ) {
        const cartaRandom = cartasPersonajesObjetos[Math.floor(Math.random() * cartasPersonajesObjetos.length)]
        if (!misTresCartasRandomSinRepetir.includes(cartaRandom))
        misTresCartasRandomSinRepetir.push(cartaRandom)
    }

    


*/
