
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-burgundy pt-20 pb-20 md:pt-28 md:pb-28 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl mb-0">
              Ready to grow your law practice? We're here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="section-subtitle mb-6">Contact Information</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Phone size={20} className="text-burgundy mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-burgundy">Phone</h3>
                      <p className="text-gray-700">+971 50 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="text-burgundy mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-burgundy">Email</h3>
                      <p className="text-gray-700">info@legalgrowtharchitects.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={20} className="text-burgundy mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-burgundy">Office</h3>
                      <p className="text-gray-700">
                        Dubai Media City<br />
                        Building 5, Office 304<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-serif font-semibold text-burgundy mb-3">Office Hours</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday:</span>
                      <span>9:00 AM - 12:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <h2 className="section-subtitle mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">What makes you different from other marketing agencies?</h3>
                <p className="text-gray-700">
                  We specialize exclusively in marketing for legal professionals in the UAE. This focus gives us deep expertise in both the marketing strategies that work best for law firms and the specific regulatory requirements that govern legal advertising in the region.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">How much do your services cost?</h3>
                <p className="text-gray-700">
                  Our services are customized based on each law firm's specific needs and goals. We offer different service packages and will provide transparent pricing during your free consultation after understanding your requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">How long until we see results?</h3>
                <p className="text-gray-700">
                  Timeline varies based on your goals and chosen services. Some initiatives like website improvements and advertising can show results quickly, while others like SEO and content marketing are longer-term investments that build momentum over time. We'll provide realistic timelines during our initial consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">How do you ensure compliance with UAE regulations?</h3>
                <p className="text-gray-700">
                  Our team includes experts in UAE legal marketing regulations. We stay current with all guidelines and ensure every aspect of your marketing meets compliance standards. We also conduct regular audits to maintain ongoing compliance as regulations evolve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
