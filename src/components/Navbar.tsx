import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img alt="Legal Growth Architects" className="h-12" src="/lovable-uploads/76fa1442-cbd7-41fe-af2c-0f1bc709308d.png" />
          </Link>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-burgundy" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-burgundy font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-burgundy font-medium">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-burgundy font-medium">Services</Link>
            <Link to="/blog" className="text-gray-700 hover:text-burgundy font-medium">Insights</Link>
            <Link to="/contact" className="text-gray-700 hover:text-burgundy font-medium">Contact</Link>
            <Link to="/contact" className="btn-primary">Free Consultation</Link>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {isOpen && <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-burgundy font-medium py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-burgundy font-medium py-2" onClick={toggleMenu}>About</Link>
              <Link to="/services" className="text-gray-700 hover:text-burgundy font-medium py-2" onClick={toggleMenu}>Services</Link>
              <Link to="/blog" className="text-gray-700 hover:text-burgundy font-medium py-2" onClick={toggleMenu}>Insights</Link>
              <Link to="/contact" className="text-gray-700 hover:text-burgundy font-medium py-2" onClick={toggleMenu}>Contact</Link>
              <Link to="/contact" className="btn-primary text-center" onClick={toggleMenu}>Free Consultation</Link>
            </div>
          </div>}
      </div>
    </header>;
};
export default Navbar;