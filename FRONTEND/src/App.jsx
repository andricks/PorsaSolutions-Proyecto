import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Login from './components/Login';
import firebase from './CONFDataBase/firebaseConfig';
import Inicio from './components/Inicio/Inicio';
import NuevoVehiculoFormulario from './components/NuevoVehiculo/NuevoVehiculoFormulario';
import ServicioPreventivo from './components/ServicioPreventivo/ServicioPreventivo';
import Cliente from './components/NuevoVehiculo/cliente';
import Vehiculo from './components/NuevoVehiculo/vehiculo';
import Formulario from './components/NuevoVehiculo/formulario';
import BuscarFormulario from './components/NuevoVehiculo/BuscarFormulario';
import Usuario from './components/Usuarios/Usuario';
import MenuTarjetas from './components/MenuTarjetas';
import Marcas from './components/Contenido/Marcas';
import Talleres from './components/Contenido/Talleres';
import Acercadenosotros from './components/Contenido/Acercadenosotros';

function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/login" />;
}

function App() {
  const [user, setUser] = useState(null);
  const [showInicio, setShowInicio] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        setShowForm(true);
        sessionStorage.setItem('user', JSON.stringify(user));
      } else {
        setUser(null);
        sessionStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);

  function handleLogout() {
    firebase.auth().signOut();
    sessionStorage.removeItem('user');
    setUser(null);
  }

  function handleLoginClick() {
    setShowInicio(false);
  }

  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            showInicio ? (
              <Inicio onLoginClick={handleLoginClick} />
            ) : user && showForm ? (
              <MenuTarjetas handleLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/nuevo-vehiculo"
          element={
            <ProtectedRoute user={user}>
              <NuevoVehiculoFormulario />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Mantenimiento-vehiculo"
          element={
            <ProtectedRoute user={user}>
              <ServicioPreventivo />
            </ProtectedRoute>
          }
        />
       
        <Route
          path="/cliente"
          element={
            <ProtectedRoute user={user}>
              <Cliente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vehiculo"
          element={
            <ProtectedRoute user={user}>
              <Vehiculo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/formulario"
          element={
            <ProtectedRoute user={user}>
              <Formulario />
            </ProtectedRoute>
          }
        />
        <Route
          path="/BuscarFormulario"
          element={
            <ProtectedRoute user={user}>
              <BuscarFormulario />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Usuario"
          element={
              <Usuario />
          }
        />
        <Route
          path="/nuestras-marcas"
          element={
              <Marcas />
          }
        />
        <Route
          path="/Talleres"
          element={
              <Talleres />
          }
        />
        <Route
          path="/Acercadenosotros"
          element={
              <Acercadenosotros />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;