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
            <h3>(WORKS)</h3>
            <p className='w-full font-medium leading-relaxed text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos perferendis iste neque doloremque voluptates magni officiis tempora necessitatibus autem
            </p>
          </div>
        </div>
        <div className='grid grid-cols-12 pt-12 gap-5 mt-10'>
            {/* First project*/}
            <div className='relative col-span-12 mb-20'>
              <div>
                <span className='text-[12vw]'>01.</span>
              </div>
              <div className='flex flex-col gap-8'>
                <a href="" className='flex flex-col'>
                  <div className='relative flex justify-center items-center'>
                    <img 
                    className='h-full w-full object-cover'
                    src="https://www.lifewire.com/thmb/Uqi3NYSBuoCojLl65_it-e5NmVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/keyboard-light-up-razer-gaming-2b6aa4b392184326925211f0cae4d6b9.jpg" alt="" />
                    <div className='absolute z-10 text-white text-2xl'>
                      Vid of project here
                    </div>
                  </div>
                </a>
                <div className='flex gap-8'>
                  <div className='flex flex-col'>
                    <h5 className='text-2xl'>Productivity</h5>
                    <h4 className='font-medium text-4xl'>Online Word Processor</h4>
                  </div>
                  <div className='flex items-end'>
                    <div className='border-[1px] border-third bg-third rounded-xl text-primary px-2'>2024</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second project */}
            <div className='col-span-7 flex flex-col gap-8 mb-20'>
              <a href="">
                <div className='relative flex justify-center items-center'>
                  <img src="https://preview.redd.it/pkvfv2b209i61.jpg?width=4032&format=pjpg&auto=webp&s=f8a961144201dff925b7ec7ec3d3d4d09d10a338" alt="" />
                  <div className='absolute z-10 text-white text-2xl'>
                    Vid of project here
                  </div>
                </div>
              </a>
              <div className='flex gap-8'>
                <div className='flex flex-col'>
                  <h5 className='text-2xl'>Productivity</h5>
                  <h4 className='font-medium text-4xl'>Online Word Processor</h4>
                </div>
                <div className='flex items-end'>
                  <div className='border-[1px] border-third bg-third rounded-xl text-primary px-2'>2024</div>
                </div>
              </div>
            </div>
            <div className='col-span-3 col-start-9 mb-20'>
              <div>
                <span className='text-[12vw]'>02.</span>
              </div>
            </div>

            {/* Third project */}
            <div className='col-span-3 col-start-3'>
              <div>
                <span className='text-[12vw] leading-loose'>03.</span>
              </div>
            </div>
            <div className='col-span-7'>
              <a href="">
                <div className='relative flex justify-center items-center'>
                  <img src="https://i.redd.it/xlwemhje70i81.jpg" alt="" />
                  <div className='absolute z-10 text-white text-2xl'>
                    Vid of project here
                  </div>
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Works
