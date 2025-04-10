
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, title, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "fill-gold text-gold" : "text-gray-300"} 
          />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6 italic">"{quote}"</blockquote>
      <div>
        <div className="font-medium text-burgundy">{author}</div>
        <div className="text-sm text-gray-500">{title}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
