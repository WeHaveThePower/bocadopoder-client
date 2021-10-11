import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function preventDefault(event) {
  event.preventDefault();
}

export default function CuadritoDerecha() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Por:
      </Typography>
      <Typography component="p" variant="h4">
        Andrés FRP
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        WeHaveThePower
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          MisiónTIC 2022
        </Link>
      </div>
    </React.Fragment>
  );
}