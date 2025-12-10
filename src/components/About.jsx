import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { motionVariants } from '../design-system';

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <motion.div
      variants={motionVariants.item}
      className="group relative bg-background-card/30 backdrop-blur-xl p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-700 overflow-hidden h-full"
      whileHover={{ y: -8 }}
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] group-hover:animate-spin-slow" />
      </div>
      
      {/* Ambient glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-accent-primary/20 via-accent-secondary/20 to-accent-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with 3D effect */}
        <div className="mb-4 sm:mb-6">
          <div className="relative inline-flex">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl sm:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-background-tertiary to-background-hover flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <span className="text-2xl sm:text-4xl transform group-hover:scale-110 transition-transform">{icon}</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-text-primary text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Animated corner accent */}
        <div className="absolute top-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-8 h-[2px] bg-gradient-to-l from-accent-primary to-transparent" />
          <div className="absolute top-0 right-0 w-[2px] h-8 bg-gradient-to-b from-accent-primary to-transparent" />
        </div>
        
        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-20">
      <div className="section-container mx-auto">
      <motion.div
        variants={motionVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-accent-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2 text-left">
          Introduction
        </p>
        <h2 className="text-responsive-h2 font-black text-text-primary mb-8 text-left">
          Overview
        </h2>
      </motion.div>

      <motion.div
        variants={motionVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-6 max-w-4xl"
      >
        <ul className="space-y-4">
          {[
            "Frontend Engineer with 2 years of hands-on experience building fast, accessible, and user-focused web apps using React, Next.js, TypeScript, and Node.js.",
            "Worked on real products where I improved performance, cut load times, and helped boost engagement—whether it was speeding up an AI chat app, redesigning a local venue website, or launching tools powered by Google Gemini, OpenAI, you name it.",
            "Comfortable across the full stack, but most at home crafting clean, responsive UIs and working closely with teams to ship features that actually make a difference.",
            "Care about writing maintainable code, but more than that, I care about whether what I am building is useful and impactful."
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
              <span className="text-text-secondary text-base md:text-lg leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={motionVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default About;
