import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  Palette,
  Users,
  ArrowUpRight,
  Eye,
  Target,
} from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 bg-[#f8f5f0]">
      {/* Hero Banner */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&auto=format&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif text-white mb-6"
          >
            About Anika Sharma
          </motion.h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Passionate Architect & Interior Designer creating homes that
            reflect your soul
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80"
                alt="Anika Sharma"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-8 border-yellow-600 rounded-3xl hidden lg:block" />
          </motion.div>

          {/* Right - Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-serif mb-6">My Story</h2>

              <p className="text-lg leading-relaxed text-gray-700">
                With over 7 years of experience in architecture and interior
                design, I founded my studio with a simple belief — every home
                should tell a story. A story of the people who live in it.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 mt-6">
                I help families transform empty spaces into warm, functional,
                and luxurious homes that perfectly match their lifestyle and
                personality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="backdrop-blur-lg bg-white/70 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-yellow-700" size={28} />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-3xl font-serif text-yellow-700">
                      7+ Years
                    </p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/70 p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-yellow-700" size={28} />
                  <div>
                    <p className="font-medium">Education</p>
                    <p className="text-xl font-medium">
                      B.Arch - SPA Delhi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Design Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-serif mb-8">Design Philosophy</h2>

          <div
            className="p-12 rounded-3xl bg-cover bg-center relative overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-white/80"></div>

            <div className="relative z-10">
              <p className="text-2xl italic leading-relaxed text-gray-700">
                "I don't just design houses. I design experiences. Spaces where
                memories are made, families grow, and you feel truly at home."
              </p>

              <p className="mt-6 text-yellow-700 font-medium">
                - Anika Sharma
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Me */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Why Clients <span className="text-orange-600">Choose Me</span>
          </h2>
          <div className="w-16 h-[3px] bg-orange-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            I blend creativity, functionality, and attention to detail to
            deliver spaces that truly feel like home.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Personalized Design",
                desc: "Every design is tailored to your lifestyle, preferences, and functional needs.",
              },
              {
                icon: Users,
                title: "Collaborative Process",
                desc: "We work closely with you at every step to bring your vision to life.",
              },
              {
                icon: Award,
                title: "Premium Quality",
                desc: "High-quality materials and craftsmanship ensure lasting beauty and durability.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl text-left shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center mb-6">
                  <item.icon className="text-white" size={26} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-600 mb-6">{item.desc}</p>

                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                  <ArrowUpRight className="text-orange-600" size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            My <span className="text-orange-600">Mission &amp; Vision</span>
          </h2>
          <div className="w-16 h-[3px] bg-orange-600 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-[#151d2e] text-white text-left relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-full border-2 border-orange-500 flex items-center justify-center mb-6">
                <Eye className="text-orange-500" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">My Vision</h3>
              <div className="w-10 h-[2px] bg-orange-500 mb-4" />
              <p className="text-white/80 leading-relaxed">
                To be recognized as the most trusted name in luxury
                residential design in Central India, inspiring beautiful
                living through thoughtful design and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-3xl bg-orange-600 text-white text-left relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center mb-6">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">My Mission</h3>
              <div className="w-10 h-[2px] bg-white mb-4" />
              <p className="text-white/90 leading-relaxed">
                To create beautiful, functional, and sustainable spaces that
                enhance the quality of life for my clients and reflect the
                unique story of every home.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}