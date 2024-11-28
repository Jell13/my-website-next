"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { delay } from 'motion'

const NavBar = () => {

  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if(window.scrollY >= window.innerHeight){
      setIsScrolling(true)
      console.log("The other shows up")
    }
    else{
      setIsScrolling(false)
      console.log("Fixed shows up")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {isScrolling ? <NavBarScroll/> : <NavBarFixed/>}
    </>
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
      },
      {
          id: 3,
          name: "About",
          link: "#about"
      }
  ]

  return (
    <motion.header 
    variants={variant}
    initial="initial"
    animate="animate"
    className='w-full absolute py-8  md:px-10 px-4 flex inset-x-0 z-10 justify-between items-center text-third'>
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
    </motion.header>
  )
}

function NavBarScroll () {

  const[active, setActive] = useState(false);
  const[linkVisible, setLinkVisible] = useState(false);

  const wordVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {
      duration: 0.8,
      ease: "easeOut",
    }}
  }

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const links = [
    {
        id: 1,
        name: "HOME",
        link: "#home"
    },
    {
        id: 2,
        name: "SERVICES",
        link: "#services"
    },
    {
        id: 3,
        name: "WORKS",
        link: "#works"
    },
    {
        id: 4,
        name: "ABOUT",
        link: "#about"
    }
]

  
  return (
    <>
      <motion.button
      initial={{scale: 0}}
      animate={{scale: 1}}
      onClick={() => setActive(!active)}
      className='text-black text-xl z-40 fixed flex flex-col justify-center items-center right-7 top-7 rounded-full size-16 bg-primary sm:hover:scale-80 scale-100'>
        <span className={`w-7 h-[2px] bg-secondary absolute rounded-full ${active ? "translate-y-0 rotate-45": "-translate-y-1 rotate-0"} duration-300`} ></span>
        <span className={`w-7 h-[2px] bg-secondary absolute rounded-full ${active ? "translate-y-0 -rotate-45": "translate-y-1 rotate-0"} duration-300`}></span>
      </motion.button>
      {active && 
      <motion.div
      className='w-full h-screen fixed top-0 left-0 z-30 justify-end duration-300'>
        <div className='w-full h-screen flex justify-end'>
          <motion.div 
          initial={{x: active ? 500 : 0}}
          animate={{x: active ? 0: 500, transition: {duration: 0.8, ease:[0.76, 0, 0.24, 1], delay: 0.05}}}
          exit={{x: active && 0}}
          className='w-[36em] lg:max-w-3xl flex flex-col justify-end bg-fourth'>
            <div></div>
            <motion.nav 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className='relative w-full h-full px-10 leading-tight flex flex-col mt-20'>
              {links.map(links => (
                <motion.li 
                variants={wordVariants}
                key={links.id} className='text-[4rem] text-primary font-medium group relative flex w-fit gap-4 cursor-pointer items-center'>
                  <span className='w-3 h-3 absolute invisible opacity-0 bg-primary rounded-full group-hover:visible group-hover:opacity-100 group-hover:scale-100 scale-0 duration-300'></span>
                  <a href={links.link} onClick={() => setActive(false)} className='group-hover:translate-x-7 duration-700 ease-out'>
                    {links.name}
                  </a>
                </motion.li>
              ))}
            </motion.nav>
          </motion.div>
        </div>
      </motion.div>}
    </>
  )
}
