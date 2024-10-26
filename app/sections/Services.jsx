"use client"

import { useScroll, useTransform, motion } from 'framer-motion'
import { span } from 'framer-motion/client'
import React, { useRef } from 'react'

const Services = () => {

  const aboutRef = useRef()

  const title = [
    "WHAT",
    "I",
    "DO"
  ]


  return (
    <section id="services" className='h-screen text-white '>
      <div className='h-[200%] bg-black rounded-3xl z-10 mb-8 md:px-10 py-20'>
        <h1 ref={aboutRef} className='text-white lg:text-[7rem] md:text-[5rem] mb-8'>
          {title.map((word, i) => (
            <span>
              {word}
              &nbsp;
            </span>
            
          ))}
        </h1>
        
      </div>
    </section>
  )
}

export default Services
