export default function AboutSection() {
  return (
    <section className="py-24 bg-[#f8f8f8] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Text */}
        <p className="uppercase tracking-[4px] text-orange-500 text-sm mb-4">
          Who We Are
        </p>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl text-gray-900">
            Building Modern Spaces <br />
            With Smart Architecture
          </h2>

          <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
            Get A Quotation →
          </button>
        </div>

        {/* Bottom Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

          {/* Left Card */}
          <div className="bg-orange-500 rounded-[40px] p-10 text-white lg:col-span-1 min-h-[380px] flex flex-col justify-between">
            <div>
              <span className="text-7xl opacity-30">“</span>

              <p className="mt-6 text-lg leading-9 italic">
                We design innovative and sustainable structures with modern
                aesthetics, functionality, and engineering excellence for every project.
              </p>
            </div>

            <h3 className="text-3xl font-bold mt-8">
              Acuity Team
            </h3>
          </div>

          {/* Images */}
          <div className="rounded-[30px] overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt=""
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="rounded-[30px] overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156"
              alt=""
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="rounded-[30px] overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
              alt=""
              className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}