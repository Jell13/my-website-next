"use client"

import React, { useEffect } from 'react'
import { motion } from "framer-motion"

const Loader = ({setLoading}) => {

    const container = {
        show: {
          transition: {
            staggerChildren: 0.35,
          },
        },
      };
      
      const item = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 1.6,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
      };

      const itemMain = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.25, 0.1, 0.25, 1],
            duration: 1.2,
          },
        },
      };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false)
    //     }, 3000)
    //     return () => clearTimeout(timer)
    // })

  return (
    <motion.div className='w-full h-screen grainy flex justify-center items-center'>
      {/* <motion.div
      initial={{y: 0}}
      animate={{y: "-100%", transition: {
        duration: 1.4,
        ease: [0.6, 0.01, -0.05, 0.9] 
      }}}
      onAnimationComplete={() => setLoading(false)}
      className='w-full h-full bg-black'
      >
        &nbsp;
      </motion.div> */}

      <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className='md:w-[400px] w-[200px]'>
        <motion.div
        variants={itemMain}
        >
          <motion.img layoutId="main-image" className='object-contain' src="/myhero.png" alt=""/>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({src}) => {
    return (
        <div className=''>
            <img src={src} alt="" />
        </div>
    )
}

export default Loader
