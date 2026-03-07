import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "GestoriaGyF | Gestoría Integral en Buenos Aires",
  description:
    "Gestoría integral en Buenos Aires. AFIP, ARBA, Automotor, Antecedentes Penales y más. Consultanos por WhatsApp o llamanos.",
  keywords: ["gestoría", "AFIP", "ARBA", "automotor", "antecedentes", "Buenos Aires", "trámites"],
  openGraph: {
    title: "GestoriaGyF | Gestoría Integral en Buenos Aires",
    description: "Nos encargamos de tus trámites para que no pierdas tiempo.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
