import React, { useState } from "react";

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white rounded-lg transition-all duration-500 ease-in-out shadow-md shadow-sky-300/40 border-solid border-2 border-sky-500 p-4 mb-4 select-none xs:mx-8">
      <div
        onClick={toggleOpen}
        className="cursor-pointer flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold font-sans subpixel-antialiased">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform transition-transform duration-300 text-sky-500 ${
            isOpen ? "rotate-180" : ""
          }`}
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

      <div className={`mt-2 ${isOpen ? "block" : "hidden"}`}>
        <p className="text-gray-600 subpixel-antialiased break-words">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQList() {
  const faqs = [
    {
      question: "¿Cómo funciona el servicio de conexión de mudanzas?",
      answer:
        "Nuestro servicio funciona como un intermediario entre usuarios que necesitan realizar una mudanza y conductores de camiones disponibles. Los usuarios publican los detalles de su mudanza y los conductores interesados pueden ofrecer sus servicios.",
    },
    {
      question: "¿Cómo puedo solicitar una mudanza a través de su plataforma?",
      answer:
        "Es fácil. Solo necesitas crear una cuenta gratuita en nuestra plataforma, publicar los detalles de tu mudanza (fecha, ubicación, tamaño, etc.) y esperar a que los conductores interesados te contacten con sus ofertas.",
    },
    {
      question:
        "¿Qué tipo de mudanzas puedo solicitar a través de su servicio?",
      answer:
        "Nuestro servicio puede ayudarte con todo tipo de mudanzas, desde pequeños traslados dentro de la ciudad hasta mudanzas a larga distancia.",
    },
    {
      question:
        "¿Qué debo hacer si tengo objetos especiales que necesitan ser transportados durante la mudanza?",
      answer:
        "En la descripción de tu mudanza, puedes proporcionar detalles sobre cualquier objeto especial que necesite ser transportado. Los conductores interesados podrán ofrecerte soluciones específicas para manejar esos objetos.",
    },
    {
      question:
        "¿Cómo puedo estar seguro de que los conductores de camiones son confiables?",
      answer:
        "Todos los conductores en nuestra plataforma están verificados y cuentan con calificaciones de otros usuarios. Puedes revisar las calificaciones y comentarios de otros clientes antes de elegir un conductor para tu mudanza.",
    },
    {
      question: "¿Qué sucede si ocurre algún daño durante la mudanza?",
      answer:
        "Trabajamos para garantizar que todas las mudanzas se realicen de manera segura, pero en caso de algún daño, contamos con un proceso de reclamación para resolver cualquier problema de manera justa y rápida.",
    },
    {
      question:
        "¿Cómo se determina el costo de una mudanza a través de su plataforma?",
      answer:
        "El costo de la mudanza depende de varios factores, como la distancia, el tamaño de la mudanza y cualquier servicio adicional solicitado. Los conductores interesados te enviarán sus ofertas con detalles sobre el precio.",
    },
    {
      question: "¿Cuál es el método de pago aceptado para las mudanzas?",
      answer:
        "Aceptamos pagos en línea a través de métodos seguros como tarjetas de crédito o transferencias bancarias. El pago se realiza una vez que la mudanza se haya completado satisfactoriamente.",
    },
  ];

  return (
    <>
      <h2 className="text-sky-600 text-2xl text-center font-sans subpixel-antialiased font-bold mb-4 select-none">
        Preguntas Frecuentes
      </h2>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </>
  );
}
