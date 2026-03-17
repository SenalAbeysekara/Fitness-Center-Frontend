import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

const contactInfo = [
  { icon: <FaMapMarkerAlt />, title: 'Location', text: '123 Fitness Street, Colombo, Sri Lanka' },
  { icon: <FaPhoneAlt />, title: 'Phone', text: '+94 77 123 4567' },
  { icon: <FaEnvelope />, title: 'Email', text: 'info@fitnesssportscenter.com' },
  { icon: <FaClock />, title: 'Hours', text: 'Mon-Sat: 5AM - 10PM | Sun: 7AM - 6PM' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};

    if (!formData.name.trim()) e.name = 'Name is required';

    if (!formData.email.trim()) {
      e.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      e.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters';
    }

    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 max-[768px]:py-16 bg-[var(--color-black)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16 text-[var(--color-cream)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl max-[768px]:text-3xl max-[480px]:text-2xl font-extrabold uppercase tracking-[2px] mb-2">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="opacity-70 text-[1.05rem] max-w-[600px] mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            className="bg-[var(--color-charcoal)] text-[var(--color-cream)] p-10 rounded-xl border border-[var(--color-gray-light)]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-3">Contact Information</h3>
            <p className="opacity-70 text-[0.95rem] mb-8 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-[45px] h-[45px] min-w-[45px] rounded-[10px]
                    flex items-center justify-center text-gold
                    bg-[rgba(213,163,16,0.12)]"
                  >
                    {c.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-[0.95rem] mb-0.5">{c.title}</h4>
                    <p className="text-[0.85rem] opacity-70">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-[var(--color-charcoal)] text-[var(--color-cream)] p-10 rounded-xl min-h-[450px] flex items-center border border-[var(--color-gray-light)]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="text-center w-full py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaCheckCircle className="text-6xl text-[#2ecc71] mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                  <p className="opacity-70">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name */}
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-[0.9rem] font-semibold mb-2 uppercase tracking-[0.5px]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full py-3.5 px-5 rounded-[10px]
                        bg-[var(--color-black)] text-[var(--color-cream)]
                        border-2 border-[var(--color-gray-light)]
                        placeholder:text-[rgba(127,127,127,0.7)]
                        font-[Outfit] text-[0.95rem] outline-none transition-all duration-300
                        focus:border-gold focus:shadow-[0_0_0_3px_rgba(213,163,16,0.1)]
                        ${errors.name ? '!border-[#e74c3c]' : ''}`}
                    />
                    {errors.name && (
                      <span className="text-[#e74c3c] text-[0.8rem] mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-[0.9rem] font-semibold mb-2 uppercase tracking-[0.5px]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full py-3.5 px-5 rounded-[10px]
                        bg-[var(--color-black)] text-[var(--color-cream)]
                        border-2 border-[var(--color-gray-light)]
                        placeholder:text-[rgba(127,127,127,0.7)]
                        font-[Outfit] text-[0.95rem] outline-none transition-all duration-300
                        focus:border-gold focus:shadow-[0_0_0_3px_rgba(213,163,16,0.1)]
                        ${errors.email ? '!border-[#e74c3c]' : ''}`}
                    />
                    {errors.email && (
                      <span className="text-[#e74c3c] text-[0.8rem] mt-1 block">{errors.email}</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-[0.9rem] font-semibold mb-2 uppercase tracking-[0.5px]"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your fitness goals..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full py-3.5 px-5 rounded-[10px]
                        bg-[var(--color-black)] text-[var(--color-cream)]
                        border-2 border-[var(--color-gray-light)]
                        placeholder:text-[rgba(127,127,127,0.7)]
                        font-[Outfit] text-[0.95rem] outline-none transition-all duration-300
                        resize-y min-h-[120px]
                        focus:border-gold focus:shadow-[0_0_0_3px_rgba(213,163,16,0.1)]
                        ${errors.message ? '!border-[#e74c3c]' : ''}`}
                    />
                    {errors.message && (
                      <span className="text-[#e74c3c] text-[0.8rem] mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-br from-gold to-gold-light
                      text-black font-semibold uppercase tracking-[1px] text-center
                      flex items-center justify-center gap-2 min-h-[52px]
                      transition-all duration-300 hover:-translate-y-[3px]
                      hover:shadow-[0_10px_30px_rgba(213,163,16,0.3)]
                      disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-[rgba(4,3,4,0.3)] border-t-black rounded-full animate-spin" />
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;