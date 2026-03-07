"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data";

export default function WhatsAppFloat() {
  const message = encodeURIComponent("Hola! Quiero consultar sobre un trámite.");
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1DA851] active:scale-95 transition-all duration-200"
    >
      <MessageCircle className="w-7 h-7 text-black" fill="black" />
    </a>
  );
}
