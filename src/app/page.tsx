import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import HowItWorks from "@/sections/HowItWorks";
import Staff from "@/sections/Staff";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Staff />
      <Testimonials />
      <CTA />
    </main>
  );
}
