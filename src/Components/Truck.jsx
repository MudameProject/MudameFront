import React from "react";
import truck from "../assets/camionMaterialDesign.png";
import "./../App.css"

function Truck() {
  return (
    <div className="absolute top-[-90px] left-[10vw] saltico z-20">
      <img
        src={`${truck}`}
        alt="no cargo T_T"
        className={`w-60 h-auto scale-x-[-1]`}
      />
    </div>
  );
}
export default Truck;