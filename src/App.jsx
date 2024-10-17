import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import EyeSection from './components/Eye/EyeSection'
import Featured from './components/Featured/Featured'
import Client from './components/Client/Client'
import Project from './components/Project'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
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
  )
}

export default App
