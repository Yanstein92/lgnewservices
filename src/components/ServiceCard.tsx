
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="text-burgundy mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-burgundy font-medium group-hover:text-burgundy-light transition-colors"
      >
        Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;
