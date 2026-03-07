"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send, ClipboardCheck } from "lucide-react";
import { steps } from "@/data";
import { fadeInUp, staggerContainer } from "@/animations";

const stepIcons = [MessageCircle, Send, ClipboardCheck];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-3"
          >
            Así de simple
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            ¿Cómo funciona?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
          >
            En 3 pasos simples te resolvemos el trámite.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 mx-16 h-0.5 bg-blue-200 z-0" />

          {steps.map((step, index) => {
            const Icon = stepIcons[index] ?? MessageCircle;
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl shadow-sm p-8 gap-4"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-700 text-white text-xl font-extrabold shadow-md">
                  {step.number}
                </div>
                {/* Icon */}
                <Icon className="w-8 h-8 text-blue-400" />
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
