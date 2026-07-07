
import { Link } from 'react-router-dom';
import { MapPin, Calendar, IndianRupee, Square } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-beige"
    >
      <div className="relative overflow-hidden">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md text-primary text-xs font-medium px-4 py-1.5 rounded-full">
          {project.category}
        </div>

        {/* Before/After hint (optional) */}
        {project.beforeImage && (
          <div className="absolute bottom-5 left-5 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
            Before / After
          </div>
        )}
      </div>

      <div className="p-7">
        {/* Title */}
        <h3 className="text-2xl font-serif text-dark mb-3 leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={18} className="text-primary" />
          <span className="text-sm">{project.location}</span>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-4 text-sm mb-6">
          <div>
            <div className="flex items-center gap-1 text-gray-500">
              <Square size={16} />
              <span>Area</span>
            </div>
            <p className="font-medium text-dark">{project.area}</p>
          </div>

          <div>
            <div className="flex items-center gap-1 text-gray-500">
              <IndianRupee size={16} />
              <span>Budget</span>
            </div>
            <p className="font-medium text-dark">{project.budget}</p>
          </div>

          <div>
            <div className="flex items-center gap-1 text-gray-500">
              <Calendar size={16} />
              <span>Year</span>
            </div>
            <p className="font-medium text-dark">{project.year}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 mb-6">
          {project.description}
        </p>

        {/* View Project Button */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-3 text-primary hover:text-amber-600 font-medium group/btn"
        >
          View Project Details
          <span className="transition-transform group-hover/btn:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}