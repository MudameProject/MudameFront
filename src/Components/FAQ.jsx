import React, { useState } from "react";

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div
        onClick={toggleOpen}
        className="cursor-pointer flex justify-between items-center"
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transform transition-transform duration-300 ${
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
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQList() {
  const faqs = [
    {
      question: "¿Cómo funciona el servicio de mudanzas?",
      answer:
        "El servicio de mudanzas incluye embalaje, transporte seguro y descarga en el destino final. Nuestro equipo profesional se encargará de todo el proceso.",
    },
  ];

  return (
    <>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </>
  );
}
