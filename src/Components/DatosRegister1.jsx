import React, { useState } from "react";
import axios from "axios";
import DatosCompleto from "./DatosCompleto";

const DatosRegister = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isButton, setButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isNewVisible, setNewVisible] = useState(false);
  const [token, setToken] = useState('');
  const botton = isButton ? "block" : "hidden";

  const handleRegistration = async () => {
    if (!userName || !password) {
      setMessage("Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/v1/api/auth/register",
        {
          userName,
          password,
        }
      );
      setButton(true);
      setMessage(response.data.message);
      const token = response.data.token;
      setToken(token);
    } catch (error) {
      setMessage("Error al registrar el usuario");
    }
  };

  const handleContinue = () => {
    setIsVisible(false); 
    setNewVisible(true); 
  };

  if (!isVisible) {
    return <DatosCompleto token={token}/>; 
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4">Registro de Usuario</h2>
        <form className="space-y-4">
          <div className="flex items-center">
            <label className="text-gray-700 mr-2 w-1/3" htmlFor="username">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              placeholder="Nombre de usuario"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <label className="text-gray-700 mr-2 w-1/3" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-around">
              <button
                type="button"
                onClick={handleRegistration}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all ease-in duration-200"
              >
                Registrarse
              </button>
              <button
                type="button"
                onClick={handleContinue}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all ease-in duration-200 ${botton}`}
              >
                continuar
              </button>
            </div>

            {message && <p className="text-red-500">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DatosRegister;
