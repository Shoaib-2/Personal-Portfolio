import {BrowserRouter} from 'react-router-dom'
import{About, Contact, Experience, Navbar, Tech, Works, StarsCanvas} from './components'
import Footer from './components/Footer'
// import QRCodeComponent from './components/QRcode'
// import { isMobile } from './utils/isMobile';
// import { useState, useEffect } from 'react';

const App = () => {
  // const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   if (!isMobile()) {
  //     setShowContent(true);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
        {/* <QRCodeComponent /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
