import { Project, PartnerLogo, ContactInfo, Testimonial, ServiceItem } from './types';

export const heroData = {
  headline: "Transforming Ambition into Measurable Impact",
  subheadline:
    "I work with leaders and entrepreneurs to build the future, systems, and to dream ambitiously, implement meticulously, and deliver results that matter.",
  primaryCTA: {
    text: "Learn More",
    href: "#about",
  },
  secondaryCTA: {
    text: "Contact",
    href: "#contact",
  },
  image: "/images/home/surosh_pillay.svg",
};

  

export const aboutData = {
  title: "Surosh Pillay",
  bio: `My work sits at the intersection of leadership, systems, and impact — using data and technology as tools to turn ambition into execution.

I began my career after completing a British Telecom–sponsored PhD in Machine Learning, leading data science in a FTSE-20 company where I built predictive models and automated decision systems at scale. That experience taught me a defining lesson: insight alone doesn’t drive change — people, alignment, and action do.

Today, I serve as VP of Impact (and unofficial Head Sherpa) at the African Leadership Group, supporting one of the most ambitious missions on the continent — creating dignified, fulfilling work opportunities for millions of young Africans. My work spans building high-performing teams, designing decision and learning systems, and developing real-time impact intelligence that helps leaders make clearer, faster decisions and scale what works. 

Alongside this, I’ve spent over 15 years in public speaking and leadership development through Toastmasters International, becoming a UK & Ireland District and Division finalist. This shaped how I work today — making complex ideas simple, human, and actionable. I work with leaders and entrepreneurs to build teams, systems, and AI-driven intelligence that focus relentlessly on outcomes over theory.`,

  quoteHeader: "At the core of my work is one core belief:",
  quote:
    "Impact only happens when people, work people, good systems, and insight leads to action.",
  quoteCloser:
    "Everything I do at my core has the following pillars and measurable impact.",
  speakingImage: "/images/home/about_surosh_pillay.svg",
  logos: [
    { name: "IIE", image: "/images/home/partner_1.svg", alt: "IIE Logo" },
    { name: "IIT", image: "/images/home/partner_2.svg", alt: "IIT Logo" },
    { name: "ASU", image: "/images/home/partner_3.svg", alt: "ASU Logo" },
    { name: "ALX", image: "/images/home/partner_4.svg", alt: "ALX Logo" },
  ] as PartnerLogo[],
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Real-time order tracking",
    image: "/images/home/project_1.svg",
  },
  {
    id: "2",
    title: "KEY LIME LION",
    image: "/images/home/project_2.svg",
  },
  {
    id: "3",
    title: "Important Sorcery Inventory System",
    image: "/images/home/project_3.svg",
  },
  {
    id: "4",
    title: "Eco Connect Tracing Inc",
    image: "/images/home/project_1.svg",
  },
];

export const servicesData = [
  {
    title: 'Workshops',
    description: 'Empowering individuals, leaders, or teams',
    image: '/images/home/workshop.svg',
  },
  {
    title: 'Consultancy and Coaching',
    description: 'Strategic guidance for sustainable growth',
    image: '/images/home/consultancy.png',
  },
  {
    title: 'Keynote (Coming Soon)',
    description: 'Inspiring talks on leadership and innovation',
    image: '/images/home/keynote_coming_soon.png',
    comingSoon: true,
  },
];

export const contactData: ContactInfo = {
  email: 'contact@suroshpillay.com',
  location: 'Mauritius',
};

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "I want to say how appreciative, to check SP I knew you for peak development and good at your bright I would like to thank you for your leadership and management skills through my career.",
    author: "Wade Warren",
    role: "Entrepreneur",
    image: "/images/home/place_holder_2.svg",
  },
  {
    id: "2",
    quote:
      "What sets Surosh apart is his ability to translate complex thinking into action. He shapes insights into practical frameworks people can use. As an educator, he brings intellectual rigor and genuine care, creating clarity and momentum. His background as a data scientist grounds his work in evidence, enabling measurable impact. Any organization would benefit from having Surosh where thinking, communication, and execution intersect.",
    author: "Dananjaya Hettiarachchi",
    role: "World Champion of Public Speaking 2014",
    image: "/images/home/dananjaya_hettiarachchi.png",
  },
  {
    id: "3",
    quote:
      "Thank you for your time. Your service was excellent and the process for me was easy to understand. I would recommend this service to potential clients.",
    author: "Dianne Russell",
    role: "CEO",
    image: "/images/home/place_holder_1.svg",
  },
];
