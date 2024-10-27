"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Works = () => {

    const workRef = useRef()

    const isInView = useInView(workRef, {margin: "-100px"})

    useEffect(() => {
        console.log(`${isInView ? "is" : "is not"} in view`)
    })

  return (
    <div id='works' className='text-primary h-screen bg-secondary border-none -mt-1'>
      <motion.div ref={workRef} className='w-full md:px-10 flex flex-col'>
        <h1>
            WORKS
        </h1>
      </motion.div>
    </div>
  )
}

export default Works
