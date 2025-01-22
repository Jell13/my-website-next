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

  return (
    <>

      <AnimatePresence>
      {loading ? (
        <motion.div>
          <Loader setLoading={setLoading}/>
        </motion.div>
      ) : (
        <>
          <ReactLenis root>
            <NavBar/>
            <Hero/>
            <Services/>
            <Works/>
            <About/>
            <Contact/>
            <Footer/>
          </ReactLenis>
        </>
      )}
      </AnimatePresence>
    </>
  )
}

export default App
