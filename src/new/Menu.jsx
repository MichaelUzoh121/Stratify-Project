import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className=''>
        <ol className='flex gap-12 text-lg font-bold font-sans text-black '>
            <Link to='/'>
            <li className='transition-all duration-[0.7s] hover:text-red-700'>Home</li>
            </Link>

            <Link to='/about'>
            <li className='transition-all duration-[0.7s] hover:text-red-700'>About</li>
            </Link>

            <Link to='/blog'>
            <li className='transition-all duration-[0.7s] hover:text-red-700'>Blog</li>
            </Link>

            <Link to='/element'>
            <li className='transition-all duration-[0.7s] hover:text-red-700'>Element</li>
            </Link>

            <Link to='/service'>
            <li className='transition-all duration-[0.7s] hover:text-red-700'>Services</li>
            </Link>

            <Link to='/contact'>
            <li className='transition-all duration-[0.7s] hover:text-red-700'>Contact</li>
            </Link>

        </ol>
    </div>
  )
}

export default Menu