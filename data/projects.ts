export interface DetailedProject {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  sections: {
    title?: string;
    content: string;
  }[];
}

export const detailedProjects: DetailedProject[] = [
  {
    id: "real-time-impact-reporting",
    title: "Real-time impact reporting at scale",
    category: "Impact Analytics",
    image: "/images/projects/real_time_impact.svg",
    description:
      "A comprehensive platform for tracking and visualizing social impact metrics across multiple initiatives.",
    sections: [
      {
        title: "Overview",
        content:
          "A comprehensive platform designed to track and visualize social impact metrics in real-time, enabling organizations to measure their effectiveness and make data-driven decisions at scale.",
      },
      {
        title: "Key Features",
        content:
          "Real-time dashboard with customizable metrics, automated data collection and aggregation, interactive visualizations, and comprehensive reporting capabilities across multiple initiatives and programs.",
      },
      {
        title: "Technology Stack",
        content:
          "Built using modern cloud infrastructure with scalable data processing pipelines, machine learning models for predictive analytics, and responsive web interfaces for stakeholder access.",
      },
      {
        title: "Impact",
        content:
          "Enables organizations to track outcomes across thousands of beneficiaries, identify trends and patterns in program effectiveness, and optimize resource allocation for maximum social impact.",
      },
    ],
  },
  {
    id: "myfirstmillion-experiential",
    title: "MyFirstMillion Experiential simulation",
    category: "EdTech",
    image: "/images/projects/myfirstmillion.svg",
    description:
      "An immersive educational simulation helping young entrepreneurs understand business fundamentals.",
    sections: [
      {
        title: "About the Simulation",
        content:
          "An immersive, hands-on business simulation that teaches young entrepreneurs the fundamentals of building and scaling a business, from ideation to execution and financial management.",
      },
      {
        title: "Learning Objectives",
        content:
          "Participants learn critical business skills including financial planning, market analysis, customer acquisition, revenue modeling, and strategic decision-making through realistic scenarios and challenges.",
      },
      {
        title: "Interactive Experience",
        content:
          "Features gamified learning modules, real-time feedback systems, collaborative team challenges, and adaptive difficulty levels that respond to participant progress and understanding.",
      },
      {
        title: "Results",
        content:
          "Thousands of young entrepreneurs have completed the simulation, gaining practical business knowledge and confidence to launch their own ventures and make informed strategic decisions.",
      },
    ],
  },
  {
    id: "babelfish-translation",
    title: "BabelFish Machine Translation",
    category: "AI/ML",
    image: "/images/projects/babelfish.svg",
    description:
      "Machine translation system for breaking down language barriers in global communication.",
    sections: [
      {
        title: "Neural Machine Translation Architecture",
        content:
          "Built on state-of-the-art transformer models with encoder-decoder architecture, utilizing self-attention and multi-head attention mechanisms to process entire input sequences simultaneously and capture long-range dependencies for accurate translations.",
      },
      {
        title: "Core Technology",
        content:
          "Employs deep learning models trained on large bilingual corpora, combining translation models with language models to accurately translate text while preserving meaning and style. Uses advanced techniques like back-translation and semi-supervised learning for improved performance in low-resource settings.",
      },
      {
        title: "Key Features",
        content:
          "Supports multilingual information retrieval, content localization, and real-time translation. Addresses lexical and syntactic ambiguities through attention mechanisms, with specialized handling for domain-specific terminology, jargon, and metaphors.",
      },
      {
        title: "Applications",
        content:
          "Enables cross-linguistic communication in daily applications, business contexts, and specialized fields like medical translation. Integrates with speech recognition and text-to-speech systems for comprehensive language barrier solutions.",
      },
    ],
  },
  {
    id: "koob-dynamic-pricing",
    title: "Knob Dynamic Pricing for E-commerce stores",
    category: "E-commerce",
    image: "/images/projects/koob.png",
    description:
      "AI-powered dynamic pricing algorithm that optimizes revenue for e-commerce platforms.",
    sections: [
      {
        title: "Dynamic Pricing Engine",
        content:
          "An AI-powered pricing optimization system that automatically adjusts product prices in real-time based on market conditions, competitor pricing, demand patterns, and inventory levels to maximize revenue and profit margins.",
      },
      {
        title: "Machine Learning Models",
        content:
          "Utilizes advanced machine learning algorithms to predict optimal price points, forecast demand elasticity, and identify pricing opportunities across different product categories and customer segments.",
      },
      {
        title: "Integration & Automation",
        content:
          "Seamlessly integrates with major e-commerce platforms and inventory management systems, providing automated price updates and real-time analytics without manual intervention.",
      },
      {
        title: "Business Impact",
        content:
          "E-commerce stores using Knob have seen significant improvements in revenue optimization, reduced pricing errors, improved competitive positioning, and better inventory turnover rates.",
      },
    ],
  },
  {
    id: "voice-biometrics-banking",
    title: "Voice biometrics for Telephone banking",
    category: "Security & Biometrics",
    image: "/images/projects/voice_biometrics.jpeg",
    description:
      "Surosh's research and publications largely address the performance degradation of voice biometric systems (speaker recognition) when there is a mismatch between the noise conditions during training and testing.",
    sections: [
      {
        title: "Doctoral Thesis",
        content:
          'His 2011 PhD thesis from the University of Hertfordshire was titled "Voice Biometrics under Mismatched Noise Conditions".',
      },
      {
        title: "Proposed Solutions",
        content:
          "To address the problem of noise mismatch, he introduced and investigated a novel approach based on minimizing the noise mismatch, which included a new form of Test-Normalisation (T-Norm) to enhance matching scores in adverse conditions.",
      },
      {
        title: "Multimodal Biometrics",
        content:
          "Pillay has also contributed to research on enhancing the accuracy of multimodal biometric systems (e.g., combining face and voice recognition) using score-level fusion techniques.",
      },
      {
        title: "Affiliation",
        content:
          "As of a 2008 publication, Surosh Pillay was engaged in a PhD research program at the University of Hertfordshire. His co-authors included Dr. A. Ariyaeeinia and Mark Pawlewski, both notable figures in audio processing and biometrics research.",
      },
      {
        title: "About Voice Biometrics",
        content:
          "Voice biometrics is the science of verifying a person's identity based on their unique vocal characteristics, which include pitch range, harmonic resonance, and speaking rhythm, among others. It is a form of behavioral biometric used in applications such as telephone banking, remote access control, and forensic speaker identification. A major challenge in practical deployment is the variability in speech caused by environmental noise, which Surosh Pillay's research aimed to resolve.",
      },
    ],
  },
  {
    id: "piksou-money-saving",
    title: "PikSou money saving app",
    category: "FinTech",
    image: "/images/projects/piksou.jpeg",
    description:
      "Compare supermarket deals in Mauritius and save every week.",
    sections: [
      {
        title: "Save Money",
        content:
          "Compare prices across all supermarkets and find the best deals. Get instant access to the latest promotions and discounts, and monitor how much you save on every shopping trip.",
      },
      {
        title: "Smart Search & Compare",
        content:
          "Serser ek konpare malin - Find the best deals across all supermarkets in Mauritius with our intelligent search.",
      },
      {
        title: "Bookmark Your Favorites",
        content:
          "Gard to favori - Save deals you love and never miss out on your favorite products.",
      },
      {
        title: "Track Your Savings",
        content:
          "Gete to ekonomi - See exactly how much you're saving with every purchase.",
      },
      {
        title: "Smart Filtering",
        content:
          "Filtre malin - Filter deals by category, store, or price range to find exactly what you need.",
      },
      {
        title: "Join Thousands of Mauritians",
        content:
          "Join thousands of Mauritians who are already saving money with PikSou. It's free, it's easy, and it's made right here in paradise!",
      },
    ],
  },
];
