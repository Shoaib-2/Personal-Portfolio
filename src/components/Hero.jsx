import { motion } from 'framer-motion';
import { motionVariants } from '../design-system';
import BackgroundCanvas from './BackgroundCanvas';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [greetingText, setGreetingText] = useState('');
  const [taglineText, setTaglineText] = useState('');
  const [descText, setDescText] = useState('');
  
  const greeting = 'Hi there, I am';
  const tagline = 'A Frontend Engineer crafting fast, accessible, and impactful web experiences.';
  const description = 'I build modern web applications with React, Next.js, and TypeScript. Focused on performance, clean code, and creating experiences that matter.';
  
  useEffect(() => {
    let greetingIndex = 0;
    const greetingTimer = setInterval(() => {
      if (greetingIndex <= greeting.length) {
        setGreetingText(greeting.slice(0, greetingIndex));
        greetingIndex++;
      } else {
        clearInterval(greetingTimer);
        // Start tagline after greeting
        let taglineIndex = 0;
        const taglineTimer = setInterval(() => {
          if (taglineIndex <= tagline.length) {
            setTaglineText(tagline.slice(0, taglineIndex));
            taglineIndex++;
          } else {
            clearInterval(taglineTimer);
            // Start description after tagline
            let descIndex = 0;
            const descTimer = setInterval(() => {
              if (descIndex <= description.length) {
                setDescText(description.slice(0, descIndex));
                descIndex++;
              } else {
                clearInterval(descTimer);
              }
            }, 30);
          }
        }, 40);
      }
    }, 80);
    
    return () => clearInterval(greetingTimer);
  }, []);
  
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background-primary">
      {/* Three.js Animated Background */}
      <BackgroundCanvas />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary opacity-50" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-16 flex items-center justify-center min-h-screen">
        <motion.div
          variants={motionVariants.fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-4 w-full max-w-4xl"
        >
          {/* Greeting with Typewriter */}
          <motion.p 
            className="text-text-secondary text-lg sm:text-xl font-medium min-h-[1.75rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {greetingText}{greetingText.length < greeting.length && <span className="animate-pulse ml-1 text-accent-primary">|</span>}
          </motion.p>

          {/* Name with gradient */}
          <h1 className="text-responsive-h1 font-black gradient-text leading-tight">
            Shoaib Mohammed
          </h1>

          {/* Tagline with Typewriter Effect */}
          <motion.p
            className="text-text-secondary text-xl sm:text-2xl md:text-3xl font-light max-w-3xl min-h-[5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {taglineText}{taglineText.length < tagline.length && greetingText.length === greeting.length && <span className="animate-pulse ml-1 text-accent-primary">|</span>}
          </motion.p>

          {/* Description with Typewriter */}
          <motion.p
            className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed text-left min-h-[4rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {descText}{descText.length < description.length && taglineText.length === tagline.length && <span className="animate-pulse ml-1 text-accent-primary">|</span>}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
              className="btn-primary px-8 py-4 text-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-outline px-8 py-4 text-lg"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
