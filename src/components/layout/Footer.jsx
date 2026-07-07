import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-2xl">A</div>
            <h2 className="text-2xl font-display">Anika Sharma</h2>
          </div>
          <p className="text-gray-400">
            Creating timeless homes that reflect your personality and lifestyle.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-lg">Quick Links</h4>
          <div className="space-y-3 text-gray-400">
            <Link to="/about" className="block hover:text-white">About</Link>
            <Link to="/projects" className="block hover:text-white">Projects</Link>
            <Link to="/services" className="block hover:text-white">Services</Link>
            <Link to="/process" className="block hover:text-white">Process</Link>
            <Link to="/gallery" className="block hover:text-white">Gallery</Link>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-lg">Services</h4>
          <div className="space-y-3 text-gray-400">
            <p>Interior Design</p>
            <p>Architecture Planning</p>
            <p>Home Renovation</p>
            <p>3D Visualization</p>
            <p>Modular Kitchen</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-lg">Contact</h4>
          <div className="space-y-4 text-gray-400">
            <div className="flex gap-3">
              <Phone size={20} />
              <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
            </div>
            <div className="flex gap-3">
              <Mail size={20} />
              <a href="mailto:anika@inarche.in" className="hover:text-white">anika@inarche.in</a>
            </div>
            <div className="flex gap-3">
              <MapPin size={20} />
              <p>Indore, Madhya Pradesh</p>
            </div>
          </div>

          <div className="mt-8">
            <a href="/consultation" className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-full font-medium transition-colors">
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
        © 2026 Anika Sharma. All Rights Reserved.
      </div>
    </footer>
  );
}