import Image from 'next/image';
import { aboutData } from '@/data/home';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 text-white overflow-hidden"
      style={{ backgroundColor: '#122940' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/shared/patern_background.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold font-noto mb-12">
          About <span className="bg-gold text-navy px-3 py-1 text-white">{aboutData.title}</span>
        </h2>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Bio (takes 2 columns) */}
          <div className="lg:col-span-2 text-gray-300 space-y-4 ml-8 leading-relaxed">
            {aboutData.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base font-noto">{paragraph}</p>
            ))}
          </div>

          {/* Right Column - Speaking Image (takes 1 column) */}
          <div className="relative lg:col-span-1">
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden">
              <Image
                src={aboutData.speakingImage}
                alt="Surosh Pillay speaking at The Next Big Thing"
                fill  
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Quote - Centered at bottom */}
        <blockquote className="text-center mb-8">
          <p className="text-lg md:text-xl mb-4 italic font-noto">
            {aboutData.quoteHeader}
          </p>

          <p className="text-xl md:text-2xl font-semibold text-gold font-noto max-w-4xl mx-auto">
            Impact only happens when people, work people, good systems,<br />
            and insight leads to action.
          </p>

          <p className="text-lg md:text-xl mt-4 italic font-noto">
            {aboutData.quoteCloser}
          </p>
        </blockquote>

        {/* Partner Logos - Centered at bottom */}
        <div className="flex flex-wrap gap-12 items-center justify-center">
          {aboutData.logos.map((logo) => (
            <div key={logo.name} className="relative grayscale hover:grayscale-0 transition-all">
              <Image
                src={logo.image}
                alt={logo.alt}
                width={80}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
