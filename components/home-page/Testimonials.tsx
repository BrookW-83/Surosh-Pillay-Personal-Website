import Image from 'next/image';
import { testimonialsData } from '@/data/home';

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-20 pb-8 bg-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-noto font-bold mb-2">
            Testimonials
          </h2>
          <p className="text-base font-noto text-slate-300">
            What people are saying
          </p>
        </div>

        {/* Testimonials - Middle Card Larger */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-white/30 ${
                index === 1
                  ? 'lg:scale-105 lg:z-10 p-6 lg:w-[340px]'
                  : 'p-5 lg:w-[300px]'
              }`}
              style={{
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              {/* Quote Icon */}
              <div className="mb-3">
                <svg
                  className={`${index === 1 ? 'w-8 h-8' : 'w-7 h-7'} text-slate-300 opacity-50`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>

              {/* Quote */}
              <p className={`font-noto text-slate-100 mb-4 leading-relaxed ${index === 1 ? 'text-base' : 'text-sm'}`}>
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                <div className={`relative rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/30 ${index === 1 ? 'w-12 h-12' : 'w-10 h-10'}`}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className={`font-noto font-bold text-white ${index === 1 ? 'text-base' : 'text-sm'}`}>
                    {testimonial.author}
                  </p>
                  <p className={`font-noto text-slate-300 ${index === 1 ? 'text-xs' : 'text-xs'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
