
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Process", path: "/process" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">

          {/* Logo / Brand Name */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">

              {/* Logo Icon */}
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  C
                </span>
              </div>

              {/* Brand Name */}
              <div className="flex flex-col leading-none">
                <h2 className="text-2xl font-bold tracking-tight">
                  <span className="text-gray-900">CIV</span>
                  <span className="text-orange-500">ORA</span>
                </h2>

                <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase mt-1">
                  Civil & Construction
                </span>
              </div>

            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/consultation"
            className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition"
          >
            Start Project
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-800"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4 mt-4">
              {links.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              to="/consultation"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-orange-500 text-white py-2.5 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Start Project
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
