import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { MenuProductos } from './MenuProductos/MenuProductos';
import { ListaProductos } from './ListaProductos/ListaProductos';
import CuadritoDerecha from './CuadritoDerecha';

export function MainContentProductos () {
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
              <MenuProductos/>
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
              <CuadritoDerecha/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <ListaProductos/>
            </Paper>
          </Grid>
      </React.Fragment>
    )
}