import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <div className="pt-20 bg-beige min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <img src={project.image} alt={project.title} className="w-full h-[600px] object-cover rounded-3xl mb-12" />
        
        <h1 className="text-5xl font-serif mb-8">{project.title}</h1>
        
        <div className="grid md:grid-cols-3 gap-8 text-lg">
          <div><strong>Location:</strong> {project.location}</div>
          <div><strong>Area:</strong> {project.area}</div>
          <div><strong>Budget:</strong> {project.budget}</div>
        </div>

        <p className="mt-12 text-xl leading-relaxed text-gray-700">{project.description}</p>
      </div>
    </div>
  );
}