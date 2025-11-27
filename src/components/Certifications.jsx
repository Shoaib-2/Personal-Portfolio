import React from 'react';
import { motion } from 'framer-motion';
import { motionVariants } from '../design-system';
import MorphingGeometry from './MorphingGeometry';

const certifications = [
  {
    title: 'Professional Certifications',
    items: [
      'Full Stack Web Development',
      'React Advanced Patterns',
      'TypeScript Fundamentals',
      'Node.js Backend Development',
    ],
  },
];

const CertificationCard = ({ title, items, index }) => {
  return (
    <motion.div
      variants={motionVariants.item}
      className="glass p-8 rounded-2xl border border-border hover:border-accent-primary transition-all duration-300"
    >
      <h3 className="text-text-primary text-2xl font-bold mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-3 text-text-secondary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="w-2 h-2 rounded-full bg-accent-primary" />
            <span className="text-base">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-12 md:py-20 relative overflow-hidden">
      <div className="section-container mx-auto">
      <motion.div
        variants={motionVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-accent-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2 text-left">
          Achievements
        </p>
        <h2 className="text-responsive-h2 font-black text-text-primary mb-10 text-left">
          Certifications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Certifications Card */}
        <motion.div
          variants={motionVariants.staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full"
        >
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              title={cert.title}
              items={cert.items}
              index={index}
            />
          ))}
        </motion.div>

        {/* Morphing Geometry 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <MorphingGeometry className="w-full h-[400px]" />
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Certifications;
