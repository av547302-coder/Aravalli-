import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PropertyCard } from '../components/PropertyCard';
import { Project } from '../types';
import { ArrowDown, Star, Award, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "The Camellias Signature",
    location: "Golf Course Road, Gurgaon",
    price: "₹ 25 Cr Onwards",
    type: "Ultra Luxury",
    image: "https://picsum.photos/seed/arch1/800/1000",
    description: "Experience the pinnacle of urban living overlooking the Aravallis."
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
  }
];

export const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-luxury-black">
        <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full">
          <img 
            src="https://picsum.photos/seed/luxury_hero/1920/1080" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl"
          >
            <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-gold-400 mb-6">
              Est. 2004 • Noida & Delhi
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
              Curating <span className="italic font-light text-gold-100">Legacies</span> <br/> 
              Built in Stone.
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 max-w-2xl leading-relaxed mb-12">
              Aravali Prime Associates connects discerning investors with India's most prestigious real estate addresses.
            </p>
            <Link to="/projects">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black hover:border-white" withArrow>
                Explore Properties
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown className="animate-bounce w-4 h-4 text-gold-400" />
        </motion.div>
      </div>

      {/* Introduction */}
      <Section background="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-black leading-tight">
              A Tradition of <br/>
              <span className="italic text-gold-700">Excellence.</span>
            </h2>
            <div className="w-16 h-[1px] bg-luxury-black" />
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              For over two decades, Aravali Prime Associates has stood as a beacon of trust in the National Capital Region's real estate landscape. We don't just sell properties; we facilitate the acquisition of lifestyle assets that define generations.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h3 className="text-4xl font-serif text-luxury-black mb-1">20+</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-luxury-black mb-1">₹500Cr+</h3>
                <p className="text-xs uppercase tracking-widest text-gray-500">Assets Managed</p>
              </div>
            </div>
            <Link to="/about">
              <Button variant="text" withArrow className="mt-4">Read Our Story</Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-full h-full border border-gold-300 z-0" />
            <img 
              src="https://picsum.photos/seed/office/800/1000" 
              alt="Our Philosophy" 
              className="relative z-10 w-full h-[600px] object-cover shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
             <span className="text-gold-600 text-xs font-bold tracking-widest uppercase block mb-3">Curated Portfolio</span>
             <h2 className="font-serif text-4xl md:text-5xl text-luxury-black">Signature Residences</h2>
          </div>
          <Link to="/projects" className="hidden md:block">
            <Button variant="text" withArrow>View All Collection</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredProjects.map(p => (
            <PropertyCard key={p.id} project={p} />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link to="/projects">
            <Button variant="outline">View All Collection</Button>
          </Link>
        </div>
      </Section>

      {/* Services / Lifestyle */}
      <Section background="dark" className="text-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">The Aravali Privilege</h2>
          <p className="text-gray-400 font-light">Comprehensive consulting services tailored for the elite investor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center space-y-6 p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-500 bg-white/5 backdrop-blur-sm">
            <Award className="w-12 h-12 text-gold-400" strokeWidth={1} />
            <h3 className="font-serif text-2xl">Investment Advisory</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Data-driven insights to maximize returns on high-value asset acquisitions across residential and commercial sectors.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-500 bg-white/5 backdrop-blur-sm">
            <Building2 className="w-12 h-12 text-gold-400" strokeWidth={1} />
            <h3 className="font-serif text-2xl">Luxury Sales</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Exclusive access to off-market listings and premium developments before they hit the public domain.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6 p-8 border border-white/10 hover:border-gold-500/50 transition-colors duration-500 bg-white/5 backdrop-blur-sm">
            <Users className="w-12 h-12 text-gold-400" strokeWidth={1} />
            <h3 className="font-serif text-2xl">Portfolio Management</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              End-to-end management of real estate portfolios ensuring asset appreciation and seamless leasing.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />)}
            </div>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl italic leading-relaxed text-luxury-black mb-10">
            "Aravali Prime Associates understands the nuance of luxury unlike any other. Their attention to detail and discretion made finding our dream home in Lutyens' Delhi a seamless experience."
          </h3>
          <div>
            <p className="font-bold text-sm tracking-widest uppercase text-luxury-black">Rajesh Khanna</p>
            <p className="text-xs text-gray-500 mt-2">Industrialist, New Delhi</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/cta/1920/600" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Begin Your Journey</h2>
          <p className="text-lg text-gray-300 font-light mb-12 max-w-2xl mx-auto">
            Schedule a private consultation with our senior advisors to explore exclusive opportunities tailored to your aspirations.
          </p>
          <Link to="/contact">
            <Button variant="primary" className="bg-white text-luxury-black hover:bg-gold-100 hover:text-black">
              Book Private Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};