import Road from "./Road";
import DatosRegister1 from "./DatosRegister1";
import logo from "./../assets/logo.png"


const Register = () => {

  return (
    <body className=" flex justify-center w-screen h-screen bg-[#e5e2c9]">
      
        <img className="h-auto absolute top-6 z-30" src={logo} alt="no cargo" />
        <Road />
        <div className="z-20">
          <DatosRegister1 />
        </div>
    </body>
  );
};

export default Register;
