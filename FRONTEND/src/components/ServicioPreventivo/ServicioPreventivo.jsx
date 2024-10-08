import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa Link
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ServicioPreventivo() {
  const [placa, setPlaca] = useState('');
  const [formularioData, setFormularioData] = useState(null);
  const [error, setError] = useState('');

  const handlePlacaChange = (event) => {
    setPlaca(event.target.value);
  };
  const handleSearch = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/formulario/${placa}`);
      setFormularioData(response.data.formularioData);
      setError('');
    } catch (error) {
      setError('No se encontró ningún formulario para la placa proporcionada');
      setFormularioData(null);
    }
  };
  
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/formulario/${placa}`, formularioData);
      console.log(response.data.message);
    } catch (error) {
      setError('Error al actualizar el formulario');
    }
  };
  
  const handleValueChange = (campo, nuevoValor) => {
    setFormularioData((prevData) => ({
      ...prevData,
      [campo]: nuevoValor,
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: '55px' }}>
        <Typography variant="h5">Buscar Formulario</Typography>
        <TextField
          label="Número de Placa"
          value={placa}
          onChange={handlePlacaChange}
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button onClick={handleSearch} variant="contained" color="primary" sx={{ mt: 2 }}>
          Buscar
        </Button>

        <Button onClick={handleUpdate} variant="contained" color="secondary" sx={{ mt: 2, ml: 2 }}>
          Actualizar
        </Button>

        <Button 
          component={Link} 
          to="/" // Redirige al menú principal
          variant="contained" 
          color="inherit" 
          sx={{ mt: 2, ml: 2 }}
        >
          Regresar al Menú
        </Button>

        {error && (
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

        {formularioData && (
          <div>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Formulario encontrado
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Campo</TableCell>
                    <TableCell>Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(formularioData).map(([campo, valor], index) => (
                    <TableRow key={index}>
                      <TableCell>{campo}</TableCell>
                      <TableCell>
                        <TextField
                          value={valor}
                          onChange={(event) => handleValueChange(campo, event.target.value)}
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Box>
    </Box>
  );
}
