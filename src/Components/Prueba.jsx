import React, { useState } from 'react';
import axios from 'axios';

const Prueba = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegistration = async () => {
    if (!userName || !password) {
      setMessage('Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        userName,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error al registrar el usuario');
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Registrarse</button>
      <p>{message}</p>
    </div>
  );
};

export default Prueba;
