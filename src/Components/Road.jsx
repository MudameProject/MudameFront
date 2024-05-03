import React from "react";
import Truck from "./Truck";

function Road() {
  return (
      <div className="w-screen h-48 absolute left-0 bottom-0">
        <Truck />
          
          <div className="infinite"></div>
      </div>
  );
}
export default Road;
