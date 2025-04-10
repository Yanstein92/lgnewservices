
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, BarChart, FileText, MessageSquare, Target, BriefcaseBusiness, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const ServiceDetail = ({ title, icon, description, benefits, features, buttonText = "Learn More", buttonLink }) => {
  return (
    <div className="py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-burgundy mb-4">{icon}</div>
            <h2 className="section-title">{title}</h2>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            
            <h3 className="text-xl font-serif font-semibold text-burgundy-light mb-4">Benefits</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-burgundy shrink-0 mt-1 mr-2" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Link to={buttonLink} className="btn-primary inline-flex items-center">
              {buttonText} <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-serif font-semibold text-burgundy mb-6">What's Included</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex">
                  <div className="bg-burgundy/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="text-burgundy font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-burgundy">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "Compliant Website Design",
      icon: <Globe size={48} />,
      description: "We build professional, modern websites specifically designed for UAE law firms that convert visitors into clients while meeting all regulatory standards.",
      benefits: [
        "Establish a professional online presence that builds credibility",
        "Ensure full compliance with UAE legal advertising regulations",
        "Convert more visitors into qualified leads with strategic design",
        "Stand out from competitors with a modern, mobile-friendly site"
      ],
      features: [
        {
          title: "Custom Design",
          description: "Tailored to reflect your firm's unique brand and practice areas"
        },
        {
          title: "Mobile Responsiveness",
          description: "Optimized for all devices to capture clients wherever they search"
        },
        {
          title: "Compliance Review",
          description: "Every element is checked against UAE legal advertising regulations"
        },
        {
          title: "SEO Foundation",
          description: "Basic optimization to help potential clients find you online"
        },
        {
          title: "Content Integration",
          description: "Professionally written content that showcases your expertise"
        }
      ],
      buttonLink: "/contact"
    },
    {
      title: "Ethical SEO for Lawyers",
      icon: <BarChart size={48} />,
      description: "Improve your firm's visibility in search results for relevant legal services in the UAE while strictly following all marketing guidelines.",
      benefits: [
        "Increase qualified traffic from potential clients searching for your services",
        "Build authority in specific practice areas through targeted optimization",
        "Outrank competitors while maintaining ethical standards",
        "Establish your firm as a trusted resource through valuable content"
      ],
      features: [
        {
          title: "Keyword Research",
          description: "Identify valuable search terms for your specific practice areas"
        },
        {
          title: "On-Page Optimization",
          description: "Strategic improvements to website content and structure"
        },
        {
          title: "Local SEO",
          description: "Enhanced visibility for location-specific searches in the UAE"
        },
        {
          title: "Content Strategy",
          description: "Compliant, valuable content that establishes authority"
        },
        {
          title: "Performance Tracking",
          description: "Regular reports on rankings, traffic, and lead generation"
        }
      ],
      buttonLink: "/contact"
    },
    {
      title: "Content Marketing & Thought Leadership",
      icon: <FileText size={48} />,
      description: "Establish your firm as an authority through strategically created, compliant content that showcases your expertise and attracts potential clients.",
      benefits: [
        "Build credibility and trust with potential clients before they contact you",
        "Demonstrate expertise in specific practice areas to establish authority",
        "Improve search visibility with valuable, optimized content",
        "Create ongoing engagement with your target audience"
      ],
      features: [
        {
          title: "Content Strategy",
          description: "Tailored plan addressing your audience's legal questions and concerns"
        },
        {
          title: "Blog & Article Creation",
          description: "Regular, expertly written content that establishes authority"
        },
        {
          title: "Legal Guides & Resources",
          description: "Comprehensive materials that demonstrate your expertise"
        },
        {
          title: "Case Studies",
          description: "Anonymized success stories that showcase your capabilities"
        },
        {
          title: "Distribution Strategy",
          description: "Strategic sharing across multiple channels for maximum visibility"
        }
      ],
      buttonLink: "/contact"
    },
    {
      title: "Social Media Management",
      icon: <MessageSquare size={48} />,
      description: "Build a professional social media presence that enhances your firm's reputation and engages potential clients while strictly adhering to UAE regulations.",
      benefits: [
        "Establish a professional presence on platforms where clients seek legal information",
        "Build relationships with potential clients and referral sources",
        "Showcase your expertise through strategic content sharing",
        "Maintain absolute compliance with UAE legal advertising rules"
      ],
      features: [
        {
          title: "Platform Strategy",
          description: "Focus on networks most relevant to legal professionals in the UAE"
        },
        {
          title: "Content Calendar",
          description: "Planned, consistent posting schedule with compliant content"
        },
        {
          title: "Professional Profile Optimization",
          description: "Ensure all profiles reflect your firm's professionalism"
        },
        {
          title: "Engagement Management",
          description: "Appropriate, timely responses to comments and messages"
        },
        {
          title: "Compliance Monitoring",
          description: "Ongoing review to ensure all activity meets regulations"
        }
      ],
      buttonLink: "/contact"
    },
    {
      title: "Targeted Digital Advertising",
      icon: <Target size={48} />,
      description: "Reach potential clients at the right moment with carefully crafted, compliant advertising campaigns designed specifically for UAE legal professionals.",
      benefits: [
        "Connect with potential clients actively searching for legal services",
        "Target specific practice areas and geographic locations",
        "Maintain full compliance with UAE legal advertising regulations",
        "Maximize ROI through data-driven campaign management"
      ],
      features: [
        {
          title: "Campaign Strategy",
          description: "Tailored approach based on your practice areas and goals"
        },
        {
          title: "Compliant Ad Creation",
          description: "Professionally written ads that meet all regulatory standards"
        },
        {
          title: "Targeted Placement",
          description: "Strategic ad placement to reach your ideal clients"
        },
        {
          title: "Performance Optimization",
          description: "Continuous refinement to improve results and ROI"
        },
        {
          title: "Detailed Reporting",
          description: "Clear insights into campaign performance and lead generation"
        }
      ],
      buttonLink: "/contact"
    },
    {
      title: "Marketing Strategy & Consulting",
      icon: <BriefcaseBusiness size={48} />,
      description: "Comprehensive marketing guidance tailored to your law firm's unique goals, practice areas, and target clients in the UAE legal market.",
      benefits: [
        "Gain a clear roadmap for ethically growing your practice",
        "Maximize marketing budget efficiency with strategic prioritization",
        "Ensure all marketing activities maintain regulatory compliance",
        "Leverage expert guidance specific to the UAE legal market"
      ],
      features: [
        {
          title: "Situation Analysis",
          description: "Comprehensive review of your current marketing and position"
        },
        {
          title: "Custom Strategy Development",
          description: "Tailored plan aligned with your specific goals and budget"
        },
        {
          title: "Competitive Analysis",
          description: "Insights into your competitors' strategies and positioning"
        },
        {
          title: "Implementation Guidance",
          description: "Clear recommendations for executing the strategy effectively"
        },
        {
          title: "Ongoing Consultation",
          description: "Regular reviews and adjustments to optimize performance"
        }
      ],
      buttonLink: "/contact"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-burgundy pt-20 pb-20 md:pt-28 md:pb-28 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl mb-0">
              Specialized marketing solutions for UAE legal professionals
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Comprehensive Marketing Solutions</h2>
            <p className="text-lg text-gray-600">
              We provide a full range of marketing services specifically designed for law firms in the UAE. Each service is built with compliance and effectiveness in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <Link to="#website-design" className="service-card text-center hover:bg-gray-50 group">
              <Globe size={32} className="text-burgundy mx-auto mb-4" />
              <h3 className="font-serif font-medium text-burgundy group-hover:text-burgundy-light transition-colors">Website Design</h3>
            </Link>
            
            <Link to="#seo" className="service-card text-center hover:bg-gray-50 group">
              <BarChart size={32} className="text-burgundy mx-auto mb-4" />
              <h3 className="font-serif font-medium text-burgundy group-hover:text-burgundy-light transition-colors">SEO</h3>
            </Link>
            
            <Link to="#content-marketing" className="service-card text-center hover:bg-gray-50 group">
              <FileText size={32} className="text-burgundy mx-auto mb-4" />
              <h3 className="font-serif font-medium text-burgundy group-hover:text-burgundy-light transition-colors">Content Marketing</h3>
            </Link>
            
            <Link to="#social-media" className="service-card text-center hover:bg-gray-50 group">
              <MessageSquare size={32} className="text-burgundy mx-auto mb-4" />
              <h3 className="font-serif font-medium text-burgundy group-hover:text-burgundy-light transition-colors">Social Media</h3>
            </Link>
            
            <Link to="#advertising" className="service-card text-center hover:bg-gray-50 group">
              <Target size={32} className="text-burgundy mx-auto mb-4" />
              <h3 className="font-serif font-medium text-burgundy group-hover:text-burgundy-light transition-colors">Advertising</h3>
            </Link>
            
            <Link to="#strategy" className="service-card text-center hover:bg-gray-50 group">
              <BriefcaseBusiness size={32} className="text-burgundy mx-auto mb-4" />
              <h3 className="font-serif font-medium text-burgundy group-hover:text-burgundy-light transition-colors">Strategy</h3>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Individual Service Sections */}
      <div id="website-design">
        <ServiceDetail
          title={servicesData[0].title}
          icon={servicesData[0].icon}
          description={servicesData[0].description}
          benefits={servicesData[0].benefits}
          features={servicesData[0].features}
          buttonText="Request a Website Consultation"
          buttonLink={servicesData[0].buttonLink}
        />
      </div>
      
      <div id="seo">
        <ServiceDetail
          title={servicesData[1].title}
          icon={servicesData[1].icon}
          description={servicesData[1].description}
          benefits={servicesData[1].benefits}
          features={servicesData[1].features}
          buttonText="Get an SEO Audit"
          buttonLink={servicesData[1].buttonLink}
        />
      </div>
      
      <div id="content-marketing">
        <ServiceDetail
          title={servicesData[2].title}
          icon={servicesData[2].icon}
          description={servicesData[2].description}
          benefits={servicesData[2].benefits}
          features={servicesData[2].features}
          buttonText="Discuss Content Strategy"
          buttonLink={servicesData[2].buttonLink}
        />
      </div>
      
      <div id="social-media">
        <ServiceDetail
          title={servicesData[3].title}
          icon={servicesData[3].icon}
          description={servicesData[3].description}
          benefits={servicesData[3].benefits}
          features={servicesData[3].features}
          buttonText="Learn About Social Media Management"
          buttonLink={servicesData[3].buttonLink}
        />
      </div>
      
      <div id="advertising">
        <ServiceDetail
          title={servicesData[4].title}
          icon={servicesData[4].icon}
          description={servicesData[4].description}
          benefits={servicesData[4].benefits}
          features={servicesData[4].features}
          buttonText="Explore Advertising Options"
          buttonLink={servicesData[4].buttonLink}
        />
      </div>
      
      <div id="strategy">
        <ServiceDetail
          title={servicesData[5].title}
          icon={servicesData[5].icon}
          description={servicesData[5].description}
          benefits={servicesData[5].benefits}
          features={servicesData[5].features}
          buttonText="Book a Strategy Session"
          buttonLink={servicesData[5].buttonLink}
        />
      </div>
      
      {/* CTA Section */}
      <CTASection
        title="Not Sure Which Service Is Right for Your Firm?"
        description="Schedule a consultation to discuss your marketing needs and get personalized recommendations."
        buttonText="Book Your Free Consultation"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default Services;
