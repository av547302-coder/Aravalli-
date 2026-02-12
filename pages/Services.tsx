import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';
import { TrendingUp, Home, Scale, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-gold-500" />,
      title: "Property Identification",
      desc: "Using our deep market network to identify properties that match your specific lifestyle and investment criteria."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
      title: "Investment Advisory",
      desc: "Strategic advice on asset allocation, market trends, and ROI maximization for serious real estate investors."
    },
    {
      icon: <Scale className="w-8 h-8 text-gold-500" />,
      title: "Legal & Documentation",
      desc: "Complete assistance with title search, registration, and legal due diligence to ensure peace of mind."
    },
    {
      icon: <Home className="w-8 h-8 text-gold-500" />,
      title: "Post-Sales Management",
      desc: "From interior design consultation to property leasing management, our relationship extends beyond the sale."
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-luxury-sand py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="font-serif text-5xl md:text-7xl text-luxury-black mb-6"
          >
            Expertise & Services
          </motion.h1>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="shrink-0 pt-2">
                <div className="w-16 h-16 bg-luxury-sand rounded-full flex items-center justify-center group-hover:bg-luxury-black transition-colors duration-500">
                  {s.icon}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-luxury-black mb-4">{s.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="dark" className="text-center">
        <h2 className="font-serif text-4xl text-white mb-8">Ready to Invest?</h2>
        <p className="text-gray-400 font-light mb-12 max-w-2xl mx-auto">
          Our team is ready to guide you through the opportunities available in today's market.
        </p>
        <Link to="/contact">
          <Button variant="primary" className="bg-white text-black hover:bg-gold-200">Get in Touch</Button>
        </Link>
      </Section>
    </div>
  );
};