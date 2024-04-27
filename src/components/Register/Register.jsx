import React from 'react';

function Register() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input type="password" id="contraseña" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;