import React from "react";
import Truck from "./Truck";
import YellowLines from "./YellowLines";

function Road() {
  const tamaño = screen.height;

  return (
    <div className="flex w-[120%] h-32 absolute left-0 bottom-0 bg-zinc-800 z-10">
      <Truck />
      <div className="w-full h-full absolute flex justify-around pt-12 ">
          <YellowLines />
          <YellowLines />
          <YellowLines />
          <YellowLines />
          <YellowLines />
      </div>
    </div>
  );
}
export default Road;
