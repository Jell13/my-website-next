import React, { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { LuArrowDownRight } from "react-icons/lu"

const Contact = () => {

    const contactRef = useRef(null)
    const { scrollY } = useScroll({
      target: contactRef,
      offset: ["end end", "end start"]
    })

    const isInView = useInView(contactRef, {margin: "-100px"})

    const wordVariants = {
      hidden: {y: 50, opacity: 0},
      visible: {y: 0, opacity: 1}
    }
  
    const staggerChildren = {
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }

    const translate = useTransform(
        scrollY,
        [0, 1],
        [-200, 0]
    )

    const contactMe = [
        "CONTACT",
        "ME"
    ]

    const words = [
      "LET'S",
      "MAKE",
      "IT",
      "HAPPEN"
    ]

  return (
    <motion.section
    style={{translate}}
    id='contact' className='md:px-12 py-20 px-6 h-screen mb-20 mt-20 font-libre'>
        <div className='flex flex-col'>
            <motion.h2 
            ref={contactRef}
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className='font-medium text-secondary font-prompt xl:text-[6rem] lg:text-[5rem] md:text-[4rem] text-[3rem]'>
                {contactMe.map((s,i) => (
                    <motion.span
                    key={i}
                    variants={wordVariants}>
                        {s}
                        &nbsp;
                    </motion.span>
                ))}
            </motion.h2>
            <div className='relative flex flex-col justify-center items-center h-full rounded-md bg-secondary text-primary'>
                <div className='flex h-fit flex-col justify-center items-center py-20 gap-8'>
                  <h2 className='uppercase max-w-[10ch] lg:text-[3rem] md:text-[2rem] text-[2rem] text-center font-semibold leading-tight'>
                    {words.map((w, i) => (
                      <span className='relative inline-block' key={i}>
                        {w}
                        &nbsp;
                      </span>
                    ))}
                  </h2>
                  <button className='flex justify-center items-center gap-2 rounded-xl text-lg font-medium hover:scale-90 duration-300 bg-fourth text-primary px-2 py-2'>
                    MESSAGE ME<LuArrowDownRight/>
                  </button>
                </div>
                <div></div>
            </div>
        </div>
    </motion.section>
  )
}

export default Contact
