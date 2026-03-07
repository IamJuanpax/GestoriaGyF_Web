"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER, quickServices } from "@/data";
import { fadeInUp, staggerContainer } from "@/animations";

export default function CTA() {
  const whatsappMessage = encodeURIComponent(
    "Hola! Quiero consultar sobre un trámite."
  );
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  const phoneHref = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-900/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Quick services list */}
          <motion.div variants={fadeInUp} className="w-full">
            <h3 className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-4">
              ¿Qué trámites resolvemos hoy?
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {quickServices.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm border border-white/20"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-300" />
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            ¿Necesitás ayuda
            <br />
            con un trámite?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-blue-100 max-w-xl"
          >
            Contactanos ahora y te respondemos en minutos. Sin burocracia, sin
            vueltas.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-black font-bold text-lg shadow-lg active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
            <a
              href={phoneHref}
              className="flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-white text-blue-700 font-bold text-lg shadow-lg hover:bg-blue-50 active:scale-95 transition-all duration-200"
            >
              <Phone className="w-6 h-6" />
              Llamar
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
