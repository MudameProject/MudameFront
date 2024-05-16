import React from "react";
import ServicesImage from "../assets/services.jpeg";

function Services() {
  return (
    <div className="bg-white rounded-lg p-8 transition-all duration-500 ease-in-out select-none">
      <div className="flex-col-reverse md:flex-row  justify-between flex items-center">
        <div className="border-solid border-2 border-sky-500 w-full md:w-1/2 flex flex-col rounded-lg p-8 shadow-xl shadow-sky-300/40">
          <div className="mb-4">
            <p className="text-sky-600 text-2xl font-sans subpixel-antialiased font-bold">
              Que Servicios Ofrecemos?
            </p>
          </div>
          <div className="m-0 overflow-auto font-sans subpixel-antialiased break-words">
            <p className="text-gray-600 text-lg mb-2">
              <b>Servicio de emparejamiento:</b> Conectamos a las personas que
              necesitan una mudanza con los conductores de camiones disponibles
              en su área. Nuestro algoritmo inteligente se encarga de encontrar
              el mejor conductor para cada mudanza, teniendo en cuenta factores
              como la ubicación, el tamaño de la mudanza y la disponibilidad del
              conductor.
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Servicio de seguimiento:</b> Los usuarios pueden seguir el
              progreso de su mudanza en tiempo real a través de nuestra
              aplicación. Esto incluye el seguimiento de la ubicación del camión
              de mudanzas y actualizaciones en tiempo real sobre el estado de la
              mudanza.
            </p>
            <p className="text-gray-600 text-lg mb-2">
              <b>Servicio de revisión y calificación:</b> Después de cada
              mudanza, los usuarios pueden dejar una revisión y calificar su
              experiencia. Esto nos ayuda a mantener un alto nivel de servicio y
              a los futuros usuarios a tomar decisiones informadas.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0">
          <img className="w-full" src={ServicesImage} alt="no cargo" />
        </div>
      </div>
    </div>
  );
}
export default Services;