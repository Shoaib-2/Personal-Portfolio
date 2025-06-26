import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../HigherOrderComponent";
import { slideIn } from "../utils/motion";

//template_l02rs33: templateId
//service_j5j655n: serviceId
//F6owl-_Bq6z_7_Fjl: publicId

// Notification component
const Notification = ({ message, type, onClose }) => (
  <div
    className={`fixed z-50 left-1/2 -translate-x-1/2 top-8 px-6 py-4 rounded-xl shadow-lg transition-all duration-300
      ${type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}
    `}
    style={{ minWidth: '250px', maxWidth: '90vw' }}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-4 text-xl font-bold">&times;</button>
    </div>
  </div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', message: '' };
    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = 'Please enter a valid email address.';
        valid = false;
      }
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    emailjs.send('service_j5j655n',
      'template_l02rs33',
      {
        form_name: form.name,
        to_name: 'Mohammed Shoaib',
        from_email: form.email,
        to_email: 'shoaibkkhn50665@gmail.com',
        message: `From: ${form.name} <${form.email}>\n\n${form.message}`
      },
      'F6owl-_Bq6z_7_Fjl'
    )
      .then(() => {
        setLoading(false)
        setNotification({ message: 'Thank you. I will get back to you as soon as possible.', type: 'success' });
        setForm({
          name: '',
          email: '',
          message: '',
        })
        setErrors({ name: '', email: '', message: '' });
      }, (error) => {
        setLoading(false)
        console.log(error)
        setNotification({ message: 'Something went wrong', type: 'error' });
      })
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] glassmorphic-card bg-black-100/60 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-md"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        {/* Notification only for submission result */}
        {notification.message && (
          <div className="mb-4">
            <Notification
              message={notification.message}
              type={notification.type}
              onClose={() => setNotification({ message: '', type: '' })}
            />
          </div>
        )}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your Name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.name && <span className="text-red-400 text-sm mt-1">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            {errors.message && <span className="text-red-400 text-sm mt-1">{errors.message}</span>}
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-2xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
