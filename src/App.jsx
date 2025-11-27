import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Works, Certifications, Contact, Footer } from './components';

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-background-primary">
        <Navbar setNavOpen={setNavOpen} />
        <div className={navOpen ? 'filter blur-sm transition-all duration-300' : 'transition-all duration-300'}>
          <Hero />
          <About />
          <Experience />
          <Works />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
