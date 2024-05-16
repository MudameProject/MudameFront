import React from "react";
import ObjectivImage from "../assets/driverHappy.jpeg";

function InteresedOnTheWork() {
  return (
    <div className="bg-white rounded-lg p-8 transition-all duration-500 ease-in-out select-none">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex flex-col items-center mb-4 md:mb-0 border-2 border-red-500">
          <div className="w-full">
            <img className="w-full" src={ObjectivImage} alt="no cargo" />
          </div>
          <div className="w-full p-4 bg-white rounded-lg mt-4">
            <p className="text-gray-600 text-lg mb-2">
              <b>Te interesa hacer mudanzas?</b>
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Buscas buen ambiente laboral?</b>
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Buscas sostenibilidad Economica?</b>
            </p>
          </div>
        </div>

        <div className="justify-center items-centerborder-solid border-2 border-sky-500 w-full md:w-1/2 flex flex-col rounded-lg p-8 shadow-xl shadow-sky-300/40">
          <div className="mb-4">
            <p className="text-sky-600 text-2xl font-sans subpixel-antialiased font-bold">
              Registrate para ser parte de nosotros!!
            </p>
          </div>
          <div className="m-0 overflow-auto font-sans subpixel-antialiased break-words">
            <p className="text-gray-600 text-lg mb-2">
              <b>Solo tomara 5 minutos de tu tiempo</b>
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InteresedOnTheWork;
