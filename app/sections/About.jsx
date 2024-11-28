import React from 'react'
import { LuArrowDownRight } from "react-icons/lu"

const About = () => {


    const words = [
        "DEVELOPER,",
        "CODER"
    ]

  return (
    <section id='about' className='bg-secondary text-primary'>
        <div className='border-t border-t-[#3f3f38] flex flex-col gap-y-24'>
            <div className='grid grid-cols-12 gap-4 mt-20'>
                <LuArrowDownRight size={100} className='text-primary col-span-1 font-thin col-start-2'/>
                <h2 className='lg:col-span-7 lg:col-start-6 flex flex-col lg:text-[6rem] space-y-0 gap-0 font-medium leading-none'>
                    {words.map((w, i) => (
                        <span key={i}>
                            {w}&nbsp;
                        </span>
                    ))}
                </h2>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-4'>
                    <img src="./myhero.png" alt="" />
                </div>
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About
