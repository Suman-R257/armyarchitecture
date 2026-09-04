import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StatsSection from "../components/common/StatsSection";
import AboutSection from "../components/common/AboutSection";
import ClientStories from '../components/common/ClientStories';
import HomeServices from "../components/common/HomeServices";
import GetStarted from "../components//common/GetStarted";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1600&auto=format&fit=crop&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[5px] text-white/80 mb-4"
          >
            Civil Engineering & Residential Design
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5"
          >
            Safe, Beautiful <br /> & Functional Homes
          </motion.h1>

          <p className="text-base md:text-lg text-white/85 mb-8">
            Residential planning, structural design, and on-site supervision.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
      <AboutSection />
      <HomeServices />
      <ClientStories />
      <GetStarted />

    </>
  );
}