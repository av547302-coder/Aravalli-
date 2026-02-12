import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'cream' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'white'
}) => {
  const bgColors = {
    white: 'bg-white',
    cream: 'bg-luxury-sand',
    dark: 'bg-luxury-charcoal text-white'
  };

  return (
    <section id={id} className={`py-24 md:py-32 relative overflow-hidden ${bgColors[background]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-6 md:px-12 lg:px-24"
      >
        {children}
      </motion.div>
    </section>
  );
};