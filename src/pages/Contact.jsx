import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, MailOpen } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: '',
    projectDescription: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectLocation: '', projectType: '', projectDescription: '' });
    }, 2500);
  };

  const projectTypes = [
    "Full Interior Design",
    "Home Renovation",
    "Kitchen Design",
    "Villa Project",
    "Apartment Interior",
    "Landscape Design"
  ];

  const contactMethods = [
    { icon: Mail, title: 'Email', detail: 'info@acuitycivil.com' },
    { icon: MailOpen, title: 'Gmail', detail: 'anindha.acuity@gmail.com' },
    { icon: Phone, title: 'Phone', detail: '+91 9830182746' },
    { icon: Phone, title: 'Alternative', detail: '+91 9350555156' },
    { icon: MessageSquare, title: 'WhatsApp', detail: '+91 9830182746' }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Contact Methods - Top Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {contactMethods.map((method, idx) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-center mb-3">
                    <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                      <IconComponent size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600">{method.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Contact Form (spans 1.5 columns) */}
          <div className="lg:col-span-1.5">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Location</label>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-sm"
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-sm resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                  >
                    Send <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right - Business Hours & Offices */}
          <div className="lg:col-span-1.5 space-y-6">
            {/* Business Hours Card */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={24} className="text-orange-500" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-orange-500 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-orange-500 font-semibold">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-orange-500 font-semibold">By Appointment</span>
                </div>
              </div>
            </div>

            {/* Our Offices */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
              
              {/* Registered Office */}
              <div className="bg-gray-50 p-6 rounded-2xl mb-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Registered Office</p>
                    <p className="text-xs text-orange-500 font-semibold">Headquarters</p>
                  </div>
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <p className="text-sm text-gray-600 mb-3">61/25/5 Manik Bandopadhyay Sarani, Kolkata - 700040</p>
                <a href="#" className="text-orange-500 text-sm font-semibold hover:underline flex items-center gap-1">
                  View on Map ↗
                </a>
              </div>

              {/* City Office */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">City Office 1</p>
                    <p className="text-xs text-orange-500 font-semibold">Branch Office</p>
                  </div>
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <p className="text-sm text-gray-600 mb-3">Indore, Madhya Pradesh</p>
                <a href="#" className="text-orange-500 text-sm font-semibold hover:underline flex items-center gap-1">
                  View on Map ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}