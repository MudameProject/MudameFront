import React from "react";

export default function FAQ() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {/* Pregunta */}
      <div className="cursor-pointer flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          ¿Cómo funciona el servicio de mudanzas?
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {/* Respuesta (inicialmente oculta) */}
      <div className="hidden mt-2">
        <p className="text-gray-600">
          El servicio de mudanzas incluye embalaje, transporte seguro y descarga
          en el destino final. Nuestro equipo profesional se encargará de todo
          el proceso.
        </p>
      </div>
    </div>
  );
}