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
      <section>
        <DashboardWHTP/>
      </section>
    </div>
  );
}

export default App;

//this is a test yes this is a test