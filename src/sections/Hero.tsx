"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@/data";
import { fadeInUp, staggerContainer } from "@/animations";

export default function Hero() {
  const whatsappMessage = encodeURIComponent("Hola! Quiero consultar sobre un trámite.");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const phoneHref = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 overflow-hidden pt-16"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-72 h-72 bg-blue-800/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium backdrop-blur-sm border border-white/20"
          >
            Gestoría Integral · Buenos Aires
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Tus trámites,{" "}
            <span className="text-yellow-300">sin vueltas</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-blue-100 max-w-2xl leading-relaxed"
          >
            ARCA / AFIP · ARBA · Automotor · Antecedentes
            <br />
            <span className="font-medium text-white">
              Nos encargamos de tus trámites para que no pierdas tiempo.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-black font-bold text-lg shadow-lg active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-6 h-6" />
              Consultar por WhatsApp
            </a>
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-lg border border-white/30 backdrop-blur-sm active:scale-95 transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
              Llamar ahora
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mt-4 text-blue-100 text-sm"
          >
            {["✔ Rápido", "✔ Confiable", "✔ Sin burocracia"].map((item) => (
              <span key={item} className="font-medium">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 69.3C120 59 240 37 360 32C480 27 600 40 720 45.3C840 51 960 48 1080 42.7C1200 37 1320 29 1380 25.3L1440 21V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
