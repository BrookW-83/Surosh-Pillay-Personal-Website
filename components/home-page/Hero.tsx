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
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="font-bold font-noto leading-tight tracking-tight">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2">
                Transforming <span className="bg-gold px-2 sm:px-3 py-1 inline-block text-white">Ambition</span>
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block">
                into <span className="bg-navy text-white px-2 sm:px-3 py-1 inline-block">Measurable Impact.</span>
              </span>
            </h1>

            <p className="font-noto text-base sm:text-lg md:text-xl text-[#7B7B7B] leading-relaxed">
              {heroData.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 md:mt-12">
              <a
                href={heroData.primaryCTA.href}
                className="bg-navy text-white rounded-full font-bold text-base sm:text-lg inline-block hover:bg-gold hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-sm px-6 sm:px-10 py-3"
              >
                {heroData.primaryCTA.text}
              </a>

              <a
                href={heroData.secondaryCTA.href}
                className="border-2 border-navy text-navy rounded-full font-bold text-base sm:text-lg inline-block hover:bg-navy hover:text-white transition-all duration-300 px-6 sm:px-10 py-3"
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
               Impact Entrepreneur,<br />
                PhD in Machine Learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
