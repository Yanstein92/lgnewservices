
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const About = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-burgundy pt-20 pb-20 md:pt-28 md:pb-28 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              About Legal Growth Architects
            </h1>
            <p className="text-xl mb-0">
              Marketing experts dedicated to the success of legal professionals in the UAE
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We founded Legal Growth Architects with a clear mission: to help UAE law firms navigate the complex landscape of marketing while ensuring full compliance with regulatory requirements.
                </p>
                <p className="text-lg text-gray-700">
                  We believe that legal professionals should be able to grow their practice ethically, focusing on their expertise while we handle the marketing strategies that bring in qualified clients.
                </p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <blockquote className="text-xl font-serif text-burgundy italic">
                  "Our goal is to bridge the gap between effective marketing and ethical compliance, enabling UAE lawyers to grow their practices with confidence."
                </blockquote>
                <div className="mt-4 font-medium">— Founder, Legal Growth Architects</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">Our Story</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h3 className="section-subtitle">The Beginning</h3>
                  <p className="text-gray-700 mb-4">
                    After years of working with legal professionals in the UAE, we noticed a consistent challenge: law firms struggling to market their services effectively while navigating the region's specific regulations.
                  </p>
                  <p className="text-gray-700">
                    Many were either working with general marketing agencies who didn't understand the legal landscape, or they were attempting to handle marketing themselves while juggling client work.
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="aspect-video bg-burgundy/10 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-burgundy font-serif">2020</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 md:order-1 lg:order-0">
                  <div className="aspect-video bg-burgundy/10 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-burgundy font-serif">2021</div>
                  </div>
                </div>
                <div className="md:col-span-7 md:order-0 lg:order-1">
                  <h3 className="section-subtitle">The Solution</h3>
                  <p className="text-gray-700 mb-4">
                    We developed specialized expertise in legal marketing compliance and established relationships with key regulatory bodies in the UAE to ensure our strategies would always adhere to the latest guidelines.
                  </p>
                  <p className="text-gray-700">
                    By focusing exclusively on the legal sector, we've been able to develop deep expertise that delivers real results while maintaining the highest ethical standards.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <h3 className="section-subtitle">Today</h3>
                  <p className="text-gray-700 mb-4">
                    Today, Legal Growth Architects has become the trusted marketing partner for law firms across the UAE, from solo practitioners to large, established firms.
                  </p>
                  <p className="text-gray-700">
                    Our clients appreciate our deep understanding of both the legal profession and the marketing landscape, allowing them to focus on serving their clients while we help bring in new business.
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="aspect-video bg-burgundy/10 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-burgundy font-serif">Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mb-6 text-burgundy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">Integrity</h3>
              <p className="text-gray-600">
                We prioritize ethical marketing practices and compliance with all regulations. Our recommendations will never compromise your professional standing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mb-6 text-burgundy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">Innovation</h3>
              <p className="text-gray-600">
                The digital landscape is constantly evolving. We stay ahead of trends to ensure your firm benefits from the latest effective marketing strategies.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-burgundy/10 rounded-full flex items-center justify-center mb-6 text-burgundy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-burgundy mb-3">Partnership</h3>
              <p className="text-gray-600">
                We view ourselves as an extension of your team, working collaboratively to achieve your growth objectives and celebrating your successes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experts in legal marketing with a deep understanding of the UAE market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-burgundy/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-burgundy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-1">Ahmed Rahman</h3>
                <p className="text-burgundy-light mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With 15+ years of experience in digital marketing and a legal background, Ahmed founded Legal Growth Architects to address the unique challenges facing law firms in the UAE.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-burgundy/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-burgundy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-1">Sarah Al-Qasimi</h3>
                <p className="text-burgundy-light mb-4">Legal Compliance Director</p>
                <p className="text-gray-600 mb-4">
                  A former regulatory advisor, Sarah ensures all our marketing strategies adhere to UAE legal advertising regulations while maximizing effectiveness.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-burgundy/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-burgundy/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-burgundy mb-1">Michael Chen</h3>
                <p className="text-burgundy-light mb-4">Digital Strategy Lead</p>
                <p className="text-gray-600 mb-4">
                  Michael specializes in creating results-driven digital strategies for legal professionals, with particular expertise in SEO and content marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Join the UAE Law Firms We've Helped Grow"
        description="Schedule a consultation to discuss your marketing needs and learn how we can help your practice thrive."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default About;
