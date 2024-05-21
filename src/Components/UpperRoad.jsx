import React from "react";
import camionArriba from "../assets/TruckUp.png";

function UpperRoad() {
    return (
      <div className="w-screen h-screen flex justify-center absolute -z-20 bg-green-500 overflow-hidden">
        <div className="principal"></div>
        <img className="camionsito " src={camionArriba} alt="esta malo" />
      </div>
    );
  }
  export default UpperRoad;