import React from "react";
import Truck from "./Truck";
import UpperRoad from "./UpperRoad";

function Road() {
  return (
    <div className="w-screen h-[90vh] absolute left-0 bottom-0 z-10 overflow-hidden">
      <div className="doble"></div>
      <div className="otraM"></div>
      <div className="mountains"></div>
      <Truck />
      <div className="infinite"></div>
    </div>
  );
}
export default Road;

