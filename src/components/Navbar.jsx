import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';
import { logo, menu, close, github } from '../assets';
import Shoaib_Mohammed_Resume from '../assets/pdf/Shoaib_Mohammed_Resume.pdf';

const Navbar = ({ setNavOpen }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavOpen && setNavOpen(toggle);
  }, [toggle, setNavOpen]);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background-card/95 backdrop-blur-lg shadow-card border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a 
          href="/" 
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-background-primary font-black text-xl">S</span>
          </div>
          <span className="text-text-primary text-xl font-bold tracking-wide">
            Shoaib <span className="hidden sm:inline font-normal text-text-secondary">Mohammed</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-2 items-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              className={`px-4 py-2 rounded-lg cursor-pointer font-medium text-base transition-all ${
                active === link.title
                  ? 'bg-accent-primary text-white'
                  : 'text-text-secondary hover:text-text-primary hover:bg-background-hover'
              }`}
              onClick={() => setActive(link.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${link.id.toLowerCase()}`}>{link.title}</a>
            </motion.li>
          ))}
          
          {/* Socials */}
          <div className="flex gap-3 ml-4 pl-4 border-l border-border">
            <motion.a 
              href="https://github.com/Shoaib-2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-background-hover flex items-center justify-center hover:bg-accent-primary hover:shadow-glow-blue transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={github} alt="GitHub" className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/mohammed-shoaib-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-background-hover flex items-center justify-center hover:bg-accent-blue hover:shadow-glow-purple transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 fill-current text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
          </div>
        </ul>

        {/* Resume Button Desktop */}
        <a
          href={Shoaib_Mohammed_Resume}
          download="MohammedShoaibCV.pdf"
          className="hidden lg:inline-block btn-primary ml-6"
        >
          Download CV
        </a>
        {/* Mobile Hamburger */}
        <motion.button
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-background-hover hover:bg-accent-primary transition-colors"
          onClick={() => setToggle(!toggle)}
          whileTap={{ scale: 0.9 }}
        >
          <img src={toggle ? close : menu} alt="menu" className="w-6 h-6 object-contain" />
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {toggle && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setToggle(false)}
              />
              <motion.div
                className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background-card border-l border-border z-50 p-8 flex flex-col gap-8 lg:hidden shadow-2xl"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-text-primary text-xl font-bold">Menu</span>
                  <button onClick={() => setToggle(false)}>
                    <img src={close} alt="close" className="w-7 h-7" />
                  </button>
                </div>
                
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      className={`px-4 py-3 rounded-lg cursor-pointer font-medium text-lg transition-all ${
                        active === link.title
                          ? 'bg-accent-primary text-white'
                          : 'text-text-secondary hover:bg-background-hover hover:text-text-primary'
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a href={`#${link.id.toLowerCase()}`}>{link.title}</a>
                    </motion.li>
                  ))}
                </ul>

                {/* Socials for mobile */}
                <div className="flex gap-4 mt-8 justify-center">
                  <motion.a 
                    href="https://github.com/Shoaib-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background-hover flex items-center justify-center hover:bg-accent-primary transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={github} alt="GitHub" className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/mohammed-shoaib-dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background-hover flex items-center justify-center hover:bg-accent-blue transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6 fill-current text-text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                </div>

                <a
                  href={Shoaib_Mohammed_Resume}
                  download="MohammedShoaibCV.pdf"
                  className="btn-primary mt-auto text-center"
                  onClick={() => setToggle(false)}
                >
                  Download CV
                </a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;