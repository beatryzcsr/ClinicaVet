import { useState } from "react";
import { faq } from "../products/FAQCard";

export default function FAQ() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-6">
      <div className="space-y-4">
        {faq.map((faq, index) => {
          const isOpen = openCard === index;

          return (
            <div
              key={index}
              className="relative overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transition-all duration-300"
            >
              {/* Pergunta */}
              <button
                onClick={() => toggleCard(index)}
                className="w-full flex items-center justify-between text-left p-5 pr-24"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>

                <span
                  className={`text-2xl transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  +
                </span>
              </button>

              {/* Resposta */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 pr-24 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Imagem no canto inferior direito */}
              <img
                src={faq.image}
                alt=""
                className="absolute bottom-0 right-0 w-20 h-20 object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
