import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='bg-primary text-white-100 py-4'>
      <div className='max-w-3xl mx-auto text-center'>
        <p className='text-secondary text-[18px] font-bold mb-2'>Connect with Me! I Promise I’m Funnier Online!</p>
        <div className='flex justify-center space-x-4'>
          <a 
            href='https://github.com/Shoaib-2' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='flex items-center text-white-100 hover:text-secondary transition duration-200'
          >
            <FaGithub className='mr-1' />
            GitHub
          </a>
          <a 
            href='https://www.linkedin.com/in/mohammed-shoaib-dev/' 
            target='_blank' 
            rel='noopener noreferrer' 
            className='flex items-center text-white-100 hover:text-secondary transition duration-200'
          >
            <FaLinkedin className='mr-1' />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
