export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: string;
  href: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  years: number;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  service: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}
