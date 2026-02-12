import React from 'react';
import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-luxury-sand py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-4 block">Our Story</span>
            <h1 className="font-serif text-5xl md:text-7xl text-luxury-black mb-8">The Aravali Legacy</h1>
            <div className="w-24 h-[1px] bg-luxury-black mx-auto" />
          </motion.div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <img src="https://picsum.photos/seed/team_meeting/800/1000" alt="Founder" className="w-full h-auto shadow-xl" />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-serif text-4xl text-luxury-black">Established in 2004</h2>
            <p className="text-gray-600 leading-loose font-light text-lg">
              Aravali Prime Associates was founded with a singular vision: to bring transparency, professionalism, and true luxury to the real estate market in Noida and Delhi. 
            </p>
            <p className="text-gray-600 leading-loose font-light text-lg">
              What began as a boutique consultancy has grown into a premier institution trusted by the region's most prominent families and corporate leaders. We believe that a home is not just a structure of brick and mortar, but a canvas for life's most precious moments.
            </p>
            <div className="pt-8">
               <div className="pl-6 border-l-2 border-gold-400">
                 <p className="font-serif text-xl italic text-gray-800">
                   "We measure our success not by the volume of transactions, but by the enduring trust of our clients."
                 </p>
                 <p className="mt-4 text-xs font-bold tracking-widest uppercase">— Founder, Aravali Prime</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">Milestones</h2>
          <div className="space-y-12">
            {[
              { year: '2004', title: 'Inception', desc: 'Aravali Prime Associates founded in Noida.' },
              { year: '2010', title: 'Expansion', desc: 'Opened operations in South Delhi specializing in luxury bungalows.' },
              { year: '2015', title: 'Corporate Alliance', desc: 'Strategic partnership with top Grade-A developers like DLF and Godrej.' },
              { year: '2022', title: 'Digital Transformation', desc: 'Launched premier digital concierge for NRI investors.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="w-24 text-right flex-shrink-0 pt-2">
                  <span className="font-serif text-2xl text-gold-600">{item.year}</span>
                </div>
                <div className="border-l border-gray-300 pl-8 pb-12 relative">
                   <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-gold-400 ring-4 ring-luxury-sand group-hover:bg-gold-600 transition-colors" />
                   <h3 className="font-bold text-lg text-luxury-black mb-2">{item.title}</h3>
                   <p className="text-gray-600 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};