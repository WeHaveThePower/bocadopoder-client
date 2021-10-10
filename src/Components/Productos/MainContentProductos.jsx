import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Chart from '../zzPruebas/zzTestDashboard/Chart';
import Deposits from '../zzPruebas/zzTestDashboard/Deposits';
import Orders from '../zzPruebas/zzTestDashboard/Orders';
import { Registrarproducto } from './RegistrarProductos/Registrarproducto';
import { MenuProductos } from './MenuProductos/MenuProductos';
import { ListaProductos } from './ListaProductos/ListaProductos';
import CuadritoDerecha from './CuadritoDerecha';

export function MainContentProductos () {
    return (
        <React.Fragment>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                // height: 240,
              }}
            >
              <MenuProductos/>
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <CuadritoDerecha/>
              
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <ListaProductos/>
            </Paper>
          </Grid>
      </React.Fragment>
    )
}
