import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import EyeSection from './components/Eye/EyeSection';
import Featured from './components/Featured/Featured';
import Client from './components/Client/Client';
import Project from './components/Project';
import Footer from './components/Footer';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const App = () => {
 
  
    const scroll = new LocomotiveScroll();


  return (
    <div data-scroll-container className='w-full bg-zinc-900 text-white overflow-hidden relative'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <EyeSection />
      <Featured />
      <Client />
      <Project />
      <Footer />
    </div>
  );
};

export default App;