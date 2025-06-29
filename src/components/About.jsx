import React from 'react'
import { motion } from 'framer-motion'
import {styles} from '../style'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../HigherOrderComponent'
import ParticleBG from './ParticleBG'

const ServiceCard = ({index, title, icon}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='relative xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col overflow-hidden'>
        <ParticleBG />
        <div className="relative flex items-center justify-center mb-2 z-10">
          <img 
            src={icon} 
            alt="title" 
            className="w-16 h-16 object-contain z-10 relative" 
          />
        </div>
        <h3 className='text-white text-[20px] font-bold text-center z-10 relative'>{title}</h3>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        High-impact Frontend Developer with 1.5 years of experience, proven ability to design and deploy fast, accessible, and
        scalable web applications using React, Next.js, Node.js, and TypeScript. Adept at driving UI performance, reducing load
        times, and enhancing user engagement across production-level environments. Skilled in REST API integration, cross
        functional collaboration, and Agile workflows. Committed to delivering measurable product outcomes, not just writing code.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")