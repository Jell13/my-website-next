import React from 'react'
import { LuArrowDownRight } from "react-icons/lu"

const About = () => {


    const words = [
        "DEVELOPER,",
        "CODER"
    ]

  return (
    <section id='about' className='bg-secondary text-primary'>
        <div className='border-t border-t-[#3f3f38] flex flex-col gap-y-24 md:px-10 px-6'>
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
            <div className='grid grid-cols-12 gap-4 mb-10'>
                <div className='col-span-4'>
                    <img src="./myhero.png" alt="" />
                </div>
                <div className='col-span-7 col-start-6'>
                    <div className='flex flex-col gap-y-10'>
                        <h6 className='text-2xl font-medium'>With a burning passion to help and develop ideas into reality that can help people. Solve one bug to produce a hundred more, but never giving up. Proudly say as an engineer that the absence of success is the presence of success.</h6>
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
    </section>
  )
}

export default About
