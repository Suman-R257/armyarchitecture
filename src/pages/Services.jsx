import ServiceCard from '../components/common/ServiceCard';
import { Home, Building2, Hammer, Ruler, ChefHat, Trees } from 'lucide-react';

const services = [
  { icon: Home, title: "Interior Design", desc: "Complete residential interior design solutions" },
  { icon: Building2, title: "Architecture Planning", desc: "Custom architectural designs and planning" },
  { icon: Hammer, title: "Home Renovation", desc: "Full home renovation and remodeling" },
  { icon: Ruler, title: "3D Visualization", desc: "Photorealistic 3D renders and walkthroughs" },
  { icon: ChefHat, title: "Modular Kitchen", desc: "Modern and functional kitchen designs" },
  { icon: Trees, title: "Landscape Design", desc: "Beautiful outdoor and garden spaces" },
];

export default function Services() {
  return (
    <div className="pt-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-center text-orange-500 tracking-[0.2em] text-sm font-semibold mb-4">
          WHAT WE CAN DO
        </p>
        <h1 className="text-5xl font-bold text-center text-black mb-4">
          Our Services
        </h1>
        <p className="text-center text-xl text-gray-500 mb-16">
          Crafting beautiful spaces with precision and passion
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

      </div>
    </div>
  );
}