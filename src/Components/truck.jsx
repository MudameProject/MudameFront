import React from "react";
import truck from "../assets/camionMaterialDesign.png";

function Truck() {
  return (
    <>
      <img
        src={`${truck}`}
        alt="no cargo T_T"
        className={`w-52 h-auto absolute top-[70vh] left-[10vw] scale-x-[-1] animate-saltosA`}
      />
    </>
  );
}
export default Truck;
