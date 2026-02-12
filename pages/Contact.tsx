import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-4 block">Get in Touch</span>
              <h1 className="font-serif text-5xl md:text-6xl text-luxury-black mb-8">Private <br/> Consultation</h1>
              <p className="text-gray-600 font-light text-lg mb-12 leading-relaxed">
                Whether you are looking to acquire a new residence or diversify your investment portfolio, our team acts with the utmost discretion and expertise.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase text-luxury-black mb-2">Office</h3>
                  <p className="text-gray-600 font-light">Level 12, Titanium Tower<br/>Sector 16, Noida, UP 201301</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase text-luxury-black mb-2">Direct</h3>
                  <p className="text-gray-600 font-light">+91 987 654 3210<br/>concierge@aravaliprime.com</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase text-luxury-black mb-2">Hours</h3>
                  <p className="text-gray-600 font-light">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sunday: By Appointment</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="bg-luxury-sand p-10 md:p-14">
            <h2 className="font-serif text-3xl text-luxury-black mb-8">Request a Call Back</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    className="peer w-full bg-transparent border-b border-gray-400 py-3 text-luxury-black focus:outline-none focus:border-gold-600 transition-colors placeholder-transparent" 
                    placeholder="Name" 
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="peer w-full bg-transparent border-b border-gray-400 py-3 text-luxury-black focus:outline-none focus:border-gold-600 transition-colors placeholder-transparent" 
                    placeholder="Phone" 
                  />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600">
                    Phone Number
                  </label>
                </div>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  className="peer w-full bg-transparent border-b border-gray-400 py-3 text-luxury-black focus:outline-none focus:border-gold-600 transition-colors placeholder-transparent" 
                  placeholder="Email" 
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600">
                  Email Address
                </label>
              </div>

              <div className="relative">
                 <select className="w-full bg-transparent border-b border-gray-400 py-3 text-luxury-black focus:outline-none focus:border-gold-600 transition-colors appearance-none text-base font-light">
                    <option value="" disabled selected>Interested In</option>
                    <option value="buy">Buying Property</option>
                    <option value="sell">Selling Property</option>
                    <option value="invest">Investment Advisory</option>
                 </select>
              </div>

              <div className="relative">
                <textarea 
                  id="message" 
                  rows={4}
                  className="peer w-full bg-transparent border-b border-gray-400 py-3 text-luxury-black focus:outline-none focus:border-gold-600 transition-colors placeholder-transparent resize-none" 
                  placeholder="Message" 
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold-600">
                  Message (Optional)
                </label>
              </div>

              <div className="pt-4">
                <Button className="w-full" withArrow>Submit Request</Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};