
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, BarChart, FileText, MessageSquare, Target, BriefcaseBusiness } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';

const Index = () => {
  const services = [
    {
      title: 'Compliant Website Design',
      description: 'Professionally designed websites that adhere to UAE legal regulations while effectively showcasing your expertise.',
      icon: <Globe size={36} />,
      link: '/services/websites'
    },
    {
      title: 'Ethical SEO for Lawyers',
      description: 'Get found by potential clients searching for legal services in the UAE, while strictly following marketing guidelines.',
      icon: <BarChart size={36} />,
      link: '/services/seo'
    },
    {
      title: 'Content Marketing',
      description: 'Establish thought leadership with compliant, high-quality content that builds trust with potential clients.',
      icon: <FileText size={36} />,
      link: '/services/content'
    },
    {
      title: 'Social Media Management',
      description: 'Professional social media presence that enhances your firm\'s reputation while adhering to regulations.',
      icon: <MessageSquare size={36} />,
      link: '/services/social'
    },
    {
      title: 'Targeted Digital Advertising',
      description: 'Compliant ad campaigns that reach your ideal clients at the right time with the right message.',
      icon: <Target size={36} />,
      link: '/services/advertising'
    },
    {
      title: 'Marketing Strategy & Consulting',
      description: 'Comprehensive marketing plans tailored to your firm\'s unique needs and practice areas.',
      icon: <BriefcaseBusiness size={36} />,
      link: '/services/strategy'
    }
  ];

  const testimonials = [
    {
      quote: "Their deep understanding of both marketing and UAE legal regulations has been invaluable to our firm\'s growth.",
      author: "Mohammed Al-Mansoori",
      title: "Managing Partner, Al-Mansoori Law Firm",
      rating: 5
    },
    {
      quote: "Legal Growth Architects helped us establish a professional online presence while ensuring complete compliance.",
      author: "Sarah Johnson",
      title: "Principal Attorney, Johnson Legal Consultants",
      rating: 5
    },
    {
      quote: "The most trustworthy marketing partner for legal professionals. They truly understand our industry\'s unique challenges.",
      author: "Ahmed Hassan",
      title: "Senior Partner, Hassan & Associates",
      rating: 5
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-burgundy to-burgundy-dark text-white pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Grow Your UAE Law Practice, <span className="text-gold">Ethically & Effectively</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Specialized marketing services for legal professionals who need to navigate the UAE's complex advertising regulations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn-secondary text-center">
                Book a Free Consultation
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors duration-300 text-center">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">
              We understand both the legal profession and the marketing landscape in the UAE, offering specialized expertise that generic agencies simply can't match.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-burgundy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">Legal Industry Expertise</h3>
              <p className="text-gray-600">
                We exclusively work with legal professionals, giving us a deep understanding of your unique challenges and opportunities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-burgundy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">Compliance Focused</h3>
              <p className="text-gray-600">
                All our strategies are designed with UAE legal marketing regulations in mind, ensuring your firm stays compliant.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-burgundy/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-burgundy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">Results-Driven Approach</h3>
              <p className="text-gray-600">
                We measure success by the growth of your practice, focusing on strategies that deliver qualified clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive marketing solutions designed specifically for legal professionals in the UAE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Approach</h2>
            <p className="text-lg text-gray-600">
              A systematic process tailored to the unique needs of legal professionals in the UAE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">Discovery</h3>
              <p className="text-gray-600">We learn about your practice, goals, and current marketing efforts.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a tailored marketing plan that aligns with regulations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">Implementation</h3>
              <p className="text-gray-600">Our team executes the plan with attention to detail and compliance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-burgundy text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">Optimization</h3>
              <p className="text-gray-600">We continuously measure, report, and refine to improve results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from law firms that have transformed their practices with our help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                title={testimonial.title}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Ready to Grow Your Legal Practice?"
        description="Schedule a free consultation to discuss how we can help your firm thrive while staying compliant with UAE regulations."
        buttonText="Book Your Free Consultation"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default Index;
