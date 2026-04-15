import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import MeuPerfil from './pages/MeuPerfil/MeuPerfil';
import NovoServico from './pages/NovoServico/NovoServico';
import ProtectedRoute from './pages/Login/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/perfil" element={
          <ProtectedRoute>
            <MeuPerfil />
          </ProtectedRoute>
        } />
        <Route path="/novo-servico" element={
          <ProtectedRoute>
            <NovoServico />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
