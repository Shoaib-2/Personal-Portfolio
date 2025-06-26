import React, { useState } from 'react';
import {BrowserRouter} from 'react-router-dom'
import{About, Contact, Experience, Navbar, Works, StarsCanvas} from './components'
import Footer from './components/Footer'

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar setNavOpen={setNavOpen} />
        </div>
        <div className={navOpen ? 'filter blur-md transition-all duration-300' : 'transition-all duration-300'}>
          <About/>
          <Experience/>
          <Works/>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
