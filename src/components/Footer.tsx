
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/d1e2e803-97ff-45fe-a66d-3c9bc1cf2547.png" 
                alt="Legal Growth Architects" 
                className="h-14" 
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Specialized marketing services for law firms in the UAE, ensuring compliance and driving growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="col-span-1">
            <h4 className="font-serif text-xl text-gold mb-4">Explore</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-gold-light transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-gold-light transition-colors">About Us</Link>
              <Link to="/services" className="text-gray-300 hover:text-gold-light transition-colors">Services</Link>
              <Link to="/blog" className="text-gray-300 hover:text-gold-light transition-colors">Insights</Link>
              <Link to="/contact" className="text-gray-300 hover:text-gold-light transition-colors">Contact</Link>
            </nav>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-serif text-xl text-gold mb-4">Services</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/websites" className="text-gray-300 hover:text-gold-light transition-colors">Website Design</Link>
              <Link to="/services/seo" className="text-gray-300 hover:text-gold-light transition-colors">SEO for Lawyers</Link>
              <Link to="/services/content" className="text-gray-300 hover:text-gold-light transition-colors">Content Marketing</Link>
              <Link to="/services/social" className="text-gray-300 hover:text-gold-light transition-colors">Social Media</Link>
              <Link to="/services/advertising" className="text-gray-300 hover:text-gold-light transition-colors">Digital Advertising</Link>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-serif text-xl text-gold mb-4">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="text-gold mt-1 mr-2" />
                <span className="text-gray-300">+971 50 123 4567</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="text-gold mt-1 mr-2" />
                <span className="text-gray-300">info@legalgrowtharchitects.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-gold mt-1 mr-2" />
                <span className="text-gray-300">Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Legal Growth Architects. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-gold-light transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-gold-light transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
