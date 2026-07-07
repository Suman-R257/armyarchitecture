import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "2026 Latest Home Design Trends That Will Dominate Luxury Interiors",
    excerpt: "From warm minimalism to biophilic design — discover the top trends shaping beautiful homes this year.",
    category: "Trends",
    date: "June 15, 2026",
    readTime: "8 min",
    image: "/images/blog/trends.jpg",
    slug: "2026-home-design-trends"
  },
  {
    id: 2,
    title: "Small Bedroom Design Ideas: Maximize Space Without Compromising Style",
    excerpt: "Smart storage solutions, color psychology, and layout tricks to make your small bedroom feel luxurious.",
    category: "Bedroom",
    date: "June 10, 2026",
    readTime: "6 min",
    image: "/images/blog/small-bedroom.jpg",
    slug: "small-bedroom-design-ideas"
  },
  {
    id: 3,
    title: "Modern Kitchen Layouts That Blend Functionality with Elegance",
    excerpt: "Exploring open vs closed kitchens, island designs, and material combinations for the perfect family kitchen.",
    category: "Kitchen",
    date: "June 5, 2026",
    readTime: "10 min",
    image: "/images/blog/modern-kitchen.jpg",
    slug: "modern-kitchen-layouts"
  },
  {
    id: 4,
    title: "How to Choose the Right Color Palette for Your Home",
    excerpt: "Understanding color psychology and creating harmonious palettes that reflect your personality.",
    category: "Interior Tips",
    date: "May 28, 2026",
    readTime: "7 min",
    image: "/images/blog/color-palette.jpg",
    slug: "choosing-home-color-palette"
  },
  {
    id: 5,
    title: "Budget Home Renovation Tips That Deliver Luxury Results",
    excerpt: "Smart ways to renovate your home without breaking the bank while maintaining premium quality.",
    category: "Renovation",
    date: "May 20, 2026",
    readTime: "9 min",
    image: "/images/blog/renovation.jpg",
    slug: "budget-home-renovation"
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Trends", "Bedroom", "Kitchen", "Interior Tips", "Renovation"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 bg-beige min-h-screen">
      {/* Blog Header */}
      <section className="bg-white py-20 border-b border-beige">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Design Journal
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, trends, and expert tips from Anika Sharma on creating beautiful homes
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white hover:bg-beige border border-beige'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-beige"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-primary text-xs font-medium px-4 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-2xl font-serif leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-[15px] line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-3 text-primary hover:text-amber-600 font-medium group/btn"
                >
                  Read Full Article
                  <ArrowRight className="transition group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No articles found. Try different keywords.</p>
          </div>
        )}
      </div>

      {/* CTA Banner */}
      <div className="bg-dark text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-serif mb-6">Want More Design Inspiration?</h3>
          <p className="text-lg text-gray-300 mb-8">Subscribe to our newsletter for exclusive tips and early access to new projects.</p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none"
            />
            <button className="px-10 bg-primary hover:bg-amber-600 text-dark font-medium rounded-2xl transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}