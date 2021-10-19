import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { MenuProductos } from './MenuProductos/MenuProductos';
import { ListaProductos } from './ListaProductos/ListaProductos';
import CuadritoDerecha from './CuadritoDerecha';
import { customAlphabet } from 'nanoid';
import { consultarDatabase } from '../../Functionalities/Firebase/Controllers/Producto/Productos';

// const nanoidC = customAlphabet('0123456789HJKQ', 6);
// const testJSON =  [{id: nanoidC(), descripcion:'TestProd111', valor:'9000', estado:true},
//                   {id: nanoidC(), descripcion:'TestProd222', valor:'10000', estado:false},
//                   {id: nanoidC(), descripcion:'TestProd333', valor:'11000', estado:false},
//                   {id: nanoidC(), descripcion:'TopOfTheWorld,Ma!', valor:'12000', estado:true}
//                   ];

// let fromDB = (testJSON) => async ()=>{
//   const resp = await consultarDatabase('productos');
//   console.log('fromDB ~~'+resp);
//   return resp || testJSON;
// };



/*  x   x   x
VERY IMPORTANT SHIT : BROKEN CONNECTION HANDLING ¿¿¿???
VERY IMPORTANT SHIT : EMPTY COLLECTION HANDLING ¿¿¿???  --> stupid approach: remove the async await in productos.js
x   x   x*/

export function MainContentProductos() {

  const [appListDB, setAppListDB] = useState([])
  const [searchProps, setSearchProps] = useState({on: false, key:''})
  const [refreshFlag, setRefFlag] = useState(false);

  const loadElems = async ()=>{
      const currentList = await consultarDatabase('productos');
      setAppListDB(currentList);
  }

  const hdlAddListDBd = ()=>{setRefFlag(!refreshFlag);};

  useEffect(()=>{
    loadElems();
  },[refreshFlag])
  
  
  return (
    <React.Fragment>
      <Grid item xs={12} md={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MenuProductos hdlAddListDB={hdlAddListDBd} setSearchProps={setSearchProps} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CuadritoDerecha />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <ListaProductos hdlAddListDB={hdlAddListDBd} totalList={appListDB} searchProps={searchProps} />
        </Paper>
      </Grid>
    </React.Fragment>
  )
}