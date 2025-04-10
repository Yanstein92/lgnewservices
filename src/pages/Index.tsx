
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, BarChart, FileText, MessageSquare, Target, BriefcaseBusiness, Database, Bot, Scale } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import SolutionCard from '@/components/SolutionCard';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

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

  const solutions = [
    {
      title: 'Law Office Management System',
      description: 'A comprehensive practice management solution seamlessly integrated with your website. Manage cases, documents, billing, and client communications in one secure platform.',
      imageUrl: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80',
      features: [
        'Client portal integration',
        'Document management',
        'Time tracking & billing',
        'Calendar & scheduling'
      ],
      link: '/solutions/management',
      ctaText: 'Explore Office Solutions'
    },
    {
      title: 'AI Lawyer Assistant',
      description: 'An advanced AI assistant that helps your team research cases, explore legal solutions, and draft documents - all while ensuring compliance with UAE law requirements.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Case research automation',
        'UAE law compliance checks',
        'Document drafting assistance',
        'Legal precedent analysis'
      ],
      link: '/solutions/ai-assistant',
      ctaText: 'Discover AI Solutions'
    },
    {
      title: 'Legal Analytics Platform',
      description: 'Data-driven insights to optimize your practice performance, identify trends, and make strategic decisions based on comprehensive analytics tailored to the UAE legal landscape.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Practice area performance metrics',
        'Client acquisition analysis',
        'Case outcome predictions',
        'Resource optimization tools'
      ],
      link: '/solutions/analytics',
      ctaText: 'See Analytics Platform'
    }
  ];

  const testimonials = [
    {
      quote: "Their deep understanding of both marketing and UAE legal regulations has been invaluable to our firm's growth.",
      author: "Mohammed Al-Mansoori",
      title: "Managing Partner, Al-Mansoori Law Firm",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      quote: "Legal Growth Architects helped us establish a professional online presence while ensuring complete compliance.",
      author: "Sarah Johnson",
      title: "Principal Attorney, Johnson Legal Consultants",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
    },
    {
      quote: "The most trustworthy marketing partner for legal professionals. They truly understand our industry's unique challenges.",
      author: "Ahmed Hassan",
      title: "Senior Partner, Hassan & Associates",
      rating: 5,
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    }
  ];

  const pressPartners = [
    {
      name: "The Legal Gazette",
      logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      url: "#"
    },
    {
      name: "Emirates Law Journal",
      logo: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      url: "#"
    },
    {
      name: "UAE Business Review",
      logo: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      url: "#"
    },
    {
      name: "Gulf Legal Times",
      logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      url: "#"
    }
  ];

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2105&q=80",
      title: "Grow Your UAE Law Practice",
      subtitle: "Ethically & Effectively",
      description: "Specialized marketing services for legal professionals who need to navigate the UAE's complex advertising regulations."
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Tailored Solutions",
      subtitle: "For Legal Professionals",
      description: "Custom-built marketing and technology solutions designed specifically for UAE law firms."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[80vh] w-full">
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                      <div className="max-w-3xl mx-auto text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 animate-fade-in">
                          {slide.title} <span className="text-gold">{slide.subtitle}</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                          {slide.description}
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
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
            <CarouselPrevious className="relative left-0 bg-white/20 hover:bg-white/40 text-white border-none" />
            <CarouselNext className="relative right-0 bg-white/20 hover:bg-white/40 text-white border-none" />
          </div>
        </Carousel>
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
      
      {/* Solutions Section */}
      <section className="py-20 bg-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Specialized Solutions for Lawyers</h2>
            <p className="text-lg text-gray-600">
              Beyond marketing, we offer comprehensive technology solutions designed specifically for UAE legal professionals to streamline operations and enhance client service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                title={solution.title}
                description={solution.description}
                imageUrl={solution.imageUrl}
                features={solution.features}
                link={solution.link}
                ctaText={solution.ctaText}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach Section - Redesigned */}
      <section className="py-20 bg-gradient-to-r from-burgundy-dark to-burgundy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gold">Our Approach</h2>
            <p className="text-lg text-white/80">
              A systematic process tailored to the unique needs of legal professionals in the UAE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-gold text-burgundy flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">1</div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-4 text-center">Discovery</h3>
              <p className="text-white/90 text-center">We learn about your practice, goals, and current marketing efforts through an in-depth consultation.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-gold text-burgundy flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">2</div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-4 text-center">Strategy</h3>
              <p className="text-white/90 text-center">We develop a tailored marketing plan that aligns with regulations and your specific business objectives.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-gold text-burgundy flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">3</div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-4 text-center">Implementation</h3>
              <p className="text-white/90 text-center">Our team executes the plan with meticulous attention to detail, compliance, and brand consistency.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-gold text-burgundy flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">4</div>
              <h3 className="text-xl font-serif font-semibold text-gold mb-4 text-center">Optimization</h3>
              <p className="text-white/90 text-center">We continuously measure, report, and refine strategies to maximize ROI and improve results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Press Media Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Featured In</h2>
            <p className="text-lg text-gray-600">
              Our expertise has been recognized by leading publications in the legal and business community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {pressPartners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.url} 
                className="block bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - with Photos */}
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
                imageUrl={testimonial.imageUrl}
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
