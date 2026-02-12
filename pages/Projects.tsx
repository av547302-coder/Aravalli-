import React from 'react';
import { Section } from '../components/ui/Section';
import { PropertyCard } from '../components/PropertyCard';
import { Project } from '../types';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: "The Camellias Signature",
    location: "Golf Course Road, Gurgaon",
    price: "₹ 25 Cr Onwards",
    type: "Ultra Luxury",
    image: "https://picsum.photos/seed/arch1/800/1000",
    description: "Experience the pinnacle of urban living."
  },
  {
    id: 2,
    title: "Aravali Forest Estate",
    location: "Sector 150, Noida",
    price: "₹ 8.5 Cr Onwards",
    type: "Villas",
    image: "https://picsum.photos/seed/arch2/800/1000",
    description: "Sprawling estates nestled within a private forest reserve."
  },
  {
    id: 3,
    title: "Magnolia Park Residences",
    location: "Central Delhi",
    price: "₹ 18 Cr Onwards",
    type: "Penthouse",
    image: "https://picsum.photos/seed/arch3/800/1000",
    description: "Heritage inspired architecture for the modern royalty."
  },
  {
    id: 4,
    title: "Golf Links Manor",
    location: "Greater Noida",
    price: "₹ 5.2 Cr Onwards",
    type: "Golf View",
    image: "https://picsum.photos/seed/arch4/800/1000",
    description: "Overlooking the 18-hole championship course."
  },
  {
    id: 5,
    title: "Skyline Icon",
    location: "Noida Expressway",
    price: "₹ 3.5 Cr Onwards",
    type: "Apartment",
    image: "https://picsum.photos/seed/arch5/800/1000",
    description: "Modern vertical living with smart home automation."
  },
  {
    id: 6,
    title: "Vasant Vihar Enclave",
    location: "South Delhi",
    price: "₹ 45 Cr Onwards",
    type: "Builder Floor",
    image: "https://picsum.photos/seed/arch6/800/1000",
    description: "Ultra-premium floors in the heart of the diplomatic enclave."
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-luxury-black text-white py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Collection</h1>
            <p className="text-gray-400 font-light max-w-xl text-lg">
              A curated selection of the finest properties across the National Capital Region.
            </p>
          </motion.div>
        </div>
      </div>

      <Section>
        {/* Filter Mockup */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start">
          {['All', 'Villas', 'Apartments', 'Penthouses', 'Commercial'].map((filter, idx) => (
            <button 
              key={filter}
              className={`px-6 py-2 text-xs uppercase tracking-widest border transition-colors ${
                idx === 0 
                ? 'bg-luxury-black text-white border-luxury-black' 
                : 'bg-transparent text-gray-500 border-gray-200 hover:border-gold-500 hover:text-gold-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {projects.map(p => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
      </Section>
    </div>
  );
};