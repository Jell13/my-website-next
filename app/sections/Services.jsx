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
    <section id="services" className='rounded-3xl bg-secondary text-primary'>
      <div className='flex flex-col z-10 mb-8 md:px-10 py-20'>
        <motion.h2 
        ref={aboutRef}
        variants={staggerChildren} 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='text-primary lg:text-[6rem] md:text-[4rem]'>
          {title.map((word, i) => (
            <motion.span 
            key={i}
            variants={wordVariants}
            className='inline-block mr-2 text-primary font-medium'
            >
              {word}
              &nbsp;
            </motion.span>
          ))}
        </motion.h2>
        <div className='w-full text-primary mt-20 grid grid-cols-12 mb-5'>
          <div className='flex col-span-7 md:col-start-6 sm:flex-row'>
            <h3>Services</h3>
            <p className='ml-10 mt-2 w-full font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos perferendis iste neque doloremque voluptates magni officiis tempora necessitatibus autem, repellendus officia ex, harum deleniti corporis ipsa quia, praesentium consequatur.
            </p>
          </div>
        </div>
        <div className='w-full pt-10'>
          <div className='mt-12 flex flex-col pt-6 justify-between'>
             {/* First Service */}
             <div className='sticky top-[20vh] z-0 border-t border-t-[#3f3f38] mb-[17.25em] bg-secondary'>
                <div className='flex md:grid grid-cols-12 items-center justify-between pt-10'>
                  <span className='col-span-2 text-4xl font-medium'>
                    (01)
                  </span>
                  <h3 className='col-span-6 col-start-6 text-5xl font-medium'>
                    Web Development
                  </h3>
                </div>
                <div className='md:grid flex grid-cols-12'>
                  <div className='w-full flex flex-col col-span-7 col-start-6 pt-10'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio ratione, quas aspernatur repudiandae delectus, adipisci sapiente voluptatibus qui reprehenderit officiis ex, minima sit velit aut quae veniam possimus ea?</p>
                    <div className='flex flex-col pt-6 divide-y divide-[#3f3f38]'>
                      <span>NextJs</span>
                      <span>TailwindCSS</span>
                      <span>React</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Services */}
              <div className='sticky top-[calc(20vh+5.75em)] border-t z-10 border-t-[#3f3f38] mb-[17.25em] bg-secondary'>
                <div className='flex md:grid grid-cols-12 items-center justify-between pt-10'>
                  <span className='col-span-2 text-4xl font-medium'>
                    (01)
                  </span>
                  <h3 className='col-span-6 col-start-6 text-5xl font-medium'>
                    Web Development
                  </h3>
                </div>
                <div className='md:grid flex grid-cols-12'>
                  <div className='w-full flex flex-col col-span-7 col-start-6 pt-10'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora odio ratione, quas aspernatur repudiandae delectus, adipisci sapiente voluptatibus qui reprehenderit officiis ex, minima sit velit aut quae veniam possimus ea?</p>
                    <div className='flex flex-col pt-6 divide-y divide-[#3f3f38]'>
                      <span>NextJs</span>
                      <span>TailwindCSS</span>
                      <span>React</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
