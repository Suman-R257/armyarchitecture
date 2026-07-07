import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Home, Building2, Hammer, Ruler, ChefHat, Trees } from 'lucide-react';

const allServices = [
  { icon: Home, title: "Interior Design", desc: "Complete residential interior design solutions" },
  { icon: Building2, title: "Architecture Planning", desc: "Custom architectural designs and planning" },
  { icon: Hammer, title: "Home Renovation", desc: "Full home renovation and remodeling" },
  { icon: Ruler, title: "3D Visualization", desc: "Photorealistic 3D renders and walkthroughs" },
  { icon: ChefHat, title: "Modular Kitchen", desc: "Modern and functional kitchen designs" },
  { icon: Trees, title: "Landscape Design", desc: "Beautiful outdoor and garden spaces" },
];

export default function HomeServices() {
  const displayServices = allServices.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 tracking-[0.2em] text-sm font-semibold mb-4">
            WHAT WE CAN DO
          </p>
          <h2 className="text-5xl font-bold text-black mb-4">
            Our Services Provided
          </h2>
          <p className="text-xl text-gray-600">
            Crafting beautiful spaces with precision and passion
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ServiceCard service={service} index={i} />
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full font-medium hover:bg-orange-700 transition-all duration-300"
          >
            Discover All Services
            <ArrowRight size={18} />
          </Link>

          
        </motion.div>
      </div>
    </section>
  );
}
