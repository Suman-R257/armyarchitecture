import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ["All", "Bedroom", "Living Room", "Kitchen", "Villa", "Apartment"];

const galleryImages = [
  { id: 1, src: "/images/gallery/bed1.jpg", category: "Bedroom" },
  { id: 2, src: "/images/gallery/living1.jpg", category: "Living Room" },
  { id: 3, src: "/images/gallery/kitchen1.jpg", category: "Kitchen" },
  // Add more images...
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");

  const filtered = activeCat === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCat);

  return (
    <div className="pt-20 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-serif text-center mb-12">Project Gallery</h1>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-8 py-3 rounded-full ${activeCat === cat ? 'bg-primary text-dark' : 'bg-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filtered.map(img => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.03 }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl"
            >
              <img src={img.src} alt="" className="w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}