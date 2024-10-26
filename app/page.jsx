"use client"

import { useState } from 'react'
import { ReactLenis } from 'lenis/dist/lenis-react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import { AnimatePresence, motion } from 'framer-motion'
import Loader from './components/Loader'
import Services from './sections/Services'

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
          </ReactLenis>
        </>
      )}
      </AnimatePresence>
    </>
  )
}

export default App
