
import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = [
  "All",
  "Bedroom",
  "Living Room",
  "Kitchen",
  "Villa",
  "Apartment"
];

const galleryImages = [
  // Bedroom
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1699942681763-d1da9f692489?w=1200&auto=format&fit=crop&q=80",
    category: "Bedroom",
    alt: "Cozy bedroom interior with warm lighting"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1720430498633-a8908d8706d1?w=1200&auto=format&fit=crop&q=80",
    category: "Bedroom",
    alt: "Modern cozy bedroom interior"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6?w=1200&auto=format&fit=crop&q=80",
    category: "Bedroom",
    alt: "Elegant bedroom interior design"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1200&auto=format&fit=crop&q=80",
    category: "Bedroom",
    alt: "Contemporary bedroom design"
  },

  // Living Room
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80",
    category: "Living Room",
    alt: "Modern spacious living room"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80",
    category: "Living Room",
    alt: "Luxury living room interior"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1617104678098-de229db51175?w=1200&auto=format&fit=crop&q=80",
    category: "Living Room",
    alt: "Minimal living room with modern furniture"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format&fit=crop&q=80",
    category: "Living Room",
    alt: "Elegant contemporary living room"
  },

  // Kitchen
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&auto=format&fit=crop&q=80",
    category: "Kitchen",
    alt: "Modern kitchen with island"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&auto=format&fit=crop&q=80",
    category: "Kitchen",
    alt: "Luxury modern kitchen interior"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=1200&auto=format&fit=crop&q=80",
    category: "Kitchen",
    alt: "Contemporary kitchen design"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&auto=format&fit=crop&q=80",
    category: "Kitchen",
    alt: "Bright kitchen with wooden cabinets"
  },

  // Villa
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80",
    category: "Villa",
    alt: "Modern luxury villa exterior"
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
    category: "Villa",
    alt: "Contemporary villa architecture"
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&auto=format&fit=crop&q=80",
    category: "Villa",
    alt: "Luxury villa with modern architecture"
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&auto=format&fit=crop&q=80",
    category: "Villa",
    alt: "Beautiful residential villa"
  },

  // Apartment
  {
    id: 17,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format&fit=crop&q=80",
    category: "Apartment",
    alt: "Modern apartment interior"
  },
  {
    id: 18,
    src: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?w=1200&auto=format&fit=crop&q=80",
    category: "Apartment",
    alt: "Modern apartment living space"
  },
  {
    id: 19,
    src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&auto=format&fit=crop&q=80",
    category: "Apartment",
    alt: "Minimal apartment interior"
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=1200&auto=format&fit=crop&q=80",
    category: "Apartment",
    alt: "Luxury apartment interior design"
  }
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered =
    activeCat === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCat);

  return (
    <div className="pt-20 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Heading */}
        <h1 className="text-5xl font-serif text-center mb-12">
          Project Gallery
        </h1>

        {/* Description */}
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          A curated selection of residential projects showcasing design,
          materials, and construction details. Use the filters below to
          explore specific rooms and project types.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-8 py-3 rounded-full transition-all duration-300 ${
                activeCat === cat
                  ? "bg-primary text-dark shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filtered.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt || img.category}
                className="w-full h-auto object-cover block"
                loading="lazy"
              />

              <p className="mt-2 mb-4 text-sm text-center text-gray-600">
                {img.category}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

