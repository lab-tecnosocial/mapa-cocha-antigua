import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Mapa from './Mapa';

export default function Inicio() {
  return (
    <>
      <AppBar position="relative" sx={{alignItems: 'center'}} >
        <Toolbar>
          <Typography variant="h6" color="inherit" >
            <b>La Cocha de Antes</b>
          </Typography>
        </Toolbar>
        <Typography variant="subtitle2" color="inherit"   align="center" gutterBottom >
            Mapa de fotografías antiguas colorizadas con Inteligencia Artificial
          </Typography>
      </AppBar>
      <main>
          <Mapa />
      </main>
      </>
  );
}