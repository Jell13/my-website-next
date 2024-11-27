"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Works = () => {

    const workRef = useRef()

    const isInView = useInView(workRef, {once: true, margin: "-100px"})

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
    <section id='works' className='text-primary bg-secondary border-none -mt-1'>
      <div className='w-full md:px-10 flex flex-col'>
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

        <div className='w-full text-primary mt-20 flex md:grid grid-cols-12'>
          <div className='flex gap-20 col-span-7 md:col-start-6 sm:flex-row flex-col'>
            <h3>Services</h3>
            <p className='w-full font-medium leading-relaxed text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos perferendis iste neque doloremque voluptates magni officiis tempora necessitatibus autem
            </p>
          </div>
        </div>
        <div className='grid grid-cols-12 pt-12 gap-5'>
            <div className='relative col-span-5'>
              <div className='sticky top-12 text-[22vw] text-primary leading-[0.8] font-normal'>
                <span className='relative'>0</span>
                <div className='relative'>
                  <div>
                    <span className='inline-block'>
                      1
                      .
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <aside className='relative col-span-7'>
              <div>
                <a href="">
                  <div>
                    <img src="https://www.lifewire.com/thmb/Uqi3NYSBuoCojLl65_it-e5NmVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/keyboard-light-up-razer-gaming-2b6aa4b392184326925211f0cae4d6b9.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div>
                    <img src="https://i.pinimg.com/736x/1f/5a/2a/1f5a2ae53ad9cc5c4051d34b79b12321.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div></div>
            </aside>
        </div>
      </div>
    </section>
  )
}

export default Works
