import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const NavBar = () => {

    const links = [
        {
            id: 1,
            name: "About",
            link: "#about"
        },
        {
            id: 2,
            name: "Project",
            link: "#project"
        }
    ]
  return (
    <div className='w-full absolute py-8 px-10 flex inset-x-0 z-10 justify-between items-center'>
      <div className='flex flex-col md:flex-row md:gap-7 items-center'>
        <div className='flex'>
          <p className='text-lg font-semibold'>By Jason</p><span>&#169;</span>
        </div>
        <p className='opacity-85 tracking-tight'>(Web & Software Developer)</p>
      </div>
      <nav className='flex gap-5'>
        {links.map(({id, name, link}) => (
            <motion.a 
            whileHover={{ scale: 1.1 }}
            key={id} href={link}>
                {name}
            </motion.a>
        ))}
      </nav>
    </div>
  )
}

export default NavBar
