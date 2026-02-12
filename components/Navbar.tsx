import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50 group">
            <h1 className={`font-serif text-2xl md:text-3xl tracking-wide uppercase font-bold transition-colors ${
              (isScrolled || isMobileMenuOpen) ? 'text-luxury-black' : 'text-white'
            }`}>
              Aravali<span className="text-gold-400">.</span>
            </h1>
            <p className={`text-[0.6rem] tracking-[0.3em] uppercase opacity-80 ${
              (isScrolled || isMobileMenuOpen) ? 'text-luxury-black' : 'text-white'
            }`}>
              Prime Associates
            </p>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium tracking-ultra-wide uppercase relative group transition-colors ${
                  isScrolled ? 'text-luxury-black hover:text-gold-600' : 'text-white/90 hover:text-white'
                } ${location.pathname === item.path ? 'text-gold-500' : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`} />
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
             <a href="tel:+919876543210" className={`hidden md:flex items-center gap-2 text-xs font-medium tracking-widest uppercase transition-colors ${
               isScrolled ? 'text-luxury-black hover:text-gold-600' : 'text-white hover:text-gold-200'
             }`}>
               <Phone size={14} />
               <span>+91 987 654 3210</span>
             </a>
             
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className={`md:hidden z-50 p-2 focus:outline-none ${
                 (isScrolled || isMobileMenuOpen) ? 'text-luxury-black' : 'text-white'
               }`}
             >
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="text-3xl font-serif text-luxury-black hover:text-gold-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <a href="tel:+919876543210" className="text-sm font-sans tracking-widest text-gold-600 uppercase">
                  Schedule Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};