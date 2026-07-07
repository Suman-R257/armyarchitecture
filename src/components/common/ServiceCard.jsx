import { useState } from 'react';

export default function ServiceCard({ service, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;

  const isFirst = index === 0;
  // Card is "active" (orange look) if it's the first card, OR if it's currently hovered.
  const active = isFirst || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-3xl p-10 flex flex-col items-center text-center
        transition-all duration-300 ease-out
        ${active
          ? 'bg-orange-500 text-white shadow-xl -translate-y-2'
          : 'bg-white text-black shadow-md border border-gray-200 translate-y-0'}
      `}
    >
      {/* Icon */}
      <div
        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6
          transition-all duration-300
          ${active ? 'bg-white/15 scale-110 rotate-3' : 'bg-orange-50 scale-100 rotate-0'}
        `}
      >
        <Icon
          size={36}
          strokeWidth={1.5}
          className={`transition-colors duration-300 ${active ? 'text-white' : 'text-orange-500'}`}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
          active ? 'text-white' : 'text-black'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`mb-8 leading-relaxed transition-colors duration-300 ${
          active ? 'text-white/80' : 'text-gray-500'
        }`}
      >
        {service.desc}
      </p>

      {/* CTA */}
      <button
        className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full
          font-semibold text-sm tracking-wide uppercase
          transition-all duration-300
          ${active
            ? 'bg-white text-orange-500 hover:bg-orange-50'
            : 'bg-orange-500 text-white hover:bg-orange-600'}
        `}
      >
        Learn More
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
}