import { useState } from "react";
import PropTypes from "prop-types";
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
      name={id}
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

  //instancio los estados
  const [user, setUser] = useState(false);
  const [driver, setDriver] = useState(false);

  //confirmacion de que no se pulsa ambas

  const mostrarUser = () => {
    setUser(!user);
  };

  const mostrarDriver = () => {
    setDriver(!driver);
  };

const desabilitarUser = user
? "bg-sky-700" : "bg-white";

const desabilitarDriver = driver
? "bg-orange-700" : "bg-white";


  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //funcion para mandar los datos pero al local storage

//   const handleSubmit = (event) => {
//   event.preventDefault();
//   try {
//     localStorage.setItem("formData", JSON.stringify(formData));
//     console.log("Data stored in local storage");
//   } catch (error) {
//     console.error(error);
//   }
// };

  //funcion para mandar los datos a una base de datos
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
      if (error.name === "TypeError") {
        console.error(
          "al parecer, el servidor no esta encendido, por favor enciendelo ;)"
        );
      }
    }
  };

  return (
    <body className="flex items-start justify-center w-screen h-screen bg-gradient-to-b from-azulCielo from-60% to-[#0F5D38] ">
      <div className="pt-10 flex items-start justify-center  w-screen h-screen bg-gradient-to-b from-azulCielo from-60% to-[#0F5D38] z-50">
        <button className={`${desabilitarUser}`} onClick={mostrarUser}>user</button>
        <button className={`${desabilitarDriver}`} onClick={mostrarDriver}>driver</button>
        {/* {user ? ( */}
          <form
            onSubmit={handleSubmit}
            className="bg-blancoTransparente shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/2 z-30"
          >
            <div className="flex mb-4">
              <div className="w-1/2 pr-2">
                <InputField
                  label="Nombre"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 pl-2">
                <InputField
                  label="Apellido"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Apellido"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <InputField
              label="Número de Teléfono"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="123-456-7890"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <InputField
              label="Correo Electrónico"
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Contraseña"
              type="password"
              id="password"
              name="password"
              placeholder="******************"
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              label="Confirmar Contraseña"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
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
        {/* ): driver ?(
          <></>
        ) : (
          <></>
        )  
        } */}
        
        <Road />
      </div>
      
    </body>
  );
};

export default Register;
