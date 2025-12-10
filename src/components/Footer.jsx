import React from 'react';
import { motion } from 'framer-motion';
import { github } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-background-card border-t border-border">
      <div className="section-container py-8 sm:py-12">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Copyright */}
          <motion.p
            className="text-text-secondary text-xs sm:text-sm md:text-base text-center order-2 md:order-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Shoaib Mohammed. All rights reserved
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-3 sm:gap-4 order-1 md:order-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/Shoaib-2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background-hover flex items-center justify-center hover:bg-accent-primary hover:scale-110 transition-all"
            >
              <img src={github} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-shoaib-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background-hover flex items-center justify-center hover:bg-accent-blue hover:scale-110 transition-all"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
