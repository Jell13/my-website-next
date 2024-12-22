"use client"

import React, { useEffect, useRef, useState } from 'react'
import { LuArrowDownRight } from "react-icons/lu"
import { motion, motionValue, useInView, useScroll, useTransform } from 'framer-motion'

const About = () => {

    const aboutRef = useRef()

    const ref = useRef()
    // const inView = useInView(ref, { margin: "0px 0px 10px 0px", once: false })


    // const scaleDown = useTransform(
    //     scrollY,
    //     [6254, 7100],
    //     [1, 0.90]
    // )

    // const translate = useTransform(
    //     scrollY,
    //     [6254, 7100],
    //     [0, 100]
    // )


    const isInView = useInView(aboutRef, {margin: "-200px"})
    const [startScrollY, setStartScrollY] = useState(0);
    const [endScrollY, setEndScrollY] = useState(0);
    const scrollProgress = motionValue(0); // Use motionValue for smooth updates
  
    // Calculate dynamic scroll positions
    useEffect(() => {
      const updateScrollPositions = () => {
        const element = ref.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
  
        // Set dynamic scroll positions
        setStartScrollY(elementTop - windowHeight);
        setEndScrollY(elementTop + rect.height);
      };
  
      updateScrollPositions();
      window.addEventListener("resize", updateScrollPositions);
      return () => window.removeEventListener("resize", updateScrollPositions);
    }, [ref]);
  
    // Track scroll progress
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const progress = (scrollY - startScrollY) / (endScrollY - startScrollY);
        scrollProgress.set(Math.max(0, Math.min(1, progress))); // Clamp to [0, 1]
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [startScrollY, endScrollY, scrollProgress]);
  
    // Dynamically transform values based on scrollProgress
    const scaleDown = useTransform(scrollProgress, [0.7, 1], [1, 0.95]);
    const translate = useTransform(scrollProgress, [0.7, 1], [0, 100]);

    // Cleanup the listener when the component unmounts

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

    const words = [
        "DEVELOPER,",
        "CODER"
    ]

  return (
    <motion.section 
    ref={ref}
    // initial={{ scale: 1 }}
    // animate={{ scale: inView ? 1 : 0.96 }}
    // transition={{ duration: 0.5 }}
    style={{scale: scaleDown, y: translate}}
    id='about' className='bg-secondary text-primary border-none rounded-b-3xl'>
        <div className='border-t border-t-[#3f3f38] flex flex-col gap-y-16 md:px-10 px-6'>
            <div className='grid grid-cols-12 gap-2 mt-20'>
                <LuArrowDownRight size={100} className='text-primary col-span-1 font-thin col-start-2 hidden md:block'/>
                <motion.h2 
                ref={aboutRef}
                variants={staggerChildren}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='lg:col-span-7 lg:col-start-6 col-span-12 flex flex-col lg:text-[6rem] md:text-[4rem] text-[3rem] space-y-0 gap-0 font-medium leading-none'>
                    {words.map((w, i) => (
                        <motion.span 
                        variants={wordVariants}
                        key={i}>
                            {w}&nbsp;
                        </motion.span>
                    ))}
                </motion.h2>
            </div>
            <div className='grid grid-cols-12 gap-4 mb-10'>
                <div className='lg:col-span-4 col-span-12'>
                    <img src="./myhero.png" alt="" />
                </div>
                <div className='lg:col-span-7 lg:col-start-6 col-span-12'>
                    <div className='flex flex-col gap-y-10'>
                        <h6 className='text-2xl font-medium'>With a burning passion to help and develop ideas into reality that can help people. Solve one bug to produce a hundred more, but never giving up. Proudly say as an engineer that the absence of failure is the presence of success.</h6>
                        <div className='flex flex-col lg:flex-row gap-y-14 gap-x-28'>
                            <span className='text-lg flex h-fit text-thin_text font-medium tracking-tighter'>(ABOUT ME)</span>
                            <p className='flex w-full max-w-[48ch] text-balance text-thin_text'>
                                a passionate coder and tutor who thrives on helping others achieve their best while bringing creative ideas to life through the power of technology. Whether it's guiding a fellow learner through a tricky concept or transforming a vision into functional, impactful code, I find joy in building solutions that make a real difference. Crafting data-driven results that are as meaningful as they are efficient.
                                <br />
                                <br />
                                Problem-solving is at the heart of everything I do. I enjoy breaking down complex puzzles into elegant solutions, creating experiences that balance innovation with usability. For me, every project is an opportunity to blend logic with creativity, turning abstract ideas into tangible outcomes. Whether I’m mentoring, collaborating, or coding, my goal is always to inspire, innovate, and deliver value through thoughtful design and execution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default About
