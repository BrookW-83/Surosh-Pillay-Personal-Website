import Image from "next/image";
import { heroData } from "@/data/home";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/home/background.gif"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8">
            <h1 className="font-bold font-noto leading-tight tracking-tight">
              <span className="text-3xl md:text-4xl lg:text-5xl block mb-2 whitespace-nowrap">
                Transforming <span className="bg-gold px-3 py-1 inline-block text-white">Ambition</span>
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl block whitespace-nowrap">
                into <span className="bg-navy text-white px-3 py-1 inline-block">Measurable Impact.</span>
              </span>
            </h1>

            <p className="font-noto text-xl text-[#7B7B7B] leading-relaxed">
              {heroData.subheadline}
            </p>

            <div className="flex flex-wrap gap-6 mt-12">
              <a
                href={heroData.primaryCTA.href}
                className="bg-navy text-white rounded-full font-bold text-lg inline-block hover:bg-opacity-90 transition-all shadow-sm"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
              >
                {heroData.primaryCTA.text}
              </a>

              <a
                href={heroData.secondaryCTA.href}
                className="border-2 border-navy text-navy rounded-full font-bold text-lg inline-block hover:bg-navy hover:text-white transition-all"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
              >
                {heroData.secondaryCTA.text}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md min-h-[500px] lg:min-h-[600px]">
              <Image
                src={heroData.image}
                alt="Surosh Pillay"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Name and Title */}
            <div className="text-center">
              <h3 className="bg-navy text-white rounded-xl font-bold text-2xl lg:text-3xl text-navy mb-2">
                Surosh Pillay
              </h3>
              <p className="bg-white text-base lg:text-lg text-gold font-semibold leading-relaxed">
                VP of Impact, Data Storytelling Coach,<br />
                PhD in Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
