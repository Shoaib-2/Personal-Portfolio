import React from 'react';

function Footer() {
  return (
    <div className='bg-primary/70 backdrop-blur-lg border-t border-white/10 text-white-100 py-4'>
      <div className='max-w-3xl mx-auto text-center'>
        <p className='text-secondary text-[16px] font-medium mb-1'>
          &copy; {new Date().getFullYear()} Shoaib's Portfolio. All rights reserved.<br />
          Developed by Mohammed Shoaib.
        </p>
      </div>
    </div>
  );
}

export default Footer;
