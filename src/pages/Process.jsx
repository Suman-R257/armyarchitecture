import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
  { num: "02", title: "Requirement Discussion", desc: "Detailed brief and site visit" },
  { num: "03", title: "Concept Design", desc: "Initial concepts and mood boards" },
  { num: "04", title: "3D Visualization", desc: "Realistic renders for approval" },
  { num: "05", title: "Material Selection", desc: "Premium material finalization" },
  { num: "06", title: "Execution", desc: "Project execution with quality checks" },
  { num: "07", title: "Final Delivery", desc: "Handover and after-service support" }
];

export default function Process() {
  return (
    <div className="pt-20 bg-beige">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-serif text-center mb-6">Our Design Process</h1>
        <p className="text-center text-xl text-gray-600 mb-16">7 Step Transparent Process</p>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-8 items-start"
            >
              <div className="w-20 h-20 bg-primary text-white rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl font-serif">
                {step.num}
              </div>
              <div>
                <h3 className="text-3xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}