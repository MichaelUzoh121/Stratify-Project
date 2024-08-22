import React from 'react'
import { Link } from 'react-router-dom'

function menu() {
  return (
    <div className=''>
        <ol className='flex gap-12 text-lg font-bold font-sans text-black '>
            <Link to='/' className='underline-slide'>
            <li className='cursor-pointer'>Home</li>
            {/* <li className=' hover:underline hover:decoration-red-300 hover:decoration-2 underline-offset-[6px] unde transition-all duration-[0.1s]' >Home</li> */}
            </Link>

            <Link to='/about'>
            <li className='underline-slide cursor-pointer'>About</li>
            </Link>

            <Link to='/blog'>
            <li className='underline-slide c'>Blog</li>
            </Link>

            <Link to='/element'>
            <li className='underline-slide'>Element</li>
            </Link>

            <Link to='/service'>
            <li className='underline-slide'>Services</li>
            </Link>

            <Link to='/contact'>
            <li className='underline-slide'>Contact</li>
            </Link>

        </ol>
    </div>
  )
}

export default menu