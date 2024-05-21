import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillTruckFrontFill } from "react-icons/bs";

function RegisterClient() {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: ""
  });
  const [token, setToken] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/v1/api/auth/register")
      .then(response => {
        console.log("Respuesta del servidor:", response); // Imprimir la respuesta completa del servidor
        const jwtToken = response.data; // Si la respuesta es un objeto con el token directamente
        console.log("Token recibido:", jwtToken);
        setToken(jwtToken);
        localStorage.setItem("jwtToken", jwtToken);
      })
      .catch(error => {
        console.error("Error al obtener el token:", error);
      });
  }, []);

  useEffect(() => {
    if (token) {
      axios.get("http://localhost:8080/api/v1/clients", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error("Error al obtener los clientes:", error);
      });
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    axios.post("http://localhost:8080/api/v1/clients", formData, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      setClients(prevClients => [...prevClients, response.data]);
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        zipCode: ""
      });
    })
    .catch(error => {
      console.error("Error al agregar el cliente:", error);
    });
  };

  const handleDelete = (clientId) => {
    axios.delete(`http://localhost:8080/api/v1/clients/${clientId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(() => {
      setClients(clients.filter(client => client.id !== clientId));
    })
    .catch(error => {
      console.error("Error al eliminar el cliente:", error);
    });
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex flex-wrap w-1/2 p-8 bg-gradient-to-r overflow-y-scroll from-indigo-400 to-blue-300 justify-around items-center">
        {clients.length > 0 ? (
          clients.map(client => (
            <div key={client.id} className="bg-slate-100 mb-5 p-20 rounded-xl">
              <h1 className="text-black font-bold text-xl font-sans flex justify-center mb-4">Cliente</h1>
              <h2 className="text-black font-bold text-xs font-sans flex justify-center mb-2">{client.name}</h2>
              <h2 className="text-black font-bold text-xs font-sans flex justify-center mb-2">{client.lastName}</h2>
              <h2 className="text-black font-bold text-xs font-sans flex justify-center mb-2">{client.email}</h2>
              <h2 className="text-black font-bold text-xs font-sans flex justify-center mb-2">{client.phoneNumber}</h2>
              <h2 className="text-black font-bold text-xs font-sans flex justify-center mb-2">{client.address}</h2>
              <h2 className="text-black font-bold text-xs font-sans flex justify-center mb-2">{client.zipCode}</h2>
              <button
                type="button"
                className="block w-28 bg-red-600 text-white mt-4 py-2 rounded-2xl font-bold mb-2"
                onClick={() => handleDelete(client.id)}
              >
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>No clients found.</p>
        )}
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-slate-100">
        <form className="bg-slate-100" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-3xl mb-9">
            Ingresar Clientes
          </h1>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <BsFillTruckFrontFill />
            <input
              className="pl-2 outline-none border-none bg-slate-100"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <BsFillTruckFrontFill />
            <input
              className="pl-2 outline-none border-none bg-slate-100"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="LastName"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <BsFillTruckFrontFill />
            <input
              className="pl-2 outline-none border-none bg-slate-100"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <BsFillTruckFrontFill />
            <input
              className="pl-2 outline-none border-none bg-slate-100"
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <BsFillTruckFrontFill />
            <input
              className="pl-2 outline-none border-none bg-slate-100"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <BsFillTruckFrontFill />
            <input
              className="pl-2 outline-none border-none bg-slate-100"
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="ZipCode"
            />
          </div>

          <button
            type="submit"
            className="block w-full bg-indigo-400 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Agregar Cliente
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterClient;