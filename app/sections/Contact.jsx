import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from "motion/react"

const Contact = () => {

    const { scrollY } = useScroll()

    useEffect(() => {
        const unsubscribe = scrollY.onChange((latest) => {
          console.log("scrollY:", latest);
        });
    
        // Cleanup the listener when the component unmounts
        return () => unsubscribe();
      }, [scrollY]);

    const translate = useTransform(
        scrollY,
        [6300, 6700],
        [-200, 0]
    )

    const contactMe = [
        "CONTACT",
        "ME"
    ]

  return (
    <motion.section
    style={{y: translate}}
    id='contact' className='px-12 py-20 md:px-6 h-screen'>
        <div className='flex flex-col'>
            <h2 className='font-medium text-secondary lg:text-[6rem] md:text-[4rem] text-[3rem]'>
                {contactMe.map((s,i) => (
                    <span>
                        {s}
                        &nbsp;
                    </span>
                ))}
            </h2>
            <div></div>
        </div>
    </motion.section>
  )
}

export default Contact
