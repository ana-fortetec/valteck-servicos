"use client";

import { RiWhatsappLine } from "react-icons/ri";

export default function WhatsAppButton() {
  const whatsappNumber = "559991320172";
  const message = "Olá! Gostaria de solicitar um orçamento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      <RiWhatsappLine size={32} />
    </a>
  );
}
