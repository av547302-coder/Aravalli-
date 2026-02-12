import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface PropertyCardProps {
  project: Project;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="group cursor-pointer block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-gray-100">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110"
        />
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-white/90 backdrop-blur text-luxury-black text-[10px] font-bold tracking-widest uppercase px-3 py-1.5">
            {project.type}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
           <div className="flex justify-between items-end">
             <div className="text-white">
                <p className="text-xs font-medium tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{project.price}</p>
             </div>
             <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
               <ArrowUpRight size={20} />
             </div>
           </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-serif text-2xl text-luxury-black group-hover:text-gold-700 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex items-center text-gray-500 text-sm font-light">
          <MapPin size={14} className="mr-1.5 text-gold-500" />
          {project.location}
        </div>
      </div>
    </motion.div>
  );
};