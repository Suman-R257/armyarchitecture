import { Leaf, Building2, CalendarDays, Users } from "lucide-react";

const statsData = [
  {
    id: 1,
    icon: <Leaf size={32} />,
    number: "300+",
    title: "Sustainable Buildings",
  },
  {
    id: 2,
    icon: <Building2 size={32} />,
    number: "78+",
    title: "Projects in New Town",
  },
  {
    id: 3,
    icon: <CalendarDays size={32} />,
    number: "31 Years",
    title: "of Excellence",
  },
  {
    id: 4,
    icon: <Users size={32} />,
    number: "16 Years",
    title: "Trusted Partner",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-[40px] p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[30px] shadow-sm p-10 flex flex-col items-center justify-center text-center hover:shadow-md transition duration-300"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                {item.icon}
              </div>

              {/* Number */}
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">
                {item.number}
              </h2>

              {/* Text */}
              <p className="text-gray-600 text-lg font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}