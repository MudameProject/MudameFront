import React, { useState } from "react";
import axios from "axios";

// import Props from "prop-types";

const DatosCompleto = ({ token }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
  });
  const [message, setMessage] = useState("");

  const handleRegistration = async () => {
    const { name, lastName, email, phoneNumber, address, zipCode } = formData;

    if (!name || !lastName || !email || !phoneNumber || !address || !zipCode) {
      setMessage("Por favor, completa todos los campos");
      return;
    }

    axios.defaults.baseURL = "http://localhost:8080/api/v1";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      const response = await axios.post(
        "/clients",
        {
          name,
          lastName,
          email,
          phoneNumber,
          address,
          zipCode,
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error al registrar el usuario:", error.response.data);
      setMessage(
        "Error al registrar el usuario. Revisa la consola para más detalles."
      ); // Informative error message
    }
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/api/v1/auth/login",
    //     {
    //       userName,
    //       password,
    //     }
    //   );
    // } catch (error) {
    //   console.error("Error al registrar el usuario:", error);
    //   setMessage("error al logearse. Revisa la consola para mas detalles."); // Informative error message
    // }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {" "}
        {/* Prevent default form submission */}
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Número de teléfono"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Dirección"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Código postal"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleInputChange}
        />
        <button onClick={handleRegistration}>Registrarse</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default DatosCompleto;
