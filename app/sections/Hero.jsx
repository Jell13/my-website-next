'use client'

import { useScroll, useTransform, motion, animate } from 'framer-motion'
import React, { useEffect } from 'react'

const Hero = () => {

    const { scrollY } = useScroll()

    const opacity = useTransform(
      scrollY,
      [0, 300],
      [1, 0]
    )

    const translate = useTransform(
      scrollY,
      [0, 300],
      [0, 100]
    )

    const scaleDown = useTransform(
      scrollY,
      [0, 300],
      [1, 0.95]
    )
    const DURATION = 0.4;
    const STAGGER = 0.1;

  return (
    
    <motion.section 
    id='home'
    className='h-screen z-[-1] pb-10 pt-20 md:pt-0 text-secondary font-libre'>
      <motion.div 
      style={{y: translate, scale: scaleDown, opacity: opacity}}
      className='w-full h-full flex justify-center items-center px-10'>
        <div className='w-full flex flex-col items-center justify-center gap-3 mt-20'>
            <div>
              {"JASON SUGIHARTO".split("").map((letter, i) => (
                <motion.span 
                key={i}
                initial={{y: 199, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                  duration: DURATION,
                  delay: STAGGER * i,
                  ease: "easeInOut"
                }}
                className='xl:text-[8rem] lg:text-[6rem] md:text-[5rem] sm:text-[3rem] text-[3rem] font-pop tracking-tighter mt-6 text-secondary font-medium'>
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className='w-full md:mt-10 relative grid md:grid-cols-12 grid-cols-6 justify-between items-center'>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1, transition:{
                duration: 1.3
              }}}
              className='flex col-span-4 flex-col justify-center items-center'>
                <div className='md:w-[30ch]'>
                  <p className='lg:text-lg text-md text-third tracking-tighter'>Crafting sleek, responsive front-end experiences that turn ideas into interactive, user-friendly interfaces. Every pixel matters, and every line of code drives results.</p>
                </div>
              </motion.div>
              <div className='md:col-span-4 col-span-3 flex justify-center md:items-start items-center rounded-xl'>
                <motion.img layoutId='main-image' transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.3}} className='object-contain h-[250px] bg-inherit rounded-xl' src="./myhero.png"/>
              </div>
              <motion.div 
              initial={{opacity: 0}}
              animate={{opacity: 1, transition:{
                duration: 1.3
              }}}
              className='flex flex-col items-end md:col-span-4 col-span-3 col-start- justify-end'>
                <div className=''>
                  <p className='text-fourth'>Available for work</p>
                </div>
              </motion.div>
            </div>
        </div>
      </motion.div>
    </motion.section>
    
  )
}

export default Hero
