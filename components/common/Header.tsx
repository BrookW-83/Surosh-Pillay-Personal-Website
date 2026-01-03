'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { navItems } from '@/data/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledToFooter, setIsScrolledToFooter] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const testimonialsSection = document.getElementById('testimonials');
      if (testimonialsSection) {
        const rect = testimonialsSection.getBoundingClientRect();
        const isAtTestimonials = rect.top <= 64; // Header height
        setIsScrolledToFooter(isAtTestimonials);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full h-16 transition-colors duration-300 ${
      isScrolledToFooter ? 'bg-navy' : 'bg-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-12 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="h-12 w-auto relative">
            <Image
              src={isScrolledToFooter ? "/images/shared/secondary_logo.svg" : "/images/shared/primary_logo.svg"}
              alt="Surosh Pillay"
              width={120}
              height={48}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 ml-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-bold transition-colors pb-1 ${
                  isScrolledToFooter
                    ? 'text-white hover:text-gray-300'
                    : 'text-foreground hover:text-navy'
                } ${
                  pathname === item.href
                    ? `border-b-2 ${isScrolledToFooter ? 'border-white' : 'border-navy'}`
                    : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`rounded-full hover:bg-opacity-90 transition-all font-bold inline-block ${
                isScrolledToFooter
                  ? 'bg-white text-navy'
                  : 'bg-navy text-white'
              }`}
              style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0.625rem', paddingBottom: '0.625rem' }}
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolledToFooter ? 'text-white' : 'text-navy'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 bg-white">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-foreground hover:text-navy transition-colors text-center text-lg font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-navy text-white px-6 py-3 rounded-full text-center hover:bg-opacity-90 transition-all mt-4 mx-auto max-w-xs"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
