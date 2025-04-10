
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SolutionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
  ctaText: string;
}

const SolutionCard = ({ title, description, icon, features, link, ctaText }: SolutionCardProps) => {
  return (
    <Card className="flex flex-col h-full bg-white overflow-hidden transition-all duration-300 hover:shadow-lg border border-gold/20">
      <CardHeader className="pb-4">
        <div className="mb-4 text-burgundy">{icon}</div>
        <CardTitle className="text-2xl font-serif text-burgundy">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 flex-grow">
        <ul className="space-y-2 mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={18} className="text-gold mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-gray-100">
        <Link 
          to={link} 
          className="inline-flex items-center text-burgundy font-medium hover:text-burgundy-light transition-colors w-full justify-between"
        >
          <span>{ctaText}</span>
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SolutionCard;
