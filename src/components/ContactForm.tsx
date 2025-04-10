
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firmName: '',
    message: '',
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Website Design',
    'SEO',
    'Content Marketing',
    'Social Media',
    'Digital Advertising',
    'Strategy Consulting'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    setFormData(prev => {
      if (checked) {
        return { ...prev, services: [...prev.services, value] };
      } else {
        return { ...prev, services: prev.services.filter(service => service !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        firmName: '',
        message: '',
        services: []
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
          />
        </div>
        <div>
          <label htmlFor="firmName" className="block text-sm font-medium text-gray-700 mb-1">Law Firm Name</label>
          <input
            type="text"
            id="firmName"
            name="firmName"
            value={formData.firmName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
          />
        </div>
      </div>
      
      <div>
        <span className="block text-sm font-medium text-gray-700 mb-1">Services of Interest</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {services.map(service => (
            <div key={service} className="flex items-center">
              <input
                type="checkbox"
                id={service.replace(/\s+/g, '-').toLowerCase()}
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-burgundy border-gray-300 rounded focus:ring-burgundy"
              />
              <label 
                htmlFor={service.replace(/\s+/g, '-').toLowerCase()} 
                className="ml-2 text-sm text-gray-700"
              >
                {service}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
          required
        ></textarea>
      </div>
      
      <div>
        <button 
          type="submit" 
          className="btn-primary w-full flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : (
            <>Send Message <Send size={16} className="ml-2" /></>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
