
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title:
      "Modern Home Construction Trends Every Homeowner Should Know in 2026",
    excerpt:
      "Explore the latest construction trends, sustainable materials, smart planning, and modern design approaches shaping homes in 2026.",
    category: "Construction",
    date: "June 15, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
    slug: "modern-home-construction-trends-2026",
  },

  {
    id: 2,
    title:
      "How to Plan a Small House for Maximum Space and Comfort",
    excerpt:
      "Learn how proper space planning, room placement, natural light, ventilation, and smart layouts can make a small home feel spacious.",
    category: "Home Planning",
    date: "June 10, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&auto=format&fit=crop&q=80",
    slug: "small-house-space-planning",
  },

  {
    id: 3,
    title:
      "Understanding RCC Construction: Columns, Beams and Slabs Explained",
    excerpt:
      "A simple guide to RCC construction and the important role of columns, beams, slabs, reinforcement, and structural planning.",
    category: "Civil Engineering",
    date: "June 5, 2026",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop&q=80",
    slug: "rcc-construction-columns-beams-slabs",
  },

  {
    id: 4,
    title:
      "How to Choose the Right Materials for Your Home Construction",
    excerpt:
      "From concrete and steel to bricks, flooring, and finishes, understand how to select reliable construction materials for long-lasting results.",
    category: "Materials",
    date: "May 28, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&auto=format&fit=crop&q=80",
    slug: "choosing-construction-materials",
  },

  {
    id: 5,
    title:
      "Budget-Friendly Home Construction Tips Without Compromising Quality",
    excerpt:
      "Discover practical ways to control construction costs through proper planning, material selection, estimation, and efficient execution.",
    category: "Budget & Planning",
    date: "May 20, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&auto=format&fit=crop&q=80",
    slug: "budget-friendly-home-construction",
  },

  {
    id: 6,
    title:
      "Importance of Structural Design Before Starting Construction",
    excerpt:
      "Understand why structural planning is essential for safety, durability, cost control, and the overall performance of a building.",
    category: "Structural Design",
    date: "May 15, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&auto=format&fit=crop&q=80",
    slug: "importance-of-structural-design",
  },

  {
    id: 7,
    title:
      "Natural Light and Ventilation: Key Principles of Good Home Design",
    excerpt:
      "Learn how thoughtful window placement, building orientation, and ventilation planning can create healthier, brighter, and more comfortable homes.",
    category: "Home Planning",
    date: "May 10, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&auto=format&fit=crop&q=80",
    slug: "natural-light-ventilation-home-design",
  },

  {
    id: 8,
    title:
      "Home Renovation Guide: What to Check Before Starting Work",
    excerpt:
      "Planning a renovation? Learn about structural safety, electrical systems, plumbing, materials, budgeting, and design before starting the project.",
    category: "Renovation",
    date: "May 5, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&auto=format&fit=crop&q=80",
    slug: "home-renovation-guide",
  },
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Construction",
    "Home Planning",
    "Civil Engineering",
    "Materials",
    "Budget & Planning",
    "Structural Design",
    "Renovation",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search);

    const matchesCategory =
      activeCategory === "All" ||
      post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 bg-beige min-h-screen">

      {/* ================= BLOG HEADER ================= */}
      <section className="bg-white py-20 border-b border-beige">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Civil Engineering Journal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Expert insights, construction guides, engineering knowledge,
            and practical tips for building safe, durable, and beautiful homes.
          </motion.p>

        </div>
      </section>

      {/* ================= SEARCH & FILTERS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">

          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary transition"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-end">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-white hover:bg-beige border border-beige text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}

          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-beige"
            >

              {/* ================= IMAGE ================= */}
              <div className="relative overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-primary text-xs font-medium px-4 py-2 rounded-full shadow-sm">
                  {post.category}
                </div>

              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-8">

                {/* Date + Reading Time */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-4">

                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>

                </div>

                {/* Title */}
                <h2 className="text-2xl font-serif leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-3">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-3 text-primary hover:text-amber-600 font-medium transition-colors group/btn"
                >
                  Read Full Article

                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </Link>

              </div>

            </motion.article>
          ))}

        </div>

        {/* ================= NO RESULTS ================= */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search
              size={50}
              className="mx-auto mb-5 text-gray-400"
            />

            <p className="text-2xl text-gray-500 mb-2">
              No articles found
            </p>

            <p className="text-gray-400">
              Try different keywords or select another category.
            </p>
          </motion.div>
        )}

      </div>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-dark text-white py-20 mt-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Planning Your Next Construction Project?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Get expert construction insights, engineering tips,
            project guidance, and practical ideas delivered to your inbox.
          </motion.p>

          {/* Newsletter */}
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">

            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:border-primary"
            />

            <button
              className="px-8 py-4 bg-primary hover:bg-amber-600 text-dark font-medium rounded-2xl transition"
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}
