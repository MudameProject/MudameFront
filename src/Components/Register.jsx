import { useState } from "react";
import PropTypes from "prop-types";
import Road from "./Road";
import logo from "./../assets/logo.png"


const Register = () => {

  return (
    <body className=" flex justify-center w-screen h-screen bg-[#e5e2c9]">
      
        <img className="h-auto absolute -top-[7vh] z-30" src={logo} alt="no cargo" />
      
          
        <Road />
    </body>
  );
};

export default Register;
