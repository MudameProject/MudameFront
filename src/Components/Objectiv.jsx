import React from "react";
import ObjectivImage from "../assets/objectiv.png";

function Objectiv() {
  return (
    <div className="bg-white rounded-lg p-8 transition-all duration-500 ease-in-out select-none">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0">
          <img className="w-full" src={ObjectivImage} alt="no cargo" />
        </div>
        <div className="border-solid border-2 border-sky-500 w-full md:w-1/2 flex flex-col rounded-lg p-8 shadow-xl shadow-sky-300/40">
          <div className="mb-4">
            <p className="text-sky-600 text-2xl font-sans subpixel-antialiased font-bold">
              Cuales son nuestros Objetivos?
            </p>
          </div>
          <div className="m-0 overflow-auto font-sans subpixel-antialiased break-words">
            <p className="text-gray-600 text-lg mb-2">
            <b>Conexión eficiente:</b>Nuestro objetivo principal es conectar de
              manera eficiente a las personas que necesitan una mudanza con los
              conductores de camiones disponibles en su área.
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Seguridad:</b> Garantizar la seguridad de los bienes de nuestros
              clientes durante el proceso de mudanza es una prioridad para
              nosotros. Nos esforzamos por colaborar solo con conductores de
              confianza y con experiencia.
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Accesibilidad:</b> Queremos hacer que el proceso de mudanza sea
              accesible para todos, por lo que nuestro objetivo es ofrecer
              precios competitivos y opciones de mudanza flexibles.
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Satisfacción del cliente:</b> Nos esforzamos por proporcionar un
              excelente servicio al cliente y garantizar que todas las mudanzas
              se realicen de manera oportuna y sin problemas.
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Expansión:</b> Planeamos expandir nuestra red de conductores y nuestra
              base de clientes para llegar a más áreas y ayudar a más personas
              con sus necesidades de mudanza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Objectiv;