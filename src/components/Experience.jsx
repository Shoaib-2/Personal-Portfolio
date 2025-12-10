import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../constants';
import { motionVariants } from '../design-system';

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl h-full">
        {/* Company Header */}
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-background-hover flex items-center justify-center p-2 sm:p-3 flex-shrink-0">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-text-primary text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
              {experience.title}
            </h3>
            <p className="text-accent-primary text-base sm:text-lg font-semibold mb-1">
              {experience.company_name}
            </p>
            <p className="text-text-muted text-xs sm:text-sm">
              {experience.date}
            </p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-3 sm:space-y-4">
          {experience.points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 flex-shrink-0" />
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="work" className="w-full py-12 md:py-20 bg-background-secondary/50">
      <div className="section-container mx-auto">
      <motion.div
        variants={motionVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-accent-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2 text-left">
          What I have done so far
        </p>
        <h2 className="text-responsive-h2 font-black text-text-primary mb-8 text-left">
          Work Experience
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Tabs Navigation */}
        <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 justify-start overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide">
          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all whitespace-nowrap flex-shrink-0 ${
                activeTab === index
                  ? 'bg-accent-primary text-white shadow-glow-blue'
                  : 'bg-background-card text-text-secondary hover:bg-background-hover hover:text-text-primary border border-border'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {exp.company_name}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <ExperienceCard key={activeTab} experience={experiences[activeTab]} />
        </AnimatePresence>
      </div>
      </div>
    </section>
  );
};

export default Experience;
