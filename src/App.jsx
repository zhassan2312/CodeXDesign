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
import Preloader from './components/Preloader/Preloader';

import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      lerp: 0, // Adjust this value to control the scroll speed (lower value = slower scroll)
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if ((width >= 1024 && width < 1280) || (width >= 768 && width < 1024) || (width < 768)) {
        window.location.reload();
      }
    };

    const debounceResize = debounce(handleResize, 200);

    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  return (
    <div ref={scrollRef} data-scroll-container className='w-full bg-zinc-900 text-white overflow-hidden relative'>
      <Preloader />
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