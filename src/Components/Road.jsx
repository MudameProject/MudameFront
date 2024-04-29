import React from "react";
import Truck from "./Truck";
import YellowLines from "./YellowLines";

function Road() {
  
  const calle = document.getElementById("calle");


  return (
    <div className="flex w-full h-32 absolute left-0 bottom-0 bg-zinc-800 z-10">
        <Truck/>
        <div id="calle" className="w-full h-full flex justify-around pt-12 ">
          <YellowLines/>
          <YellowLines/>
          <YellowLines/>
          <YellowLines/>
          <YellowLines/>
        </div>
    </div>
  );
}
export default Road;
