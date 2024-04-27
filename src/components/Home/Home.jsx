import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página de inicio</h1>
      <Link to="/Register">Registrarse</Link>
      <br />
      <Link to="/Login">Iniciar sesión</Link>
    </div>
  );
}

export default Home;
