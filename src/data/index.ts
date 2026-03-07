import { ServiceCard, StaffMember, Testimonial, Step } from "@/types";

export const services: ServiceCard[] = [
  {
    id: "afip-arca",
    title: "ARCA / AFIP",
    description: "Gestiones impositivas nacionales sin complicaciones",
    items: ["Alta de Monotributo", "Baja de Monotributo", "Inscripción en IVA", "Facturación electrónica"],
    icon: "FileText",
    href: "/servicios/afip",
  },
  {
    id: "arba",
    title: "ARBA",
    description: "Trámites provinciales de ingresos brutos y deudas",
    items: ["Ingresos Brutos", "Regularización de deudas", "Inscripciones", "Planes de pago"],
    icon: "Building2",
    href: "/servicios/arba",
  },
  {
    id: "automotor",
    title: "Automotor",
    description: "Transferencias, formularios y patentes al día",
    items: ["Transferencias", "Formulario 08", "Patentes", "Multas"],
    icon: "Car",
    href: "/servicios/transferencia-automotor",
  },
  {
    id: "antecedentes",
    title: "Antecedentes Penales",
    description: "Certificados limpios de forma rápida y segura",
    items: ["Certificado de antecedentes", "Tramitación express", "Apostille", "Legalización"],
    icon: "Shield",
    href: "/servicios/antecedentes-penales",
  },
  {
    id: "otros",
    title: "Otros Trámites",
    description: "Todo lo que necesitás, en un solo lugar",
    items: ["Poderes notariales", "Sucesiones", "Trámites municipales", "Asesoramiento"],
    icon: "ClipboardList",
    href: "/servicios",
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Nos contactás por WhatsApp",
    description: "Escribinos con tu consulta. Te respondemos rápido y sin vueltas.",
  },
  {
    number: 2,
    title: "Enviás la documentación",
    description: "Te indicamos exactamente qué necesitamos. Podés enviarlo digital.",
  },
  {
    number: 3,
    title: "Nosotros realizamos el trámite",
    description: "Nos encargamos de todo. Vos esperás el resultado sin perder tiempo.",
  },
];

export const staff: StaffMember[] = [
  {
    id: "1",
    name: "Gastón López",
    role: "Gestor Principal",
    specialty: "AFIP / ARCA · Impuestos nacionales",
    years: 12,
  },
  {
    id: "2",
    name: "Fernanda Ruiz",
    role: "Gestora",
    specialty: "ARBA · Ingresos Brutos",
    years: 8,
  },
  {
    id: "3",
    name: "Martín González",
    role: "Gestor de Automotores",
    specialty: "Transferencias · Formulario 08",
    years: 10,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carolina M.",
    text: "Me resolvieron el trámite de transferencia en el día. Excelente servicio, muy recomendable.",
    rating: 5,
    service: "Transferencia automotor",
  },
  {
    id: "2",
    name: "Roberto S.",
    text: "Me dieron el alta en monotributo en menos de 24 horas. Sin vueltas y muy claros con todo.",
    rating: 5,
    service: "Alta Monotributo",
  },
  {
    id: "3",
    name: "Valeria T.",
    text: "Por fin encontré una gestoría que responde rápido por WhatsApp. Muy satisfecha con el resultado.",
    rating: 5,
    service: "ARBA - Ingresos Brutos",
  },
];

export const quickServices = [
  "Alta de Monotributo",
  "Baja de Monotributo",
  "Transferencia de Auto",
  "Deudas ARBA",
  "Pago de Multas",
  "Antecedentes Penales",
];

export const WHATSAPP_NUMBER = "5491100000000";
export const PHONE_NUMBER = "+54 9 11 0000-0000";
export const BUSINESS_ADDRESS = "Buenos Aires, Argentina";
