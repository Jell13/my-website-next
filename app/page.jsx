"use client"

import { useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'
import Services from './sections/Services'
import Works from './sections/Works'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  
  const[loading, setLoading] = useState(true)

  const handleAnimationComplete = () => {
    setLoading(false);
  };
  
  return (
    <>
      {loading && <Loader onComplete={(handleAnimationComplete)}/>}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <ReactLenis root>
          <NavBar/>
          <Hero/>
          <Services/>
          <Works/>
          <About/>
          <Contact/>
          <Footer/>
        </ReactLenis>
      </div>
    </>
  )
}

export default App
