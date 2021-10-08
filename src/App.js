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
      <Button style={{zIndex:1600}} variant="contained" onClick={myToggle}>
          Presióname
      </Button>
      <section>
        {(estado % 4 === 0) ? <Registrarproducto/> : null}
        {(estado % 3 === 0) ? <BasicReactApp/> : null}
        {(estado % 2 === 0) ? <Dashboard/> : null}
      </section>
    </div>
  );
}

export default App;