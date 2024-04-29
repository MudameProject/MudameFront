import { useState } from "react";
import PropTypes from "prop-types";
import Truck from "./Truck";
import Road from "./Road";

const InputField = ({ label, type, id, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in duration-200"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui me falta poner toda la logica :'v
    console.log(formData);
  };

  return (
    <div className="pt-10 flex items-start justify-center h-screen bg-gradient-to-b from-azulCielo from-60% to-[#0F5D38] -z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/2"
      >
        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <InputField
              label="Nombre"
              type="text"
              id="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 pl-2">
            <InputField
              label="Apellido"
              type="text"
              id="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <Road/>
        </div>
        <InputField
          label="Número de Teléfono"
          type="tel"
          id="phoneNumber"
          placeholder="123-456-7890"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <InputField
          label="Correo Electrónico"
          type="email"
          id="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña"
          type="password"
          id="password"
          placeholder="******************"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Confirmar Contraseña"
          type="password"
          id="confirmPassword"
          placeholder="******************"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all ease-in duration-200"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
