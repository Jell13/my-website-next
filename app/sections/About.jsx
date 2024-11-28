import React from 'react'
import { LuArrowDownRight } from "react-icons/lu"

const About = () => {


    const words = [
        "DEVELOPER",
        "CODER"
    ]

  return (
    <section id='about' className='bg-secondary text-primary'>
        <div className='border-t border-t-[#3f3f38] flex flex-col'>
            <div className='grid grid-cols-12 gap-4'>
                <LuArrowDownRight size={100} className='text-primary col-span-1 font-thin col-start-2'/>
                <h2 className='lg:col-span-7 lg:col-start-6'>
                    
                </h2>
            </div>
        </div>
    </section>
  )
}

export default About
