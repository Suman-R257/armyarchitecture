import TestimonialCard from '../components/common/TestimonialCard';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <div className="pt-20 bg-beige min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-serif text-center mb-16">Client Stories</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
}