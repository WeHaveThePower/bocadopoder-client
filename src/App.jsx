import Button from '@mui/material/Button';
import { useState } from 'react';
import DashboardWHTP from './Components/MarcoGeneral/DashboardWHTP';
import { Registrarproducto } from './Components/Productos/RegistrarProductos/Registrarproducto'
import BasicReactApp from './Components/zzPruebas/zzBasicReactApp/BasicReactApp'
import Dashboard from './Components/zzPruebas/zzTestDashboard/Dashboard'


function App() {
  const [estado, setEstado] = useState(1);
  const myToggle = ()=> setEstado(estado+1);
  
  return (  
    <div className="App">
      <Button size="small" color="secondary" style={{zIndex:1600}} variant="contained" onClick={myToggle}>
          Presióname muchas veces
      </Button>
      <section>
        {(estado % 4 === 0) ? <Dashboard/> : (
            (estado % 3 === 0) ? <Registrarproducto/> : (
              (estado % 2 === 0) ? <DashboardWHTP/> : null
            )
         )
        }
      </section>
    </div>
  );
}

export default App;

//this is a test yes this is a test