import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { motionVariants } from '../design-system';
import MorphingGeometry from './MorphingGeometry';
import { HackathonCertificate } from '../assets';

const certifications = [
  {
    title: 'CuraLink Hackathon',
    description: 'Awarded for outstanding performance in the CuraLink Medical Hackathon, building an innovative healthcare platform.',
    issuer: 'CuraLink',
    date: 'November 2025',
    pdf: HackathonCertificate,
  },
];

const skillCertifications = [
  {
    title: 'Professional Skills',
    items: [
      'Full Stack Web Development',
      'React Advanced Patterns',
      'TypeScript Fundamentals',
      'Node.js Backend Development',
    ],
  },
];

// Modal Component for viewing full certificate
const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl h-[80vh] bg-bg-secondary rounded-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-bg-primary">
              <h3 className="text-text-primary text-lg font-bold">{certificate?.title}</h3>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-bg-tertiary transition-colors text-text-secondary hover:text-text-primary"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* PDF Viewer */}
            <iframe
              src={certificate?.pdf}
              title={certificate?.title}
              className="w-full h-[calc(100%-60px)]"
              style={{ border: 'none' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Certificate Card Component
const CertificateCard = ({ certificate, onClick }) => {
  return (
    <motion.div
      variants={motionVariants.item}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="glass p-6 rounded-2xl border border-border hover:border-accent-primary transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        {/* Certificate Icon */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
          <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 className="text-text-primary text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
            {certificate.title}
          </h3>
          <p className="text-text-secondary text-sm mb-3">{certificate.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {certificate.issuer}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {certificate.date}
            </span>
          </div>
        </div>

        {/* Click indicator */}
        <div className="flex-shrink-0 text-text-muted group-hover:text-accent-primary transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

// Skills Card Component (existing design)
const SkillCard = ({ title, items }) => {
  return (
    <motion.div
      variants={motionVariants.item}
      className="glass p-6 rounded-2xl border border-border hover:border-accent-primary transition-all duration-300"
    >
      <h3 className="text-text-primary text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <motion.li
            key={idx}
            className="flex items-center gap-3 text-text-secondary"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="w-2 h-2 rounded-full bg-accent-primary" />
            <span className="text-sm">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Certifications Cards */}
          <motion.div
            variants={motionVariants.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full space-y-4"
          >
            {/* Certificate Cards */}
            {certifications.map((cert, index) => (
              <CertificateCard
                key={index}
                certificate={cert}
                onClick={() => handleCertificateClick(cert)}
              />
            ))}

            {/* Skills Card */}
            {skillCertifications.map((skill, index) => (
              <SkillCard
                key={`skill-${index}`}
                title={skill.title}
                items={skill.items}
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

      {/* Certificate Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        certificate={selectedCertificate}
      />
    </section>
  );
};

export default Certifications;
