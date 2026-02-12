import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-wide mb-2">Aravali<span className="text-gold-400">.</span></h2>
              <p className="text-[0.6rem] tracking-[0.3em] uppercase opacity-60">Prime Associates Pvt Ltd</p>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Defining luxury real estate in Noida & Delhi since 2004. We curate exceptional living spaces for the discerning few.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-ultra-wide uppercase text-gold-400 mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Projects', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-sm text-gray-300 hover:text-white transition-colors flex items-center group w-fit">
                    {item}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-ultra-wide uppercase text-gold-400 mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-gold-500" />
                <p className="text-sm font-light">
                  Level 12, Titanium Tower,<br />
                  Sector 16, Noida,<br />
                  Uttar Pradesh 201301
                </p>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="w-5 h-5 shrink-0 text-gold-500" />
                <a href="tel:+919876543210" className="text-sm font-light hover:text-white transition-colors">+91 987 654 3210</a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="w-5 h-5 shrink-0 text-gold-500" />
                <a href="mailto:concierge@aravaliprime.com" className="text-sm font-light hover:text-white transition-colors">concierge@aravaliprime.com</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold tracking-ultra-wide uppercase text-gold-400 mb-6">Stay Informed</h3>
            <p className="text-sm text-gray-400 font-light mb-4">
              Subscribe for exclusive off-market listings.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-gray-700 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors w-full"
              />
              <button className="text-xs tracking-widest uppercase font-medium text-left text-white hover:text-gold-400 transition-colors mt-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2026 Aravali Prime Associates. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};