import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-luxury-sand text-center px-6">
      <h1 className="font-serif text-8xl md:text-9xl text-gold-300 font-bold mb-4">404</h1>
      <h2 className="font-serif text-3xl text-luxury-black mb-6">Page Not Found</h2>
      <p className="text-gray-600 font-light mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};