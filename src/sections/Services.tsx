"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Building2,
  Car,
  Shield,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import { services } from "@/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/animations";
import { WHATSAPP_NUMBER } from "@/data";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Building2,
  Car,
  Shield,
  ClipboardList,
};

export default function Services() {
  const whatsappHref = (service: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Quiero consultar sobre: ${service}`)}`;

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-3"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            ¿Qué trámites resolvemos?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Encontrá el trámite que necesitás y consultanos sin compromiso.
          </motion.p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? ClipboardList;
            return (
              <motion.div
                key={service.id}
                variants={scaleIn}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow p-6 gap-4"
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500">{service.description}</p>

                {/* Items */}
                <ul className="flex flex-col gap-1.5 text-sm text-gray-700 grow">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold mt-0.5">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={whatsappHref(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm active:scale-95 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
