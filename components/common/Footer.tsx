'use client';

import { useState } from 'react';
import Image from 'next/image';
import { contactData } from '@/data/home';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <footer id="contact" className="bg-navy text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo - Centered on Mobile */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <Image
            src="/images/shared/secondary_logo.svg"
            alt="Surosh Pillay"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {/* Site Map */}
          <div className="text-center md:text-left">
            <h3 className="font-noto font-semibold mb-2 text-sm">Site Map</h3>
            <ul className="space-y-1 text-xs font-noto">
              <li>
                <a href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-noto font-semibold mb-4">Contact</h3>
            <p className="text-sm font-noto text-gray-300 mb-2">{contactData.email}</p>
            <p className="text-sm font-noto text-gray-300 mb-4">{contactData.location}</p>
            {/* Social Icons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-navy hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-navy hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-navy hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-navy hover:bg-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-noto font-semibold mb-4 text-center md:text-left">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm font-noto focus:outline-none focus:border-gold"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm font-noto focus:outline-none focus:border-gold"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm font-noto focus:outline-none focus:border-gold resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gold text-navy px-6 py-2 rounded font-noto font-semibold hover:bg-gold/90 transition-all"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm font-noto text-gray-400">
          {currentYear} Surosh Pillay | Impact Entrepreneur | Mauritius
        </div>
      </div>
    </footer>
  );
}
