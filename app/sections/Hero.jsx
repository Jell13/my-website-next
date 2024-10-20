import NavBar from '@app/components/NavBar'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen relative'>
        <NavBar/>
        <div className='h-full w-full flex justify-center items-center'>
            <h1>Home Page</h1>
        </div>
    </div>
  )
}

export default Hero
