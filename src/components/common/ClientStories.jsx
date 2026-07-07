import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The way Acuity has handled our building project, we must say they are way ahead other similar companies in their working methods. They are knowledgeable, experienced and hard working.",
    name: "Mrityunjoy Ghosh",
    role: "Satisfied Client",
  },
  {
    text: "Acuity is by and far the best Designers and Construction Firms working in New Town. We were surprised to see how efficiently our G+4 Cooperative Building was constructed.",
    name: "M. Sengupta",
    role: "Satisfied Client",
  },
  {
    text: "Our old house was completely renovated, remodelled and the interior was done in an amazing way to take care of ambience and aesthetic according to our choice.",
    name: "Sayona Das",
    role: "Satisfied Client",
  },
];

export default function ClientStories() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-6">
          Client Stories
        </h2>
        <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          Hear from our satisfied clients about their experience working with Acuity Civil Engineers
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-md
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                strokeWidth={0}
                fill="currentColor"
                className="absolute top-6 right-6 text-orange-200"
              />

              {/* Testimonial text */}
              <p className="text-gray-600 leading-relaxed mb-8 pr-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 font-bold flex items-center justify-center text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}