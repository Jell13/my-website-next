"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Works = () => {

    const workRef = useRef()

    const isInView = useInView(workRef, {margin: "-100px"})

    const wordVariants = {
      hidden: {y: 50, opacity: 0},
      visible: {y: 0, opacity: 1}
    }
  
    const staggerChildren = {
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }

    const title = [
      "MY",
      "SELECTED",
      "WORKS",
      "/"
    ]

  return (
    <section id='works' className='text-primary h-screen bg-secondary border-none -mt-1'>
      <motion.div className='w-full md:px-10 flex flex-col'>
        <motion.h1 
        className='text-primary lg:text-[6rem] md:text-[4rem]'
        ref={workRef}
        variants={staggerChildren}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        >
            {title.map((l, i) => (
              <motion.span 
              className='inline-block mr-2 text-primary font-medium'
              variants={wordVariants}
              key={i}>
                {l}
                &nbsp;
              </motion.span>
            ))}
        </motion.h1>
      </motion.div>
    </section>
  )
}

export default Works
