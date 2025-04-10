
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'legal-marketing', name: 'Legal Marketing' },
    { id: 'uae-regulations', name: 'UAE Regulations' },
    { id: 'compliance', name: 'Compliance' },
    { id: 'growth-strategies', name: 'Growth Strategies' },
  ];
  
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Navigating the New UAE Legal Marketing Regulations: A Complete Guide',
      excerpt: 'Understanding the latest guidelines for marketing legal services in the UAE and how to ensure your firm stays compliant while effectively attracting clients.',
      date: 'April 5, 2025',
      author: 'Sarah Al-Qasimi',
      category: 'uae-regulations',
      slug: 'navigating-uae-legal-marketing-regulations'
    },
    {
      id: '2',
      title: 'Digital Marketing Strategies for Law Firms: What Works in the UAE',
      excerpt: 'Discover the most effective digital marketing approaches specifically tailored for UAE law firms, with real-world examples and implementation guidance.',
      date: 'March 22, 2025',
      author: 'Michael Chen',
      category: 'legal-marketing',
      slug: 'digital-marketing-strategies-uae-law-firms'
    },
    {
      id: '3',
      title: 'Content Marketing for Lawyers: Building Authority While Staying Compliant',
      excerpt: 'How to create valuable content that establishes your expertise and attracts clients while adhering to the strict regulations in the UAE legal sector.',
      date: 'March 10, 2025',
      author: 'Ahmed Rahman',
      category: 'compliance',
      slug: 'content-marketing-lawyers-compliance'
    },
    {
      id: '4',
      title: 'SEO for Law Firms: A Guide to Ranking Higher in UAE Search Results',
      excerpt: 'Practical strategies to improve your law firm's visibility in search engines while focusing on the unique aspects of the UAE legal market.',
      date: 'February 28, 2025',
      author: 'Michael Chen',
      category: 'growth-strategies',
      slug: 'seo-law-firms-uae-guide'
    },
    {
      id: '5',
      title: 'The Ethics of Legal Advertising in the UAE: Best Practices',
      excerpt: 'Understanding the ethical considerations of legal marketing in the UAE and how to create advertising that is both effective and compliant.',
      date: 'February 15, 2025',
      author: 'Sarah Al-Qasimi',
      category: 'compliance',
      slug: 'ethics-legal-advertising-uae'
    },
    {
      id: '6',
      title: 'How to Design a Law Firm Website That Converts Visitors to Clients',
      excerpt: 'Key elements every UAE law firm website should include to effectively turn visitors into qualified leads while maintaining professional standards.',
      date: 'January 29, 2025',
      author: 'Ahmed Rahman',
      category: 'legal-marketing',
      slug: 'law-firm-website-design-converts'
    }
  ];
  
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-burgundy pt-20 pb-20 md:pt-28 md:pb-28 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl mb-0">
              Expert guidance on legal marketing in the UAE
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Categories */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-burgundy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-4xl text-burgundy/20 font-serif">Article</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-burgundy mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-burgundy-light transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-burgundy font-medium hover:text-burgundy-light transition-colors"
                  >
                    Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on legal marketing in the UAE.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-burgundy focus:border-burgundy"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Need Personalized Marketing Guidance?"
        description="Schedule a consultation to discuss your law firm's specific marketing challenges and goals."
        buttonText="Book Your Free Consultation"
        buttonLink="/contact"
      />
      
      <Footer />
    </>
  );
};

export default Blog;
