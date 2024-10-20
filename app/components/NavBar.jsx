import Link from 'next/link'
import React from 'react'

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
    <div className='w-full absolute py-8 px-20 flex justify-between items-center bg-gray-400'>
      <div>Logo</div>
      <nav className='flex gap-5'>
        {links.map(({id, name, link}) => (
            <a key={id} href={link}>
                {name}
            </a>
        ))}
      </nav>
    </div>
  )
}

export default NavBar
