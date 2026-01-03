export interface Workshop {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  targetAudience: string;
  outcomes: string[];
  image: string;
}

export const workshops: Workshop[] = [
  {
    id: 'data-storytelling',
    title: 'DATA STORYTELLING FOR IMPACT',
    tagline: 'Do your data dashboards often fall flat — met with blank stares, silence, or confusion? Are you struggling to turn hard-earned insights into actions and results?',
    description: 'Imagine if you could present your data in way way that moves your audience to action and not alarming them.',
    problem: 'Data Storytelling for Impact is a practical workshop that teaches you how to turn analysis into clear, compelling narratives that drive actions. You will learn to simplify complexity, highlight what truly matters, and communicate insights with confidence and influence.',
    solution: 'Designed for both technical and non-technical professionals, this workshop helps teams move beyond dashboards and into clarity, alignment, and real impact.',
    targetAudience: 'Both technical and non-technical professionals',
    outcomes: [
      'Move beyond data visualization to uncover insight and craft meaningful stories.',
      'Apply the S-HOWW model to structure data, insight, and decisions.',
      'Communicate complex ideas simply using storytelling techniques.',
      'Create data-driven narratives that influence stakeholders and drive action.',
    ],
    image: '/images/services/services_image_1.svg',
  },
  {
    id: 'ai-products',
    title: 'BUILDING AI PRODUCTS THAT ACTUALLY WORK',
    tagline: 'Are you overwhelmed by AI hype but unsure how to build products that solve real customer problems?',
    description: 'This workshop teaches participants a practical, repeatable approach to building AI-powered products that solve real customer problems. Unlike hype-driven AI sessions, this one focuses on product thinking, experimentation, and rapid validation.',
    problem: 'Participants learn how to identify valuable use cases, map customer pain points, design lightweight prototypes, evaluate feasibility, and run disciplined experiments before committing to full development.',
    solution: 'The workshop blends product strategy, innovation practice, and practical AI application — helping teams avoid over-engineering and build AI solutions that customers actually use.',
    targetAudience: 'Product managers, entrepreneurs, and innovation teams',
    outcomes: [
      'Identify real customer problems that are suitable for AI-powered solutions',
      'Distinguish between "AI use case" and "AI gimmick"',
      'Apply a structured process to ideate, validate, and prioritise AI product opportunities',
      'Design simple, fast prototypes using existing AI tools and APIs',
      'Run rapid experiments to validate assumptions before building',
      'Understand the core components of successful AI products (data → model → UX → workflow → impact)',
      'Build a repeatable internal innovation process that reduces risk and speeds up learning',
    ],
    image: '/images/services/ai_workshop.svg',
  },
];

export const trainerInfo = {
  name: 'Surosh Pillay',
  title: 'Trainer',
  bio: `Surosh Pillay works at the intersection of data, leadership, and impact. With a background in software engineering, he co-founded Tangible Africa, a data company, and now serves as VP of Impact at the African Leadership Group, he has helped build data storytelling systems that enable clearer, faster decisions.

With over 15 years experience as a Toastmaster, he blends analytical rigour with communication skill. He trains leaders and teams to move beyond dashboards and turn insights into narratives that drive action — because data only creates impact when people understand it and act on it.`,
  image: '/images/services/surosh_trainer.svg',
};
