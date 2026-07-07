import { useState } from 'react';
import ProjectCard from '../components/common/ProjectCard';
import { projects } from '../data/projects';

const categories = ["All", "Villa", "Apartment", "Kitchen", "Bedroom"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-20 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-serif text-center mb-6">Featured Projects</h1>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full ${filter === cat ? 'bg-primary text-dark' : 'bg-white border border-beige'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}