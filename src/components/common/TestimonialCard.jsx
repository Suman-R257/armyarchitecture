import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass p-8 rounded-3xl h-full flex flex-col">
      <div className="flex mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="text-primary fill-current" size={22} />
        ))}
      </div>

      <p className="text-gray-700 leading-relaxed flex-1">
        “{testimonial.text}”
      </p>

      <div className="flex items-center gap-4 mt-8">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.city} • {testimonial.project}</p>
        </div>
      </div>
    </div>
  );
}