import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
  withArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  withArrow = false,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm font-sans font-medium tracking-ultra-wide uppercase transition-all duration-300 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-luxury-black text-white hover:bg-gold-500 border border-transparent",
    outline: "bg-transparent text-luxury-black border border-luxury-black hover:bg-luxury-black hover:text-white",
    text: "bg-transparent text-luxury-black hover:text-gold-600 px-0 py-2 border-b border-transparent hover:border-gold-600"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </motion.button>
  );
};