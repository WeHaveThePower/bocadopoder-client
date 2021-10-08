// import logo from './logo.svg';
// import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Registrarproducto } from './Components/Productos/RegistrarProductos/Registrarproducto'
import BasicReactApp from './Components/zzPruebas/zzBasicReactApp/BasicReactApp'
import Dashboard from './Components/zzPruebas/zzTestDashboard/Dashboard'

function App() {
  const [estado, setEstado] = useState(1);
  const myToggle = ()=> setEstado(estado+1);
  
  return (  
    <div className="App">
      <Button color="secondary" style={{zIndex:1600}} variant="contained" onClick={myToggle}>
          Presióname muchas veces
      </Button>
      <section>
        {(estado % 4 === 0) ? <BasicReactApp/> : (
          (estado % 3 === 0) ? <Dashboard/> : (
            (estado % 2 === 0) ? <Registrarproducto/> : null
          )
        )}
      </section>
    </div>
  );
}

export default App;