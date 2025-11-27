import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { motionVariants } from '../design-system';
import { github } from '../assets';

const ProjectCard = ({ project, index }) => {
  const { name, description, tags, image, source_code_link } = project;

  return (
    <motion.div
      variants={motionVariants.item}
      className="group relative bg-background-card rounded-2xl border border-border hover:border-accent-primary transition-all duration-300 overflow-hidden card-hover"
    >
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent opacity-60" />
        
        {/* View Project Button */}
        <button
          onClick={() => window.open(source_code_link, '_blank')}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent-primary hover:scale-110 transition-all duration-300 group/btn"
        >
          <img src={github} alt="view" className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
        </button>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-text-primary text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
          {name}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-3 py-1 text-xs font-medium rounded-full bg-background-hover text-text-secondary border border-border hover:border-accent-primary transition-colors"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-20">
      <div className="section-container mx-auto">
      <motion.div
        variants={motionVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-accent-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-2 text-left">
          My Work
        </p>
        <h2 className="text-responsive-h2 font-black text-text-primary mb-8 text-left">
          Projects
        </h2>
      </motion.div>

      <motion.p
        variants={motionVariants.fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-text-secondary text-base md:text-lg max-w-3xl leading-relaxed mb-10 text-left"
      >
        These projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. They reflect my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </motion.p>

      <motion.div
        variants={motionVariants.staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} index={index} />
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default Works;
