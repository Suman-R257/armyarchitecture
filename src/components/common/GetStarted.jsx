import { ArrowRight } from "lucide-react";

export default function GetStarted() {
  return (
    <section className="px-6 pt-28">
      <div
        className="relative max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden
        min-h-[85vh] flex items-center justify-center text-center"
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww"
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-orange-900/60" />

        {/* Dots */}
        <div className="absolute top-10 left-10 grid grid-cols-6 gap-2 opacity-70">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Let's Make Over Your Interior Design Today
          </h1>

          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <button
            className="group inline-flex items-center gap-2 bg-orange-500 text-white
            px-8 py-4 rounded-full font-semibold text-sm tracking-wide uppercase
            hover:bg-orange-600 transition-all duration-300"
          >
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}