export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
  slug?: string; // Links to detailed project page
}

export interface PartnerLogo {
  name: string;
  image: string;
  alt: string;
}

export interface ExpertiseItem {
  title: string;
  subtitle?: string;
  image: string;
  status?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}
