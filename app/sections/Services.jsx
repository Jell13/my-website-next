"use client"

import { useScroll, useTransform, motion, inView, useInView } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useEffect, useRef } from 'react'

const Services = () => {

  const aboutRef = useRef()

  const isInView = useInView(aboutRef, {once: true, margin: "-100px"})

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

  useEffect(() => {
    console.log(isInView ? "it is in view" : "it is not in view")
  }, [isInView])

  const title = [
    "WHAT",
    "I",
    "DO",
    "/"
  ]


  return (
    <section id="services" className='h-screen text-primary'>
      <div className='h-[200%] bg-black rounded-3xl z-10 mb-8 md:px-10 py-20'>
        <motion.h1 
        ref={aboutRef}
        variants={staggerChildren} 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='text-primary lg:text-[7rem] md:text-[5rem]'>
          {title.map((word, i) => (
            <motion.span 
            key={i}
            variants={wordVariants}
            className='inline-block mr-2 text-primary'
            >
              {word}
              &nbsp;
            </motion.span>
          ))}
        </motion.h1>
        
      </div>
    </section>
  )
}

export default Services
