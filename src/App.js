import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Registrarproducto } from './Components/Registrarproducto';
import { useState } from 'react';

function App() {
  const [estado, setEstado] = useState(false);
  const myToggle = ()=> setEstado(!estado);
  
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn btn-primary" onClick={myToggle} data-bs-toggle="modal" data-bs-target="#myModalNewProd">
          Let's Go
        </button>
        {estado ? <Registrarproducto accion={myToggle} estado={estado}/> : null}
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
