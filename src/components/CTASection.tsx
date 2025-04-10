
import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const CTASection = ({ title, description, buttonText, buttonLink, className }: CTASectionProps) => {
  return (
    <section className={`bg-burgundy text-white py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gold">{title}</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">{description}</p>
          <Link to={buttonLink} className="btn-secondary inline-block">{buttonText}</Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
