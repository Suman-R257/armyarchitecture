import ServiceCard from '../components/common/ServiceCard';
import { Home, Building2, Hammer, Ruler, Layers } from 'lucide-react';

const services = [
  { icon: Building2, title: "Structural Design & Calculations", desc: "Safe, code-compliant structural designs for homes and small buildings." },
  { icon: Home, title: "Architectural Layouts", desc: "Optimized residential layouts focusing on space, light, and functionality." },
  { icon: Hammer, title: "Construction Supervision", desc: "On-site supervision to ensure design intent and quality workmanship." },
  { icon: Ruler, title: "Renovation & Retrofitting", desc: "Upgrades and strengthening solutions for existing structures." },
  { icon: Layers, title: "3D Modeling & Working Drawings", desc: "Detailed plans, sections, and 3D visuals for accurate execution." },
  { icon: Hammer, title: "BOQ & Permit Support", desc: "Bill of quantities, cost estimates and permit drawing support." },
];

export default function Services() {
  return (
    <div className="pt-20 bg-beige">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <p className="text-center text-orange-500 tracking-[0.2em] text-sm font-semibold mb-4">
          SERVICES FOR HOME DESIGN
        </p>
        <h1 className="text-5xl font-bold text-center text-black mb-4">
          Civil Engineering Services
        </h1>
        <p className="text-center text-xl text-gray-500 mb-16">
          Practical structural design, detailed drawings and construction support for residential projects
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