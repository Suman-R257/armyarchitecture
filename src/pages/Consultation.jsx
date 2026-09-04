import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, User, Home, IndianRupee, Upload, CheckCircle } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    date: '',
    message: '',
    file: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS, Formspree, or backend API
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', phone: '', email: '', projectType: '', budget: '', date: '', message: '', file: null
      });
    }, 3000);
  };

  const projectTypes = [
    "New Home Construction",
    "Full Interior Design",
    "Home Renovation",
    "Kitchen Remodel",
    "Villa Design",
    "Apartment Interior",
    "Landscape Design",
    "Other"
  ];

  const budgetRanges = [
    "₹10 - 25 Lakh",
    "₹25 - 50 Lakh",
    "₹50 - 80 Lakh",
    "₹80 Lakh - 1.5 Crore",
    "₹1.5 Crore +"
  ];

  if (submitted) {
    return (
      <div className="pt-24 pb-20 bg-beige min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-md mx-auto px-6"
        >
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          <h2 className="text-4xl font-serif mb-4">Thank You!</h2>
          <p className="text-xl text-gray-700">
            Your consultation request has been received. We will contact you within 24 hours.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-beige min-h-screen">
      {/* Header */}
      <section className="bg-white py-16 border-b border-beige">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Book Your Consultation
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss your dream home. A 30-minute consultation is completely free.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Left Info */}
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <div className="glass p-10 rounded-3xl">
                <h3 className="text-3xl font-serif mb-8">What to Expect</h3>
                
                <div className="space-y-8">
                  {[
                    { icon: <User size={28} />, text: "Personal discussion about your vision" },
                    { icon: <Home size={28} />, text: "Project scope & requirements" },
                    { icon: <Calendar size={28} />, text: "Timeline & budget guidance" },
                    { icon: <Phone size={28} />, text: "Next steps & follow-up plan" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="text-primary mt-1">{item.icon}</div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-beige">
                  <p className="text-sm text-gray-500">📍 Indore, Madhya Pradesh</p>
                  <p className="text-primary font-medium mt-2">+91 98765 43210</p>
                  <p className="text-primary font-medium">contact@homestruct.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range *</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary"
                  >
                    <option value="">Select Budget</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white border border-beige rounded-2xl focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Floor Plan / Reference Images (Optional)</label>
                <label className="border border-dashed border-beige rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                  <Upload className="text-primary mb-3" size={40} />
                  <span className="font-medium">Click to upload files</span>
                  <span className="text-sm text-gray-500 mt-1">PNG, JPG, PDF (Max 10MB)</span>
                  <input type="file" onChange={handleFileChange} className="hidden" />
                </label>
                {formData.file && (
                  <p className="text-sm text-green-600 mt-3">✓ {formData.file.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tell us about your project</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-white border border-beige rounded-3xl focus:outline-none focus:border-primary resize-y"
                  placeholder="I want a modern 3BHK apartment with natural light and minimalist design..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-primary hover:bg-amber-600 text-dark font-semibold text-lg rounded-3xl transition-all active:scale-[0.98]"
              >
                Schedule Free Consultation
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                Your information is secure. We respect your privacy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}