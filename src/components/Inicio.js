import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Mapa from './Mapa';



export default function Inicio() {
  return (
    <>
      <AppBar position="relative" sx={{alignItems: 'center'}} >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <b>La Cocha de Antes</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
          <Mapa />
      </main>
      </>
  );
}