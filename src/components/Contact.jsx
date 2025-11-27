import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { motionVariants } from '../design-system';
import TimeRipplePortal from './TimeRipplePortal';

const Notification = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className={`fixed z-50 top-24 right-6 px-6 py-4 rounded-xl shadow-lg ${
      type === 'error' 
        ? 'bg-red-600 text-white' 
        : 'bg-accent-emerald text-white'
    }`}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="text-xl font-bold hover:scale-110 transition-transform">
        &times;
      </button>
    </div>
  </motion.div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', message: '' };

    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = 'Please enter a valid email';
        valid = false;
      }
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    emailjs
      .send(
        'service_j5j655n',
        'template_l02rs33',
        {
          form_name: form.name,
          to_name: 'Mohammed Shoaib',
          from_email: form.email,
          to_email: 'shoaibkkhn50665@gmail.com',
          message: `From: ${form.name} <${form.email}>\n\n${form.message}`,
        },
        'F6owl-_Bq6z_7_Fjl'
      )
      .then(() => {
        setLoading(false);
        setNotification({
          message: 'Thank you. I will get back to you as soon as possible',
          type: 'success',
        });
        setForm({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
        setTimeout(() => setNotification({ message: '', type: '' }), 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setNotification({
          message: 'Something went wrong. Please try again',
          type: 'error',
        });
        setTimeout(() => setNotification({ message: '', type: '' }), 5000);
      });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-20 bg-background-secondary/50">
      <div className="section-container mx-auto">
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: '', type: '' })}
        />
      )}

      <motion.div
        variants={motionVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-accent-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2 text-left">
          Get in Touch
        </p>
        <h2 className="text-responsive-h2 font-black text-text-primary mb-8 text-left">
          Contact
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Form */}
        <div>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={motionVariants.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Name Field */}
            <motion.div variants={motionVariants.item}>
              <label className="block text-text-primary font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What is your name"
                className="w-full px-4 py-4 bg-background-card border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={motionVariants.item}>
              <label className="block text-text-primary font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What is your email"
                className="w-full px-4 py-4 bg-background-card border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>

            {/* Message Field */}
            <motion.div variants={motionVariants.item}>
              <label className="block text-text-primary font-medium mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say"
                rows="6"
                className="w-full px-4 py-4 bg-background-card border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/20 transition-all resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={motionVariants.item}
              type="submit"
              disabled={loading}
              className="btn-primary w-full md:w-auto px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>

        {/* Time Ripple Portal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <TimeRipplePortal className="w-full h-[450px]" />
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
