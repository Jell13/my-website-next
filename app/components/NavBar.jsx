"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NavBar = () => {

  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if(window.scrollY >= window.innerHeight){
      // setIsScrolling(true)
      console.log("The other shows up")
    }
    else{
      // setIsScrolling(false)
      console.log("Fixed shows up")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

    // const DURATION = 0.25;
    // const STAGGER = 0.025;

    // const variant = {
    //   initial: {
    //     opacity: 0,
    //   },
    //   animate: {
    //     opacity: 1,
    //     transition: {
    //       duration: 1.6,
    //       ease: "easeInOut",
    //       staggerChildren: 0.35
    //     }
    //   }
    // }



    // const links = [
    //     {
    //         id: 1,
    //         name: "Services",
    //         link: "#services"
    //     },
    //     {
    //         id: 2,
    //         name: "Works",
    //         link: "#works"
    //     }
    // ]

  return (
    // <motion.div 
    // variants={variant}
    // initial="initial"
    // animate="animate"
    // className='w-full absolute py-8 md:px-10 px-4 flex inset-x-0 z-10 justify-between items-center text-third'>
    //   <div className='flex flex-col md:flex-row md:gap-7 md:items-center'>
    //     <div className='flex items-center'>
    //     <span>&#169;</span><p className='text-lg font-semibold tracking-tighter text-secondary'>Code By Jason</p>
    //     </div>
    //     <p className='opacity-85 tracking-tighter'>(Web & Software Developer)</p>
    //   </div>
    //   <nav className='flex md:flex-row flex-col md:gap-5'>
    //     {links.map(({id, name, link}) => (
    //         <a 
    //         className='relative group'
    //         key={id} href={link}>
    //             {name}
    //             <span className='border-b-2 absolute border-third w-0 duration-300 group-hover:w-full left-0'>&nbsp;</span>
    //         </a>
    //     ))}
    //   </nav>
    // </motion.div>
    <NavBarFixed/>
  )
}

export default NavBar

function NavBarFixed () {

  const DURATION = 0.25;
  const STAGGER = 0.025;

  const variant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: "easeInOut",
        staggerChildren: 0.35
      }
    }
  }
  
  const links = [
      {
          id: 1,
          name: "Services",
          link: "#services"
      },
      {
          id: 2,
          name: "Works",
          link: "#works"
      }
  ]

  return (
    <motion.div 
    variants={variant}
    initial="initial"
    animate="animate"
    className='w-full absolute py-8 md:px-10 px-4 flex inset-x-0 z-10 justify-between items-center text-third'>
      <div className='flex flex-col md:flex-row md:gap-7 md:items-center'>
        <div className='flex items-center'>
        <span>&#169;</span><p className='text-lg font-semibold tracking-tighter text-secondary'>Code By Jason</p>
        </div>
        <p className='opacity-85 tracking-tighter'>(Web & Software Developer)</p>
      </div>
      <nav className='flex md:flex-row flex-col md:gap-5'>
        {links.map(({id, name, link}) => (
            <a 
            className='relative group'
            key={id} href={link}>
                {name}
                <span className='border-b-2 absolute border-third w-0 duration-300 group-hover:w-full left-0'>&nbsp;</span>
            </a>
        ))}
      </nav>
    </motion.div>
  )
}
