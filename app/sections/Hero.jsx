"use client"

import NavBar from '@app/components/NavBar'
import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {

  const { scrollY } = useScroll()

  const opacity = useTransform(
    scrollY,
    [0, 300],
    [1, 0]
  )

  useEffect(() => {
    scrollY.on("change", e => console.log(e))
  }, [scrollY])

  return (
    <motion.section
    style={{opacity}}
    className='h-screen relative grainy'>
        <div className={`w-full h-full flex justify-center items-center`}>
            <div className='flex flex-col'>
              <div className=''>
                <h1 className=' text-8xl tracking-tighter font-semibold relative'>JASON SUGIHARTO<span className='text-5xl absolute'>&#169;</span></h1>
              </div>
              <div></div>
            </div>
        </div>
    </motion.section>
  )
}

export default Hero
