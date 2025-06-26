//All the imports for the navbar component.
import React, {useState} from 'react'
import {navLinks} from '../constants'
import { logo, menu, close, github } from '../assets'
import resume_shoaib_mohammed from '../assets/pdf/resume_shoaib_mohammed.pdf'



const Navbar = ({ setNavOpen }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  // Sync navOpen state with toggle
  React.useEffect(() => {
    setNavOpen && setNavOpen(toggle);
  }, [toggle, setNavOpen]);

  return (
    <nav className="w-full fixed top-0 z-30 bg-primary/70 backdrop-blur-lg shadow-lg rounded-b-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="text-white text-xl font-bold tracking-wide">Shoaib <span className="hidden sm:inline font-normal opacity-70">| Portfolio</span></span>
        </a>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center bg-black-100/60 px-6 py-2 rounded-full shadow-md">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`transition-all px-4 py-1 rounded-full cursor-pointer font-medium text-[16px] ${
                active === link.title
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-secondary hover:bg-primary/30 hover:text-white'
              } hover:scale-110`}
              onClick={() => setActive(link.title)}
            >
              <a
                href={`#${link.id.toLowerCase()}`}
              >
                {link.title}
              </a>
            </li>
          ))}
          {/* Socials */}
          <li className="flex gap-3 ml-4">
            <a href="https://github.com/Shoaib-2" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={github} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-shoaib-dev/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
            </a>
          </li>
        </ul>
        {/* Resume Button Desktop */}
        <a
          href={resume_shoaib_mohammed}
          download="MohammedShoaibCV.pdf"
          className="hidden md:inline-block ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-black-100 text-white font-semibold shadow-md transition-transform hover:scale-110 hover:bg-gradient-to-r hover:from-primary hover:to-black-100"
        >
          Download CV
        </a>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black-100/60 shadow-md focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setToggle(!toggle)}
        >
          <img src={toggle ? close : menu} alt="menu" className="w-7 h-7 object-contain" />
        </button>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 bg-black/80 transition-all duration-300 ${toggle ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setToggle(false)}
        ></div>
        <div
          className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-black/90 shadow-2xl border-l border-white/10 z-50 p-8 flex flex-col gap-8 transform transition-transform duration-300 ${toggle ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-xl'`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-white text-xl font-bold">Menu</span>
            <button onClick={() => setToggle(false)} aria-label="Close menu">
              <img src={close} alt="close" className="w-7 h-7" />
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`transition-all px-4 py-2 rounded-lg cursor-pointer font-medium text-lg ${
                  active === link.title
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-secondary hover:bg-primary/30 hover:text-white'
                } hover:scale-110`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                <a
                  href={`#${link.id.toLowerCase()}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
            {/* Socials for mobile */}
            <li className="flex gap-4 mt-8 justify-center">
              <a href="https://github.com/Shoaib-2" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={github} alt="GitHub" className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-shoaib-dev/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              </a>
            </li>
          </ul>
          <a
            href={resume_shoaib_mohammed}
            download="MohammedShoaibCV.pdf"
            className="mt-8 px-5 py-3 rounded-full bg-gradient-to-r from-primary to-black-100 text-white font-semibold shadow-md text-center transition-transform hover:scale-110 hover:bg-gradient-to-r hover:from-primary hover:to-black-100"
            onClick={() => setToggle(false)}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar