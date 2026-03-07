"use client";

import { motion } from "framer-motion";
import { User, Briefcase } from "lucide-react";
import { staff } from "@/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/animations";

export default function Staff() {
  return (
    <section id="equipo" className="py-20 bg-white">
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
            className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-3"
          >
            Nuestro Equipo
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            Profesionales que te respaldan
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
          >
            Cada trámite es atendido por especialistas con años de experiencia.
          </motion.p>
        </motion.div>

        {/* Staff grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {staff.map((member) => (
            <motion.div
              key={member.id}
              variants={scaleIn}
              className="flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow p-8 gap-4"
            >
              {/* Avatar placeholder */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-50">
                <User className="w-10 h-10 text-blue-400" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-blue-700 mt-0.5">
                  {member.role}
                </p>
              </div>

              <p className="text-sm text-gray-500">{member.specialty}</p>

              <div className="flex items-center gap-1.5 text-sm text-gray-400">
                <Briefcase className="w-4 h-4" />
                <span>{member.years} años de experiencia</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
