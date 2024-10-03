import React from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography, Box, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import nuevoVehiculoImage from '../img/descarga.jpeg';
import servicioPreventivoImage from '../img/motor2.jpeg';

const MenuTarjetas = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#1a1a1a', // Color de fondo de la página
        minHeight: '100vh', // Asegura que el fondo cubra toda la pantalla
        padding: '0px', // Elimina cualquier padding adicional
        margin: '0px' // Elimina cualquier margen adicional
      }}
    >
      <Typography variant="h4" gutterBottom>
        Menú Principal
      </Typography>
      <Grid 
        container 
        spacing={3} 
        sx={{ 
          justifyContent: 'center', 
          flexWrap: 'wrap' // Para asegurar que las tarjetas se envuelvan en dispositivos pequeños
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ 
            maxWidth: 345, 
            minHeight: 300, 
            margin: 'auto',
            backgroundColor: '#333', // Color de fondo de la tarjeta
            boxShadow: 3 // Sombra de la tarjeta
          }}>
            <CardMedia
              component="img"
              height="140"
              image={nuevoVehiculoImage}
              alt="Nuevo Vehículo"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: '#fff' }}>
                Nuevo Vehículo
              </Typography>
              <Typography sx={{ mt: 1.5, color: '#fff' }}>
                Registrar un nuevo vehículo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/nuevo-vehiculo')} sx={{ color: '#fff' }}>
                Ir
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ 
            maxWidth: 345, 
            minHeight: 300, 
            margin: 'auto',
            backgroundColor: '#333', // Color de fondo de la tarjeta
            boxShadow: 3 // Sombra de la tarjeta
          }}>
            <CardMedia
              component="img"
              height="140"
              image={servicioPreventivoImage}
              alt="Servicio Preventivo"
            />
            <CardContent>
              <Typography variant="h5" component="div" sx={{ color: '#fff' }}>
                Servicio Preventivo
              </Typography>
              <Typography sx={{ mt: 1.5, color: '#fff' }}>
                Gestionar servicios preventivos
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => navigate('/Mantenimiento-vehiculo')} sx={{ color: '#fff' }}>
                Ir
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Box>
    </Box>
  );
};

export default MenuTarjetas;
