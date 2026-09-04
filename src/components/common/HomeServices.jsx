import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Home, Building2, Hammer, Ruler, Layers } from 'lucide-react';

const allServices = [
  { icon: Building2, title: "Structural Design & Calculations", desc: "Safe, code-compliant structural designs for homes." },
  { icon: Home, title: "Architectural Layouts", desc: "Optimized layouts focusing on space and functionality." },
  { icon: Hammer, title: "Construction Supervision", desc: "On-site supervision to ensure build quality and compliance." },
  { icon: Ruler, title: "Renovation & Retrofitting", desc: "Upgrades and strengthening solutions for existing structures." },
  { icon: Layers, title: "3D Modeling & Working Drawings", desc: "Clear drawings and 3D visuals for accurate execution." },
  { icon: Hammer, title: "BOQ & Permit Support", desc: "Estimates and permit-ready documentation." },
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
            Practical residential engineering services to design and deliver your dream home.
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
